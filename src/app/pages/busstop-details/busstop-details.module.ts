import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusstopDetailsPageRoutingModule } from './busstop-details-routing.module';
import { BusstopDetailsPage } from './busstop-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BusstopDetailsPageRoutingModule
  ],
  declarations: [BusstopDetailsPage],
  providers: [],
  exports: []
})
export class BusstopDetailsPageModule { }
