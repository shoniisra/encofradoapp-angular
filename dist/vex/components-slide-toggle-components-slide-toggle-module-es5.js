(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slide-toggle-components-slide-toggle-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.html": 
        /*!******************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.html ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout @stagger>\n\n  <vex-secondary-toolbar current=\"Slide Toggle\">\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Slide Toggle']\"></vex-breadcrumbs>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <vex-components-overview-slide-toggle @fadeInUp class=\"block\"></vex-components-overview-slide-toggle>\n\n    <!--\n    <h2 class=\"title mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          class=\"block w-10 h-10 rounded-full bg-primary-50 text-primary-500 mr-3\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icSettings\" height=\"20px\" width=\"20px\"></ic-icon>\n      </span>\n      <span @fadeInRight class=\"block\">Card Options</span>\n    </h2>\n    -->\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: ComponentsSlideToggleRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsSlideToggleRoutingModule", function () { return ComponentsSlideToggleRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-slide-toggle.component */ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsSlideToggleComponent"]
                }
            ];
            var ComponentsSlideToggleRoutingModule = /** @class */ (function () {
                function ComponentsSlideToggleRoutingModule() {
                }
                return ComponentsSlideToggleRoutingModule;
            }());
            ComponentsSlideToggleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ComponentsSlideToggleRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.scss": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.scss ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1zbGlkZS10b2dnbGUvY29tcG9uZW50cy1zbGlkZS10b2dnbGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts ***!
          \**************************************************************************************************/
        /*! exports provided: ComponentsSlideToggleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsSlideToggleComponent", function () { return ComponentsSlideToggleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            var ComponentsSlideToggleComponent = /** @class */ (function () {
                function ComponentsSlideToggleComponent() {
                }
                ComponentsSlideToggleComponent.prototype.ngOnInit = function () {
                };
                return ComponentsSlideToggleComponent;
            }());
            ComponentsSlideToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-components-slide-toggle',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-slide-toggle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.html")).default,
                    animations: [
                        _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger80ms"],
                        _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleIn400ms"],
                        _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"],
                        _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-slide-toggle.component.scss */ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.scss")).default]
                })
            ], ComponentsSlideToggleComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts ***!
          \***********************************************************************************************/
        /*! exports provided: ComponentsSlideToggleModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsSlideToggleModule", function () { return ComponentsSlideToggleModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-slide-toggle-routing.module */ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts");
            /* harmony import */ var _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components-slide-toggle.component */ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts");
            /* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module.ts");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var ComponentsSlideToggleModule = /** @class */ (function () {
                function ComponentsSlideToggleModule() {
                }
                return ComponentsSlideToggleModule;
            }());
            ComponentsSlideToggleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsSlideToggleComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsSlideToggleRoutingModule"],
                        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"],
                        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsOverviewSlideToggleModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__["ContainerModule"]
                    ]
                })
            ], ComponentsSlideToggleModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-slide-toggle-components-slide-toggle-module-es2015.js.map
//# sourceMappingURL=components-slide-toggle-components-slide-toggle-module-es5.js.map
//# sourceMappingURL=components-slide-toggle-components-slide-toggle-module-es5.js.map