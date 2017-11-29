import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; //para usar o alerta usado para informar o nome da piscina
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cadastra-piscina',
  templateUrl: 'cadastra-piscina.html',
})
export class CadastraPiscinaPage {

  public minhaPiscina = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraPiscinaPage');
    const piscinaRef: firebase.database.Reference = firebase.database().ref(`/piscina1/`);
    piscinaRef.on('value', piscinaSnapshot => {
      this.minhaPiscina = piscinaSnapshot.val();
    });
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

  criaPiscina(nome: string, volume: number) {
    let piscinaRef = firebase.database().ref('piscina');
    let novaPiscina = piscinaRef.push();
    novaPiscina.set({
      nome,
      volume
    });
    let path = novaPiscina.toString();
    console.log(path);
    let nomeDaPiscina = nome;
    console.log("O nome da piscina cadastrada é ", nomeDaPiscina);
  }

  excluiPiscina(nome: string) {
    var ref = firebase.database().ref('apppoolpiscina/piscina');
    ref.remove()
      .then(function () {
        console.log("Remove succeeded.")
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message)
      });
    
  }

atualizaPiscina(nome: string, volume: number) {
  const piscinaRef: firebase.database.Reference = firebase.database().ref(`/piscina1/`);
  piscinaRef.update({
    nome,
    volume
  })
}

deletaPiscina(): void {
  const piscinaRef: firebase.database.Reference = firebase.database().ref(`/piscina1/`);
  piscinaRef.remove()
}

}