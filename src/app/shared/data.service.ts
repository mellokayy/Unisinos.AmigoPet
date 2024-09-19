import { Injectable, OnInit } from '@angular/core';
import { Pet } from 'src/model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sharedPetList: Pet[] = [];

  constructor() { }

  setPetList(petList: Pet[]): void {
    this.sharedPetList = petList;
  }

  getPetList(): Pet[] {
    return this.sharedPetList;
  }
}