import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerDetailsPageRoutingModule } from './seller-details-routing.module';
import { SellerDetailsPage } from './seller-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SellerDetailsPageRoutingModule
  ],
  declarations: [SellerDetailsPage],
  providers: [],
  exports: []
})
export class SellerDetailsPageModule { }
