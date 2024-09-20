import { Injectable, OnInit } from '@angular/core';
import { Pet } from 'src/model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sharedPetList: Pet[] = [];

  constructor() { }

  setPetList(petList: Pet[]): void {
    localStorage.setItem('petList', JSON.stringify(petList));
    this.sharedPetList = petList;
  }

  getPetList(): Pet[] {
    const storedPetList = localStorage.getItem('petList');
    if(storedPetList) this.sharedPetList = JSON.parse(storedPetList);
    return this.sharedPetList;
  }
}