import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MistPageRoutingModule } from './mist-routing.module';
import { MistPage } from './mist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MistPageRoutingModule
  ],
  declarations: [MistPage],
  providers: [],
  exports: []
})
export class MistPageModule { }
