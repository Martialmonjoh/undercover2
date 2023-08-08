import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'missions',
    loadChildren: () => import('./missions/missions.module').then( m => m.MissionsPageModule)
  },
  {
    path: 'joueurs',
    loadChildren: () => import('./joueurs/joueurs.module').then( m => m.JoueursPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'continuer',
    loadChildren: () => import('./continuer/continuer.module').then( m => m.ContinuerPageModule)
  },
  {
    path: 'continuez',
    loadChildren: () => import('./continuez/continuez.module').then( m => m.ContinuezPageModule)
  },
  {
    path: 'commencer',
    loadChildren: () => import('./commencer/commencer.module').then( m => m.CommencerPageModule)
  },
  {
    path: 'choix-carte',
    loadChildren: () => import('./choix-carte/choix-carte.module').then( m => m.ChoixCartePageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
