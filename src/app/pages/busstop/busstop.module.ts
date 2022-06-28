import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BusstopPageRoutingModule } from './busstop-routing.module';
import { BusstopPage } from './busstop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusstopPageRoutingModule
  ],
  declarations: [BusstopPage],
  providers: [],
  exports: []
})
export class BusstopPageModule { }
