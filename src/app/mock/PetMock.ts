import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet, Porte } from 'src/model/pet.model';
@Injectable({
  providedIn: 'root'
})
export class PetMock {

  constructor() {}

  // mock de dados para usar temporariamente enquanto não tem o BD
  private mockPets: Pet[] = [
    { id: this.generateRandomId(), nome: 'Rex', idade: "5 anos" , genero: 'macho', raca: 'Labrador', porte: Porte.Grande, castrado: true, temperamento: "dócil", adotado: true},
    { id: this.generateRandomId(), nome: 'Mia', idade: "3 anos", genero: "fêmea", raca: 'dachshund', porte: Porte.Pequeno, castrado: true, temperamento: "dócil", adotado: false},
    { id: this.generateRandomId(), nome: 'Bolt', idade: "4 anos", genero: "macho", raca: 'Golden Retriever', porte: Porte.Grande, castrado: false, temperamento: "agitado", adotado: false},
    { id: this.generateRandomId(), nome: 'Luna', idade: "5 anos", genero: "fêmea", raca: 'Poodle', porte: Porte.Pequeno, castrado: false, temperamento: "genioso", adotado: false},
    { id: this.generateRandomId(), nome: 'Bella', idade: "3 anos" , genero: "fêmea", raca: 'vira-lata', porte: Porte.Medio, castrado: false, temperamento: "brincalhona", adotado: true },
    { id: this.generateRandomId(), nome: 'Max', idade: "6 meses", genero: 'macho', raca: 'Bulldog', porte: Porte.Medio, castrado: true, temperamento: 'calmo', adotado: false },
    { id: this.generateRandomId(), nome: 'Nina', idade: "7 meses", genero: 'fêmea', raca: 'Beagle', porte: Porte.Medio, castrado: true, temperamento: 'curiosa', adotado: false },
    { id: this.generateRandomId(), nome: 'Oscar', idade: "2 anos", genero: 'macho', raca: 'Schnauzer', porte: Porte.Pequeno, castrado: false, temperamento: 'leal', adotado: true },
    { id: this.generateRandomId(), nome: 'Zara', idade: "3 anos", genero: 'fêmea', raca: 'Buldogue Francês', porte: Porte.Pequeno, castrado: false, temperamento: 'sociável', adotado: false},
    { id: this.generateRandomId(), nome: 'Charlie', idade: "4 anos", genero: 'macho', raca: 'Cocker Spaniel', porte: Porte.Medio, castrado: true, temperamento: 'afetuoso', adotado: true }
  ]

  private generateRandomId(): string {
    return '' + Date.now() + Math.floor(Math.random() * 10000); // Gera um número aleatório usando uma soma com timestamp
  }
  
  getPets(): Observable<Pet[]> {
    return of(this.mockPets); // Retorna um Observable simulando uma resposta da API
  }

}
