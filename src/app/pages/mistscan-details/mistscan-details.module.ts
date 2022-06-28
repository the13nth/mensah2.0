import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MistscanDetailsPageRoutingModule } from './mistscan-details-routing.module';
import { MistscanDetailsPage } from './mistscan-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MistscanDetailsPageRoutingModule
  ],
  declarations: [MistscanDetailsPage],
  providers: [],
  exports: []
})
export class MistscanDetailsPageModule { }
