import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixCartePage } from './choix-carte.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixCartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixCartePageRoutingModule {}
