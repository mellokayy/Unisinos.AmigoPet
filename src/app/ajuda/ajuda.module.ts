import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AjudaPage } from './ajuda.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AjudaPageRoutingModule } from './ajuda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AjudaPageRoutingModule
  ],
  declarations: [AjudaPage]
})
export class AjudaPageModule { }
