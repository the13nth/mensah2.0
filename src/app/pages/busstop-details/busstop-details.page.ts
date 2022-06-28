import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusstopService } from './../../services/busstop.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busstop-details',
  templateUrl: 'busstop-details.page.html',
  styleUrls: ['busstop-details.page.scss'],
})
export class BusstopDetailsPage implements OnInit {
  busstopForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private busstopService: BusstopService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.busstopForm = this.fb.group({ 
      bus_stop_id: '', 
      route_id: '', 
      bus_stop_loc_watch: '', 
      passengers_sub: '', 
      live_passenger_count: '', 
      bus_stop_lat: '', 
      bus_stop_long: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.busstopService.getBusstopById(this.id).subscribe(res => {
        this.busstopForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.busstopService.updateBusstopById(this.id, this.busstopForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.busstopService.addBusstop(this.busstopForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.busstopService.deleteBusstopById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
