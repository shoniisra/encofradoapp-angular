(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-table-contacts-table-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"save()\" [formGroup]=\"form\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-dialog-title>\n    <img *ngIf=\"contact?.imageSrc\" [src]=\"contact?.imageSrc\" class=\"avatar ltr:mr-5 rtl:ml-5\">\n    <h2 class=\"headline m-0\" fxFlex=\"auto\">{{ form.get('name').value || 'New Contact' }}</h2>\n\n    <button (click)=\"toggleStar()\" class=\"text-secondary\" mat-icon-button type=\"button\">\n      <mat-icon *ngIf=\"contact?.starred\" [icIcon]=\"icStar\" class=\"text-amber-500\"></mat-icon>\n      <mat-icon *ngIf=\"!contact?.starred\" [icIcon]=\"icStarBorder\"></mat-icon>\n    </button>\n\n    <button [matMenuTriggerFor]=\"settingsMenu\" class=\"text-secondary\" mat-icon-button type=\"button\">\n      <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n    </button>\n\n    <button class=\"text-secondary\" mat-dialog-close mat-icon-button type=\"button\">\n      <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n  </div>\n\n  <mat-divider class=\"-mx-6 text-border\"></mat-divider>\n\n  <mat-dialog-content fxLayout=\"column\">\n    <mat-form-field class=\"mt-6\">\n      <mat-label>Name</mat-label>\n      <input cdkFocusInitial formControlName=\"name\" matInput>\n\n      <mat-icon [icIcon]=\"icPerson\" class=\"ltr:mr-3 rtl:ml-3\" matPrefix></mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Phone</mat-label>\n      <input formControlName=\"phone\" matInput>\n\n      <mat-icon [icIcon]=\"icPhone\" class=\"ltr:mr-3 rtl:ml-3\" matPrefix></mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>E-Mail</mat-label>\n      <input formControlName=\"email\" matInput>\n\n      <mat-icon [icIcon]=\"icEmail\" class=\"ltr:mr-3 rtl:ml-3\" matPrefix></mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Company</mat-label>\n      <input formControlName=\"company\" matInput>\n\n      <mat-icon [icIcon]=\"icBusiness\" class=\"ltr:mr-3 rtl:ml-3\" matPrefix></mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Birthday</mat-label>\n      <input [matDatepicker]=\"datepickerRef\" formControlName=\"birthday\" matInput>\n      <mat-datepicker-toggle [for]=\"datepickerRef\" class=\"block\" matPrefix></mat-datepicker-toggle>\n      <mat-datepicker #datepickerRef></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Notes</mat-label>\n      <textarea formControlName=\"notes\" matInput></textarea>\n    </mat-form-field>\n  </mat-dialog-content>\n\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close type=\"button\">CANCEL</button>\n    <button color=\"primary\" mat-button type=\"submit\">SAVE CHANGES</button>\n  </mat-dialog-actions>\n</form>\n\n<mat-menu #settingsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n    <span>Print</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icDownload\"></mat-icon>\n    <span>Export</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n    <span>Delete</span>\n  </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full relative\" vexScrollbar>\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n    <table [@stagger]=\"dataSource.filteredData\"\n           [dataSource]=\"dataSource\"\n           class=\"w-full\"\n           fxFlex=\"auto\"\n           mat-table\n           matSort>\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Model Properties Column -->\n      <ng-container *ngFor=\"let column of columns\">\n        <ng-container *ngIf=\"column.type === 'text'\" [matColumnDef]=\"column.property\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>{{ row[column.property] }}</td>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.type === 'checkbox'\" [matColumnDef]=\"column.property\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\n            <mat-checkbox (click)=\"$event.stopPropagation()\" [checked]=\"row[column.property]\"></mat-checkbox>\n          </td>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.type === 'image'\" [matColumnDef]=\"column.property\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n          <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\n            <img [src]=\"row[column.property]\" class=\"avatar h-9 w-9 align-middle my-2\">\n          </td>\n        </ng-container>\n\n        <ng-container *ngIf=\"column.type === 'button'\" [matColumnDef]=\"column.property\">\n          <ng-container *ngIf=\"column.property === 'starred'\">\n            <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" class=\"w-10\" mat-cell>\n              <button (click)=\"emitToggleStar($event, row.id)\" mat-icon-button type=\"button\">\n                <mat-icon *ngIf=\"row[column.property]\" [icIcon]=\"icStar\" class=\"text-amber-500\"></mat-icon>\n                <mat-icon *ngIf=\"!row[column.property]\" [icIcon]=\"icStarBorder\"></mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <ng-container *ngIf=\"column.property === 'menu'\">\n            <th *matHeaderCellDef mat-header-cell mat-sort-header> {{ column.label }}</th>\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" class=\"w-10\" mat-cell>\n              <button (click)=\"$event.stopPropagation()\"\n                      [matMenuTriggerFor]=\"contactMenu\"\n                      mat-icon-button\n                      type=\"button\">\n                <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n              </button>\n            </td>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n\n\n      <tr *matHeaderRowDef=\"visibleColumns; sticky: true\" mat-header-row></tr>\n      <!--suppress UnnecessaryLabelJS -->\n      <tr (click)=\"openContact.emit(row.id)\"\n          *matRowDef=\"let row; columns: visibleColumns;\"\n          @fadeInUp\n          class=\"hover:bg-hover cursor-pointer\"\n          mat-row></tr>\n    </table>\n\n    <div *ngIf=\"dataSource.filteredData.length === 0\"\n         @scaleFadeIn\n         fxFlex=\"auto\"\n         fxLayout=\"column\"\n         fxLayoutAlign=\"center center\">\n      <img class=\"m-12 h-64\" src=\"assets/img/illustrations/idea.svg\">\n      <h2 class=\"headline m-0 text-center\">No contacts matching your filters</h2>\n    </div>\n\n    <mat-paginator [fxHide]=\"dataSource.filteredData.length === 0\"\n                   [pageSize]=\"pageSize\"\n                   [pageSizeOptions]=\"pageSizeOptions\"\n                   class=\"sticky bottom-0 left-0 right-0 border-t\"\n                   fxFlex=\"none\"></mat-paginator>\n  </div>\n</div>\n\n<mat-menu #contactMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n    <span>Edit Contact</span>\n  </button>\n\n  <button mat-menu-item>\n    <mat-icon [icIcon]=\"icDeleteForever\"></mat-icon>\n    <span>Delete Contact</span>\n  </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div @stagger class=\"max-w-xxxs w-full\">\n  <div class=\"h-14 mb-6 flex bg-primary-500 px-gutter sm:px-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <button (click)=\"openAddNew.emit()\" class=\"flex-auto\" mat-raised-button type=\"button\">\n      <ic-icon [icon]=\"icPersonAdd\" class=\"ltr:mr-3 rtl:ml-3\" inline=\"true\" size=\"18px\"></ic-icon>\n      <span>ADD CONTACT</span>\n    </button>\n  </div>\n\n  <div class=\"px-gutter sm:px-0\">\n    <ng-container *ngFor=\"let item of items\">\n      <a (click)=\"setFilter(item.id)\"\n         *ngIf=\"item.type === 'link'\"\n         @fadeInRight\n         [class.bg-hover]=\"isActive(item.id)\"\n         [class.text-primary-500]=\"isActive(item.id)\"\n         class=\"list-item mt-2 no-underline flex items-center\"\n         matRipple>\n        <ic-icon [icon]=\"item.icon\" [ngClass]=\"item.classes?.icon\" class=\"ltr:mr-3 rtl:ml-3\" size=\"24px\"></ic-icon>\n        <span>{{ item.label }}</span>\n      </a>\n\n      <h3 *ngIf=\"item.type === 'subheading'\"\n          @fadeInRight\n          class=\"caption text-secondary uppercase font-medium mb-0 mt-6\">{{ item.label }}</h3>\n    </ng-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full h-full flex flex-col\">\n  <div class=\"px-gutter pt-6 pb-20 bg-primary-500 flex-none\">\n    <div class=\"flex items-center\" vexContainer>\n      <button (click)=\"openMenu()\" @scaleIn class=\"sm:hidden text-primary-contrast-500\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMenu\"></mat-icon>\n      </button>\n      <h2 class=\"headline text-primary-contrast-500 m-0 flex items-center w-full max-w-xxxs mr-6\">\n        <ic-icon @scaleIn [icon]=\"icContacts\" class=\"hidden sm:block\"></ic-icon>\n        <span @fadeInRight class=\"ml-4 block\">Contacts</span>\n      </h2>\n\n      <div class=\"hidden sm:flex items-center bg-card rounded-full overflow-hidden relative ltr:pl-5 rtl:pr-5 h-12 max-w-md w-full shadow-8 mx-auto\">\n        <ic-icon [icon]=\"icSearch\" class=\"text-secondary flex-none\" size=\"24px\"></ic-icon>\n        <input [formControl]=\"searchCtrl\"\n               class=\"border-0 h-12 outline-none ltr:pl-4 rtl:pr-4 placeholder:text-secondary bg-card flex-auto\"\n               placeholder=\"Search Contacts...\"\n               type=\"text\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"-mt-14 pt-0 overflow-hidden flex\" vexContainer>\n\n    <mat-drawer-container class=\"bg-transparent flex-auto flex\">\n      <mat-drawer [(opened)]=\"menuOpen\" mode=\"over\">\n        <vex-contacts-table-menu (filterChange)=\"setData($event)\"\n                                 (openAddNew)=\"openContact()\"\n                                 class=\"sm:hidden\"></vex-contacts-table-menu>\n      </mat-drawer>\n      <mat-drawer-content class=\"p-gutter pt-0 flex-auto flex items-start\">\n        <vex-contacts-table-menu (filterChange)=\"setData($event)\"\n                                 (openAddNew)=\"openContact()\"\n                                 class=\"hidden sm:block mr-6\"></vex-contacts-table-menu>\n\n        <div class=\"card h-full overflow-hidden flex-auto\">\n          <vex-contacts-data-table (openContact)=\"openContact($event)\"\n                                   (toggleStar)=\"toggleStar($event)\"\n                                   [columns]=\"tableColumns\"\n                                   [data]=\"tableData\"\n                                   [searchStr]=\"searchStr$ | async\"></vex-contacts-data-table>\n        </div>\n      </mat-drawer-content>\n\n    </mat-drawer-container>\n  </div>\n</div>\n\n");

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

/***/ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1lZGl0L2NvbnRhY3RzLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: contactIdCounter, ContactsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactIdCounter", function() { return contactIdCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsEditComponent", function() { return ContactsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../static-data/contacts */ "./src/static-data/contacts.ts");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-cloud-download */ "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
/* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-business */ "./node_modules/@iconify/icons-ic/twotone-business.js");
/* harmony import */ var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ "./node_modules/@iconify/icons-ic/twotone-person.js");
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star-border */ "./node_modules/@iconify/icons-ic/twotone-star-border.js");
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















let contactIdCounter = 50;
let ContactsEditComponent = class ContactsEditComponent {
    constructor(contactId, dialogRef, fb) {
        this.contactId = contactId;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.form = this.fb.group({
            name: null,
            email: null,
            phone: null,
            company: null,
            notes: null,
            birthday: null
        });
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icEmail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_11___default.a;
    }
    ngOnInit() {
        if (this.contactId) {
            this.contact = _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"].find(c => c.id === this.contactId);
            this.form.patchValue(this.contact);
        }
    }
    toggleStar() {
        if (this.contact) {
            this.contact.starred = !this.contact.starred;
        }
    }
    save() {
        const form = this.form.value;
        if (!this.contact) {
            this.contact = Object.assign({}, form, { id: contactIdCounter++ });
        }
        this.contact.name = form.name;
        this.contact.email = form.email;
        this.contact.phone = form.phone;
        this.contact.company = form.company;
        this.contact.notes = form.notes;
        this.contact.birthday = form.birthday;
        this.dialogRef.close();
    }
};
ContactsEditComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"] }
];
ContactsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts-edit.component.scss */ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ContactsEditComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ContactsEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsEditModule", function() { return ContactsEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contacts_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-edit.component */ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");















let ContactsEditModule = class ContactsEditModule {
};
ContactsEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contacts_edit_component__WEBPACK_IMPORTED_MODULE_3__["ContactsEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"]
        ],
        entryComponents: [_contacts_edit_component__WEBPACK_IMPORTED_MODULE_3__["ContactsEditComponent"]]
    })
], ContactsEditModule);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29udGFjdHMtdGFibGUvY29udGFjdHMtZGF0YS10YWJsZS9jb250YWN0cy1kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContactsDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsDataTableComponent", function() { return ContactsDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star-border */ "./node_modules/@iconify/icons-ic/twotone-star-border.js");
/* harmony import */ var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete-forever */ "./node_modules/@iconify/icons-ic/twotone-delete-forever.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../@vex/animations/scale-fade-in.animation */ "./src/@vex/animations/scale-fade-in.animation.ts");














let ContactsDataTableComponent = class ContactsDataTableComponent {
    constructor() {
        this.pageSize = 20;
        this.pageSizeOptions = [10, 20, 50];
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icDeleteForever = _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default.a;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.columns) {
            this.visibleColumns = this.columns.map(column => column.property);
        }
        if (changes.data) {
            this.dataSource.data = this.data;
        }
        if (changes.searchStr) {
            this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
        }
    }
    emitToggleStar(event, id) {
        event.stopPropagation();
        this.toggleStar.emit(id);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "pageSizeOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsDataTableComponent.prototype, "searchStr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsDataTableComponent.prototype, "toggleStar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsDataTableComponent.prototype, "openContact", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ContactsDataTableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], ContactsDataTableComponent.prototype, "sort", void 0);
ContactsDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-data-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-data-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.html")).default,
        providers: [
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
                useValue: {
                    appearance: 'standard'
                }
            }
        ],
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__["stagger20ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"],
            _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__["scaleFadeIn400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts-data-table.component.scss */ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.scss")).default]
    })
], ContactsDataTableComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContactsTableMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableMenuComponent", function() { return ContactsTableMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-view-headline */ "./node_modules/@iconify/icons-ic/twotone-view-headline.js");
/* harmony import */ var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../static-data/contacts */ "./src/static-data/contacts.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-history */ "./node_modules/@iconify/icons-ic/twotone-history.js");
/* harmony import */ var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-label */ "./node_modules/@iconify/icons-ic/twotone-label.js");
/* harmony import */ var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person-add */ "./node_modules/@iconify/icons-ic/twotone-person-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");










let ContactsTableMenuComponent = class ContactsTableMenuComponent {
    constructor() {
        this.items = [
            {
                type: 'link',
                id: 'all',
                icon: _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_2___default.a,
                label: 'All Contacts'
            },
            {
                type: 'link',
                id: 'frequently',
                icon: _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_5___default.a,
                label: 'Frequently contacted'
            },
            {
                type: 'link',
                id: 'starred',
                icon: _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_6___default.a,
                label: 'Starred'
            },
            {
                type: 'subheading',
                label: 'Labels'
            },
            {
                type: 'link',
                id: 'family',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Family',
                classes: {
                    icon: 'text-primary-500'
                }
            },
            {
                type: 'link',
                id: 'friends',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Friends',
                classes: {
                    icon: 'text-green-500'
                }
            },
            {
                type: 'link',
                id: 'colleagues',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Colleagues',
                classes: {
                    icon: 'text-amber-500'
                }
            },
            {
                type: 'link',
                id: 'business',
                icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_7___default.a,
                label: 'Business',
                classes: {
                    icon: 'text-gray-500'
                }
            },
        ];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openAddNew = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeCategory = 'all';
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_8___default.a;
    }
    ngOnInit() {
    }
    setFilter(category) {
        this.activeCategory = category;
        if (category === 'starred') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"].filter(c => c.starred));
        }
        if (category === 'all') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_3__["contactsData"]);
        }
        if (category === 'frequently'
            || category === 'family'
            || category === 'friends'
            || category === 'colleagues'
            || category === 'business') {
            return this.filterChange.emit([]);
        }
    }
    isActive(category) {
        return this.activeCategory === category;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactsTableMenuComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsTableMenuComponent.prototype, "filterChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactsTableMenuComponent.prototype, "openAddNew", void 0);
ContactsTableMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-table-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-table-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.html")).default,
        animations: [_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger40ms"]]
    })
], ContactsTableMenuComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ContactsTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableRoutingModule", function() { return ContactsTableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacts_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-table.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");




const routes = [
    {
        path: '',
        component: _contacts_table_component__WEBPACK_IMPORTED_MODULE_3__["ContactsTableComponent"],
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true
        }
    }
];
let ContactsTableRoutingModule = class ContactsTableRoutingModule {
};
ContactsTableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactsTableRoutingModule);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableComponent", function() { return ContactsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-contacts */ "./node_modules/@iconify/icons-ic/twotone-contacts.js");
/* harmony import */ var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
/* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../static-data/contacts */ "./src/static-data/contacts.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.component */ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ "./node_modules/@iconify/icons-ic/twotone-menu.js");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13__);














let ContactsTableComponent = class ContactsTableComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.searchStr$ = this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(10));
        this.menuOpen = false;
        this.activeCategory = 'all';
        this.tableData = _static_data_contacts__WEBPACK_IMPORTED_MODULE_7__["contactsData"];
        this.tableColumns = [
            {
                label: '',
                property: 'selected',
                type: 'checkbox',
                cssClasses: ['w-6']
            },
            {
                label: '',
                property: 'imageSrc',
                type: 'image',
                cssClasses: ['min-w-9']
            },
            {
                label: 'NAME',
                property: 'name',
                type: 'text',
                cssClasses: ['font-medium']
            },
            {
                label: 'EMAIL',
                property: 'email',
                type: 'text',
                cssClasses: ['text-secondary']
            },
            {
                label: 'PHONE',
                property: 'phone',
                type: 'text',
                cssClasses: ['text-secondary']
            },
            {
                label: '',
                property: 'starred',
                type: 'button',
                cssClasses: ['text-secondary', 'w-10']
            },
            {
                label: '',
                property: 'menu',
                type: 'button',
                cssClasses: ['text-secondary', 'w-10']
            },
        ];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_13___default.a;
    }
    ngOnInit() {
    }
    openContact(id) {
        this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_12__["ContactsEditComponent"], {
            data: id || null,
            width: '600px'
        });
    }
    toggleStar(id) {
        const contact = this.tableData.find(c => c.id === id);
        if (contact) {
            contact.starred = !contact.starred;
        }
    }
    setData(data) {
        this.tableData = data;
        this.menuOpen = false;
    }
    openMenu() {
        this.menuOpen = true;
    }
};
ContactsTableComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
ContactsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-contacts-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/contacts/contacts-table/contacts-table.component.html")).default,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger40ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__["scaleIn400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInRight400ms"]
        ]
    })
], ContactsTableComponent);



/***/ }),

/***/ "./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsTableModule", function() { return ContactsTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-table-routing.module */ "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../@vex/components/scrollbar/scrollbar.module */ "./src/@vex/components/scrollbar/scrollbar.module.ts");
/* harmony import */ var _contacts_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts-table.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");
/* harmony import */ var _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts-data-table/contacts-data-table.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts");
/* harmony import */ var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/contacts-edit/contacts-edit.module */ "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
/* harmony import */ var _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contacts-table-menu/contacts-table-menu.component */ "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");























let ContactsTableModule = class ContactsTableModule {
};
ContactsTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contacts_table_component__WEBPACK_IMPORTED_MODULE_16__["ContactsTableComponent"], _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_17__["ContactsDataTableComponent"], _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_21__["ContactsTableMenuComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactsTableRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_15__["ScrollbarModule"],
            _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_18__["ContactsEditModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"]
        ]
    })
], ContactsTableModule);



/***/ }),

/***/ "./src/static-data/contacts.ts":
/*!*************************************!*\
  !*** ./src/static-data/contacts.ts ***!
  \*************************************/
/*! exports provided: contactsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactsData", function() { return contactsData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const contactsData = [
    {
        id: 1,
        imageSrc: 'assets/img/avatars/1.jpg',
        name: 'Guerrero Morales',
        phone: '+21 (988) 504-2559',
        company: 'Supportal',
        email: 'guerrero.morales@supportal.com',
        selected: false,
        starred: false
    },
    {
        id: 2,
        imageSrc: 'assets/img/avatars/2.jpg',
        name: 'Robin Blackburn',
        phone: '+5 (911) 423-2538',
        company: 'Polarax',
        email: 'robin.blackburn@polarax.biz',
        selected: false,
        starred: false
    },
    {
        id: 3,
        imageSrc: 'assets/img/avatars/3.jpg',
        name: 'Simone Gallegos',
        phone: '+2 (948) 573-3528',
        company: 'Applidec',
        email: 'simone.gallegos@applidec.org',
        selected: false,
        starred: true
    },
    {
        id: 4,
        imageSrc: 'assets/img/avatars/4.jpg',
        name: 'Bonner Mcmillan',
        phone: '+13 (932) 426-2309',
        company: 'Magneato',
        email: 'bonner.mcmillan@magneato.io',
        selected: false,
        starred: false
    },
    {
        id: 5,
        imageSrc: 'assets/img/avatars/5.jpg',
        name: 'Velasquez Spence',
        phone: '+31 (850) 492-2858',
        company: 'Joviold',
        email: 'velasquez.spence@joviold.co.uk',
        selected: false,
        starred: false
    },
    {
        id: 6,
        imageSrc: 'assets/img/avatars/6.jpg',
        name: 'Orr Fernandez',
        phone: '+6 (843) 490-2487',
        company: 'Accuprint',
        email: 'orr.fernandez@accuprint.tv',
        selected: false,
        starred: false
    },
    {
        id: 7,
        imageSrc: 'assets/img/avatars/7.jpg',
        name: 'Marcella Russo',
        phone: '+48 (836) 506-2890',
        company: 'Paprikut',
        email: 'marcella.russo@paprikut.name',
        selected: false,
        starred: true
    },
    {
        id: 8,
        imageSrc: 'assets/img/avatars/8.jpg',
        name: 'Mccormick Ferguson',
        phone: '+8 (957) 553-2497',
        company: 'Waab',
        email: 'mccormick.ferguson@waab.info',
        selected: false,
        starred: false
    },
    {
        id: 9,
        imageSrc: 'assets/img/avatars/9.jpg',
        name: 'Myrtle Walters',
        phone: '+29 (846) 562-3339',
        company: 'Hinway',
        email: 'myrtle.walters@hinway.me',
        selected: false,
        starred: false
    },
    {
        id: 10,
        imageSrc: 'assets/img/avatars/10.jpg',
        name: 'Rachael Griffin',
        phone: '+26 (827) 437-3065',
        company: 'Callflex',
        email: 'rachael.griffin@callflex.net',
        selected: false,
        starred: false
    },
    {
        id: 11,
        imageSrc: 'assets/img/avatars/11.jpg',
        name: 'Carney Emerson',
        phone: '+24 (821) 560-2716',
        company: 'Motovate',
        email: 'carney.emerson@motovate.ca',
        selected: false,
        starred: false
    },
    {
        id: 12,
        imageSrc: 'assets/img/avatars/12.jpg',
        name: 'Katrina Cooke',
        phone: '+10 (904) 524-2485',
        company: 'Quarex',
        email: 'katrina.cooke@quarex.biz',
        selected: false,
        starred: true
    },
    {
        id: 13,
        imageSrc: 'assets/img/avatars/13.jpg',
        name: 'Valdez Branch',
        phone: '+12 (941) 536-2874',
        company: 'Uniworld',
        email: 'valdez.branch@uniworld.com',
        selected: false,
        starred: false
    },
    {
        id: 14,
        imageSrc: 'assets/img/avatars/14.jpg',
        name: 'Dejesus Rogers',
        phone: '+40 (806) 435-2871',
        company: 'Oronoko',
        email: 'dejesus.rogers@oronoko.biz',
        selected: false,
        starred: false
    },
    {
        id: 15,
        imageSrc: 'assets/img/avatars/15.jpg',
        name: 'Horton Levy',
        phone: '+19 (932) 552-3976',
        company: 'Zensus',
        email: 'horton.levy@zensus.org',
        selected: false,
        starred: false
    },
    {
        id: 16,
        imageSrc: 'assets/img/avatars/16.jpg',
        name: 'Ivy Mays',
        phone: '+15 (919) 430-3795',
        company: 'Letpro',
        email: 'ivy.mays@letpro.io',
        selected: false,
        starred: false
    },
    {
        id: 17,
        imageSrc: 'assets/img/avatars/17.jpg',
        name: 'Butler Larsen',
        phone: '+18 (862) 489-2364',
        company: 'Micronaut',
        email: 'butler.larsen@micronaut.co.uk',
        selected: false,
        starred: true
    },
    {
        id: 18,
        imageSrc: 'assets/img/avatars/18.jpg',
        name: 'Jimmie Clements',
        phone: '+34 (946) 451-3718',
        company: 'Sarasonic',
        email: 'jimmie.clements@sarasonic.tv',
        selected: false,
        starred: true
    },
    {
        id: 19,
        imageSrc: 'assets/img/avatars/19.jpg',
        name: 'Kasey Rosa',
        phone: '+44 (910) 404-3456',
        company: 'Cytrak',
        email: 'kasey.rosa@cytrak.name',
        selected: false,
        starred: false
    },
    {
        id: 20,
        imageSrc: 'assets/img/avatars/20.jpg',
        name: 'Emily Schneider',
        phone: '+40 (870) 564-3250',
        company: 'Noralex',
        email: 'emily.schneider@noralex.info',
        selected: false,
        starred: false
    },
    {
        id: 21,
        imageSrc: 'assets/img/avatars/20.jpg',
        name: 'Lara Witt',
        phone: '+29 (971) 550-3793',
        company: 'Moltonic',
        email: 'lara.witt@moltonic.me',
        selected: false,
        starred: true
    },
    {
        id: 22,
        imageSrc: 'assets/img/avatars/19.jpg',
        name: 'Hebert Bailey',
        phone: '+4 (884) 527-3408',
        company: 'Homelux',
        email: 'hebert.bailey@homelux.net',
        selected: false,
        starred: true
    },
    {
        id: 23,
        imageSrc: 'assets/img/avatars/18.jpg',
        name: 'Lynda Garza',
        phone: '+44 (872) 404-3519',
        company: 'Quonk',
        email: 'lynda.garza@quonk.ca',
        selected: false,
        starred: true
    },
    {
        id: 24,
        imageSrc: 'assets/img/avatars/17.jpg',
        name: 'Stark Fitzgerald',
        phone: '+7 (999) 438-2471',
        company: 'Farmage',
        email: 'stark.fitzgerald@farmage.biz',
        selected: false,
        starred: true
    },
    {
        id: 25,
        imageSrc: 'assets/img/avatars/16.jpg',
        name: 'Karla Atkins',
        phone: '+44 (869) 502-3263',
        company: 'Kiggle',
        email: 'karla.atkins@kiggle.com',
        selected: false,
        starred: false
    },
    {
        id: 26,
        imageSrc: 'assets/img/avatars/15.jpg',
        name: 'Wilkerson Beasley',
        phone: '+29 (889) 462-3929',
        company: 'Naxdis',
        email: 'wilkerson.beasley@naxdis.biz',
        selected: false,
        starred: false
    },
    {
        id: 27,
        imageSrc: 'assets/img/avatars/14.jpg',
        name: 'Webb Stark',
        phone: '+38 (864) 482-2108',
        company: 'Equitax',
        email: 'webb.stark@equitax.org',
        selected: false,
        starred: true
    },
    {
        id: 28,
        imageSrc: 'assets/img/avatars/13.jpg',
        name: 'Courtney Barrett',
        phone: '+6 (828) 438-3288',
        company: 'Magnemo',
        email: 'courtney.barrett@magnemo.io',
        selected: false,
        starred: false
    },
    {
        id: 29,
        imageSrc: 'assets/img/avatars/12.jpg',
        name: 'Joanne Anderson',
        phone: '+27 (994) 435-2952',
        company: 'Extragene',
        email: 'joanne.anderson@extragene.co.uk',
        selected: false,
        starred: false
    },
    {
        id: 30,
        imageSrc: 'assets/img/avatars/11.jpg',
        name: 'Hampton Golden',
        phone: '+1 (967) 549-3561',
        company: 'Accupharm',
        email: 'hampton.golden@accupharm.tv',
        selected: false,
        starred: true
    },
    {
        id: 31,
        imageSrc: 'assets/img/avatars/10.jpg',
        name: 'Becker Mejia',
        phone: '+16 (971) 587-3994',
        company: 'Zillacom',
        email: 'becker.mejia@zillacom.name',
        selected: false,
        starred: true
    },
    {
        id: 32,
        imageSrc: 'assets/img/avatars/9.jpg',
        name: 'Marks Benton',
        phone: '+25 (961) 567-2085',
        company: 'Emoltra',
        email: 'marks.benton@emoltra.info',
        selected: false,
        starred: true
    },
    {
        id: 33,
        imageSrc: 'assets/img/avatars/8.jpg',
        name: 'Mai Wade',
        phone: '+23 (970) 419-3433',
        company: 'Senmao',
        email: 'mai.wade@senmao.me',
        selected: false,
        starred: false
    },
    {
        id: 34,
        imageSrc: 'assets/img/avatars/7.jpg',
        name: 'Maldonado Moran',
        phone: '+6 (912) 523-3028',
        company: 'Autograte',
        email: 'maldonado.moran@autograte.net',
        selected: false,
        starred: true
    },
    {
        id: 35,
        imageSrc: 'assets/img/avatars/6.jpg',
        name: 'Jaclyn Maxwell',
        phone: '+39 (988) 424-2719',
        company: 'Ecratic',
        email: 'jaclyn.maxwell@ecratic.ca',
        selected: false,
        starred: false
    },
    {
        id: 36,
        imageSrc: 'assets/img/avatars/5.jpg',
        name: 'Carmela Barron',
        phone: '+44 (932) 469-3459',
        company: 'Xinware',
        email: 'carmela.barron@xinware.biz',
        selected: false,
        starred: false
    },
    {
        id: 37,
        imageSrc: 'assets/img/avatars/4.jpg',
        name: 'Araceli Velasquez',
        phone: '+43 (965) 579-3919',
        company: 'Capscreen',
        email: 'araceli.velasquez@capscreen.com',
        selected: false,
        starred: false
    },
    {
        id: 38,
        imageSrc: 'assets/img/avatars/3.jpg',
        name: 'Gonzales Randolph',
        phone: '+23 (951) 574-3150',
        company: 'Ronbert',
        email: 'gonzales.randolph@ronbert.biz',
        selected: false,
        starred: true
    },
    {
        id: 39,
        imageSrc: 'assets/img/avatars/2.jpg',
        name: 'Ramirez Burt',
        phone: '+24 (963) 484-3465',
        company: 'Quizmo',
        email: 'ramirez.burt@quizmo.org',
        selected: false,
        starred: false
    },
    {
        id: 40,
        imageSrc: 'assets/img/avatars/1.jpg',
        name: 'Jessica Frenz',
        phone: '+49 (332) 45-4234',
        company: 'Bongo',
        email: 'jessica.frenz@bongo.com',
        selected: false,
        starred: false
    }
];


/***/ })

}]);
//# sourceMappingURL=contacts-table-contacts-table-module-es2015.js.map