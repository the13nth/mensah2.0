import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BusPageRoutingModule } from './bus-routing.module';
import { BusPage } from './bus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusPageRoutingModule
  ],
  declarations: [BusPage],
  providers: [],
  exports: []
})
export class BusPageModule { }
