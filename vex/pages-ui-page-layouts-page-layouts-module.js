(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-page-layouts-page-layouts-module"],{

/***/ "./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PageLayoutsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsRoutingModule", function() { return PageLayoutsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'blank',
        loadChildren: () => __webpack_require__.e(/*! import() | blank-blank-module */ "blank-blank-module").then(__webpack_require__.bind(null, /*! ./blank/blank.module */ "./src/app/pages/ui/page-layouts/blank/blank.module.ts")).then(m => m.BlankModule),
    },
    {
        path: 'simple',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-page-layout-simple-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-page-layout-simple-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple/page-layout-simple.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.module.ts")).then(m => m.PageLayoutSimpleModule)
            },
            {
                path: 'tabbed',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts")).then(m => m.PageLayoutSimpleTabbedModule)
            },
            {
                path: 'large-header',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-large-header-page-layout-simple-large-header-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-large-header-page-layout-simple-large-header-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple-large-header/page-layout-simple-large-header.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts")).then(m => m.PageLayoutSimpleLargeHeaderModule)
            },
            {
                path: 'large-header/tabbed',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-large-header-tabbed-page-layout-simple-large-header-tabbed-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-large-header-tabbed-page-layout-simple-large-header-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module.ts")).then(m => m.PageLayoutSimpleLargeHeaderTabbedModule)
            }
        ]
    },
    {
        path: 'card',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-page-layout-card-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-page-layout-card-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card/page-layout-card.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.module.ts")).then(m => m.PageLayoutCardModule)
            },
            {
                path: 'tabbed',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-tabbed-page-layout-card-tabbed-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-tabbed-page-layout-card-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card-tabbed/page-layout-card-tabbed.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.module.ts")).then(m => m.PageLayoutCardTabbedModule)
            },
            {
                path: 'large-header',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-large-header-page-layout-card-large-header-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-large-header-page-layout-card-large-header-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card-large-header/page-layout-card-large-header.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.module.ts")).then(m => m.PageLayoutCardLargeHeaderModule)
            },
            {
                path: 'large-header/tabbed',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts")).then(m => m.PageLayoutCardLargeHeaderTabbedModule)
            }
        ]
    }
];
let PageLayoutsRoutingModule = class PageLayoutsRoutingModule {
};
PageLayoutsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PageLayoutsRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/page-layouts/page-layouts.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts.module.ts ***!
  \**************************************************************/
/*! exports provided: PageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layouts-routing.module */ "./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts");




let PageLayoutsModule = class PageLayoutsModule {
};
PageLayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutsRoutingModule"]
        ]
    })
], PageLayoutsModule);



/***/ })

}]);
//# sourceMappingURL=pages-ui-page-layouts-page-layouts-module.js.map