// src/app/details/details-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhePetPage } from './detalhe-pet.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhePetRoutingModule {}
