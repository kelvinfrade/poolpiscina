import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Bem-vindo ao PoolPiscina!",
      description: "Veja como <b>é fácil usar nosso app</b>.",
      image: "assets/imgs/logo.png",
    },
    {
      title: "1 - Cadastre a piscina",
      description: "Você <b>cadastra sua piscina</b> para poder fazer a análise da água.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "2 - Utilize a Fita",
      description: "Depois de fazer a análise da água, <b>informe os parâmetros</b> nos respectivos campos.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    },
    {
      title: "3 - Receba o resultado",
      description: "Com os valores de cada produto você pode <b>fazer o tratamento sem excessos e sem desperdícios</b>.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  novaHome(){
    this.navCtrl.setRoot('HomePage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
