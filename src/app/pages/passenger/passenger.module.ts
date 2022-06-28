import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PassengerPageRoutingModule } from './passenger-routing.module';
import { PassengerPage } from './passenger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerPageRoutingModule
  ],
  declarations: [PassengerPage],
  providers: [],
  exports: []
})
export class PassengerPageModule { }
