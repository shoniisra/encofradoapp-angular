(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-blank-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-home.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-home.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z\" fill=\"currentColor\"/>",
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/blank/blank.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/blank/blank.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-secondary-toolbar [crumbs]=\"['Blank Page']\" current=\"Blank Page\"></vex-secondary-toolbar>\n\n<div class=\"p-gutter\" vexContainer>\n  <h3 class=\"title m-0\">Content comes here...</h3>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts ***!
          \****************************************************************************/
        /*! exports provided: BreadcrumbComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () { return BreadcrumbComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BreadcrumbComponent = /** @class */ (function () {
                function BreadcrumbComponent() {
                }
                BreadcrumbComponent.prototype.ngOnInit = function () {
                };
                return BreadcrumbComponent;
            }());
            BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-breadcrumb',
                    template: "\n      <ng-content></ng-content>\n  ",
                    host: {
                        class: 'vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
                    }
                })
            ], BreadcrumbComponent);
            /***/ 
        }),
        /***/ "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/@vex/components/breadcrumbs/breadcrumbs.component.ts ***!
          \******************************************************************/
        /*! exports provided: BreadcrumbsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () { return BreadcrumbsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-home */ "./node_modules/@iconify/icons-ic/twotone-home.js");
            /* harmony import */ var _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/track-by */ "./src/@vex/utils/track-by.ts");
            var BreadcrumbsComponent = /** @class */ (function () {
                function BreadcrumbsComponent() {
                    this.crumbs = [];
                    this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackByValue"];
                    this.icHome = _iconify_icons_ic_twotone_home__WEBPACK_IMPORTED_MODULE_2___default.a;
                }
                BreadcrumbsComponent.prototype.ngOnInit = function () {
                };
                return BreadcrumbsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BreadcrumbsComponent.prototype, "crumbs", void 0);
            BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-breadcrumbs',
                    template: "\n      <div class=\"flex items-center\">\n          <vex-breadcrumb>\n              <a [routerLink]=\"['/']\">\n                  <ic-icon [icon]=\"icHome\" inline=\"true\" size=\"20px\"></ic-icon>\n              </a>\n          </vex-breadcrumb>\n          <ng-container *ngFor=\"let crumb of crumbs; trackBy: trackByValue\">\n              <div class=\"w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2\"></div>\n              <vex-breadcrumb>\n                  <a [routerLink]=\"[]\">{{ crumb }}</a>\n              </vex-breadcrumb>\n          </ng-container>\n      </div>\n  "
                })
            ], BreadcrumbsComponent);
            /***/ 
        }),
        /***/ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/@vex/components/breadcrumbs/breadcrumbs.module.ts ***!
          \***************************************************************/
        /*! exports provided: BreadcrumbsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function () { return BreadcrumbsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs.component */ "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/@vex/components/breadcrumbs/breadcrumb/breadcrumb.component.ts");
            var BreadcrumbsModule = /** @class */ (function () {
                function BreadcrumbsModule() {
                }
                return BreadcrumbsModule;
            }());
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
        /***/ "./src/app/pages/ui/page-layouts/blank/blank-routing.module.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/blank/blank-routing.module.ts ***!
          \*********************************************************************/
        /*! exports provided: BlankRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankRoutingModule", function () { return BlankRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank.component */ "./src/app/pages/ui/page-layouts/blank/blank.component.ts");
            var routes = [
                {
                    path: '',
                    component: _blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"]
                }
            ];
            var BlankRoutingModule = /** @class */ (function () {
                function BlankRoutingModule() {
                }
                return BlankRoutingModule;
            }());
            BlankRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BlankRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/blank/blank.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/blank/blank.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9ibGFuay9ibGFuay5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/blank/blank.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/blank/blank.component.ts ***!
          \****************************************************************/
        /*! exports provided: BlankComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function () { return BlankComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BlankComponent = /** @class */ (function () {
                function BlankComponent() {
                }
                BlankComponent.prototype.ngOnInit = function () {
                };
                return BlankComponent;
            }());
            BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-blank',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/page-layouts/blank/blank.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blank.component.scss */ "./src/app/pages/ui/page-layouts/blank/blank.component.scss")).default]
                })
            ], BlankComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/page-layouts/blank/blank.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/ui/page-layouts/blank/blank.module.ts ***!
          \*************************************************************/
        /*! exports provided: BlankModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankModule", function () { return BlankModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-routing.module */ "./src/app/pages/ui/page-layouts/blank/blank-routing.module.ts");
            /* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blank.component */ "./src/app/pages/ui/page-layouts/blank/blank.component.ts");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var BlankModule = /** @class */ (function () {
                function BlankModule() {
                }
                return BlankModule;
            }());
            BlankModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_4__["BlankComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _blank_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankRoutingModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_6__["ContainerModule"]
                    ]
                })
            ], BlankModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=blank-blank-module-es2015.js.map
//# sourceMappingURL=blank-blank-module-es5.js.map
//# sourceMappingURL=blank-blank-module-es5.js.map