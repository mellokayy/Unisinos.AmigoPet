import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetsPage } from './pets.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PetsPageRoutingModule } from './pets-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PetsPageRoutingModule
  ],
  declarations: [PetsPage]
})
export class PetsPageModule { }
