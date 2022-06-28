import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerDetailsPageRoutingModule } from './passenger-details-routing.module';
import { PassengerDetailsPage } from './passenger-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PassengerDetailsPageRoutingModule
  ],
  declarations: [PassengerDetailsPage],
  providers: [],
  exports: []
})
export class PassengerDetailsPageModule { }
