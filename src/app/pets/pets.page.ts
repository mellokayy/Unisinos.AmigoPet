import { Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss']
})
export class PetsPage {
  // Aqui criei para definir o modelo para um novo pet
  newPet = {
    name: '',
    description: '',
    imageUrl: ''
  };

  //Pessoal, aqui é a Lista de pets para adoção pra ficar como exemplo, podemos excluir via tela mesmo
  pets = [
    { id: 1, name: 'Layca', description: 'Cão amigável', imageUrl: 'assets/dog1.jpg' },
    { id: 2, name: 'Miaw', description: 'Gata carinhosa', imageUrl: 'assets/cat1.jpg' }
  ];

  //Método para adicionar um pet à lista
  addPet() {
    const newId = this.pets.length ? this.pets[this.pets.length - 1].id + 1 : 1;
    const pet = { id: newId, ...this.newPet };

    this.pets.push(pet);

    //Limpa o formulário
    this.newPet = { name: '', description: '', imageUrl: '' };
  }

  //para excluir um pet da lista
  deletePet(id: number) {
    this.pets = this.pets.filter(pet => pet.id !== id);
  }
}