import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommencerPageRoutingModule } from './commencer-routing.module';

import { CommencerPage } from './commencer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommencerPageRoutingModule
  ],
  declarations: [CommencerPage]
})
export class CommencerPageModule {}
