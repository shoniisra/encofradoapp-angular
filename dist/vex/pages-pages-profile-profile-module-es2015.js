(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/profile/profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/profile/profile.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container py-gutter\">\n  <div class=\"card overflow-hidden\">\n    <div class=\"h-64 relative overflow-hidden\">\n      <img class=\"w-full object-cover\" src=\"assets/img/demo/landscape.jpg\">\n      <div class=\"absolute bg-contrast-black opacity-25 top-0 right-0 bottom-0 left-0 w-full h-full z-0\"></div>\n\n      <img class=\"avatar h-24 w-24 absolute top-6 left-4\"\n           fxFlex=\"none\"\n           fxFlexAlign=\"start\"\n           fxHide.gt-xs\n           src=\"assets/img/avatars/1.jpg\">\n    </div>\n\n    <div class=\"z-10 relative -mt-16 px-gutter\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n      <img @scaleIn\n           class=\"avatar h-24 w-24\"\n           fxFlex=\"none\"\n           fxFlexAlign=\"start\"\n           fxHide.xs\n           src=\"assets/img/avatars/1.jpg\">\n\n      <div [ngClass.gt-xs]=\"['ltr:ml-6 rtl:mr-6']\" class=\"max-w-full\" fxFlex=\"auto\">\n        <div class=\"h-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <h1 @fadeInRight class=\"headline text-contrast-white m-0\">David Smith</h1>\n        </div>\n\n        <nav class=\"vex-tabs vex-tabs-dense border-0\" mat-tab-nav-bar>\n          <a #rla=\"routerLinkActive\"\n             *ngFor=\"let link of links\"\n             [active]=\"rla.isActive\"\n             [disabled]=\"link.disabled\"\n             [routerLink]=\"link.route\"\n             mat-tab-link\n             queryParamsHandling=\"preserve\"\n             routerLinkActive>\n            {{ link.label }}\n          </a>\n        </nav>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-6\"\n       fxLayout=\"row\"\n       fxLayout.lt-md=\"column\"\n       fxLayoutAlign=\"start start\"\n       fxLayoutAlign.lt-md=\"start stretch\"\n       fxLayoutGap=\"24px\">\n    <div fxFlex=\"calc(70% - 12px)\" fxFlex.lt-md=\"auto\">\n      <div class=\"card\">\n        <div class=\"px-gutter py-4 border-b\">\n          <h2 class=\"title m-0\">About</h2>\n        </div>\n\n        <div class=\"px-gutter py-4\" gdColumns=\"1fr 1fr\" gdColumns.xs=\"1fr\" gdGap=\"16px\">\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icPhone\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">+1 (930) 502-3182</p>\n              <p class=\"m-0 caption text-hint\">Business</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icWork\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">Web Developer at IceCube</p>\n              <p class=\"m-0 caption text-hint\">Previously Designer at HotStuff</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icMail\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">david.smith@example.com</p>\n              <p class=\"m-0 caption text-hint\">Business inquiries only</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-primary-50 text-primary-500 ltr:mr-3 rtl:ml-3 flex items-center justify-center\">\n              <ic-icon [icon]=\"icAccessTime\" size=\"20px\"></ic-icon>\n            </div>\n\n            <div @fadeInRight>\n              <p class=\"m-0 body-1\">Usually available 9am-5pm</p>\n              <p class=\"m-0 caption text-hint\">Call +1 (930) 242-5186 for important things</p>\n            </div>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-gray-50 text-dark ltr:mr-3 rtl:ml-3 cursor-pointer flex items-center justify-center\">\n              <ic-icon [icon]=\"icAdd\" size=\"20px\"></ic-icon>\n            </div>\n\n            <p @fadeInRight class=\"m-0 body-1 cursor-pointer\">Add an address</p>\n          </div>\n\n          <div class=\"py-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div @scaleIn\n                 class=\"w-10 h-10 rounded-full bg-gray-50 text-dark ltr:mr-3 rtl:ml-3 cursor-pointer flex items-center justify-center\">\n              <ic-icon [icon]=\"icWhatshot\" size=\"20px\"></ic-icon>\n            </div>\n\n            <p @fadeInRight class=\"m-0 body-1 cursor-pointer\">Add social profiles</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card mt-6\">\n        <div class=\"px-gutter py-4 border-b\">\n          <h2 class=\"title m-0\">Latest Photos</h2>\n        </div>\n\n        <div @stagger\n             class=\"px-gutter py-4\"\n             gdColumns=\"1fr 1fr 1fr 1fr\"\n             gdColumns.lt-lg=\"1fr 1fr 1fr\"\n             gdColumns.xs=\"1fr 1fr\"\n             gdGap=\"24px\">\n          <img *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\"\n               @scaleIn\n               class=\"rounded w-full\"\n               gdGridAlign=\"center\"\n               src=\"assets/img/avatars/{{ i }}.jpg\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\" fxFlex=\"calc(30% - 12px)\" fxFlex.lt-md=\"auto\">\n      <div class=\"px-6 py-4 border-b\">\n        <h2 class=\"title m-0\">Friend Suggestions</h2>\n      </div>\n\n      <div @stagger class=\"px-6 py-4\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n        <div *ngFor=\"let friend of suggestions; trackBy: trackByName\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <img @scaleIn [src]=\"friend.imageSrc\" class=\"avatar ltr:mr-3 rtl:ml-3\" fxFlex=\"none\">\n          <div @fadeInRight fxFlex=\"auto\">\n            <h4 class=\"body-2 m-0 leading-snug\">{{ friend.name }}</h4>\n            <h5 class=\"text-secondary m-0 caption leading-none\">{{ friend.friends }} mutual friends</h5>\n          </div>\n          <button (click)=\"addFriend(friend)\" *ngIf=\"!friend.added\" color=\"primary\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icPersonAdd\"></mat-icon>\n          </button>\n\n          <button (click)=\"removeFriend(friend)\" *ngIf=\"friend.added\" color=\"primary\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icCheck\"></mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/@vex/components/page-layout/page-layout-content.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
  \**************************************************************************/
/*! exports provided: PageLayoutContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function() { return PageLayoutContentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutContentDirective = class PageLayoutContentDirective {
    constructor() { }
};
PageLayoutContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[vexPageLayoutContent],vex-page-layout-content',
        host: {
            class: 'vex-page-layout-content'
        }
    })
], PageLayoutContentDirective);



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout-header.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
  \*************************************************************************/
/*! exports provided: PageLayoutHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function() { return PageLayoutHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutHeaderDirective = class PageLayoutHeaderDirective {
    constructor() { }
};
PageLayoutHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[vexPageLayoutHeader],vex-page-layout-header',
        host: {
            class: 'vex-page-layout-header'
        }
    })
], PageLayoutHeaderDirective);



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: #5c77ff;\n  color: #FFF;\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: #FFF;\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: #FFF;\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtFQUNBLGlEQUFBO0FDQ0Y7O0FERUE7O0VBRUUseUNBQUE7QUNDRjs7QURFQTs7RUFFRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0ZBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXBhZ2UtbGF5b3V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtc2ltcGxlIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkgKiAtMSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+ICogPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSxcbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgY29sb3I6ICNGRkY7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1wYWdlLWxheW91dC1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iIHtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIgLnZleC1icmVhZGNydW1iOmhvdmVyIHtcbiAgY29sb3I6ICNGRkY7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufSIsIi52ZXgtcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZleC1wYWdlLWxheW91dC1zaW1wbGUgLnZleC1wYWdlLWxheW91dC1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmcpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSAqIC0xKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+ICogPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbCxcbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbCB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItbGFiZWwtYWN0aXZlLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xuICBjb2xvcjogI0ZGRjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbGF5b3V0LWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpKTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZyk7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciAudmV4LWJyZWFkY3J1bWIge1xuICBjb2xvcjogI0ZGRjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciAudmV4LWJyZWFkY3J1bWI6aG92ZXIge1xuICBjb2xvcjogI0ZGRjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnZleC1wYWdlLWxheW91dC1jb250ZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG59Il19 */");

/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutComponent = class PageLayoutComponent {
    constructor() {
        this.mode = 'simple';
    }
    get isCard() {
        return this.mode === 'card';
    }
    get isSimple() {
        return this.mode === 'simple';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageLayoutComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-card')
], PageLayoutComponent.prototype, "isCard", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.vex-page-layout-simple')
], PageLayoutComponent.prototype, "isSimple", null);
PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-page-layout',
        template: '<ng-content></ng-content>',
        host: {
            class: 'vex-page-layout'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-layout.component.scss */ "./src/@vex/components/page-layout/page-layout.component.scss")).default]
    })
], PageLayoutComponent);



/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: PageLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function() { return PageLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout.component */ "./src/@vex/components/page-layout/page-layout.component.ts");
/* harmony import */ var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-header.directive */ "./src/@vex/components/page-layout/page-layout-header.directive.ts");
/* harmony import */ var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-layout-content.directive */ "./src/@vex/components/page-layout/page-layout-content.directive.ts");






let PageLayoutModule = class PageLayoutModule {
};
PageLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]],
        exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__["PageLayoutContentDirective"]]
    })
], PageLayoutModule);



/***/ }),

/***/ "./src/app/pages/pages/profile/profile-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/profile/profile-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/pages/profile/profile.component.ts");




const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        data: {
            toolbarShadowEnabled: true,
            containerEnabled: true
        }
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/pages/profile/profile.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pages/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-work */ "./node_modules/@iconify/icons-ic/twotone-work.js");
/* harmony import */ var _iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_data_friend_suggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../static-data/friend-suggestions */ "./src/static-data/friend-suggestions.ts");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ "./node_modules/@iconify/icons-ic/twotone-person-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
/* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-access-time */ "./node_modules/@iconify/icons-ic/twotone-access-time.js");
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-whatshot */ "./node_modules/@iconify/icons-ic/twotone-whatshot.js");
/* harmony import */ var _iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_16__);

















let ProfileComponent = class ProfileComponent {
    constructor(apollo) {
        this.apollo = apollo;
        this.loading = true;
        this.links = [
            {
                label: "ABOUT",
                route: "./",
            },
            {
                label: "TIMELINE",
                route: "",
                disabled: true,
            },
            {
                label: "FRIENDS",
                route: "",
                disabled: true,
            },
            {
                label: "PHOTOS",
                route: "",
                disabled: true,
            },
        ];
        this.suggestions = _static_data_friend_suggestions__WEBPACK_IMPORTED_MODULE_4__["friendSuggestions"];
        this.icWork = _iconify_icons_ic_twotone_work__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icAccessTime = _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icWhatshot = _iconify_icons_ic_twotone_whatshot__WEBPACK_IMPORTED_MODULE_14___default.a;
        apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_16___default.a `
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
        })
            .valueChanges.subscribe((result) => {
            this.rates = result.data;
            console.log(result.data); // no TypeScript errors
        });
    }
    ngOnInit() {
    }
    addFriend(friend) {
        friend.added = true;
    }
    removeFriend(friend) {
        friend.added = false;
    }
    trackByName(index, friend) {
        return friend.name;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_15__["Apollo"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "vex-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/profile/profile.component.html")).default,
        animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUp400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_9__["fadeInRight400ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_8__["scaleIn400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger40ms"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/pages/profile/profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pages/profile/profile.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/pages/profile/profile.component.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");












let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"]
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/static-data/friend-suggestions.ts":
/*!***********************************************!*\
  !*** ./src/static-data/friend-suggestions.ts ***!
  \***********************************************/
/*! exports provided: friendSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendSuggestions", function() { return friendSuggestions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const friendSuggestions = [
    {
        name: 'Fannie Wilson',
        imageSrc: 'assets/img/avatars/1.jpg',
        friends: 6,
        added: false
    },
    {
        name: 'Priscilla Ayala',
        imageSrc: 'assets/img/avatars/2.jpg',
        friends: 3,
        added: false
    },
    {
        name: 'Margaret Farley',
        imageSrc: 'assets/img/avatars/3.jpg',
        friends: 3,
        added: true
    },
    {
        name: 'Alston Tucker',
        imageSrc: 'assets/img/avatars/4.jpg',
        friends: 1,
        added: true
    },
    {
        name: 'Frye Humphrey',
        imageSrc: 'assets/img/avatars/5.jpg',
        friends: 1,
        added: true
    },
    {
        name: 'Jannie Cochran',
        imageSrc: 'assets/img/avatars/6.jpg',
        friends: 5,
        added: false
    },
    {
        name: 'Perkins Doyle',
        imageSrc: 'assets/img/avatars/7.jpg',
        friends: 7,
        added: false
    },
    {
        name: 'Marci Boyd',
        imageSrc: 'assets/img/avatars/8.jpg',
        friends: 2,
        added: false
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-pages-profile-profile-module-es2015.js.map