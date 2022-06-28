import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          
          { path: 'routes', loadChildren: () => import('../route/route.module').then( m => m.RoutePageModule)},
          { path: 'routes/:id', loadChildren: () => import('../route-details/route-details.module').then( m => m.RouteDetailsPageModule)},
          { path: 'passengers', loadChildren: () => import('../passenger/passenger.module').then( m => m.PassengerPageModule)},
          { path: 'passengers/:id', loadChildren: () => import('../passenger-details/passenger-details.module').then( m => m.PassengerDetailsPageModule)},
          { path: 'buses', loadChildren: () => import('../bus/bus.module').then( m => m.BusPageModule)},
          { path: 'buses/:id', loadChildren: () => import('../bus-details/bus-details.module').then( m => m.BusDetailsPageModule)},
          { path: 'busstops', loadChildren: () => import('../busstop/busstop.module').then( m => m.BusstopPageModule)},
          { path: 'busstops/:id', loadChildren: () => import('../busstop-details/busstop-details.module').then( m => m.BusstopDetailsPageModule)},
          { path: 'users', loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)},
          { path: 'users/:id', loadChildren: () => import('../user-details/user-details.module').then( m => m.UserDetailsPageModule)},
          { path: 'activitieses', loadChildren: () => import('../activities/activities.module').then( m => m.ActivitiesPageModule)},
          { path: 'activitieses/:id', loadChildren: () => import('../activities-details/activities-details.module').then( m => m.ActivitiesDetailsPageModule)},
          { path: 'scans', loadChildren: () => import('../scan/scan.module').then( m => m.ScanPageModule)},
          { path: 'scans/:id', loadChildren: () => import('../scan-details/scan-details.module').then( m => m.ScanDetailsPageModule)},
          { path: 'results', loadChildren: () => import('../result/result.module').then( m => m.ResultPageModule)},
          { path: 'results/:id', loadChildren: () => import('../result-details/result-details.module').then( m => m.ResultDetailsPageModule)},
          { path: 'sellers', loadChildren: () => import('../seller/seller.module').then( m => m.SellerPageModule)},
          { path: 'sellers/:id', loadChildren: () => import('../seller-details/seller-details.module').then( m => m.SellerDetailsPageModule)},
          { path: 'mistscans', loadChildren: () => import('../mistscan/mistscan.module').then( m => m.MistscanPageModule)},
          { path: 'mistscans/:id', loadChildren: () => import('../mistscan-details/mistscan-details.module').then( m => m.MistscanDetailsPageModule)},
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
