(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-page-layout-simple-large-header-page-layout-simple-large-header-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\n  <vex-page-layout-header fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div vexContainer>\n      <h2 class=\"title m-0\">Simple - Large Header</h2>\n      <vex-breadcrumbs [crumbs]=\"['Page Layouts', 'Simple', 'Large Header']\"></vex-breadcrumbs>\n    </div>\n  </vex-page-layout-header>\n\n  <vex-page-layout-content vexContainer>\n    <vex-page-layout-demo></vex-page-layout-demo>\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");

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

/***/ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header-routing.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header-routing.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: PageLayoutSimpleLargeHeaderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleLargeHeaderRoutingModule", function() { return PageLayoutSimpleLargeHeaderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-simple-large-header.component */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts");




const routes = [
    {
        path: '',
        component: _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleLargeHeaderComponent"],
        data: {
            toolbarShadowEnabled: true
        }
    }
];
let PageLayoutSimpleLargeHeaderRoutingModule = class PageLayoutSimpleLargeHeaderRoutingModule {
};
PageLayoutSimpleLargeHeaderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PageLayoutSimpleLargeHeaderRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9zaW1wbGUvcGFnZS1sYXlvdXQtc2ltcGxlLWxhcmdlLWhlYWRlci9wYWdlLWxheW91dC1zaW1wbGUtbGFyZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PageLayoutSimpleLargeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleLargeHeaderComponent", function() { return PageLayoutSimpleLargeHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutSimpleLargeHeaderComponent = class PageLayoutSimpleLargeHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageLayoutSimpleLargeHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-page-layout-simple-large-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-layout-simple-large-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-layout-simple-large-header.component.scss */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.scss")).default]
    })
], PageLayoutSimpleLargeHeaderComponent);



/***/ }),

/***/ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PageLayoutSimpleLargeHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleLargeHeaderModule", function() { return PageLayoutSimpleLargeHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-simple-large-header-routing.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header-routing.module.ts");
/* harmony import */ var _page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-simple-large-header.component */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.component.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");











let PageLayoutSimpleLargeHeaderModule = class PageLayoutSimpleLargeHeaderModule {
};
PageLayoutSimpleLargeHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_layout_simple_large_header_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutSimpleLargeHeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _page_layout_simple_large_header_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleLargeHeaderRoutingModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutDemoModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]
        ]
    })
], PageLayoutSimpleLargeHeaderModule);



/***/ })

}]);
//# sourceMappingURL=simple-page-layout-simple-large-header-page-layout-simple-large-header-module-es2015.js.map