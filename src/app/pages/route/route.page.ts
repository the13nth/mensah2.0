import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteService } from './../../services/route.service';
import { Route } from './../../services/route';

@Component({
  selector: 'app-route',
  templateUrl: 'route.page.html',
  styleUrls: ['route.page.scss'],
})
export class RoutePage implements OnInit {
  items: Observable<Route[]>;

  constructor(private routeService: RouteService) {
      
  }
  ngOnInit() {
    this.items = this.routeService.getRoutes();
  }

}