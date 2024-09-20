import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosPage } from './quem_somos.page';

const routes: Routes = [
  {
    path: '',
    component: QuemSomosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuemSomosPageRoutingModule { }
