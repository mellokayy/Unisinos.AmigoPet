import { Component, OnInit } from '@angular/core';
import { Pet, Porte } from 'src/model/pet.model';
import { PetMock } from '../mock/PetMock';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss']
})
export class PetsPage implements OnInit {
  petList: Pet[] = [];
  newPet = {
    nome: '',
    idade: '',
    genero: 'macho' as 'macho' | 'fêmea',
    raca: '',
    porte: Porte.Pequeno,
    castrado: false,
    temperamento: '',
    adotado: false,
    foto: ''
  };

  constructor(private petMock: PetMock, private dataService: DataService) { }

  ngOnInit(): void {
    this.petMock.getPets().subscribe(data => {
      this.petList = data;
      this.dataService.setPetList(this.petList);
    });
  }

  addPet() {
    const newId = this.petList.length ? Number(this.petList[this.petList.length - 1].id) + 1 : 1;

    const pet: Pet = new Pet(
      newId,
      this.newPet.nome,
      this.newPet.idade || '',
      this.newPet.genero || 'macho',
      this.newPet.raca || '',
      this.newPet.porte || Porte.Pequeno,
      this.newPet.castrado || false,
      this.newPet.temperamento || '',
      this.newPet.adotado || false,
      this.newPet.foto || ''
    );

    this.petList.push(pet);
    this.dataService.setPetList(this.petList);

    this.newPet = {
      nome: '',
      idade: '',
      genero: 'macho',
      raca: '',
      porte: Porte.Pequeno,
      castrado: false,
      temperamento: '',
      adotado: false,
      foto: ''
    };
  }

  deletePet(id: number) {
    this.petList = this.petList.filter(pet => pet.id !== id);
    this.dataService.setPetList(this.petList);
  }
}
