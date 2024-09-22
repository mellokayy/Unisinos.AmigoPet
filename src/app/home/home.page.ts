import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/shared/data.service';
import { Pet } from 'src/model/pet.model';
import { PetMock } from '../mock/PetMock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  pets: Pet[] = [];

  constructor(private router: Router, private petMock: PetMock, private dataService: DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.petMock.getPets().subscribe(data => {
      this.pets = data;
      this.dataService.setPetList(this.pets);
    });
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

  navigateToQuemSomos() {
    this.router.navigate(['/tabs/quem_somos']);
  }
}
