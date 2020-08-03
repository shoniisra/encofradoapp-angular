(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dialogs-components-dialogs-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-dialogs/components-dialogs.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-dialogs/components-dialogs.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout @stagger>\n\n  <vex-secondary-toolbar current=\"Dialogs\">\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Dialogs']\"></vex-breadcrumbs>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <vex-components-overview-dialogs @fadeInUp class=\"block\"></vex-components-overview-dialogs>\n\n    <!--\n    <h2 class=\"title mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          class=\"block w-10 h-10 rounded-full bg-primary-50 text-primary-500 mr-3\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icSettings\" height=\"20px\" width=\"20px\"></ic-icon>\n      </span>\n      <span @fadeInRight class=\"block\">Card Options</span>\n    </h2>\n    -->\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs-routing.module.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs-routing.module.ts ***!
          \*********************************************************************************************/
        /*! exports provided: ComponentsDialogsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsDialogsRoutingModule", function () { return ComponentsDialogsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_dialogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-dialogs.component */ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsDialogsComponent"]
                }
            ];
            var ComponentsDialogsRoutingModule = /** @class */ (function () {
                function ComponentsDialogsRoutingModule() {
                }
                return ComponentsDialogsRoutingModule;
            }());
            ComponentsDialogsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ComponentsDialogsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs.component.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1kaWFsb2dzL2NvbXBvbmVudHMtZGlhbG9ncy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: ComponentsDialogsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsDialogsComponent", function () { return ComponentsDialogsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            var ComponentsDialogsComponent = /** @class */ (function () {
                function ComponentsDialogsComponent() {
                }
                ComponentsDialogsComponent.prototype.ngOnInit = function () {
                };
                return ComponentsDialogsComponent;
            }());
            ComponentsDialogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-components-dialogs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-dialogs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-dialogs/components-dialogs.component.html")).default,
                    animations: [
                        _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger80ms"],
                        _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleIn400ms"],
                        _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInRight400ms"],
                        _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-dialogs.component.scss */ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.scss")).default]
                })
            ], ComponentsDialogsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs.module.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs.module.ts ***!
          \*************************************************************************************/
        /*! exports provided: ComponentsDialogsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsDialogsModule", function () { return ComponentsDialogsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_dialogs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-dialogs-routing.module */ "./src/app/pages/ui/components/components-dialogs/components-dialogs-routing.module.ts");
            /* harmony import */ var _components_dialogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components-dialogs.component */ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts");
            /* harmony import */ var _components_overview_components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components-overview/components/components-overview-dialogs/components-overview-dialogs.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.module.ts");
            /* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var ComponentsDialogsModule = /** @class */ (function () {
                function ComponentsDialogsModule() {
                }
                return ComponentsDialogsModule;
            }());
            ComponentsDialogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_dialogs_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsDialogsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _components_dialogs_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsDialogsRoutingModule"],
                        _components_overview_components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsOverviewDialogsModule"],
                        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"],
                        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_9__["ContainerModule"]
                    ]
                })
            ], ComponentsDialogsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-dialogs-components-dialogs-module-es2015.js.map
//# sourceMappingURL=components-dialogs-components-dialogs-module-es5.js.map
//# sourceMappingURL=components-dialogs-components-dialogs-module-es5.js.map