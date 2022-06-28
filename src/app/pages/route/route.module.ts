import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RoutePageRoutingModule } from './route-routing.module';
import { RoutePage } from './route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutePageRoutingModule
  ],
  declarations: [RoutePage],
  providers: [],
  exports: []
})
export class RoutePageModule { }
