import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoueursPageRoutingModule } from './joueurs-routing.module';

import { JoueursPage } from './joueurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoueursPageRoutingModule
  ],
  declarations: [JoueursPage]
})
export class JoueursPageModule {}
