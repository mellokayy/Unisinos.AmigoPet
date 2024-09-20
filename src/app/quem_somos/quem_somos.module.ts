import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuemSomosPage } from './quem_somos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { QuemSomosPageRoutingModule } from './quem_somos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    QuemSomosPageRoutingModule
  ],
  declarations: [QuemSomosPage]
})
export class QuemSomosPageModule { }
