(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progress-spinner-components-progress-spinner-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.html": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.html ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout @stagger>\n\n  <vex-secondary-toolbar current=\"Progress Spinner\">\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Progress Spinner']\"></vex-breadcrumbs>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <vex-components-overview-progress-spinner @fadeInUp class=\"block\"></vex-components-overview-progress-spinner>\n\n    <!--\n    <h2 class=\"title mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          class=\"block w-10 h-10 rounded-full bg-primary-50 text-primary-500 mr-3\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icSettings\" height=\"20px\" width=\"20px\"></ic-icon>\n      </span>\n      <span @fadeInRight class=\"block\">Card Options</span>\n    </h2>\n    -->\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner-routing.module.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner-routing.module.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: ComponentsProgressSpinnerRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsProgressSpinnerRoutingModule", function () { return ComponentsProgressSpinnerRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-progress-spinner.component */ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsProgressSpinnerComponent"]
                }
            ];
            var ComponentsProgressSpinnerRoutingModule = /** @class */ (function () {
                function ComponentsProgressSpinnerRoutingModule() {
                }
                return ComponentsProgressSpinnerRoutingModule;
            }());
            ComponentsProgressSpinnerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ComponentsProgressSpinnerRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.scss": 
        /*!************************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.scss ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1wcm9ncmVzcy1zcGlubmVyL2NvbXBvbmVudHMtcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: ComponentsProgressSpinnerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsProgressSpinnerComponent", function () { return ComponentsProgressSpinnerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            var ComponentsProgressSpinnerComponent = /** @class */ (function () {
                function ComponentsProgressSpinnerComponent() {
                }
                ComponentsProgressSpinnerComponent.prototype.ngOnInit = function () {
                };
                return ComponentsProgressSpinnerComponent;
            }());
            ComponentsProgressSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-components-progress-spinner',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-progress-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.html")).default,
                    animations: [
                        _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger80ms"],
                        _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleIn400ms"],
                        _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"],
                        _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-progress-spinner.component.scss */ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.scss")).default]
                })
            ], ComponentsProgressSpinnerComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.module.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.module.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: ComponentsProgressSpinnerModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsProgressSpinnerModule", function () { return ComponentsProgressSpinnerModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-progress-spinner-routing.module */ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner-routing.module.ts");
            /* harmony import */ var _components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components-progress-spinner.component */ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.component.ts");
            /* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module.ts");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var ComponentsProgressSpinnerModule = /** @class */ (function () {
                function ComponentsProgressSpinnerModule() {
                }
                return ComponentsProgressSpinnerModule;
            }());
            ComponentsProgressSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_progress_spinner_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsProgressSpinnerComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _components_progress_spinner_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsProgressSpinnerRoutingModule"],
                        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"],
                        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _components_overview_components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsOverviewProgressSpinnerModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__["ContainerModule"]
                    ]
                })
            ], ComponentsProgressSpinnerModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-progress-spinner-components-progress-spinner-module-es2015.js.map
//# sourceMappingURL=components-progress-spinner-components-progress-spinner-module-es5.js.map
//# sourceMappingURL=components-progress-spinner-components-progress-spinner-module-es5.js.map