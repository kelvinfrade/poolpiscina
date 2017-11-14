import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-realiza-tratamento',
  templateUrl: 'realiza-tratamento.html',
})
export class RealizaTratamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealizaTratamentoPage');
  }

  voltarParaHomePage() {
    this.navCtrl.push('HomePage');
  }

  navegarParaRealizaTratamento(): void {
    this.navCtrl.push('RealizaTratamentoPage');
  }

  navegarParaResultadosPage(): void {
    this.navCtrl.push('ResultadosPage');
  }

  
}
