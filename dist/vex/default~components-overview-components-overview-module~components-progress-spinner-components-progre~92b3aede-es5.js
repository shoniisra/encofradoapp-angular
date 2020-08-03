var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede"], {
        /***/ "./node_modules/@angular/material/esm2015/progress-spinner.js": 
        /*!********************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/progress-spinner.js ***!
          \********************************************************************/
        /*! exports provided: MatProgressSpinner, MatSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinnerModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () { return MatProgressSpinner; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinner", function () { return MatSpinner; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () { return MatProgressSpinnerModule; });
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Base reference size of the spinner.
             * \@docs-private
             * @type {?}
             */
            var BASE_SIZE = 100;
            /**
             * Base reference stroke width of the spinner.
             * \@docs-private
             * @type {?}
             */
            var BASE_STROKE_WIDTH = 10;
            // Boilerplate for applying mixins to MatProgressSpinner.
            /**
             * \@docs-private
             */
            var MatProgressSpinnerBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatProgressSpinnerBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatProgressSpinnerBase;
            }());
            /** @type {?} */
            var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatProgressSpinnerBase, 'primary');
            /**
             * Injection token to be used to override the default options for `mat-progress-spinner`.
             * @type {?}
             */
            var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-progress-spinner-default-options', {
                providedIn: 'root',
                factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
                return { diameter: BASE_SIZE };
            }
            // .0001 percentage difference is necessary in order to avoid unwanted animation frames
            // for example because the animation duration is 4 seconds, .1% accounts to 4ms
            // which are enough to see the flicker described in
            // https://github.com/angular/components/issues/8984
            /** @type {?} */
            var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
            /**
             * `<mat-progress-spinner>` component.
             */
            var MatProgressSpinner = /** @class */ (function (_super) {
                __extends(MatProgressSpinner, _super);
                /**
                 * @param {?} _elementRef
                 * @param {?} platform
                 * @param {?} _document
                 * @param {?} animationMode
                 * @param {?=} defaults
                 */
                function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
                    var _this = _super.call(this, _elementRef) || this;
                    _this._elementRef = _elementRef;
                    _this._document = _document;
                    _this._diameter = BASE_SIZE;
                    _this._value = 0;
                    _this._fallbackAnimation = false;
                    /**
                     * Mode of the progress circle
                     */
                    _this.mode = 'determinate';
                    /** @type {?} */
                    var trackedDiameters = MatProgressSpinner._diameters;
                    // The base size is already inserted via the component's structural styles. We still
                    // need to track it so we don't end up adding the same styles again.
                    if (!trackedDiameters.has(_document.head)) {
                        trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
                    }
                    _this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
                    _this._noopAnimations = animationMode === 'NoopAnimations' &&
                        (!!defaults && !defaults._forceAnimations);
                    if (defaults) {
                        if (defaults.diameter) {
                            _this.diameter = defaults.diameter;
                        }
                        if (defaults.strokeWidth) {
                            _this.strokeWidth = defaults.strokeWidth;
                        }
                    }
                    return _this;
                }
                Object.defineProperty(MatProgressSpinner.prototype, "diameter", {
                    /**
                     * The diameter of the progress spinner (will set width and height of svg).
                     * @return {?}
                     */
                    get: function () { return this._diameter; },
                    /**
                     * @param {?} size
                     * @return {?}
                     */
                    set: function (size) {
                        this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);
                        // If this is set before `ngOnInit`, the style root may not have been resolved yet.
                        if (!this._fallbackAnimation && this._styleRoot) {
                            this._attachStyleNode();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatProgressSpinner.prototype, "strokeWidth", {
                    /**
                     * Stroke width of the progress spinner.
                     * @return {?}
                     */
                    get: function () {
                        return this._strokeWidth || this.diameter / 10;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatProgressSpinner.prototype, "value", {
                    /**
                     * Value of the progress circle.
                     * @return {?}
                     */
                    get: function () {
                        return this.mode === 'determinate' ? this._value : 0;
                    },
                    /**
                     * @param {?} newValue
                     * @return {?}
                     */
                    set: function (newValue) {
                        this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(newValue)));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatProgressSpinner.prototype.ngOnInit = function () {
                    /** @type {?} */
                    var element = this._elementRef.nativeElement;
                    // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
                    // Angular seems to create the element outside the shadow root and then moves it inside, if the
                    // node is inside an `ngIf` and a ShadowDom-encapsulated component.
                    this._styleRoot = _getShadowRoot(element, this._document) || this._document.head;
                    this._attachStyleNode();
                    // On IE and Edge, we can't animate the `stroke-dashoffset`
                    // reliably so we fall back to a non-spec animation.
                    /** @type {?} */
                    var animationClass = "mat-progress-spinner-indeterminate" + (this._fallbackAnimation ? '-fallback' : '') + "-animation";
                    element.classList.add(animationClass);
                };
                Object.defineProperty(MatProgressSpinner.prototype, "_circleRadius", {
                    /**
                     * The radius of the spinner, adjusted for stroke width.
                     * @return {?}
                     */
                    get: function () {
                        return (this.diameter - BASE_STROKE_WIDTH) / 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatProgressSpinner.prototype, "_viewBox", {
                    /**
                     * The view box of the spinner's svg element.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var viewBox = this._circleRadius * 2 + this.strokeWidth;
                        return "0 0 " + viewBox + " " + viewBox;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatProgressSpinner.prototype, "_strokeCircumference", {
                    /**
                     * The stroke circumference of the svg circle.
                     * @return {?}
                     */
                    get: function () {
                        return 2 * Math.PI * this._circleRadius;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatProgressSpinner.prototype, "_strokeDashOffset", {
                    /**
                     * The dash offset of the svg circle.
                     * @return {?}
                     */
                    get: function () {
                        if (this.mode === 'determinate') {
                            return this._strokeCircumference * (100 - this._value) / 100;
                        }
                        // In fallback mode set the circle to 80% and rotate it with CSS.
                        if (this._fallbackAnimation && this.mode === 'indeterminate') {
                            return this._strokeCircumference * 0.2;
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatProgressSpinner.prototype, "_circleStrokeWidth", {
                    /**
                     * Stroke width of the circle in percent.
                     * @return {?}
                     */
                    get: function () {
                        return this.strokeWidth / this.diameter * 100;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Dynamically generates a style tag containing the correct animation for this diameter.
                 * @private
                 * @return {?}
                 */
                MatProgressSpinner.prototype._attachStyleNode = function () {
                    /** @type {?} */
                    var styleRoot = this._styleRoot;
                    /** @type {?} */
                    var currentDiameter = this._diameter;
                    /** @type {?} */
                    var diameters = MatProgressSpinner._diameters;
                    /** @type {?} */
                    var diametersForElement = diameters.get(styleRoot);
                    if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
                        /** @type {?} */
                        var styleTag = this._document.createElement('style');
                        styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
                        styleTag.textContent = this._getAnimationText();
                        styleRoot.appendChild(styleTag);
                        if (!diametersForElement) {
                            diametersForElement = new Set();
                            diameters.set(styleRoot, diametersForElement);
                        }
                        diametersForElement.add(currentDiameter);
                    }
                };
                /**
                 * Generates animation styles adjusted for the spinner's diameter.
                 * @private
                 * @return {?}
                 */
                MatProgressSpinner.prototype._getAnimationText = function () {
                    return INDETERMINATE_ANIMATION_TEMPLATE
                        // Animation should begin at 5% and end at 80%
                        .replace(/START_VALUE/g, "" + 0.95 * this._strokeCircumference)
                        .replace(/END_VALUE/g, "" + 0.2 * this._strokeCircumference)
                        .replace(/DIAMETER/g, "" + this.diameter);
                };
                return MatProgressSpinner;
            }(_MatProgressSpinnerMixinBase));
            /**
             * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
             * We need to keep track of which elements the diameters were attached to, because for
             * elements in the Shadow DOM the style tags are attached to the shadow root, rather
             * than the document head.
             */
            MatProgressSpinner._diameters = new WeakMap();
            MatProgressSpinner.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{ selector: 'mat-progress-spinner',
                            exportAs: 'matProgressSpinner',
                            host: {
                                'role': 'progressbar',
                                'class': 'mat-progress-spinner',
                                '[class._mat-animation-noopable]': "_noopAnimations",
                                '[style.width.px]': 'diameter',
                                '[style.height.px]': 'diameter',
                                '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
                                '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
                                '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
                                '[attr.mode]': 'mode',
                            },
                            inputs: ['color'],
                            template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
                            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                        },] },
            ];
            /** @nocollapse */
            MatProgressSpinner.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
            ]; };
            MatProgressSpinner.propDecorators = {
                diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
            };
            /**
             * `<mat-spinner>` component.
             *
             * This is a component definition to be used as a convenience reference to create an
             * indeterminate `<mat-progress-spinner>` instance.
             */
            var MatSpinner = /** @class */ (function (_super) {
                __extends(MatSpinner, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} platform
                 * @param {?} document
                 * @param {?} animationMode
                 * @param {?=} defaults
                 */
                function MatSpinner(elementRef, platform, document, animationMode, defaults) {
                    var _this = _super.call(this, elementRef, platform, document, animationMode, defaults) || this;
                    _this.mode = 'indeterminate';
                    return _this;
                }
                return MatSpinner;
            }(MatProgressSpinner));
            MatSpinner.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{ selector: 'mat-spinner',
                            host: {
                                'role': 'progressbar',
                                'mode': 'indeterminate',
                                'class': 'mat-spinner mat-progress-spinner',
                                '[class._mat-animation-noopable]': "_noopAnimations",
                                '[style.width.px]': 'diameter',
                                '[style.height.px]': 'diameter',
                            },
                            inputs: ['color'],
                            template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
                            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                        },] },
            ];
            /** @nocollapse */
            MatSpinner.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
            ]; };
            /**
             * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
             * @param {?} element
             * @param {?} _document
             * @return {?}
             */
            function _getShadowRoot(element, _document) {
                // TODO(crisbeto): see whether we should move this into the CDK
                // feature detection utilities once #15616 gets merged in.
                if (typeof window !== 'undefined') {
                    /** @type {?} */
                    var head = _document.head;
                    // Check whether the browser supports Shadow DOM.
                    if (head && ((( /** @type {?} */(head))).createShadowRoot || head.attachShadow)) {
                        /** @type {?} */
                        var rootNode = element.getRootNode ? element.getRootNode() : null;
                        // We need to take the `ShadowRoot` off of `window`, because the built-in types are
                        // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
                        if (rootNode instanceof (( /** @type {?} */(window))).ShadowRoot) {
                            return rootNode;
                        }
                    }
                }
                return null;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatProgressSpinnerModule = /** @class */ (function () {
                function MatProgressSpinnerModule() {
                }
                return MatProgressSpinnerModule;
            }());
            MatProgressSpinnerModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                            exports: [
                                MatProgressSpinner,
                                MatSpinner,
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]
                            ],
                            declarations: [
                                MatProgressSpinner,
                                MatSpinner
                            ],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=progress-spinner.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede-es2015.js.map
//# sourceMappingURL=default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede-es5.js.map
//# sourceMappingURL=default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede-es5.js.map