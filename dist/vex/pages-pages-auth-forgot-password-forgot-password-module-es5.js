(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-auth-forgot-password-forgot-password-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/auth/forgot-password/forgot-password.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/auth/forgot-password/forgot-password.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-pattern w-full h-full\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div [@fadeInUp] class=\"card overflow-hidden w-full max-w-xs\">\n    <div class=\"p-6 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"fill-current text-center\">\n        <img class=\"w-16\" src=\"assets/img/logo.png\">\n      </div>\n    </div>\n\n    <div class=\"text-center mt-4\">\n      <h2 class=\"title m-0\">Reset Password</h2>\n      <h4 class=\"body-2 text-secondary m-0\">Enter your email for password recovery.</h4>\n    </div>\n\n    <div [formGroup]=\"form\" class=\"p-6 flex flex-col\">\n      <mat-form-field>\n        <mat-label>E-Mail</mat-label>\n\n        <mat-icon [icIcon]=\"icMail\" class=\"mr-2\" matPrefix></mat-icon>\n        <input formControlName=\"email\" matInput required>\n        <mat-error *ngIf=\"form.get('email').hasError('required')\">\n          We can't recover your password, without your email.\n        </mat-error>\n      </mat-form-field>\n\n      <button (click)=\"send()\" class=\"mt-2\" color=\"primary\" mat-raised-button type=\"button\">\n        SEND RECOVERY LINK\n      </button>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/app/pages/pages/auth/forgot-password/forgot-password-routing.module.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/pages/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
          \************************************************************************************/
        /*! exports provided: ForgotPasswordRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function () { return ForgotPasswordRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/pages/pages/auth/forgot-password/forgot-password.component.ts");
            var routes = [
                {
                    path: '',
                    component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
                }
            ];
            var ForgotPasswordRoutingModule = /** @class */ (function () {
                function ForgotPasswordRoutingModule() {
                }
                return ForgotPasswordRoutingModule;
            }());
            ForgotPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ForgotPasswordRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/pages/auth/forgot-password/forgot-password.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/pages/auth/forgot-password/forgot-password.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/pages/auth/forgot-password/forgot-password.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/pages/pages/auth/forgot-password/forgot-password.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: ForgotPasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () { return ForgotPasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-mail */ "./node_modules/@iconify/icons-ic/twotone-mail.js");
            /* harmony import */ var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5__);
            var ForgotPasswordComponent = /** @class */ (function () {
                function ForgotPasswordComponent(router, fb) {
                    this.router = router;
                    this.fb = fb;
                    this.form = this.fb.group({
                        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_5___default.a;
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                };
                ForgotPasswordComponent.prototype.send = function () {
                    this.router.navigate(['/']);
                };
                return ForgotPasswordComponent;
            }());
            ForgotPasswordComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-forgot-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/auth/forgot-password/forgot-password.component.html")).default,
                    animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/pages/pages/auth/forgot-password/forgot-password.component.scss")).default]
                })
            ], ForgotPasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/pages/auth/forgot-password/forgot-password.module.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/pages/pages/auth/forgot-password/forgot-password.module.ts ***!
          \****************************************************************************/
        /*! exports provided: ForgotPasswordModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function () { return ForgotPasswordModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/pages/pages/auth/forgot-password/forgot-password-routing.module.ts");
            /* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/pages/pages/auth/forgot-password/forgot-password.component.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            var ForgotPasswordModule = /** @class */ (function () {
                function ForgotPasswordModule() {
                }
                return ForgotPasswordModule;
            }());
            ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordRoutingModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
                    ]
                })
            ], ForgotPasswordModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-pages-auth-forgot-password-forgot-password-module-es2015.js.map
//# sourceMappingURL=pages-pages-auth-forgot-password-forgot-password-module-es5.js.map
//# sourceMappingURL=pages-pages-auth-forgot-password-forgot-password-module-es5.js.map