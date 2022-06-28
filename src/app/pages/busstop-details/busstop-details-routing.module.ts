import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusstopDetailsPage } from './busstop-details.page';

const routes: Routes = [
  {
    path: '',
    component: BusstopDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusstopDetailsPageRoutingModule {}