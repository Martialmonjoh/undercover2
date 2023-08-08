import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuerPage } from './continuer.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuerPageRoutingModule {}
