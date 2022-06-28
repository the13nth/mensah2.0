import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MistPage } from './mist.page';

const routes: Routes = [
  {
    path: '',
    component: MistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MistPageRoutingModule {}