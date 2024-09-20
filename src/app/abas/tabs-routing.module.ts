import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'pets',
        loadChildren: () => import('../pets/pets.module').then(m => m.PetsPageModule)
      },
      {
        path: 'contato',
        loadChildren: () => import('../contato/contato.module').then(m => m.ContatoPageModule)
      },
      {
        path: 'detalhe-pet/:id',
        loadChildren: () => import('../detalhe-pet/detalhe-pet.module').then(m => m.DetalhePetModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
