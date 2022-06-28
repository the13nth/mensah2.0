import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusService } from './../../services/bus.service';
import { Bus } from './../../services/bus';

@Component({
  selector: 'app-bus',
  templateUrl: 'bus.page.html',
  styleUrls: ['bus.page.scss'],
})
export class BusPage implements OnInit {
  items: Observable<Bus[]>;

  constructor(private busService: BusService) {
      
  }
  ngOnInit() {
    this.items = this.busService.getBuss();
  }

}