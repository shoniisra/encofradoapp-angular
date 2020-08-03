(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-cards-components-cards-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-cards/components-cards.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-cards/components-cards.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout @stagger>\n\n  <vex-secondary-toolbar current=\"Cards\">\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Cards']\"></vex-breadcrumbs>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <vex-components-overview-cards @fadeInUp class=\"block\"></vex-components-overview-cards>\n\n    <!--\n    <h2 class=\"title mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          class=\"block w-10 h-10 rounded-full bg-primary-50 text-primary-500 mr-3\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icSettings\" height=\"20px\" width=\"20px\"></ic-icon>\n      </span>\n      <span @fadeInRight class=\"block\">Card Options</span>\n    </h2>\n    -->\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-cards/components-cards-routing.module.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-cards/components-cards-routing.module.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ComponentsCardsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsCardsRoutingModule", function () { return ComponentsCardsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-cards.component */ "./src/app/pages/ui/components/components-cards/components-cards.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_cards_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsCardsComponent"]
                }
            ];
            var ComponentsCardsRoutingModule = /** @class */ (function () {
                function ComponentsCardsRoutingModule() {
                }
                return ComponentsCardsRoutingModule;
            }());
            ComponentsCardsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ComponentsCardsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-cards/components-cards.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-cards/components-cards.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1jYXJkcy9jb21wb25lbnRzLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-cards/components-cards.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-cards/components-cards.component.ts ***!
          \************************************************************************************/
        /*! exports provided: ComponentsCardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsCardsComponent", function () { return ComponentsCardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ "./node_modules/@iconify/icons-ic/twotone-settings.js");
            /* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            var ComponentsCardsComponent = /** @class */ (function () {
                function ComponentsCardsComponent() {
                    this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default.a;
                }
                ComponentsCardsComponent.prototype.ngOnInit = function () {
                };
                return ComponentsCardsComponent;
            }());
            ComponentsCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-components-cards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-cards/components-cards.component.html")).default,
                    animations: [
                        _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger80ms"],
                        _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__["scaleIn400ms"],
                        _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRight400ms"],
                        _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-cards.component.scss */ "./src/app/pages/ui/components/components-cards/components-cards.component.scss")).default]
                })
            ], ComponentsCardsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/components/components-cards/components-cards.module.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/ui/components/components-cards/components-cards.module.ts ***!
          \*********************************************************************************/
        /*! exports provided: ComponentsCardsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsCardsModule", function () { return ComponentsCardsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_cards_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-cards-routing.module */ "./src/app/pages/ui/components/components-cards/components-cards-routing.module.ts");
            /* harmony import */ var _components_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components-cards.component */ "./src/app/pages/ui/components/components-cards/components-cards.component.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components-overview/components/components-overview-buttons/components-overview-buttons.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.module.ts");
            /* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _components_overview_components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components-overview/components/components-overview-cards/components-overview-cards.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.module.ts");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var ComponentsCardsModule = /** @class */ (function () {
                function ComponentsCardsModule() {
                }
                return ComponentsCardsModule;
            }());
            ComponentsCardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_cards_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsCardsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _components_cards_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsCardsRoutingModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                        _components_overview_components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewButtonsModule"],
                        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_9__["SecondaryToolbarModule"],
                        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
                        _components_overview_components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewCardsModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]
                    ]
                })
            ], ComponentsCardsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=components-cards-components-cards-module-es2015.js.map
//# sourceMappingURL=components-cards-components-cards-module-es5.js.map
//# sourceMappingURL=components-cards-components-cards-module-es5.js.map