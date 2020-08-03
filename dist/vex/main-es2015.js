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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\" fxLayout=\"row\">\n  <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n    <a class=\"action\"\n       color=\"primary\"\n       fxFlex=\"none\"\n       href=\"//themeforest.net/item/vex-angular-8-material-design-admin-template/24472891\"\n       id=\"get-vex\"\n       mat-raised-button>\n      <ic-icon [icon]=\"icShoppingBasket\" class=\"ltr:mr-2 rtl:ml-2\" inline=\"true\" size=\"18px\"></ic-icon>\n      <span>Get Vex (Angular 8+)</span>\n    </a>\n    <div class=\"ltr:ml-4 rtl:mr-4\" fxHide fxShow.gt-sm>\n      Vex - Angular 8+ Material Design Admin Template - Save 100s of hours designing and coding\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/mega-menu/mega-menu.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/mega-menu/mega-menu.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass.gt-sm]=\"['mr-6']\" class=\"card overflow-auto\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n  <div class=\"bg-primary-500 text-primary-contrast-500 p-gutter\" fxFlex=\"300px\" fxFlex.lt-md=\"auto\">\n    <h2 class=\"headline mb-4\">Mega Menu</h2>\n\n    <p class=\"caption\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there\n      live the blind\n      texts.</p>\n\n    <p class=\"caption\">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\n      ocean.</p>\n\n    <button class=\"border border-primary-contrast border-solid mt-4\" mat-button type=\"button\">LEARN MORE</button>\n  </div>\n\n  <div class=\"p-gutter\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\">\n    <h3 class=\"body-2 m-0\">FEATURES</h3>\n\n    <div class=\"mt-4\" gdColumns=\"1fr 1fr 1fr\" gdGap=\"16px\">\n      <a (click)=\"close()\"\n         *ngFor=\"let feature of features\"\n         [routerLink]=\"feature.route\"\n         class=\"text-dark p-3 text-center hover:bg-hover hover:text-primary-500 trans-ease-out rounded block no-underline\">\n        <ic-icon [icon]=\"feature.icon\" class=\"text-primary-500\" size=\"32px\"></ic-icon>\n        <div class=\"body-1 mt-2\">{{ feature.label }}</div>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"p-gutter\" fxFlex=\"350px\" fxFlex.lt-md=\"auto\">\n    <h3 class=\"body-2 m-0\">PAGES</h3>\n\n    <div class=\"mt-6\" gdColumns=\"1fr 1fr\" gdGap=\"16px 48px\">\n      <a (click)=\"close()\"\n         *ngFor=\"let page of pages\"\n         [routerLink]=\"page.route\"\n         class=\"text-dark body-1 no-underline hover:text-primary-500 trans-ease-out\">{{ page.label }}</a>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/navigation-item/navigation-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/navigation-item/navigation-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a *ngIf=\"isLink(item) && !isFunction(item.route)\"\n   [class.hover:bg-hover]=\"!(isActive$ | async)(item)\"\n   [ngClass]=\"{ 'bg-primary-500 text-primary-contrast-500': (isActive$ | async)(item), 'navigation-color': !(isActive$ | async)(item) }\"\n   [routerLink]=\"item.route\"\n   class=\"navigation-item\"\n   matRipple>\n  {{ item.label }}\n</a>\n\n<div (click)=\"item.route()\"\n     *ngIf=\"isLink(item) && isFunction(item.route)\"\n     [class.hover:bg-hover]=\"!(isActive$ | async)(item)\"\n     class=\"navigation-item navigation-color\"\n     matRipple>\n  {{ item.label }}\n</div>\n\n<ng-container *ngIf=\"(isSubheading(item) && item.children?.length > 0) || isDropdown(item)\">\n  <div [class.hover:bg-hover]=\"!(isActive$ | async)(item)\"\n       [matMenuTriggerFor]=\"menu\"\n       [ngClass]=\"{ 'bg-primary-500 text-primary-contrast-500': (isActive$ | async)(item), 'navigation-color': !(isActive$ | async)(item) }\"\n       class=\"navigation-item\"\n       matRipple>\n    {{ item.label }}\n  </div>\n\n  <mat-menu #menu=\"matMenu\" yPosition=\"below\">\n    <ng-container *ngFor=\"let child of item.children\">\n      <a *ngIf=\"isLink(child) && !isFunction(child.route)\"\n         [routerLink]=\"child.route\"\n         class=\"navigation-menu-item\"\n         mat-menu-item>\n        <mat-icon [icIcon]=\"child.icon\"></mat-icon>\n        <span>{{ child.label }}</span>\n      </a>\n\n      <div (click)=\"child.route()\"\n           *ngIf=\"isLink(child) && isFunction(child.route)\"\n           class=\"navigation-menu-item\"\n           mat-menu-item>\n        <mat-icon [icIcon]=\"child.icon\"></mat-icon>\n        <span>{{ child.label }}</span>\n      </div>\n\n      <ng-container *ngIf=\"isDropdown(child)\">\n        <button [matMenuTriggerFor]=\"level1\" class=\"navigation-menu-item\" mat-menu-item>\n          <mat-icon [icIcon]=\"child.icon\"></mat-icon>\n          <span>{{ child.label }}</span>\n        </button>\n\n        <mat-menu #level1=\"matMenu\" yPosition=\"below\">\n          <ng-container *ngFor=\"let item of child.children\">\n            <ng-container [ngTemplateOutletContext]=\"{ item: item }\"\n                          [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\n\n            <ng-container *ngIf=\"isDropdown(item)\">\n              <button [matMenuTriggerFor]=\"level2\"\n                      class=\"navigation-menu-item\"\n                      mat-menu-item>{{ item.label }}</button>\n\n              <mat-menu #level2=\"matMenu\" yPosition=\"below\">\n                <ng-container *ngFor=\"let child of item.children\">\n                  <ng-container [ngTemplateOutletContext]=\"{ item: child }\"\n                                [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\n\n                  <ng-container *ngIf=\"isDropdown(child)\">\n                    <button [matMenuTriggerFor]=\"level3\"\n                            class=\"navigation-menu-item\"\n                            mat-menu-item>{{ child.label }}</button>\n\n                    <mat-menu #level3=\"matMenu\" yPosition=\"below\">\n                      <ng-container *ngFor=\"let item of child.children\">\n                        <ng-container [ngTemplateOutletContext]=\"{ item: item }\"\n                                      [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\n\n                        <ng-container *ngIf=\"isDropdown(item)\">\n                          <button [matMenuTriggerFor]=\"level4\"\n                                  class=\"navigation-menu-item\"\n                                  mat-menu-item>{{ item.label }}</button>\n\n                          <mat-menu #level4=\"matMenu\" yPosition=\"below\">\n                            <ng-container *ngFor=\"let child of item.children\">\n                              <ng-container [ngTemplateOutletContext]=\"{ item: child }\"\n                                            [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\n\n                              <ng-container *ngIf=\"isDropdown(child)\">\n                                <button [matMenuTriggerFor]=\"level5\"\n                                        class=\"navigation-menu-item\"\n                                        mat-menu-item>{{ child.label }}</button>\n\n                                <mat-menu #level5=\"matMenu\" yPosition=\"below\">\n                                  <ng-container *ngFor=\"let item of child.children\">\n                                    <ng-container [ngTemplateOutletContext]=\"{ item: item }\"\n                                                  [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\n                                  </ng-container>\n                                </mat-menu>\n                              </ng-container>\n                            </ng-container>\n                          </mat-menu>\n                        </ng-container>\n                      </ng-container>\n                    </mat-menu>\n                  </ng-container>\n                </ng-container>\n              </mat-menu>\n            </ng-container>\n          </ng-container>\n        </mat-menu>\n      </ng-container>\n\n    </ng-container>\n  </mat-menu>\n\n  <ng-template #linkTemplate let-item=\"item\">\n    <a *ngIf=\"isLink(item) && !isFunction(item.route)\"\n       [routerLink]=\"item.route\"\n       class=\"navigation-menu-item\"\n       mat-menu-item>{{ item.label }}</a>\n\n    <div (click)=\"item.route()\"\n         *ngIf=\"isLink(item) && isFunction(item.route)\"\n         class=\"navigation-menu-item\"\n         mat-menu-item>{{ item.label }}</div>\n  </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/popover/popover.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/popover/popover.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div @transformPopover class=\"popover\">\n  <ng-container [ngSwitch]=\"renderMethod\">\n    <div *ngSwitchCase=\"'text'\" [innerHTML]=\"content\"></div>\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/progress-bar/progress-bar.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/progress-bar/progress-bar.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar [class.visible]=\"loader.progress$ | async\"\n                  [value]=\"loader.progress$ | async\"\n                  class=\"progress-bar\"\n                  mode=\"determinate\"></mat-progress-bar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/quickpanel/quickpanel.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/quickpanel/quickpanel.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body-2 p-6 bg-primary-500 text-primary-contrast-500\">\n  <p>TODAY</p>\n  <div class=\"display-1\">{{ dayName }}</div>\n  <div class=\"display-1\">{{ date }}</div>\n</div>\n\n<mat-divider></mat-divider>\n\n<mat-nav-list>\n  <h3 matSubheader>UPCOMING EVENTS</h3>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Business Meeting</h4>\n    <p matLine>In 16 Minutes, Meeting Room</p>\n  </a>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Ask for Vacation</h4>\n    <p matLine>12:00 PM</p>\n  </a>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Dinner with Sophie</h4>\n    <p matLine>18:30 PM</p>\n  </a>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Deadline for Project X</h4>\n    <p matLine>21:00 PM</p>\n  </a>\n  <mat-divider></mat-divider>\n  <h3 matSubheader>TODO-LIST</h3>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Invite Jack to play golf</h4>\n    <p matLine>Added: 6 hours ago</p>\n  </a>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Get to know Angular more</h4>\n    <p matLine>Added: 2 days ago</p>\n  </a>\n  <a [routerLink]=\"[]\" mat-list-item>\n    <h4 matLine>Configure that new router</h4>\n    <p matLine>Added: 5 days ago</p>\n  </a>\n  <mat-divider></mat-divider>\n  <h3 matSubheader>SERVER STATISTICS</h3>\n</mat-nav-list>\n\n<div class=\"list-item\" matRipple>\n  <p>CPU Load (71% / 100%)</p>\n  <p class=\"progress-bar\">\n    <mat-progress-bar color=\"primary\" mode=\"determinate\" value=\"71\"></mat-progress-bar>\n  </p>\n</div>\n\n<div class=\"list-item\" matRipple>\n  <p>RAM Usage (6,175 MB / 16,384 MB)</p>\n  <p class=\"progress-bar\">\n    <mat-progress-bar color=\"accent\" mode=\"determinate\" value=\"34\"></mat-progress-bar>\n  </p>\n</div>\n\n<div class=\"list-item\" matRipple>\n  <p>CPU Temp (43° / 80°)</p>\n  <p class=\"progress-bar\">\n    <mat-progress-bar color=\"warn\" mode=\"determinate\" value=\"54\"></mat-progress-bar>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/search/search.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/search/search.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (keyup.escape)=\"close()\" [class.show]=\"show$ | async\" class=\"search\">\n  <button (click)=\"close()\"\n          class=\"ltr:right-12 rtl:left-12 top-12 absolute\"\n          color=\"primary\"\n          mat-icon-button\n          type=\"button\">\n    <mat-icon [icIcon]=\"icClose\"></mat-icon>\n  </button>\n\n  <input #searchInput (keyup.enter)=\"search()\" [formControl]=\"searchCtrl\" class=\"search-input\" placeholder=\"Search...\"/>\n  <div class=\"search-hint\">Hit enter to search</div>\n</div>\n\n<div (click)=\"close()\" *ngIf=\"show$ | async\" class=\"search-overlay\"></div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidebar/sidebar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidebar/sidebar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"close()\" [class.invisible]=\"invisibleBackdrop\" [class.visible]=\"opened\" class=\"backdrop\"></div>\n\n<div [class.open]=\"opened\" [class.position-left]=\"positionLeft\" [class.position-right]=\"positionRight\" class=\"sidebar\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidenav-item/sidenav-item.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidenav-item/sidenav-item.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a *ngIf=\"isLink(item) && !isFunction(item.route)\"\n   [fragment]=\"item.fragment\"\n   [routerLinkActiveOptions]=\"item.routerLinkActive || { exact: false }\"\n   [routerLink]=\"item.route\"\n   class=\"item\"\n   fxLayout=\"row\"\n   matRipple\n   routerLinkActive=\"active\">\n  <mat-icon *ngIf=\"level === 0\" [icIcon]=\"item.icon\" class=\"item-icon\" fxFlex=\"none\"></mat-icon>\n  <span class=\"item-label\" fxFlex=\"auto\">{{ item.label }}</span>\n  <span *ngIf=\"item.badge\"\n        [style.background]=\"item.badge.background\"\n        [style.color]=\"item.badge.color\"\n        class=\"item-badge\"\n        fxFlex=\"none\">{{ item.badge.value }}</span>\n</a>\n\n<div (click)=\"item.route()\"\n     *ngIf=\"isLink(item) && isFunction(item.route)\"\n     class=\"item\"\n     fxLayout=\"row\"\n     matRipple\n     routerLinkActive=\"active\">\n  <mat-icon *ngIf=\"level === 0\" [icIcon]=\"item.icon\" class=\"item-icon\" fxFlex=\"none\"></mat-icon>\n  <span class=\"item-label\" fxFlex=\"auto\">{{ item.label }}</span>\n  <span *ngIf=\"item.badge\"\n        [style.background]=\"item.badge.background\"\n        [style.color]=\"item.badge.color\"\n        class=\"item-badge\"\n        fxFlex=\"none\">{{ item.badge.value }}</span>\n</div>\n\n<ng-container *ngIf=\"isDropdown(item)\">\n  <div (click)=\"toggleOpen()\"\n       [class.active]=\"isOpen || isActive\"\n       [class.open]=\"isOpen\"\n       class=\"item\"\n       fxLayout=\"row\"\n       matRipple>\n    <mat-icon *ngIf=\"level === 0\" [icIcon]=\"item.icon\" class=\"item-icon\" fxFlex=\"none\"></mat-icon>\n    <span class=\"item-label\" fxFlex=\"auto\">{{ item.label }}</span>\n    <span *ngIf=\"item.badge\"\n          [style.background]=\"item.badge.background\"\n          [style.color]=\"item.badge.color\"\n          class=\"item-badge\"\n          fxFlex=\"none\">{{ item.badge.value }}</span>\n    <mat-icon [icIcon]=\"icKeyboardArrowRight\" class=\"item-dropdown-icon\" fxFlex=\"none\"></mat-icon>\n  </div>\n  <div [@dropdown]=\"isOpen\" class=\"item-dropdown\">\n    <vex-sidenav-item *ngFor=\"let subItem of item.children\" [item]=\"subItem\" [level]=\"level + 1\"></vex-sidenav-item>\n  </div>\n</ng-container>\n\n\n<ng-container *ngIf=\"isSubheading(item)\">\n  <div class=\"subheading\">{{ item.label }}</div>\n  <vex-sidenav-item *ngFor=\"let subItem of item.children\" [item]=\"subItem\" [level]=\"0\"></vex-sidenav-item>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown\">\n  <div class=\"dropdown-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>\n      <div class=\"dropdown-heading\">Notifications</div>\n      <div class=\"dropdown-subheading\">You have {{ notifications.length }} new notifications.</div>\n    </div>\n\n    <button [matMenuTriggerFor]=\"settingsMenu\" mat-icon-button type=\"button\">\n      <mat-icon [icIcon]=\"icSettings\" class=\"notifications-header-icon\"></mat-icon>\n    </button>\n  </div>\n\n  <div class=\"dropdown-content\">\n    <a *ngFor=\"let notification of notifications; trackBy: trackById\"\n       [class.read]=\"notification.read\"\n       [routerLink]=\"[]\"\n       class=\"notification\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"start center\"\n       matRipple>\n      <ic-icon [icon]=\"notification.icon\"\n               [ngClass]=\"notification.colorClass\"\n               class=\"notification-icon\"\n               fxFlex=\"none\"\n               size=\"24px\"></ic-icon>\n      <div fxFlex=\"auto\">\n        <div class=\"notification-label\">{{ notification.label }}</div>\n        <div class=\"notification-description\">{{ notification.datetime | relativeDateTime }}</div>\n      </div>\n      <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon>\n    </a>\n  </div>\n\n  <div class=\"dropdown-footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <button color=\"primary\" mat-button type=\"button\">MARK ALL AS READ</button>\n  </div>\n</div>\n\n<mat-menu #settingsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icClearAll\"></mat-icon>\n    <span>Mark all as read</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icNotificationsOff\"></mat-icon>\n    <span>Disable Notifications</span>\n  </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button #originRef (click)=\"showPopover()\" [class.active]=\"dropdownOpen\" class=\"button\" mat-icon-button type=\"button\">\n  <mat-icon [icIcon]=\"icNotificationsActive\"></mat-icon>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-search/toolbar-search.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-search/toolbar-search.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n  <button (click)=\"open()\" mat-icon-button>\n    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n  </button>\n  <mat-form-field [class.search-open]=\"isOpen\" appearance=\"outline\" class=\"search\" fxFlex=\"auto\">\n    <mat-label>Search&hellip;</mat-label>\n    <input #input (blur)=\"close()\" matInput>\n  </mat-form-field>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown\">\n  <div class=\"dropdown-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <div class=\"dropdown-heading-icon\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-icon [icIcon]=\"icPerson\"></mat-icon>\n      </div>\n      <div class=\"dropdown-heading\">David Smith</div>\n    </div>\n\n    <button [matMenuTriggerFor]=\"settingsMenu\"\n            mat-icon-button\n            matTooltip=\"Settings\"\n            matTooltipPosition=\"before\"\n            type=\"button\">\n      <mat-icon [icIcon]=\"icSettings\" class=\"notifications-header-icon\"></mat-icon>\n    </button>\n  </div>\n\n  <div class=\"dropdown-content\">\n    <a (click)=\"close()\"\n       *ngFor=\"let item of items; trackBy: trackById\"\n       [routerLink]=\"item.route\"\n       class=\"notification\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"start center\"\n       matRipple>\n      <mat-icon [icIcon]=\"item.icon\"\n                [ngClass]=\"item.colorClass\"\n                class=\"notification-icon\"\n                fxFlex=\"none\"></mat-icon>\n      <div fxFlex=\"auto\">\n        <div class=\"notification-label\">{{ item.label }}</div>\n        <div class=\"notification-description\">{{ item.description }}</div>\n      </div>\n      <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon>\n    </a>\n  </div>\n\n  <div class=\"dropdown-footer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <button [matMenuTriggerFor]=\"statusMenu\" class=\"dropdown-footer-select\" mat-button type=\"button\">\n      <ng-container *ngFor=\"let status of statuses; trackBy: trackById\">\n        <span *ngIf=\"status === activeStatus\">\n          <mat-icon [icIcon]=\"status.icon\" [ngClass]=\"status.colorClass\"></mat-icon>\n          <span>{{ status.label }}</span>\n          <mat-icon [icIcon]=\"icArrowDropDown\" class=\"dropdown-footer-select-caret\"></mat-icon>\n        </span>\n      </ng-container>\n    </button>\n    <a (click)=\"close()\" [routerLink]=\"['/login']\" color=\"primary\" mat-button>LOGOUT</a>\n  </div>\n</div>\n\n<mat-menu #statusMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button (click)=\"setStatus(status)\"\n          *ngFor=\"let status of statuses; trackBy: trackById\"\n          mat-menu-item>\n    <ic-icon [icon]=\"status.icon\" [ngClass]=\"status.colorClass\" inline=\"true\" size=\"24px\"></ic-icon>\n    <span>{{ status.label }}</span>\n  </button>\n</mat-menu>\n\n\n<mat-menu #settingsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icBusiness\"></mat-icon>\n    <span>Change Address</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icVerifiedUser\"></mat-icon>\n    <span>Change Username</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icLock\"></mat-icon>\n    <span>Change Password</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icNotificationsOff\"></mat-icon>\n    <span>Disable Notifications</span>\n  </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #originRef\n     (click)=\"showPopover(originRef)\"\n     [class.bg-hover]=\"dropdownOpen\"\n     class=\"flex items-center rounded cursor-pointer relative trans-ease-out select-none py-1 pr-1 pl-3 hover:bg-hover\"\n     matRipple>\n  <div class=\"body-1 font-medium leading-snug ltr:mr-3 rtl:ml-3\" fxHide.xs>David Smith</div>\n  <div [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\n       [style.color]=\"theme.colors.primary['500']\"\n       class=\"rounded-full h-9 w-9 flex items-center justify-center\">\n    <mat-icon [icIcon]=\"icPerson\"></mat-icon>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/layout.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/layout.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class.boxed]=\"isBoxed$ | async\"\n     [class.horizontal-layout]=\"!(isLayoutVertical$ | async)\"\n     [class.is-mobile]=\"!(isDesktop$ | async)\"\n     [class.vertical-layout]=\"isLayoutVertical$ | async\"\n     [class.has-fixed-footer]=\"(isFooterFixed$ | async) && isFooterVisible$ | async\"\n     [class.has-footer]=\"isFooterVisible$ | async\"\n     [class.scroll-disabled]=\"scrollDisabled$ | async\"\n     [class.toolbar-fixed]=\"isToolbarFixed$ | async\"\n     [class.sidenav-collapsed]=\"sidenavCollapsed$ | async\"\n     [class.content-container]=\"containerEnabled$ | async\"\n     [class.with-search]=\"searchOpen$ | async\"\n     class=\"page-container\">\n\n  <vex-progress-bar></vex-progress-bar>\n\n  <vex-search></vex-search>\n\n  <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #sidenav\n                 [disableClose]=\"isDesktop$ | async\"\n                 [fixedInViewport]=\"!(isDesktop$ | async)\"\n                 [mode]=\"!(isDesktop$ | async) || (isLayoutVertical$ | async) ? 'over' : 'side'\"\n                 [opened]=\"(isDesktop$ | async) && !(isLayoutVertical$ | async)\"\n                 class=\"sidenav\">\n      <vex-sidenav [collapsed]=\"sidenavCollapsed$ | async\"></vex-sidenav>\n    </mat-sidenav>\n\n    <mat-sidenav #quickpanel\n                 [fixedInViewport]=\"!(isDesktop$ | async)\"\n                 class=\"quickpanel\"\n                 mode=\"over\"\n                 position=\"end\">\n      <vex-quickpanel></vex-quickpanel>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"sidenav-content\">\n      <vex-toolbar [hasShadow]=\"toolbarShadowEnabled$ | async\"\n                   [mobileQuery]=\"!(isDesktop$ | async)\"\n                   class=\"toolbar\"></vex-toolbar>\n\n      <main class=\"content\">\n        <router-outlet></router-outlet>\n      </main>\n\n      <vex-footer *ngIf=\"isFooterVisible$ | async\" class=\"footer\"></vex-footer>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/navigation/navigation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/navigation/navigation.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navigation\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n  <vex-navigation-item *ngFor=\"let item of items\" [item]=\"item\"></vex-navigation-item>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/sidenav/sidenav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/sidenav/sidenav.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (mouseenter)=\"onMouseEnter()\"\n     (mouseleave)=\"onMouseLeave()\"\n     [class.collapsed]=\"collapsed\"\n     [class.open]=\"collapsed && collapsedOpen$ | async\"\n     class=\"sidenav flex flex-col\">\n  <div class=\"sidenav-toolbar flex-none flex items-center\">\n    <img class=\"w-6 select-none flex-none\" src=\"assets/img/logo.png\">\n    <h2 class=\"title ltr:pl-4 rtl:pr-4 select-none flex-auto\">EncofradoApp</h2>\n    <button (click)=\"toggleCollapse()\" class=\"w-8 h-8 -mr-2 leading-none flex-none\" mat-icon-button type=\"button\">\n      <mat-icon *ngIf=\"!collapsed\" [icIcon]=\"icRadioButtonChecked\" size=\"14px\"></mat-icon>\n      <mat-icon *ngIf=\"collapsed\" [icIcon]=\"icRadioButtonUnchecked\" size=\"14px\"></mat-icon>\n    </button>\n  </div>\n\n  <div class=\"sidenav-items flex-auto\" vexScrollbar>\n    <vex-sidenav-item *ngFor=\"let item of items; trackBy: trackByRoute\"\n                      [item]=\"item\"\n                      [level]=\"0\"></vex-sidenav-item>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/toolbar/toolbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/toolbar/toolbar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar w-full px-gutter\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n  <button (click)=\"openSidenav()\" [fxHide]=\"!mobileQuery\" mat-icon-button type=\"button\">\n    <mat-icon [icIcon]=\"icMenu\"></mat-icon>\n  </button>\n\n  <a *ngIf=\"isVerticalLayout$ | async\"\n     [routerLink]=\"['/']\"\n     class=\"ltr:mr-4 rtl:ml-4 block\"\n     fxLayout=\"row\"\n     fxLayoutAlign=\"start center\">\n    <img class=\"w-8 select-none\" src=\"assets/img/logo.png\">\n    <h1 [fxHide]=\"mobileQuery\" class=\"title ltr:pl-4 rtl:pr-4 m-0 select-none\">EncofradoApp</h1>\n  </a>\n\n  <button *ngIf=\"isHorizontalLayout$ | async\"\n          [fxHide]=\"mobileQuery\"\n          [matMenuTriggerFor]=\"addNewMenu\"\n          color=\"primary\"\n          mat-raised-button\n          type=\"button\">ADD NEW\n  </button>\n\n  <mat-menu #addNewMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"after\" yPosition=\"below\">\n    <button mat-menu-item>\n      <mat-icon [icIcon]=\"icPersonAdd\"></mat-icon>\n      <span>Add Contact</span>\n    </button>\n\n    <button mat-menu-item>\n      <mat-icon [icIcon]=\"icDoneAll\"></mat-icon>\n      <span>Add Task</span>\n    </button>\n\n    <button mat-menu-item>\n      <mat-icon [icIcon]=\"icAssignmentTurnedIn\"></mat-icon>\n      <span>Add Project</span>\n    </button>\n\n    <button [matMenuTriggerFor]=\"documentMenu\" mat-menu-item>\n      <mat-icon [icIcon]=\"icBallot\"></mat-icon>\n      <span>Add Document</span>\n    </button>\n  </mat-menu>\n\n  <mat-menu #documentMenu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon [icIcon]=\"icDescription\"></mat-icon>\n      <span>Add Quote</span>\n    </button>\n\n    <button mat-menu-item>\n      <mat-icon [icIcon]=\"icAssignment\"></mat-icon>\n      <span>Add Invoice</span>\n    </button>\n\n    <button mat-menu-item>\n      <mat-icon [icIcon]=\"icReceipt\"></mat-icon>\n      <span>Add Receipt</span>\n    </button>\n  </mat-menu>\n\n  <div #megaMenuOriginRef class=\"ltr:ml-2 rtl:mr-2\">\n    <button *ngIf=\"isHorizontalLayout$ | async\"\n            [fxHide]=\"mobileQuery\"\n            (click)=\"openMegaMenu(megaMenuOriginRef)\"\n            color=\"primary\"\n            mat-button\n            type=\"button\">MEGA MENU\n      <ic-icon [icon]=\"icArrowDropDown\" class=\"ltr:-mr-1 rtl:-ml-1\" inline=\"true\"></ic-icon>\n    </button>\n  </div>\n\n\n  <div *ngIf=\"(isVerticalLayout$ | async) && isNavbarInToolbar$ | async\"\n       [fxHide]=\"mobileQuery\"\n       class=\"px-gutter\"\n       fxFlex=\"none\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"start center\">\n    <vex-navigation-item *ngFor=\"let item of navigationItems\" [item]=\"item\"></vex-navigation-item>\n  </div>\n\n  <span fxFlex></span>\n\n  <div class=\"-mx-1 flex items-center\">\n    <div class=\"px-1\">\n      <button (click)=\"openSearch()\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n      </button>\n    </div>\n\n    <div class=\"px-1\">\n      <vex-toolbar-notifications></vex-toolbar-notifications>\n    </div>\n\n    <div class=\"px-1\">\n      <button (click)=\"openQuickpanel()\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icBookmarks\"></mat-icon>\n      </button>\n    </div>\n\n    <div class=\"px-1\">\n      <button [matMenuTriggerFor]=\"languageMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"emojioneUS\"></mat-icon>\n      </button>\n    </div>\n\n    <div class=\"px-1\">\n      <vex-toolbar-user></vex-toolbar-user>\n    </div>\n\n    <mat-menu #languageMenu=\"matMenu\" overlapTrigger=\"false\" xPosition=\"before\" yPosition=\"below\">\n      <button mat-menu-item>\n        <mat-icon [icIcon]=\"emojioneUS\"></mat-icon>\n        <span>English</span>\n      </button>\n\n      <button mat-menu-item>\n        <mat-icon [icIcon]=\"emojioneDE\"></mat-icon>\n        <span>German</span>\n      </button>\n    </mat-menu>\n  </div>\n</div>\n\n<vex-navigation *ngIf=\"(isVerticalLayout$ | async) && isNavbarBelowToolbar$ | async\"\n                [fxHide]=\"mobileQuery\"></vex-navigation>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/@vex/animations/dropdown.animation.ts":
/*!***************************************************!*\
  !*** ./src/@vex/animations/dropdown.animation.ts ***!
  \***************************************************/
/*! exports provided: dropdownAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownAnimation", function() { return dropdownAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const dropdownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dropdown', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: 0,
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '*',
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(.35, 0, .25, 1)'))
]);


/***/ }),

/***/ "./src/@vex/animations/popover.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/popover.animation.ts ***!
  \**************************************************/
/*! exports provided: popoverAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popoverAnimation", function() { return popoverAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const popoverAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transformPopover', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'scale(0.6)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'scale(1)',
            })),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
        }))
    ])
]);


/***/ }),

/***/ "./src/@vex/components/footer/footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/@vex/components/footer/footer.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  bottom: 0;\n  display: block;\n  width: 100%;\n  z-index: var(--footer-z-index);\n}\n\n.footer {\n  background: var(--footer-background);\n  color: var(--footer-color);\n  height: var(--footer-height);\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  position: relative;\n  z-index: var(--footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59IiwiOmhvc3Qge1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/components/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/@vex/components/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-shopping-basket */ "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
/* harmony import */ var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2__);



let FooterComponent = class FooterComponent {
    constructor() {
        this.icShoppingBasket = _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
    ngOnDestroy() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/@vex/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/@vex/components/footer/footer.module.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/components/footer/footer.module.ts ***!
  \*****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/@vex/components/footer/footer.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");








let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__["ContainerModule"]
        ],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "./src/@vex/components/mega-menu/mega-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/@vex/components/mega-menu/mega-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: MegaMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuComponent", function() { return MegaMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-layers */ "./node_modules/@iconify/icons-ic/twotone-layers.js");
/* harmony import */ var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment */ "./node_modules/@iconify/icons-ic/twotone-assignment.js");
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover/popover-ref */ "./src/@vex/components/popover/popover-ref.ts");





let MegaMenuComponent = class MegaMenuComponent {
    constructor(popoverRef) {
        this.popoverRef = popoverRef;
        this.features = [
            {
                icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2___default.a,
                label: 'Dashboard',
                route: '/'
            },
            {
                icon: _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3___default.a,
                label: 'AIO-Table',
                route: '/apps/aio-table'
            }
        ];
        this.pages = [
            {
                label: 'All-In-One Table',
                route: '/apps/aio-table'
            },
            {
                label: 'Authentication',
                route: '/login'
            },
            {
                label: 'Components',
                route: '/ui/components/overview'
            },
            {
                label: 'Form Elements',
                route: '/ui/forms/form-elements'
            },
            {
                label: 'Form Wizard',
                route: '/ui/forms/form-wizard'
            }
        ];
    }
    ngOnInit() {
    }
    close() {
        this.popoverRef.close();
    }
};
MegaMenuComponent.ctorParameters = () => [
    { type: _popover_popover_ref__WEBPACK_IMPORTED_MODULE_4__["PopoverRef"] }
];
MegaMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-mega-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mega-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/mega-menu/mega-menu.component.html")).default
    })
], MegaMenuComponent);



/***/ }),

/***/ "./src/@vex/components/mega-menu/mega-menu.module.ts":
/*!***********************************************************!*\
  !*** ./src/@vex/components/mega-menu/mega-menu.module.ts ***!
  \***********************************************************/
/*! exports provided: MegaMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuModule", function() { return MegaMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mega_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mega-menu.component */ "./src/@vex/components/mega-menu/mega-menu.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let MegaMenuModule = class MegaMenuModule {
};
MegaMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_3__["MegaMenuComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
        ],
        exports: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_3__["MegaMenuComponent"]],
        entryComponents: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_3__["MegaMenuComponent"]]
    })
], MegaMenuModule);



/***/ }),

/***/ "./src/@vex/components/navigation-item/navigation-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation-item {\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  display: block;\n  -webkit-margin-end: var(--padding-8);\n          margin-inline-end: var(--padding-8);\n  transition: var(--trans-ease-out);\n}\n\n.navigation-color {\n  color: var(--navigation-color);\n}\n\n.navigation-menu-item {\n  transition: var(--trans-ease-out);\n}\n\n.navigation-menu-item:hover {\n  color: #5c77ff;\n}\n\n.navigation-menu-item:hover .mat-icon {\n  color: #5c77ff;\n}\n\n.navigation-menu-item .mat-icon {\n  transition: var(--trans-ease-out);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7VUFBQSxtQ0FBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWl0ZW0vbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy04KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWNvbG9yKTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtOmhvdmVyIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW0gLm1hdC1pY29uIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufSIsIi5uYXZpZ2F0aW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cblxuLm5hdmlnYXRpb24tY29sb3Ige1xuICBjb2xvcjogdmFyKC0tbmF2aWdhdGlvbi1jb2xvcik7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM1Yzc3ZmY7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbTpob3ZlciAubWF0LWljb24ge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIC5tYXQtaWNvbiB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/components/navigation-item/navigation-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavigationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItemComponent", function() { return NavigationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/track-by */ "./src/@vex/utils/track-by.ts");






let NavigationItemComponent = class NavigationItemComponent {
    constructor(navigationService, router) {
        this.navigationService = navigationService;
        this.router = router;
        this.isActive$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => (item) => this.hasActiveChilds(item)));
        this.isLink = this.navigationService.isLink;
        this.isDropdown = this.navigationService.isDropdown;
        this.isSubheading = this.navigationService.isSubheading;
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_5__["trackByRoute"];
    }
    ngOnInit() {
    }
    hasActiveChilds(parent) {
        if (this.isLink(parent)) {
            return this.router.isActive(parent.route, false);
        }
        if (this.isDropdown(parent) || this.isSubheading(parent)) {
            return parent.children.some(child => {
                if (this.isDropdown(child)) {
                    return this.hasActiveChilds(child);
                }
                if (this.isLink(child) && !this.isFunction(child.route)) {
                    return this.router.isActive(child.route, false);
                }
            });
        }
        return false;
    }
    isFunction(prop) {
        return prop instanceof Function;
    }
};
NavigationItemComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationItemComponent.prototype, "item", void 0);
NavigationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-navigation-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/navigation-item/navigation-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation-item.component.scss */ "./src/@vex/components/navigation-item/navigation-item.component.scss")).default]
    })
], NavigationItemComponent);



/***/ }),

/***/ "./src/@vex/components/navigation-item/navigation-item.module.ts":
/*!***********************************************************************!*\
  !*** ./src/@vex/components/navigation-item/navigation-item.module.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItemModule", function() { return NavigationItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navigation_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-item.component */ "./src/@vex/components/navigation-item/navigation-item.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");









let NavigationItemModule = class NavigationItemModule {
};
NavigationItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_3__["NavigationItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]
        ],
        exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_3__["NavigationItemComponent"]]
    })
], NavigationItemModule);



/***/ }),

/***/ "./src/@vex/components/popover/popover-ref.ts":
/*!****************************************************!*\
  !*** ./src/@vex/components/popover/popover-ref.ts ***!
  \****************************************************/
/*! exports provided: PopoverRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverRef", function() { return PopoverRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class PopoverRef {
    constructor(overlay, content, data) {
        this.overlay = overlay;
        this.content = content;
        this.data = data;
        this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.afterClosed$ = this.afterClosed.asObservable();
        overlay.backdropClick().subscribe(() => {
            this._close('backdropClick', null);
        });
    }
    close(data) {
        this._close('close', data);
    }
    _close(type, data) {
        this.overlay.dispose();
        this.afterClosed.next({
            type,
            data
        });
        this.afterClosed.complete();
    }
}


/***/ }),

/***/ "./src/@vex/components/popover/popover.component.scss":
/*!************************************************************!*\
  !*** ./src/@vex/components/popover/popover.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/@vex/components/popover/popover.component.ts":
/*!**********************************************************!*\
  !*** ./src/@vex/components/popover/popover.component.ts ***!
  \**********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popover_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-ref */ "./src/@vex/components/popover/popover-ref.ts");
/* harmony import */ var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/popover.animation */ "./src/@vex/animations/popover.animation.ts");




let PopoverComponent = class PopoverComponent {
    constructor(popoverRef) {
        this.popoverRef = popoverRef;
        this.renderMethod = 'component';
    }
    ngOnInit() {
        this.content = this.popoverRef.content;
        if (typeof this.content === 'string') {
            this.renderMethod = 'text';
        }
        if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            this.renderMethod = 'template';
            this.context = {
                close: this.popoverRef.close.bind(this.popoverRef)
            };
        }
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"] }
];
PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/popover/popover.component.html")).default,
        animations: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_3__["popoverAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popover.component.scss */ "./src/@vex/components/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ }),

/***/ "./src/@vex/components/popover/popover.module.ts":
/*!*******************************************************!*\
  !*** ./src/@vex/components/popover/popover.module.ts ***!
  \*******************************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.component */ "./src/@vex/components/popover/popover.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");





let PopoverModule = class PopoverModule {
};
PopoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"]
        ],
        entryComponents: [_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]]
    })
], PopoverModule);



/***/ }),

/***/ "./src/@vex/components/popover/popover.service.ts":
/*!********************************************************!*\
  !*** ./src/@vex/components/popover/popover.service.ts ***!
  \********************************************************/
/*! exports provided: PopoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return PopoverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _popover_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-ref */ "./src/@vex/components/popover/popover-ref.ts");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover.component */ "./src/@vex/components/popover/popover.component.ts");






let PopoverService = class PopoverService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    open({ origin, content, data, width, height, position, offsetX, offsetY }) {
        const overlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height, position, offsetX, offsetY }));
        const popoverRef = new _popover_ref__WEBPACK_IMPORTED_MODULE_4__["PopoverRef"](overlayRef, content, data);
        const injector = this.createInjector(popoverRef, this.injector);
        overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"], null, injector));
        return popoverRef;
    }
    createInjector(popoverRef, injector) {
        const tokens = new WeakMap([[_popover_ref__WEBPACK_IMPORTED_MODULE_4__["PopoverRef"], popoverRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](injector, tokens);
    }
    getOverlayConfig({ origin, width, height, position, offsetX, offsetY }) {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayConfig"]({
            hasBackdrop: true,
            width,
            height,
            backdropClass: 'popover-backdrop',
            positionStrategy: this.getOverlayPosition({ origin, position, offsetX, offsetY }),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    getOverlayPosition({ origin, position, offsetX, offsetY }) {
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(origin)
            .withPositions(position || this.getPositions())
            .withFlexibleDimensions(true)
            .withDefaultOffsetY(offsetY || 0)
            .withDefaultOffsetX(offsetX || 0)
            .withTransformOriginOn('.popover')
            .withPush(true);
        return positionStrategy;
    }
    getPositions() {
        return [
            {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
            },
            {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
            },
        ];
    }
};
PopoverService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
PopoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PopoverService);



/***/ }),

/***/ "./src/@vex/components/progress-bar/progress-bar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-bar {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n}\n\n.progress-bar.visible {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLnByb2dyZXNzLWJhci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iLCIucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4ucHJvZ3Jlc3MtYmFyLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/components/progress-bar/progress-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");



let ProgressBarComponent = class ProgressBarComponent {
    constructor(loader) {
        this.loader = loader;
    }
    ngOnInit() {
    }
};
ProgressBarComponent.ctorParameters = () => [
    { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"] }
];
ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-progress-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/progress-bar/progress-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-bar.component.scss */ "./src/@vex/components/progress-bar/progress-bar.component.scss")).default]
    })
], ProgressBarComponent);



/***/ }),

/***/ "./src/@vex/components/progress-bar/progress-bar.module.ts":
/*!*****************************************************************!*\
  !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return ProgressBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar.component */ "./src/@vex/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.js");







let ProgressBarModule = class ProgressBarModule {
};
ProgressBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__["LoadingBarRouterModule"]
        ],
        exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]]
    })
], ProgressBarModule);



/***/ }),

/***/ "./src/@vex/components/quickpanel/quickpanel.component.scss":
/*!******************************************************************!*\
  !*** ./src/@vex/components/quickpanel/quickpanel.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\nh3 {\n  padding: 16px 16px 0;\n}\n\np {\n  margin: 0;\n}\n\n.list-item {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font: var(--font-subheading-2);\n  justify-content: center;\n  min-height: 72px;\n  padding: 0 var(--padding-16);\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.list-item:hover {\n  background: var(--background-hover);\n}\n\n.progress-bar {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9AdmV4L2NvbXBvbmVudHMvcXVpY2twYW5lbC9xdWlja3BhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvcXVpY2twYW5lbC9xdWlja3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogODB2dztcbn1cblxuaDMge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udDogdmFyKC0tZm9udC1zdWJoZWFkaW5nLTIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNzJweDtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbmgzIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQ6IHZhcigtLWZvbnQtc3ViaGVhZGluZy0yKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcycHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy0xNik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/components/quickpanel/quickpanel.component.ts":
/*!****************************************************************!*\
  !*** ./src/@vex/components/quickpanel/quickpanel.component.ts ***!
  \****************************************************************/
/*! exports provided: QuickpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickpanelComponent", function() { return QuickpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);



let QuickpanelComponent = class QuickpanelComponent {
    constructor() {
        this.date = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().toFormat('DD');
        this.dayName = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().toFormat('EEEE');
    }
    ngOnInit() {
    }
};
QuickpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-quickpanel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quickpanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/quickpanel/quickpanel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quickpanel.component.scss */ "./src/@vex/components/quickpanel/quickpanel.component.scss")).default]
    })
], QuickpanelComponent);



/***/ }),

/***/ "./src/@vex/components/quickpanel/quickpanel.module.ts":
/*!*************************************************************!*\
  !*** ./src/@vex/components/quickpanel/quickpanel.module.ts ***!
  \*************************************************************/
/*! exports provided: QuickpanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickpanelModule", function() { return QuickpanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _quickpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickpanel.component */ "./src/@vex/components/quickpanel/quickpanel.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");








let QuickpanelModule = class QuickpanelModule {
};
QuickpanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_3__["QuickpanelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]
        ],
        exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_3__["QuickpanelComponent"]]
    })
], QuickpanelModule);



/***/ }),

/***/ "./src/@vex/components/scrollbar/scrollbar.directive.ts":
/*!**************************************************************!*\
  !*** ./src/@vex/components/scrollbar/scrollbar.directive.ts ***!
  \**************************************************************/
/*! exports provided: ScrollbarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarDirective", function() { return ScrollbarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");



let ScrollbarDirective = class ScrollbarDirective {
    constructor(_element, zone) {
        this._element = _element;
        this.zone = zone;
    }
    ngAfterContentInit() {
        this.zone.runOutsideAngular(() => {
            this.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_2__["default"](this._element.nativeElement, this.options);
        });
    }
};
ScrollbarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vexScrollbar')
], ScrollbarDirective.prototype, "options", void 0);
ScrollbarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[vexScrollbar],vex-scrollbar',
        host: {
            class: 'vex-scrollbar'
        }
    })
], ScrollbarDirective);



/***/ }),

/***/ "./src/@vex/components/scrollbar/scrollbar.module.ts":
/*!***********************************************************!*\
  !*** ./src/@vex/components/scrollbar/scrollbar.module.ts ***!
  \***********************************************************/
/*! exports provided: ScrollbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarModule", function() { return ScrollbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollbar.directive */ "./src/@vex/components/scrollbar/scrollbar.directive.ts");




let ScrollbarModule = class ScrollbarModule {
};
ScrollbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollbarDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollbarDirective"]]
    })
], ScrollbarModule);



/***/ }),

/***/ "./src/@vex/components/search/search.component.scss":
/*!**********************************************************!*\
  !*** ./src/@vex/components/search/search.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n\n.search.show {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  border-top-width: 0;\n  font-weight: 700;\n  background-color: transparent;\n}\n\n.search-input:focus {\n  outline: none;\n}\n\n.search-hint {\n  width: 75%;\n  font-size: 1rem;\n  text-align: right;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--text-hint);\n  font-weight: 700;\n}\n\n.search-overlay {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxrREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLnNlYXJjaC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgZm9udC1zaXplOiA3dnc7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1oaW50IHtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0tdGV4dC1oaW50KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlYXJjaC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDUwdmg7XG59IiwiLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gIHotaW5kZXg6IDEwNTA7XG59XG5cbi5zZWFyY2guc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtaGludCB7XG4gIHdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZWFyY2gtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiA1MHZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/components/search/search.component.ts":
/*!********************************************************!*\
  !*** ./src/@vex/components/search/search.component.ts ***!
  \********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/layout.service */ "./src/@vex/services/layout.service.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SearchComponent = class SearchComponent {
    constructor(layoutService) {
        this.layoutService = layoutService;
        this.show$ = this.layoutService.searchOpen$;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
        this.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(show => show), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(() => this.input.nativeElement.focus());
    }
    close() {
        this.layoutService.closeSearch();
        this.searchCtrl.setValue(undefined);
    }
    search() {
        this.close();
    }
    ngOnDestroy() { }
};
SearchComponent.ctorParameters = () => [
    { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true })
], SearchComponent.prototype, "input", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/@vex/components/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/@vex/components/search/search.module.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/components/search/search.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/@vex/components/search/search.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let SearchModule = class SearchModule {
};
SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        exports: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]]
    })
], SearchModule);



/***/ }),

/***/ "./src/@vex/components/sidebar/sidebar.component.scss":
/*!************************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  background: var(--background-card);\n  bottom: 0;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: var(--trans-ease-in-duration);\n  transition-property: transform, visibility;\n  transition-timing-function: var(--trans-ease-in-timing-function);\n  visibility: hidden;\n  width: var(--sidenav-width);\n  z-index: 1000;\n}\n\n@media (min-width: 600px) {\n  .sidebar {\n    max-width: unset;\n  }\n}\n\n.sidebar.position-left {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.sidebar.position-right {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.sidebar.open {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n\n.backdrop.visible {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n\n.backdrop.invisible {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtBQ0FGOztBREdBO0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0FDQUYiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogODB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1kdXJhdGlvbik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4uc2lkZWJhci5wb3NpdGlvbi1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnNpZGViYXIucG9zaXRpb24tcmlnaHQge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZHJvcC52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3AuaW52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59IiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDgwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tZHVyYXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLXRpbWluZy1mdW5jdGlvbik7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbi5zaWRlYmFyLnBvc2l0aW9uLWxlZnQge1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4uc2lkZWJhci5wb3NpdGlvbi1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5zaWRlYmFyLm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIHZpc2liaWxpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA4MDAgIWltcG9ydGFudDtcbn1cblxuLmJhY2tkcm9wLnZpc2libGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5iYWNrZHJvcC5pbnZpc2libGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/components/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SidebarComponent = class SidebarComponent {
    constructor(document) {
        this.document = document;
        this.position = 'left';
    }
    get opened() {
        return this._opened;
    }
    set opened(opened) {
        this._opened = opened;
        opened ? this.enableScrollblock() : this.disableScrollblock();
    }
    get positionLeft() {
        return this.position === 'left';
    }
    get positionRight() {
        return this.position === 'right';
    }
    enableScrollblock() {
        if (!this.document.body.classList.contains('vex-scrollblock')) {
            this.document.body.classList.add('vex-scrollblock');
        }
    }
    disableScrollblock() {
        if (this.document.body.classList.contains('vex-scrollblock')) {
            this.document.body.classList.remove('vex-scrollblock');
        }
    }
    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
    ngOnDestroy() { }
};
SidebarComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarComponent.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarComponent.prototype, "invisibleBackdrop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarComponent.prototype, "opened", null);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidebar/sidebar.component.html")).default,
        host: {
            class: 'vex-sidebar'
        },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/@vex/components/sidebar/sidebar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], SidebarComponent);



/***/ }),

/***/ "./src/@vex/components/sidebar/sidebar.module.ts":
/*!*******************************************************!*\
  !*** ./src/@vex/components/sidebar/sidebar.module.ts ***!
  \*******************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/@vex/components/sidebar/sidebar.component.ts");




let SidebarModule = class SidebarModule {
};
SidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "./src/@vex/components/sidenav-item/sidenav-item.component.scss":
/*!**********************************************************************!*\
  !*** ./src/@vex/components/sidenav-item/sidenav-item.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  padding: var(--padding-8) var(--sidenav-item-padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n\n.item:hover, .item.active {\n  background: var(--sidenav-item-background-active);\n}\n\n.item:hover .item-icon, .item.active .item-icon {\n  color: var(--sidenav-item-icon-color-active);\n}\n\n.item:hover .item-label, .item.active .item-label {\n  color: var(--sidenav-item-color-active);\n}\n\n.item:hover .item-dropdown-icon, .item.active .item-dropdown-icon {\n  color: var(--sidenav-item-color-active);\n}\n\n.item.open .item-dropdown-icon {\n  transform: rotate(90deg) !important;\n}\n\n:host(.item-level-1) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n}\n\n:host(.item-level-1) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-2) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n}\n\n:host(.item-level-2) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-3) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n}\n\n:host(.item-level-3) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-4) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n}\n\n:host(.item-level-4) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-5) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n}\n\n:host(.item-level-5) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-6) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n}\n\n:host(.item-level-6) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-icon, .item-label, .item-dropdown-icon {\n  transition: inherit;\n}\n\n.item-icon {\n  color: var(--sidenav-item-icon-color);\n  font-size: var(--sidenav-item-icon-size);\n  height: var(--sidenav-item-icon-size);\n  -webkit-margin-end: var(--sidenav-item-icon-gap);\n          margin-inline-end: var(--sidenav-item-icon-gap);\n  width: var(--sidenav-item-icon-size);\n}\n\n.item-label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-badge {\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  padding: 0 7px;\n  text-align: center;\n}\n\n.item-dropdown-icon {\n  color: var(--sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  transform: rotate(0deg) !important;\n  width: 18px;\n}\n\n.item-dropdown {\n  overflow: hidden;\n}\n\n.subheading {\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  font: var(--font-caption);\n  margin-top: var(--padding);\n  padding: var(--padding-12) var(--padding);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaURBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0RBQUE7VUFBQSwrQ0FBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZW5hdi1pdGVtL3NpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLWhlaWdodDogNDhweDtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy04KSB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW06aG92ZXIsIC5pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG5cbi5pdGVtOmhvdmVyIC5pdGVtLWljb24sIC5pdGVtLmFjdGl2ZSAuaXRlbS1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5pdGVtOmhvdmVyIC5pdGVtLWxhYmVsLCAuaXRlbS5hY3RpdmUgLml0ZW0tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5pdGVtOmhvdmVyIC5pdGVtLWRyb3Bkb3duLWljb24sIC5pdGVtLmFjdGl2ZSAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbS5vcGVuIC5pdGVtLWRyb3Bkb3duLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDApKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTIpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAxKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTIpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0zKSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMikpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0zKSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDMpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTUpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiA0KSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTUpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC02KSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNSkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC02KSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLml0ZW0taWNvbiwgLml0ZW0tbGFiZWwsIC5pdGVtLWRyb3Bkb3duLWljb24ge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4uaXRlbS1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbn1cblxuLml0ZW0tbGFiZWwge1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLml0ZW0tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pdGVtLWRyb3Bkb3duLWljb24ge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uaXRlbS1kcm9wZG93biB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvcik7XG4gIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCIuaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtOmhvdmVyLCAuaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1sYWJlbCwgLml0ZW0uYWN0aXZlIC5pdGVtLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1kcm9wZG93bi1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0tZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cblxuLml0ZW0ub3BlbiAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAwKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMSkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDIpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAzKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNCkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDUpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5pdGVtLWljb24sIC5pdGVtLWxhYmVsLCAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi5pdGVtLWxhYmVsIHtcbiAgZmxleDogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pdGVtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLml0ZW0tZHJvcGRvd24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZyk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/@vex/components/sidenav-item/sidenav-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/@vex/components/sidenav-item/sidenav-item.component.ts ***!
  \********************************************************************/
/*! exports provided: SidenavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavItemComponent", function() { return SidenavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/dropdown.animation */ "./src/@vex/animations/dropdown.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-keyboard-arrow-right */ "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7__);








let SidenavItemComponent = class SidenavItemComponent {
    constructor(router, cd, navigationService) {
        this.router = router;
        this.cd = cd;
        this.navigationService = navigationService;
        this.icKeyboardArrowRight = _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.isLink = this.navigationService.isLink;
        this.isDropdown = this.navigationService.isDropdown;
        this.isSubheading = this.navigationService.isSubheading;
    }
    get levelClass() {
        return `item-level-${this.level}`;
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(() => this.isDropdown(this.item)), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(() => this.onRouteChange());
        this.navigationService.openChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(() => this.isDropdown(this.item)), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(item => this.onOpenChange(item));
    }
    ngOnChanges(changes) {
        if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
            this.onRouteChange();
        }
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
        this.navigationService.triggerOpenChange(this.item);
        this.cd.markForCheck();
    }
    onOpenChange(item) {
        if (this.isChildrenOf(this.item, item)) {
            return;
        }
        if (this.hasActiveChilds(this.item)) {
            return;
        }
        if (this.item !== item) {
            this.isOpen = false;
            this.cd.markForCheck();
        }
    }
    onRouteChange() {
        if (this.hasActiveChilds(this.item)) {
            this.isActive = true;
            this.isOpen = true;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
        }
        else {
            this.isActive = false;
            this.isOpen = false;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
        }
    }
    isChildrenOf(parent, item) {
        if (parent.children.indexOf(item) !== -1) {
            return true;
        }
        return parent.children
            .filter(child => this.isDropdown(child))
            .some(child => this.isChildrenOf(child, item));
    }
    hasActiveChilds(parent) {
        return parent.children.some(child => {
            if (this.isDropdown(child)) {
                return this.hasActiveChilds(child);
            }
            if (this.isLink(child) && !this.isFunction(child.route)) {
                return this.router.isActive(child.route, false);
            }
        });
    }
    isFunction(prop) {
        return prop instanceof Function;
    }
    ngOnDestroy() { }
};
SidenavItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidenavItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidenavItemComponent.prototype, "level", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SidenavItemComponent.prototype, "levelClass", null);
SidenavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-sidenav-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidenav-item/sidenav-item.component.html")).default,
        animations: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__["dropdownAnimation"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav-item.component.scss */ "./src/@vex/components/sidenav-item/sidenav-item.component.scss")).default]
    })
], SidenavItemComponent);



/***/ }),

/***/ "./src/@vex/components/sidenav-item/sidenav-item.module.ts":
/*!*****************************************************************!*\
  !*** ./src/@vex/components/sidenav-item/sidenav-item.module.ts ***!
  \*****************************************************************/
/*! exports provided: SidenavItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavItemModule", function() { return SidenavItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sidenav_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav-item.component */ "./src/@vex/components/sidenav-item/sidenav-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let SidenavItemModule = class SidenavItemModule {
};
SidenavItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_3__["SidenavItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        ],
        exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_3__["SidenavItemComponent"]]
    })
], SidenavItemModule);



/***/ }),

/***/ "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header {\n  background-color: #5c77ff;\n  box-shadow: var(--elevation-z6);\n  color: #FFF;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.dropdown-heading {\n  font: var(--font-title);\n}\n\n.dropdown-content {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding);\n}\n\n.notification {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification:hover {\n  background: var(--background-hover);\n}\n\n.notification:hover .notification-label {\n  color: #5c77ff;\n}\n\n.notification.read {\n  opacity: 0.5;\n}\n\n.notification-icon {\n  -webkit-margin-end: var(--padding);\n          margin-inline-end: var(--padding);\n}\n\n.notification-label {\n  transition: inherit;\n}\n\n.notification-description {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification + .notification {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy90b29sYmFyLW5vdGlmaWNhdGlvbnMvdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duL3Rvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsK0NBQUE7RUFDQSxnREFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLHdDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtVQUFBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLCtDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy90b29sYmFyLW5vdGlmaWNhdGlvbnMvdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duL3Rvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16NCk7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yzc3ZmY7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Nik7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nIHtcbiAgZm9udDogdmFyKC0tZm9udC10aXRsZSk7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMjkxcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTE2KSB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciAubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgY29sb3I6ICM1Yzc3ZmY7XG59XG5cbi5ub3RpZmljYXRpb24ucmVhZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLm5vdGlmaWNhdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59IiwiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo2KTtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAyOTFweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ToolbarNotificationsDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsDropdownComponent", function() { return ToolbarNotificationsDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ "./node_modules/@iconify/icons-ic/twotone-settings.js");
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications-off */ "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
/* harmony import */ var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear-all */ "./node_modules/@iconify/icons-ic/twotone-clear-all.js");
/* harmony import */ var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-shopping-basket */ "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
/* harmony import */ var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-account-circle */ "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-insert-chart */ "./node_modules/@iconify/icons-ic/twotone-insert-chart.js");
/* harmony import */ var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-circle */ "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ "./node_modules/@iconify/icons-ic/twotone-description.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-feedback */ "./node_modules/@iconify/icons-ic/twotone-feedback.js");
/* harmony import */ var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-verified-user */ "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
/* harmony import */ var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-file-copy */ "./node_modules/@iconify/icons-ic/twotone-file-copy.js");
/* harmony import */ var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15__);
















let ToolbarNotificationsDropdownComponent = class ToolbarNotificationsDropdownComponent {
    constructor() {
        this.notifications = [
            {
                id: '1',
                label: 'New Order Received',
                icon: _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8___default.a,
                colorClass: 'text-primary-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 1 })
            },
            {
                id: '2',
                label: 'New customer has registered',
                icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9___default.a,
                colorClass: 'text-orange-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 2 })
            },
            {
                id: '3',
                label: 'Campaign statistics are available',
                icon: _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10___default.a,
                colorClass: 'text-purple-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 5 })
            },
            {
                id: '4',
                label: 'Project has been approved',
                icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11___default.a,
                colorClass: 'text-green-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 9 })
            },
            {
                id: '5',
                label: 'Client reports are available',
                icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12___default.a,
                colorClass: 'text-primary-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 30 })
            },
            {
                id: '6',
                label: 'New review received',
                icon: _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13___default.a,
                colorClass: 'text-orange-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 40 }),
                read: true
            },
            {
                id: '7',
                label: '22 verified registrations',
                icon: _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14___default.a,
                colorClass: 'text-green-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 60 })
            },
            {
                id: '8',
                label: 'New files available',
                icon: _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15___default.a,
                colorClass: 'text-amber-500',
                datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({ hour: 90 })
            }
        ];
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icClearAll = _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackById"];
    }
    ngOnInit() {
    }
};
ToolbarNotificationsDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-toolbar-notifications-dropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar-notifications-dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar-notifications-dropdown.component.scss */ "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.scss")).default]
    })
], ToolbarNotificationsDropdownComponent);



/***/ }),

/***/ "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button.active {\n  background: var(--background-hover);\n}\n\n.button .mat-icon {\n  color: var(--toolbar-icon-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWljb24tY29sb3IpO1xufSIsIi5idXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5idXR0b24gLm1hdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ToolbarNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsComponent", function() { return ToolbarNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover/popover.service */ "./src/@vex/components/popover/popover.service.ts");
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications-active */ "./node_modules/@iconify/icons-ic/twotone-notifications-active.js");
/* harmony import */ var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4__);





let ToolbarNotificationsComponent = class ToolbarNotificationsComponent {
    constructor(popover, cd) {
        this.popover = popover;
        this.cd = cd;
        this.icNotificationsActive = _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4___default.a;
    }
    ngOnInit() { }
    showPopover() {
        this.dropdownOpen = true;
        this.cd.markForCheck();
        const popoverRef = this.popover.open({
            content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarNotificationsDropdownComponent"],
            origin: this.originRef,
            offsetY: 12,
            position: [
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
        popoverRef.afterClosed$.subscribe(() => {
            this.dropdownOpen = false;
            this.cd.markForCheck();
        });
    }
};
ToolbarNotificationsComponent.ctorParameters = () => [
    { type: _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__["PopoverService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('originRef', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], ToolbarNotificationsComponent.prototype, "originRef", void 0);
ToolbarNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-toolbar-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar-notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar-notifications.component.scss */ "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.scss")).default]
    })
], ToolbarNotificationsComponent);



/***/ }),

/***/ "./src/@vex/components/toolbar-notifications/toolbar-notifications.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ToolbarNotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsModule", function() { return ToolbarNotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-notifications.component */ "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/popover.module */ "./src/@vex/components/popover/popover.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/relative-date-time/relative-date-time.module */ "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");















let ToolbarNotificationsModule = class ToolbarNotificationsModule {
};
ToolbarNotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarNotificationsComponent"], _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarNotificationsDropdownComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _popover_popover_module__WEBPACK_IMPORTED_MODULE_6__["PopoverModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__["RelativeDateTimeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"]
        ],
        exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarNotificationsComponent"]],
        entryComponents: [_toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarNotificationsDropdownComponent"]]
    })
], ToolbarNotificationsModule);



/***/ }),

/***/ "./src/@vex/components/toolbar-search/toolbar-search.component.scss":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/toolbar-search/toolbar-search.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-icon {\n  color: #5c77ff;\n}\n\n.search {\n  margin-top: 22px;\n  opacity: 0;\n  overflow: hidden;\n  transition: var(--trans-ease-in-out);\n  visibility: hidden;\n  width: 0;\n}\n\n.search.search-open {\n  margin-left: var(--padding-8);\n  margin-right: var(--padding-8);\n  opacity: 1;\n  visibility: visible;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy90b29sYmFyLXNlYXJjaC90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy90b29sYmFyLXNlYXJjaC90b29sYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1vdXQpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xufVxuXG4uc2VhcmNoLnNlYXJjaC1vcGVuIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2lkdGg6IDI1MHB4O1xufSIsIi5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi1vdXQpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xufVxuXG4uc2VhcmNoLnNlYXJjaC1vcGVuIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZy04KTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/components/toolbar-search/toolbar-search.component.ts":
/*!************************************************************************!*\
  !*** ./src/@vex/components/toolbar-search/toolbar-search.component.ts ***!
  \************************************************************************/
/*! exports provided: ToolbarSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchComponent", function() { return ToolbarSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);



let ToolbarSearchComponent = class ToolbarSearchComponent {
    constructor(cd) {
        this.cd = cd;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
    open() {
        this.isOpen = true;
        this.cd.markForCheck();
        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 100);
    }
    close() {
        this.isOpen = false;
        this.cd.markForCheck();
    }
};
ToolbarSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
], ToolbarSearchComponent.prototype, "input", void 0);
ToolbarSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-toolbar-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-search/toolbar-search.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar-search.component.scss */ "./src/@vex/components/toolbar-search/toolbar-search.component.scss")).default]
    })
], ToolbarSearchComponent);



/***/ }),

/***/ "./src/@vex/components/toolbar-search/toolbar-search.module.ts":
/*!*********************************************************************!*\
  !*** ./src/@vex/components/toolbar-search/toolbar-search.module.ts ***!
  \*********************************************************************/
/*! exports provided: ToolbarSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarSearchModule", function() { return ToolbarSearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toolbar_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-search.component */ "./src/@vex/components/toolbar-search/toolbar-search.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");









let ToolbarSearchModule = class ToolbarSearchModule {
};
ToolbarSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarSearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"]
        ],
        exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarSearchComponent"]]
    })
], ToolbarSearchModule);



/***/ }),

/***/ "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header {\n  background-color: #5c77ff;\n  color: #FFF;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  box-shadow: var(--elevation-z6);\n}\n\n.dropdown-heading-icon {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: var(--padding-12);\n  padding: var(--padding-8);\n}\n\n.dropdown-heading-icon .mat-icon {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading {\n  font: var(--font-title);\n}\n\n.dropdown-content {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding-12);\n}\n\n.dropdown-footer-select {\n  padding-left: var(--padding-12);\n}\n\n.dropdown-footer-select .mat-icon:not(.dropdown-footer-select-caret) {\n  margin-right: var(--padding-8);\n  vertical-align: -7px !important;\n}\n\n.dropdown-footer-select-caret {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n}\n\n.notification {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification:hover {\n  background: var(--background-hover);\n}\n\n.notification:hover .notification-label {\n  color: #5c77ff;\n}\n\n.notification.read {\n  opacity: 0.5;\n}\n\n.notification-icon {\n  margin-right: var(--padding);\n}\n\n.notification-label {\n  transition: inherit;\n}\n\n.notification-description {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification + .notification {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy90b29sYmFyLXVzZXIvdG9vbGJhci11c2VyLWRyb3Bkb3duL3Rvb2xiYXItdXNlci1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsK0NBQUE7RUFDQSxnREFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejYpO1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA5OTk5OTlweDtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy04KTtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmctaWNvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nIHtcbiAgZm9udDogdmFyKC0tZm9udC10aXRsZSk7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IC5tYXQtaWNvbjpub3QoLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QtY2FyZXQpIHtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTdweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgdmVydGljYWwtYWxpZ246IC00cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLm5vdGlmaWNhdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59IiwiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejYpO1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA5OTk5OTlweDtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy04KTtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmctaWNvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nIHtcbiAgZm9udDogdmFyKC0tZm9udC10aXRsZSk7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpIHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IC5tYXQtaWNvbjpub3QoLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QtY2FyZXQpIHtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTdweCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgdmVydGljYWwtYWxpZ246IC00cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLm5vdGlmaWNhdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWhpbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59Il19 */");

/***/ }),

/***/ "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ToolbarUserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarUserDropdownComponent", function() { return ToolbarUserDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ "./node_modules/@iconify/icons-ic/twotone-person.js");
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ "./node_modules/@iconify/icons-ic/twotone-settings.js");
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-account-circle */ "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-list-alt */ "./node_modules/@iconify/icons-ic/twotone-list-alt.js");
/* harmony import */ var _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-table-chart */ "./node_modules/@iconify/icons-ic/twotone-table-chart.js");
/* harmony import */ var _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-circle */ "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-access-time */ "./node_modules/@iconify/icons-ic/twotone-access-time.js");
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-do-not-disturb */ "./node_modules/@iconify/icons-ic/twotone-do-not-disturb.js");
/* harmony import */ var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-offline-bolt */ "./node_modules/@iconify/icons-ic/twotone-offline-bolt.js");
/* harmony import */ var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-business */ "./node_modules/@iconify/icons-ic/twotone-business.js");
/* harmony import */ var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-verified-user */ "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
/* harmony import */ var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-lock */ "./node_modules/@iconify/icons-ic/twotone-lock.js");
/* harmony import */ var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-notifications-off */ "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
/* harmony import */ var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../popover/popover-ref */ "./src/@vex/components/popover/popover-ref.ts");



















let ToolbarUserDropdownComponent = class ToolbarUserDropdownComponent {
    constructor(cd, popoverRef) {
        this.cd = cd;
        this.popoverRef = popoverRef;
        this.items = [
            {
                id: '1',
                icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_5___default.a,
                label: 'My Profile',
                description: 'Personal Information',
                colorClass: 'text-teal-500',
                route: '/pages/profile'
            },
            {
                id: '2',
                icon: _iconify_icons_ic_twotone_list_alt__WEBPACK_IMPORTED_MODULE_6___default.a,
                label: 'Mis Contratos',
                description: 'Tasks & Active Projects',
                colorClass: 'text-amber-500',
                route: '/apps/contratos'
            },
            {
                id: '3',
                icon: _iconify_icons_ic_twotone_table_chart__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Billing Information',
                description: 'Pricing & Current Plan',
                colorClass: 'text-purple-500',
                route: '/pages/pricing'
            }
        ];
        this.statuses = [
            {
                id: 'online',
                label: 'Online',
                icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default.a,
                colorClass: 'text-green-500'
            },
            {
                id: 'away',
                label: 'Away',
                icon: _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9___default.a,
                colorClass: 'text-orange-500'
            },
            {
                id: 'dnd',
                label: 'Do not disturb',
                icon: _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10___default.a,
                colorClass: 'text-red-500'
            },
            {
                id: 'offline',
                label: 'Offline',
                icon: _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11___default.a,
                colorClass: 'text-gray-500'
            }
        ];
        this.activeStatus = this.statuses[0];
        this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackById"];
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icVerifiedUser = _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icLock = _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_17___default.a;
    }
    ngOnInit() {
    }
    setStatus(status) {
        this.activeStatus = status;
        this.cd.markForCheck();
    }
    close() {
        this.popoverRef.close();
    }
};
ToolbarUserDropdownComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _popover_popover_ref__WEBPACK_IMPORTED_MODULE_18__["PopoverRef"] }
];
ToolbarUserDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-toolbar-user-dropdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar-user-dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar-user-dropdown.component.scss */ "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.scss")).default]
    })
], ToolbarUserDropdownComponent);



/***/ }),

/***/ "./src/@vex/components/toolbar-user/toolbar-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/@vex/components/toolbar-user/toolbar-user.component.ts ***!
  \********************************************************************/
/*! exports provided: ToolbarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarUserComponent", function() { return ToolbarUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover/popover.service */ "./src/@vex/components/popover/popover.service.ts");
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ "./node_modules/@iconify/icons-ic/twotone-person.js");
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");






let ToolbarUserComponent = class ToolbarUserComponent {
    constructor(popover, cd) {
        this.popover = popover;
        this.cd = cd;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.theme = _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
    ngOnInit() {
    }
    showPopover(originRef) {
        this.dropdownOpen = true;
        this.cd.markForCheck();
        const popoverRef = this.popover.open({
            content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserDropdownComponent"],
            origin: originRef,
            offsetY: 12,
            position: [
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
        popoverRef.afterClosed$.subscribe(() => {
            this.dropdownOpen = false;
            this.cd.markForCheck();
        });
    }
};
ToolbarUserComponent.ctorParameters = () => [
    { type: _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__["PopoverService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ToolbarUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-toolbar-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], ToolbarUserComponent);



/***/ }),

/***/ "./src/@vex/components/toolbar-user/toolbar-user.module.ts":
/*!*****************************************************************!*\
  !*** ./src/@vex/components/toolbar-user/toolbar-user.module.ts ***!
  \*****************************************************************/
/*! exports provided: ToolbarUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarUserModule", function() { return ToolbarUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toolbar_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-user.component */ "./src/@vex/components/toolbar-user/toolbar-user.component.ts");
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/relative-date-time/relative-date-time.module */ "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/color/color-fade.module */ "./src/@vex/pipes/color/color-fade.module.ts");















let ToolbarUserModule = class ToolbarUserModule {
};
ToolbarUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserComponent"], _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarUserDropdownComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__["RelativeDateTimeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_14__["ColorFadeModule"]
        ],
        exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserComponent"]],
        entryComponents: [_toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarUserDropdownComponent"]]
    })
], ToolbarUserModule);



/***/ }),

/***/ "./src/@vex/directives/container/container.directive.ts":
/*!**************************************************************!*\
  !*** ./src/@vex/directives/container/container.directive.ts ***!
  \**************************************************************/
/*! exports provided: ContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerDirective", function() { return ContainerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/@vex/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");





let ContainerDirective = class ContainerDirective {
    constructor(configService, cd) {
        this.configService = configService;
        this.cd = cd;
        this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(config => config.boxed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(boxed => {
            this.enabled = boxed;
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() { }
};
ContainerDirective.ctorParameters = () => [
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.container')
], ContainerDirective.prototype, "enabled", void 0);
ContainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[vexContainer]'
    })
], ContainerDirective);



/***/ }),

/***/ "./src/@vex/directives/container/container.module.ts":
/*!***********************************************************!*\
  !*** ./src/@vex/directives/container/container.module.ts ***!
  \***********************************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.directive */ "./src/@vex/directives/container/container.directive.ts");




let ContainerModule = class ContainerModule {
};
ContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"]]
    })
], ContainerModule);



/***/ }),

/***/ "./src/@vex/layout/layout.component.scss":
/*!***********************************************!*\
  !*** ./src/@vex/layout/layout.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-container {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav {\n  background: var(--sidenav-background);\n}\n\n.sidenav ::ng-deep .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer .content {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled {\n  overflow: hidden;\n}\n\n.scroll-disabled .content {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n\n.scroll-disabled.has-fixed-footer .content, .scroll-disabled.has-footer .content {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile .toolbar {\n  position: fixed;\n  width: 100%;\n}\n\n.is-mobile .content {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search {\n  overflow: hidden;\n  position: fixed;\n}\n\n.with-search .sidenav-container {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  border-radius: 0.25rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  overflow: visible;\n}\n\n.toolbar-fixed .toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n\n.toolbar-fixed .content {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer .footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n\n.has-fixed-footer .content {\n  margin-bottom: var(--footer-height);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.has-fixed-footer.scroll-disabled .content {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5RUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0dBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxRUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDRGQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSwrRUFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtFQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBQ0EsZ0dBQUE7QUNDRjs7QURFQTtFQUNFLDRGQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XG59XG5cbi5zaWRlbmF2IDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufVxuXG4uc2Nyb2xsLWRpc2FibGVkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZCAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtZGlzYWJsZWQuaGFzLWZpeGVkLWZvb3RlciAuY29udGVudCwgLnNjcm9sbC1kaXNhYmxlZC5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuXG4uaXMtbW9iaWxlIC50b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlzLW1vYmlsZSAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1iYXNlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ud2l0aC1zZWFyY2gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi53aXRoLXNlYXJjaCAuc2lkZW5hdi1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDUwdmgsIDApIHJvdGF0ZTNkKDEsIDAsIDAsIDMwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTB2dyA1MHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnRvb2xiYXItZml4ZWQgLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiB2YXIoLS10b29sYmFyLXdpZHRoKTtcbiAgei1pbmRleDogNTA7XG59XG5cbi50b29sYmFyLWZpeGVkIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS10b29sYmFyLWhlaWdodCkgKyB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xufVxuXG4uaGFzLWZpeGVkLWZvb3RlciAuZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tZm9vdGVyLWVsZXZhdGlvbik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufVxuXG4uaGFzLWZpeGVkLWZvb3Rlci5zY3JvbGwtZGlzYWJsZWQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn0iLCIucGFnZS1jb250YWluZXIge1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWJhY2tncm91bmQpO1xufVxuXG4uc2lkZW5hdiA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLWZvb3RlciAuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtZGlzYWJsZWQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWRpc2FibGVkLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQsIC5zY3JvbGwtZGlzYWJsZWQuaGFzLWZvb3RlciAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbn1cblxuLmlzLW1vYmlsZSAudG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcy1tb2JpbGUgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbn1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLndpdGgtc2VhcmNoIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ud2l0aC1zZWFyY2ggLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGUzZCgwLCA1MHZoLCAwKSByb3RhdGUzZCgxLCAwLCAwLCAzMGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwdncgNTB2aDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi50b29sYmFyLWZpeGVkIC50b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4udG9vbGJhci1maXhlZCAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdG9vbGJhci1oZWlnaHQpICsgdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIgLmZvb3RlciB7XG4gIGJveC1zaGFkb3c6IHZhcigtLWZvb3Rlci1lbGV2YXRpb24pO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oYXMtZml4ZWQtZm9vdGVyIC5jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIuc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG59Il19 */");

/***/ }),

/***/ "./src/@vex/layout/layout.component.ts":
/*!*********************************************!*\
  !*** ./src/@vex/layout/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/@vex/services/layout.service.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/check-router-childs-data */ "./src/@vex/utils/check-router-childs-data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/config.service */ "./src/@vex/services/config.service.ts");
/* harmony import */ var _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");












let LayoutComponent = class LayoutComponent {
    constructor(cd, breakpointObserver, layoutService, configService, router, document) {
        this.cd = cd;
        this.breakpointObserver = breakpointObserver;
        this.layoutService = layoutService;
        this.configService = configService;
        this.router = router;
        this.document = document;
        this.isLayoutVertical$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.layout === 'vertical'));
        this.isBoxed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.boxed));
        this.isToolbarFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.toolbar.fixed));
        this.isFooterFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.footer.fixed));
        this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.footer.visible));
        this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        this.isDesktop$ = this.breakpointObserver.observe(`(min-width: ${_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__["default"].screens.lg})`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(state => state.matches));
        this.toolbarShadowEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(() => Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__["checkRouterChildsData"])(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled)));
        this.scrollDisabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(() => Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__["checkRouterChildsData"])(this.router.routerState.root.snapshot, data => data.scrollDisabled)));
        this.containerEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(() => Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__["checkRouterChildsData"])(this.router.routerState.root.snapshot, data => data.containerEnabled)));
        this.searchOpen$ = this.layoutService.searchOpen$;
    }
    ngOnInit() {
        this.isDesktop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(matches => !matches), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(() => this.layoutService.expandSidenav());
        this.layoutService.sidenavOpen$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.isDesktop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(([event, matches]) => !matches), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(() => this.sidenav.close());
    }
    ngAfterViewInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["Scroll"]), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(e => {
            if (e.position) {
                // backward navigation
                this.sidenavContainer.scrollable.scrollTo({
                    start: e.position[0],
                    top: e.position[1]
                });
            }
            else if (e.anchor) {
                // anchor navigation
                const scroll = (anchor) => this.sidenavContainer.scrollable.scrollTo({
                    behavior: 'smooth',
                    top: anchor.offsetTop,
                    left: anchor.offsetLeft
                });
                let anchorElem = this.document.getElementById(e.anchor);
                if (anchorElem) {
                    scroll(anchorElem);
                }
                else {
                    setTimeout(() => {
                        anchorElem = this.document.getElementById(e.anchor);
                        scroll(anchorElem);
                    }, 100);
                }
            }
            else {
                // forward navigation
                this.sidenavContainer.scrollable.scrollTo({
                    top: 0,
                    start: 0
                });
            }
        });
    }
    ngOnDestroy() { }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true })
], LayoutComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], { static: true })
], LayoutComponent.prototype, "sidenavContainer", void 0);
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/@vex/layout/layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]))
], LayoutComponent);



/***/ }),

/***/ "./src/@vex/layout/layout.module.ts":
/*!******************************************!*\
  !*** ./src/@vex/layout/layout.module.ts ***!
  \******************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/@vex/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenav/sidenav.module */ "./src/@vex/layout/sidenav/sidenav.module.ts");
/* harmony import */ var _toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toolbar/toolbar.module */ "./src/@vex/layout/toolbar/toolbar.module.ts");
/* harmony import */ var _components_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/quickpanel/quickpanel.module */ "./src/@vex/components/quickpanel/quickpanel.module.ts");
/* harmony import */ var _components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sidebar/sidebar.module */ "./src/@vex/components/sidebar/sidebar.module.ts");
/* harmony import */ var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/progress-bar/progress-bar.module */ "./src/@vex/components/progress-bar/progress-bar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/@vex/components/footer/footer.module.ts");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/search/search.module */ "./src/@vex/components/search/search.module.ts");
















let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_9__["SidenavModule"],
            _toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarModule"],
            _components_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_11__["QuickpanelModule"],
            _components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
            _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_13__["ProgressBarModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_14__["FooterModule"],
            _components_search_search_module__WEBPACK_IMPORTED_MODULE_15__["SearchModule"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/@vex/layout/navigation/navigation.component.scss":
/*!**************************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: var(--navigation-background);\n  display: block;\n  height: var(--navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation {\n  height: var(--navigation-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXZpZ2F0aW9uLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/@vex/layout/navigation/navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/@vex/services/navigation.service.ts");



let NavigationComponent = class NavigationComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
        this.items = this.navigationService.items;
    }
    ngOnInit() {
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/@vex/layout/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/@vex/layout/navigation/navigation.module.ts":
/*!*********************************************************!*\
  !*** ./src/@vex/layout/navigation/navigation.module.ts ***!
  \*********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.component */ "./src/@vex/layout/navigation/navigation.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.module */ "./src/@vex/components/navigation-item/navigation-item.module.ts");
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");












let NavigationModule = class NavigationModule {
};
NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_10__["NavigationItemModule"],
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__["ContainerModule"]
        ],
        exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]]
    })
], NavigationModule);



/***/ }),

/***/ "./src/@vex/layout/sidenav/sidenav.component.scss":
/*!********************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav {\n  color: var(--sidenav-color);\n  height: 100%;\n  transition: var(--trans-ease-out);\n  width: var(--sidenav-width);\n}\n\n.sidenav.collapsed {\n  width: var(--sidenav-collapsed-width);\n}\n\n.sidenav.collapsed:not(.open) .sidenav-toolbar .title {\n  opacity: 0;\n  -webkit-padding-start: var(--sidenav-item-padding);\n          padding-inline-start: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .item-icon {\n  -webkit-margin-end: var(--sidenav-item-padding);\n          margin-inline-end: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .subheading, .sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .item-badge, .sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .item-label {\n  opacity: 0;\n}\n\n.sidenav.collapsed:not(.open) ::ng-deep .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n\n.sidenav.collapsed ::ng-deep .subheading, .sidenav.collapsed ::ng-deep .item-badge, .sidenav.collapsed ::ng-deep .item-label {\n  transition: all 200ms var(--trans-ease-out-timing-function);\n}\n\n.sidenav.collapsed.open {\n  width: var(--sidenav-width);\n}\n\n.sidenav-toolbar {\n  align-items: center;\n  background: var(--sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--toolbar-height);\n  padding: 0 var(--padding);\n  white-space: nowrap;\n  width: 100%;\n}\n\n.sidenav-toolbar .title {\n  transition: padding var(--trans-ease-out-duration) var(--trans-ease-out-timing-function), opacity var(--trans-ease-out-duration) var(--trans-ease-out-timing-function);\n}\n\n.sidenav-items {\n  padding-top: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9sYXlvdXQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esa0RBQUE7VUFBQSxpREFBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7VUFBQSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLDJEQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0tBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtY29sb3IpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQge1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGgpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSAuc2lkZW5hdi10b29sYmFyIC50aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuaXRlbS1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5zdWJoZWFkaW5nLCAuc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLml0ZW0tYmFkZ2UsIC5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuaXRlbS1sYWJlbCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC5zdWJoZWFkaW5nLCAuc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC5pdGVtLWJhZGdlLCAuc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC5pdGVtLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZC5vcGVuIHtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlbmF2LXRvb2xiYXIgLnRpdGxlIHtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyB2YXIoLS10cmFucy1lYXNlLW91dC1kdXJhdGlvbikgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKSwgb3BhY2l0eSB2YXIoLS10cmFucy1lYXNlLW91dC1kdXJhdGlvbikgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcbn1cblxuLnNpZGVuYXYtaXRlbXMge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZyk7XG59IiwiLnNpZGVuYXYge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1jb2xvcik7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZCB7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWNvbGxhcHNlZC13aWR0aCk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIC5zaWRlbmF2LXRvb2xiYXIgLnRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5pdGVtLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLnN1YmhlYWRpbmcsIC5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuaXRlbS1iYWRnZSwgLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5pdGVtLWxhYmVsIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLnN1YmhlYWRpbmcsIC5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLml0ZW0tYmFkZ2UsIC5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLml0ZW0tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkLm9wZW4ge1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG59XG5cbi5zaWRlbmF2LXRvb2xiYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmcpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGVuYXYtdG9vbGJhciAudGl0bGUge1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIHZhcigtLXRyYW5zLWVhc2Utb3V0LWR1cmF0aW9uKSB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pLCBvcGFjaXR5IHZhcigtLXRyYW5zLWVhc2Utb3V0LWR1cmF0aW9uKSB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pO1xufVxuXG4uc2lkZW5hdi1pdGVtcyB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/layout/sidenav/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-radio-button-checked */ "./node_modules/@iconify/icons-ic/twotone-radio-button-checked.js");
/* harmony import */ var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-radio-button-unchecked */ "./node_modules/@iconify/icons-ic/twotone-radio-button-unchecked.js");
/* harmony import */ var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/layout.service */ "./src/@vex/services/layout.service.ts");







let SidenavComponent = class SidenavComponent {
    constructor(navigationService, layoutService) {
        this.navigationService = navigationService;
        this.layoutService = layoutService;
        this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
        this.items = this.navigationService.items;
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackByRoute"];
        this.icRadioButtonChecked = _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icRadioButtonUnchecked = _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5___default.a;
    }
    ngOnInit() {
    }
    onMouseEnter() {
        this.layoutService.collapseOpenSidenav();
    }
    onMouseLeave() {
        this.layoutService.collapseCloseSidenav();
    }
    toggleCollapse() {
        this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
    }
};
SidenavComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] },
    { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidenavComponent.prototype, "collapsed", void 0);
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-sidenav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/sidenav/sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav.component.scss */ "./src/@vex/layout/sidenav/sidenav.component.scss")).default]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/@vex/layout/sidenav/sidenav.module.ts":
/*!***************************************************!*\
  !*** ./src/@vex/layout/sidenav/sidenav.module.ts ***!
  \***************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav.component */ "./src/@vex/layout/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _components_sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sidenav-item/sidenav-item.module */ "./src/@vex/components/sidenav-item/sidenav-item.module.ts");
/* harmony import */ var _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/scrollbar/scrollbar.module */ "./src/@vex/components/scrollbar/scrollbar.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");











let SidenavModule = class SidenavModule {
};
SidenavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _components_sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_5__["SidenavItemModule"],
            _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_6__["ScrollbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"]
        ],
        exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]]
    })
], SidenavModule);



/***/ }),

/***/ "./src/@vex/layout/toolbar/toolbar.component.scss":
/*!********************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: var(--toolbar-background);\n  box-sizing: border-box;\n  color: var(--toolbar-color);\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--toolbar-z-index);\n}\n\n.toolbar {\n  height: var(--toolbar-height);\n}\n\n.mat-icon {\n  color: var(--toolbar-icon-color);\n}\n\na {\n  color: var(--toolbar-color);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9sYXlvdXQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IHZhcigtLXRvb2xiYXItei1pbmRleCk7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWljb24tY29sb3IpO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogdmFyKC0tdG9vbGJhci16LWluZGV4KTtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLm1hdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1jb2xvcik7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/@vex/layout/toolbar/toolbar.component.ts":
/*!******************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.component.ts ***!
  \******************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ "./src/@vex/services/layout.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-bookmarks */ "./node_modules/@iconify/icons-ic/twotone-bookmarks.js");
/* harmony import */ var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-emojione/flag-for-flag-united-states */ "./node_modules/@iconify/icons-emojione/flag-for-flag-united-states.js");
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-emojione/flag-for-flag-germany */ "./node_modules/@iconify/icons-emojione/flag-for-flag-germany.js");
/* harmony import */ var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ "./node_modules/@iconify/icons-ic/twotone-menu.js");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/config.service */ "./src/@vex/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ "./node_modules/@iconify/icons-ic/twotone-person-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment-turned-in */ "./node_modules/@iconify/icons-ic/twotone-assignment-turned-in.js");
/* harmony import */ var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-ballot */ "./node_modules/@iconify/icons-ic/twotone-ballot.js");
/* harmony import */ var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-description */ "./node_modules/@iconify/icons-ic/twotone-description.js");
/* harmony import */ var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-assignment */ "./node_modules/@iconify/icons-ic/twotone-assignment.js");
/* harmony import */ var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-receipt */ "./node_modules/@iconify/icons-ic/twotone-receipt.js");
/* harmony import */ var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done-all */ "./node_modules/@iconify/icons-ic/twotone-done-all.js");
/* harmony import */ var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
/* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/popover/popover.service */ "./src/@vex/components/popover/popover.service.ts");
/* harmony import */ var _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/mega-menu/mega-menu.component */ "./src/@vex/components/mega-menu/mega-menu.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__);





















let ToolbarComponent = class ToolbarComponent {
    constructor(layoutService, configService, navigationService, popoverService) {
        this.layoutService = layoutService;
        this.configService = configService;
        this.navigationService = navigationService;
        this.popoverService = popoverService;
        this.navigationItems = this.navigationService.items;
        this.isHorizontalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(config => config.layout === 'horizontal'));
        this.isVerticalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(config => config.layout === 'vertical'));
        this.isNavbarInToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(config => config.navbar.position === 'in-toolbar'));
        this.isNavbarBelowToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(config => config.navbar.position === 'below-toolbar'));
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icBookmarks = _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.emojioneUS = _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.emojioneDE = _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icAssignmentTurnedIn = _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icBallot = _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icReceipt = _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_17___default.a;
    }
    ngOnInit() {
    }
    openQuickpanel() {
        this.layoutService.openQuickpanel();
    }
    openSidenav() {
        this.layoutService.openSidenav();
    }
    openMegaMenu(origin) {
        this.popoverService.open({
            content: _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_19__["MegaMenuComponent"],
            origin,
            position: [
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },
            ]
        });
    }
    openSearch() {
        this.layoutService.openSearch();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_16__["NavigationService"] },
    { type: _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__["PopoverService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToolbarComponent.prototype, "mobileQuery", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.shadow-b')
], ToolbarComponent.prototype, "hasShadow", void 0);
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.scss */ "./src/@vex/layout/toolbar/toolbar.component.scss")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/@vex/layout/toolbar/toolbar.module.ts":
/*!***************************************************!*\
  !*** ./src/@vex/layout/toolbar/toolbar.module.ts ***!
  \***************************************************/
/*! exports provided: ToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return ToolbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.component */ "./src/@vex/layout/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _components_toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/toolbar-notifications/toolbar-notifications.module */ "./src/@vex/components/toolbar-notifications/toolbar-notifications.module.ts");
/* harmony import */ var _components_toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/toolbar-user/toolbar-user.module */ "./src/@vex/components/toolbar-user/toolbar-user.module.ts");
/* harmony import */ var _components_toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/toolbar-search/toolbar-search.module */ "./src/@vex/components/toolbar-search/toolbar-search.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/@vex/layout/navigation/navigation.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/navigation-item/navigation-item.module */ "./src/@vex/components/navigation-item/navigation-item.module.ts");
/* harmony import */ var _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/mega-menu/mega-menu.module */ "./src/@vex/components/mega-menu/mega-menu.module.ts");
/* harmony import */ var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");


















let ToolbarModule = class ToolbarModule {
};
ToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
            _components_toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarNotificationsModule"],
            _components_toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarUserModule"],
            _components_toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_11__["ToolbarSearchModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__["NavigationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_15__["NavigationItemModule"],
            _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_16__["MegaMenuModule"],
            _directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"]
        ],
        exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]]
    })
], ToolbarModule);



/***/ }),

/***/ "./src/@vex/pipes/color/color-fade.module.ts":
/*!***************************************************!*\
  !*** ./src/@vex/pipes/color/color-fade.module.ts ***!
  \***************************************************/
/*! exports provided: ColorFadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFadeModule", function() { return ColorFadeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _color_fade_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-fade.pipe */ "./src/@vex/pipes/color/color-fade.pipe.ts");




let ColorFadeModule = class ColorFadeModule {
};
ColorFadeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_color_fade_pipe__WEBPACK_IMPORTED_MODULE_3__["ColorFadePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_color_fade_pipe__WEBPACK_IMPORTED_MODULE_3__["ColorFadePipe"]]
    })
], ColorFadeModule);



/***/ }),

/***/ "./src/@vex/pipes/color/color-fade.pipe.ts":
/*!*************************************************!*\
  !*** ./src/@vex/pipes/color/color-fade.pipe.ts ***!
  \*************************************************/
/*! exports provided: ColorFadePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFadePipe", function() { return ColorFadePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);



let ColorFadePipe = class ColorFadePipe {
    transform(value, ratio) {
        return color__WEBPACK_IMPORTED_MODULE_2___default()(value).fade(ratio);
    }
};
ColorFadePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'colorFade'
    })
], ColorFadePipe);



/***/ }),

/***/ "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts":
/*!************************************************************************!*\
  !*** ./src/@vex/pipes/relative-date-time/relative-date-time.module.ts ***!
  \************************************************************************/
/*! exports provided: RelativeDateTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeDateTimeModule", function() { return RelativeDateTimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relative-date-time.pipe */ "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");




let RelativeDateTimeModule = class RelativeDateTimeModule {
};
RelativeDateTimeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__["RelativeDateTimePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__["RelativeDateTimePipe"]]
    })
], RelativeDateTimeModule);



/***/ }),

/***/ "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts":
/*!**********************************************************************!*\
  !*** ./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: RelativeDateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeDateTimePipe", function() { return RelativeDateTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RelativeDateTimePipe = class RelativeDateTimePipe {
    transform(value, ...args) {
        return value ? value.toRelative() : null;
    }
};
RelativeDateTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'relativeDateTime'
    })
], RelativeDateTimePipe);



/***/ }),

/***/ "./src/@vex/services/config.service.ts":
/*!*********************************************!*\
  !*** ./src/@vex/services/config.service.ts ***!
  \*********************************************/
/*! exports provided: ConfigName, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigName", function() { return ConfigName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/merge-deep */ "./src/@vex/utils/merge-deep.ts");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.service */ "./src/@vex/services/layout.service.ts");






var ConfigName;
(function (ConfigName) {
    ConfigName["zeus"] = "vex-layout-zeus";
})(ConfigName || (ConfigName = {}));
let ConfigService = class ConfigService {
    constructor(document, layoutService) {
        this.document = document;
        this.layoutService = layoutService;
        this.defaultConfig = ConfigName.zeus;
        this.configs = [
            {
                id: ConfigName.zeus,
                name: 'Zeus',
                imgSrc: '//vex.visurel.com/landing/assets/img/layouts/zeus.png',
                layout: 'horizontal',
                boxed: false,
                sidenav: {
                    state: 'collapsed'
                },
                toolbar: {
                    fixed: false
                },
                navbar: {
                    position: 'below-toolbar'
                },
                footer: {
                    visible: false,
                    fixed: false
                }
            }
        ];
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.configs.find(c => c.id === this.defaultConfig));
        this.config$ = this._configSubject.asObservable();
        this.config$.subscribe(config => this._updateConfig(config));
    }
    setConfig(config) {
        const settings = this.configs.find(c => c.id === config);
        if (settings) {
            this._configSubject.next(settings);
        }
    }
    updateConfig(config) {
        this._configSubject.next(Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(Object.assign({}, this._configSubject.getValue()), config));
    }
    _updateConfig(config) {
        const body = this.document.body;
        this.configs.forEach(c => {
            if (body.classList.contains(c.id)) {
                body.classList.remove(c.id);
            }
        });
        body.classList.add(config.id);
        config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
        // Workaround so charts and other externals know they have to resize on Layout switch
        if (window) {
            window.dispatchEvent(new Event('resize'));
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 200);
        }
    }
};
ConfigService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }
];
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], ConfigService);



/***/ }),

/***/ "./src/@vex/services/layout.service.ts":
/*!*********************************************!*\
  !*** ./src/@vex/services/layout.service.ts ***!
  \*********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LayoutService = class LayoutService {
    constructor(router) {
        this.router = router;
        this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
        this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
        this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
        this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
        this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
        this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.searchOpen$ = this._searchOpen.asObservable();
    }
    openQuickpanel() {
        this._quickpanelOpenSubject.next(true);
    }
    closeQuickpanel() {
        this._quickpanelOpenSubject.next(false);
    }
    openSidenav() {
        this._sidenavOpenSubject.next(true);
    }
    closeSidenav() {
        this._sidenavOpenSubject.next(false);
    }
    collapseSidenav() {
        this._sidenavCollapsedSubject.next(true);
    }
    expandSidenav() {
        this._sidenavCollapsedSubject.next(false);
    }
    collapseOpenSidenav() {
        this._sidenavCollapsedOpenSubject.next(true);
    }
    collapseCloseSidenav() {
        this._sidenavCollapsedOpenSubject.next(false);
    }
    openConfigpanel() {
        this._configpanelOpenSubject.next(true);
    }
    closeConfigpanel() {
        this._configpanelOpenSubject.next(false);
    }
    openSearch() {
        this._searchOpen.next(true);
    }
    closeSearch() {
        this._searchOpen.next(false);
    }
    enableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'true'
            }
        }).then(() => {
            if (window) {
                window.location.reload();
            }
        });
    }
    disableRTL() {
        this.router.navigate([], {
            queryParams: {
                rtl: 'false'
            }
        }).then(() => {
            if (window) {
                window.location.reload();
            }
        });
    }
};
LayoutService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LayoutService);



/***/ }),

/***/ "./src/@vex/services/navigation.service.ts":
/*!*************************************************!*\
  !*** ./src/@vex/services/navigation.service.ts ***!
  \*************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let NavigationService = class NavigationService {
    constructor() {
        this.items = [];
        this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openChange$ = this._openChangeSubject.asObservable();
    }
    triggerOpenChange(item) {
        this._openChangeSubject.next(item);
    }
    isLink(item) {
        return item.type === 'link';
    }
    isDropdown(item) {
        return item.type === 'dropdown';
    }
    isSubheading(item) {
        return item.type === 'subheading';
    }
};
NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigationService);



/***/ }),

/***/ "./src/@vex/services/splash-screen.service.ts":
/*!****************************************************!*\
  !*** ./src/@vex/services/splash-screen.service.ts ***!
  \****************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let SplashScreenService = class SplashScreenService {
    constructor(router, document, animationBuilder) {
        this.router = router;
        this.document = document;
        this.animationBuilder = animationBuilder;
        this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');
        if (this.splashScreenElem) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(() => this.hide());
        }
    }
    hide() {
        const player = this.animationBuilder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                opacity: 1
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                opacity: 0
            }))
        ]).create(this.splashScreenElem);
        player.onDone(() => this.splashScreenElem.remove());
        player.play();
    }
};
SplashScreenService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__["AnimationBuilder"] }
];
SplashScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], SplashScreenService);



/***/ }),

/***/ "./src/@vex/services/style.service.ts":
/*!********************************************!*\
  !*** ./src/@vex/services/style.service.ts ***!
  \********************************************/
/*! exports provided: Style, StyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleService", function() { return StyleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");





var Style;
(function (Style) {
    Style["light"] = "vex-style-light";
    Style["default"] = "vex-style-default";
    Style["dark"] = "vex-style-dark";
})(Style || (Style = {}));
let StyleService = class StyleService {
    constructor(document) {
        this.document = document;
        this.defaultStyle = Style.light;
        this._styleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.defaultStyle);
        this.style$ = this._styleSubject.asObservable();
        this.style$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(style => this._updateStyle(style));
    }
    setStyle(style) {
        this._styleSubject.next(style);
    }
    ngOnDestroy() { }
    _updateStyle(style) {
        const body = this.document.body;
        Object.values(Style).filter(s => s !== style).forEach(value => {
            if (body.classList.contains(value)) {
                body.classList.remove(value);
            }
        });
        body.classList.add(style);
    }
};
StyleService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
StyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], StyleService);



/***/ }),

/***/ "./src/@vex/utils/check-router-childs-data.ts":
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/*! exports provided: checkRouterChildsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRouterChildsData", function() { return checkRouterChildsData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function checkRouterChildsData(route, compareWith) {
    if (compareWith(route.data)) {
        return true;
    }
    if (!route.firstChild) {
        return false;
    }
    return checkRouterChildsData(route.firstChild, compareWith);
}


/***/ }),

/***/ "./src/@vex/utils/merge-deep.ts":
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/*! exports provided: mergeDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
    const isObject = (obj) => obj && typeof obj === 'object';
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue);
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}


/***/ }),

/***/ "./src/@vex/utils/tailwindcss.ts":
/*!***************************************!*\
  !*** ./src/@vex/utils/tailwindcss.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/resolveConfig */ "./node_modules/tailwindcss/resolveConfig.js");
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tailwind.config */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config__WEBPACK_IMPORTED_MODULE_2__);



const theme = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default()(_tailwind_config__WEBPACK_IMPORTED_MODULE_2___default.a).theme;
/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ }),

/***/ "./src/@vex/utils/track-by.ts":
/*!************************************!*\
  !*** ./src/@vex/utils/track-by.ts ***!
  \************************************/
/*! exports provided: trackByRoute, trackById, trackByKey, trackByValue, trackByLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByRoute", function() { return trackByRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackById", function() { return trackById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByKey", function() { return trackByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByValue", function() { return trackByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByLabel", function() { return trackByLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function trackByRoute(index, item) {
    return item.route;
}
function trackById(index, item) {
    return item.id;
}
function trackByKey(index, item) {
    return item.key;
}
function trackByValue(index, value) {
    return value;
}
function trackByLabel(index, value) {
    return value.label;
}


/***/ }),

/***/ "./src/@vex/vex.module.ts":
/*!********************************!*\
  !*** ./src/@vex/vex.module.ts ***!
  \********************************/
/*! exports provided: VexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VexModule", function() { return VexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ "./src/@vex/layout/layout.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");





let VexModule = class VexModule {
};
VexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
        ],
        providers: [
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
                useValue: {
                    appearance: 'fill'
                }
            }
        ]
    })
], VexModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@vex/layout/layout.component */ "./src/@vex/layout/layout.component.ts");




const childrenRoutes = [
    {
        path: "",
        redirectTo: "dashboards/analytics",
        pathMatch: "full",
    },
    {
        path: "dashboards/analytics",
        loadChildren: () => Promise.all(/*! import() | pages-dashboards-dashboard-analytics-dashboard-analytics-module */[__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~601e5afe"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~b589e09d"), __webpack_require__.e("default~components-overview-components-overview-module~components-radio-components-radio-module~page~2454e66f"), __webpack_require__.e("default~components-overview-components-overview-module~components-slide-toggle-components-slide-togg~a0b60a3e"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~fa6c178b"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~9c85ba8d"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~fab076b6"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~dae42f44"), __webpack_require__.e("common"), __webpack_require__.e("pages-dashboards-dashboard-analytics-dashboard-analytics-module")]).then(__webpack_require__.bind(null, /*! ./pages/dashboards/dashboard-analytics/dashboard-analytics.module */ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts")).then((m) => m.DashboardAnalyticsModule),
    },
    {
        path: "apps",
        children: [
            {
                path: "contacts",
                loadChildren: () => __webpack_require__.e(/*! import() | pages-apps-contacts-contacts-module */ "pages-apps-contacts-contacts-module").then(__webpack_require__.bind(null, /*! ./pages/apps/contacts/contacts.module */ "./src/app/pages/apps/contacts/contacts.module.ts")).then((m) => m.ContactsModule),
            },
            {
                path: "calendar",
                loadChildren: () => Promise.all(/*! import() | pages-apps-calendar-calendar-module */[__webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ./pages/apps/calendar/calendar.module */ "./src/app/pages/apps/calendar/calendar.module.ts")).then((m) => m.CalendarModule),
                data: {
                    toolbarShadowEnabled: true,
                },
            },
            {
                path: "clientes",
                loadChildren: () => Promise.all(/*! import() | pages-apps-clientes-aio-table-module */[__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~601e5afe"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~b589e09d"), __webpack_require__.e("default~components-overview-components-overview-module~components-radio-components-radio-module~page~2454e66f"), __webpack_require__.e("default~components-overview-components-overview-module~components-slide-toggle-components-slide-togg~a0b60a3e"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~fa6c178b"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~9c85ba8d"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~fab076b6"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~dae42f44"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-clientes-aio-table-module")]).then(__webpack_require__.bind(null, /*! ./pages/apps/clientes/aio-table.module */ "./src/app/pages/apps/clientes/aio-table.module.ts")).then((m) => m.AioTableModule),
            },
            {
                path: "contratos",
                loadChildren: () => Promise.all(/*! import() | pages-apps-contratos-contratos-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~601e5afe"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~b589e09d"), __webpack_require__.e("default~components-overview-components-overview-module~components-radio-components-radio-module~page~2454e66f"), __webpack_require__.e("default~components-overview-components-overview-module~components-slide-toggle-components-slide-togg~a0b60a3e"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~fa6c178b"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~9c85ba8d"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~fab076b6"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~dae42f44"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-contratos-contratos-module")]).then(__webpack_require__.bind(null, /*! ./pages/apps/contratos/contratos.module */ "./src/app/pages/apps/contratos/contratos.module.ts")).then((m) => m.ContratosModule),
            }
        ],
    },
    {
        path: "pages",
        children: [
            {
                path: "pricing",
                loadChildren: () => Promise.all(/*! import() | pages-pages-pricing-pricing-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-pricing-pricing-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/pricing/pricing.module */ "./src/app/pages/pages/pricing/pricing.module.ts")).then((m) => m.PricingModule),
            },
            {
                path: "profile",
                loadChildren: () => Promise.all(/*! import() | pages-pages-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/profile/profile.module */ "./src/app/pages/pages/profile/profile.module.ts")).then((m) => m.ProfileModule),
            },
            {
                path: "invoice",
                loadChildren: () => Promise.all(/*! import() | pages-pages-invoice-invoice-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-invoice-invoice-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/invoice/invoice.module */ "./src/app/pages/pages/invoice/invoice.module.ts")).then((m) => m.InvoiceModule),
            },
            {
                path: "error-404",
                loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-errors-error-404-error-404-module */ "pages-pages-errors-error-404-error-404-module").then(__webpack_require__.bind(null, /*! ./pages/pages/errors/error-404/error-404.module */ "./src/app/pages/pages/errors/error-404/error-404.module.ts")).then((m) => m.Error404Module),
            },
            {
                path: "error-500",
                loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-errors-error-500-error-500-module */ "pages-pages-errors-error-500-error-500-module").then(__webpack_require__.bind(null, /*! ./pages/pages/errors/error-500/error-500.module */ "./src/app/pages/pages/errors/error-500/error-500.module.ts")).then((m) => m.Error500Module),
            },
        ],
    },
    {
        path: "ui",
        children: [
            {
                path: "components",
                loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-components-components-module */ "pages-ui-components-components-module").then(__webpack_require__.bind(null, /*! ./pages/ui/components/components.module */ "./src/app/pages/ui/components/components.module.ts")).then((m) => m.ComponentsModule),
            },
            {
                path: "forms/form-elements",
                loadChildren: () => Promise.all(/*! import() | pages-ui-forms-form-elements-form-elements-module */[__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~601e5afe"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~b589e09d"), __webpack_require__.e("default~components-overview-components-overview-module~components-radio-components-radio-module~page~2454e66f"), __webpack_require__.e("default~components-overview-components-overview-module~components-slide-toggle-components-slide-togg~a0b60a3e"), __webpack_require__.e("common"), __webpack_require__.e("pages-ui-forms-form-elements-form-elements-module")]).then(__webpack_require__.bind(null, /*! ./pages/ui/forms/form-elements/form-elements.module */ "./src/app/pages/ui/forms/form-elements/form-elements.module.ts")).then((m) => m.FormElementsModule),
                data: {
                    containerEnabled: true,
                },
            },
            {
                path: "forms/form-wizard",
                loadChildren: () => Promise.all(/*! import() | pages-ui-forms-form-wizard-form-wizard-module */[__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~601e5afe"), __webpack_require__.e("default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~fab076b6"), __webpack_require__.e("common"), __webpack_require__.e("pages-ui-forms-form-wizard-form-wizard-module")]).then(__webpack_require__.bind(null, /*! ./pages/ui/forms/form-wizard/form-wizard.module */ "./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts")).then((m) => m.FormWizardModule),
                data: {
                    containerEnabled: true,
                },
            },
            {
                path: "icons",
                loadChildren: () => Promise.all(/*! import() | pages-ui-icons-icons-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-ui-icons-icons-module")]).then(__webpack_require__.bind(null, /*! ./pages/ui/icons/icons.module */ "./src/app/pages/ui/icons/icons.module.ts")).then((m) => m.IconsModule),
            },
            {
                path: "page-layouts",
                loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-page-layouts-page-layouts-module */ "pages-ui-page-layouts-page-layouts-module").then(__webpack_require__.bind(null, /*! ./pages/ui/page-layouts/page-layouts.module */ "./src/app/pages/ui/page-layouts/page-layouts.module.ts")).then((m) => m.PageLayoutsModule),
            },
        ],
    },
    {
        path: "**",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-errors-error-404-error-404-module */ "pages-pages-errors-error-404-error-404-module").then(__webpack_require__.bind(null, /*! ./pages/pages/errors/error-404/error-404.module */ "./src/app/pages/pages/errors/error-404/error-404.module.ts")).then((m) => m.Error404Module),
    },
];
const routes = [
    {
        path: "login",
        loadChildren: () => Promise.all(/*! import() | pages-pages-auth-login-login-module */[__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-auth-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/auth/login/login.module */ "./src/app/pages/pages/auth/login/login.module.ts")).then((m) => m.LoginModule),
    },
    {
        path: "register",
        loadChildren: () => Promise.all(/*! import() | pages-pages-auth-register-register-module */[__webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("common"), __webpack_require__.e("pages-pages-auth-register-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/auth/register/register.module */ "./src/app/pages/pages/auth/register/register.module.ts")).then((m) => m.RegisterModule),
    },
    {
        path: "forgot-password",
        loadChildren: () => Promise.all(/*! import() | pages-pages-auth-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-auth-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/auth/forgot-password/forgot-password.module */ "./src/app/pages/pages/auth/forgot-password/forgot-password.module.ts")).then((m) => m.ForgotPasswordModule),
    },
    {
        path: "coming-soon",
        loadChildren: () => Promise.all(/*! import() | pages-pages-coming-soon-coming-soon-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-coming-soon-coming-soon-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages/coming-soon/coming-soon.module */ "./src/app/pages/pages/coming-soon/coming-soon.module.ts")).then((m) => m.ComingSoonModule),
    },
    {
        path: "",
        component: _vex_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: childrenRoutes,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                // preloadingStrategy: PreloadAllModules,
                scrollPositionRestoration: "enabled",
                relativeLinkResolution: "corrected",
                anchorScrolling: "enabled",
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@vex/services/config.service */ "./src/@vex/services/config.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@vex/services/navigation.service */ "./src/@vex/services/navigation.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-layers */ "./node_modules/@iconify/icons-ic/twotone-layers.js");
/* harmony import */ var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_date_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-date-range */ "./node_modules/@iconify/icons-ic/twotone-date-range.js");
/* harmony import */ var _iconify_icons_ic_twotone_date_range__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_date_range__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contacts */ "./node_modules/@iconify/icons-ic/twotone-contacts.js");
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-lock */ "./node_modules/@iconify/icons-ic/twotone-lock.js");
/* harmony import */ var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_watch_later__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-watch-later */ "./node_modules/@iconify/icons-ic/twotone-watch-later.js");
/* harmony import */ var _iconify_icons_ic_twotone_watch_later__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_watch_later__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_attach_money__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-attach-money */ "./node_modules/@iconify/icons-ic/twotone-attach-money.js");
/* harmony import */ var _iconify_icons_ic_twotone_attach_money__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_money__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-outline */ "./node_modules/@iconify/icons-ic/twotone-person-outline.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-receipt */ "./node_modules/@iconify/icons-ic/twotone-receipt.js");
/* harmony import */ var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_bubble_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-bubble-chart */ "./node_modules/@iconify/icons-ic/twotone-bubble-chart.js");
/* harmony import */ var _iconify_icons_ic_twotone_bubble_chart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_bubble_chart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_format_color_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-color-text */ "./node_modules/@iconify/icons-ic/twotone-format-color-text.js");
/* harmony import */ var _iconify_icons_ic_twotone_format_color_text__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_format_color_text__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_view_compact__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-view-compact */ "./node_modules/@iconify/icons-ic/twotone-view-compact.js");
/* harmony import */ var _iconify_icons_ic_twotone_view_compact__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_view_compact__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_picture_in_picture__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-picture-in-picture */ "./node_modules/@iconify/icons-ic/twotone-picture-in-picture.js");
/* harmony import */ var _iconify_icons_ic_twotone_picture_in_picture__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_picture_in_picture__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../@vex/services/layout.service */ "./src/@vex/services/layout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../@vex/services/splash-screen.service */ "./src/@vex/services/splash-screen.service.ts");
/* harmony import */ var _vex_services_style_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../@vex/services/style.service */ "./src/@vex/services/style.service.ts");
/* harmony import */ var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../@vex/utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");




























let AppComponent = class AppComponent {
    constructor(configService, styleService, iconRegistry, renderer, platform, document, localeId, layoutService, route, navigationService, splashScreenService) {
        this.configService = configService;
        this.styleService = styleService;
        this.iconRegistry = iconRegistry;
        this.renderer = renderer;
        this.platform = platform;
        this.document = document;
        this.localeId = localeId;
        this.layoutService = layoutService;
        this.route = route;
        this.navigationService = navigationService;
        this.splashScreenService = splashScreenService;
        this.title = "vex";
        this.iconRegistry.setDefaultFontSetClass("iconify");
        luxon__WEBPACK_IMPORTED_MODULE_4__["Settings"].defaultLocale = this.localeId;
        if (this.platform.BLINK) {
            this.renderer.addClass(this.document.body, "is-blink");
        }
        this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["filter"])((queryParamMap) => queryParamMap.has("rtl") &&
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_24__["coerceBooleanProperty"])(queryParamMap.get("rtl"))))
            .subscribe((queryParamMap) => {
            this.document.body.dir = "rtl";
            this.configService.updateConfig({
                rtl: true,
            });
        });
        this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["filter"])((queryParamMap) => queryParamMap.has("layout")))
            .subscribe((queryParamMap) => this.configService.setConfig(queryParamMap.get("layout")));
        this.route.queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["filter"])((queryParamMap) => queryParamMap.has("style")))
            .subscribe((queryParamMap) => this.styleService.setStyle(queryParamMap.get("style")));
        this.navigationService.items = [
            {
                type: "link",
                label: "Inicio",
                route: "/dashboards/analytics",
                icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_8___default.a,
            },
            {
                type: "subheading",
                label: "Funcionalidad",
                children: [
                    {
                        type: "link",
                        label: "Clientes",
                        route: "/apps/clientes",
                        icon: _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_10___default.a,
                    },
                    {
                        type: "dropdown",
                        label: "Contratos",
                        icon: _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15___default.a,
                        children: [
                            {
                                type: "link",
                                label: "Lista de Contratos",
                                route: "/apps/contratos",
                            },
                            {
                                type: "link",
                                label: "Nuevo Contrato",
                                route: "/apps/contratos/create",
                            },
                        ],
                    },
                ],
            },
            {
                type: "subheading",
                label: "Funcionalidad",
                children: [
                    {
                        type: "link",
                        label: "Calendario",
                        route: "/apps/calendar",
                        icon: _iconify_icons_ic_twotone_date_range__WEBPACK_IMPORTED_MODULE_9___default.a,
                        badge: {
                            value: "12",
                            background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_27__["default"].colors["deep-purple"]["500"],
                            color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_27__["default"].textColor["deep-purple-contrast"]["500"],
                        },
                    },
                ],
            },
            {
                type: "subheading",
                label: "Apps",
                children: [
                    {
                        type: "link",
                        label: "Calendar",
                        route: "/apps/calendar",
                        icon: _iconify_icons_ic_twotone_date_range__WEBPACK_IMPORTED_MODULE_9___default.a,
                        badge: {
                            value: "12",
                            background: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_27__["default"].colors["deep-purple"]["500"],
                            color: _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_27__["default"].textColor["deep-purple-contrast"]["500"],
                        },
                    },
                    {
                        type: "link",
                        label: "Contacts",
                        icon: _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_10___default.a,
                        route: "/apps/contacts/table",
                    },
                ],
            },
            {
                type: "subheading",
                label: "Pages",
                children: [
                    {
                        type: "dropdown",
                        label: "Authentication",
                        icon: _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_11___default.a,
                        children: [
                            {
                                type: "link",
                                label: "Login",
                                route: "/login",
                            },
                            {
                                type: "link",
                                label: "Register",
                                route: "/register",
                            },
                            {
                                type: "link",
                                label: "Forgot Password",
                                route: "/forgot-password",
                            },
                        ],
                    },
                    {
                        type: "link",
                        label: "Coming Soon",
                        icon: _iconify_icons_ic_twotone_watch_later__WEBPACK_IMPORTED_MODULE_12___default.a,
                        route: "/coming-soon",
                    },
                    {
                        type: "link",
                        label: "Pricing",
                        icon: _iconify_icons_ic_twotone_attach_money__WEBPACK_IMPORTED_MODULE_13___default.a,
                        route: "/pages/pricing",
                    },
                    {
                        type: "link",
                        label: "Profile",
                        icon: _iconify_icons_ic_twotone_person_outline__WEBPACK_IMPORTED_MODULE_14___default.a,
                        route: "/pages/profile",
                    },
                    {
                        type: "link",
                        label: "Invoice",
                        icon: _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15___default.a,
                        route: "/pages/invoice",
                    },
                ],
            },
            {
                type: "subheading",
                label: "UI Elements",
                children: [
                    {
                        type: "dropdown",
                        label: "Components",
                        icon: _iconify_icons_ic_twotone_bubble_chart__WEBPACK_IMPORTED_MODULE_16___default.a,
                        children: [
                            {
                                type: "link",
                                label: "Overview",
                                route: "/ui/components/overview",
                            },
                            {
                                type: "link",
                                label: "Autocomplete",
                                route: "/ui/components/autocomplete",
                            },
                            {
                                type: "link",
                                label: "Buttons",
                                route: "/ui/components/buttons",
                            },
                            {
                                type: "link",
                                label: "Button Group",
                                route: "/ui/components/button-group",
                            },
                            {
                                type: "link",
                                label: "Cards",
                                route: "/ui/components/cards",
                            },
                            {
                                type: "link",
                                label: "Checkbox",
                                route: "/ui/components/checkbox",
                            },
                            {
                                type: "link",
                                label: "Dialogs",
                                route: "/ui/components/dialogs",
                            },
                            {
                                type: "link",
                                label: "Grid List",
                                route: "/ui/components/grid-list",
                            },
                            {
                                type: "link",
                                label: "Input",
                                route: "/ui/components/input",
                            },
                            {
                                type: "link",
                                label: "Lists",
                                route: "/ui/components/lists",
                            },
                            {
                                type: "link",
                                label: "Menu",
                                route: "/ui/components/menu",
                            },
                            {
                                type: "link",
                                label: "Progress",
                                route: "/ui/components/progress",
                            },
                            {
                                type: "link",
                                label: "Progress Spinner",
                                route: "/ui/components/progress-spinner",
                            },
                            {
                                type: "link",
                                label: "Radio",
                                route: "/ui/components/radio",
                            },
                            {
                                type: "link",
                                label: "Slide Toggle",
                                route: "/ui/components/slide-toggle",
                            },
                            {
                                type: "link",
                                label: "Slider",
                                route: "/ui/components/slider",
                            },
                            {
                                type: "link",
                                label: "Snack Bar",
                                route: "/ui/components/snack-bar",
                            },
                            {
                                type: "link",
                                label: "Tooltip",
                                route: "/ui/components/tooltip",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Forms",
                        icon: _iconify_icons_ic_twotone_format_color_text__WEBPACK_IMPORTED_MODULE_17___default.a,
                        children: [
                            {
                                type: "link",
                                label: "Form Elements",
                                route: "/ui/forms/form-elements",
                            },
                            {
                                type: "link",
                                label: "Form Wizard",
                                route: "/ui/forms/form-wizard",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Icons",
                        icon: _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_18___default.a,
                        children: [
                            {
                                type: "link",
                                label: "Material Icons",
                                route: "/ui/icons/ic",
                            },
                            {
                                type: "link",
                                label: "FontAwesome Icons",
                                route: "/ui/icons/fa",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Page Layouts",
                        icon: _iconify_icons_ic_twotone_view_compact__WEBPACK_IMPORTED_MODULE_19___default.a,
                        children: [
                            {
                                type: "dropdown",
                                label: "Card",
                                children: [
                                    {
                                        type: "link",
                                        label: "Default",
                                        route: "/ui/page-layouts/card",
                                        routerLinkActive: { exact: true },
                                    },
                                    {
                                        type: "link",
                                        label: "Tabbed",
                                        route: "/ui/page-layouts/card/tabbed",
                                    },
                                    {
                                        type: "link",
                                        label: "Large Header",
                                        route: "/ui/page-layouts/card/large-header",
                                        routerLinkActive: { exact: true },
                                    },
                                    {
                                        type: "link",
                                        label: "Tabbed & Large Header",
                                        route: "/ui/page-layouts/card/large-header/tabbed",
                                    },
                                ],
                            },
                            {
                                type: "dropdown",
                                label: "Simple",
                                children: [
                                    {
                                        type: "link",
                                        label: "Default",
                                        route: "/ui/page-layouts/simple",
                                        routerLinkActive: { exact: true },
                                    },
                                    {
                                        type: "link",
                                        label: "Tabbed",
                                        route: "/ui/page-layouts/simple/tabbed",
                                    },
                                    {
                                        type: "link",
                                        label: "Large Header",
                                        route: "/ui/page-layouts/simple/large-header",
                                        routerLinkActive: { exact: true },
                                    },
                                    {
                                        type: "link",
                                        label: "Tabbed & Large Header",
                                        route: "/ui/page-layouts/simple/large-header/tabbed",
                                    },
                                ],
                            },
                            {
                                type: "link",
                                label: "Blank",
                                icon: _iconify_icons_ic_twotone_picture_in_picture__WEBPACK_IMPORTED_MODULE_20___default.a,
                                route: "/ui/page-layouts/blank",
                            },
                        ],
                    },
                ],
            },
        ];
    }
};
AppComponent.ctorParameters = () => [
    { type: _vex_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _vex_services_style_service__WEBPACK_IMPORTED_MODULE_26__["StyleService"] },
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_21__["LayoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"] },
    { type: _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"] },
    { type: _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_25__["SplashScreenService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "vex-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _vex_vex_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@vex/vex.module */ "./src/@vex/vex.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");








//<<<<APOLLO DEPENDENCIES>>>>>>>>>



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            // Vex
            _vex_vex_module__WEBPACK_IMPORTED_MODULE_6__["VexModule"],
            //Apollo   
            apollo_angular__WEBPACK_IMPORTED_MODULE_8__["ApolloModule"],
            apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_9__["HttpLinkModule"]
        ],
        providers: [{
                provide: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["APOLLO_OPTIONS"],
                useFactory: (httpLink) => {
                    return {
                        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_10__["InMemoryCache"](),
                        link: httpLink.create({
                            uri: "https://encofrado-app.herokuapp.com/v1/graphql"
                        })
                    };
                },
                deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_9__["HttpLink"]]
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./tailwind.config.js":
/*!****************************!*\
  !*** ./tailwind.config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  prefix: '',
  important: ':root',
  separator: ':',
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px'
    },
    colors: {
      transparent: 'transparent',

      black: 'var(--text-color)',
      white: 'var(--text-color-light)',
      'contrast-black': 'black',
      'contrast-white': 'white',

      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
      red: {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
      },
      orange: {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
      },
      'deep-orange': {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
      },
      amber: {
        50: '#fff8e1',
        100: '#ffecb3',
        200: '#ffe082',
        300: '#ffd54f',
        400: '#ffca28',
        500: '#ffc107',
        600: '#ffb300',
        700: '#ffa000',
        800: '#ff8f00',
        900: '#ff6f00',
      },
      'light-green': {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
      },
      green: {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
      },
      teal: {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
      },
      cyan: {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
      },
      purple: {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
      },
      'deep-purple': {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
      },
      primary: {
        50: '#ecefff',
        100: '#ced7ff',
        200: '#aebcff',
        300: '#8ea1ff',
        400: '#758cff',
        500: '#5c77ff',
        600: '#5570ff',
        700: '#4b65ff',
        800: '#415bff',
        900: '#3048ff',
      }
    },
    spacing: {
      px: '1px',
      gutter: 'var(--padding-gutter)',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    backgroundColor: theme => ({
      base: 'var(--background-base)',
      card: 'var(--background-card)',
      'app-bar': 'var(--background-app-bar)',
      hover: 'var(--background-hover)',
      ...theme('colors'),
    }),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: 'var(--foreground-divider)',
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      default: 'var(--elevation-z6)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0px 7px 8px -4px rgba(82, 63, 104, 0.06),0px 12px 17px 2px rgba(82, 63, 104, 0.042),0px 5px 22px 4px rgba(82, 63, 104, 0.036)',
      xl: '0px 8px 10px -5px rgba(82, 63, 104, 0.06),0px 16px 24px 2px rgba(82, 63, 104, 0.042),0px 6px 30px 5px rgba(82, 63, 104, 0.036)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      b: '0 10px 30px 0 rgba(82,63,104,.06)',
      1: 'var(--elevation-z1)',
      2: 'var(--elevation-z2)',
      3: 'var(--elevation-z3)',
      4: 'var(--elevation-z4)',
      5: 'var(--elevation-z5)',
      6: 'var(--elevation-z6)',
      7: 'var(--elevation-z7)',
      8: 'var(--elevation-z8)',
      9: 'var(--elevation-z9)',
      10: 'var(--elevation-z10)',
      11: 'var(--elevation-z11)',
      12: 'var(--elevation-z12)',
      13: 'var(--elevation-z13)',
      14: 'var(--elevation-z14)',
      15: 'var(--elevation-z15)',
      16: 'var(--elevation-z16)',
      17: 'var(--elevation-z17)',
      18: 'var(--elevation-z18)',
      19: 'var(--elevation-z19)',
      20: 'var(--elevation-z20)',
    },
    container: {
      center: true,
      padding: 'var(--padding-gutter)'
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple ColorDef Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto ColorDef Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      auto: 'auto',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, {negative}) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...negative({
        gutter: 'var(--padding-gutter)'
      })
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      xxxs: '16rem',
      xxs: '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: theme => ({
      '0': '0',
      full: '100%',
      ...theme('spacing')
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => ({
      'secondary': 'var(--text-secondary)',
      'hint': 'var(--text-hint)',
      ...theme('colors'),
      'primary-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'red-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'green-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'amber-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#000',
        600: '#000',
        700: '#000',
        800: '#000',
        900: '#000',
      },
      'orange-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#000',
        600: '#000',
        700: '#000',
        800: '#FFF',
        900: '#FFF',
      },
      'deep-orange-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'purple-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#FFF',
        400: '#FFF',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'deep-purple-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#FFF',
        400: '#FFF',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'cyan-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'teal-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'gray-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#FFF',
        600: '#FFF',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
      'light-green-contrast': {
        50: '#000',
        100: '#000',
        200: '#000',
        300: '#000',
        400: '#000',
        500: '#000',
        600: '#000',
        700: '#FFF',
        800: '#FFF',
        900: '#FFF',
      },
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'ltr', 'rtl'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive', 'ltr', 'rtl'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'ltr', 'rtl'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive', 'ltr', 'rtl'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [
    function ({addVariant, e}) {
      addVariant('ltr', ({separator, modifySelectors}) => {
        modifySelectors(({className}) => {
          return `[dir=ltr] .ltr${e(separator)}${className}`;
        })
      });

      addVariant('rtl', ({separator, modifySelectors}) => {
        modifySelectors(({className}) => {
          return `[dir=rtl] .rtl${e(separator)}${className}`;
        })
      });
    }
  ],
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shoniisra/Documentos/Proyectos/encofradoApp_angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map