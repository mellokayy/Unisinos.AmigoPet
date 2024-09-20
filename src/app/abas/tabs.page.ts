import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  navigateToQuemSomos() {
    this.router.navigate(['/tabs/quem_somos']);
    this.menuCtrl.close();
  }
  navigateToConfiguracoes() {
    this.router.navigate(['/tabs/configuracoes']);
    this.menuCtrl.close();
  }
  navigateToSejaParceiro() {
    this.router.navigate(['/tabs/parceiro']);
    this.menuCtrl.close();
  }
  navigateToAjuda() {
    this.router.navigate(['/tabs/ajuda']);
    this.menuCtrl.close();
  }
  navigateToConta() {
    this.router.navigate(['/tabs/conta']);
    this.menuCtrl.close();
  }
}
