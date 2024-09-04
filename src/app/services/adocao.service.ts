import { Injectable } from '@angular/core';

interface Pet {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class adocao {
  private pets: Pet[] = [];

  constructor() { }

  // Adiciona um novo pet
  addPet(pet: Pet) {
    this.pets.push({ ...pet, id: this.pets.length + 1 });
  }

  // Exclui um pet pelo ID
  deletePet(id: number) {
    this.pets = this.pets.filter(pet => pet.id !== id);
  }

  // Retorna a lista de pets
  getPets(): Pet[] {
    return this.pets;
  }

  // Atualiza as informações de um pet
  updatePet(updatedPet: Pet) {
    const index = this.pets.findIndex(pet => pet.id === updatedPet.id);
    if (index !== -1) {
      this.pets[index] = updatedPet;
    }
  }
}