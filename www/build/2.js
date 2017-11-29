webpackJsonp([2],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizaTratamentoPageModule", function() { return RealizaTratamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realiza_tratamento__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RealizaTratamentoPageModule = (function () {
    function RealizaTratamentoPageModule() {
    }
    RealizaTratamentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__realiza_tratamento__["a" /* RealizaTratamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__realiza_tratamento__["a" /* RealizaTratamentoPage */])
            ],
        })
    ], RealizaTratamentoPageModule);
    return RealizaTratamentoPageModule;
}());

//# sourceMappingURL=realiza-tratamento.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizaTratamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealizaTratamentoPage = (function () {
    function RealizaTratamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RealizaTratamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RealizaTratamentoPage');
    };
    RealizaTratamentoPage.prototype.voltarParaHomePage = function () {
        this.navCtrl.push('HomePage');
    };
    RealizaTratamentoPage.prototype.navegarParaRealizaTratamento = function () {
        this.navCtrl.push('RealizaTratamentoPage');
    };
    RealizaTratamentoPage.prototype.navegarParaResultadosPage = function () {
        this.navCtrl.push('ResultadosPage');
    };
    RealizaTratamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realiza-tratamento',template:/*ion-inline-start:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\realiza-tratamento\realiza-tratamento.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Parâmetros Atuais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-input type="text" placeholder="Nome da piscina" [(ngModel)]="nome"></ion-input>\n<!--    <p>Nome: {{ minhaPiscina.nome }} Volume: {{ minhaPiscina.volume }}</p> CHAMAR AQUI O NOME DA PISCINA-->\n    \n    <h6>Alcalinidade Total</h6>\n    <ion-item>\n      <ion-input type="text" placeholder="" [(ngModel)]="alcalinidadetotal"></ion-input>\n    </ion-item>\n    <br>\n    <h6>PH</h6>\n    <ion-item>\n      <ion-input type="text" placeholder="" [(ngModel)]="ph"></ion-input>\n    </ion-item>\n    <br>\n    <h6>Cloro Livre</h6>\n    <ion-item>\n      <ion-input type="text" placeholder="" [(ngModel)]="clorolivre"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button color="primary" full (click)="navegarParaResultadosPage()">Salvar</button>\n    <!--    <button ion-button color="primary" block (click)="doPrompt()">Salvar piscina</button> -->\n    <!--    <br>\n    <button ion-button full color="light" (click)="voltarParaHomePage()">Home (temp)</button>\n    <button ion-button color="light" full (click)="navegarParaRealizaTratamento()">Realizar Tratamento (temp)</button> -->\n  </ion-list>\n</ion-content>`/*ion-inline-end:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\realiza-tratamento\realiza-tratamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RealizaTratamentoPage);
    return RealizaTratamentoPage;
}());

//# sourceMappingURL=realiza-tratamento.js.map

/***/ })

});
//# sourceMappingURL=2.js.map