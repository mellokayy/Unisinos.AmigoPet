import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatoPage } from './contato.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContatoPageRoutingModule } from './contato-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContatoPageRoutingModule
  ],
  declarations: [ContatoPage]
})
export class ContatoPageModule { }
