import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/shared/data.service'; // Importe o DataService
import { Pet } from 'src/model/pet.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  pets: Pet[] = [];

  constructor(private dataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.pets = this.dataService.getPetList();
  }

  navigateToPetDetail(petId: string) {
    console.log(`Navegando para detalhes do pet com ID: ${petId}`);
    this.navCtrl.navigateForward(`/tabs/detalhe-pet/${petId}`);
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  ionViewWillEnter() {
    this.loadPets();
  }
}
