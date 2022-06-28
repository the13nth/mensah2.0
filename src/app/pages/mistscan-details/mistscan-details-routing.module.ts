import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MistscanDetailsPage } from './mistscan-details.page';

const routes: Routes = [
  {
    path: '',
    component: MistscanDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MistscanDetailsPageRoutingModule {}