import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParceiroPage } from './parceiro.page';

const routes: Routes = [
  {
    path: '',
    component: ParceiroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParceiroPageRoutingModule { }
