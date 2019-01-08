(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.css":
/*!***************************************************************************************!*\
  !*** ./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wbXMtY29zdC9zcmMvYXBwL3Btcy1jb3N0LWRhc2hib2FyZC9wbXMtY29zdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\n      <div class=\"card  shadow\">\n        <div class=\"card-header bg-transparent\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h6 class=\"text-uppercase text-muted ls-1 mb-1\">Overview</h6>\n              <h2 class=\" mb-0\">Sales value</h2>\n            </div>\n            <div class=\"col\">\n              <ul class=\"nav nav-pills justify-content-end\">\n                <li class=\"nav-item mr-2 mr-md-0\" data-toggle=\"chart.js\" data-target=\"#chart.js-sales\" data-update='{\"data\":{\"datasets\":[{\"data\":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix=\"$\" data-suffix=\"k\">\n                  <a href=\"#\" class=\"nav-link py-2 px-3 active\" data-toggle=\"tab\">\n                    <span class=\"d-none d-md-block\">Month</span>\n                    <span class=\"d-md-none\">M</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\" data-toggle=\"chart.js\" data-target=\"#chart.js-sales\" data-update='{\"data\":{\"datasets\":[{\"data\":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix=\"$\" data-suffix=\"k\">\n                  <a href=\"#\" class=\"nav-link py-2 px-3\" data-toggle=\"tab\">\n                    <span class=\"d-none d-md-block\">Week</span>\n                    <span class=\"d-md-none\">W</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- Chart -->\n          <div class=\"chart.js\">\n            <!-- Chart wrapper -->\n            <canvas id=\"chart.js-sales\" class=\"chart.js-canvas\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4\">\n      <div class=\"card shadow\">\n        <div class=\"card-header bg-transparent\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h6 class=\"text-uppercase text-muted ls-1 mb-1\">Performance</h6>\n              <h2 class=\"mb-0\">Total orders</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- Chart -->\n          <div class=\"chart.js\">\n            <canvas id=\"chart.js-orders\" class=\"chart.js-canvas\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PmsCostDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmsCostDashboardComponent", function() { return PmsCostDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PmsCostDashboardComponent = /** @class */ (function () {
    function PmsCostDashboardComponent() {
    }
    PmsCostDashboardComponent.prototype.ngOnInit = function () {
    };
    PmsCostDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-cost-dashboard',
            template: __webpack_require__(/*! ./pms-cost-dashboard.component.html */ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./pms-cost-dashboard.component.css */ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PmsCostDashboardComponent);
    return PmsCostDashboardComponent;
}());



/***/ }),

/***/ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.css":
/*!******************************************************************************************!*\
  !*** ./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wbXMtZ2FudHQvc3JjL2FwcC9wbXMtZ2FudHQtZGFzaGJvYXJkL3Btcy1nYW50dC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.html":
/*!*******************************************************************************************!*\
  !*** ./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"get()\"></button>\n"

/***/ }),

/***/ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PmsGanttDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmsGanttDashboardComponent", function() { return PmsGanttDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _src_app_models_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/app/models/project */ "./src/app/models/project.ts");




var PmsGanttDashboardComponent = /** @class */ (function () {
    function PmsGanttDashboardComponent(service) {
        this.service = service;
    }
    PmsGanttDashboardComponent.prototype.ngOnInit = function () {
    };
    PmsGanttDashboardComponent.prototype.get = function () {
        var p = new _src_app_models_project__WEBPACK_IMPORTED_MODULE_3__["Project"]('posted from front', 'test', 'tesy', 'wjhxgs', Array(), Array());
        this.service.postProject(p).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    PmsGanttDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-gantt-pms-gantt-dashboard',
            template: __webpack_require__(/*! ./pms-gantt-dashboard.component.html */ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./pms-gantt-dashboard.component.css */ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], PmsGanttDashboardComponent);
    return PmsGanttDashboardComponent;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _projects_pms_cost_src_app_pms_cost_dashboard_pms_cost_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component */ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.ts");
/* harmony import */ var _projects_pms_gantt_src_app_pms_gantt_dashboard_pms_gantt_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component */ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.ts");
/* harmony import */ var _dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/main/main.component */ "./src/app/dashboard/main/main.component.ts");








var routes = [{ path: '', component: _public_public_component__WEBPACK_IMPORTED_MODULE_3__["PublicComponent"] },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        children: [
            { path: '', component: _dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
            { path: 'cost', component: _projects_pms_cost_src_app_pms_cost_dashboard_pms_cost_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PmsCostDashboardComponent"] },
            { path: 'gantt', component: _projects_pms_gantt_src_app_pms_gantt_dashboard_pms_gantt_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["PmsGanttDashboardComponent"] },
            { path: 'scrum', component: _projects_pms_cost_src_app_pms_cost_dashboard_pms_cost_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PmsCostDashboardComponent"] }
        ]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pms-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/main/main.component */ "./src/app/dashboard/main/main.component.ts");
/* harmony import */ var _projects_pms_cost_src_app_pms_cost_dashboard_pms_cost_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component */ "./projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component.ts");
/* harmony import */ var _projects_pms_gantt_src_app_pms_gantt_dashboard_pms_gantt_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component */ "./projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component.ts");
/* harmony import */ var _dashboard_projects_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/projects/project-list/project-list.component */ "./src/app/dashboard/projects/project-list/project-list.component.ts");
/* harmony import */ var _dashboard_projects_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/projects/project-form/project-form.component */ "./src/app/dashboard/projects/project-form/project-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _public_public_component__WEBPACK_IMPORTED_MODULE_7__["PublicComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _dashboard_projects_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_13__["ProjectListComponent"],
                _dashboard_projects_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_14__["ProjectFormComponent"],
                _dashboard_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _projects_pms_cost_src_app_pms_cost_dashboard_pms_cost_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["PmsCostDashboardComponent"],
                _projects_pms_gantt_src_app_pms_gantt_dashboard_pms_gantt_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["PmsGanttDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _dashboard_projects_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_14__["ProjectFormComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#logo a {\n  color: #0c2e8a;\n  line-height: 1;\n  display: inline-block;\n}\n\n#logo a span {\n  color: #50d8af;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2xvZ28gYSB7XG4gIGNvbG9yOiAjMGMyZThhO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jbG9nbyBhIHNwYW4ge1xuICBjb2xvcjogIzUwZDhhZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" name=\"viewport\">\n  <meta content=\"Start your development with a Dashboard for Bootstrap 4.\" name=\"description\">\n  <meta content=\"Creative Tim\" name=\"author\">\n  <title>Argon Dashboard - Free Dashboard for Bootstrap 4</title>\n  <!-- Favicon -->\n  <link href=\"../../assets/img/brand/favicon.png\" rel=\"icon\" type=\"image/png\">\n  <!-- Fonts -->\n  <link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\" rel=\"stylesheet\">\n</head>\n<body>\n\n  <div class=”row”>\n    <!-- Sidenav -->\n    <nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-md-4\" href=\"/\">\n      <h1 id=\"logo\"><a class=\"scrollto\" href=\"/\">PM<span>S</span></a></h1>\n    </a>\n    <!-- Navigation -->\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n          <i> <img src=\"../../assets/dashboard/img/brand/teamwork.png\"></i> Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/dashboard/scrum']\" class=\"nav-link\">\n          <i><img src=\"../../assets/dashboard/img/brand/task.png\"></i> Scrum Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/dashboard/gantt']\" class=\"nav-link\">\n          <i>\n            <img src=\"../../assets/dashboard/img/brand/deadline.png\"></i> Gantt Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/dashboard/cost']\" class=\"nav-link\">\n          <i><img src=\"../../assets/dashboard/img/brand/analysis.png\"></i> Cost Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./index.html\">\n          <i class=\"ni ni-pin-3 text-orange\"></i> Maps\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./index.html\">\n          <i class=\"ni ni-single-02 text-yellow\"></i> User profile\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./index.html\">\n          <i class=\"ni ni-bullet-list-67 text-red\"></i> Tables\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./index.html\">\n          <i class=\"ni ni-key-25 text-info\"></i> Login\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"./index.html\">\n          <i class=\"ni ni-circle-08 text-pink\"></i> Register\n        </a>\n      </li>\n    </ul>\n    <!-- Divider -->\n    <hr class=\"my-3\">\n    <!-- Heading -->\n  </div>\n</nav>\n<!-- Main content -->\n  <div class=\"main-content \">\n    <!-- Top navbar -->\n    <nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n      <div class=\"container-fluid\">\n        <!-- Brand -->\n        <a class=\"h-25 mb-0 text-white text-uppercase d-none d-lg-inline-block\">\n          <ul class=\"navbar-nav navbar-brand pt-lg-0\">\n            <li class=\"nav-item dropdown\">\n              <!-- red button for add items -->\n              <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link nav-link-icon\" data-toggle=\"dropdown\"\n                 href=\"#\" id=\"navbar-default_dropdown_1\" role=\"button\">\n                <ul class=\"nav nav-pills  nav-pills-circle \" id=\"tabs_2\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                    <a aria-controls=\"home\" aria-selected=\"true\" class=\"nav-link rounded-circle  bg-red\"\n                       data-toggle=\"tab\" href=\"#tabs_2_1\"\n                       id=\"home-tab\" role=\"tab\">\n                      <span class=\"nav-link-icon d-block\"><i class=\"ni ni-bold-right\"></i></span>\n                    </a>\n                  </li>\n                </ul>\n              </a>\n              <div aria-labelledby=\"navbar-default_dropdown_1\" class=\"dropdown-menu dropdown-menu-xl-left\">\n                <button class=\"dropdown-item\" (click)=\"createProject()\" >Project</button>\n                <a class=\"dropdown-item\" href=\"#\">User</a>\n              </div>\n            </li>\n          </ul>\n        </a>\n        <!-- Form -->\n        <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n          <div class=\"form-group mb-0\">\n            <div class=\"input-group input-group-alternative\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n              </div>\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n            </div>\n          </div>\n        </form>\n        <!-- User -->\n        <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n          <li class=\"nav-item dropdown\">\n            <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link pr-0\" data-toggle=\"dropdown\" href=\"#\"\n               role=\"button\">\n              <div class=\"media align-items-center\">\n                <span class=\"avatar avatar-sm rounded-circle\">\n                  <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-4-800x800.jpg\">\n                </span>\n                <div class=\"media-body ml-2 d-none d-lg-block\">\n                  <span class=\"mb-0 text-sm  font-weight-bold\">Jessica Jones</span>\n                </div>\n              </div>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\">\n              <div class=\" dropdown-header noti-title\">\n                <h6 class=\"text-overflow m-0\">Welcome!</h6>\n              </div>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"ni ni-single-02\"></i>\n                <span>My profile</span>\n              </a>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"ni ni-settings-gear-65\"></i>\n                <span>Settings</span>\n              </a>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"ni ni-calendar-grid-58\"></i>\n                <span>Activity</span>\n              </a>\n              <a class=\"dropdown-item\" href=\"#\">\n                <i class=\"ni ni-support-16\"></i>\n                <span>Support</span>\n              </a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#!\">\n                <i class=\"ni ni-user-run\"></i>\n                <span>Logout</span>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <!-- Header -->\n    <div class=\"header  bg-default pb-100 pt-100 pt-md-100\">\n      <div class=\"container-fluid\">\n        <div class=\"header-body\">\n        </div>\n      </div>\n    </div>\n    <!-- table -->\n    <div class=\"col-auto\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- Page content -->\n    <!-- Footer -->\n    <footer class=\"footer\">\n      <div class=\"row align-items-center justify-content-xl-between\">\n        <div class=\"col-xl-6\">\n          <div class=\"copyright text-center text-xl-left text-muted\">\n            &copy; 2019 <a class=\"font-weight-bold ml-1\" href=\"\" target=\"_blank\">PMS Team</a>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" target=\"_blank\">NAN Team</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" target=\"_blank\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" target=\"_blank\">Blog</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"\" target=\"_blank\">MIT License</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </footer>\n  </div>\n\n  </div>\n\n</body>\n</html>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _projects_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/project-form/project-form.component */ "./src/app/dashboard/projects/project-form/project-form.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, projectDialog, projectService) {
        this.router = router;
        this.projectDialog = projectDialog;
        this.projectService = projectService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.createProject = function () {
        this.projectService.initializeFormGroup();
        var modalProject = this.projectDialog.open(_projects_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"]);
        modalProject.componentInstance.name = 'Project';
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/main/main.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/main/main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/main/main.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/main/main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt--7\">\n  <div class=\"row mt-5\">\n    <div class=\"col-xl-12 mb-10 mb-xl-0\">\n      <div class=\"card shadow \">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h3 class=\"mb-0\">Project List</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <!-- Projects table -->\n          <table class=\"  table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Project</th>\n              <th scope=\"col\">Budget</th>\n              <th scope=\"col\">Status</th>\n              <th scope=\"col\">Users</th>\n              <th scope=\"col\">Completion</th>\n              <th scope=\"col\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tbody>\n            <tr>\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n                  <a href=\"#\" class=\"avatar rounded-circle mr-3\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/bootstrap.jpg\">\n                  </a>\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">Argon Design System</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n                $2,500 USD\n              </td>\n              <td>\n                <span class=\"badge badge-dot mr-4\">\n                  <i class=\"bg-warning\"></i> pending\n                </span>\n              </td>\n              <td>\n                <div class=\"avatar-group\">\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                </div>\n\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">60%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-right\">\n                <div class=\"dropdown\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n                  <a href=\"#\" class=\"avatar rounded-circle mr-3\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/angular.jpg\">\n                  </a>\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n                $1,800 USD\n              </td>\n              <td>\n                <span class=\"badge badge-dot\">\n                  <i class=\"bg-success\"></i> completed\n                </span>\n              </td>\n              <td>\n                <div class=\"avatar-group\">\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                </div>\n\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">100%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-right\">\n                <div class=\"dropdown\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n                  <a href=\"#\" class=\"avatar rounded-circle mr-3\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/sketch.jpg\">\n                  </a>\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">Black Dashboard</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n                $3,150 USD\n              </td>\n              <td>\n                <span class=\"badge badge-dot mr-4\">\n                  <i class=\"bg-danger\"></i> delayed\n                </span>\n              </td>\n              <td>\n                <div class=\"avatar-group\">\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                </div>\n\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">72%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-right\">\n                <div class=\"dropdown\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n                  <a href=\"#\" class=\"avatar rounded-circle mr-3\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/react.jpg\">\n                  </a>\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">React Material Dashboard</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n                $4,400 USD\n              </td>\n              <td>\n                <span class=\"badge badge-dot\">\n                  <i class=\"bg-info\"></i> on schedule\n                </span>\n              </td>\n              <td>\n                <div class=\"avatar-group\">\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                </div>\n\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">90%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-right\">\n                <div class=\"dropdown\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n                  <a href=\"#\" class=\"avatar rounded-circle mr-3\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/vue.jpg\">\n                  </a>\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n                $2,200 USD\n              </td>\n              <td>\n                <span class=\"badge badge-dot mr-4\">\n                  <i class=\"bg-success\"></i> completed\n                </span>\n              </td>\n              <td>\n                <div class=\"avatar-group\">\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                  <a href=\"#\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                    <img alt=\"Image placeholder\" src=\"../../assets/dashboard/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                  </a>\n                </div>\n\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">100%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-right\">\n                <div class=\"dropdown\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-dashboard-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/dashboard/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/dashboard/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projects/project-form/project-form.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/projects/project-form/project-form.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9qZWN0cy9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/projects/project-form/project-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/projects/project-form/project-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">\n    {{service.form.controls['id'].value ? \"Modify Project\" : \"New Project\"}}\n  </h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"service.form\" class=\"md-form\" (submit)=\"onSubmit()\">\n    <input type=\"hidden\" formControlName=\"id\">\n    <div class=\"form-group\">\n      <input formControlName=\"name\" placeholder=\"Name*\">\n      <p *ngIf=\"service.form.controls['name'].invalid\">This field is mandatory.</p>\n    </div>\n    <div class=\"form-group\">\n      <input formControlName=\"logicName\" placeholder=\"Logic Name*\">\n      <p *ngIf=\"service.form.controls['logicName'].invalid\">This field is mandatory.</p>\n    </div>\n    <div class=\"form-group\">\n      <input formControlName=\"description\" matInput placeholder=\"Description\">\n    </div>\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"service.form.invalid\">Submit</button>\n    <button class=\"btn btn-default\" (click)=\"onClear()\">Clear</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/projects/project-form/project-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/projects/project-form/project-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function() { return ProjectFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(service, activeModal) {
        this.service = service;
        this.activeModal = activeModal;
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
    };
    ProjectFormComponent.prototype.onClear = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
    };
    ProjectFormComponent.prototype.onSubmit = function () {
        if (this.service.form.valid) {
            if (!this.service.form.get('id').value) {
                var project = this.service.form.value;
                project.creationDate = new Date(Date.now()).toLocaleString();
                console.log(project);
                //     //this.service.postProject(project);
            }
            else {
                //     //this.service.updateProject(this.service.form.value);
            }
            this.service.form.reset();
            this.service.initializeFormGroup();
            this.onClose();
        }
    };
    ProjectFormComponent.prototype.onClose = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.activeModal.close('Close click');
    };
    ProjectFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-project-form',
            template: __webpack_require__(/*! ./project-form.component.html */ "./src/app/dashboard/projects/project-form/project-form.component.html"),
            styles: [__webpack_require__(/*! ./project-form.component.css */ "./src/app/dashboard/projects/project-form/project-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projects/project-list/project-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/projects/project-list/project-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9qZWN0cy9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/projects/project-list/project-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/projects/project-list/project-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  project-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/projects/project-list/project-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/projects/project-list/project-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/dashboard/projects/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.css */ "./src/app/dashboard/projects/project-list/project-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/project.ts":
/*!***********************************!*\
  !*** ./src/app/models/project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(name, logicName, creationDate, description, productBacklogItems, resources) {
        this.name = name;
        this.logicName = logicName;
        this.creationDate = creationDate;
        this.description = description;
        this.productBacklogItems = productBacklogItems;
        this.resources = resources;
    }
    Project.prototype.getId = function () {
        return this.id;
    };
    Project.prototype.setId = function (value) {
        this.id = value;
    };
    Project.prototype.getName = function () {
        return this.name;
    };
    Project.prototype.setName = function (value) {
        this.name = value;
    };
    Project.prototype.getLogicName = function () {
        return this.logicName;
    };
    Project.prototype.setLogicName = function (value) {
        this.logicName = value;
    };
    Project.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    Project.prototype.setCreationDate = function (value) {
        this.creationDate = value;
    };
    Project.prototype.getDescription = function () {
        return this.description;
    };
    Project.prototype.setDescription = function (value) {
        this.description = value;
    };
    Project.prototype.getProductBacklogItems = function () {
        return this.productBacklogItems;
    };
    Project.prototype.setProductBacklogItems = function (value) {
        this.productBacklogItems = value;
    };
    Project.prototype.getResources = function () {
        return this.resources;
    };
    Project.prototype.setResources = function (value) {
        this.resources = value;
    };
    return Project;
}());



/***/ }),

/***/ "./src/app/public/public.component.css":
/*!*********************************************!*\
  !*** ./src/app/public/public.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wdWJsaWMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/public/public.component.html":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Google Fonts -->\n<link\n  href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700\"\n  rel=\"stylesheet\">\n\n<!--==========================\n  Top Bar\n============================-->\n\n<div id=\"body\">\n  <section id=\"topbar\" class=\"d-none d-lg-block\">\n    <div class=\"container clearfix\">\n      <div class=\"contact-info float-left\">\n        <i class=\"fa fa-envelope-o\"></i> <a href=\"mailto:contact@example.com\">contact@example.com</a>\n        <i class=\"fa fa-phone\"></i> +1 5589 55488 55\n      </div>\n      <div class=\"social-links float-right\">\n        <a href=\"https://github.com/nesrinesghaier/pms\" class=\"twitter\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n        <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n        <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n      </div>\n    </div>\n  </section>\n\n  <!--==========================\n    Header\n  ============================-->\n  <header id=\"header\">\n    <div class=\"container\">\n\n      <div id=\"logo\" class=\"pull-left\">\n        <h1><a href=\"#body\" class=\"scrollto\">PM<span>S</span></a></h1>\n        <!-- Uncomment below if you prefer to use an image logo -->\n        <!-- <a href=\"#body\"><img src=\"assets/public/img/logo.png\" alt=\"\" title=\"\" /></a>-->\n      </div>\n\n      <nav id=\"nav-menu-container\">\n        <ul class=\"nav-menu\">\n          <li class=\"menu-active\"><a href=\"#body\">Home</a></li>\n          <li><a href=\"#about\">About Us</a></li>\n          <li><a href=\"#services\">Services</a></li>\n          <li><a href=\"#team\">Team</a></li>\n          <li><a href=\"#contact\">Contact</a></li>\n          <li><a href=\"./dashboard\">Login</a></li>\n          <li><a href=\"#\">Register</a></li>\n        </ul>\n      </nav><!-- #nav-menu-container -->\n    </div>\n  </header><!-- #header -->\n\n  <!--==========================\n    Intro Section\n  ============================-->\n  <section id=\"intro\">\n\n    <div class=\"intro-content\">\n      <h2>Making <span>your projects</span><br>succeed!</h2>\n      <div>\n        <a href=\"#about\" class=\"btn-get-started scrollto\">Get Started</a>\n        <a href=\"#portfolio\" class=\"btn-projects scrollto\">Our Service</a>\n      </div>\n    </div>\n\n    <div id=\"intro-carousel\" class=\"owl-carousel\">\n      <div class=\"item\" style=\"background-image: url('assets/public/img/intro-carousel/1.jpg');\"></div>\n      <div class=\"item\" style=\"background-image: url('assets/public/img/intro-carousel/2.jpg');\"></div>\n      <div class=\"item\" style=\"background-image: url('assets/public/img/intro-carousel/3.jpg');\"></div>\n      <div class=\"item\" style=\"background-image: url('assets/public/img/intro-carousel/4.jpg');\"></div>\n      <div class=\"item\" style=\"background-image: url('assets/public/img/intro-carousel/5.jpg');\"></div>\n    </div>\n\n  </section><!-- #intro -->\n\n  <main id=\"main\">\n\n    <!--==========================\n      About Section\n    ============================-->\n    <section id=\"about\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 about-img\">\n            <img src=\"assets/public/img/about-img1.jpg\" alt=\"\">\n          </div>\n\n          <div class=\"col-lg-6 content\">\n            <h2>Project Management Software</h2>\n            <h3>Managing multiple projects shouldn't be a struggle</h3>\n\n            <ul>\n              <li><i class=\"ion-android-checkmark-circle\"></i> Built To Scale & Drive Results\n              </li>\n              <li><i class=\"ion-android-checkmark-circle\"></i> Unite Planning With Execution\n              </li>\n              <li><i class=\"ion-android-checkmark-circle\"></i> Keeps the Team in Harmony\n              </li>\n            </ul>\n\n          </div>\n        </div>\n\n      </div>\n    </section><!-- #about -->\n\n    <!--==========================\n      Services Section\n    ============================-->\n    <section id=\"services\">\n      <div class=\"container\">\n        <div class=\"section-header\">\n          <h2>Services</h2>\n          <p>Organize everything you need to complete your project in one place. Keep your priorities straight and your goals in sight.\n            Customize dashboards so you only see what you want to see.</p>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-6\">\n            <div class=\"box wow fadeInLeft\">\n              <div class=\"icon\"><i class=\"fa fa-users\"></i></div>\n              <h4 class=\"title\"><a href=\"\">Agile Teamwork Template</a></h4>\n              <p class=\"description\">A template that helps you prioritize a backlog for planning,\n                managing sprints with boards, and tracking progress using reports.</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <div class=\"box wow fadeInRight\">\n              <div class=\"icon\"><i class=\"fas fa-project-diagram\"></i></div>\n              <h4 class=\"title\"><a href=\"\">Project Scheduling Template</a></h4>\n              <p class=\"description\">A project template for classic, timeline-driven project management.\n                Split projects into actionable items, assign due dates, and track progress on a Gantt chart.js.</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <div class=\"box wow fadeInLeft\" data-wow-delay=\"0.2s\">\n              <div class=\"icon\"><i class=\"far fa-list-alt\"></i></div>\n              <h4 class=\"title\"><a href=\"\">Complex Project With Phases</a></h4>\n              <p class=\"description\">This template breaks complex projects down into manageable phases,\n                allowing you to assign due dates to tasks and track progress on a visual timeline.</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <div class=\"box wow fadeInRight\" data-wow-delay=\"0.2s\">\n              <div class=\"icon\"><i class=\"fas fa-calendar-alt\"></i></div>\n              <h4 class=\"title\"><a href=\"/costdashboard\">Professional Services Management</a></h4>\n              <p class=\"description\">Plan projects and map tasks to an interactive timeline, track and report on time spent using a timelog,\n                and organize deliverables to meet deadlines.</p>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #services -->\n\n    <!--==========================\n      Clients Section\n    ============================-->\n    <section id=\"clients\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"section-header\">\n          <h2>Clients</h2>\n          <p>We </p>\n        </div>\n\n        <div class=\"owl-carousel clients-carousel\">\n          <img src=\"assets/public/img/clients/client-1.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-2.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-3.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-4.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-5.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-6.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-7.png\" alt=\"\">\n          <img src=\"assets/public/img/clients/client-8.png\" alt=\"\">\n        </div>\n\n      </div>\n    </section><!-- #clients -->\n\n    <!--==========================\n      Our Portfolio Section\n    ============================-->\n    <section id=\"portfolio\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"section-header\">\n          <h2>Our Portfolio</h2>\n          <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim\n            export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export\n            irure minim illum fore</p>\n        </div>\n      </div>\n\n      <div class=\"container-fluid\">\n        <div class=\"row no-gutters\">\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/1.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/1.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 1</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/2.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/2.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 2</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/3.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/3.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 3</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/4.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/4.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 4</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/5.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/5.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 5</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/6.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/6.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 6</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/7.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/7.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 7</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-4\">\n            <div class=\"portfolio-item wow fadeInUp\">\n              <a href=\"assets/public/img/portfolio/8.jpg\" class=\"portfolio-popup\">\n                <img src=\"assets/public/img/portfolio/8.jpg\" alt=\"\">\n                <div class=\"portfolio-overlay\">\n                  <div class=\"portfolio-info\"><h2 class=\"wow fadeInUp\">Portfolio Item 8</h2></div>\n                </div>\n              </a>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #portfolio -->\n\n    <!--==========================\n      Testimonials Section\n    ============================-->\n    <section id=\"testimonials\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"section-header\">\n          <h2>Testimonials</h2>\n          <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim\n            export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export\n            irure minim illum fore</p>\n        </div>\n        <div class=\"owl-carousel testimonials-carousel\">\n\n          <div class=\"testimonial-item\">\n            <p>\n              <img src=\"assets/public/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium\n              quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n              <img src=\"assets/public/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n            <img src=\"assets/public/img/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Saul Goodman</h3>\n            <h4>Ceo &amp; Founder</h4>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <p>\n              <img src=\"assets/public/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis\n              quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n              <img src=\"assets/public/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n            <img src=\"assets/public/img/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Sara Wilsson</h3>\n            <h4>Designer</h4>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <p>\n              <img src=\"assets/public/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor\n              labore quem eram duis noster aute amet eram fore quis sint minim.\n              <img src=\"assets/public/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n            <img src=\"assets/public/img/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Jena Karlis</h3>\n            <h4>Store Owner</h4>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <p>\n              <img src=\"assets/public/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim\n              dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\n              <img src=\"assets/public/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n            <img src=\"assets/public/img/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Matt Brandon</h3>\n            <h4>Freelancer</h4>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <p>\n              <img src=\"assets/public/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa\n              labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.\n              <img src=\"assets/public/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n            <img src=\"assets/public/img/testimonial-5.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>John Larson</h3>\n            <h4>Entrepreneur</h4>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #testimonials -->\n\n    <!--==========================\n      Call To Action Section\n    ============================-->\n    <section id=\"call-to-action\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-9 text-center text-lg-left\">\n            <h3 class=\"cta-title\">Call To Action</h3>\n            <p class=\"cta-text\"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n              anim id est laborum.</p>\n          </div>\n          <div class=\"col-lg-3 cta-btn-container text-center\">\n            <a class=\"cta-btn align-middle\" href=\"#\">Call To Action</a>\n          </div>\n        </div>\n\n      </div>\n    </section><!-- #call-to-action -->\n\n    <!--==========================\n      Our Team Section\n    ============================-->\n    <section id=\"team\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"section-header\">\n          <h2>Our Team</h2>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"member\">\n              <div class=\"pic\"><img src=\"assets/public/img/team-1.jpg\" alt=\"\"></div>\n              <div class=\"details\">\n                <h4>Walter White</h4>\n                <span>Chief Executive Officer</span>\n                <div class=\"social\">\n                  <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"member\">\n              <div class=\"pic\"><img src=\"assets/public/img/team-2.jpg\" alt=\"\"></div>\n              <div class=\"details\">\n                <h4>Sarah Jhinson</h4>\n                <span>Product Manager</span>\n                <div class=\"social\">\n                  <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"member\">\n              <div class=\"pic\"><img src=\"assets/public/img/team-3.jpg\" alt=\"\"></div>\n              <div class=\"details\">\n                <h4>William Anderson</h4>\n                <span>CTO</span>\n                <div class=\"social\">\n                  <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6\">\n            <div class=\"member\">\n              <div class=\"pic\"><img src=\"assets/public/img/team-4.jpg\" alt=\"\"></div>\n              <div class=\"details\">\n                <h4>Amanda Jepson</h4>\n                <span>Accountant</span>\n                <div class=\"social\">\n                  <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                  <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </section><!-- #team -->\n\n    <!--==========================\n      Contact Section\n    ============================-->\n    <section id=\"contact\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n        <div class=\"section-header\">\n          <h2>Contact Us</h2>\n          <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim\n            export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export\n            irure minim illum fore</p>\n        </div>\n\n        <div class=\"row contact-info\">\n\n          <div class=\"col-md-4\">\n            <div class=\"contact-address\">\n              <i class=\"ion-ios-location-outline\"></i>\n              <h3>Address</h3>\n              <address>A108 Adam Street, NY 535022, USA</address>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"contact-phone\">\n              <i class=\"ion-ios-telephone-outline\"></i>\n              <h3>Phone Number</h3>\n              <p><a href=\"tel:+155895548855\">+1 5589 55488 55</a></p>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"contact-email\">\n              <i class=\"ion-ios-email-outline\"></i>\n              <h3>Email</h3>\n              <p><a href=\"mailto:info@example.com\">info@example.com</a></p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"container mb-4\">\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452\"\n          width=\"100%\" height=\"380\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n      </div>\n\n      <div class=\"container\">\n        <div class=\"form\">\n          <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n          <div id=\"errormessage\"></div>\n          <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\"\n                       data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\"/>\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\"\n                       data-rule=\"email\" data-msg=\"Please enter a valid email\"/>\n                <div class=\"validation\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\"\n                     data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\"/>\n              <div class=\"validation\"></div>\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\"\n                        data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n              <div class=\"validation\"></div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\">Send Message</button>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </section><!-- #contact -->\n\n  </main>\n\n  <!--==========================\n    Footer\n  ============================-->\n  <footer id=\"footer\">\n    <div class=\"container\">\n      <div class=\"copyright\">\n        &copy; Copyright <strong>Reveal</strong>. All Rights Reserved\n      </div>\n      <div class=\"credits\">\n        <!--\n          All the links in the footer should remain intact.\n          You can delete the links only if you purchased the pro version.\n          Licensing information: https://bootstrapmade.com/license/\n          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Reveal\n        -->\n        Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\n      </div>\n    </div>\n  </footer><!-- #footer -->\n\n  <a href=\"#\" class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pms-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.css */ "./src/app/public/public.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/pms-global-web/core-resources/project/';
        this.reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            logicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ProjectService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            id: null,
            name: '',
            logicName: '',
            description: ''
        });
    };
    ProjectService.prototype.populateForm = function (project) {
        this.form.setValue(project);
    };
    ProjectService.prototype.getAllProjects = function () {
        return this.http.get(this.apiUrl, { headers: this.reqHeader });
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.apiUrl + id, { headers: this.reqHeader });
    };
    ProjectService.prototype.getProjectResources = function (id) {
        return this.http.get(this.apiUrl + id + '/resources', { headers: this.reqHeader });
    };
    ProjectService.prototype.getProjectBacklogItems = function (id) {
        return this.http.get(this.apiUrl + id + '/backlogItems', { headers: this.reqHeader });
    };
    ProjectService.prototype.postProject = function (project) {
        return this.http.post(this.apiUrl, project, { headers: this.reqHeader });
    };
    ProjectService.prototype.updateProject = function (project) {
        return this.http.put(this.apiUrl, project, { headers: this.reqHeader });
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(this.apiUrl + id, { headers: this.reqHeader });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ameni/workspace/pms/pms-client/src/main/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
