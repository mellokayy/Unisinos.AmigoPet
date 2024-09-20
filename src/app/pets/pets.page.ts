import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/model/pet.model';
import { PetMock } from '../mock/PetMock';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss']
})
export class PetsPage implements OnInit {
  petList: Pet[] = [];

  constructor(private petMock: PetMock, private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.petMock.getPets().subscribe(data => {
      this.petList = data;
    });
    this.dataService.setPetList(this.petList);
  }
}
