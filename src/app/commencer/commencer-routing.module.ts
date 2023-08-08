import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommencerPage } from './commencer.page';

const routes: Routes = [
  {
    path: '',
    component: CommencerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommencerPageRoutingModule {}
