import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  piscinas = [
    'Casa Belvedere',
    'Casa Branca',
    'CasaMento'
  ];

  piscinaSelecionada(piscina: string) {
    console.log("Piscina Selecionada", piscina);
  }

  constructor(private navCtrl: NavController) {

  }

  navegarParaCadastraPiscina(): void {
    this.navCtrl.push('CadastraPiscinaPage');
  }

}