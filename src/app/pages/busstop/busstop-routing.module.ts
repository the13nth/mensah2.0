import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusstopPage } from './busstop.page';

const routes: Routes = [
  {
    path: '',
    component: BusstopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusstopPageRoutingModule {}