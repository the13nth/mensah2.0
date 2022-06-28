import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SellerPageRoutingModule } from './seller-routing.module';
import { SellerPage } from './seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerPageRoutingModule
  ],
  declarations: [SellerPage],
  providers: [],
  exports: []
})
export class SellerPageModule { }
