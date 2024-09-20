import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar'; // Adicione a importação de Style

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('RegistroComponent inicializado');
  }

  // Outros métodos que podem ser úteis
  onInputChange(event: any): void {
    console.log('Campo alterado:', event.target.value);
  }

  // Exemplo de método de validação para o formulário de registro
  validateForm(): boolean {
    return this.email !== '' && this.password !== '';
  }

  initializeApp() {
    SplashScreen.hide();
    StatusBar.setStyle({ style: Style.Light }); // Agora Style está definido corretamente
  }
}