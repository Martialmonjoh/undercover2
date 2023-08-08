import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuezPage } from './continuez.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuezPageRoutingModule {}
