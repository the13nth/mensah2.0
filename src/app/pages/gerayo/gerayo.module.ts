import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GerayoPageRoutingModule } from './gerayo-routing.module';
import { GerayoPage } from './gerayo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerayoPageRoutingModule
  ],
  declarations: [GerayoPage],
  providers: [],
  exports: []
})
export class GerayoPageModule { }
