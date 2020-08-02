(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-invoice-invoice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/invoice/invoice.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/invoice/invoice.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-gutter container\">\n  <div @fadeInUp class=\"card p-16\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"50%\">\n        <img class=\"h-40\" src=\"assets/img/logo.png\">\n\n        <div class=\"mt-12\">\n          <h4 class=\"body-2 text-secondary mt-0\">RECIPIENT</h4>\n          <h3 class=\"title m-0\">David Smith</h3>\n          <div class=\"text-secondary\">\n            <p class=\"m-0\">712 Clarkson Ave</p>\n            <p class=\"m-0\">Brooklyn, NY</p>\n            <p class=\"m-0\">11203, USA</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"text-right body-1\" fxFlex=\"50%\" fxLayout=\"column\" fxLayoutAlign=\"start end\">\n        <h1 class=\"display-2 m-0\">INVOICE</h1>\n\n        <table class=\"mt-6\">\n          <tbody>\n          <tr>\n            <td class=\"text-secondary body-2\">INVOICE NO.</td>\n            <td class=\"text-left pl-4\">2019/0592</td>\n          </tr>\n          <tr>\n            <td class=\"text-secondary body-2\">INVOICE DATE</td>\n            <td class=\"text-left pl-4\">10/04/2019</td>\n          </tr>\n          <tr>\n            <td class=\"text-secondary body-2\">PROJECT NO.</td>\n            <td class=\"text-left pl-4\">D-23-44</td>\n          </tr>\n          </tbody>\n        </table>\n\n        <div class=\"mt-12\">\n          <h4 class=\"body-2 text-secondary mt-0\">COMPANY</h4>\n          <h3 class=\"title m-0\">IceCold Tech Ltd.</h3>\n          <div class=\"text-secondary\">\n            <p class=\"m-0\">907 Eastern Pkwy</p>\n            <p class=\"m-0\">Brooklyn, NY</p>\n            <p class=\"m-0\">11213, USA</p>\n\n            <p class=\"m-0 mt-3\">\n              <ic-icon [icon]=\"icMail\" class=\"mr-2\" inline=\"true\" size=\"1.25em\"></ic-icon>\n              <span>hello@example.com</span>\n            </p>\n\n            <p class=\"m-0\">\n              <ic-icon [icon]=\"icPhone\" class=\"mr-2\" inline=\"true\" size=\"1.25em\"></ic-icon>\n              <span>+1 (961) 400-3535</span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <table class=\"table w-full mt-24\">\n      <thead>\n      <tr>\n        <td class=\"body-2 text-secondary\">SERVICE</td>\n        <td class=\"body-2 text-secondary\">PRICE PER</td>\n        <td class=\"body-2 text-secondary\">UNIT</td>\n        <td class=\"body-2 text-secondary\">QUANTITY</td>\n        <td class=\"body-2 text-secondary text-right\">TOTAL</td>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td class=\"py-6 border-b\">New Dashboard Prototype, Design & Code</td>\n        <td class=\"py-6 border-b\">$35.00</td>\n        <td class=\"py-6 border-b\">Hour</td>\n        <td class=\"py-6 border-b\">40</td>\n        <td class=\"py-6 border-b font-medium text-right\">$1,400.00</td>\n      </tr>\n\n      <tr>\n        <td class=\"py-6 border-b\">Graphic Pack - Monthly Subscription (includes Updates)</td>\n        <td class=\"py-6 border-b\">$49.99</td>\n        <td class=\"py-6 border-b\">User</td>\n        <td class=\"py-6 border-b\">5</td>\n        <td class=\"py-6 border-b font-medium text-right\">$249.95</td>\n      </tr>\n\n      <tr>\n        <td class=\"py-6 border-b\">Logo & Branding Pack</td>\n        <td class=\"py-6 border-b\">$499.99</td>\n        <td class=\"py-6 border-b\">Piece</td>\n        <td class=\"py-6 border-b\">1</td>\n        <td class=\"py-6 border-b font-medium text-right\">$499.99</td>\n      </tr>\n\n      <tr>\n        <td class=\"py-6 border-b\">Bug Fixes</td>\n        <td class=\"py-6 border-b\">$15.00</td>\n        <td class=\"py-6 border-b\">Hour</td>\n        <td class=\"py-6 border-b\">10</td>\n        <td class=\"py-6 border-b font-medium text-right\">$150.00</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <div class=\"mt-8\" fxLayout=\"column\" fxLayoutAlign=\"start end\">\n      <table class=\"subheading-2 font-medium pr-6\">\n        <tbody>\n        <tr>\n          <td class=\"text-secondary text-right\">SUBTOTAL</td>\n          <td class=\"pl-12\">$2,299.94‬</td>\n        </tr>\n        <tr>\n          <td class=\"text-secondary text-right\">TAX (19%)</td>\n          <td class=\"pl-12\">$436.99‬</td>\n        </tr>\n        <tr>\n          <td class=\"text-secondary text-right\">DISCOUNT (5%)</td>\n          <td class=\"pl-12\">-$114.99‬</td>\n        </tr>\n        <tr>\n          <td class=\"headline font-medium text-right pt-6\">TOTAL</td>\n          <td class=\"headline font-medium pl-12 pt-6\">$2,621.94‬</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/app/pages/pages/invoice/invoice-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.component */ "./src/app/pages/pages/invoice/invoice.component.ts");




const routes = [
    {
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        data: {
            toolbarShadowEnabled: true,
            containerEnabled: true
        }
    }
];
let InvoiceRoutingModule = class InvoiceRoutingModule {
};
InvoiceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InvoiceRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages/invoice/invoice.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media print {\n  .p-gutter {\n    padding: 0 !important;\n  }\n\n  .card {\n    box-shadow: none !important;\n  }\n}\n.table td {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvYXBwL3BhZ2VzL3BhZ2VzL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFnZXMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxxQkFBQTtFQ0NGOztFREVBO0lBQ0UsMkJBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xuICAucC1ndXR0ZXIge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59IiwiQG1lZGlhIHByaW50IHtcbiAgLnAtZ3V0dGVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4udGFibGUgdGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pages/invoice/invoice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice.component.ts ***!
  \**********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");





let InvoiceComponent = class InvoiceComponent {
    constructor() {
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
    }
};
InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/invoice/invoice.component.html")).default,
        animations: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice.component.scss */ "./src/app/pages/pages/invoice/invoice.component.scss")).default]
    })
], InvoiceComponent);



/***/ }),

/***/ "./src/app/pages/pages/invoice/invoice.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pages/invoice/invoice.module.ts ***!
  \*******************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/pages/pages/invoice/invoice-routing.module.ts");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice.component */ "./src/app/pages/pages/invoice/invoice.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");







let InvoiceModule = class InvoiceModule {
};
InvoiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvoiceRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"]
        ]
    })
], InvoiceModule);



/***/ })

}]);
//# sourceMappingURL=pages-pages-invoice-invoice-module.js.map