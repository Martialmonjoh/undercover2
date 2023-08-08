import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixCartePageRoutingModule } from './choix-carte-routing.module';

import { ChoixCartePage } from './choix-carte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixCartePageRoutingModule
  ],
  declarations: [ChoixCartePage]
})
export class ChoixCartePageModule {}
