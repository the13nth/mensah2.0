import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusService } from './../../services/bus.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bus-details',
  templateUrl: 'bus-details.page.html',
  styleUrls: ['bus-details.page.scss'],
})
export class BusDetailsPage implements OnInit {
  busForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private busService: BusService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.busForm = this.fb.group({ 
      bus_id: '', 
      bus_company: '', 
      bus_plate: '', 
      bus_route: '', 
      bus_location_lat: '', 
      bus_location_long: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.busService.getBusById(this.id).subscribe(res => {
        this.busForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.busService.updateBusById(this.id, this.busForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.busService.addBus(this.busForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.busService.deleteBusById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
