import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoueursPage } from './joueurs.page';

const routes: Routes = [
  {
    path: '',
    component: JoueursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoueursPageRoutingModule {}
