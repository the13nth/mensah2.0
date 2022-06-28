import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PassengerService } from './../../services/passenger.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  templateUrl: 'passenger-details.page.html',
  styleUrls: ['passenger-details.page.scss'],
})
export class PassengerDetailsPage implements OnInit {
  passengerForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private passengerService: PassengerService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.passengerForm = this.fb.group({ 
      passenger_id: '', 
      p_route_sub: '', 
      p_loc_watch: '', 
      Passenger_lat: '', 
      Passenger_long: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.passengerService.getPassengerById(this.id).subscribe(res => {
        this.passengerForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.passengerService.updatePassengerById(this.id, this.passengerForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.passengerService.addPassenger(this.passengerForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.passengerService.deletePassengerById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
