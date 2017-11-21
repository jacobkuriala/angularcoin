webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"../assets/favico/apple-icon-57x57.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"../assets/favico/apple-icon-60x60.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"../assets/favico/apple-icon-72x72.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"../assets/favico/apple-icon-76x76.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"../assets/favico/apple-icon-114x114.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"../assets/favico/apple-icon-120x120.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"../assets/favico/apple-icon-144x144.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"../assets/favico/apple-icon-152x152.png\">\r\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"../assets/favico/apple-icon-180x180.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"192x192\"  href=\"../assets/favico/android-icon-192x192.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"../assets/favico/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"../assets/favico/favicon-96x96.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"../assets/favico/favicon-16x16.png\">\r\n<link rel=\"manifest\" href=\"/manifest.json\">\r\n<meta name=\"msapplication-TileColor\" content=\"#ffffff\">\r\n<meta name=\"msapplication-TileImage\" content=\"/ms-icon-144x144.png\">\r\n<meta name=\"theme-color\" content=\"#ffffff\">\r\n  <app-top-nav></app-top-nav>\r\n  <h1>\r\n    <!-- <app-testing-gdaxweb-socket></app-testing-gdaxweb-socket> -->\r\n  </h1>\r\n  <br>\r\n  <router-outlet></router-outlet>\r\n  <!-- <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_gdax_service__ = __webpack_require__("../../../../../src/app/http-gdax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_testing_gdaxweb_socket_testing_gdaxweb_socket_component__ = __webpack_require__("../../../../../src/app/component/testing-gdaxweb-socket/testing-gdaxweb-socket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_gdax_http_gdax_http_component__ = __webpack_require__("../../../../../src/app/component/gdax-http/gdax-http.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_price_chart_price_chart_component__ = __webpack_require__("../../../../../src/app/component/price-chart/price-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/component/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_about_about_component__ = __webpack_require__("../../../../../src/app/component/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_price_chart_picker_price_chart_picker_component__ = __webpack_require__("../../../../../src/app/component/price-chart-picker/price-chart-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__component_price_chart_price_chart_component__["a" /* PriceChartComponent */] },
    { path: 'ticker', component: __WEBPACK_IMPORTED_MODULE_9__component_testing_gdaxweb_socket_testing_gdaxweb_socket_component__["a" /* TestingGdaxwebSocketComponent */] },
    { path: 'prices/:duration', component: __WEBPACK_IMPORTED_MODULE_11__component_price_chart_price_chart_component__["a" /* PriceChartComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_13__component_about_about_component__["a" /* AboutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_testing_gdaxweb_socket_testing_gdaxweb_socket_component__["a" /* TestingGdaxwebSocketComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_gdax_http_gdax_http_component__["a" /* GdaxHttpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_price_chart_price_chart_component__["a" /* PriceChartComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_top_nav_top_nav_component__["a" /* TopNavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_price_chart_picker_price_chart_picker_component__["a" /* PriceChartPickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__http_gdax_service__["a" /* HttpGdaxService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"display-3\">Angular + Cryptocurrency</h1>\r\n    <p>This site has been built purely using angular. It accesses open web apis from cryptocurrency sites</p>\r\n    <p><a class=\"btn btn-primary btn-lg\" target=\"_blank\" href=\"https://github.com/jacobkuriala/angularcoin\">Learn more</a></p>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/component/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/gdax-http/gdax-http.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/gdax-http/gdax-http.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  gdax-http works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/gdax-http/gdax-http.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GdaxHttpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_gdax_service__ = __webpack_require__("../../../../../src/app/http-gdax.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GdaxHttpComponent = (function () {
    function GdaxHttpComponent(httpGdaxService) {
        this.httpGdaxService = httpGdaxService;
    }
    GdaxHttpComponent.prototype.ngOnInit = function () {
        this.result = this.httpGdaxService.getPricesFromCoinDesk().subscribe(function (response) { console.log(response); }, function (error) { console.log('Error'); }, function () { console.log('completed'); });
    };
    GdaxHttpComponent.prototype.ngOnDestroy = function () {
        this.result.unsubscribe();
    };
    GdaxHttpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gdax-http',
            template: __webpack_require__("../../../../../src/app/component/gdax-http/gdax-http.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/gdax-http/gdax-http.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_gdax_service__["a" /* HttpGdaxService */]])
    ], GdaxHttpComponent);
    return GdaxHttpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/price-chart-picker/price-chart-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-pills {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/price-chart-picker/price-chart-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <ul class=\"nav nav-pills center-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/prices/year\">Year</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/prices/month\">Month</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/prices/week\">Week</a>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/price-chart-picker/price-chart-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceChartPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceChartPickerComponent = (function () {
    function PriceChartPickerComponent() {
    }
    PriceChartPickerComponent.prototype.ngOnInit = function () {
    };
    PriceChartPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-price-chart-picker',
            template: __webpack_require__("../../../../../src/app/component/price-chart-picker/price-chart-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/price-chart-picker/price-chart-picker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceChartPickerComponent);
    return PriceChartPickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/price-chart/price-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-pills {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/price-chart/price-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"../node_modules/chart.js/src/chart.js\">\r\n</script> -->\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-xs-12 text-center\">\r\n      <h1 class=\"text-center\">\r\n          Bitcoin Price Charts\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div >\r\n    <app-price-chart-picker></app-price-chart-picker>\r\n  </div>\r\n<div class=\"row\" *ngIf=\"isDataAvailable\">\r\n  <div class=\"col-xs-10 col-md-10 col-lg-10\">\r\n\r\n    <canvas baseChart #mychart\r\n                [datasets]=\"lineChartData\"\r\n                [labels]=\"lineChartLabels\"\r\n                [colors]=\"lineChartColors\"\r\n                [options]=\"lineChartOptions\"\r\n                [legend]=\"lineChartLegend\"\r\n                [chartType]=\"lineChartType\"></canvas>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"isDataAvailable\">\r\n  <div class=\"col-xs-12\">\r\n      <p>\r\n          <small>\r\n          * Data from www.coindesk.com\r\n          </small>\r\n        </p>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/price-chart/price-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_gdax_service__ = __webpack_require__("../../../../../src/app/http-gdax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PriceChartComponent = (function () {
    function PriceChartComponent(httpGdaxService, activatedRoute) {
        this.httpGdaxService = httpGdaxService;
        this.activatedRoute = activatedRoute;
        // lineChart
        this.isDataAvailable = false;
        this.lineChartData = [{ data: [] }];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(135,206,250,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    PriceChartComponent.prototype.ngOnInit = function () {
        //let duration:string = this.activatedRoute.snapshot.params['duration'];
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            var duration = params['duration'];
            _this.result = _this.httpGdaxService.getChartsPricesWithParameters(duration).subscribe(function (response) {
                console.log(response);
                _this.lineChartLabels = response.linechartlabels;
                console.log(response.linechartdata);
                _this.lineChartData = response.linechartdata;
                _this.isDataAvailable = true;
            }, function (error) { console.log('Error'); }, function () { console.log('completed'); });
        });
    };
    PriceChartComponent.prototype.ngOnDestroy = function () {
        this.result.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mychart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PriceChartComponent.prototype, "mychart", void 0);
    PriceChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-price-chart',
            template: __webpack_require__("../../../../../src/app/component/price-chart/price-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/price-chart/price-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_gdax_service__["a" /* HttpGdaxService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PriceChartComponent);
    return PriceChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/testing-gdaxweb-socket/testing-gdaxweb-socket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/testing-gdaxweb-socket/testing-gdaxweb-socket.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"btn btn-primary\" (click)=\"onStartStream()\">Start Stream</button>\r\n<button class=\"btn btn-primary\" (click)=\"onEndStream()\">Stop Stream</button> -->\r\n<div class=\"container\">\r\n    <div class=\"row text-center\">\r\n        <div class=\"col-xs-12 text-center\">\r\n          <h1 class=\"text-center\">\r\n              Live Price Feeds\r\n          </h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center\">\r\n          <div class=\"col-sm-12 text-center\" *ngIf=\"!this.currentBTCUSD\">\r\n              <h1><i class=\"fa fa-btc\" aria-hidden=\"true\"></i></h1> Loading...\r\n          </div>\r\n      </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4\">\r\n      <div class=\"card text-white bg-primary\" *ngIf=\"this.currentETHUSD\">\r\n          <h3 class=\"card-header text-center\">Etherium</h3>\r\n          <div class=\"card-body\">\r\n            <blockquote class=\"card-blockquote text-center\">\r\n               <h1> $ {{this.currentETHUSD | number: '0.2-2'}} </h1>\r\n            </blockquote>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12  col-md-4\">\r\n      <div class=\"card text-white bg-warning\" *ngIf=\"this.currentBTCUSD\">\r\n          <h3 class=\"card-header text-center\">Bitcoin</h3>\r\n          <div class=\"card-body\">\r\n              <blockquote class=\"card-blockquote text-center\">\r\n                  <h1> $ {{this.currentBTCUSD | number: '0.2-2'}} </h1>\r\n               </blockquote>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12  col-md-4\">\r\n      <div class=\"card text-white bg-success\" *ngIf=\"this.currentLTCUSD\">\r\n          <h3 class=\"card-header text-center\">Litecoin</h3>\r\n          <div class=\"card-body\">\r\n              <blockquote class=\"card-blockquote text-center\">\r\n                  <h1> $ {{this.currentLTCUSD | number: '0.2-2'}} </h1>\r\n               </blockquote>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-right\" >\r\n    <div class=\"col-xs-8\"></div>\r\n    <div class=\"col-xs-4 text-right\" *ngIf=\"this.currentETHUSD\">\r\n      * Data from gdax.com\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/testing-gdaxweb-socket/testing-gdaxweb-socket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingGdaxwebSocketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestingGdaxwebSocketComponent = (function () {
    function TestingGdaxwebSocketComponent() {
    }
    TestingGdaxwebSocketComponent.prototype.ngOnInit = function () {
        console.log(this.socket);
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            this.createSocket();
        }
    };
    TestingGdaxwebSocketComponent.prototype.createSocket = function () {
        var _this = this;
        // realtime
        this.socket = new WebSocket('wss://ws-feed.gdax.com');
        // sandbox
        // this.socket = new WebSocket('wss://ws-feed-public.sandbox.gdax.com');
        var subrequest = {
            "type": "subscribe",
            "product_ids": [
                "BTC-USD",
                "ETH-USD",
                "LTC-USD"
            ],
            "channels": [
                {
                    "name": "ticker"
                }
            ]
        };
        this.socket.onopen = function () {
            console.log(subrequest);
            _this.socket.send(JSON.stringify(subrequest));
            console.log('stream opened');
        };
        this.socket.onmessage = function (message) {
            if (message.data) {
                var data = JSON.parse(message.data);
                if (data.type === "ticker") {
                    console.log(data);
                    if (data.product_id === "BTC-USD")
                        _this.currentBTCUSD = data.price;
                    else if (data.product_id === "ETH-USD")
                        _this.currentETHUSD = data.price;
                    else if (data.product_id === "LTC-USD")
                        _this.currentLTCUSD = data.price;
                }
                else {
                    console.log(message);
                }
            }
            ;
        };
    };
    TestingGdaxwebSocketComponent.prototype.unsubscribe = function () {
        if (this.socket) {
            var unsubrequest = {
                "type": "unsubscribe",
                "channels": ["ticker"]
            };
            this.socket.send(JSON.stringify(unsubrequest));
        }
    };
    TestingGdaxwebSocketComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    TestingGdaxwebSocketComponent.prototype.onStartStream = function () {
        // console.log(this.socket);
        // if(!this.socket || this.socket.readyState !== WebSocket.OPEN){
        //   this.createSocket();
        // }
    };
    TestingGdaxwebSocketComponent.prototype.onEndStream = function () {
        this.unsubscribe();
    };
    TestingGdaxwebSocketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testing-gdaxweb-socket',
            template: __webpack_require__("../../../../../src/app/component/testing-gdaxweb-socket/testing-gdaxweb-socket.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/testing-gdaxweb-socket/testing-gdaxweb-socket.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestingGdaxwebSocketComponent);
    return TestingGdaxwebSocketComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/top-nav/top-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-toggler {\r\n  cursor: pointer;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\"><h1><i class=\"fa fa-btc\" aria-hidden=\"true\"></i></h1></a>\r\n    <button (click)=\"toggleCollapse()\" class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\r\n    aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbarColor01\" style=\"\" [class.show]=\"show\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\"\r\n          routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{ exact: true}\">\r\n            <a class=\"nav-link\" routerLink=\"/\">Price Charts <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\"\r\n            routerLinkActive=\"active\" routerLink=\"/ticker\">Tickers</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n          </li> -->\r\n          <li class=\"nav-item\"\r\n          routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{ exact: true}\">\r\n            <a class=\"nav-link\" routerLink=\"/about\">About</a>\r\n          </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\" >\r\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" disabled style=\"cursor: not-allowed\">\r\n          <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" disabled style=\"cursor: not-allowed\">Search</button>\r\n        </form>\r\n      </div>\r\n\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopNavComponent = (function () {
    function TopNavComponent() {
        this.show = false;
        this.collapse = "closed";
    }
    TopNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
        this.collapse = this.collapse == "open" ? 'closed' : 'open';
    };
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__("../../../../../src/app/component/top-nav/top-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/top-nav/top-nav.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('collapse', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: '1',
                        display: 'block',
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: '0',
                        display: 'none',
                        transform: 'translate3d(0, -100%, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('closed => open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open => closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-gdax.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpGdaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpGdaxService = (function () {
    function HttpGdaxService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpGdaxService.prototype.getPricesFromCoinDesk = function () {
        return this.httpClient.get('https://api.coindesk.com/v1/bpi/historical/close.json');
    };
    HttpGdaxService.prototype.getChartsPrices = function () {
        return this.httpClient.get('https://api.coindesk.com/v1/bpi/historical/close.json')
            .map(function (priceResponse) {
            var priceChartData = {
                linechartdata: [],
                linechartlabels: []
            };
            priceChartData.linechartdata.push({
                data: [],
                label: "Bitcoin Closing Price"
            });
            for (var priceKey in priceResponse.bpi) {
                priceChartData.linechartdata[0].data.push(Math.floor(+priceResponse.bpi[priceKey]));
                priceChartData.linechartlabels.push(priceKey);
                // console.log(priceKey + ' ' + priceResponse.bpi[priceKey]);
            }
            return priceChartData;
        });
    };
    HttpGdaxService.prototype.getChartsPricesWithParameters = function (duration) {
        if (!duration) {
            return this.getChartsPrices();
        }
        var date = new Date();
        var endDate = this.getFormattedDate(date);
        if (duration == 'week') {
            date.setDate(date.getDate() - 14);
        }
        else if (duration === 'month') {
            date.setDate(date.getDate() - 31);
        }
        else if (duration === 'year') {
            date.setDate(date.getDate() - 365);
        }
        var startDate = this.getFormattedDate(date);
        return this.httpClient.get('https://api.coindesk.com/v1/bpi/historical/close.json?start='
            + startDate + '&end=' + endDate)
            .map(function (priceResponse) {
            var priceChartData = {
                linechartdata: [],
                linechartlabels: []
            };
            priceChartData.linechartdata.push({
                data: [],
                label: "Bitcoin Closing Price"
            });
            for (var priceKey in priceResponse.bpi) {
                priceChartData.linechartdata[0].data.push(Math.floor(+priceResponse.bpi[priceKey]));
                priceChartData.linechartlabels.push(priceKey);
                // console.log(priceKey + ' ' + priceResponse.bpi[priceKey]);
            }
            return priceChartData;
        });
    };
    HttpGdaxService.prototype.getFormattedDate = function (date) {
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        var fmm;
        var fdd;
        fmm = mm < 10 ? '0' + String(mm) : String(mm);
        fdd = dd < 10 ? '0' + String(dd) : String(dd);
        var FormattedDate = yyyy + '-' + fmm + '-' + fdd;
        console.log(FormattedDate);
        return FormattedDate;
    };
    HttpGdaxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpGdaxService);
    return HttpGdaxService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map