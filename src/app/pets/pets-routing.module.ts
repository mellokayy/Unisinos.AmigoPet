import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsPage } from './pets.page';

const routes: Routes = [
  {
    path: '',
    component: PetsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsPageRoutingModule { }
