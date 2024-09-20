import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParceiroPage } from './parceiro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ParceiroPageRoutingModule } from './parceiro-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ParceiroPageRoutingModule
  ],
  declarations: [ParceiroPage]
})
export class ParceiroPageModule { }
