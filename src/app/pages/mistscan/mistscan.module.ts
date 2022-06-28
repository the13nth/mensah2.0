import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MistscanPageRoutingModule } from './mistscan-routing.module';
import { MistscanPage } from './mistscan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MistscanPageRoutingModule
  ],
  declarations: [MistscanPage],
  providers: [],
  exports: []
})
export class MistscanPageModule { }
