import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  entradas:any [] = [
    "Coração de Frango","8,99","./assets/entradas/coracao.jpg",
    "Batata Frita","7,99","./assets/entradas/batata.png",
    "Entrevero","14,99","./assets/entradas/entrevero.jpg",
    "Linguiça","8,99","./assets/entradas/linguicaAlecrim.jpg",
    "Salada","5,99","./assets/entradas/salada.jpg"
];
  constructor() { }

  ngOnInit() {
  }

}
