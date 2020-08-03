(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-forms-form-elements-form-elements-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-elements/form-elements.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-elements/form-elements.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-secondary-toolbar current=\"Form Elements\">\n  <vex-breadcrumbs [crumbs]=\"['Forms', 'Form Elements']\" fxFlex=\"auto\"></vex-breadcrumbs>\n\n  <button class=\"ml-2\" color=\"primary\" mat-icon-button type=\"button\">\n    <mat-icon [icIcon]=\"icMoreVert\"></mat-icon>\n  </button>\n</vex-secondary-toolbar>\n\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Basic Forms</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <mat-form-field>\n          <mat-label>Company</mat-label>\n          <input matInput required>\n        </mat-form-field>\n\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" fxLayoutGap.lt-sm=\"0\">\n          <mat-form-field fxFlex=\"auto\">\n            <mat-label>First Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field fxFlex=\"auto\">\n            <mat-label>Last Name</mat-label>\n            <input matInput required>\n          </mat-form-field>\n        </div>\n\n        <mat-form-field>\n          <mat-label>State</mat-label>\n          <mat-select>\n            <mat-option>New York</mat-option>\n            <mat-option>Washington</mat-option>\n            <mat-option>Florida</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Password</mat-label>\n          <input [type]=\"inputType\" matInput required value=\"Hello!\">\n          <button (click)=\"togglePassword()\" mat-icon-button matSuffix type=\"button\">\n            <mat-icon *ngIf=\"visible\" [icIcon]=\"icVisibility\"></mat-icon>\n            <mat-icon *ngIf=\"!visible\" [icIcon]=\"icVisibilityOff\"></mat-icon>\n          </button>\n          <mat-hint>Try clicking the eye to toggle the visibility.</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Disabled</mat-label>\n          <input disabled matInput>\n        </mat-form-field>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n          <button mat-button type=\"button\">CANCEL</button>\n          <button color=\"primary\" mat-raised-button type=\"button\">SUBMIT</button>\n        </div>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card overflow-hidden\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Advanced Forms</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <mat-form-field>\n          <mat-label>Select a State</mat-label>\n          <input [formControl]=\"stateCtrl\" [matAutocomplete]=\"auto\" matInput>\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let state of filteredStates$ | async\" [value]=\"state.name\">\n              <img [src]=\"state.flag\" class=\"align-middle mr-4 shadow-6\" height=\"25\">\n              <span class=\"body-1\">{{ state.name }}</span>\n              <span class=\"text-hint\"> | </span>\n              <span class=\"caption text-secondary\">Population: {{ state.population }}</span>\n            </mat-option>\n          </mat-autocomplete>\n\n          <button class=\"text-secondary\" mat-icon-button matSuffix type=\"button\">\n            <mat-icon [icIcon]=\"icArrowDropDown\"></mat-icon>\n          </button>\n\n          <mat-hint>Add this hint for a better UX!</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Username</mat-label>\n          <input matInput value=\"DavidSmith\">\n          <mat-icon [icIcon]=\"icPerson\" matSuffix></mat-icon>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Mobile Phone</mat-label>\n          <input matInput required>\n          <mat-icon [icIcon]=\"icSmartphone\" class=\"mr-2\" matPrefix></mat-icon>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Hint Label and Max Length</mat-label>\n          <input #lengthHint matInput maxlength=\"10\" required>\n          <mat-hint align=\"start\">Try to type in more than 10 letters</mat-hint>\n          <mat-hint align=\"end\">{{lengthHint.value.length}}/10</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Birthdate</mat-label>\n          <input [matDatepicker]=\"datepickerRef\" matInput>\n          <mat-datepicker-toggle [for]=\"datepickerRef\" matSuffix></mat-datepicker-toggle>\n          <mat-datepicker #datepickerRef></mat-datepicker>\n          <mat-hint>Click on the icon to the right for a Datepicker</mat-hint>\n        </mat-form-field>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n          <button mat-button type=\"button\">CANCEL</button>\n          <button color=\"primary\" mat-raised-button type=\"button\">SUBMIT</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-5\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Fill Input Style</h2>\n      </div>\n\n      <div class=\"px-6 pt-4 pb-0\" fxLayout=\"column\">\n        <mat-form-field appearance=\"fill\" class=\"vex-flex-form-field\" color=\"primary\">\n          <mat-label>Primary Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\" class=\"vex-flex-form-field\" color=\"accent\">\n          <mat-label>Accent Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\" class=\"vex-flex-form-field\" color=\"warn\">\n          <mat-label>Warn Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Outline Input Style</h2>\n      </div>\n\n      <div class=\"px-6 pt-4 pb-0\" fxLayout=\"column\">\n        <mat-form-field appearance=\"outline\" class=\"vex-flex-form-field\" color=\"primary\">\n          <mat-label>Primary Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"vex-flex-form-field\" color=\"accent\">\n          <mat-label>Accent Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"vex-flex-form-field\" color=\"warn\">\n          <mat-label>Warn Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Standard Input Style</h2>\n      </div>\n\n      <div class=\"px-6 pt-4 pb-0\" fxLayout=\"column\">\n        <mat-form-field appearance=\"standard\" class=\"vex-flex-form-field\" color=\"primary\">\n          <mat-label>Primary Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"standard\" class=\"vex-flex-form-field\" color=\"accent\">\n          <mat-label>Accent Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"standard\" class=\"vex-flex-form-field\" color=\"warn\">\n          <mat-label>Warn Color</mat-label>\n          <input matInput>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-5\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Prefix & Suffix</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          Add a Prefix and Suffix to an input field, from text to icons or symbols, anything and any element can be set\n          as prefix or suffix.\n        </p>\n\n        <mat-form-field>\n          <mat-icon [icIcon]=\"icPhone\" class=\"mr-2\" matPrefix></mat-icon>\n          <mat-label>Input with prefix icon</mat-label>\n          <input matInput>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Input with suffix icon</mat-label>\n          <input matInput>\n          <mat-icon [icIcon]=\"icMenu\" matSuffix></mat-icon>\n        </mat-form-field>\n\n        <mat-form-field>\n          <span matPrefix>http:// &nbsp;</span>\n          <mat-label>Input with prefix text and suffix icon</mat-label>\n          <input matInput>\n          <mat-icon [icIcon]=\"icCamera\" matSuffix></mat-icon>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Hint Label</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          When you need to display additional information to the user you can use Hint Labels to display information\n          appropriately.\n        </p>\n\n        <mat-form-field>\n          <mat-label>Email Address</mat-label>\n          <input matInput>\n          <mat-hint>e.g. david@example.com</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Domain Name</mat-label>\n          <input #hintLabelInputRef matInput>\n          <mat-hint align=\"end\">http://{{hintLabelInputRef.value || \"company\"}}.example.com</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Dynamic Hint Label</mat-label>\n          <input #hintLabelInputLengthRef matInput maxlength=\"10\">\n          <mat-hint align=\"start\">Try to type in more than 10 letters</mat-hint>\n          <mat-hint align=\"end\">{{hintLabelInputLengthRef.value.length}}/10</mat-hint>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-5\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Select</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\" fxFlex=\"none\">\n          A intuitive select component that displays the current position you are at and has smooth animations.\n        </p>\n\n        <mat-form-field fxFlex=\"none\">\n          <mat-label>Favorite fruit</mat-label>\n          <mat-select>\n            <mat-option value=\"Apples\">Apples</mat-option>\n            <mat-option value=\"Peaches\">Peaches</mat-option>\n            <mat-option value=\"Bananas\">Bananas</mat-option>\n            <mat-option value=\"Mango\">Mango</mat-option>\n            <mat-option value=\"Apples\">Cucumber</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field [color]=\"selectCtrl.value\" fxFlex=\"none\">\n          <mat-label>Themeable Colors</mat-label>\n          <mat-select [formControl]=\"selectCtrl\">\n            <mat-option value=\"primary\">Primary Color</mat-option>\n            <mat-option value=\"accent\">Accent Color</mat-option>\n            <mat-option value=\"warn\">Warn Color</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Datepicker</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          A Material styled Datepicker that allows for easy selection of any date with any format.\n        </p>\n\n        <mat-form-field>\n          <mat-label>Select your date</mat-label>\n          <input (click)=\"formDatepickerRef.open()\"\n                 (focus)=\"formDatepickerRef.open()\"\n                 [matDatepicker]=\"formDatepickerRef\"\n                 matInput\n                 readonly>\n          <mat-datepicker-toggle [for]=\"formDatepickerRef\" matSuffix></mat-datepicker-toggle>\n          <mat-hint>Click on the input or the datepicker icon</mat-hint>\n          <mat-datepicker #formDatepickerRef></mat-datepicker>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Slider</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          An component similiar to the range input with better usability and drag & drop + keyboard support.\n        </p>\n\n        <mat-slider [max]=\"100\" [min]=\"0\" [step]=\"1\" [thumbLabel]=\"true\" [tickInterval]=\"10\" value=\"36\"></mat-slider>\n        <mat-slider [max]=\"10\" [min]=\"0\" [step]=\"1\" color=\"primary\" value=\"6\"></mat-slider>\n        <mat-slider [max]=\"10\" [min]=\"0\" [step]=\"1\" color=\"warn\" value=\"7\"></mat-slider>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-5\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Radio Button</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          When you need a user to decide between multiple options and have him only choose one, you can use a radio\n          button.\n        </p>\n\n        <div fxLayout=\"column\" fxLayoutGap=\"16px\">\n          <mat-radio-group fxLayout=\"row\" fxLayoutGap=\"16px\">\n            <mat-radio-button [checked]=\"true\" value=\"Apples\">Apples</mat-radio-button>\n            <mat-radio-button value=\"Peaches\">Peaches</mat-radio-button>\n          </mat-radio-group>\n          <mat-radio-group color=\"accent\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n            <mat-radio-button [checked]=\"true\" color=\"primary\" value=\"primary\">Primary Color\n            </mat-radio-button>\n            <mat-radio-button color=\"accent\" value=\"accent\">Accent Color</mat-radio-button>\n            <mat-radio-button color=\"warn\" value=\"warn\">Warn Color</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Slide Toggle</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          Allow the user to slide toggle an option or a value. You can either click or you can drag & drop the slide to\n          change its state.\n        </p>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n          <div fxLayout=\"column\" fxLayoutGap=\"8px\">\n            <mat-slide-toggle [checked]=\"false\">Slide Me</mat-slide-toggle>\n            <mat-slide-toggle [checked]=\"false\">Drag & Drop</mat-slide-toggle>\n            <mat-slide-toggle [checked]=\"true\">I Agree</mat-slide-toggle>\n          </div>\n          <div fxLayout=\"column\" fxLayoutAlign=\"start end\" fxLayoutGap=\"8px\">\n            <mat-slide-toggle [checked]=\"true\" color=\"primary\" labelPosition=\"before\">Primary Color\n            </mat-slide-toggle>\n            <mat-slide-toggle [checked]=\"true\" color=\"accent\" labelPosition=\"before\">Accent Color</mat-slide-toggle>\n            <mat-slide-toggle [checked]=\"true\" color=\"warn\" labelPosition=\"before\">Warn Color</mat-slide-toggle>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-5\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Checkbox</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          Allow for simple selecting and deselecting of options.\n        </p>\n\n        <div fxLayout=\"column\" fxLayoutGap=\"8px\">\n          <mat-checkbox [checked]=\"true\">Stay signed in</mat-checkbox>\n          <mat-checkbox [indeterminate]=\"true\">Indeterminate</mat-checkbox>\n          <mat-checkbox [checked]=\"false\" align=\"end\">Align end</mat-checkbox>\n        </div>\n      </div>\n    </div>\n\n    <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n      <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2 class=\"title m-0\">Form Checkbox Theming</h2>\n      </div>\n\n      <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <p class=\"mt-0 mb-4 text-secondary\">\n          Style checkbox elements with the Theme API.\n        </p>\n\n        <div fxLayout=\"column\" fxLayoutGap=\"8px\">\n          <mat-checkbox [checked]=\"true\" color=\"primary\">Primary Color</mat-checkbox>\n          <mat-checkbox [checked]=\"true\" color=\"accent\">Accent Color</mat-checkbox>\n          <mat-checkbox [checked]=\"true\" color=\"warn\">Warn Color</mat-checkbox>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
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
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
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
        /***/ "./src/app/pages/ui/forms/form-elements/form-elements-routing.module.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/pages/ui/forms/form-elements/form-elements-routing.module.ts ***!
          \******************************************************************************/
        /*! exports provided: FormElementsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsRoutingModule", function () { return FormElementsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _form_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements.component */ "./src/app/pages/ui/forms/form-elements/form-elements.component.ts");
            var routes = [
                {
                    path: '',
                    component: _form_elements_component__WEBPACK_IMPORTED_MODULE_3__["FormElementsComponent"]
                }
            ];
            var FormElementsRoutingModule = /** @class */ (function () {
                function FormElementsRoutingModule() {
                }
                return FormElementsRoutingModule;
            }());
            FormElementsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], FormElementsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/forms/form-elements/form-elements.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/ui/forms/form-elements/form-elements.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2Zvcm1zL2Zvcm0tZWxlbWVudHMvZm9ybS1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/ui/forms/form-elements/form-elements.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/ui/forms/form-elements/form-elements.component.ts ***!
          \*************************************************************************/
        /*! exports provided: FormElementsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsComponent", function () { return FormElementsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility */ "./node_modules/@iconify/icons-ic/twotone-visibility.js");
            /* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility-off */ "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
            /* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-smartphone */ "./node_modules/@iconify/icons-ic/twotone-smartphone.js");
            /* harmony import */ var _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-person */ "./node_modules/@iconify/icons-ic/twotone-person.js");
            /* harmony import */ var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-arrow-drop-down */ "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
            /* harmony import */ var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ "./node_modules/@iconify/icons-ic/twotone-menu.js");
            /* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-camera */ "./node_modules/@iconify/icons-ic/twotone-camera.js");
            /* harmony import */ var _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-phone */ "./node_modules/@iconify/icons-ic/twotone-phone.js");
            /* harmony import */ var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_14__);
            var FormElementsComponent = /** @class */ (function () {
                function FormElementsComponent(cd) {
                    var _this = this;
                    this.cd = cd;
                    this.selectCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
                    this.inputType = 'password';
                    this.visible = false;
                    this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icCamera = _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icSmartphone = _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
                    this.states = [
                        {
                            name: 'Arkansas',
                            population: '2.978M',
                            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                            flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
                        },
                        {
                            name: 'California',
                            population: '39.14M',
                            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                            flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
                        },
                        {
                            name: 'Florida',
                            population: '20.27M',
                            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
                        },
                        {
                            name: 'Texas',
                            population: '27.47M',
                            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
                        }
                    ];
                    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
                }
                FormElementsComponent.prototype.ngOnInit = function () {
                };
                FormElementsComponent.prototype.togglePassword = function () {
                    if (this.visible) {
                        this.inputType = 'password';
                        this.visible = false;
                        this.cd.markForCheck();
                    }
                    else {
                        this.inputType = 'text';
                        this.visible = true;
                        this.cd.markForCheck();
                    }
                };
                FormElementsComponent.prototype.filterStates = function (name) {
                    return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0; });
                };
                return FormElementsComponent;
            }());
            FormElementsComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            FormElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'vex-form-elements',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-elements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/form-elements/form-elements.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__["stagger60ms"],
                        _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-elements.component.scss */ "./src/app/pages/ui/forms/form-elements/form-elements.component.scss")).default]
                })
            ], FormElementsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/ui/forms/form-elements/form-elements.module.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/ui/forms/form-elements/form-elements.module.ts ***!
          \**********************************************************************/
        /*! exports provided: FormElementsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsModule", function () { return FormElementsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements-routing.module */ "./src/app/pages/ui/forms/form-elements/form-elements-routing.module.ts");
            /* harmony import */ var _form_elements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-elements.component */ "./src/app/pages/ui/forms/form-elements/form-elements.component.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
            /* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");
            var FormElementsModule = /** @class */ (function () {
                function FormElementsModule() {
                }
                return FormElementsModule;
            }());
            FormElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_form_elements_component__WEBPACK_IMPORTED_MODULE_4__["FormElementsComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormElementsRoutingModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_19__["SecondaryToolbarModule"],
                        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbsModule"],
                        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_21__["ContainerModule"]
                    ]
                })
            ], FormElementsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-ui-forms-form-elements-form-elements-module-es2015.js.map
//# sourceMappingURL=pages-ui-forms-form-elements-form-elements-module-es5.js.map
//# sourceMappingURL=pages-ui-forms-form-elements-form-elements-module-es5.js.map