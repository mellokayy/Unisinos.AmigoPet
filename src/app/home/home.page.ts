import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PetMock } from 'src/app/mock/PetMock';
import { Pet } from 'src/model/pet.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  pets: Pet[] = [];

  constructor(private petMock: PetMock, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.petMock.getPets().subscribe((data: Pet[]) => {
      this.pets = data;
    });
  }

  navigateToPetDetail(petId: string) {
    console.log(`Navegando para detalhes do pet com ID: ${petId}`);
    this.navCtrl.navigateForward(`/tabs/pet-detail/${petId}`);
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
