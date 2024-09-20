import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Serviço de autenticação
import { Router } from '@angular/router'; // Serviço de navegação

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Função de login com try/catch para melhorar o tratamento de erros
  async login() {
    try {
      // Chama o método de login do serviço AuthService
      await this.authService.login(this.email, this.password);

      // Exibe mensagem de sucesso
      alert('Login realizado com sucesso!');

      // Redireciona para a página home após o login
      this.router.navigate(['/home']);
    } catch (error) {
      // Em caso de erro, exibe uma mensagem de alerta com o erro
      alert('Erro ao fazer login: ' );
    }
  }
}