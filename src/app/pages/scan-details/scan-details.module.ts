import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScanDetailsPageRoutingModule } from './scan-details-routing.module';
import { ScanDetailsPage } from './scan-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ScanDetailsPageRoutingModule
  ],
  declarations: [ScanDetailsPage],
  providers: [],
  exports: []
})
export class ScanDetailsPageModule { }
