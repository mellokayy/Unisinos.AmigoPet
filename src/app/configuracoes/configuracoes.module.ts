import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfiguracoesPage } from './configuracoes.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConfiguracoesPageRoutingModule } from './configuracoes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConfiguracoesPageRoutingModule
  ],
  declarations: [ConfiguracoesPage]
})
export class ConfiguracoesPageModule { }
