import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivitiesDetailsPageRoutingModule } from './activities-details-routing.module';
import { ActivitiesDetailsPage } from './activities-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ActivitiesDetailsPageRoutingModule
  ],
  declarations: [ActivitiesDetailsPage],
  providers: [],
  exports: []
})
export class ActivitiesDetailsPageModule { }
