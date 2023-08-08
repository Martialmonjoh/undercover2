import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuerPageRoutingModule } from './continuer-routing.module';

import { ContinuerPage } from './continuer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuerPageRoutingModule
  ],
  declarations: [ContinuerPage]
})
export class ContinuerPageModule {}
