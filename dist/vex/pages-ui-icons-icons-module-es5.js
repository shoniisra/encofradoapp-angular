(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-icons-icons-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-format-color-fill.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-format-color-fill.js ***!
          \*********************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M10 5.21L5.21 10h9.58z\" fill=\"currentColor\"/><path d=\"M19 17c1.1 0 2-.9 2-2 0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2zm-10.06-.44c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5zM10 5.21L14.79 10H5.21L10 5.21z\" fill=\"currentColor\"/><path fill-opacity=\".36\" d=\"M0 20h24v4H0z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/icons/icons.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/icons/icons.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full\" fxLayout=\"column\">\n  <div class=\"px-gutter pt-6 pb-0 bg-card shadow-b\">\n    <div vexContainer>\n      <h1 class=\"display-1 mt-0 mb-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          [style.background-color]=\"theme.colors.primary['500'] | colorFade:0.9\"\n          class=\"w-12 h-12 rounded-full text-primary-500 ltr:mr-4 rtl:ml-4 flex items-center justify-center\">\n      <ic-icon [icon]=\"icStar\" size=\"24px\"></ic-icon>\n      </span>\n        <span @fadeInRight class=\"block\">Icons</span>\n      </h1>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <nav class=\"vex-tabs border-0\" fxFlex=\"auto\" mat-tab-nav-bar>\n          <a #rla=\"routerLinkActive\"\n             *ngFor=\"let link of links\"\n             [active]=\"rla.isActive\"\n             [disabled]=\"link.disabled\"\n             [routerLink]=\"link.route\"\n             mat-tab-link\n             queryParamsHandling=\"preserve\"\n             routerLinkActive>\n            {{ link.label }}\n          </a>\n        </nav>\n\n        <input #colorInput [formControl]=\"colorCtrl\" class=\"hidden\" type=\"color\">\n        <button (click)=\"colorInput.click()\"\n                color=\"primary\"\n                fxFlex=\"none\"\n                mat-icon-button\n                matTooltip=\"Change Icon ColorDef\"\n                type=\"button\">\n          <mat-icon [icIcon]=\"icFormatColorFill\"></mat-icon>\n        </button>\n\n        <div class=\"border rounded-full text-hint overflow-hidden bg-card ml-2\"\n             fxFlex=\"none\"\n             fxHide.xs\n             fxLayout=\"row\"\n             fxLayoutAlign=\"start center\">\n          <ic-icon [icon]=\"icSearch\" class=\"ml-4 mr-3\" size=\"18px\"></ic-icon>\n          <input [formControl]=\"searchCtrl\"\n                 class=\"outline-none border-0 h-10 placeholder:text-secondary body-1 bg-card\"\n                 fxFlex=\"auto\"\n                 placeholder=\"Search Icons...\"\n                 type=\"text\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [style.color]=\"color$ | async\" class=\"overflow-y-auto p-gutter\" fxFlex=\"auto\">\n    <div vexContainer>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-right.animation.ts": 
        /*!********************************************************!*\
          !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
          \********************************************************/
        /*! exports provided: fadeInRightAnimation, fadeInRight400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function () { return fadeInRightAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function () { return fadeInRight400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInRightAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInRight400ms = fadeInRightAnimation(400);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/icons/icons-routing.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/pages/ui/icons/icons-routing.module.ts ***!
          \********************************************************/
        /*! exports provided: IconsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function () { return IconsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.component */ "./src/app/pages/ui/icons/icons.component.ts");
            var routes = [
                {
                    path: '',
                    component: _icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"],
                    data: {
                        scrollDisabled: true
                    },
                    children: [
                        {
                            path: '',
                            redirectTo: 'ic'
                        },
                        {
                            path: 'ic',
                            loadChildren: function () { return Promise.all(/*! import() | icons-ic-icons-ic-module */ [__webpack_require__.e("common"), __webpack_require__.e("icons-ic-icons-ic-module")]).then(__webpack_require__.bind(null, /*! ./icons-ic/icons-ic.module */ "./src/app/pages/ui/icons/icons-ic/icons-ic.module.ts")).then(function (m) { return m.IconsIcModule; }); }
                        },
                        {
                            path: 'fa',
                            loadChildren: function () { return Promise.all(/*! import() | icons-fa-icons-fa-module */ [__webpack_require__.e("common"), __webpack_require__.e("icons-fa-icons-fa-module")]).then(__webpack_require__.bind(null, /*! ./icons-fa/icons-fa.module */ "./src/app/pages/ui/icons/icons-fa/icons-fa.module.ts")).then(function (m) { return m.IconsFaModule; }); }
                        }
                    ]
                }
            ];
            var IconsRoutingModule = /** @class */ (function () {
                function IconsRoutingModule() {
                }
                return IconsRoutingModule;
            }());
            IconsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], IconsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/icons/icons.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/ui/icons/icons.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/icons/icons.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/pages/ui/icons/icons.component.ts ***!
          \***************************************************/
        /*! exports provided: IconsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function () { return IconsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-star */ "./node_modules/@iconify/icons-ic/twotone-star.js");
            /* harmony import */ var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
            /* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_format_color_fill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-color-fill */ "./node_modules/@iconify/icons-ic/twotone-format-color-fill.js");
            /* harmony import */ var _iconify_icons_ic_twotone_format_color_fill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_format_color_fill__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@vex/utils/tailwindcss */ "./src/@vex/utils/tailwindcss.ts");
            var IconsComponent = /** @class */ (function () {
                function IconsComponent(router) {
                    this.router = router;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
                    this.colorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
                    this.color$ = this.colorCtrl.valueChanges;
                    this.links = [
                        {
                            label: 'MATERIAL ICONS',
                            route: 'ic'
                        },
                        {
                            label: 'FONT AWESOME',
                            route: 'fa'
                        },
                    ];
                    this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFormatColorFill = _iconify_icons_ic_twotone_format_color_fill__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.theme = _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__["default"];
                }
                IconsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(20), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_9__["untilDestroyed"])(this)).subscribe(function (search) { return _this.router.navigate([], { queryParams: { search: search } }); });
                };
                IconsComponent.prototype.ngOnDestroy = function () { };
                return IconsComponent;
            }());
            IconsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
            ]; };
            IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-icons',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/icons/icons.component.html")).default,
                    animations: [
                        _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__["scaleIn400ms"],
                        _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRight400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icons.component.scss */ "./src/app/pages/ui/icons/icons.component.scss")).default]
                })
            ], IconsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/icons/icons.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/ui/icons/icons.module.ts ***!
          \************************************************/
        /*! exports provided: IconsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function () { return IconsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-routing.module */ "./src/app/pages/ui/icons/icons-routing.module.ts");
            /* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.component */ "./src/app/pages/ui/icons/icons.component.ts");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            /* harmony import */ var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../@vex/pipes/color/color-fade.module */ "./src/@vex/pipes/color/color-fade.module.ts");
            var IconsModule = /** @class */ (function () {
                function IconsModule() {
                }
                return IconsModule;
            }());
            IconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__["IconsRoutingModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"],
                        _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_14__["ColorFadeModule"]
                    ]
                })
            ], IconsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-ui-icons-icons-module-es2015.js.map
//# sourceMappingURL=pages-ui-icons-icons-module-es5.js.map
//# sourceMappingURL=pages-ui-icons-icons-module-es5.js.map