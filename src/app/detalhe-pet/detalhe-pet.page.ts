// src/app/details/details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe-pet.page.html',
  styleUrls: ['./detalhe-pet.page.scss'],
})
export class DetalhePetPage {

  petId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: any) => {
      this.petId = params.get('id');
    })
   }

}
