import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanDetailsPage } from './scan-details.page';

const routes: Routes = [
  {
    path: '',
    component: ScanDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanDetailsPageRoutingModule {}