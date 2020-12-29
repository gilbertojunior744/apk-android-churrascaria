import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.page.html',
  styleUrls: ['./dia.page.scss'],
})
export class DiaPage implements OnInit {
  dia:any [] = [
    "./assets/pratoDia.jpg",
    "Super Combo Especial",
    "- Porção de Fritas 400 gramas.",
    "- Maminha 150 gramas.",
    "- Alface",
    "- Suco Natural sabores:Maracujá,Morango Laranja ou Mamão.",
    "- Sobremesa Quindim 50 gramas.",
    "23,99"
];

  constructor() { }

  ngOnInit() {
  }

}
