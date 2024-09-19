// src/app/details/details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet, Porte } from 'src/model/pet.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe-pet.page.html',
  styleUrls: ['./detalhe-pet.page.scss'],
})
export class DetalhePetPage implements OnInit {
  petId: string = "";
  petList: Pet[] = [];
  petDetail: Pet = {
    id: '0',
    nome: 'null',
    idade: 'null',
    genero: 'macho',
    raca: 'null',
    porte: Porte.Grande,
    castrado: false,
    temperamento: 'null',
    adotado: false,
    foto: 'null'
  }

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  
  ngOnInit(): void {    
    this.route.paramMap.subscribe((params: any) => {
      this.petId = params.get('id'); // pega o id do pet pelo link da rota
    });

    this.petList = this.dataService.getPetList(); // service criado para compartilhar dados entre módulos distintos (no caso a lista vem do módulo Pets)
    this.getPetDetail();
  }

  getPetDetail() {
    const findPet = this.petList.find((item) => item.id === this.petId);

    if (findPet != undefined) {
      this.petDetail = findPet;
    }
  }

}
