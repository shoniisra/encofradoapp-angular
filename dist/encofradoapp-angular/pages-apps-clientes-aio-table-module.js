(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-clientes-aio-table-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/clientes/aio-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/clientes/aio-table.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n  <vex-page-layout-header\n    class=\"pb-16\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center start\"\n  >\n    <div\n      [class.container]=\"layoutCtrl.value === 'boxed'\"\n      [class.px-gutter]=\"layoutCtrl.value === 'fullwidth'\"\n      class=\"w-full flex justify-between\"\n    >\n      <div>\n        <h1 class=\"title mt-0 mb-1\">Lista de Clientes</h1>\n        <vex-breadcrumbs [crumbs]=\"['App', 'Clientes']\"></vex-breadcrumbs>\n      </div>\n    </div>\n  </vex-page-layout-header>\n\n  <vex-page-layout-content\n    [class.container]=\"layoutCtrl.value === 'boxed'\"\n    [class.px-gutter]=\"layoutCtrl.value === 'fullwidth'\"\n    class=\"-mt-6\"\n  >\n    <div class=\"card overflow-auto -mt-16\">\n      <div\n        class=\"bg-app-bar px-6 h-16 border-b sticky left-0\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"start center\"\n      >\n        <h2\n          class=\"title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l\"\n          fxFlex=\"none\"\n          fxHide.xs\n        >\n          <span *ngIf=\"selection.isEmpty()\">Clientes</span>\n          <span *ngIf=\"selection.hasValue()\"\n            >{{ selection.selected.length }} Cliente<span\n              *ngIf=\"selection.selected.length > 1\"\n              >s</span\n            >\n            seleccionado<span *ngIf=\"selection.selected.length > 1\">s</span>\n          </span>\n        </h2>\n\n        <div\n          *ngIf=\"selection.hasValue()\"\n          class=\"mr-4 pr-4 border-r\"\n          fxFlex=\"none\"\n        >\n          <button\n            (click)=\"deleteCustomers(selection.selected)\"\n            color=\"primary\"\n            mat-icon-button\n            matTooltip=\"Delete selected\"\n            type=\"button\"\n          >\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n          </button>\n        </div>\n\n        <div\n          class=\"bg-card rounded-full border px-4\"\n          fxFlex=\"400px\"\n          fxFlex.lt-md=\"auto\"\n          fxHide.xs\n          fxLayout=\"row\"\n          fxLayoutAlign=\"start center\"\n        >\n          <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n          <input\n            [formControl]=\"searchCtrl\"\n            class=\"px-4 py-3 border-0 outline-none w-full bg-transparent\"\n            placeholder=\"Buscar...\"\n            type=\"search\"\n          />\n        </div>\n        <button\n          (click)=\"createCustomer()\"\n          class=\"ml-4\"\n          color=\"primary\"\n          fxFlex=\"none\"\n          mat-mini-fab\n          matTooltip=\"Crear Cliente\"\n          type=\"button\"\n        >\n          <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n        </button>\n        <span fxFlex></span>\n\n        <button\n          class=\"ml-4\"\n          fxFlex=\"none\"\n          fxHide.gt-xs\n          mat-icon-button\n          type=\"button\"\n        >\n          <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n        </button>\n\n        <button\n          [matMenuTriggerFor]=\"columnFilterMenu\"\n          class=\"ml-4\"\n          fxFlex=\"none\"\n          mat-icon-button\n          matTooltip=\"Editar Columnas\"\n          type=\"button\"\n        >\n          <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n        </button>\n      </div>\n\n      <table\n        @stagger\n        [dataSource]=\"dataSource\"\n        class=\"w-full\"\n        mat-table\n        matSort\n      >\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- Checkbox Column -->\n        <ng-container matColumnDef=\"checkbox\">\n          <th *matHeaderCellDef mat-header-cell>\n            <mat-checkbox\n              (change)=\"$event ? masterToggle() : null\"\n              [checked]=\"selection.hasValue() && isAllSelected()\"\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n              color=\"primary\"\n            >\n            </mat-checkbox>\n          </th>\n          <td *matCellDef=\"let row\" class=\"w-4\" mat-cell>\n            <mat-checkbox\n              (change)=\"$event ? selection.toggle(row) : null\"\n              (click)=\"$event.stopPropagation()\"\n              [checked]=\"selection.isSelected(row)\"\n              color=\"primary\"\n            >\n            </mat-checkbox>\n          </td>\n        </ng-container>\n\n        <!-- Text Columns -->\n        <ng-container *ngFor=\"let column of columns; trackBy: trackByProperty\">\n          <ng-container\n            *ngIf=\"column.type === 'text'\"\n            [matColumnDef]=\"column.property\"\n          >\n            <th\n              *matHeaderCellDef\n              class=\"uppercase\"\n              mat-header-cell\n              mat-sort-header\n            >\n              {{ column.label }}\n            </th>\n            <td *matCellDef=\"let row\" [ngClass]=\"column.cssClasses\" mat-cell>\n              {{ row[column.property] }}\n            </td>\n          </ng-container>\n        </ng-container>\n\n        <!-- Contact Column -->\n        <ng-container matColumnDef=\"contact\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header></th>\n          <td *matCellDef=\"let row\" mat-cell>\n            <div class=\"flex\">\n              <a\n                (click)=\"$event.stopPropagation()\"\n                [style.background-color]=\"\n                  theme.colors.primary['500'] | colorFade: 0.9\n                \"\n                [style.color]=\"theme.colors.primary['500']\"\n                class=\"w-8 h-8 leading-none flex items-center justify-center hover:bg-hover\"\n                mat-icon-button\n              >\n                <mat-icon [icIcon]=\"icPhone\" size=\"18px\"></mat-icon>\n              </a>\n\n              <a\n                (click)=\"$event.stopPropagation()\"\n                [style.background-color]=\"\n                  theme.colors.teal['500'] | colorFade: 0.9\n                \"\n                [style.color]=\"theme.colors.teal['500']\"\n                class=\"w-8 h-8 leading-none flex items-center justify-center ml-1 hover:bg-hover\"\n                mat-icon-button\n              >\n                <mat-icon [icIcon]=\"icMail\" size=\"18px\"></mat-icon>\n              </a>\n\n              <a\n                (click)=\"$event.stopPropagation()\"\n                [style.background-color]=\"\n                  theme.colors.green['500'] | colorFade: 0.9\n                \"\n                [style.color]=\"theme.colors.green['500']\"\n                class=\"w-8 h-8 leading-none flex items-center justify-center ml-1 hover:bg-hover\"\n                mat-icon-button\n              >\n                <mat-icon [icIcon]=\"icMap\" size=\"18px\"></mat-icon>\n              </a>\n            </div>\n          </td>\n        </ng-container>\n\n        <!-- Action Column -->\n        <ng-container matColumnDef=\"actions\">\n          <th *matHeaderCellDef mat-header-cell mat-sort-header></th>\n          <td *matCellDef=\"let row\" class=\"w-10 text-secondary\" mat-cell>\n            <button\n              (click)=\"$event.stopPropagation()\"\n              [matMenuTriggerData]=\"{ customer: row }\"\n              [matMenuTriggerFor]=\"actionsMenu\"\n              mat-icon-button\n              type=\"button\"\n            >\n              <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n          </td>\n        </ng-container>\n\n        <tr *matHeaderRowDef=\"visibleColumns\" mat-header-row></tr>\n        <tr\n          (click)=\"updateCustomer(row)\"\n          *matRowDef=\"let row; columns: visibleColumns\"\n          @fadeInUp\n          class=\"hover:bg-hover trans-ease-out cursor-pointer\"\n          mat-row\n        ></tr>\n      </table>\n\n      <mat-paginator\n        [pageSizeOptions]=\"pageSizeOptions\"\n        [pageSize]=\"pageSize\"\n        class=\"sticky left-0\"\n      ></mat-paginator>\n    </div>\n  </vex-page-layout-content>\n</vex-page-layout>\n\n<mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <button\n    (click)=\"toggleColumnVisibility(column, $event)\"\n    *ngFor=\"let column of columns\"\n    class=\"checkbox-item mat-menu-item\"\n  >\n    <mat-checkbox\n      (click)=\"$event.stopPropagation()\"\n      [(ngModel)]=\"column.visible\"\n      color=\"primary\"\n    >\n      {{ column.label }}\n    </mat-checkbox>\n  </button>\n</mat-menu>\n\n<mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n  <ng-template let-customer=\"customer\" matMenuContent>\n    <button (click)=\"updateCustomer(customer)\" mat-menu-item>\n      <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n      <span>Modificar</span>\n    </button>\n    <button (click)=\"deleteCustomer(customer)\" mat-menu-item>\n      <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n      <span>Eliminar</span>\n    </button>\n  </ng-template>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"save()\" [formGroup]=\"form\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-dialog-title>\n    <h2\n      *ngIf=\"form.get('nombre').value || form.get('nombre2').value\"\n      class=\"headline m-0\"\n      fxFlex=\"auto\"\n    >\n      {{ form.get(\"nombre\").value + \" \" + form.get(\"nombre2\").value }}\n    </h2>\n    <h2\n      *ngIf=\"!form.get('nombre').value && !form.get('nombre2').value\"\n      class=\"headline m-0\"\n      fxFlex=\"auto\"\n    >\n      Nuevo Cliente\n    </h2>\n\n    <button\n      class=\"text-secondary\"\n      mat-dialog-close\n      mat-icon-button\n      type=\"button\"\n    >\n      <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n  </div>\n\n  <mat-divider class=\"-mx-6 text-border\"></mat-divider>\n\n  <mat-dialog-content fxLayout=\"column\">\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"24px\">\n      <mat-form-field class=\"mt-6\" fxFlex>\n        <mat-label>Nombre</mat-label>\n        <input cdkFocusInitial formControlName=\"nombre\" matInput required />\n\n        <mat-icon [icIcon]=\"icPerson\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"mt-6\" fxFlex>\n        <mat-label>Apellido</mat-label>\n        <input formControlName=\"nombre2\" matInput />\n\n        <mat-icon [icIcon]=\"icPerson\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"24px\">\n      <mat-form-field fxFlex>\n        <mat-label>Cédula</mat-label>\n        <input\n          formControlName=\"cedula\"\n          matInput\n          type=\"text\"\n          (keypress)=\"onlyNumberKey($event)\"\n          required\n        />\n\n        <mat-icon [icIcon]=\"icMyLocation\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n\n      <mat-form-field fxFlex>\n        <mat-label>Email</mat-label>\n        <input formControlName=\"email\" matInput type=\"email\" />\n\n        <mat-icon [icIcon]=\"icLocationCity\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap.gt-sm=\"24px\">\n      <mat-form-field fxFlex>\n        <mat-label>telf1</mat-label>\n        <input formControlName=\"telf1\" matInput type=\"number\" />\n\n        <mat-icon [icIcon]=\"icPhone\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n\n      <mat-form-field fxFlex>\n        <mat-label>telf2</mat-label>\n        <input formControlName=\"telf2\" matInput type=\"number\" />\n\n        <mat-icon [icIcon]=\"icPhone\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n      <mat-form-field fxFlex>\n        <mat-label>telf3</mat-label>\n        <input formControlName=\"telf3\" matInput type=\"number\" />\n\n        <mat-icon [icIcon]=\"icPhone\" class=\"mr-3\" matPrefix></mat-icon>\n      </mat-form-field>\n    </div>\n    <mat-form-field>\n      <mat-label>Direccion</mat-label>\n      <input formControlName=\"direccion\" matInput />\n\n      <mat-icon [icIcon]=\"icEditLocation\" class=\"mr-3\" matPrefix></mat-icon>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Direccion 2</mat-label>\n      <input formControlName=\"direccion2\" matInput />\n\n      <mat-icon [icIcon]=\"icEditLocation\" class=\"mr-3\" matPrefix></mat-icon>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Notas</mat-label>\n      <textarea formControlName=\"observacion\" matInput></textarea>\n    </mat-form-field>\n  </mat-dialog-content>\n\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close type=\"button\">CANCELAR</button>\n    <button *ngIf=\"isCreateMode()\" color=\"primary\" mat-button type=\"submit\">\n      CREAR CLIENTE\n    </button>\n    <button *ngIf=\"isUpdateMode()\" color=\"primary\" mat-button type=\"submit\">\n      GUARDAR CAMBIOS\n    </button>\n  </mat-dialog-actions>\n</form>\n");

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

/***/ "./src/app/models/cliente.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/cliente.model.ts ***!
  \*****************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cliente {
    constructor(customer) {
        this.id = customer.id;
        this.cedula = customer.cedula;
        this.direccion = customer.direccion;
        this.direccion2 = customer.direccion2;
        this.email = customer.email;
        this.nombre = customer.nombre;
        this.nombre2 = customer.nombre2;
        this.observacion = customer.observacion;
        this.telf1 = customer.telf1;
        this.telf2 = customer.telf2;
        this.telf3 = customer.telf3;
    }
    get name() {
        let name = '';
        if (this.nombre && this.nombre2) {
            name = this.nombre + ' ' + this.nombre2;
        }
        else if (this.nombre) {
            name = this.nombre;
        }
        else if (this.nombre2) {
            name = this.nombre2;
        }
        return name;
    }
    set name(value) {
    }
    get address() {
        return `${this.direccion}, ${this.direccion2}`;
    }
    set address(value) {
    }
}


/***/ }),

/***/ "./src/app/pages/apps/clientes/aio-table-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/apps/clientes/aio-table-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AioTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AioTableRoutingModule", function() { return AioTableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aio_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aio-table.component */ "./src/app/pages/apps/clientes/aio-table.component.ts");




const routes = [
    {
        path: '',
        component: _aio_table_component__WEBPACK_IMPORTED_MODULE_3__["AioTableComponent"],
        data: {
            toolbarShadowEnabled: true
        }
    }
];
let AioTableRoutingModule = class AioTableRoutingModule {
};
AioTableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AioTableRoutingModule);



/***/ }),

/***/ "./src/app/pages/apps/clientes/aio-table.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/apps/clientes/aio-table.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY2xpZW50ZXMvYWlvLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/apps/clientes/aio-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/apps/clientes/aio-table.component.ts ***!
  \************************************************************/
/*! exports provided: AioTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AioTableComponent", function() { return AioTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@vex/utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-folder */ "./node_modules/@iconify/icons-ic/twotone-folder.js");
/* harmony import */ var _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
/* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-map */ "./node_modules/@iconify/icons-ic/twotone-map.js");
/* harmony import */ var _iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var src_app_models_cliente_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/models/cliente.model */ "./src/app/models/cliente.model.ts");
/* harmony import */ var src_app_services_clientes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/services/clientes */ "./src/app/services/clientes.ts");
/* harmony import */ var _graphql_DeleteClienteGQL__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./graphql/DeleteClienteGQL */ "./src/app/pages/apps/clientes/graphql/DeleteClienteGQL.ts");
/* harmony import */ var _customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./customer-create-update/customer-create-update.component */ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.ts");












//iconos










//Manejo de Datos





//Modelo




const GetClientes = src_app_services_clientes__WEBPACK_IMPORTED_MODULE_27__["queryGetClientes"];
let AioTableComponent = class AioTableComponent {
    constructor(dialog, apollo, deleteClienteGQL) {
        this.dialog = dialog;
        this.apollo = apollo;
        this.deleteClienteGQL = deleteClienteGQL;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("fullwidth");
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_22__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.columns = [
            {
                label: "Checkbox",
                property: "checkbox",
                type: "checkbox",
                visible: true,
            },
            { label: "cedula", property: "cedula", type: "text", visible: true },
            { label: "nombre", property: "nombre", type: "text", visible: true },
            { label: "nombre2", property: "nombre2", type: "text", visible: true },
            { label: "email", property: "email", type: "text", visible: false },
            { label: "telf1", property: "telf1", type: "text", visible: true },
            { label: "telf2", property: "telf2", type: "text", visible: true },
            { label: "telf3", property: "telf3", type: "text", visible: false },
            { label: "direccion", property: "direccion", type: "text", visible: true },
            {
                label: "direccion2",
                property: "direccion2",
                type: "text",
                visible: false,
            },
            {
                label: "observacion",
                property: "observacion",
                type: "text",
                visible: true,
            },
            { label: "Actions", property: "actions", type: "button", visible: true },
        ];
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 20, 50];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icMap = _iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icFolder = _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
    get visibleColumns() {
        return this.columns
            .filter((column) => column.visible)
            .map((column) => column.property);
    }
    getData() {
        this.data = this.apollo
            .watchQuery({ query: GetClientes })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["map"])(({ data }) => data.cliente));
        return this.data;
    }
    ngOnInit() {
        this.getData().subscribe((customers) => {
            this.subject$.next(customers);
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_23__["filter"])(Boolean)).subscribe((customers) => {
            this.customers = customers;
            this.dataSource.data = customers;
        });
        this.searchCtrl.valueChanges
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_24__["untilDestroyed"])(this))
            .subscribe((value) => this.onFilterChange(value));
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    createCustomer() {
        console.log(this.searchCtrl.value);
        this.dialog
            .open(_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_29__["CustomerCreateUpdateComponent"])
            .afterClosed()
            .subscribe((customer) => {
            if (customer) {
                this.customers.unshift(new src_app_models_cliente_model__WEBPACK_IMPORTED_MODULE_26__["Cliente"](customer));
                this.subject$.next(this.customers);
            }
        });
    }
    updateCustomer(customer) {
        this.dialog
            .open(_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_29__["CustomerCreateUpdateComponent"], {
            data: customer,
        })
            .afterClosed()
            .subscribe((updatedCustomer) => {
            /**
             * Customer is the updated customer (if the user pressed Save - otherwise it's null)
             */
            if (updatedCustomer) {
                /**
                 * Here we are updating our local array.
                 * You would probably make an HTTP request here.
                 */
                const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
                this.customers[index] = new src_app_models_cliente_model__WEBPACK_IMPORTED_MODULE_26__["Cliente"](updatedCustomer);
                this.subject$.next(this.customers);
            }
        });
    }
    deleteCustomer(customer) {
        this.deleteClienteGQL.mutate({ id: customer.id }).subscribe();
        this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
        this.selection.deselect(customer);
        this.subject$.next(this.customers);
    }
    deleteCustomers(customers) {
        customers.forEach((c) => this.deleteCustomer(c));
    }
    onFilterChange(value) {
        if (!this.dataSource) {
            return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
    }
    toggleColumnVisibility(column, event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        column.visible = !column.visible;
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((row) => this.selection.select(row));
    }
    trackByProperty(index, column) {
        return column.property;
    }
    ngOnDestroy() { }
};
AioTableComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_25__["Apollo"] },
    { type: _graphql_DeleteClienteGQL__WEBPACK_IMPORTED_MODULE_28__["DeleteClienteGQL"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AioTableComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], AioTableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], AioTableComponent.prototype, "sort", void 0);
AioTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "vex-aio-table",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aio-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/clientes/aio-table.component.html")).default,
        animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_9__["fadeInUp400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger40ms"]],
        providers: [
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
                useValue: {
                    appearance: "standard",
                },
            },
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aio-table.component.scss */ "./src/app/pages/apps/clientes/aio-table.component.scss")).default]
    })
], AioTableComponent);



/***/ }),

/***/ "./src/app/pages/apps/clientes/aio-table.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/apps/clientes/aio-table.module.ts ***!
  \*********************************************************/
/*! exports provided: AioTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AioTableModule", function() { return AioTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../@vex/pipes/color/color-fade.module */ "./src/@vex/pipes/color/color-fade.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _aio_table_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./aio-table-routing.module */ "./src/app/pages/apps/clientes/aio-table-routing.module.ts");
/* harmony import */ var _aio_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./aio-table.component */ "./src/app/pages/apps/clientes/aio-table.component.ts");
/* harmony import */ var _customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customer-create-update/customer-create-update.module */ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.module.ts");























let AioTableModule = class AioTableModule {
};
AioTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_aio_table_component__WEBPACK_IMPORTED_MODULE_21__["AioTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _aio_table_routing_module__WEBPACK_IMPORTED_MODULE_20__["AioTableRoutingModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbsModule"],
            _customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_22__["CustomerCreateUpdateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_18__["ColorFadeModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"]
        ]
    })
], AioTableModule);



/***/ }),

/***/ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY2xpZW50ZXMvY3VzdG9tZXItY3JlYXRlLXVwZGF0ZS9jdXN0b21lci1jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CustomerCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateUpdateComponent", function() { return CustomerCreateUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-cloud-download */ "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
/* harmony import */ var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
/* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ "./node_modules/@iconify/icons-ic/twotone-person.js");
/* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-my-location */ "./node_modules/@iconify/icons-ic/twotone-my-location.js");
/* harmony import */ var _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-location-city */ "./node_modules/@iconify/icons-ic/twotone-location-city.js");
/* harmony import */ var _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit-location */ "./node_modules/@iconify/icons-ic/twotone-edit-location.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_models_cliente_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/models/cliente.model */ "./src/app/models/cliente.model.ts");
/* harmony import */ var _graphql_CreateClienteGQL__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../graphql/CreateClienteGQL */ "./src/app/pages/apps/clientes/graphql/CreateClienteGQL.ts");
/* harmony import */ var _graphql_UpdateClienteGQL__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../graphql/UpdateClienteGQL */ "./src/app/pages/apps/clientes/graphql/UpdateClienteGQL.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var CustomerCreateUpdateComponent_1;




//icons










//model




let CustomerCreateUpdateComponent = CustomerCreateUpdateComponent_1 = class CustomerCreateUpdateComponent {
    constructor(defaults, dialogRef, fb, snackBar, createClienteGQL, updateClienteGQL) {
        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.createClienteGQL = createClienteGQL;
        this.updateClienteGQL = updateClienteGQL;
        this.mode = "create";
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icMyLocation = _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icLocationCity = _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icEditLocation = _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9___default.a;
    }
    ngOnInit() {
        if (this.defaults) {
            this.mode = "update";
        }
        else {
            this.defaults = {};
        }
        this.form = this.fb.group({
            id: [CustomerCreateUpdateComponent_1.id++],
            cedula: [this.defaults.cedula || ""],
            direccion: [this.defaults.direccion || ""],
            direccion2: [this.defaults.direccion2 || ""],
            email: [this.defaults.email || ""],
            nombre: [this.defaults.nombre || ""],
            nombre2: [this.defaults.nombre2 || ""],
            observacion: [this.defaults.observacion || ""],
            telf1: [this.defaults.telf1 || ""],
            telf2: [this.defaults.telf2 || ""],
            telf3: [this.defaults.telf3 || ""],
        });
    }
    save() {
        if (this.mode === "create") {
            this.createCustomer();
        }
        else if (this.mode === "update") {
            this.updateCustomer();
        }
    }
    onlyNumberKey(event) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    }
    openSnackbar(mensaje) {
        this.snackBar.open(mensaje, "cerrar", {
            duration: 3000,
            horizontalPosition: "right",
        });
    }
    validateForm(customer) {
        if (this.validarCedula(customer.cedula)) {
            if (customer.nombre.length > 0 &&
                customer.nombre != null &&
                customer.nombre != undefined) {
                return true;
            }
            else {
                this.openSnackbar("Nombre no válido");
            }
        }
        return false;
    }
    createCustomer() {
        let customer;
        customer = this.form.value;
        //Aqui validaciones
        if (this.validateForm(customer)) {
            this.createClienteGQL
                .mutate({
                cedula: customer.cedula,
                direccion: customer.direccion,
                direccion2: customer.direccion2,
                email: customer.email,
                nombre: customer.nombre,
                nombre2: customer.nombre2,
                observacion: customer.observacion,
                telf1: customer.telf1,
                telf2: customer.telf2,
                telf3: customer.telf3,
            })
                .subscribe(({ data }) => {
                this.openSnackbar("Cliente Guardado Exitosamente");
                this.dialogRef.close(customer);
            }, (error) => {
                console.log("Error al Guardar el cliente", error);
                this.openSnackbar("Error al Guardar el cliente");
            });
        }
    }
    validarCedula(cedula) {
        if (cedula.length == 13) {
            let digito_ruc = cedula.substring(10, 13);
            if (digito_ruc == "001") {
                cedula = cedula.substring(0, 10);
            }
        }
        if (cedula.length == 10) {
            //Obtenemos el digito de la region que sonlos dos primeros digitos
            let digito_region = cedula.substring(0, 2);
            //Pregunto si la region existe ecuador se divide en 24 regiones
            if (parseInt(digito_region) >= 1 && parseInt(digito_region) <= 24) {
                // Extraigo el ultimo digito
                let ultimo_digito = parseInt(cedula.substring(9, 10));
                //Agrupo todos los pares y los sumo
                let pares = parseInt(cedula.substring(1, 2)) +
                    parseInt(cedula.substring(3, 4)) +
                    parseInt(cedula.substring(5, 6)) +
                    parseInt(cedula.substring(7, 8));
                //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
                let numero1 = parseInt(cedula.substring(0, 1));
                numero1 = numero1 * 2;
                if (numero1 > 9) {
                    numero1 = numero1 - 9;
                }
                let numero3 = parseInt(cedula.substring(2, 3));
                numero3 = numero3 * 2;
                if (numero3 > 9) {
                    numero3 = numero3 - 9;
                }
                let numero5 = parseInt(cedula.substring(4, 5));
                numero5 = numero5 * 2;
                if (numero5 > 9) {
                    numero5 = numero5 - 9;
                }
                let numero7 = parseInt(cedula.substring(6, 7));
                numero7 = numero7 * 2;
                if (numero7 > 9) {
                    numero7 = numero7 - 9;
                }
                let numero9 = parseInt(cedula.substring(8, 9));
                numero9 = numero9 * 2;
                if (numero9 > 9) {
                    numero9 = numero9 - 9;
                }
                let impares = numero1 + numero3 + numero5 + numero7 + numero9;
                //Suma total
                let suma_total = pares + impares;
                //extraemos el primero digito
                let primer_digito_suma = String(suma_total).substring(0, 1);
                //Obtenemos la decena inmediata
                let decena = (parseInt(primer_digito_suma) + 1) * 10;
                //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
                let digito_validador = decena - suma_total;
                //Si el digito validador es = a 10 toma el valor de 0
                if (digito_validador == 10)
                    digito_validador = 0;
                //Validamos que el digito validador sea igual al de la cedula
                if (digito_validador == ultimo_digito) {
                    return true;
                }
                else {
                    this.openSnackbar("la cedula:" + cedula + " es incorrecta");
                }
            }
            else {
                // imprimimos en consola si la region no pertenece
                this.openSnackbar("Esta cedula no pertenece a ninguna region");
            }
        }
        else {
            //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
            this.openSnackbar("A esa cédula le falta o le sobran números ");
        }
        return false;
    }
    updateCustomer() {
        let customer;
        customer = this.form.value;
        customer.id = this.defaults.id;
        //Aqui validaciones
        if (this.validateForm(customer)) {
            this.updateClienteGQL
                .mutate({
                id: customer.id,
                cedula: customer.cedula,
                direccion: customer.direccion,
                direccion2: customer.direccion2,
                email: customer.email,
                nombre: customer.nombre,
                nombre2: customer.nombre2,
                observacion: customer.observacion,
                telf1: customer.telf1,
                telf2: customer.telf2,
                telf3: customer.telf3,
            })
                .subscribe(({ data }) => {
                this.openSnackbar("Cliente Guardado Exitosamente");
                this.dialogRef.close(customer);
            }, (error) => {
                console.log("Error al Guardar el cliente", error);
                this.openSnackbar("Error al Guardar el cliente");
            });
        }
    }
    isCreateMode() {
        return this.mode === "create";
    }
    isUpdateMode() {
        return this.mode === "update";
    }
};
CustomerCreateUpdateComponent.id = 100;
CustomerCreateUpdateComponent.ctorParameters = () => [
    { type: src_app_models_cliente_model__WEBPACK_IMPORTED_MODULE_14__["Cliente"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"] },
    { type: _graphql_CreateClienteGQL__WEBPACK_IMPORTED_MODULE_15__["CreateClienteGQL"] },
    { type: _graphql_UpdateClienteGQL__WEBPACK_IMPORTED_MODULE_16__["UpdateClienteGQL"] }
];
CustomerCreateUpdateComponent = CustomerCreateUpdateComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "vex-customer-create-update",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-create-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-create-update.component.scss */ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], CustomerCreateUpdateComponent);



/***/ }),

/***/ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/apps/clientes/customer-create-update/customer-create-update.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomerCreateUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateUpdateModule", function() { return CustomerCreateUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _customer_create_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-create-update.component */ "./src/app/pages/apps/clientes/customer-create-update/customer-create-update.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
















let CustomerCreateUpdateModule = class CustomerCreateUpdateModule {
};
CustomerCreateUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"]
        ],
        declarations: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_11__["CustomerCreateUpdateComponent"]],
        entryComponents: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_11__["CustomerCreateUpdateComponent"]],
        exports: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_11__["CustomerCreateUpdateComponent"]]
    })
], CustomerCreateUpdateModule);



/***/ }),

/***/ "./src/app/pages/apps/clientes/graphql/CreateClienteGQL.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/apps/clientes/graphql/CreateClienteGQL.ts ***!
  \*****************************************************************/
/*! exports provided: CreateClienteGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClienteGQL", function() { return CreateClienteGQL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




let CreateClienteGQL = class CreateClienteGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Mutation"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
    mutation MyMutation(
      $cedula: String!
      $direccion: String!
      $direccion2: String!
      $email: String!
      $nombre: String!
      $nombre2: String!
      $observacion: String!
      $telf1: String!
      $telf2: String!
      $telf3: String!
    ) {
      insert_cliente_one(
        object: {
          cedula: $cedula,
          direccion: $direccion ,
          direccion2: $direccion2 ,
          email: $email ,
          nombre: $nombre ,
          nombre2: $nombre2 ,
          observacion: $observacion,
          telf1: $telf1,
          telf2: $telf2,
          telf3: $telf3
        }
      ) {
        id
      }
    }
  `;
    }
};
CreateClienteGQL = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CreateClienteGQL);



/***/ }),

/***/ "./src/app/pages/apps/clientes/graphql/DeleteClienteGQL.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/apps/clientes/graphql/DeleteClienteGQL.ts ***!
  \*****************************************************************/
/*! exports provided: DeleteClienteGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClienteGQL", function() { return DeleteClienteGQL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




let DeleteClienteGQL = class DeleteClienteGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Mutation"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
    mutation MyMutation($id: Int!) {
        delete_cliente_by_pk(id: $id) {
        id
      }
    }
  `;
    }
};
DeleteClienteGQL = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DeleteClienteGQL);



/***/ }),

/***/ "./src/app/pages/apps/clientes/graphql/UpdateClienteGQL.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/apps/clientes/graphql/UpdateClienteGQL.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateClienteGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClienteGQL", function() { return UpdateClienteGQL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




let UpdateClienteGQL = class UpdateClienteGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Mutation"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a `
    mutation MyMutation(
      $id: Int!
      $cedula: String!
      $direccion: String!
      $direccion2: String!
      $email: String!
      $nombre: String!
      $nombre2: String!
      $observacion: String!
      $telf1: String!
      $telf2: String!
      $telf3: String!
    ) {
      update_cliente(
        _set: {
          cedula: $cedula
          direccion: $direccion
          direccion2: $direccion2
          email: $email
          nombre: $nombre
          nombre2: $nombre2
          observacion: $observacion
          telf1: $telf1
          telf2: $telf2
          telf3: $telf3
        }
        where: { id: { _eq: $id } }
      ) {
        returning {
          id
        }
      }
    }
  `;
    }
};
UpdateClienteGQL = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UpdateClienteGQL);



/***/ }),

/***/ "./src/app/services/clientes.ts":
/*!**************************************!*\
  !*** ./src/app/services/clientes.ts ***!
  \**************************************/
/*! exports provided: queryGetClientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryGetClientes", function() { return queryGetClientes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


const queryGetClientes = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a `
  query allPosts {
    cliente {
      id
      cedula
      direccion
      direccion2
      email
      nombre
      nombre2
      observacion
      telf1
      telf2
      telf3
    }
  }
`;


/***/ })

}]);
//# sourceMappingURL=pages-apps-clientes-aio-table-module.js.map