(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-page-layout-card-tabbed-page-layout-card-tabbed-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-more-vert.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/secondary-toolbar/secondary-toolbar.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"secondary-toolbar-placeholder\">&nbsp;</div>\n\n<div [ngClass]=\"{ 'fixed': fixed$ | async, 'w-full': !(fixed$ | async) }\"\n     class=\"secondary-toolbar shadow-b py-1 z-40 border-t\"\n     fxLayout=\"row\">\n  <div class=\"px-gutter\" fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\n    <h1 *ngIf=\"current\"\n        class=\"subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3\"\n        fxFlex.xs=\"auto\">{{ current }}</h1>\n\n    <ng-content></ng-content>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.html": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.html ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout mode=\"card\">\n\n  <vex-page-layout-header class=\"h-6\"></vex-page-layout-header>\n\n  <vex-page-layout-content vexContainer>\n    <div class=\"card\">\n      <mat-tab-group>\n        <mat-tab label=\"Main Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Side Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Extra Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Additional Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Another Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"One More Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Definitely the last Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Whoops another Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"And one last Tab\">\n          <div class=\"p-6\">\n            <vex-page-layout-demo></vex-page-layout-demo>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".secondary-toolbar {\n  background: var(--secondary-toolbar-background);\n  height: var(--secondary-toolbar-height);\n  margin-top: calc(var(--secondary-toolbar-height) * -1);\n}\n\n.secondary-toolbar.fixed {\n  width: var(--toolbar-width);\n}\n\n.secondary-toolbar-placeholder {\n  height: var(--secondary-toolbar-height);\n}\n\n::ng-deep .is-mobile .fixed {\n  width: 100%;\n}\n\n::ng-deep body .fixed {\n  width: calc(100% - var(--sidenav-width));\n}\n\n::ng-deep vex-breadcrumbs {\n  display: none;\n}\n\n@media (min-width: 600px) {\n  ::ng-deep vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nob25paXNyYS9Eb2N1bWVudG9zL1Byb3llY3Rvcy9lbmNvZnJhZG9BcHBfYW5ndWxhci9zcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvY29tcG9uZW50cy9zZWNvbmRhcnktdG9vbGJhci9zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzREFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NlY29uZGFyeS10b29sYmFyL3NlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZGFyeS10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpICogLTEpO1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIuZml4ZWQge1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogdmFyKC0tc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuOjpuZy1kZWVwIC5pcy1tb2JpbGUgLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBib2R5IC5maXhlZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhci5maXhlZCB7XG4gIHdpZHRoOiB2YXIoLS10b29sYmFyLXdpZHRoKTtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyLXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiB2YXIoLS1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xufVxuXG46Om5nLWRlZXAgLmlzLW1vYmlsZSAuZml4ZWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIGJvZHkgLmZpeGVkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtd2lkdGgpKTtcbn1cblxuOjpuZy1kZWVwIHZleC1icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICA6Om5nLWRlZXAgdmV4LWJyZWFkY3J1bWJzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts ***!
          \******************************************************************************/
        /*! exports provided: SecondaryToolbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryToolbarComponent", function () { return SecondaryToolbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/@vex/services/config.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var SecondaryToolbarComponent = /** @class */ (function () {
                function SecondaryToolbarComponent(configService) {
                    this.configService = configService;
                    this.fixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) { return config.toolbar.fixed; }));
                }
                SecondaryToolbarComponent.prototype.ngOnInit = function () {
                };
                return SecondaryToolbarComponent;
            }());
            SecondaryToolbarComponent.ctorParameters = function () { return [
                { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts ***!
          \***************************************************************************/
        /*! exports provided: SecondaryToolbarModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryToolbarModule", function () { return SecondaryToolbarModule; });
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
            var SecondaryToolbarModule = /** @class */ (function () {
                function SecondaryToolbarModule() {
                }
                return SecondaryToolbarModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed-routing.module.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed-routing.module.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: PageLayoutCardTabbedRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardTabbedRoutingModule", function () { return PageLayoutCardTabbedRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-card-tabbed.component */ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.ts");
            var routes = [
                {
                    path: '',
                    component: _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardTabbedComponent"]
                }
            ];
            var PageLayoutCardTabbedRoutingModule = /** @class */ (function () {
                function PageLayoutCardTabbedRoutingModule() {
                }
                return PageLayoutCardTabbedRoutingModule;
            }());
            PageLayoutCardTabbedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], PageLayoutCardTabbedRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.scss": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.scss ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9jYXJkL3BhZ2UtbGF5b3V0LWNhcmQtdGFiYmVkL3BhZ2UtbGF5b3V0LWNhcmQtdGFiYmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: PageLayoutCardTabbedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardTabbedComponent", function () { return PageLayoutCardTabbedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__);
            var PageLayoutCardTabbedComponent = /** @class */ (function () {
                function PageLayoutCardTabbedComponent() {
                    this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
                }
                PageLayoutCardTabbedComponent.prototype.ngOnInit = function () {
                };
                return PageLayoutCardTabbedComponent;
            }());
            PageLayoutCardTabbedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-page-layout-card-tabbed',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-layout-card-tabbed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-layout-card-tabbed.component.scss */ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.scss")).default]
                })
            ], PageLayoutCardTabbedComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.module.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.module.ts ***!
          \******************************************************************************************************/
        /*! exports provided: PageLayoutCardTabbedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardTabbedModule", function () { return PageLayoutCardTabbedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-card-tabbed-routing.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed-routing.module.ts");
            /* harmony import */ var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-card-tabbed.component */ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.component.ts");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../page-layout-demo/page-layout-demo.module */ "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
            /* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var PageLayoutCardTabbedModule = /** @class */ (function () {
                function PageLayoutCardTabbedModule() {
                }
                return PageLayoutCardTabbedModule;
            }());
            PageLayoutCardTabbedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_4__["PageLayoutCardTabbedComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardTabbedRoutingModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"],
                        _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutDemoModule"],
                        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_14__["ContainerModule"]
                    ]
                })
            ], PageLayoutCardTabbedModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=card-page-layout-card-tabbed-page-layout-card-tabbed-module-es2015.js.map
//# sourceMappingURL=card-page-layout-card-tabbed-page-layout-card-tabbed-module-es5.js.map
//# sourceMappingURL=card-page-layout-card-tabbed-page-layout-card-tabbed-module-es5.js.map