import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersZonePageRoutingModule } from './offers-zone-routing.module';

import { OffersZonePage } from './offers-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersZonePageRoutingModule
  ],
  declarations: [OffersZonePage]
})
export class OffersZonePageModule {}
