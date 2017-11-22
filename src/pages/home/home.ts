import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  formgroup: FormGroup;
  firstname: AbstractControl;
  lastname: AbstractControl;

  piscinas = [
    'Casa Belvedere',
    'Casa Branca',
    'CasaMento'
  ];

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  piscinaSelecionada(piscina: string) {
    console.log("Piscina Selecionada", piscina);
  }

  constructor(private navCtrl: NavController, public formbuilder: FormBuilder) {

    this.formgroup = formbuilder.group({
      firstname: ['', Validators.required,Validators.minLength(2)],
      lastname: ['', Validators.required,Validators.minLength(2)]
    });

    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];



  }

  navegarParaCadastraPiscina(): void {
    this.navCtrl.push('CadastraPiscinaPage');
  }

}