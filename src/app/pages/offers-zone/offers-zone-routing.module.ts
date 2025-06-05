import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersZonePage } from './offers-zone.page';

const routes: Routes = [
  {
    path: '',
    component: OffersZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersZonePageRoutingModule {}
