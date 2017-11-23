import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import firebase from 'firebase';
// import { CadastraPiscinaPage } from '../pages/cadastra-piscina/cadastra-piscina';
// import { RealizaTratamentoPage } from '../pages/realiza-tratamento/realiza-tratamento';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyBmUzJf4UyaGXcJ9PrP10gFhcuO3q_z2mE",
      authDomain: "apppoolpiscina.firebaseapp.com",
      databaseURL: "https://apppoolpiscina.firebaseio.com",
      projectId: "apppoolpiscina",
      storageBucket: "apppoolpiscina.appspot.com",
      messagingSenderId: "668220642223"
    });

  }
}

