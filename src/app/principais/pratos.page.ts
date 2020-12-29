import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {
  pratos:any [] = [
    "Maminha","12,99","./assets/refeicao/maminha.jpg",
    "Filé Migno","18,99","./assets/refeicao/fileMignon.jpg",
    "Cordeiro","12,99","./assets/refeicao/cordeiro.jpg",
    "Frango","8,99","./assets/refeicao/frango.jpg",
    "Costela de Porco","8,99","./assets/refeicao/costelaPorco.jpg"
];

  constructor() { }

  ngOnInit() {
  }

}
