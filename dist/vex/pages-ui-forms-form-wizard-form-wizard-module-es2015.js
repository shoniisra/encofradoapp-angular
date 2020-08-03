(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-forms-form-wizard-form-wizard-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-home.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secondary-toolbar-placeholder\">&nbsp;</div>\n\n<div [ngClass]=\"{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }\"\n     class=\"secondary-toolbar shadow-b py-1 z-40 border-t\"\n     fxLayout=\"row\">\n  <div class=\"px-gutter\" fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n    <h1 *ngIf=\"current\"\n        class=\"subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3\"\n        fxFlex.xs=\"auto\">{{ current }}</h1>\n\n    <ng-content></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-secondary-toolbar current=\"Form Wizard\">\n  <vex-breadcrumbs [crumbs]=\"['Forms', 'Form Wizard']\" fxFlex=\"auto\"></vex-breadcrumbs>\n\n  <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\n    <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n  </button>\n</vex-secondary-toolbar>\n\n<div @stagger class=\"p-gutter\" vexContainer>\n\n  <h2 class=\"title mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\n          class=\"w-10 h-10 rounded-full text-primary-500 mr-3 flex items-center justify-center\">\n      <ic-icon [icon]=\"icDescription\" height=\"20px\" width=\"20px\"></ic-icon>\n    </span>\n    <span @fadeInRight class=\"block\">Horizontal Form Wizard</span>\n  </h2>\n\n  <div @fadeInUp class=\"card overflow-hidden\">\n    <mat-horizontal-stepper #stepper=\"matHorizontalStepper\" [linear]=\"true\">\n      <ng-template matStepperIcon=\"edit\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <ng-template matStepperIcon=\"done\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <mat-step [stepControl]=\"accountFormGroup\">\n        <form [formGroup]=\"accountFormGroup\">\n          <ng-template matStepLabel>Create Account</ng-template>\n\n          <h2 class=\"title m-0\">Create Account</h2>\n          <div class=\"subheading-1\">Set up your account for testing purposes.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Account Username</mat-label>\n              <input formControlName=\"username\" matInput required>\n              <mat-hint>This will be your unique login name.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Name</mat-label>\n              <input formControlName=\"name\" matInput required>\n              <mat-hint>How may we call you?</mat-hint>\n            </mat-form-field>\n\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"8px\" fxLayoutGap.gt-xs=\"24px\">\n              <mat-form-field fxFlex=\"auto\">\n                <mat-label>E-Mail</mat-label>\n                <input formControlName=\"email\" matInput required>\n                <mat-hint align=\"end\">example@example.com</mat-hint>\n              </mat-form-field>\n\n              <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutGap=\"8px\">\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"none\">\n                  <mat-label>Code</mat-label>\n                  <mat-select formControlName=\"phonePrefix\">\n                    <mat-option *ngFor=\"let option of phonePrefixOptions\" [value]=\"option\">{{ option }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"auto\">\n                  <mat-label>Phone Number</mat-label>\n                  <input formControlName=\"phone\" matInput>\n                  <mat-hint align=\"end\"></mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button (click)=\"stepper.reset()\" [disabled]=\"accountFormGroup.pristine\" color=\"primary\" mat-button\n                    type=\"button\">RESET\n            </button>\n            <button [disabled]=\"accountFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"passwordFormGroup\">\n        <form [formGroup]=\"passwordFormGroup\">\n          <ng-template matStepLabel>Select a Password</ng-template>\n\n          <h2 class=\"title m-0\">Select a Password</h2>\n          <div class=\"subheading-1\">Enter your password you will use to log in.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"password\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Your password should be atleast 6 characters long.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Confirm Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"passwordConfirm\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Please type in your password again.</mat-hint>\n            </mat-form-field>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button [disabled]=\"passwordFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"confirmFormGroup\">\n        <form [formGroup]=\"confirmFormGroup\">\n          <ng-template matStepLabel>Confirm Creation</ng-template>\n\n          <div class=\"title m-0\">You're almost there!</div>\n          <div class=\"subheading-1\">To finish registration, accept our terms of service and click on \"Create Account\".\n          </div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-checkbox class=\"checkbox\" formControlName=\"terms\">\n              I agree to the terms of service and the usual stuff. *\n            </mat-checkbox>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button (click)=\"submit()\" [disabled]=\"confirmFormGroup.invalid\" color=\"primary\" mat-raised-button\n                    matStepperNext>\n              CREATE ACCOUNT\n            </button>\n          </div>\n        </form>\n\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n\n  <h2 class=\"title mt-6 mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\n          class=\"w-10 h-10 rounded-full text-primary-500 mr-3 flex items-center justify-center\">\n      <ic-icon [icon]=\"icVerticalSplit\" height=\"20px\" width=\"20px\"></ic-icon>\n    </span>\n    <span @fadeInRight class=\"block\">Vertical Form Wizard</span>\n  </h2>\n\n  <div @fadeInUp class=\"card overflow-hidden\">\n    <mat-vertical-stepper #verticalStepper=\"matVerticalStepper\" [linear]=\"true\">\n      <ng-template matStepperIcon=\"edit\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <ng-template matStepperIcon=\"done\">\n        <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      </ng-template>\n\n      <mat-step [stepControl]=\"verticalAccountFormGroup\">\n        <form [formGroup]=\"verticalAccountFormGroup\">\n          <ng-template matStepLabel>Create Account</ng-template>\n\n          <div class=\"title m-0\">Create Account</div>\n          <div class=\"subheading-1\">Set up your account for testing purposes.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Account Username</mat-label>\n              <input formControlName=\"username\" matInput required>\n              <mat-hint>This will be your unique login name.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Name</mat-label>\n              <input formControlName=\"name\" matInput required>\n              <mat-hint>How may we call you?</mat-hint>\n            </mat-form-field>\n\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutGap=\"8px\" fxLayoutGap.gt-xs=\"24px\">\n              <mat-form-field fxFlex=\"auto\">\n                <mat-label>E-Mail</mat-label>\n                <input formControlName=\"email\" matInput required>\n                <mat-hint align=\"end\">example@example.com</mat-hint>\n              </mat-form-field>\n\n              <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutGap=\"8px\">\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"none\">\n                  <mat-label>Code</mat-label>\n                  <mat-select formControlName=\"phonePrefix\">\n                    <mat-option *ngFor=\"let option of phonePrefixOptions\" [value]=\"option\">{{ option }}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class=\"vex-flex-form-field\" fxFlex=\"auto\">\n                  <mat-label>Phone Number</mat-label>\n                  <input formControlName=\"phone\" matInput>\n                  <mat-hint align=\"end\"></mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button (click)=\"verticalStepper.reset()\" [disabled]=\"verticalAccountFormGroup.pristine\" color=\"primary\"\n                    mat-button\n                    type=\"button\">RESET\n            </button>\n            <button [disabled]=\"verticalAccountFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>\n              NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"verticalPasswordFormGroup\">\n        <form [formGroup]=\"verticalPasswordFormGroup\">\n          <ng-template matStepLabel>Select a Password</ng-template>\n\n          <div class=\"title m-0\">Select a Password</div>\n          <div class=\"subheading-1\">Enter your password you will use to log in.</div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"password\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Your password should be atleast 6 characters long.</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"auto\">\n              <mat-label>Confirm Password</mat-label>\n              <input [type]=\"passwordInputType\" formControlName=\"passwordConfirm\" matInput required>\n              <button (click)=\"showPassword()\" *ngIf=\"passwordInputType === 'password'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibility\"></mat-icon>\n              </button>\n              <button (click)=\"hidePassword()\" *ngIf=\"passwordInputType === 'text'\" mat-icon-button matSuffix\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icVisibilityOff\"></mat-icon>\n              </button>\n              <mat-hint>Please type in your password again.</mat-hint>\n            </mat-form-field>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button [disabled]=\"verticalPasswordFormGroup.invalid\" color=\"primary\" mat-raised-button matStepperNext>\n              NEXT\n            </button>\n          </div>\n        </form>\n      </mat-step>\n\n      <mat-step [stepControl]=\"verticalConfirmFormGroup\">\n        <form [formGroup]=\"verticalConfirmFormGroup\">\n          <ng-template matStepLabel>Confirm Creation</ng-template>\n\n          <div class=\"title m-0\">You're almost there!</div>\n          <div class=\"subheading-1\">To finish registration, accept our terms of service and click on \"Create Account\".\n          </div>\n\n          <div class=\"mt-4\" fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-checkbox class=\"checkbox\" formControlName=\"terms\">\n              I agree to the terms of service and the usual stuff. *\n            </mat-checkbox>\n          </div>\n\n          <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n            <button color=\"primary\" mat-button matStepperPrevious type=\"button\">PREVIOUS</button>\n            <button (click)=\"submit()\" [disabled]=\"verticalConfirmFormGroup.invalid\" color=\"primary\" mat-raised-button\n                    matStepperNext>\n              CREATE ACCOUNT\n            </button>\n          </div>\n        </form>\n\n      </mat-step>\n    </mat-vertical-stepper>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/@vex/animations/fade-in-right.animation.ts":
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/*! exports provided: fadeInRightAnimation, fadeInRight400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function() { return fadeInRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function() { return fadeInRight400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInRightAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateX(-20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInRight400ms = fadeInRightAnimation(400);


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

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts":
/*!****************************************************************************!*\
  !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
};
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-breadcrumb',
        template: `
      <ng-content></ng-content>
  `,
        host: {
            class: 'vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
        }
    })
], BreadcrumbComponent);



/***/ }),

/***/ "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts":
/*!******************************************************************!*\
  !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-home */ "./node_modules/@iconify/icons-ic/twotone-home.js");
/* harmony import */ var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/track-by */ "./src/@vex/utils/track-by.ts");




let BreadcrumbsComponent = class BreadcrumbsComponent {
    constructor() {
        this.crumbs = [];
        this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByValue"];
        this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BreadcrumbsComponent.prototype, "crumbs", void 0);
BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-breadcrumbs',
        template: `
      <div class="flex items-center">
          <vex-breadcrumb>
              <a [routerLink]="['/']">
                  <ic-icon [icon]="icHome" inline="true" size="20px"></ic-icon>
              </a>
          </vex-breadcrumb>
          <ng-container *ngFor="let crumb of crumbs; trackBy: trackByValue">
              <div class="w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2"></div>
              <vex-breadcrumb>
                  <a [routerLink]="[]">{{ crumb }}</a>
              </vex-breadcrumb>
          </ng-container>
      </div>
  `
    })
], BreadcrumbsComponent);



/***/ }),

/***/ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts":
/*!***************************************************************!*\
  !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return BreadcrumbsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs.component */ "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts");









let BreadcrumbsModule = class BreadcrumbsModule {
};
BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]
        ],
        declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]],
        exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]]
    })
], BreadcrumbsModule);



/***/ }),

/***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss":
/*!********************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secondary-toolbar {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder {\n  height: var(--secondary-toolbar-height);\n}\n\n::ng-deep .is-mobile .fixed {\n  width: 100%;\n}\n\n::ng-deep body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n::ng-deep vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n  ::ng-deep vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy9zZWNvbmRhcnktdG9vbGJhci9zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzREFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZGFyeS10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpICogLTEpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIuZml4ZWQge1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5pcy1tb2JpbGUgLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci5maXhlZCB7XG4gIHdpZHRoOiB2YXIoLS10b29sYmFyLXdpZHRoKTtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyLXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xufVxuXG46Om5nLWRlZXAgLmlzLW1vYmlsZSAuZml4ZWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIGJvZHkgLmZpeGVkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtd2lkdGgpKTtcbn1cblxuOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICA6Om5nLWRlZXAgdmV4LWJyZWFkY3J1bWJzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
  \******************************************************************************/
/*! exports provided: SecondaryToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryToolbarComponent", function() { return SecondaryToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/@vex/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let SecondaryToolbarComponent = class SecondaryToolbarComponent {
    constructor(configService) {
        this.configService = configService;
        this.fixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(config => config.toolbar.fixed));
    }
    ngOnInit() {
    }
};
SecondaryToolbarComponent.ctorParameters = () => [
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryToolbarComponent.prototype, "current", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryToolbarComponent.prototype, "crumbs", void 0);
SecondaryToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-secondary-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secondary-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secondary-toolbar.component.scss */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss")).default]
    })
], SecondaryToolbarComponent);



/***/ }),

/***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts":
/*!***************************************************************************!*\
  !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
  \***************************************************************************/
/*! exports provided: SecondaryToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryToolbarModule", function() { return SecondaryToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-toolbar.component */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");











let SecondaryToolbarModule = class SecondaryToolbarModule {
};
SecondaryToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]
        ],
        exports: [_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"]]
    })
], SecondaryToolbarModule);



/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormWizardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardRoutingModule", function() { return FormWizardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wizard.component */ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");




const routes = [
    {
        path: '',
        component: _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
    }
];
let FormWizardRoutingModule = class FormWizardRoutingModule {
};
FormWizardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormWizardRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2Zvcm1zL2Zvcm0td2l6YXJkL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function() { return FormWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ "./node_modules/@iconify/icons-ic/twotone-description.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-vertical-split */ "./node_modules/@iconify/icons-ic/twotone-vertical-split.js");
/* harmony import */ var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility */ "./node_modules/@iconify/icons-ic/twotone-visibility.js");
/* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility-off */ "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
/* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done-all */ "./node_modules/@iconify/icons-ic/twotone-done-all.js");
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../@vex/utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");















let FormWizardComponent = class FormWizardComponent {
    constructor(fb, cd, snackbar) {
        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
        this.passwordInputType = 'password';
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icVerticalSplit = _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_14__["default"];
    }
    ngOnInit() {
        /**
         * Horizontal Stepper
         * @type {FormGroup}
         */
        this.accountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: [],
        });
        this.passwordFormGroup = this.fb.group({
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
                ])
            ],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.confirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
        });
        /**
         * Vertical Stepper
         * @type {FormGroup}
         */
        this.verticalAccountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: [],
        });
        this.verticalPasswordFormGroup = this.fb.group({
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
                ])
            ],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.verticalConfirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
        });
    }
    showPassword() {
        this.passwordInputType = 'text';
        this.cd.markForCheck();
    }
    hidePassword() {
        this.passwordInputType = 'password';
        this.cd.markForCheck();
    }
    submit() {
        this.snackbar.open('Hooray! You successfully created your account.', null, {
            duration: 5000
        });
    }
};
FormWizardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
FormWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-form-wizard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-wizard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-wizard/form-wizard.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger80ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInRight400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-wizard.component.scss */ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.scss")).default]
    })
], FormWizardComponent);



/***/ }),

/***/ "./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts ***!
  \******************************************************************/
/*! exports provided: FormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardModule", function() { return FormWizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wizard-routing.module */ "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts");
/* harmony import */ var _form_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-wizard.component */ "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
/* harmony import */ var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../@vex/pipes/color/color-fade.module */ "./src/@vex/pipes/color/color-fade.module.ts");



















let FormWizardModule = class FormWizardModule {
};
FormWizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_4__["FormWizardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormWizardRoutingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"],
            _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__["ColorFadeModule"]
        ]
    })
], FormWizardModule);



/***/ })

}]);
//# sourceMappingURL=pages-ui-forms-form-wizard-form-wizard-module-es2015.js.map