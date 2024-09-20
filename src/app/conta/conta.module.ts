import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContaPage } from './conta.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContaPageRoutingModule } from './conta-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContaPageRoutingModule
  ],
  declarations: [ContaPage]
})
export class ContaPageModule { }
