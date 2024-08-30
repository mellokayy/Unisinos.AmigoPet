import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contato',
  templateUrl: 'contato.component.html',
  styleUrls: ['contato.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class ContatoComponent implements OnInit {
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
}
