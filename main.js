"use strict";
(self["webpackChunkemkate_portfolio"] = self["webpackChunkemkate_portfolio"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact-page/contact-page.component */ 4336);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 7583);
/* harmony import */ var _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portfolio-item/portfolio-item.component */ 2657);
/* harmony import */ var _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/portfolio-page/portfolio-page.component */ 1143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







const routes = [
    { path: '', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent, data: { animation: 'Home' } },
    { path: 'portfolio', component: _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioPageComponent, data: { animation: 'Portfolio' } },
    { path: 'portfolio/:slug', component: _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioItemComponent, data: { animation: 'PortfolioItem' } },
    { path: 'kontakt', component: _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_0__.ContactPageComponent, data: { animation: 'Contact' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-animation */ 6218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 2439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




class AppComponent {
    constructor() {
        this.title = 'emkate-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "animation-container"], ["o", "outlet"], [1, "fixed-background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 2);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routeAnimation", _r0 && _r0.activatedRouteData && _r0.activatedRouteData["animation"]);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".fixed-background[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -10;\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(0deg, #fff 60%, #eee 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1iYWNrZ3JvdW5kIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmIDYwJSwgI2VlZSAxMDAlKTtcclxufSJdfQ== */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_0__.routeAnimation] } });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 2439);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 7583);
/* harmony import */ var _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio-page/portfolio-page.component */ 1143);
/* harmony import */ var _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/portfolio-item/portfolio-item.component */ 2657);
/* harmony import */ var _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-page/contact-page.component */ 4336);
/* harmony import */ var _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/translations/translations.pipe */ 7586);
/* harmony import */ var _shared_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/translations/translations.service */ 3360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _shared_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__.TranslationsService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__.MainPageComponent,
        _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioPageComponent,
        _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioItemComponent,
        _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__.ContactPageComponent,
        _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_7__.TranslationsPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 4336:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-page/contact-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageComponent": () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


const _c0 = function () { return ["/portfolio"]; };
class ContactPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(); };
ContactPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 27, vars: 2, consts: [[1, "contact-page"], [1, "contact-page__header"], [1, "contact-page__contact-items"], ["href", "mailto:tkaczykmichal94@gmail.com", "target", "_blank", 1, "contact-items__element", "contact-items__element--mail"], ["href", "https://m.me/tkaczykmichal94", "target", "_blank", 1, "contact-items__element", "contact-items__element--messenger"], ["href", "https://linkedin.com/in/tkaczykmichal", "target", "_blank", 1, "contact-items__element", "contact-items__element--linkedin"], ["href", "https://github.com/emkate", "target", "_blank", 1, "contact-items__element", "contact-items__element--github"], [1, "contact-page__description"], ["href", "mailto:tkaczykmichal94@gmail.com"], ["href", "https://m.me/tkaczykmichal94", "target", "_blank"], ["href", "https://linkedin.com/in/tkaczykmichal", "target", "_blank"], ["href", "https://github.com/emkate", "target", "_blank"], [3, "routerLink"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skontaktuj si\u0119 ze mn\u0105");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Zapraszam do kontaktu drog\u0105 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "mailow\u0105");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", poprzez aplikacj\u0119 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " lub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " na LinkedIn. Je\u015Bli poszukujesz specjalisty w zakresie budowania stron, portali lub aplikacji internetowych z wykorzystaniem najnowszych technologii, wybierz jeden z powy\u017Cszych sposob\u00F3w komunikacji. W przypadku, gdy trafi\u0142e\u015B tu poniewa\u017C interesujesz si\u0119 programowaniem, to zach\u0119cam do obserwowania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "mojego konta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " na GitHubie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " W obu przypadkach mo\u017Cesz jeszcze odwiedzi\u0107 stron\u0119 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " i zapozna\u0107 si\u0119 ze zrealizowanymi przeze mnie projektami, do czego r\u00F3wnie\u017C zach\u0119cam :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".contact-page[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n@media only screen and (min-width: 768px) {\n  .contact-page[_ngcontent-%COMP%] {\n    padding-top: 0;\n    overflow: hidden;\n    height: 100vh;\n    min-height: unset;\n  }\n}\n.contact-page__header[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 26px;\n}\n@media only screen and (min-width: 768px) {\n  .contact-page__header[_ngcontent-%COMP%] {\n    font-size: 56px;\n  }\n}\n.contact-page__description[_ngcontent-%COMP%] {\n  max-width: 85vw;\n  text-align: center;\n  line-height: 1.8;\n  letter-spacing: 0.6px;\n}\n@media only screen and (min-width: 768px) {\n  .contact-page__description[_ngcontent-%COMP%] {\n    max-width: 56vw;\n  }\n}\n.contact-page__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #A58861;\n  text-decoration: none;\n  position: relative;\n}\n.contact-page__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 0;\n  background-color: #A58861;\n  transition: 0.1s;\n}\n.contact-page__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  height: 3px;\n}\n.contact-page__contact-items[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 30px;\n}\n.contact-page__contact-items[_ngcontent-%COMP%]   .contact-items__element[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  margin: 10px;\n  border: 6px #000 solid;\n  background-size: 32px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: 0.3s;\n}\n.contact-page__contact-items[_ngcontent-%COMP%]   .contact-items__element[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background-color: #fff;\n  filter: invert(100%);\n}\n.contact-page__contact-items[_ngcontent-%COMP%]   .contact-items__element--mail[_ngcontent-%COMP%] {\n  background-image: url('mail.svg');\n}\n.contact-page__contact-items[_ngcontent-%COMP%]   .contact-items__element--messenger[_ngcontent-%COMP%] {\n  background-image: url('messenger.svg');\n}\n.contact-page__contact-items[_ngcontent-%COMP%]   .contact-items__element--linkedin[_ngcontent-%COMP%] {\n  background-image: url('linkedin.svg');\n}\n.contact-page__contact-items[_ngcontent-%COMP%]   .contact-items__element--github[_ngcontent-%COMP%] {\n  background-image: url('github.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUdFO0VBVkY7SUFXSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVJO0VBSkY7SUFLSSxlQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUk7RUFORjtJQU9JLGVBQUE7RUFDSjtBQUNGO0FBQ0k7RUFDRSxjQ3ZDVztFRHdDWCxxQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkNsRFM7RURtRFQsZ0JBQUE7QUFDUjtBQUdRO0VBQ0UsV0FBQTtBQURWO0FBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBTFI7QUFRTTtFQUNFLGlDQUFBO0FBTlI7QUFTTTtFQUNFLHNDQUFBO0FBUFI7QUFVTTtFQUNFLHFDQUFBO0FBUlI7QUFXTTtFQUNFLG1DQUFBO0FBVFIiLCJmaWxlIjoiY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmNvbnRhY3QtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTaWxrYSc7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDg1dnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgbWF4LXdpZHRoOiA1NnZ3O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGFjdC1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAuY29udGFjdC1pdGVtc19fZWxlbWVudCB7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogNnB4ICMwMDAgc29saWQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMzJweDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0tbWFpbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbWFpbC5zdmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0tbWVzc2VuZ2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9tZXNzZW5nZXIuc3ZnJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtLWxpbmtlZGluIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9saW5rZWRpbi5zdmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0tZ2l0aHViIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9naXRodWIuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIiR5ZWxsb3ctcHJpbWFyeTogI0E1ODg2MTtcclxuJHllbGxvdy1zZWNvbmRhcnk6ICNmZmM2NGQ7XHJcblxyXG4kZGFyay1ncmF5OiAjMTkxQTFFO1xyXG5cclxuJGJyZWFrcG9pbnQtc21hbGw6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1iaWc6IDEzNjBweDsiXX0= */"] });


/***/ }),

/***/ 7583:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/translations/translations.pipe */ 7586);



const _c0 = function () { return ["/portfolio"]; };
class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 16, vars: 8, consts: [[1, "main-page"], [1, "main-page__container"], [1, "container__content-wrapper"], [1, "container__text"], [1, "container__text-item", "container__text-item--firstline"], [1, "container__text-item", "container__text-item--secondline"], [1, "container__description"], [3, "routerLink"], [1, "container__image"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Micha\u0142 Tkaczyk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Frontend developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 3, "main-page.description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, "main-page.description-link"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_0__.TranslationsPipe], styles: [".main-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 80px;\n  padding-bottom: 40px;\n  min-height: 100vh;\n}\n@media only screen and (min-width: 768px) {\n  .main-page[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: hidden;\n    min-height: unset;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n.main-page__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  min-height: 490px;\n  width: 100%;\n  flex-direction: column-reverse;\n}\n@media only screen and (min-width: 1360px) {\n  .main-page__container[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__image[_ngcontent-%COMP%] {\n  background-image: url('main.jpg');\n  width: 72vw;\n  height: 72vw;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.9;\n  border-radius: 50%;\n  margin-top: 10vw;\n}\n@media only screen and (min-width: 768px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__image[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 360px;\n    margin-top: 0;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 100%;\n  margin-top: 20px;\n}\n@media only screen and (min-width: 1360px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__content-wrapper[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-right: 60px;\n    margin-top: 0;\n    align-items: flex-end;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Silka\";\n  color: #fff;\n  z-index: 1;\n  margin-bottom: 16px;\n}\n@media only screen and (min-width: 1360px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__text[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    margin-bottom: 22px;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__text-item--firstline[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n}\n@media only screen and (min-width: 768px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__text-item--firstline[_ngcontent-%COMP%] {\n    font-size: 62px;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__text-item--secondline[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  line-height: 1;\n  color: #A58861;\n  font-weight: 700;\n  margin-top: 4px;\n}\n@media only screen and (min-width: 768px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__text-item--secondline[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%] {\n  font-family: \"Silka\", sans-serif;\n  color: #000;\n  font-size: 14px;\n  max-width: 600px;\n  letter-spacing: 0.4px;\n  line-height: 1.6;\n  text-align: center;\n  padding: 0 20px;\n}\n@media only screen and (min-width: 768px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media only screen and (min-width: 1360px) {\n  .main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%] {\n    line-height: 1.5;\n    text-align: right;\n    max-width: 450px;\n  }\n}\n.main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #A58861;\n  font-weight: 700;\n  text-decoration: none;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #A58861;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBUkY7SUFTSSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVJO0VBUkY7SUFTSSxtQkFBQTtFQUNKO0FBQ0Y7QUFFTTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRVE7RUFYRjtJQVlJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtFQUNSO0FBQ0Y7QUFFTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFFUTtFQVRGO0lBVUksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0VBQ1I7QUFDRjtBQUVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBVEY7SUFVSSxxQkFBQTtJQUNBLG1CQUFBO0VBQ1I7QUFDRjtBQUVVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFaO0FBRVk7RUFMRjtJQU1JLGVBQUE7RUFDWjtBQUNGO0FBRVU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQ2hHSztFRGlHTCxnQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUVZO0VBVEY7SUFVSSxlQUFBO0VBQ1o7QUFDRjtBQUlNO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSVE7RUFWRjtJQVdJLFVBQUE7RUFEUjtBQUNGO0FBR1E7RUFkRjtJQWVJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQUFSO0FBQ0Y7QUFFUTtFQUNFLGNDaElPO0VEaUlQLGdCQUFBO0VBQ0EscUJBQUE7QUFBVjtBQUVVO0VBRUUsY0N0SUs7QURxSWpCIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5tYWluLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ5MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1iaWcpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21haW4uanBnJyk7XHJcbiAgICAgICAgd2lkdGg6IDcydnc7XHJcbiAgICAgICAgaGVpZ2h0OiA3MnZ3O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZ3O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LWJpZykge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX190ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NpbGthJztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYmlnKSB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICYtLWZpcnN0bGluZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi0tc2Vjb25kbGluZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTaWxrYVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYmlnKSB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAmOnZpc2l0ZWQsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIkeWVsbG93LXByaW1hcnk6ICNBNTg4NjE7XHJcbiR5ZWxsb3ctc2Vjb25kYXJ5OiAjZmZjNjRkO1xyXG5cclxuJGRhcmstZ3JheTogIzE5MUExRTtcclxuXHJcbiRicmVha3BvaW50LXNtYWxsOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtYmlnOiAxMzYwcHg7Il19 */"] });


/***/ }),

/***/ 2439:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_shared_translations_translations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/translations/translations.service */ 3360);
/* harmony import */ var _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/translations/translations.pipe */ 7586);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);







const _c0 = function () { return { exact: true }; };
class NavbarComponent {
    constructor(router, translationsService) {
        this.router = router;
        this.translationsService = translationsService;
        this.navbarOpen = false;
    }
    ngOnInit() {
        this.listenForRouteChanges();
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    listenForRouteChanges() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
            this.navbarOpen = false;
        })).subscribe();
    }
    changeLanguage(lang) {
        this.translationsService.languageMemory$.next(lang);
        this.navbarOpen = false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_translations_translations_service__WEBPACK_IMPORTED_MODULE_0__.TranslationsService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 27, consts: [[1, "navbar"], ["routerLink", "/", 1, "navbar__logo-item"], [1, "navbar__hamburger", 3, "click"], [1, "hamburger__line"], [1, "navbar-menu"], [1, "navbar-menu__items-wrapper"], ["routerLink", "/", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item", 3, "routerLinkActiveOptions"], ["routerLink", "/portfolio", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item"], ["routerLink", "/kontakt", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item"], [1, "translations-container"], [1, "translations-container__item", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_17_listener() { return ctx.changeLanguage("pl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " PL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_20_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " EN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("navbar__logo-item--inverse", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("navbar__hamburger--open", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("navbar-menu--open", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("navbar-menu__items-wrapper--visible", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 16, "navbar.about"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 18, "navbar.projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 20, "navbar.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("translations-container__item--selected", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 22, ctx.translationsService.languageMemory$) === "pl");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("translations-container__item--selected", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 24, ctx.translationsService.languageMemory$) === "en");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], pipes: [_shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslationsPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media only screen and (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 40px 60px;\n  }\n}\n.navbar__logo-item[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 1;\n  color: #000;\n  border: 6px #000 solid;\n  width: 60px;\n  height: 60px;\n  text-align: end;\n  padding-right: 6px;\n  transition: 0.4s;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: \"Abril Fatface\", cursive;\n}\n@media only screen and (min-width: 768px) {\n  .navbar__logo-item[_ngcontent-%COMP%]:hover {\n    background-color: #000;\n    color: #fff;\n  }\n}\n.navbar__logo-item--inverse[_ngcontent-%COMP%] {\n  border-color: #A58861;\n  color: #A58861;\n}\n@media only screen and (min-width: 768px) {\n  .navbar__logo-item--inverse[_ngcontent-%COMP%]:hover {\n    background-color: #A58861;\n    color: #191A1E;\n  }\n}\n.navbar__hamburger[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #000;\n  height: 6px;\n  width: 100%;\n  transition: 0.2s;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::before {\n  position: absolute;\n  left: 0;\n  content: \"\";\n  height: 6px;\n  width: 100%;\n  top: -12px;\n  background-color: #000;\n  transition: 0.2s;\n  transform-origin: left;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::after {\n  position: absolute;\n  left: 0;\n  content: \"\";\n  height: 6px;\n  width: 100%;\n  bottom: -12px;\n  background-color: #000;\n  transition: 0.2s;\n  transform-origin: left;\n}\n.navbar__hamburger--open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 9px;\n}\n.navbar__hamburger--open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::before {\n  background-color: #fff;\n  transform: rotate(45deg);\n  left: 5px;\n  height: 8px;\n}\n.navbar__hamburger--open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n  transform: rotate(-45deg);\n  left: 5px;\n  height: 8px;\n}\n.navbar-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 0;\n  background: #191A1E;\n  transition: 0.4s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Silka\";\n  overflow: hidden;\n}\n.navbar-menu__items-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10vw;\n  top: 40%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  transition: 0.4s;\n  opacity: 0;\n}\n@media only screen and (min-width: 768px) {\n  .navbar-menu__items-wrapper[_ngcontent-%COMP%] {\n    top: 50%;\n  }\n}\n.navbar-menu__items-wrapper--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.navbar-menu__item[_ngcontent-%COMP%] {\n  font-size: 50px;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #fff;\n  margin: 22px 0;\n  padding: 0 20px;\n  letter-spacing: -1px;\n  transition: 0.4s;\n  font-weight: 700;\n}\n@media only screen and (min-width: 768px) {\n  .navbar-menu__item[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n.navbar-menu__item[_ngcontent-%COMP%]:hover {\n  color: #666;\n  letter-spacing: -0.5px;\n}\n.navbar-menu__item--active[_ngcontent-%COMP%] {\n  color: #A58861;\n  cursor: default;\n}\n.navbar-menu__item--active[_ngcontent-%COMP%]:hover {\n  color: #A58861;\n  letter-spacing: -1px;\n}\n.navbar-menu--open[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n.navbar-menu[_ngcontent-%COMP%]   .translations-container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  bottom: 40px;\n  display: flex;\n}\n.navbar-menu[_ngcontent-%COMP%]   .translations-container__item[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 6px #A58861 solid;\n  margin-right: 16px;\n  background-color: transparent;\n  color: #A58861;\n  font-size: 26px;\n  line-height: 1;\n  font-family: \"Abril Fatface\";\n  cursor: pointer;\n  transition: 0.3s;\n  outline: none;\n}\n.navbar-menu[_ngcontent-%COMP%]   .translations-container__item--selected[_ngcontent-%COMP%] {\n  color: #191A1E;\n  background-color: #A58861;\n}\n.navbar-menu[_ngcontent-%COMP%]   .translations-container__item[_ngcontent-%COMP%]:hover {\n  color: #191A1E;\n  background-color: #A58861;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBWEY7SUFZSSxrQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FBQUo7QUFHSTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxXQUFBO0VBRE47QUFDRjtBQUlJO0VBQ0UscUJDeENXO0VEeUNYLGNDekNXO0FEdUNqQjtBQUlNO0VBQ0U7SUFDRSx5QkM3Q087SUQ4Q1AsY0MzQ0U7RUR5Q1Y7QUFDRjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVFRO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQU5WO0FBU1E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBUFY7QUFjUTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQVpWO0FBY1U7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFaWjtBQWVVO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBYlo7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkM3SFU7RUQ4SFYsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBbEJKO0FBb0JJO0VBWkY7SUFhSSxRQUFBO0VBakJKO0FBQ0Y7QUFtQkk7RUFDRSxVQUFBO0FBakJOO0FBcUJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBcUJJO0VBWkY7SUFhSSxlQUFBO0VBbEJKO0FBQ0Y7QUFvQkk7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFsQk47QUFxQkk7RUFDRSxjQ25MVztFRG9MWCxlQUFBO0FBbkJOO0FBcUJNO0VBQ0UsY0N2TFM7RUR3TFQsb0JBQUE7QUFuQlI7QUF3QkU7RUFDRSxZQUFBO0FBdEJKO0FBeUJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUF2Qko7QUF5Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNDN01XO0VEOE1YLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBdkJOO0FBeUJNO0VBQ0UsY0NuTkk7RURvTkoseUJDdk5TO0FEZ01qQjtBQTBCTTtFQUNFLGNDeE5JO0VEeU5KLHlCQzVOUztBRG9NakIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgcGFkZGluZzogNDBweCA2MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nby1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IDZweCAjMDAwIHNvbGlkO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xyXG5cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1pbnZlcnNlIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgIGNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgICAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2hhbWJ1cmdlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgJl9fbGluZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLW9wZW4ge1xyXG4gICAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICAmX19saW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcblxyXG4gICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kOiAkZGFyay1ncmF5O1xyXG4gIHRyYW5zaXRpb246IC40cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdTaWxrYSc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJl9faXRlbXMtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTB2dztcclxuICAgIHRvcDogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLS12aXNpYmxlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDIycHggMDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtLWFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLW9wZW4ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuXHJcbiAgLnRyYW5zbGF0aW9ucy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNjBweDtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGJvcmRlcjogNnB4ICR5ZWxsb3ctcHJpbWFyeSBzb2xpZDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAmLS1zZWxlY3RlZCB7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGRhcmstZ3JheTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHllbGxvdy1wcmltYXJ5OiAjQTU4ODYxO1xyXG4keWVsbG93LXNlY29uZGFyeTogI2ZmYzY0ZDtcclxuXHJcbiRkYXJrLWdyYXk6ICMxOTFBMUU7XHJcblxyXG4kYnJlYWtwb2ludC1zbWFsbDogNzY4cHg7XHJcbiRicmVha3BvaW50LWJpZzogMTM2MHB4OyJdfQ== */"] });


/***/ }),

/***/ 2657:
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio-item/portfolio-item.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioItemComponent": () => (/* binding */ PortfolioItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var _portfolio_page_portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../portfolio-page/portfolio-data.mock */ 2504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/translations/translations.pipe */ 7586);






function PortfolioItemComponent_section_0_div_23_figure_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "figure", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("grid-column-start", image_r5.data.column_start)("grid-column-end", image_r5.data.column_end)("grid-row-start", image_r5.data.row_start)("grid-row-end", image_r5.data.row_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "img ", index_r6 + 1, "");
} }
function PortfolioItemComponent_section_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PortfolioItemComponent_section_0_div_23_figure_1_Template, 2, 10, "figure", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("grid-template-columns", "repeat(" + ctx_r2.gridColumns + ", 1fr)")("grid-template-rows", "repeat(" + ctx_r2.gridRows + ", 5vw)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r1.gallery);
} }
function PortfolioItemComponent_section_0_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + tech_r9.icon + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tech_r9.title);
} }
function PortfolioItemComponent_section_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Wykorzystane narz\u0119dzia i technologie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PortfolioItemComponent_section_0_div_24_div_4_Template, 4, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r1.technologies);
} }
function PortfolioItemComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Adres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, PortfolioItemComponent_section_0_div_23_Template, 2, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PortfolioItemComponent_section_0_div_24_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + data_r1.image.main + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, data_r1.detailsTitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, data_r1.fullDescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, "portfolio-details.date-label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", data_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.gallery && data_r1.gallery.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.technologies && data_r1.technologies.length);
} }
class PortfolioItemComponent {
    constructor(route) {
        this.route = route;
        this.data = _portfolio_page_portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.data$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(params => params.get('slug')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(slug => this.data.find(item => item.slug === slug)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(item => {
            if (!(item.gallery && item.gallery.length)) {
                return;
            }
            this.gridColumns = Math.max.apply(Math, [...item.gallery].map(gItem => gItem.data.column_end)) - 1;
            this.gridRows = Math.max.apply(Math, [...item.gallery].map(gItem => gItem.data.row_end)) - 1;
        }));
    }
}
PortfolioItemComponent.ɵfac = function PortfolioItemComponent_Factory(t) { return new (t || PortfolioItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
PortfolioItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioItemComponent, selectors: [["app-portfolio-item"]], decls: 2, vars: 3, consts: [["class", "portfolio-details", 4, "ngIf"], [1, "portfolio-details"], [1, "portfolio-details__info"], [1, "portfolio-details__image"], [1, "portfolio-details__data"], [1, "portfolio-details__data-title"], [1, "portfolio-details__data-separator"], [1, "portfolio-details__data-description"], [1, "portfolio-details__data-link"], [1, "data-link__label"], [1, "data-link__date"], [1, "portfolio-details__data-link", "portfolio-details__data-link--next"], ["target", "_blank", 1, "data-link__href", 3, "href"], ["class", "portfolio-details__gallery", 3, "grid-template-columns", "grid-template-rows", 4, "ngIf"], ["class", "portfolio-details__technology-panel", 4, "ngIf"], ["routerLink", "/portfolio", 1, "portfolio-details__back-button"], [1, "back-button__arrow"], [1, "back-button__arrow-head"], [1, "portfolio-details__gallery"], ["class", "portfolio-details__gallery-item", 3, "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", 4, "ngFor", "ngForOf"], [1, "portfolio-details__gallery-item"], [1, "portfolio-details__gallery-img", 3, "src", "alt"], [1, "portfolio-details__technology-panel"], [1, "technology-panel__title"], [1, "technology-panel__container"], ["class", "technology-panel__container-item", 4, "ngFor", "ngForOf"], [1, "technology-panel__container-item"], [1, "container-item__logo"], [1, "container-item__title"]], template: function PortfolioItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PortfolioItemComponent_section_0_Template, 28, 16, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.data$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslationsPipe], styles: [".portfolio-details[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  overflow: hidden;\n  padding: 30vw 20px;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details[_ngcontent-%COMP%] {\n    padding: 10vw 60px;\n  }\n}\n.portfolio-details__info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 50vw auto auto;\n}\n@media only screen and (min-width: 1360px) {\n  .portfolio-details__info[_ngcontent-%COMP%] {\n    grid-template-columns: 51vw 40px auto;\n    grid-template-rows: unset;\n    grid-template-areas: \"img txt txt\";\n  }\n}\n.portfolio-details__image[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n@media only screen and (min-width: 1360px) {\n  .portfolio-details__data[_ngcontent-%COMP%] {\n    min-height: 500px;\n  }\n}\n.portfolio-details__data-title[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 25px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__data-title[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-top: 0;\n  }\n}\n.portfolio-details__data-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background-color: #000;\n  margin: 10px 0;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__data-separator[_ngcontent-%COMP%] {\n    height: 8px;\n    margin: 20px 0;\n  }\n}\n.portfolio-details__data-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.4;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__data-description[_ngcontent-%COMP%] {\n    padding-right: 140px;\n    font-size: 18px;\n  }\n}\n.portfolio-details__data-link[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  font-size: 16px;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__data-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.portfolio-details__data-link--next[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__label[_ngcontent-%COMP%] {\n  padding-right: 4px;\n  font-weight: bold;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  color: #A58861;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]:visited, .portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]:active {\n  color: #A58861;\n  text-decoration: none;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  width: 0;\n  right: 0;\n  background-color: #A58861;\n  transition: 0.3s;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.portfolio-details__gallery[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  grid-gap: 15px;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__gallery[_ngcontent-%COMP%] {\n    display: grid;\n    margin-top: 250px;\n  }\n}\n.portfolio-details__gallery-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.portfolio-details__gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 220px;\n  text-align: center;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 40px;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__title[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%] {\n  margin: 20px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  width: calc(50% - 60px);\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%] {\n    width: unset;\n  }\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%]   .container-item__logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%]   .container-item__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 8px;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n  width: 60px;\n  border: 6px #000 solid;\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n  transition: 0.3s;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-details__back-button[_ngcontent-%COMP%] {\n    left: 60px;\n    bottom: 40px;\n  }\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow[_ngcontent-%COMP%]::before, .portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow-head[_ngcontent-%COMP%] {\n  border-right-color: #fff;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 6px;\n  width: 24px;\n  background-color: #000;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(-45deg);\n  left: 0px;\n  top: -6px;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(45deg);\n  left: 0px;\n  top: 6px;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow-head[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 6px;\n  height: 6px;\n  border: 3px #000 solid;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1pdGVtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBVEY7SUFVSSxrQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQUFKO0FBRUk7RUFORjtJQU9JLHFDQUFBO0lBQ0EseUJBQUE7SUFDQSxrQ0FBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUlJO0VBREY7SUFFSSxpQkFBQTtFQURKO0FBQ0Y7QUFHSTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdNO0VBTkY7SUFPSSxlQUFBO0lBQ0EsYUFBQTtFQUFOO0FBQ0Y7QUFHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRE47QUFHTTtFQU5GO0lBT0ksV0FBQTtJQUNBLGNBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdNO0VBSkY7SUFLSSxvQkFBQTtJQUNBLGVBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFETjtBQUdNO0VBSkY7SUFLSSxlQUFBO0VBQU47QUFDRjtBQUVNO0VBQ0UsaUJBQUE7QUFBUjtBQUlRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUZWO0FBS1E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0M3Rk87QUQwRmpCO0FBS1U7RUFDRSxjQ2hHSztFRGlHTCxxQkFBQTtBQUhaO0FBTVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EseUJDM0dLO0VENEdMLGdCQUFBO0FBSlo7QUFRWTtFQUNFLFdBQUE7QUFOZDtBQWNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBWko7QUFjSTtFQUpGO0lBS0ksYUFBQTtJQUNBLGlCQUFBO0VBWEo7QUFDRjtBQWFJO0VBQ0UsU0FBQTtBQVhOO0FBY0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFaTjtBQWdCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZEo7QUFpQk07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQlE7RUFORjtJQU9JLGVBQUE7RUFkUjtBQUNGO0FBaUJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWZSO0FBaUJRO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWZWO0FBaUJVO0VBUkY7SUFTSSxZQUFBO0VBZFY7QUFDRjtBQWlCWTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBZmQ7QUFrQlk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQWhCZDtBQXdCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF0Qko7QUF3Qkk7RUFWRjtJQVdJLFVBQUE7SUFDQSxZQUFBO0VBckJKO0FBQ0Y7QUF1Qkk7RUFDRSxzQkFBQTtBQXJCTjtBQXVCTTtFQUNFLHNCQUFBO0FBckJSO0FBdUJRO0VBQ0Usc0JBQUE7QUFyQlY7QUF3QlE7RUFDRSx3QkFBQTtBQXRCVjtBQTJCSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUF6Qk47QUEyQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQXpCUjtBQTRCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBMUJSO0FBNkJNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUEzQlIiLCJmaWxlIjoicG9ydGZvbGlvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ucG9ydGZvbGlvLWRldGFpbHMge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMzB2dyAyMHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICBwYWRkaW5nOiAxMHZ3IDYwcHg7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTB2dyBhdXRvIGF1dG87XHJcbiAgICBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYmlnKSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTF2dyA0MHB4IGF1dG87XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogdW5zZXQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIHR4dCB0eHRcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICAmX19kYXRhIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYmlnKSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJTaWxrYVwiO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1zZXBhcmF0b3Ige1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWxpbmsge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0tbmV4dCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5kYXRhLWxpbmsge1xyXG4gICAgICAgICZfX2xhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faHJlZiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG5cclxuICAgICAgICAgICY6dmlzaXRlZCwgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2dhbGxlcnkge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBncmlkLWdhcDogMTVweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RlY2hub2xvZ3ktcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLnRlY2hub2xvZ3ktcGFuZWwge1xyXG4gICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDYwcHgpO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXItaXRlbSB7XHJcbiAgICAgICAgICAgICZfX2xvZ28ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2JhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYm9yZGVyOiA2cHggIzAwMCBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICBib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblxyXG4gICAgICAuYmFjay1idXR0b25fX2Fycm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWhlYWQge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrLWJ1dHRvbl9fYXJyb3cge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWhlYWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4ICMwMDAgc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJHllbGxvdy1wcmltYXJ5OiAjQTU4ODYxO1xyXG4keWVsbG93LXNlY29uZGFyeTogI2ZmYzY0ZDtcclxuXHJcbiRkYXJrLWdyYXk6ICMxOTFBMUU7XHJcblxyXG4kYnJlYWtwb2ludC1zbWFsbDogNzY4cHg7XHJcbiRicmVha3BvaW50LWJpZzogMTM2MHB4OyJdfQ== */"] });


/***/ }),

/***/ 2504:
/*!******************************************************************!*\
  !*** ./src/app/components/portfolio-page/portfolio-data.mock.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = [
    {
        title: 'portfolio-projects.bczuper.title',
        href: 'https://bczuper.pl',
        detailsTitle: 'portfolio-projects.bczuper.details-title',
        description: `portfolio-projects.bczuper.description`,
        fullDescription: `portfolio-projects.bczuper.full-description`,
        slug: 'bczuper',
        image: {
            min: '/assets/portfolio/bczuper/min.png',
            main: '/assets/portfolio/bczuper/main.png'
        },
        date: '08/2020',
        gallery: [
            {
                image: '/assets/portfolio/bczuper/gallery/4.png',
                data: {
                    column_start: 1,
                    column_end: 6,
                    row_start: 1,
                    row_end: 5
                }
            },
            {
                image: '/assets/portfolio/bczuper/gallery/3.png',
                data: {
                    column_start: 6,
                    column_end: 9,
                    row_start: 1,
                    row_end: 9
                }
            },
            {
                image: '/assets/portfolio/bczuper/gallery/5.png',
                data: {
                    column_start: 1,
                    column_end: 6,
                    row_start: 5,
                    row_end: 9
                }
            },
            {
                image: '/assets/portfolio/bczuper/gallery/1.png',
                data: {
                    column_start: 1,
                    column_end: 5,
                    row_start: 9,
                    row_end: 15
                }
            },
            {
                image: '/assets/portfolio/bczuper/gallery/6.png',
                data: {
                    column_start: 5,
                    column_end: 9,
                    row_start: 9,
                    row_end: 15
                }
            }
        ],
        technologies: [
            { title: 'HTML5', icon: '/assets/logos/html.svg' },
            { title: 'CSS3', icon: '/assets/logos/css.svg' },
            { title: 'Angular', icon: '/assets/logos/angular.svg' },
            { title: 'TypeScript', icon: '/assets/logos/typescript.svg' },
            { title: 'PHP', icon: '/assets/logos/php.svg' },
            { title: 'Directus CMS', icon: '/assets/logos/directus.svg' }
        ]
    },
    {
        title: 'pbborawski.pl',
        href: 'https://pbborawski.pl',
        detailsTitle: 'Przedsiębiorstwo Budowlane Paweł Borawski',
        description: `Pełen profesjonalizm i kompleksowa pomoc. Tak po krótce można opisać działalność PB Borawski.
      Na stronie znajdziemy listę realizowanych inwestycji wraz ze zdjęciami, zakres wykonywanych prac oraz informacje o firmie.`,
        fullDescription: `Pełen profesjonalizm i kompleksowa pomoc. Tak po krótce można opisać działalność PB Borawski.
    Na stronie znajdziemy listę realizowanych inwestycji wraz ze zdjęciami, zakres wykonywanych prac oraz informacje o firmie.`,
        slug: 'pbborawski',
        image: {
            min: '/assets/portfolio/pborawski/min.png',
            main: '/assets/portfolio/pborawski/main.png'
        },
        date: '--/----',
        gallery: [],
        technologies: []
    },
    {
        title: 'Pytania Frontend',
        href: 'https://tkaczyq.github.io/interview-questions/',
        detailsTitle: 'Pytania dla frontend developerów',
        description: `Aplikacja z bazą pytań o frontendzie, filtrami kategorii pytań oraz możliwością głosowania na konkretne pytanie.`,
        fullDescription: `Prosta aplikacja z bazą pytań o frontendzie. Wewnątrz znajdziemy możliwość filtrowania po technologii oraz poziomie zaawansowania pytania.
    Aplikacja oferuje również możliwość głosowania na pytania, aby pomóc ocenić ich jakość.`,
        slug: 'interview-questions',
        image: {
            min: '/assets/portfolio/interview-questions/min.png',
            main: '/assets/portfolio/interview-questions/main.png'
        },
        date: '--/----',
        gallery: [],
        technologies: []
    },
    {
        title: 'adakuba.pl',
        href: 'https://adakuba.pl/',
        detailsTitle: 'ADA // KUBA',
        description: `Strona wizytówka wokalno-gitarowego duetu tworzącego nietuzinkowe utwory.`,
        fullDescription: `Projekt ADA // KUBA skupia się na wokalno-gitarowym duecie dwojga zdolnych muzyków. Tworzą oni covery utworów różnych gatunków muzycznych we własnej interpretacji.
    Na stronie znajdziemy podstawowe informacje o członkach duetu, materiały audiowizualne oraz stopkę z sekcją "kontakt".`,
        slug: 'adakuba',
        image: {
            min: '/assets/portfolio/adakuba/min.png',
            main: '/assets/portfolio/adakuba/main.png'
        },
        date: '11/2021',
        gallery: [
            {
                image: '/assets/portfolio/adakuba/gallery/2.png',
                data: {
                    column_start: 1,
                    column_end: 5,
                    row_start: 1,
                    row_end: 9
                }
            },
            {
                image: '/assets/portfolio/adakuba/gallery/1.png',
                data: {
                    column_start: 5,
                    column_end: 9,
                    row_start: 1,
                    row_end: 5
                }
            },
            {
                image: '/assets/portfolio/adakuba/gallery/3.png',
                data: {
                    column_start: 5,
                    column_end: 9,
                    row_start: 5,
                    row_end: 9
                }
            }
        ],
        technologies: [
            { title: 'HTML5', icon: '/assets/logos/html.svg' },
            { title: 'CSS3', icon: '/assets/logos/css.svg' },
            { title: 'Angular', icon: '/assets/logos/angular.svg' },
            { title: 'TypeScript', icon: '/assets/logos/typescript.svg' }
        ]
    }
];


/***/ }),

/***/ 1143:
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio-page/portfolio-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioPageComponent": () => (/* binding */ PortfolioPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var _portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-data.mock */ 2504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/translations/translations.pipe */ 7586);







function PortfolioPageComponent_ng_container_2_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", "calc(64vh - " + ctx_r5.galleryHeight + "px)");
} }
const _c0 = function (a0) { return [a0]; };
function PortfolioPageComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PortfolioPageComponent_ng_container_2_div_17_Template, 1, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, "/portfolio/" + item_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + item_r3.image.min + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, "portfolio-projects.call-to-action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 9, item_r3.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 11, item_r3.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (index_r4 + 1) % ctx_r0.limitDivider === 0 && ctx_r0.pages.length > ctx_r0.limitDivider);
} }
function PortfolioPageComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PortfolioPageComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.previousGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PortfolioPageComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PortfolioPageComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.nextGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PortfolioPageComponent {
    constructor() {
        this.pages = [..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data, ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_0__.data];
        this.activeGallery = 0;
        this.windowWidth = window.innerWidth;
        this.limitDivider = this.getLimitDividerBasingOnScreenWidth();
        this.activeGalleryLimit = Math.floor(this.pages.length / this.limitDivider);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.listenForWindowResize();
        this.listenForScroll();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.calculateGalleryHeight();
        }, 0);
    }
    listenForWindowResize() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
            this.windowWidth = window.innerWidth;
            this.limitDivider = this.getLimitDividerBasingOnScreenWidth();
            this.activeGalleryLimit = Math.floor(this.pages.length / this.limitDivider);
            this.calculateGalleryHeight();
            if (this.windowWidth <= 768) {
                this.activeGallery = 0;
            }
        })).subscribe();
    }
    listenForScroll() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'wheel').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(() => window.innerWidth > 768), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(30), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((wheelEvent) => wheelEvent.deltaY > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(isDownScroll => {
            return isDownScroll && (this.activeGallery + 1) < this.activeGalleryLimit || !isDownScroll && this.activeGallery >= 0;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((isDownScroll) => {
            isDownScroll ? this.activeGallery++ : this.activeGallery--;
        })).subscribe();
    }
    nextGallery() {
        this.activeGallery++;
    }
    previousGallery() {
        this.activeGallery--;
    }
    calculateGalleryHeight() {
        this.galleryHeight = (document.getElementsByClassName('portfolio-item')[0].offsetHeight + 30) * 2;
    }
    getLimitDividerBasingOnScreenWidth() {
        const width = window.innerWidth;
        return (width < 768 && 1) || (width < 1360 && 4) || 6;
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
}
PortfolioPageComponent.ɵfac = function PortfolioPageComponent_Factory(t) { return new (t || PortfolioPageComponent)(); };
PortfolioPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioPageComponent, selectors: [["app-portfolio-page"]], decls: 5, vars: 5, consts: [[1, "portfolio-container"], [1, "portfolio-container__items-wrapper"], [4, "ngFor", "ngForOf"], ["class", "portfolio__scroll-button portfolio__scroll-button--top", 3, "click", 4, "ngIf"], ["class", "portfolio__scroll-button", 3, "click", 4, "ngIf"], [1, "portfolio-item", 3, "routerLink"], [1, "portfolio-item__filler"], [1, "portfolio-item__content"], [1, "portfolio-item__content-image"], [1, "content-image__background"], [1, "content-image__text"], [1, "portfolio-item__content-text"], [1, "content-text__title"], [1, "content-text__separator"], [1, "content-text__description"], ["class", "portfolio-separator", 3, "margin-top", 4, "ngIf"], [1, "portfolio-separator"], [1, "portfolio__scroll-button", "portfolio__scroll-button--top", 3, "click"], [1, "scroll-button__button-arrow"], [1, "button-arrow__head"], [1, "portfolio__scroll-button", 3, "click"]], template: function PortfolioPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PortfolioPageComponent_ng_container_2_Template, 18, 15, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PortfolioPageComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PortfolioPageComponent_button_4_Template, 3, 0, "button", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", "-" + ctx.activeGallery * 100 + "vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pages.length > ctx.limitDivider && ctx.activeGallery > 0 && ctx.windowWidth > 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pages.length > ctx.limitDivider && ctx.activeGallery + 1 < ctx.activeGalleryLimit && ctx.windowWidth > 768);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref], pipes: [_shared_translations_translations_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslationsPipe], styles: [".portfolio-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 18vh 10vw;\n  max-width: calc(1920px + 10vw);\n  margin: 0 auto;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-container[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n}\n.portfolio-container__items-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n}\n.portfolio-item[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  margin-bottom: 30px;\n  background-color: #eee;\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item[_ngcontent-%COMP%] {\n    width: calc(50% - 20px);\n  }\n  .portfolio-item[_ngcontent-%COMP%]:nth-of-type(2n + 1) {\n    margin-left: 0;\n    margin-right: 20px;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:nth-of-type(2n + 2) {\n    margin-left: 20px;\n    margin-right: 0;\n  }\n}\n@media only screen and (min-width: 1360px) {\n  .portfolio-item[_ngcontent-%COMP%] {\n    width: calc(33% - 20px);\n  }\n  .portfolio-item[_ngcontent-%COMP%]:nth-of-type(3n + 1) {\n    margin-left: 0;\n    margin-right: 10px;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:nth-of-type(3n + 2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:nth-of-type(3n + 3) {\n    margin-left: 10px;\n    margin-right: 0;\n  }\n}\n.portfolio-item__content[_ngcontent-%COMP%] {\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  transition: 0.3s;\n  padding: 10px;\n  background-color: #fff;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item__content[_ngcontent-%COMP%] {\n    position: absolute;\n    padding: 0;\n    background-color: transparent;\n  }\n}\n.portfolio-item__content-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-top: 57%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  transition: 0.3s;\n}\n.portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: rgba(255, 255, 255, 0.65);\n  transition: 0.3s;\n}\n.portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"Silka\";\n  padding: 20px 40px;\n  white-space: nowrap;\n  border: 2px #000 solid;\n  color: #000;\n  font-weight: bold;\n  opacity: 0;\n  transition: 0.3s;\n}\n.portfolio-item__content-text[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  transition: 0.3s;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item__content-text[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__title[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__title[_ngcontent-%COMP%] {\n    color: transparent;\n    transition: 0.3s color;\n  }\n}\n.portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  margin: 10px 0;\n  background-color: #000;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__separator[_ngcontent-%COMP%] {\n    background-color: transparent;\n    transition: 0.3s background-color;\n  }\n}\n.portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__description[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 14px;\n  color: #000;\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__description[_ngcontent-%COMP%] {\n    color: transparent;\n    transition: 0.3s color;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item__filler[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 57%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .portfolio-item[_ngcontent-%COMP%]:hover {\n    overflow: visible;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content[_ngcontent-%COMP%] {\n    left: -30px;\n    top: -30px;\n    width: calc(100% + 60px);\n    min-height: 100%;\n    background-color: #fff;\n    opacity: 1;\n    z-index: 1;\n    box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.15);\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-image[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    margin: 30px 30px 6px;\n    padding-top: calc(57% - 20px);\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__background[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__text[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%] {\n    padding: 0 30px 20px 30px;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__title[_ngcontent-%COMP%] {\n    color: #000;\n    transition-delay: 0.3s;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__separator[_ngcontent-%COMP%] {\n    background-color: #000;\n    transition-delay: 0.3s;\n  }\n  .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__description[_ngcontent-%COMP%] {\n    color: #000;\n    transition-delay: 0.3s;\n  }\n}\n.portfolio-separator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 100%;\n  height: 36vh;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%] {\n  position: relative;\n  height: 60px;\n  width: 60px;\n  border: 6px #000 solid;\n  position: fixed;\n  bottom: 40px;\n  left: 50%;\n  background-color: transparent;\n  border-radius: 0;\n  transition: 0.3s;\n  transform: translateX(-50%);\n  cursor: pointer;\n  outline: none;\n}\n.portfolio__scroll-button--top[_ngcontent-%COMP%] {\n  z-index: 10;\n  top: 40px;\n  bottom: unset;\n}\n.portfolio__scroll-button--top[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) rotate(90deg) !important;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:active {\n  border-radius: 0;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%]::before, .portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%]   .button-arrow__head[_ngcontent-%COMP%] {\n  border-right-color: #fff;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  height: 6px;\n  width: 24px;\n  background-color: #000;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(-45deg);\n  left: 0px;\n  top: -6px;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(45deg);\n  left: 0px;\n  top: 6px;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%]   .button-arrow__head[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 6px;\n  height: 6px;\n  border: 3px #000 solid;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBSkY7QUFNRTtFQU5GO0lBT0ksZ0JBQUE7RUFIRjtBQUNGO0FBS0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKO0FBT0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFKRjtBQU1FO0VBVEY7SUFVSSx1QkFBQTtFQUhGO0VBS0U7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUFISjtFQU1FO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBSko7QUFDRjtBQU9FO0VBdkJGO0lBd0JJLHVCQUFBO0VBSkY7RUFNRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQUpKO0VBT0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBTEo7RUFRRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQU5KO0FBQ0Y7QUFTRTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFyRVM7RUFzRVQsYUFBQTtFQUNBLHNCQUFBO0FBUEo7QUFTSTtFQVRGO0lBVUksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7RUFOSjtBQUNGO0FBUUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFyRk87QUErRWI7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBL0ZHO0FBd0ZiO0FBVVE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkE5R0c7QUFzR2I7QUFhSTtFQUNFLGVBQUE7RUFDQSxnQkFySE87QUEwR2I7QUFhTTtFQUpGO0lBS0ksVUFBQTtFQVZOO0FBQ0Y7QUFhUTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVhWO0FBYVU7RUFORjtJQU9JLGtCQUFBO0lBQ0Esc0JBQUE7RUFWVjtBQUNGO0FBYVE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQVhWO0FBYVU7RUFORjtJQU9JLDZCQUFBO0lBQ0EsaUNBQUE7RUFWVjtBQUNGO0FBYVE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWFY7QUFhVTtFQUxGO0lBTUksa0JBQUE7SUFDQSxzQkFBQTtFQVZWO0FBQ0Y7QUFpQkk7RUFERjtJQUVJLFdBQUE7SUFDQSxnQkFBQTtFQWRKO0FBQ0Y7QUFpQkU7RUFDRTtJQUNFLGlCQUFBO0VBZko7RUFpQkk7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsZ0RBQUE7RUFmTjtFQWtCSTtJQUNFLHdCQUFBO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtFQWhCTjtFQW1CUTtJQUNFLFlBQUE7RUFqQlY7RUFvQlE7SUFDRSxVQUFBO0VBbEJWO0VBdUJJO0lBQ0UseUJBQUE7RUFyQk47RUF3QlE7SUFDRSxXQUFBO0lBQ0Esc0JBN01PO0VBdUxqQjtFQXlCUTtJQUNFLHNCQUFBO0lBQ0Esc0JBbE5PO0VBMkxqQjtFQTBCUTtJQUNFLFdBQUE7SUFDQSxzQkF2Tk87RUErTGpCO0FBQ0Y7QUErQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTVCRjtBQStCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUE1QkY7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUE1Qko7QUE4Qkk7RUFDRSx5REFBQTtBQTVCTjtBQWdDRTtFQUNFLGdCQUFBO0FBOUJKO0FBaUNFO0VBQ0Usc0JBQUE7QUEvQko7QUFpQ0k7RUFDRSxzQkFBQTtBQS9CTjtBQWlDTTtFQUNFLHNCQUFBO0FBL0JSO0FBa0NNO0VBQ0Usd0JBQUE7QUFoQ1I7QUFxQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBbkNKO0FBc0NJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFwQ047QUF1Q0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQXJDTjtBQXdDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBdENOIiwiZmlsZSI6InBvcnRmb2xpby1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuJHRyYW5zaXRpb246IC4zcztcclxuJHRyYW5zaXRpb24tZGVsYXk6IC4zcztcclxuXHJcbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDE4dmggMTB2dztcclxuICBtYXgtd2lkdGg6IGNhbGMoMTkyMHB4ICsgMTB2dyk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICZfX2l0ZW1zLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9ydGZvbGlvLWl0ZW0ge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG5cclxuICAgICY6bnRoLW9mLXR5cGUoMm4gKyAxKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOm50aC1vZi10eXBlKDJuICsgMikge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LWJpZykge1xyXG4gICAgd2lkdGg6IGNhbGMoMzMlIC0gMjBweCk7XHJcblxyXG4gICAgJjpudGgtb2YtdHlwZSgzbiArIDEpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgICY6bnRoLW9mLXR5cGUoM24gKyAyKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOm50aC1vZi10eXBlKDNuICsgMykge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtaW1hZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTclO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG5cclxuICAgICAgLmNvbnRlbnQtaW1hZ2Uge1xyXG4gICAgICAgICZfX2JhY2tncm91bmQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fdGV4dCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2lsa2FcIjtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCAjMDAwIHNvbGlkO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbWFsbCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50LXRleHQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2lsa2EnO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiBjb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX3NlcGFyYXRvciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uIGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NpbGthJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiBjb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJl9fZmlsbGVyIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtc21hbGwpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1NyU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtYWxsKSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgXHJcbiAgICAgIC5wb3J0Zm9saW8taXRlbV9fY29udGVudCB7XHJcbiAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNjBweCk7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggOHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnBvcnRmb2xpby1pdGVtX19jb250ZW50LWltYWdlIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDMwcHggNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDU3JSAtIDIwcHgpO1xyXG4gIFxyXG4gICAgICAgIC5jb250ZW50LWltYWdlIHtcclxuICAgICAgICAgICZfX2JhY2tncm91bmQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAmX190ZXh0IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnBvcnRmb2xpby1pdGVtX19jb250ZW50LXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCAyMHB4IDMwcHg7XHJcbiAgXHJcbiAgICAgICAgLmNvbnRlbnQtdGV4dCB7XHJcbiAgICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwOyAgICBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAmX19zZXBhcmF0b3Ige1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAgICBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwOyAgICBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucG9ydGZvbGlvLXNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzZ2aDtcclxufVxyXG5cclxuLnBvcnRmb2xpb19fc2Nyb2xsLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBib3JkZXI6IDZweCAjMDAwIHNvbGlkO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJi0tdG9wIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgYm90dG9tOiB1bnNldDtcclxuXHJcbiAgICAuc2Nyb2xsLWJ1dHRvbl9fYnV0dG9uLWFycm93IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHJcbiAgICAuc2Nyb2xsLWJ1dHRvbl9fYnV0dG9uLWFycm93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24tYXJyb3dfX2hlYWQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1idXR0b25fX2J1dHRvbi1hcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB0b3A6IC02cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tYXJyb3dfX2hlYWQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC02cHg7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIGJvcmRlcjogM3B4ICMwMDAgc29saWQ7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6218:
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routeAnimation": () => (/* binding */ routeAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 6755);

const routeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'fixed', width: '100%', 'background-color': 'transparent' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ 7586:
/*!**********************************************************!*\
  !*** ./src/app/shared/translations/translations.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationsPipe": () => (/* binding */ TranslationsPipe)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ 5476);
/* harmony import */ var _pl_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pl.json */ 4342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _translations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations.service */ 3360);





class TranslationsPipe {
    constructor(translationsService) {
        this.translationsService = translationsService;
        this.lang = 'pl';
        this.translationFiles = { en: _en_json__WEBPACK_IMPORTED_MODULE_0__, pl: _pl_json__WEBPACK_IMPORTED_MODULE_1__ };
        this.translationsService.languageMemory$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(val => this.lang = val)).subscribe();
    }
    transform(value) {
        return this.translationFiles[this.lang][value] || value;
    }
}
TranslationsPipe.ɵfac = function TranslationsPipe_Factory(t) { return new (t || TranslationsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_translations_service__WEBPACK_IMPORTED_MODULE_2__.TranslationsService, 16)); };
TranslationsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({ name: "t", type: TranslationsPipe, pure: false });


/***/ }),

/***/ 3360:
/*!*************************************************************!*\
  !*** ./src/app/shared/translations/translations.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationsService": () => (/* binding */ TranslationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class TranslationsService {
    constructor() {
        this.languageMemory$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('pl');
    }
}
TranslationsService.ɵfac = function TranslationsService_Factory(t) { return new (t || TranslationsService)(); };
TranslationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TranslationsService, factory: TranslationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5476:
/*!*********************************************!*\
  !*** ./src/app/shared/translations/en.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"main-page.description":"Welcome to my page. My name is Michał and I\'m frontend developer with many years of experience. If you\'re interested in creating webpage, web application or other way of cooperation, feel free to see my ","main-page.description-link":"portfolio page","portfolio-projects.call-to-action":"See more","portfolio-projects.bczuper.title":"bczuper.pl","portfolio-projects.bczuper.details-title":"Bartłomiej Czuper - Emotional Wedding Photography","portfolio-projects.bczuper.description":"Utalentowany fotograf z wieloletnim doświadczeniem, ze świetnym podejściem i pasją. Strona w większości została zaprojektowana w formie one-page. Oddzielny moduł stanowią galerie zdjęć.","portfolio-projects.bczuper.full-description":"Utalentowany fotograf z wieloletnim doświadczeniem, ze świetnym podejściem i pasją. W pracy doskonale uchwyca ujmujące emocje, które towarzyszą parom w najważniejszym dniu ich życia. Strona w większości została zaprojektowana w formie one-page. Oddzielny moduł stanowią galerie zdjęć, w których możemy obejrzeć wszystkie zebrane zlecenia oraz osobno zdjęcia z każdego wydarzenia.","portfolio-details.date-label":"Date of realization:","navbar.about":"About","navbar.projects":"Projects","navbar.contact":"Contact"}');

/***/ }),

/***/ 4342:
/*!*********************************************!*\
  !*** ./src/app/shared/translations/pl.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"main-page.description":"Witam na mojej stronie. Mam na imię Michał i jestem frontend developerem z wieloletnim doświadczeniem. Jeżeli jesteś zainteresowany stworzeniem strony, aplikacji internetowej lub innym rodzajem współpracy, zapraszam do zapoznania się ze stroną ","main-page.description-link":"portfolio","portfolio-projects.call-to-action":"Zobacz więcej","portfolio-projects.bczuper.title":"bczuper.pl","portfolio-projects.bczuper.details-title":"Bartłomiej Czuper - Emocjonalna Fotografia Ślubna","portfolio-projects.bczuper.description":"Utalentowany fotograf z wieloletnim doświadczeniem, ze świetnym podejściem i pasją. Strona w większości została zaprojektowana w formie one-page. Oddzielny moduł stanowią galerie zdjęć.","portfolio-projects.bczuper.full-description":"Utalentowany fotograf z wieloletnim doświadczeniem, ze świetnym podejściem i pasją. W pracy doskonale uchwyca ujmujące emocje, które towarzyszą parom w najważniejszym dniu ich życia. Strona w większości została zaprojektowana w formie one-page. Oddzielny moduł stanowią galerie zdjęć, w których możemy obejrzeć wszystkie zebrane zlecenia oraz osobno zdjęcia z każdego wydarzenia.","portfolio-details.date-label":"Data realizacji:","navbar.about":"O mnie","navbar.projects":"Projekty","navbar.contact":"Kontakt"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map