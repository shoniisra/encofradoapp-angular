(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout mode=\"card\">\n\n  <vex-page-layout-header fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div vexContainer>\n      <h2 class=\"title m-0\">Card - Large Header & Tabbed</h2>\n      <vex-breadcrumbs [crumbs]=\"['Page Layouts', 'Card', 'Large Header & Tabbed']\"></vex-breadcrumbs>\n    </div>\n  </vex-page-layout-header>\n\n  <vex-page-layout-content vexContainer>\n    <div class=\"card\">\n      <mat-tab-group>\n        <mat-tab label=\"Main Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Side Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Extra Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");

/***/ }),

/***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: PageLayoutCardLargeHeaderTabbedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderTabbedRoutingModule", function() { return PageLayoutCardLargeHeaderTabbedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-card-large-header-tabbed.component */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts");




const routes = [
    {
        path: '',
        component: _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardLargeHeaderTabbedComponent"]
    }
];
let PageLayoutCardLargeHeaderTabbedRoutingModule = class PageLayoutCardLargeHeaderTabbedRoutingModule {
};
PageLayoutCardLargeHeaderTabbedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PageLayoutCardLargeHeaderTabbedRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9jYXJkL3BhZ2UtbGF5b3V0LWNhcmQtbGFyZ2UtaGVhZGVyLXRhYmJlZC9wYWdlLWxheW91dC1jYXJkLWxhcmdlLWhlYWRlci10YWJiZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PageLayoutCardLargeHeaderTabbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderTabbedComponent", function() { return PageLayoutCardLargeHeaderTabbedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutCardLargeHeaderTabbedComponent = class PageLayoutCardLargeHeaderTabbedComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageLayoutCardLargeHeaderTabbedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-page-layout-card-large-header-tabbed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-layout-card-large-header-tabbed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-layout-card-large-header-tabbed.component.scss */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.scss")).default]
    })
], PageLayoutCardLargeHeaderTabbedComponent);



/***/ }),

/***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: PageLayoutCardLargeHeaderTabbedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardLargeHeaderTabbedModule", function() { return PageLayoutCardLargeHeaderTabbedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-card-large-header-tabbed-routing.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed-routing.module.ts");
/* harmony import */ var _page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-card-large-header-tabbed.component */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.component.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");











let PageLayoutCardLargeHeaderTabbedModule = class PageLayoutCardLargeHeaderTabbedModule {
};
PageLayoutCardLargeHeaderTabbedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_layout_card_large_header_tabbed_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutCardLargeHeaderTabbedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _page_layout_card_large_header_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardLargeHeaderTabbedRoutingModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_10__["ContainerModule"]
        ]
    })
], PageLayoutCardLargeHeaderTabbedModule);



/***/ })

}]);
//# sourceMappingURL=card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module-es2015.js.map