webpackJsonp([1],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosPageModule", function() { return ResultadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultadosPageModule = (function () {
    function ResultadosPageModule() {
    }
    ResultadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resultados__["a" /* ResultadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultados__["a" /* ResultadosPage */]),
            ],
        })
    ], ResultadosPageModule);
    return ResultadosPageModule;
}());

//# sourceMappingURL=resultados.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
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


/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosPage = (function () {
    function ResultadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
    };
    ResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultados',template:/*ion-inline-start:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\resultados\resultados.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Resultados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-input type="text" placeholder="Data" [(ngModel)]="data"></ion-input>\n      </ion-col>\n      <ion-col col-6>\n        <ion-input type="text" placeholder="Nome da piscina" [(ngModel)]="nome"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <h6>Resultado da Alcalinidade Total</h6>\n    <p>Bacon ipsum dolor amet strip steak kevin pancetta, chuck cupim capicola picanha t-bone landjaeger jerky beef ribs meatloaf.</p>\n \n    <!--<ion-input type="text" placeholder="" [(ngModel)]="alcalinidadetotal"></ion-input> -->\n    <h6>Resultado do PH</h6>\n      <p>Bacon ipsum dolor amet strip steak kevin pancetta, chuck cupim capicola picanha t-bone landjaeger jerky beef ribs meatloaf.</p>\n \n    <h6>Resultado do Cloro Livre</h6>\n    <p>Bacon ipsum dolor amet strip steak kevin pancetta, chuck cupim capicola picanha t-bone landjaeger jerky beef ribs meatloaf.</p>\n  </ion-list>\n\n  <br>\n  <!--<button ion-button color="primary" full (click)="navegarParaRealizaTratamento()">Salvar</button>\n        <button ion-button color="primary" block (click)="doPrompt()">Salvar piscina</button> -->\n  <br>\n  <!-- <button ion-button full color="light" (click)="voltarParaHomePage()">Home (temp)</button>\n<button ion-button color="light" full (click)="navegarParaRealizaTratamento()">Realizar Tratamento (temp)</button> -->\n</ion-content>`/*ion-inline-end:"E:\Sistemas de Informação\PI - PoolPiscina\poolpiscina\src\pages\resultados\resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultadosPage);
    return ResultadosPage;
}());

//# sourceMappingURL=resultados.js.map

/***/ })

});
//# sourceMappingURL=1.js.map