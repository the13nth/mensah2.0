import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultDetailsPageRoutingModule } from './result-details-routing.module';
import { ResultDetailsPage } from './result-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResultDetailsPageRoutingModule
  ],
  declarations: [ResultDetailsPage],
  providers: [],
  exports: []
})
export class ResultDetailsPageModule { }
