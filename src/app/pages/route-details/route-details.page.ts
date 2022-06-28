import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouteService } from './../../services/route.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-details',
  templateUrl: 'route-details.page.html',
  styleUrls: ['route-details.page.scss'],
})
export class RouteDetailsPage implements OnInit {
  routeForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private routeService: RouteService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.routeForm = this.fb.group({ 
      route_id: '', 
      servicing_company: '', 
      route_name: '', 
      route_buses: '', 
      route_bus_stops: '', 
      route_coords_lat: '', 
      route_coords_long: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.routeService.getRouteById(this.id).subscribe(res => {
        this.routeForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.routeService.updateRouteById(this.id, this.routeForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.routeService.addRoute(this.routeForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.routeService.deleteRouteById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
