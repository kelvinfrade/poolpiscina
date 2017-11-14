import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; //para usar o alerta usado para informar o nome da piscina

@IonicPage()
@Component({
  selector: 'page-cadastra-piscina',
  templateUrl: 'cadastra-piscina.html',
})
export class CadastraPiscinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraPiscinaPage');
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Salvar piscina',
      message: "Este nome aparecerá na sua lista de piscinas",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Ex: Casa de BH'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar clicado');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Salvar clicado');
          }
        }
      ]
    });
    prompt.present();
  }

  voltarParaHomePage() {
    this.navCtrl.push(HomePage);
  }

  navegarParaRealizaTratamento(): void {
    this.navCtrl.push('RealizaTratamentoPage');
  }

}