import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
  bebidas:any [] = [
    "Suco Natural","5,99","./assets/bebidas/suco.jpg",
    "Refrigerantes","4,99","./assets/bebidas/refrigerante.jpg",
    "Cervejas","6,99","./assets/bebidas/cerveja.jpg",
    "Caipirinha","6,99","./assets/bebidas/caipirinha.jpeg",
    "Chocolate Quente","7,99","./assets/bebidas/chocolate.jpeg"
];
  navCtrl: any;
  constructor() { }
  /*
  pushPage() {
    this.navCtrl.push(Detalhes1Page, {
    name: "Sucos Naturais",
    sabores: "- Maracujá , Morango ,Laranja , Detox e Mamão",
    valor:"R$ 5,99"
   });
  } */
  ngOnInit() {
  }

}
