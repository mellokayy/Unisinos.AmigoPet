import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalhePetPage } from './detalhe-pet.page';
import { DetalhePetRoutingModule } from './detalhe-pet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePetRoutingModule
  ],
  declarations: [DetalhePetPage]
})
export class DetalhePetModule {}
