(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-layout-layout-module"],{

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-layout/site-layout.component */ "./src/app/layout/site-layout/site-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/layout/shared/footer/footer.module.ts");
/* harmony import */ var _shared_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.module */ "./src/app/layout/shared/header/header.module.ts");







var routes = [
    {
        path: '',
        component: _site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: 'src/app/main/home/home.module#HomeModule'
            },
            /* for temporary routes as i am unsure if the following routes will be part of layout or not */
            // {
            //   path: 'setup-rule',
            //   loadChildren: 'src/app/main/setup-rule/setup-rule.module#SetupRuleModule'
            // },
            {
                path: 'setup-rule',
                loadChildren: 'src/app/main/setup-rule-step/setup-rule-step.module#SetupRuleStepModule'
            },
            {
                path: 'contact-us',
                loadChildren: 'src/app/pages/contact-us/contact-us.module#ContactUsModule'
            },
            {
                path: 'feedback',
                loadChildren: 'src/app/pages/feedback/feedback.module#FeedbackModule'
            },
        ]
    }
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                _shared_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/shared/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/shared/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer!\n</p>\n<a routerLink='/'>Home Page</a>\n<!-- <br> --> | \n<a routerLink='/setup-rule'>Setup Rules</a>\n<!-- <br> --> | \n<!-- <a routerLink='/faq'>Faq Page</a> -->\n<!-- <br> --> | \n<!-- <a routerLink='/contact-us'>Contact Us</a> -->\n<!-- <br> --> | \n<!-- <a routerLink='/feedback'>Feedback</a> --> "

/***/ }),

/***/ "./src/app/layout/shared/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layout/shared/footer/footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/shared/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/shared/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/shared/footer/footer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/shared/footer/footer.module.ts ***!
  \*******************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/layout/shared/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [
                _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/layout/shared/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/shared/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  header!\n</p>\n<a routerLink='/'>Home Page</a>\n<br>\n<a routerLink='/faq'>Faq Page</a>\n<br>\n<a routerLink='/contact-us'>Contact Us</a>\n<br>\n<a routerLink='/feedback'>Feedback</a> -->\n\n<div class=\"row-fluid main-header\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12 menubar\">\n      <ul class=\"pt-5 m-0 pull-left\"> \n        <li><a href=\"index.html\"><img src=\"/assets/assets/images/lead-auto-convert-logo.png\" style=\"width:205px;margin-left:-60px;\"></a></li>\n        <!-- <li><a href=\"funnel.html\" target=\"_blank\"> Funnel</a></li> -->\n        <!-- <li><a href=\"list.html\" target=\"_blank\"> List</a></li> -->\n        <!-- <li><a href=\"statistic.html\"> Dashboard</a></li> -->\n      </ul>\n      <ul class=\"pt-15 pull-right\">\n        <!-- <li><a href=\"configuration.html\" target=\"_blank\"><img src=\"/assets/assets/images/shedule.png\"> Configuration</a></li> -->\n        <!-- <li><a href=\"#\" class=\"creat-new-campaigns-menu\"> Create New Campaigns</a></li> -->\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/shared/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layout/shared/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/shared/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/shared/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/shared/header/header.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/shared/header/header.module.ts ***!
  \*******************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/layout/shared/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/layout/site-layout/site-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/site-layout/site-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n\n<!-- <div > -->\n  <router-outlet></router-outlet>\n<!-- </div> -->\n\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/layout/site-layout/site-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/site-layout/site-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWxheW91dC9zaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/site-layout/site-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/site-layout/site-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/app/layout/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.scss */ "./src/app/layout/site-layout/site-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-layout-layout-module.js.map