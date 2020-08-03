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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"], {
        /***/ "./node_modules/@angular/material/esm2015/autocomplete.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/autocomplete.js ***!
          \****************************************************************/
        /*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () { return MatAutocompleteSelectedEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () { return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () { return MatAutocomplete; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () { return MatAutocompleteModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () { return getMatAutocompleteMissingPanelError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () { return AUTOCOMPLETE_OPTION_HEIGHT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () { return AUTOCOMPLETE_PANEL_HEIGHT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () { return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () { return MAT_AUTOCOMPLETE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () { return MatAutocompleteTrigger; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () { return MatAutocompleteOrigin; });
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
             * Autocomplete IDs need to be unique across components, so this counter exists outside of
             * the component definition.
             * @type {?}
             */
            var _uniqueAutocompleteIdCounter = 0;
            /**
             * Event object that is emitted when an autocomplete option is selected.
             */
            var MatAutocompleteSelectedEvent = /** @class */ (function () {
                /**
                 * @param {?} source
                 * @param {?} option
                 */
                function MatAutocompleteSelectedEvent(source, option) {
                    this.source = source;
                    this.option = option;
                }
                return MatAutocompleteSelectedEvent;
            }());
            // Boilerplate for applying mixins to MatAutocomplete.
            /**
             * \@docs-private
             */
            var MatAutocompleteBase = /** @class */ (function () {
                function MatAutocompleteBase() {
                }
                return MatAutocompleteBase;
            }());
            /** @type {?} */
            var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
            /**
             * Injection token to be used to override the default options for `mat-autocomplete`.
             * @type {?}
             */
            var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
                providedIn: 'root',
                factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
                return { autoActiveFirstOption: false };
            }
            var MatAutocomplete = /** @class */ (function (_super) {
                __extends(MatAutocomplete, _super);
                /**
                 * @param {?} _changeDetectorRef
                 * @param {?} _elementRef
                 * @param {?} defaults
                 */
                function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
                    var _this = _super.call(this) || this;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._elementRef = _elementRef;
                    /**
                     * Whether the autocomplete panel should be visible, depending on option length.
                     */
                    _this.showPanel = false;
                    _this._isOpen = false;
                    /**
                     * Function that maps an option's control value to its display value in the trigger.
                     */
                    _this.displayWith = null;
                    /**
                     * Event that is emitted whenever an option from the list is selected.
                     */
                    _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    /**
                     * Event that is emitted when the autocomplete panel is opened.
                     */
                    _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    /**
                     * Event that is emitted when the autocomplete panel is closed.
                     */
                    _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    _this._classList = {};
                    /**
                     * Unique ID to be used by autocomplete trigger's "aria-owns" property.
                     */
                    _this.id = "mat-autocomplete-" + _uniqueAutocompleteIdCounter++;
                    _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
                    return _this;
                }
                Object.defineProperty(MatAutocomplete.prototype, "isOpen", {
                    /**
                     * Whether the autocomplete panel is open.
                     * @return {?}
                     */
                    get: function () { return this._isOpen && this.showPanel; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatAutocomplete.prototype, "autoActiveFirstOption", {
                    /**
                     * Whether the first option should be highlighted when the autocomplete panel is opened.
                     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
                     * @return {?}
                     */
                    get: function () { return this._autoActiveFirstOption; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatAutocomplete.prototype, "classList", {
                    /**
                     * Takes classes set on the host mat-autocomplete element and applies them to the panel
                     * inside the overlay container to allow for easy styling.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value && value.length) {
                            this._classList = value.split(' ').reduce(( /**
                             * @param {?} classList
                             * @param {?} className
                             * @return {?}
                             */function (classList, className) {
                                classList[className.trim()] = true;
                                return classList;
                            }), ( /** @type {?} */({})));
                        }
                        else {
                            this._classList = {};
                        }
                        this._setVisibilityClasses(this._classList);
                        this._elementRef.nativeElement.className = '';
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatAutocomplete.prototype.ngAfterContentInit = function () {
                    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
                    // Set the initial visibility state.
                    this._setVisibility();
                };
                /**
                 * Sets the panel scrollTop. This allows us to manually scroll to display options
                 * above or below the fold, as they are not actually being focused when active.
                 * @param {?} scrollTop
                 * @return {?}
                 */
                MatAutocomplete.prototype._setScrollTop = function (scrollTop) {
                    if (this.panel) {
                        this.panel.nativeElement.scrollTop = scrollTop;
                    }
                };
                /**
                 * Returns the panel's scrollTop.
                 * @return {?}
                 */
                MatAutocomplete.prototype._getScrollTop = function () {
                    return this.panel ? this.panel.nativeElement.scrollTop : 0;
                };
                /**
                 * Panel should hide itself when the option list is empty.
                 * @return {?}
                 */
                MatAutocomplete.prototype._setVisibility = function () {
                    this.showPanel = !!this.options.length;
                    this._setVisibilityClasses(this._classList);
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Emits the `select` event.
                 * @param {?} option
                 * @return {?}
                 */
                MatAutocomplete.prototype._emitSelectEvent = function (option) {
                    /** @type {?} */
                    var event = new MatAutocompleteSelectedEvent(this, option);
                    this.optionSelected.emit(event);
                };
                /**
                 * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
                 * @private
                 * @param {?} classList
                 * @return {?}
                 */
                MatAutocomplete.prototype._setVisibilityClasses = function (classList) {
                    classList['mat-autocomplete-visible'] = this.showPanel;
                    classList['mat-autocomplete-hidden'] = !this.showPanel;
                };
                return MatAutocomplete;
            }(_MatAutocompleteMixinBase));
            MatAutocomplete.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{ selector: 'mat-autocomplete',
                            template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
                            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                            exportAs: 'matAutocomplete',
                            inputs: ['disableRipple'],
                            host: {
                                'class': 'mat-autocomplete'
                            },
                            providers: [
                                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatAutocomplete }
                            ]
                        },] },
            ];
            /** @nocollapse */
            MatAutocomplete.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
            ]; };
            MatAutocomplete.propDecorators = {
                template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: true },] }],
                panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['panel', { static: false },] }],
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], { descendants: true },] }],
                optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"],] }],
                displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                autoActiveFirstOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                panelWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                optionSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['class',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Directive applied to an element to make it usable
             * as a connection point for an autocomplete panel.
             */
            var MatAutocompleteOrigin = /** @class */ (function () {
                /**
                 * @param {?} elementRef
                 */
                function MatAutocompleteOrigin(elementRef) {
                    this.elementRef = elementRef;
                }
                return MatAutocompleteOrigin;
            }());
            MatAutocompleteOrigin.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[matAutocompleteOrigin]',
                            exportAs: 'matAutocompleteOrigin',
                        },] },
            ];
            /** @nocollapse */
            MatAutocompleteOrigin.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The height of each autocomplete option.
             * @type {?}
             */
            var AUTOCOMPLETE_OPTION_HEIGHT = 48;
            /**
             * The total height of the autocomplete panel.
             * @type {?}
             */
            var AUTOCOMPLETE_PANEL_HEIGHT = 256;
            /**
             * Injection token that determines the scroll handling while the autocomplete panel is open.
             * @type {?}
             */
            var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.reposition(); });
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
                provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
                deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
                useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
            };
            /**
             * Provider that allows the autocomplete to register as a ControlValueAccessor.
             * \@docs-private
             * @type {?}
             */
            var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MatAutocompleteTrigger; })),
                multi: true
            };
            /**
             * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
             * \@docs-private
             * @return {?}
             */
            function getMatAutocompleteMissingPanelError() {
                return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
                    'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
                    'you\'re attempting to open it after the ngAfterContentInit hook.');
            }
            var MatAutocompleteTrigger = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _overlay
                 * @param {?} _viewContainerRef
                 * @param {?} _zone
                 * @param {?} _changeDetectorRef
                 * @param {?} scrollStrategy
                 * @param {?} _dir
                 * @param {?} _formField
                 * @param {?} _document
                 * @param {?=} _viewportRuler
                 */
                function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
                    var _this = this;
                    this._element = _element;
                    this._overlay = _overlay;
                    this._viewContainerRef = _viewContainerRef;
                    this._zone = _zone;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._dir = _dir;
                    this._formField = _formField;
                    this._document = _document;
                    this._viewportRuler = _viewportRuler;
                    this._componentDestroyed = false;
                    this._autocompleteDisabled = false;
                    /**
                     * Whether or not the label state is being overridden.
                     */
                    this._manuallyFloatingLabel = false;
                    /**
                     * Subscription to viewport size changes.
                     */
                    this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
                    /**
                     * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
                     * closed autocomplete from being reopened if the user switches to another browser tab and then
                     * comes back.
                     */
                    this._canOpenOnNextFocus = true;
                    /**
                     * Stream of keyboard events that can close the panel.
                     */
                    this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
                    /**
                     * Event handler for when the window is blurred. Needs to be an
                     * arrow function in order to preserve the context.
                     */
                    this._windowBlurHandler = ( /**
                     * @return {?}
                     */function () {
                        // If the user blurred the window while the autocomplete is focused, it means that it'll be
                        // refocused when they come back. In this case we want to skip the first focus event, if the
                        // pane was closed, in order to avoid reopening it unintentionally.
                        _this._canOpenOnNextFocus =
                            _this._document.activeElement !== _this._element.nativeElement || _this.panelOpen;
                    });
                    /**
                     * `View -> model callback called when value changes`
                     */
                    this._onChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * `View -> model callback called when autocomplete has been touched`
                     */
                    this._onTouched = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * Position of the autocomplete panel relative to the trigger element. A position of `auto`
                     * will render the panel underneath the trigger if there is enough space for it to fit in
                     * the viewport, otherwise the panel will be shown above it. If the position is set to
                     * `above` or `below`, the panel will always be shown above or below the trigger. no matter
                     * whether it fits completely in the viewport.
                     */
                    this.position = 'auto';
                    /**
                     * `autocomplete` attribute to be set on the input element.
                     * \@docs-private
                     */
                    this.autocompleteAttribute = 'off';
                    this._overlayAttached = false;
                    /**
                     * Stream of autocomplete option selections.
                     */
                    this.optionSelections = ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(( /**
                     * @return {?}
                     */function () {
                        if (_this.autocomplete && _this.autocomplete.options) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"]).apply(void 0, _this.autocomplete.options.map(( /**
                             * @param {?} option
                             * @return {?}
                             */function (/**
                             * @param {?} option
                             * @return {?}
                             */ option) { return option.onSelectionChange; })));
                        }
                        // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
                        // Return a stream that we'll replace with the real one once everything is in place.
                        return _this._zone.onStable
                            .asObservable()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(( /**
                     * @return {?}
                     */function () { return _this.optionSelections; })));
                    }))));
                    this._scrollStrategy = scrollStrategy;
                }
                Object.defineProperty(MatAutocompleteTrigger.prototype, "autocompleteDisabled", {
                    /**
                     * Whether the autocomplete is disabled. When disabled, the element will
                     * act as a regular input and the user won't be able to open the panel.
                     * @return {?}
                     */
                    get: function () { return this._autocompleteDisabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (typeof window !== 'undefined') {
                        this._zone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            window.addEventListener('blur', _this._windowBlurHandler);
                        }));
                        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["_supportsShadowDom"])()) {
                            /** @type {?} */
                            var element = this._element.nativeElement;
                            /** @type {?} */
                            var rootNode = element.getRootNode ? element.getRootNode() : null;
                            // We need to take the `ShadowRoot` off of `window`, because the built-in types are
                            // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
                            this._isInsideShadowRoot = rootNode instanceof (( /** @type {?} */(window))).ShadowRoot;
                        }
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.ngOnChanges = function (changes) {
                    if (changes['position'] && this._positionStrategy) {
                        this._setStrategyPositions(this._positionStrategy);
                        if (this.panelOpen) {
                            ( /** @type {?} */(this._overlayRef)).updatePosition();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.ngOnDestroy = function () {
                    if (typeof window !== 'undefined') {
                        window.removeEventListener('blur', this._windowBlurHandler);
                    }
                    this._viewportSubscription.unsubscribe();
                    this._componentDestroyed = true;
                    this._destroyPanel();
                    this._closeKeyEventStream.complete();
                };
                Object.defineProperty(MatAutocompleteTrigger.prototype, "panelOpen", {
                    /**
                     * Whether or not the autocomplete panel is open.
                     * @return {?}
                     */
                    get: function () {
                        return this._overlayAttached && this.autocomplete.showPanel;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Opens the autocomplete suggestion panel.
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.openPanel = function () {
                    this._attachOverlay();
                    this._floatLabel();
                };
                /**
                 * Closes the autocomplete suggestion panel.
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.closePanel = function () {
                    this._resetLabel();
                    if (!this._overlayAttached) {
                        return;
                    }
                    if (this.panelOpen) {
                        // Only emit if the panel was visible.
                        this.autocomplete.closed.emit();
                    }
                    this.autocomplete._isOpen = this._overlayAttached = false;
                    if (this._overlayRef && this._overlayRef.hasAttached()) {
                        this._overlayRef.detach();
                        this._closingActionsSubscription.unsubscribe();
                    }
                    // Note that in some cases this can end up being called after the component is destroyed.
                    // Add a check to ensure that we don't try to run change detection on a destroyed view.
                    if (!this._componentDestroyed) {
                        // We need to trigger change detection manually, because
                        // `fromEvent` doesn't seem to do it at the proper time.
                        // This ensures that the label is reset when the
                        // user clicks outside.
                        this._changeDetectorRef.detectChanges();
                    }
                };
                /**
                 * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
                 * within the viewport.
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.updatePosition = function () {
                    if (this._overlayAttached) {
                        ( /** @type {?} */(this._overlayRef)).updatePosition();
                    }
                };
                Object.defineProperty(MatAutocompleteTrigger.prototype, "panelClosingActions", {
                    /**
                     * A stream of actions that should close the autocomplete panel, including
                     * when an option is selected, on blur, and when TAB is pressed.
                     * @return {?}
                     */
                    get: function () {
                        var _this = this;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(( /**
                         * @return {?}
                         */function () { return _this._overlayAttached; }))), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ?
                            this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(( /**
                             * @return {?}
                             */function () { return _this._overlayAttached; }))) :
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])()).pipe(
                        // Normalize the output so we return a consistent type.
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(( /**
                         * @param {?} event
                         * @return {?}
                         */function (/**
                         * @param {?} event
                         * @return {?}
                         */ event) { return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null; })));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatAutocompleteTrigger.prototype, "activeOption", {
                    /**
                     * The currently active option, coerced to MatOption type.
                     * @return {?}
                     */
                    get: function () {
                        if (this.autocomplete && this.autocomplete._keyManager) {
                            return this.autocomplete._keyManager.activeItem;
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Stream of clicks outside of the autocomplete panel.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._getOutsideClickStream = function () {
                    var _this = this;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'click'))), ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'touchend'))))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
                        // fall back to check the first element in the path of the click event.
                        /** @type {?} */
                        var clickTarget = ( /** @type {?} */((_this._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] :
                            event.target)));
                        /** @type {?} */
                        var formField = _this._formField ? _this._formField._elementRef.nativeElement : null;
                        return _this._overlayAttached && clickTarget !== _this._element.nativeElement &&
                            (!formField || !formField.contains(clickTarget)) &&
                            (!!_this._overlayRef && !_this._overlayRef.overlayElement.contains(clickTarget));
                    })));
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} value
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.writeValue = function (value) {
                    var _this = this;
                    Promise.resolve(null).then(( /**
                     * @return {?}
                     */function () { return _this._setTriggerValue(value); }));
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.registerOnChange = function (fn) {
                    this._onChange = fn;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.registerOnTouched = function (fn) {
                    this._onTouched = fn;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype.setDisabledState = function (isDisabled) {
                    this._element.nativeElement.disabled = isDisabled;
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._handleKeydown = function (event) {
                    /** @type {?} */
                    var keyCode = event.keyCode;
                    // Prevent the default action on all escape key presses. This is here primarily to bring IE
                    // in line with other browsers. By default, pressing escape on IE will cause it to revert
                    // the input value to the one that it had on focus, however it won't dispatch any events
                    // which means that the model value will be out of sync with the view.
                    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
                        event.preventDefault();
                    }
                    if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] && this.panelOpen) {
                        this.activeOption._selectViaInteraction();
                        this._resetActiveItem();
                        event.preventDefault();
                    }
                    else if (this.autocomplete) {
                        /** @type {?} */
                        var prevActiveItem = this.autocomplete._keyManager.activeItem;
                        /** @type {?} */
                        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"];
                        if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["TAB"]) {
                            this.autocomplete._keyManager.onKeydown(event);
                        }
                        else if (isArrowKey && this._canOpen()) {
                            this.openPanel();
                        }
                        if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                            this._scrollToOption();
                        }
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._handleInput = function (event) {
                    /** @type {?} */
                    var target = ( /** @type {?} */(event.target));
                    /** @type {?} */
                    var value = target.value;
                    // Based on `NumberValueAccessor` from forms.
                    if (target.type === 'number') {
                        value = value == '' ? null : parseFloat(value);
                    }
                    // If the input has a placeholder, IE will fire the `input` event on page load,
                    // focus and blur, in addition to when the user actually changed the value. To
                    // filter out all of the extra events, we save the value on focus and between
                    // `input` events, and we check whether it changed.
                    // See: https://connect.microsoft.com/IE/feedback/details/885747/
                    if (this._previousValue !== value) {
                        this._previousValue = value;
                        this._onChange(value);
                        if (this._canOpen() && this._document.activeElement === event.target) {
                            this.openPanel();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._handleFocus = function () {
                    if (!this._canOpenOnNextFocus) {
                        this._canOpenOnNextFocus = true;
                    }
                    else if (this._canOpen()) {
                        this._previousValue = this._element.nativeElement.value;
                        this._attachOverlay();
                        this._floatLabel(true);
                    }
                };
                /**
                 * In "auto" mode, the label will animate down as soon as focus is lost.
                 * This causes the value to jump when selecting an option with the mouse.
                 * This method manually floats the label until the panel can be closed.
                 * @private
                 * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._floatLabel = function (shouldAnimate) {
                    if (shouldAnimate === void 0) { shouldAnimate = false; }
                    if (this._formField && this._formField.floatLabel === 'auto') {
                        if (shouldAnimate) {
                            this._formField._animateAndLockLabel();
                        }
                        else {
                            this._formField.floatLabel = 'always';
                        }
                        this._manuallyFloatingLabel = true;
                    }
                };
                /**
                 * If the label has been manually elevated, return it to its normal state.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._resetLabel = function () {
                    if (this._manuallyFloatingLabel) {
                        this._formField.floatLabel = 'auto';
                        this._manuallyFloatingLabel = false;
                    }
                };
                /**
                 * Given that we are not actually focusing active options, we must manually adjust scroll
                 * to reveal options below the fold. First, we find the offset of the option from the top
                 * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
                 * the panel height + the option height, so the active option will be just visible at the
                 * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
                 * will become the offset. If that offset is visible within the panel already, the scrollTop is
                 * not adjusted.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._scrollToOption = function () {
                    /** @type {?} */
                    var index = this.autocomplete._keyManager.activeItemIndex || 0;
                    /** @type {?} */
                    var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);
                    if (index === 0 && labelCount === 1) {
                        // If we've got one group label before the option and we're at the top option,
                        // scroll the list to the top. This is better UX than scrolling the list to the
                        // top of the option, because it allows the user to read the top group's label.
                        this.autocomplete._setScrollTop(0);
                    }
                    else {
                        /** @type {?} */
                        var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
                        this.autocomplete._setScrollTop(newScrollPosition);
                    }
                };
                /**
                 * This method listens to a stream of panel closing actions and resets the
                 * stream every time the option list changes.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._subscribeToClosingActions = function () {
                    var _this = this;
                    /** @type {?} */
                    var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
                    /** @type {?} */
                    var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(( /**
                     * @return {?}
                     */function () { return _this._positionStrategy.reapplyLastPosition(); })), 
                    // Defer emitting to the stream until the next tick, because changing
                    // bindings in here will cause "changed after checked" errors.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0));
                    // When the zone is stable initially, and when the option list changes...
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(firstStable, optionChanges)
                        .pipe(
                    // create a new stream of panelClosingActions, replacing any previous streams
                    // that were created, and flatten it so our stream only emits closing events...
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var wasOpen = _this.panelOpen;
                        _this._resetActiveItem();
                        _this.autocomplete._setVisibility();
                        if (_this.panelOpen) {
                            ( /** @type {?} */(_this._overlayRef)).updatePosition();
                            // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                            // event, because we may not have emitted it when the panel was attached. This
                            // can happen if the users opens the panel and there are no options, but the
                            // options come in slightly later or as a result of the value changing.
                            if (wasOpen !== _this.panelOpen) {
                                _this.autocomplete.opened.emit();
                            }
                        }
                        return _this.panelClosingActions;
                    })), 
                    // when the first closing event occurs...
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1))
                        // set the value, close the panel, and complete.
                        .subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) { return _this._setValueAndClose(event); }));
                };
                /**
                 * Destroys the autocomplete suggestion panel.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._destroyPanel = function () {
                    if (this._overlayRef) {
                        this.closePanel();
                        this._overlayRef.dispose();
                        this._overlayRef = null;
                    }
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._setTriggerValue = function (value) {
                    /** @type {?} */
                    var toDisplay = this.autocomplete && this.autocomplete.displayWith ?
                        this.autocomplete.displayWith(value) :
                        value;
                    // Simply falling back to an empty string if the display value is falsy does not work properly.
                    // The display value can also be the number zero and shouldn't fall back to an empty string.
                    /** @type {?} */
                    var inputValue = toDisplay != null ? toDisplay : '';
                    // If it's used within a `MatFormField`, we should set it through the property so it can go
                    // through change detection.
                    if (this._formField) {
                        this._formField._control.value = inputValue;
                    }
                    else {
                        this._element.nativeElement.value = inputValue;
                    }
                    this._previousValue = inputValue;
                };
                /**
                 * This method closes the panel, and if a value is specified, also sets the associated
                 * control to that value. It will also mark the control as dirty if this interaction
                 * stemmed from the user.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._setValueAndClose = function (event) {
                    if (event && event.source) {
                        this._clearPreviousSelectedOption(event.source);
                        this._setTriggerValue(event.source.value);
                        this._onChange(event.source.value);
                        this._element.nativeElement.focus();
                        this.autocomplete._emitSelectEvent(event.source);
                    }
                    this.closePanel();
                };
                /**
                 * Clear any previous selected option and emit a selection change event for this option
                 * @private
                 * @param {?} skip
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._clearPreviousSelectedOption = function (skip) {
                    this.autocomplete.options.forEach(( /**
                     * @param {?} option
                     * @return {?}
                     */function (/**
                     * @param {?} option
                     * @return {?}
                     */ option) {
                        if (option != skip && option.selected) {
                            option.deselect();
                        }
                    }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._attachOverlay = function () {
                    var _this = this;
                    if (!this.autocomplete) {
                        throw getMatAutocompleteMissingPanelError();
                    }
                    /** @type {?} */
                    var overlayRef = this._overlayRef;
                    if (!overlayRef) {
                        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
                        overlayRef = this._overlay.create(this._getOverlayConfig());
                        this._overlayRef = overlayRef;
                        // Use the `keydownEvents` in order to take advantage of
                        // the overlay event targeting provided by the CDK overlay.
                        overlayRef.keydownEvents().subscribe(( /**
                         * @param {?} event
                         * @return {?}
                         */function (/**
                         * @param {?} event
                         * @return {?}
                         */ event) {
                            // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                            // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] || (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] && event.altKey)) {
                                _this._resetActiveItem();
                                _this._closeKeyEventStream.next();
                                // We need to stop propagation, otherwise the event will eventually
                                // reach the input itself and cause the overlay to be reopened.
                                event.stopPropagation();
                                event.preventDefault();
                            }
                        }));
                        if (this._viewportRuler) {
                            this._viewportSubscription = this._viewportRuler.change().subscribe(( /**
                             * @return {?}
                             */function () {
                                if (_this.panelOpen && overlayRef) {
                                    overlayRef.updateSize({ width: _this._getPanelWidth() });
                                }
                            }));
                        }
                    }
                    else {
                        // Update the trigger, panel width and direction, in case anything has changed.
                        this._positionStrategy.setOrigin(this._getConnectedElement());
                        overlayRef.updateSize({ width: this._getPanelWidth() });
                    }
                    if (overlayRef && !overlayRef.hasAttached()) {
                        overlayRef.attach(this._portal);
                        this._closingActionsSubscription = this._subscribeToClosingActions();
                    }
                    /** @type {?} */
                    var wasOpen = this.panelOpen;
                    this.autocomplete._setVisibility();
                    this.autocomplete._isOpen = this._overlayAttached = true;
                    // We need to do an extra `panelOpen` check in here, because the
                    // autocomplete won't be shown if there are no options.
                    if (this.panelOpen && wasOpen !== this.panelOpen) {
                        this.autocomplete.opened.emit();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._getOverlayConfig = function () {
                    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
                        positionStrategy: this._getOverlayPosition(),
                        scrollStrategy: this._scrollStrategy(),
                        width: this._getPanelWidth(),
                        direction: this._dir
                    });
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._getOverlayPosition = function () {
                    /** @type {?} */
                    var strategy = this._overlay.position()
                        .flexibleConnectedTo(this._getConnectedElement())
                        .withFlexibleDimensions(false)
                        .withPush(false);
                    this._setStrategyPositions(strategy);
                    this._positionStrategy = strategy;
                    return strategy;
                };
                /**
                 * Sets the positions on a position strategy based on the directive's input state.
                 * @private
                 * @param {?} positionStrategy
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._setStrategyPositions = function (positionStrategy) {
                    /** @type {?} */
                    var belowPosition = {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top'
                    };
                    /** @type {?} */
                    var abovePosition = {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom',
                        // The overlay edge connected to the trigger should have squared corners, while
                        // the opposite end has rounded corners. We apply a CSS class to swap the
                        // border-radius based on the overlay position.
                        panelClass: 'mat-autocomplete-panel-above'
                    };
                    /** @type {?} */
                    var positions;
                    if (this.position === 'above') {
                        positions = [abovePosition];
                    }
                    else if (this.position === 'below') {
                        positions = [belowPosition];
                    }
                    else {
                        positions = [belowPosition, abovePosition];
                    }
                    positionStrategy.withPositions(positions);
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._getConnectedElement = function () {
                    if (this.connectedTo) {
                        return this.connectedTo.elementRef;
                    }
                    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._getPanelWidth = function () {
                    return this.autocomplete.panelWidth || this._getHostWidth();
                };
                /**
                 * Returns the width of the input element, so the panel width can match it.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._getHostWidth = function () {
                    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
                };
                /**
                 * Resets the active item to -1 so arrow events will activate the
                 * correct options, or to 0 if the consumer opted into it.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._resetActiveItem = function () {
                    this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
                };
                /**
                 * Determines whether the panel can be opened.
                 * @private
                 * @return {?}
                 */
                MatAutocompleteTrigger.prototype._canOpen = function () {
                    /** @type {?} */
                    var element = this._element.nativeElement;
                    return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
                };
                return MatAutocompleteTrigger;
            }());
            MatAutocompleteTrigger.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: "input[matAutocomplete], textarea[matAutocomplete]",
                            host: {
                                'class': 'mat-autocomplete-trigger',
                                '[attr.autocomplete]': 'autocompleteAttribute',
                                '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                                '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                                '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
                                '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                                '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
                                '[attr.aria-haspopup]': '!autocompleteDisabled',
                                // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                                // a little earlier. This avoids issues where IE delays the focusing of the input.
                                '(focusin)': '_handleFocus()',
                                '(blur)': '_onTouched()',
                                '(input)': '_handleInput($event)',
                                '(keydown)': '_handleKeydown($event)',
                            },
                            exportAs: 'matAutocompleteTrigger',
                            providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
                        },] },
            ];
            /** @nocollapse */
            MatAutocompleteTrigger.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
                { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"] }
            ]; };
            MatAutocompleteTrigger.propDecorators = {
                autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matAutocomplete',] }],
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matAutocompletePosition',] }],
                connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matAutocompleteConnectedTo',] }],
                autocompleteAttribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['autocomplete',] }],
                autocompleteDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matAutocompleteDisabled',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatAutocompleteModule = /** @class */ (function () {
                function MatAutocompleteModule() {
                }
                return MatAutocompleteModule;
            }());
            MatAutocompleteModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
                            exports: [
                                MatAutocomplete,
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                                MatAutocompleteTrigger,
                                MatAutocompleteOrigin,
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]
                            ],
                            declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                            providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
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
            //# sourceMappingURL=autocomplete.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8-es2015.js.map
//# sourceMappingURL=default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8-es5.js.map
//# sourceMappingURL=default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8-es5.js.map