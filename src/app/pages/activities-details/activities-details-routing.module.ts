import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesDetailsPage } from './activities-details.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesDetailsPageRoutingModule {}