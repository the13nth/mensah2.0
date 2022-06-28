import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusDetailsPageRoutingModule } from './bus-details-routing.module';
import { BusDetailsPage } from './bus-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BusDetailsPageRoutingModule
  ],
  declarations: [BusDetailsPage],
  providers: [],
  exports: []
})
export class BusDetailsPageModule { }
