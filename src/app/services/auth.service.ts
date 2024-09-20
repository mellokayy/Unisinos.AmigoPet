import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { usuario } from '../services/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  usrListRef = this.db.list<usuario>('usuarios-list');

  constructor(private fbauth: AngularFireAuth, private db: AngularFireDatabase) {}

  // Método de login com async/await
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.fbauth.signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  }

  // Método de registro com callback
  register(email: string, password: string, nome: string, callback: (error: any, result?: any) => void) {
    this.fbauth.createUserWithEmailAndPassword(email, password)
      .then(async userCredential => {
        const newUser: usuario = {
          uid: userCredential.user?.uid || '',
          email: userCredential.user?.email || '',
          nome: nome,
        };

        // Salva o usuário no Realtime Database
        try {
          await this.saveUser(newUser);
          callback(null, userCredential); // Callback em caso de sucesso
        } catch (error) {
          callback(error); // Callback em caso de erro ao salvar no DB
        }
      })
      .catch(error => {
        callback(error); // Callback em caso de erro no registro
      });
  }

  // Método para salvar o usuário no Firebase Realtime Database
  private async saveUser(user: usuario): Promise<void> {
    try {
      await this.db.object(`usuarios-list/${user.uid}`).set(user);
      console.log('Usuário salvo com sucesso no Firebase');
    } catch (error) {
      console.error('Erro ao salvar o usuário no Firebase:', error);
      throw error;
    }
  }
}