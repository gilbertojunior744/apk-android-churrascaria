import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {
  lanches:any [] = [
    "Pastéis","8,99","./assets/lanches/pastel.jpg",
    "Salgados","5,99","./assets/lanches/coxinha.jpg",
    "Xis Gaudério","14,99","./assets/lanches/xis.jpg",
    "Torrada","8,99","./assets/lanches/torrada.jpg",
    "Sanduíche","7,99","./assets/lanches/sanduiche.jpg"
];
  constructor() { }

  ngOnInit() {
  }

}
