import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PassengerService } from './../../services/passenger.service';
import { Passenger } from './../../services/passenger';

@Component({
  selector: 'app-passenger',
  templateUrl: 'passenger.page.html',
  styleUrls: ['passenger.page.scss'],
})
export class PassengerPage implements OnInit {
  items: Observable<Passenger[]>;

  constructor(private passengerService: PassengerService) {
      
  }
  ngOnInit() {
    this.items = this.passengerService.getPassengers();
  }

}