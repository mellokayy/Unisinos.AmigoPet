import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa o NavController para navegação

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private navCtrl: NavController) {} // Injeta o NavController no construtor

  // Função para redirecionar para a página de login
  goToLogin() {
    this.navCtrl.navigateForward('/login'); // Altere para a rota correta do login
  }

}
