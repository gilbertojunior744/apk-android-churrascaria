import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage implements OnInit {
    sobremesas:any [] = [
      "Torta de Morango","6,99","./assets/sobremesas/torta.jpg",
      "Sorvetes","4,99","./assets/sobremesas/sorvete.jpg",
      "Bolo","5,99","./assets/sobremesas/bolo.jpg",
      "Pudim","4,99","./assets/sobremesas/pudim.jpg",
      "Quindim","4,99","./assets/sobremesas/quindim.jpg"
  ];
    detalhesTorta:any[] =[
      "Torta de Morango",
      "- Massa de Baunilha e Nozes",
      "- Recheio de Leite condensado",
      "- Cobertura de Nata",
      "- Morangos",
      "Fatia : 150 gramas."
    ];
    detalhesSorvete:any[] =[
      "Sorte diversos Sabores",
      "- Chocolate",
      "- Morango",
      "- Leite Condensado",
      "- Pistache",
      "Peso:250 gramas."

    ];
    detalhesBolo:any[] =[
      "Bolo de Pote:",
      "Diversas opções:",
      "- Massa de Baunilha com recheio de brigadeiro ",
      "- Massa de Chocolate como recheio de Fios de ovos",
      "- Massa de Chocolate com Cobertura de Nata",
      "- Massa de Baunilha como recheio de Morangos",
      "Peso: 200 gramas."
    ];
    detalhesPudim:any[] =[
      "Pudim",
      "- Pudim de Leite  ",
      "- Recheio de Leite condensado",
      "- Cobertura de Nata",
      "- Morangos",
      "Fatia: 150 gramas."
    ];
    detalhesQuindim:any[] =[
      "Quindim",
      "- Coco ralado",
      "Fatia: 150 gramas.",
    ];
    
 
    
  constructor(public navCtrl:NavController) {

  }
  abreDetalhes1() {
    
      detalhesTorta:[] =[
        "Torta de Morango",
        "- Massa de Baunilha e Nozes",
        "- Recheio de Leite condensado",
        "- Cobertura de Nata",
        "- Morangos",
        "Fatia : 150 gramas."
      ]

    };

  




  ngOnInit() {
  }

}
