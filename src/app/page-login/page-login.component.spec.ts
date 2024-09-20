import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        console.log('Usuário autenticado:', userCredential.user);
      })
      .catch(error => {
        console.error('Erro de autenticação:', error);
      });
  }
}