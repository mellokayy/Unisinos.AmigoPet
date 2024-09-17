import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetMock {

  constructor() {}

  private generateRandomId(): number {
    return Date.now() + Math.floor(Math.random() * 10000);
  }
  

  getPets(): Observable<any[]> {
    const mockPets = [
      { id: this.generateRandomId(), nome: 'Rex', idade: 5 , genero: 'macho', raca: 'Labrador', porte: 'g', castrado: true, teperamento: "dócil"},
      { id: this.generateRandomId(), nome: 'Mia', idade: 3, genero: "fêmea", raca: 'dachshund', porte:'p', castrado: true, temperamento: "dócil"},
      { id: this.generateRandomId(), nome: 'Bolt', idade: 4, genero: "macho", raca: 'Golden Retriever', porte: 'g', castrado: false, temperamento: "agitado"},
      { id: this.generateRandomId(), nome: 'Luna', idade: 5, genero: "femea", raca: 'Poodle', porte: 'p', castrado: false, temperamento: "genioso"},
      { id: this.generateRandomId(), nome: 'Bella', idade: 3 , genero: "fêmea", raca: 'vira-lata', porte: 'm', castrada: false, temperamento: "brincalhona" },
      { id: this.generateRandomId(), nome: 'Mia', idade: 3, genero: 'fêmea', raca: 'Siamês', porte: 'p', castrado: false, temperamento: 'independente' },
      { id: this.generateRandomId(), nome: 'Bolt', idade: 2, genero: 'macho', raca: 'Golden Retriever', porte: 'm', castrado: true, temperamento: 'amigável' },
      { id: this.generateRandomId(), nome: 'Luna', idade: 4, genero: 'fêmea', raca: 'Poodle', porte: 'p', castrado: false, temperamento: 'brincalhona' },
      { id: this.generateRandomId(), nome: 'Bella', idade: 1, genero: 'fêmea', raca: 'Persa', porte: 'p', castrado: true, temperamento: 'carinhosa' },
      { id: this.generateRandomId(), nome: 'Max', idade: 6, genero: 'macho', raca: 'Bulldog', porte: 'm', castrado: true, temperamento: 'calmo' },
      { id: this.generateRandomId(), nome: 'Nina', idade: 7, genero: 'fêmea', raca: 'Beagle', porte: 'm', castrado: true, temperamento: 'curiosa' },
      { id: this.generateRandomId(), nome: 'Oscar', idade: 2, genero: 'macho', raca: 'Schnauzer', porte: 'p', castrado: false, temperamento: 'leal' },
      { id: this.generateRandomId(), nome: 'Zara', idade: 3, genero: 'fêmea', raca: 'Buldogue Francês', porte: 'p', castrado: false, temperamento: 'sociável' },
      { id: this.generateRandomId(), nome: 'Charlie', idade: 4, genero: 'macho', raca: 'Cocker Spaniel', porte: 'm', castrado: true, temperamento: 'afetuoso' }
    ];

    return of(mockPets); // Retorna um Observable simulando uma resposta de API
  }
}
