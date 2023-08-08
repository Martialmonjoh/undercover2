import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuezPageRoutingModule } from './continuez-routing.module';

import { ContinuezPage } from './continuez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuezPageRoutingModule
  ],
  declarations: [ContinuezPage]
})
export class ContinuezPageModule {}
