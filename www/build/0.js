webpackJsonp([0],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastraPiscinaPageModule", function() { return CadastraPiscinaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastra_piscina__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastraPiscinaPageModule = (function () {
    function CadastraPiscinaPageModule() {
    }
    CadastraPiscinaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastra_piscina__["a" /* CadastraPiscinaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastra_piscina__["a" /* CadastraPiscinaPage */]),
            ],
        })
    ], CadastraPiscinaPageModule);
    return CadastraPiscinaPageModule;
}());

//# sourceMappingURL=cadastra-piscina.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, formbuilder) {
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.piscinas = [
            'Lista de Piscinas'
        ];
        this.minhaPiscina = {};
        this.formgroup = formbuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]
        });
        this.firstname = this.formgroup.controls['firstname'];
        this.lastname = this.formgroup.controls['lastname'];
    }
    HomePage.prototype.piscinaSelecionada = function (piscina) {
        console.log("Piscina Selecionada", piscina);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        var piscinaRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/piscina1/");
    };
    HomePage.prototype.navegarParaCadastraPiscina = function () {
        this.navCtrl.push('CadastraPiscinaPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Piscinas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="navegarParaCadastraPiscina()">Cadastrar Piscina</button>\n  <ion-list inset>\n    <!--<p>Nome: {{ minhaPiscina.nome }} Volume: {{ minhaPiscina.volume }}</p>-->\n    <!--<button ion-item *ngFor="let piscina of piscinas" (click)="piscinaSelecionada(piscina)">\n      {{ piscina }}\n    </button>-->\n  </ion-list>\n</ion-content>\n\n<!-- <form [formGroup]="formgroup">\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        Firstname\n      </ion-label>\n      <ion-input type="text" formControlName="firstname"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="firstname.hasError(\'required\') && firstname.touched">\n        <p> *Firstname is required </p>\n      </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Lastname\n      </ion-label>\n      <ion-input type="text" formControlName="lastname"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="lastname.hasError(\'required\') && lastname.touched">\n        <p> *Lastname is required </p>\n      </ion-item>\n  </ion-list>\n\n  <button clear ion-button>Enviar</button>\n\n</form> -->`/*ion-inline-end:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastraPiscinaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //para usar o alerta usado para informar o nome da piscina

var CadastraPiscinaPage = (function () {
    function CadastraPiscinaPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.minhaPiscina = {};
    }
    CadastraPiscinaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CadastraPiscinaPage');
        var piscinaRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/piscina1/");
        piscinaRef.on('value', function (piscinaSnapshot) {
            _this.minhaPiscina = piscinaSnapshot.val();
        });
    };
    CadastraPiscinaPage.prototype.doPrompt = function () {
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancelar clicado');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Salvar clicado');
                    }
                }
            ]
        });
        prompt.present();
    };
    CadastraPiscinaPage.prototype.voltarParaHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    CadastraPiscinaPage.prototype.navegarParaRealizaTratamento = function () {
        this.navCtrl.push('RealizaTratamentoPage');
    };
    CadastraPiscinaPage.prototype.criaPiscina = function (nome, volume) {
        var piscinaRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('piscina');
        var novaPiscina = piscinaRef.push();
        novaPiscina.set({
            nome: nome,
            volume: volume
        });
        var path = novaPiscina.toString();
        console.log(path);
        var nomeDaPiscina = nome;
        console.log("O nome da piscina cadastrada é ", nomeDaPiscina);
    };
    CadastraPiscinaPage.prototype.excluiPiscina = function (nome) {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('apppoolpiscina/piscina');
        ref.remove()
            .then(function () {
            console.log("Remove succeeded.");
        })
            .catch(function (error) {
            console.log("Remove failed: " + error.message);
        });
    };
    CadastraPiscinaPage.prototype.atualizaPiscina = function (nome, volume) {
        var piscinaRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/piscina1/");
        piscinaRef.update({
            nome: nome,
            volume: volume
        });
    };
    CadastraPiscinaPage.prototype.deletaPiscina = function () {
        var piscinaRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref("/piscina1/");
        piscinaRef.remove();
    };
    CadastraPiscinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastra-piscina',template:/*ion-inline-start:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\cadastra-piscina\cadastra-piscina.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastrar Piscina</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <h6>Nome da piscina</h6>\n    <!-- Esta linha sairá para implementação do Salvar com prompt que pergunta o nome da piscina -->\n    <ion-item>\n      <ion-input type="text" placeholder="Ex: Piscina de BH" [(ngModel)]="nome"></ion-input>\n    </ion-item>\n    <br>\n    <h6>Informar volume</h6>\n    <ion-item>\n      <ion-input type="text" placeholder="Volume (em litros)" [(ngModel)]="volume"></ion-input>\n    </ion-item>\n    <br>\n    <h6>Calcular volume (em metros)</h6>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label>Formato</ion-label>\n            <ion-select [(ngModel)]="formato">\n              <ion-option value="retangular">Retangular</ion-option>\n              <ion-option value="quadrada">Quadrada</ion-option>\n              <ion-option value="oval">Oval</ion-option>\n              <ion-option value="redonda">Redonda</ion-option>\n              <ion-option value="irregular">Irregular</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>\n          <ion-item>\n            <ion-input type="text" placeholder="Largura"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item>\n            <ion-input type="text" placeholder="Comprimento"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item>\n            <ion-input type="text" placeholder="Profundidade média"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n    <button ion-button block color="primary" (click)="criaPiscina(nome, volume); navegarParaRealizaTratamento();">Cadastrar Piscina</button>\n    <!-- <p>Nome: {{ minhaPiscina.nome }} Volume: {{ minhaPiscina.volume }}</p> -->\n    <!--<button ion-button block color="secondary" (click)="atualizaPiscina(nome, volume)">Atualiza Piscina</button>-->\n    <button ion-button block color="secondary" (click)="excluiPiscina(nome, volume)">Exclui Piscina</button>\n <!--   <button ion-button block color="secondary" (click)="deletaPiscina(nome, volume)">Deleta Piscina</button>-->\n\n    <!--    <button ion-button color="primary" block (click)="doPrompt()">Salvar piscina</button> <!-- Esta linha é para implementação do Salvar que abre um prompt para inserir o nome da piscina -->\n    <!-- <br>\n    <button ion-button full color="light" (click)="voltarParaHomePage()">Home (temp)</button>\n    <button ion-button color="light" full (click)="navegarParaRealizaTratamento()">Realizar Tratamento (temp)</button> -->\n  </ion-list>\n</ion-content>`/*ion-inline-end:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\cadastra-piscina\cadastra-piscina.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], CadastraPiscinaPage);
    return CadastraPiscinaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=cadastra-piscina.js.map

/***/ })

});
//# sourceMappingURL=0.js.map