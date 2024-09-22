import { Injectable } from '@angular/core';
import { Pet } from 'src/model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private petList: Pet[] = [];

  setPetList(pets: Pet[]) {
    this.petList = pets;
  }

  getPetList(): Pet[] {
    return this.petList;
  }
}
