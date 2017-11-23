import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{

  formgroup: FormGroup;
  firstname: AbstractControl;
  lastname: AbstractControl;

  piscinas = [
    'Lista de Piscinas'
  ];

  piscinaSelecionada(piscina: string) {
    console.log("Piscina Selecionada", piscina);
  }

  public minhaPiscina = {};

  constructor(private navCtrl: NavController, public formbuilder: FormBuilder) {

    this.formgroup = formbuilder.group({
      firstname: ['', Validators.required,Validators.minLength(2)],
      lastname: ['', Validators.required,Validators.minLength(2)]
    });

    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    const piscinaRef: firebase.database.Reference = firebase.database().ref(`/piscina1/`);
  }
  

  navegarParaCadastraPiscina(): void {
    this.navCtrl.push('CadastraPiscinaPage');
  }

}