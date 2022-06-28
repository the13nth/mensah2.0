import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteDetailsPageRoutingModule } from './route-details-routing.module';
import { RouteDetailsPage } from './route-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouteDetailsPageRoutingModule
  ],
  declarations: [RouteDetailsPage],
  providers: [],
  exports: []
})
export class RouteDetailsPageModule { }
