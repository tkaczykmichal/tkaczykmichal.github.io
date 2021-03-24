(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/portfolio-item/portfolio-item.component */ "./src/app/components/portfolio-item/portfolio-item.component.ts");
/* harmony import */ var _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio-page/portfolio-page.component */ "./src/app/components/portfolio-page/portfolio-page.component.ts");







const routes = [
    { path: '', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"], data: { animation: 'Home' } },
    { path: 'portfolio', component: _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioPageComponent"], data: { animation: 'Portfolio' } },
    { path: 'portfolio/:slug', component: _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioItemComponent"], data: { animation: 'PortfolioItem' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'emkate-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "animation-container"], ["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimation", _r0 && _r0.activatedRouteData && _r0.activatedRouteData["animation"]);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".animation-container[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, #fff 60%, #eee 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxFTUtBVEVcXERlc2t0b3BcXHByb2pla3R5XFxlbWthdGUtcG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5pbWF0aW9uLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmYgNjAlLCAjZWVlIDEwMCUpO1xyXG59IiwiLmFuaW1hdGlvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiA2MCUsICNlZWUgMTAwJSk7XG59Il19 */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["routeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["routeAnimation"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfolio-page/portfolio-page.component */ "./src/app/components/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/portfolio-item/portfolio-item.component */ "./src/app/components/portfolio-item/portfolio-item.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
        _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioPageComponent"],
        _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"],
                    _components_portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioPageComponent"],
                    _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/portfolio"]; };
class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 14, vars: 2, consts: [[1, "main-page"], [1, "main-page__container"], [1, "container__content-wrapper"], [1, "container__text"], [1, "container__text-item", "container__text-item--firstline"], [1, "container__text-item", "container__text-item--secondline"], [1, "container__description"], [3, "routerLink"], [1, "container__image"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Micha\u0142 Tkaczyk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Frontend developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Witam na mojej stronie. Mam na imi\u0119 Micha\u0142 i jestem frontend developerem z wieloletnim do\u015Bwiadczeniem. Je\u017Celi jeste\u015B zainteresowany stworzeniem strony, aplikacji internetowej lub innym rodzajem wsp\u00F3\u0142pracy, zapraszam do zapoznania si\u0119 ze stron\u0105 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".main-page[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main-page__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  min-width: 700px;\n  min-height: 490px;\n  width: 100%;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__image[_ngcontent-%COMP%] {\n  background-image: url('main.jpg');\n  width: 360px;\n  height: 360px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.9;\n  border-radius: 50%;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  margin-right: 60px;\n  flex-shrink: 0;\n  width: 50%;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  font-family: \"Silka\";\n  color: #fff;\n  z-index: 1;\n  margin-bottom: 52px;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__text-item--firstline[_ngcontent-%COMP%] {\n  font-size: 62px;\n  font-weight: 700;\n  color: #000;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__text-item--secondline[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  line-height: 1;\n  color: #A58861;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%] {\n  font-family: \"Silka\", sans-serif;\n  color: #000;\n  font-size: 14px;\n  max-width: 310px;\n  letter-spacing: 0.4px;\n  line-height: 1.5;\n  text-align: right;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #A58861;\n  font-weight: 700;\n  text-decoration: none;\n}\n.main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .main-page__container[_ngcontent-%COMP%]   .container__description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #A58861;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvQzpcXFVzZXJzXFxFTUtBVEVcXERlc2t0b3BcXHByb2pla3R5XFxlbWthdGUtcG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS9DOlxcVXNlcnNcXEVNS0FURVxcRGVza3RvcFxccHJvamVrdHlcXGVta2F0ZS1wb3J0Zm9saW8vc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNESjtBRElNO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FES007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0hSO0FETU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0pSO0FET1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTFo7QURRVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNFNURLO0VGNkRMLGdCQUFBO0VBQ0EsZUFBQTtBQ05aO0FEV007RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRFdRO0VBQ0UsY0U3RU87RUY4RVAsZ0JBQUE7RUFDQSxxQkFBQTtBQ1RWO0FEV1U7RUFFRSxjRW5GSztBRHlFakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubWFpbi1wYWdlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDkwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21haW4uanBnJyk7XHJcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX3RleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTaWxrYSc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MnB4O1xyXG5cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgJi0tZmlyc3RsaW5lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2MnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLS1zZWNvbmRsaW5lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNpbGthXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgJjp2aXNpdGVkLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLm1haW4tcGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tcGFnZV9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDcwMHB4O1xuICBtaW4taGVpZ2h0OiA0OTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1wYWdlX19jb250YWluZXIgLmNvbnRhaW5lcl9faW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFpbi5qcGdcIik7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluLXBhZ2VfX2NvbnRhaW5lciAuY29udGFpbmVyX19jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLm1haW4tcGFnZV9fY29udGFpbmVyIC5jb250YWluZXJfX3RleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGthXCI7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiA1MnB4O1xufVxuLm1haW4tcGFnZV9fY29udGFpbmVyIC5jb250YWluZXJfX3RleHQtaXRlbS0tZmlyc3RsaW5lIHtcbiAgZm9udC1zaXplOiA2MnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYWluLXBhZ2VfX2NvbnRhaW5lciAuY29udGFpbmVyX190ZXh0LWl0ZW0tLXNlY29uZGxpbmUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI0E1ODg2MTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLm1haW4tcGFnZV9fY29udGFpbmVyIC5jb250YWluZXJfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa2FcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluLXBhZ2VfX2NvbnRhaW5lciAuY29udGFpbmVyX19kZXNjcmlwdGlvbiBhIHtcbiAgY29sb3I6ICNBNTg4NjE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWluLXBhZ2VfX2NvbnRhaW5lciAuY29udGFpbmVyX19kZXNjcmlwdGlvbiBhOnZpc2l0ZWQsIC5tYWluLXBhZ2VfX2NvbnRhaW5lciAuY29udGFpbmVyX19kZXNjcmlwdGlvbiBhOmhvdmVyIHtcbiAgY29sb3I6ICNBNTg4NjE7XG59IiwiJHllbGxvdy1wcmltYXJ5OiAjQTU4ODYxO1xyXG4keWVsbG93LXNlY29uZGFyeTogI2ZmYzY0ZDtcclxuXHJcbiRkYXJrLWdyYXk6ICMxOTFBMUU7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const _c0 = function () { return { exact: true }; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.navbarOpen = false;
    }
    ngOnInit() {
        this.listenForRouteChanges();
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    listenForRouteChanges() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.navbarOpen = false;
        })).subscribe();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 10, consts: [[1, "navbar"], ["routerLink", "/", 1, "navbar__logo-item"], [1, "navbar__hamburger", 3, "click"], [1, "hamburger__line"], [1, "navbar-menu"], [1, "navbar-menu__items-wrapper"], ["routerLink", "/", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item", 3, "routerLinkActiveOptions"], ["routerLink", "/portfolio", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item"], ["routerLink", "/blog", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item"], ["routerLink", "/kontakt", "routerLinkActive", "navbar-menu__item--active", 1, "navbar-menu__item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " O mnie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Projekty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navbar__logo-item--inverse", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navbar__hamburger--open", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navbar-menu--open", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navbar-menu__items-wrapper--visible", ctx.navbarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 40px 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.navbar__logo-item[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 1;\n  color: #000;\n  border: 6px #000 solid;\n  width: 60px;\n  height: 60px;\n  text-align: end;\n  padding-right: 6px;\n  transition: 0.4s;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: \"Abril Fatface\", cursive;\n}\n.navbar__logo-item[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n  color: #fff;\n}\n.navbar__logo-item--inverse[_ngcontent-%COMP%] {\n  border-color: #A58861;\n  color: #A58861;\n}\n.navbar__logo-item--inverse[_ngcontent-%COMP%]:hover {\n  background-color: #A58861;\n  color: #191A1E;\n}\n.navbar__hamburger[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #000;\n  height: 6px;\n  width: 100%;\n  transition: 0.2s;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::before {\n  position: absolute;\n  left: 0;\n  content: \"\";\n  height: 6px;\n  width: 100%;\n  top: -12px;\n  background-color: #000;\n  transition: 0.2s;\n  transform-origin: left;\n}\n.navbar__hamburger[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::after {\n  position: absolute;\n  left: 0;\n  content: \"\";\n  height: 6px;\n  width: 100%;\n  bottom: -12px;\n  background-color: #000;\n  transition: 0.2s;\n  transform-origin: left;\n}\n.navbar__hamburger--open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 9px;\n}\n.navbar__hamburger--open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::before {\n  background-color: #fff;\n  transform: rotate(45deg);\n  left: 5px;\n  height: 8px;\n}\n.navbar__hamburger--open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n  transform: rotate(-45deg);\n  left: 5px;\n  height: 8px;\n}\n.navbar-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 0;\n  background: #191A1E;\n  transition: 0.4s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Silka\";\n  overflow: hidden;\n}\n.navbar-menu__items-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10vw;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  transition: 0.4s;\n  opacity: 0;\n}\n.navbar-menu__items-wrapper--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.navbar-menu__item[_ngcontent-%COMP%] {\n  font-size: 80px;\n  line-height: 1;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #fff;\n  margin: 22px 0;\n  padding: 0 20px;\n  letter-spacing: -1px;\n  transition: 0.4s;\n  font-weight: 700;\n}\n.navbar-menu__item[_ngcontent-%COMP%]:hover {\n  color: #666;\n  letter-spacing: -0.5px;\n}\n.navbar-menu__item--active[_ngcontent-%COMP%] {\n  color: #A58861;\n  cursor: default;\n}\n.navbar-menu__item--active[_ngcontent-%COMP%]:hover {\n  color: #A58861;\n  letter-spacing: -1px;\n}\n.navbar-menu--open[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxFTUtBVEVcXERlc2t0b3BcXHByb2pla3R5XFxlbWthdGUtcG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXEVNS0FURVxcRGVza3RvcFxccHJvamVrdHlcXGVta2F0ZS1wb3J0Zm9saW8vc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ0RKO0FER0k7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNETjtBRElJO0VBQ0UscUJFakNXO0VGa0NYLGNFbENXO0FEZ0NqQjtBRElNO0VBQ0UseUJFckNTO0VGc0NULGNFbkNJO0FEaUNaO0FET0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTEo7QURRTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ05SO0FEUVE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDTlY7QURTUTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNQVjtBRGNRO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FDWlY7QURjVTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1paO0FEZVU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNiWjtBRHFCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CRXBIVTtFRnFIVixnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRG9CRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNsQko7QURvQkk7RUFDRSxVQUFBO0FDbEJOO0FEc0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDcEJKO0FEc0JJO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FDcEJOO0FEdUJJO0VBQ0UsY0VsS1c7RUZtS1gsZUFBQTtBQ3JCTjtBRHVCTTtFQUNFLGNFdEtTO0VGdUtULG9CQUFBO0FDckJSO0FEMEJFO0VBQ0UsWUFBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fbG9nby1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IDZweCAjMDAwIHNvbGlkO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pbnZlcnNlIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgIGNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2hhbWJ1cmdlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgJl9fbGluZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLW9wZW4ge1xyXG4gICAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICAmX19saW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcblxyXG4gICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kOiAkZGFyay1ncmF5O1xyXG4gIHRyYW5zaXRpb246IC40cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdTaWxrYSc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJl9faXRlbXMtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTB2dztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgJi0tdmlzaWJsZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAyMnB4IDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1hY3RpdmUge1xyXG4gICAgICBjb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHllbGxvdy1wcmltYXJ5O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS1vcGVuIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbn1cclxuIiwiLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDQwcHggNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5hdmJhcl9fbG9nby1pdGVtIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogNnB4ICMwMDAgc29saWQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiQWJyaWwgRmF0ZmFjZVwiLCBjdXJzaXZlO1xufVxuLm5hdmJhcl9fbG9nby1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyX19sb2dvLWl0ZW0tLWludmVyc2Uge1xuICBib3JkZXItY29sb3I6ICNBNTg4NjE7XG4gIGNvbG9yOiAjQTU4ODYxO1xufVxuLm5hdmJhcl9fbG9nby1pdGVtLS1pbnZlcnNlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1ODg2MTtcbiAgY29sb3I6ICMxOTFBMUU7XG59XG4ubmF2YmFyX19oYW1idXJnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXJfX2hhbWJ1cmdlciAuaGFtYnVyZ2VyX19saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLm5hdmJhcl9faGFtYnVyZ2VyIC5oYW1idXJnZXJfX2xpbmU6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IC0xMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuLm5hdmJhcl9faGFtYnVyZ2VyIC5oYW1idXJnZXJfX2xpbmU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogLTEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG4ubmF2YmFyX19oYW1idXJnZXItLW9wZW4gLmhhbWJ1cmdlcl9fbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDlweDtcbn1cbi5uYXZiYXJfX2hhbWJ1cmdlci0tb3BlbiAuaGFtYnVyZ2VyX19saW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGxlZnQ6IDVweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG4ubmF2YmFyX19oYW1idXJnZXItLW9wZW4gLmhhbWJ1cmdlcl9fbGluZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBsZWZ0OiA1cHg7XG4gIGhlaWdodDogOHB4O1xufVxuXG4ubmF2YmFyLW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6ICMxOTFBMUU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTaWxrYVwiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm5hdmJhci1tZW51X19pdGVtcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTB2dztcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgb3BhY2l0eTogMDtcbn1cbi5uYXZiYXItbWVudV9faXRlbXMtd3JhcHBlci0tdmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubmF2YmFyLW1lbnVfX2l0ZW0ge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDIycHggMDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uYXZiYXItbWVudV9faXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjNjY2O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufVxuLm5hdmJhci1tZW51X19pdGVtLS1hY3RpdmUge1xuICBjb2xvcjogI0E1ODg2MTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLm5hdmJhci1tZW51X19pdGVtLS1hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogI0E1ODg2MTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4ubmF2YmFyLW1lbnUtLW9wZW4ge1xuICB3aWR0aDogMTAwdnc7XG59IiwiJHllbGxvdy1wcmltYXJ5OiAjQTU4ODYxO1xyXG4keWVsbG93LXNlY29uZGFyeTogI2ZmYzY0ZDtcclxuXHJcbiRkYXJrLWdyYXk6ICMxOTFBMUU7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/portfolio-item/portfolio-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio-item/portfolio-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: PortfolioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function() { return PortfolioItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _portfolio_page_portfolio_data_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio-page/portfolio-data.mock */ "./src/app/components/portfolio-page/portfolio-data.mock.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PortfolioItemComponent_div_0_figure_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-column-start", image_r4.data.column_start)("grid-column-end", image_r4.data.column_end)("grid-row-start", image_r4.data.row_start)("grid-row-end", image_r4.data.row_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "img ", index_r5 + 1, "");
} }
function PortfolioItemComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tech_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + tech_r6.icon + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r6.title);
} }
function PortfolioItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Data realizacji:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Adres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PortfolioItemComponent_div_0_figure_21_Template, 2, 10, "figure", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Wykorzystane narz\u0119dzia i technologie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PortfolioItemComponent_div_0_div_26_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + data_r1.image.main + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.detailsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.fullDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.gallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.technologies);
} }
class PortfolioItemComponent {
    constructor(route) {
        this.route = route;
        this.data = _portfolio_page_portfolio_data_mock__WEBPACK_IMPORTED_MODULE_2__["data"];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.data$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(params => params.get('slug')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(slug => this.data.find(item => item.slug === slug)));
    }
}
PortfolioItemComponent.ɵfac = function PortfolioItemComponent_Factory(t) { return new (t || PortfolioItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PortfolioItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioItemComponent, selectors: [["app-portfolio-item"]], decls: 2, vars: 3, consts: [["class", "portfolio-details", 4, "ngIf"], [1, "portfolio-details"], [1, "portfolio-details__info"], [1, "portfolio-details__image"], [1, "portfolio-details__data"], [1, "portfolio-details__data-title"], [1, "portfolio-details__data-separator"], [1, "portfolio-details__data-description"], [1, "portfolio-details__data-link"], [1, "data-link__label"], [1, "data-link__date"], [1, "portfolio-details__data-link", "portfolio-details__data-link--next"], ["target", "_blank", 1, "data-link__href", 3, "href"], [1, "portfolio-details__gallery"], ["class", "portfolio-details__gallery-item", 3, "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", 4, "ngFor", "ngForOf"], [1, "portfolio-details__technology-panel"], [1, "technology-panel__title"], [1, "technology-panel__container"], ["class", "technology-panel__container-item", 4, "ngFor", "ngForOf"], ["routerLink", "/portfolio", 1, "portfolio-details__back-button"], [1, "back-button__arrow"], [1, "back-button__arrow-head"], [1, "portfolio-details__gallery-item"], [1, "portfolio-details__gallery-img", 3, "src", "alt"], [1, "technology-panel__container-item"], [1, "container-item__logo"], [1, "container-item__title"]], template: function PortfolioItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PortfolioItemComponent_div_0_Template, 30, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.data$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".portfolio-details[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  overflow: hidden;\n  padding: 10vw 60px;\n}\n.portfolio-details__info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 51vw 40px auto;\n  grid-template-areas: \"img txt txt\";\n}\n.portfolio-details__image[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.portfolio-details__data-title[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 50px;\n  font-weight: bold;\n}\n.portfolio-details__data-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background-color: #000;\n  margin: 20px 0;\n}\n.portfolio-details__data-description[_ngcontent-%COMP%] {\n  padding-right: 140px;\n  font-size: 18px;\n  line-height: 1.4;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  font-size: 20px;\n}\n.portfolio-details__data-link--next[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__label[_ngcontent-%COMP%] {\n  padding-right: 4px;\n  font-weight: bold;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  color: #A58861;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]:visited, .portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]:active {\n  color: #A58861;\n  text-decoration: none;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  width: 0;\n  right: 0;\n  background-color: #A58861;\n  transition: 0.3s;\n}\n.portfolio-details__data-link[_ngcontent-%COMP%]   .data-link__href[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.portfolio-details__gallery[_ngcontent-%COMP%] {\n  margin-top: 250px;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(14, 5vw);\n  grid-gap: 15px;\n}\n.portfolio-details__gallery-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.portfolio-details__gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 220px;\n  text-align: center;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 46px;\n  font-weight: bold;\n  margin-bottom: 40px;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%] {\n  margin: 20px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%]   .container-item__logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n.portfolio-details__technology-panel[_ngcontent-%COMP%]   .technology-panel__container-item[_ngcontent-%COMP%]   .container-item__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 8px;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n  width: 60px;\n  border: 6px #000 solid;\n  position: fixed;\n  left: 60px;\n  bottom: 40px;\n  transition: 0.3s;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow[_ngcontent-%COMP%]::before, .portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]:hover   .back-button__arrow-head[_ngcontent-%COMP%] {\n  border-right-color: #fff;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 6px;\n  width: 24px;\n  background-color: #000;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(-45deg);\n  left: 0px;\n  top: -6px;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(45deg);\n  left: 0px;\n  top: 6px;\n}\n.portfolio-details__back-button[_ngcontent-%COMP%]   .back-button__arrow-head[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 6px;\n  height: 6px;\n  border: 3px #000 solid;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8taXRlbS9DOlxcVXNlcnNcXEVNS0FURVxcRGVza3RvcFxccHJvamVrdHlcXGVta2F0ZS1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcnRmb2xpby1pdGVtXFxwb3J0Zm9saW8taXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8taXRlbS9wb3J0Zm9saW8taXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8taXRlbS9DOlxcVXNlcnNcXEVNS0FURVxcRGVza3RvcFxccHJvamVrdHlcXGVta2F0ZS1wb3J0Zm9saW8vc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7QUNESjtBRElFO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FETUk7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0xOO0FEUUk7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05OO0FEU0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNQTjtBRFNNO0VBQ0UsaUJBQUE7QUNQUjtBRFdRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ1RWO0FEWVE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0U1RE87QURrRGpCO0FEWVU7RUFDRSxjRS9ESztFRmdFTCxxQkFBQTtBQ1ZaO0FEYVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EseUJFMUVLO0VGMkVMLGdCQUFBO0FDWFo7QURlWTtFQUNFLFdBQUE7QUNiZDtBRHFCRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0FDbkJKO0FEcUJJO0VBQ0UsU0FBQTtBQ25CTjtBRHNCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3BCTjtBRHdCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDdEJKO0FEeUJNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3ZCUjtBRDBCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ3hCUjtBRDBCUTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUN4QlY7QUQyQlk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ3pCZDtBRDRCWTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDMUJkO0FEa0NFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2hDSjtBRGtDSTtFQUNFLHNCQUFBO0FDaENOO0FEa0NNO0VBQ0Usc0JBQUE7QUNoQ1I7QURrQ1E7RUFDRSxzQkFBQTtBQ2hDVjtBRG1DUTtFQUNFLHdCQUFBO0FDakNWO0FEc0NJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ3BDTjtBRHNDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDcENSO0FEdUNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNyQ1I7QUR3Q007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ3RDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvLWl0ZW0vcG9ydGZvbGlvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ucG9ydGZvbGlvLWRldGFpbHMge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTB2dyA2MHB4O1xyXG5cclxuICAmX19pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTF2dyA0MHB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltZyB0eHQgdHh0XCI7XHJcbiAgfVxyXG5cclxuICAmX19pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuXHJcbiAgJl9fZGF0YSB7XHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiU2lsa2FcIjtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAmLXNlcGFyYXRvciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi1saW5rIHtcclxuICAgICAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICYtLW5leHQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGF0YS1saW5rIHtcclxuICAgICAgICAmX19sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2hyZWYge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuXHJcbiAgICAgICAgICAmOnZpc2l0ZWQsICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR5ZWxsb3ctcHJpbWFyeTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LXByaW1hcnk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19nYWxsZXJ5IHtcclxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxNCwgNXZ3KTtcclxuICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGVjaG5vbG9neS1wYW5lbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAudGVjaG5vbG9neS1wYW5lbCB7XHJcbiAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAzMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jb250YWluZXItaXRlbSB7XHJcbiAgICAgICAgICAgICZfX2xvZ28ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2JhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYm9yZGVyOiA2cHggIzAwMCBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblxyXG4gICAgICAuYmFjay1idXR0b25fX2Fycm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWhlYWQge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrLWJ1dHRvbl9fYXJyb3cge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWhlYWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4ICMwMDAgc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLnBvcnRmb2xpby1kZXRhaWxzIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHZ3IDYwcHg7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2luZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MXZ3IDQwcHggYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWcgdHh0IHR4dFwiO1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fZGF0YS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGthXCI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2RhdGEtc2VwYXJhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fZGF0YS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2RhdGEtbGluayB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2RhdGEtbGluay0tbmV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19kYXRhLWxpbmsgLmRhdGEtbGlua19fbGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19kYXRhLWxpbmsgLmRhdGEtbGlua19faHJlZiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0E1ODg2MTtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fZGF0YS1saW5rIC5kYXRhLWxpbmtfX2hyZWY6dmlzaXRlZCwgLnBvcnRmb2xpby1kZXRhaWxzX19kYXRhLWxpbmsgLmRhdGEtbGlua19faHJlZjphY3RpdmUge1xuICBjb2xvcjogI0E1ODg2MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19kYXRhLWxpbmsgLmRhdGEtbGlua19faHJlZjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1ODg2MTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fZGF0YS1saW5rIC5kYXRhLWxpbmtfX2hyZWY6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2dhbGxlcnkge1xuICBtYXJnaW4tdG9wOiAyNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTQsIDV2dyk7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19nYWxsZXJ5LWl0ZW0ge1xuICBtYXJnaW46IDA7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2dhbGxlcnktaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX3RlY2hub2xvZ3ktcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDIyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX3RlY2hub2xvZ3ktcGFuZWwgLnRlY2hub2xvZ3ktcGFuZWxfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX190ZWNobm9sb2d5LXBhbmVsIC50ZWNobm9sb2d5LXBhbmVsX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fdGVjaG5vbG9neS1wYW5lbCAudGVjaG5vbG9neS1wYW5lbF9fY29udGFpbmVyLWl0ZW0ge1xuICBtYXJnaW46IDIwcHggMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fdGVjaG5vbG9neS1wYW5lbCAudGVjaG5vbG9neS1wYW5lbF9fY29udGFpbmVyLWl0ZW0gLmNvbnRhaW5lci1pdGVtX19sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fdGVjaG5vbG9neS1wYW5lbCAudGVjaG5vbG9neS1wYW5lbF9fY29udGFpbmVyLWl0ZW0gLmNvbnRhaW5lci1pdGVtX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyOiA2cHggIzAwMCBzb2xpZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA2MHB4O1xuICBib3R0b206IDQwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2JhY2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fYmFjay1idXR0b246aG92ZXIgLmJhY2stYnV0dG9uX19hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2JhY2stYnV0dG9uOmhvdmVyIC5iYWNrLWJ1dHRvbl9fYXJyb3c6OmJlZm9yZSwgLnBvcnRmb2xpby1kZXRhaWxzX19iYWNrLWJ1dHRvbjpob3ZlciAuYmFjay1idXR0b25fX2Fycm93OjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2JhY2stYnV0dG9uOmhvdmVyIC5iYWNrLWJ1dHRvbl9fYXJyb3ctaGVhZCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fYmFjay1idXR0b24gLmJhY2stYnV0dG9uX19hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5wb3J0Zm9saW8tZGV0YWlsc19fYmFjay1idXR0b24gLmJhY2stYnV0dG9uX19hcnJvdzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNnB4O1xufVxuLnBvcnRmb2xpby1kZXRhaWxzX19iYWNrLWJ1dHRvbiAuYmFjay1idXR0b25fX2Fycm93OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA2cHg7XG59XG4ucG9ydGZvbGlvLWRldGFpbHNfX2JhY2stYnV0dG9uIC5iYWNrLWJ1dHRvbl9fYXJyb3ctaGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiAzcHggIzAwMCBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59IiwiJHllbGxvdy1wcmltYXJ5OiAjQTU4ODYxO1xyXG4keWVsbG93LXNlY29uZGFyeTogI2ZmYzY0ZDtcclxuXHJcbiRkYXJrLWdyYXk6ICMxOTFBMUU7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-item',
                templateUrl: './portfolio-item.component.html',
                styleUrls: ['./portfolio-item.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/portfolio-page/portfolio-data.mock.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/portfolio-page/portfolio-data.mock.ts ***!
  \******************************************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [
    {
        title: 'bczuper.pl',
        href: 'https://bczuper.pl',
        detailsTitle: 'Bartłomiej Czuper - Emocjonalna Fotografia Ślubna',
        description: `Utalentowany fotograf z wieloletnim doświadczeniem, ze świetnym podejściem i pasją.
      Strona w większości została zaprojektowana w formie one-page. Oddzielny moduł stanowią galerie zdjęć.`,
        fullDescription: `Utalentowany fotograf z wieloletnim doświadczeniem, ze świetnym podejściem i pasją.
      W pracy doskonale uchwyca ujmujące emocje, które towarzyszą parom w najważniejszym dniu ich życia.
      Strona w większości została zaprojektowana w formie one-page. Oddzielny moduł stanowią galerie zdjęć,
      w których możemy obejrzeć wszystkie zebrane zlecenia oraz osobno zdjęcia z każdego wydarzenia.`,
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
            main: ''
        },
        date: '08/2020',
        gallery: [],
        technologies: [
            { title: '', icon: '' }
        ]
    }
];


/***/ }),

/***/ "./src/app/components/portfolio-page/portfolio-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/portfolio-page/portfolio-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: PortfolioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageComponent", function() { return PortfolioPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-data.mock */ "./src/app/components/portfolio-page/portfolio-data.mock.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function PortfolioPageComponent_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "calc(64vh - " + ctx_r5.galleryHeight + "px)");
} }
const _c0 = function (a0) { return [a0]; };
function PortfolioPageComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Zobacz wi\u0119cej");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PortfolioPageComponent_ng_container_2_div_14_Template, 1, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/portfolio/" + item_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + item_r3.image.min + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (index_r4 + 1) % 6 === 0 && ctx_r0.pages.length > 6);
} }
function PortfolioPageComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioPageComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.previousGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortfolioPageComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioPageComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.nextGallery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PortfolioPageComponent {
    constructor() {
        this.pages = [..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"], ..._portfolio_data_mock__WEBPACK_IMPORTED_MODULE_3__["data"]];
        this.activeGallery = 0;
        this.activeGalleryLimit = Math.floor(this.pages.length / 6);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.calculateGalleryHeight())).subscribe();
    }
    listenForScroll() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((wheelEvent) => wheelEvent.deltaY > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(isDownScroll => {
            return isDownScroll && (this.activeGallery + 1) < this.activeGalleryLimit || !isDownScroll && this.activeGallery >= 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((isDownScroll) => {
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
    ngOnDestroy() {
        this.destroy$.next();
    }
}
PortfolioPageComponent.ɵfac = function PortfolioPageComponent_Factory(t) { return new (t || PortfolioPageComponent)(); };
PortfolioPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioPageComponent, selectors: [["app-portfolio-page"]], decls: 5, vars: 5, consts: [[1, "portfolio-container"], [1, "portfolio-container__items-wrapper"], [4, "ngFor", "ngForOf"], ["class", "portfolio__scroll-button portfolio__scroll-button--top", 3, "click", 4, "ngIf"], ["class", "portfolio__scroll-button", 3, "click", 4, "ngIf"], [1, "portfolio-item", 3, "routerLink"], [1, "portfolio-item__filler"], [1, "portfolio-item__content"], [1, "portfolio-item__content-image"], [1, "content-image__background"], [1, "content-image__text"], [1, "portfolio-item__content-text"], [1, "content-text__title"], [1, "content-text__separator"], [1, "content-text__description"], ["class", "portfolio-separator", 3, "margin-top", 4, "ngIf"], [1, "portfolio-separator"], [1, "portfolio__scroll-button", "portfolio__scroll-button--top", 3, "click"], [1, "scroll-button__button-arrow"], [1, "button-arrow__head"], [1, "portfolio__scroll-button", 3, "click"]], template: function PortfolioPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioPageComponent_ng_container_2_Template, 15, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioPageComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioPageComponent_button_4_Template, 3, 0, "button", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-" + ctx.activeGallery * 100 + "vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pages.length > 6 && ctx.activeGallery > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pages.length > 6 && ctx.activeGallery + 1 < ctx.activeGalleryLimit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".portfolio-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 18vh 10vw;\n  overflow: hidden;\n}\n.portfolio-container__items-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n}\n.portfolio-item[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: calc(33% - 20px);\n  margin-bottom: 30px;\n  background-color: #eee;\n  position: relative;\n  overflow: hidden;\n}\n.portfolio-item[_ngcontent-%COMP%]:nth-of-type(3n + 1) {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.portfolio-item[_ngcontent-%COMP%]:nth-of-type(3n + 2) {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.portfolio-item[_ngcontent-%COMP%]:nth-of-type(3n + 3) {\n  margin-left: 10px;\n  margin-right: 0;\n}\n.portfolio-item__content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  transition: 0.3s;\n}\n.portfolio-item__content-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-top: 57%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  transition: 0.3s;\n}\n.portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: rgba(255, 255, 255, 0.65);\n  transition: 0.3s;\n}\n.portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"Silka\";\n  padding: 20px 40px;\n  white-space: nowrap;\n  border: 2px #000 solid;\n  color: #000;\n  font-weight: bold;\n  opacity: 0;\n  transition: 0.3s;\n}\n.portfolio-item__content-text[_ngcontent-%COMP%] {\n  padding: 0;\n  transition: 0.3s;\n}\n.portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__title[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 32px;\n  font-weight: 700;\n  color: transparent;\n  transition: 0.3s color;\n}\n.portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  margin: 10px 0;\n  transition: 0.3s background-color;\n}\n.portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__description[_ngcontent-%COMP%] {\n  font-family: \"Silka\";\n  font-size: 14px;\n  color: transparent;\n  transition: 0.3s color;\n}\n.portfolio-item__filler[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 57%;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover {\n  overflow: visible;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -30px;\n  top: -30px;\n  width: calc(100% + 60px);\n  min-height: 100%;\n  background-color: #fff;\n  opacity: 1;\n  z-index: 1;\n  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.15);\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-image[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  margin: 30px 30px 6px;\n  padding-top: calc(57% - 20px);\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__background[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-image[_ngcontent-%COMP%]   .content-image__text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%] {\n  padding: 0 30px 20px 30px;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__title[_ngcontent-%COMP%] {\n  color: #000;\n  transition-delay: 0.3s;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__separator[_ngcontent-%COMP%] {\n  background-color: #000;\n  transition-delay: 0.3s;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-item__content-text[_ngcontent-%COMP%]   .content-text__description[_ngcontent-%COMP%] {\n  color: #000;\n  transition-delay: 0.3s;\n}\n.portfolio-separator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 100%;\n  height: 36vh;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%] {\n  position: relative;\n  height: 60px;\n  width: 60px;\n  border: 6px #000 solid;\n  position: fixed;\n  bottom: 40px;\n  left: 50%;\n  background-color: transparent;\n  border-radius: 0;\n  transition: 0.3s;\n  transform: translateX(-50%);\n  cursor: pointer;\n  outline: none;\n}\n.portfolio__scroll-button--top[_ngcontent-%COMP%] {\n  z-index: 10;\n  top: 40px;\n  bottom: unset;\n}\n.portfolio__scroll-button--top[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) rotate(90deg) !important;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:active {\n  border-radius: 0;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%]::before, .portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]:hover   .scroll-button__button-arrow[_ngcontent-%COMP%]   .button-arrow__head[_ngcontent-%COMP%] {\n  border-right-color: #fff;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-90deg);\n  height: 6px;\n  width: 24px;\n  background-color: #000;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(-45deg);\n  left: 0px;\n  top: -6px;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 14px;\n  height: 6px;\n  background-color: #000;\n  transform: rotate(45deg);\n  left: 0px;\n  top: 6px;\n}\n.portfolio__scroll-button[_ngcontent-%COMP%]   .scroll-button__button-arrow[_ngcontent-%COMP%]   .button-arrow__head[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 6px;\n  height: 6px;\n  border: 3px #000 solid;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8tcGFnZS9DOlxcVXNlcnNcXEVNS0FURVxcRGVza3RvcFxccHJvamVrdHlcXGVta2F0ZS1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcnRmb2xpby1wYWdlXFxwb3J0Zm9saW8tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8tcGFnZS9wb3J0Zm9saW8tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRkY7QURJRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRko7QURNQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0xKO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkE5Q1M7QUN3Q2I7QURRSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQXRETztBQ2dEYjtBRFNRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFoRUc7QUN5RGI7QURVUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQS9FRztBQ3VFYjtBRGFJO0VBQ0UsVUFBQTtFQUNBLGdCQXRGTztBQzJFYjtBRGNRO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDWlY7QURlUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FDYlY7QURnQlE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDZFY7QURvQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURxQkU7RUFDRSxpQkFBQTtBQ25CSjtBRHFCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0FDbkJOO0FEc0JJO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FDcEJOO0FEdUJRO0VBQ0UsWUFBQTtBQ3JCVjtBRHdCUTtFQUNFLFVBQUE7QUN0QlY7QUQyQkk7RUFDRSx5QkFBQTtBQ3pCTjtBRDRCUTtFQUNFLFdBQUE7RUFDQSxzQkEzSlM7QUNpSW5CO0FENkJRO0VBQ0Usc0JBQUE7RUFDQSxzQkFoS1M7QUNxSW5CO0FEOEJRO0VBQ0UsV0FBQTtFQUNBLHNCQXJLUztBQ3lJbkI7QURtQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDRjtBRG1DQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNoQ0Y7QURrQ0U7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNoQ0o7QURrQ0k7RUFDRSx5REFBQTtBQ2hDTjtBRG9DRTtFQUNFLGdCQUFBO0FDbENKO0FEcUNFO0VBQ0Usc0JBQUE7QUNuQ0o7QURxQ0k7RUFDRSxzQkFBQTtBQ25DTjtBRHFDTTtFQUNFLHNCQUFBO0FDbkNSO0FEc0NNO0VBQ0Usd0JBQUE7QUNwQ1I7QUR5Q0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDdkNKO0FEMENJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUN4Q047QUQyQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ3pDTjtBRDRDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDMUNOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8tcGFnZS9wb3J0Zm9saW8tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0cmFuc2l0aW9uOiAuM3M7XHJcbiR0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XHJcblxyXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxOHZoIDEwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJl9faXRlbXMtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taXRlbSB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMjBweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gICY6bnRoLW9mLXR5cGUoM24gKyAxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gICY6bnRoLW9mLXR5cGUoM24gKyAyKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gICY6bnRoLW9mLXR5cGUoM24gKyAzKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuXHJcbiAgICAmLWltYWdlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDU3JTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuXHJcbiAgICAgIC5jb250ZW50LWltYWdlIHtcclxuICAgICAgICAmX19iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX3RleHQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNpbGthXCI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggIzAwMCBzb2xpZDtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcblxyXG4gICAgICAuY29udGVudC10ZXh0IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NpbGthJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiBjb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX3NlcGFyYXRvciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTaWxrYSc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJl9fZmlsbGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDU3JTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgLnBvcnRmb2xpby1pdGVtX19jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgdG9wOiAtMzBweDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDYwcHgpO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggOHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvcnRmb2xpby1pdGVtX19jb250ZW50LWltYWdlIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICBtYXJnaW46IDMwcHggMzBweCA2cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDU3JSAtIDIwcHgpO1xyXG5cclxuICAgICAgLmNvbnRlbnQtaW1hZ2Uge1xyXG4gICAgICAgICZfX2JhY2tncm91bmQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fdGV4dCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0Zm9saW8taXRlbV9fY29udGVudC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMCAzMHB4IDIwcHggMzBweDtcclxuXHJcbiAgICAgIC5jb250ZW50LXRleHQge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwOyAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fc2VwYXJhdG9yIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7ICAgIFxyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDsgICAgXHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAkdHJhbnNpdGlvbi1kZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tc2VwYXJhdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNnZoO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGJvcmRlcjogNnB4ICMwMDAgc29saWQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmLS10b3Age1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBib3R0b206IHVuc2V0O1xyXG5cclxuICAgIC5zY3JvbGwtYnV0dG9uX19idXR0b24tYXJyb3cge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cclxuICAgIC5zY3JvbGwtYnV0dG9uX19idXR0b24tYXJyb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbi1hcnJvd19faGVhZCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsLWJ1dHRvbl9fYnV0dG9uLWFycm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIFxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHRvcDogLTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgdG9wOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi1hcnJvd19faGVhZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTZweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYm9yZGVyOiAzcHggIzAwMCBzb2xpZDtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTh2aCAxMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBvcnRmb2xpby1jb250YWluZXJfX2l0ZW1zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnBvcnRmb2xpby1pdGVtIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiBjYWxjKDMzJSAtIDIwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucG9ydGZvbGlvLWl0ZW06bnRoLW9mLXR5cGUoM24gKyAxKSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucG9ydGZvbGlvLWl0ZW06bnRoLW9mLXR5cGUoM24gKyAyKSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucG9ydGZvbGlvLWl0ZW06bnRoLW9mLXR5cGUoM24gKyAzKSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnBvcnRmb2xpby1pdGVtX19jb250ZW50LWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDU3JTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnBvcnRmb2xpby1pdGVtX19jb250ZW50LWltYWdlIC5jb250ZW50LWltYWdlX19iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQtaW1hZ2UgLmNvbnRlbnQtaW1hZ2VfX3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LWZhbWlseTogXCJTaWxrYVwiO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMnB4ICMwMDAgc29saWQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wb3J0Zm9saW8taXRlbV9fY29udGVudC10ZXh0IHtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wb3J0Zm9saW8taXRlbV9fY29udGVudC10ZXh0IC5jb250ZW50LXRleHRfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2lsa2FcIjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3MgY29sb3I7XG59XG4ucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQtdGV4dCAuY29udGVudC10ZXh0X19zZXBhcmF0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQtY29sb3I7XG59XG4ucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQtdGV4dCAuY29udGVudC10ZXh0X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlNpbGthXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjNzIGNvbG9yO1xufVxuLnBvcnRmb2xpby1pdGVtX19maWxsZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDU3JTtcbn1cbi5wb3J0Zm9saW8taXRlbTpob3ZlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5wb3J0Zm9saW8taXRlbV9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMwcHg7XG4gIHRvcDogLTMwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA2MHB4KTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5wb3J0Zm9saW8taXRlbV9fY29udGVudC1pbWFnZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgbWFyZ2luOiAzMHB4IDMwcHggNnB4O1xuICBwYWRkaW5nLXRvcDogY2FsYyg1NyUgLSAyMHB4KTtcbn1cbi5wb3J0Zm9saW8taXRlbTpob3ZlciAucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQtaW1hZ2UgLmNvbnRlbnQtaW1hZ2VfX2JhY2tncm91bmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9ydGZvbGlvLWl0ZW06aG92ZXIgLnBvcnRmb2xpby1pdGVtX19jb250ZW50LWltYWdlIC5jb250ZW50LWltYWdlX190ZXh0IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wb3J0Zm9saW8taXRlbTpob3ZlciAucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQtdGV4dCB7XG4gIHBhZGRpbmc6IDAgMzBweCAyMHB4IDMwcHg7XG59XG4ucG9ydGZvbGlvLWl0ZW06aG92ZXIgLnBvcnRmb2xpby1pdGVtX19jb250ZW50LXRleHQgLmNvbnRlbnQtdGV4dF9fdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cbi5wb3J0Zm9saW8taXRlbTpob3ZlciAucG9ydGZvbGlvLWl0ZW1fX2NvbnRlbnQtdGV4dCAuY29udGVudC10ZXh0X19zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5wb3J0Zm9saW8taXRlbV9fY29udGVudC10ZXh0IC5jb250ZW50LXRleHRfX2Rlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5wb3J0Zm9saW8tc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNnZoO1xufVxuXG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXI6IDZweCAjMDAwIHNvbGlkO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uLS10b3Age1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiA0MHB4O1xuICBib3R0b206IHVuc2V0O1xufVxuLnBvcnRmb2xpb19fc2Nyb2xsLWJ1dHRvbi0tdG9wIC5zY3JvbGwtYnV0dG9uX19idXR0b24tYXJyb3cge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uOmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5wb3J0Zm9saW9fX3Njcm9sbC1idXR0b246aG92ZXIgLnNjcm9sbC1idXR0b25fX2J1dHRvbi1hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uOmhvdmVyIC5zY3JvbGwtYnV0dG9uX19idXR0b24tYXJyb3c6OmJlZm9yZSwgLnBvcnRmb2xpb19fc2Nyb2xsLWJ1dHRvbjpob3ZlciAuc2Nyb2xsLWJ1dHRvbl9fYnV0dG9uLWFycm93OjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uOmhvdmVyIC5zY3JvbGwtYnV0dG9uX19idXR0b24tYXJyb3cgLmJ1dHRvbi1hcnJvd19faGVhZCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcbn1cbi5wb3J0Zm9saW9fX3Njcm9sbC1idXR0b24gLnNjcm9sbC1idXR0b25fX2J1dHRvbi1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5wb3J0Zm9saW9fX3Njcm9sbC1idXR0b24gLnNjcm9sbC1idXR0b25fX2J1dHRvbi1hcnJvdzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNnB4O1xufVxuLnBvcnRmb2xpb19fc2Nyb2xsLWJ1dHRvbiAuc2Nyb2xsLWJ1dHRvbl9fYnV0dG9uLWFycm93OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA2cHg7XG59XG4ucG9ydGZvbGlvX19zY3JvbGwtYnV0dG9uIC5zY3JvbGwtYnV0dG9uX19idXR0b24tYXJyb3cgLmJ1dHRvbi1hcnJvd19faGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyOiAzcHggIzAwMCBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-page',
                templateUrl: './portfolio-page.component.html',
                styleUrls: ['./portfolio-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: routeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimation", function() { return routeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const routeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%', 'background-color': 'transparent' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\EMKATE\Desktop\projekty\emkate-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map