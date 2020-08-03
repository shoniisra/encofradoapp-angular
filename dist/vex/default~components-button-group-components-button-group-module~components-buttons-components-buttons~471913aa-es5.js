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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"], {
        /***/ "./node_modules/@angular/material/esm2015/button-toggle.js": 
        /*!*****************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/button-toggle.js ***!
          \*****************************************************************/
        /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () { return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () { return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function () { return MatButtonToggleGroupMultiple; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () { return MatButtonToggleChange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () { return MatButtonToggleGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () { return MatButtonToggle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () { return MatButtonToggleModule; });
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
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
             * Injection token that can be used to configure the
             * default options for all button toggles within an app.
             * @type {?}
             */
            var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
            /**
             * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
             * This allows it to support [(ngModel)].
             * \@docs-private
             * @type {?}
             */
            var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MatButtonToggleGroup; })),
                multi: true
            };
            /**
             * @deprecated Use `MatButtonToggleGroup` instead.
             * \@breaking-change 8.0.0
             */
            var MatButtonToggleGroupMultiple = /** @class */ (function () {
                function MatButtonToggleGroupMultiple() {
                }
                return MatButtonToggleGroupMultiple;
            }());
            /** @type {?} */
            var _uniqueIdCounter = 0;
            /**
             * Change event object emitted by MatButtonToggle.
             */
            var MatButtonToggleChange = /** @class */ (function () {
                /**
                 * @param {?} source
                 * @param {?} value
                 */
                function MatButtonToggleChange(source, value) {
                    this.source = source;
                    this.value = value;
                }
                return MatButtonToggleChange;
            }());
            /**
             * Exclusive selection button toggle group that behaves like a radio-button group.
             */
            var MatButtonToggleGroup = /** @class */ (function () {
                /**
                 * @param {?} _changeDetector
                 * @param {?=} defaultOptions
                 */
                function MatButtonToggleGroup(_changeDetector, defaultOptions) {
                    this._changeDetector = _changeDetector;
                    this._vertical = false;
                    this._multiple = false;
                    this._disabled = false;
                    /**
                     * The method to be called in order to update ngModel.
                     * Now `ngModel` binding is not supported in multiple selection mode.
                     */
                    this._controlValueAccessorChangeFn = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * onTouch function registered via registerOnTouch (ControlValueAccessor).
                     */
                    this._onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._name = "mat-button-toggle-group-" + _uniqueIdCounter++;
                    /**
                     * Event that emits whenever the value of the group changes.
                     * Used to facilitate two-way data binding.
                     * \@docs-private
                     */
                    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    /**
                     * Event emitted when the group's value changes.
                     */
                    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    this.appearance =
                        defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
                }
                Object.defineProperty(MatButtonToggleGroup.prototype, "name", {
                    /**
                     * `name` attribute for the underlying `input` element.
                     * @return {?}
                     */
                    get: function () { return this._name; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        var _this = this;
                        this._name = value;
                        if (this._buttonToggles) {
                            this._buttonToggles.forEach(( /**
                             * @param {?} toggle
                             * @return {?}
                             */function (/**
                             * @param {?} toggle
                             * @return {?}
                             */ toggle) {
                                toggle.name = _this._name;
                                toggle._markForCheck();
                            }));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggleGroup.prototype, "vertical", {
                    /**
                     * Whether the toggle group is vertical.
                     * @return {?}
                     */
                    get: function () { return this._vertical; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggleGroup.prototype, "value", {
                    /**
                     * Value of the toggle group.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var selected = this._selectionModel ? this._selectionModel.selected : [];
                        if (this.multiple) {
                            return selected.map(( /**
                             * @param {?} toggle
                             * @return {?}
                             */function (/**
                             * @param {?} toggle
                             * @return {?}
                             */ toggle) { return toggle.value; }));
                        }
                        return selected[0] ? selected[0].value : undefined;
                    },
                    /**
                     * @param {?} newValue
                     * @return {?}
                     */
                    set: function (newValue) {
                        this._setSelectionByValue(newValue);
                        this.valueChange.emit(this.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggleGroup.prototype, "selected", {
                    /**
                     * Selected button toggles in the group.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var selected = this._selectionModel ? this._selectionModel.selected : [];
                        return this.multiple ? selected : (selected[0] || null);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggleGroup.prototype, "multiple", {
                    /**
                     * Whether multiple button toggles can be selected.
                     * @return {?}
                     */
                    get: function () { return this._multiple; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggleGroup.prototype, "disabled", {
                    /**
                     * Whether multiple button toggle group is disabled.
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                        if (this._buttonToggles) {
                            this._buttonToggles.forEach(( /**
                             * @param {?} toggle
                             * @return {?}
                             */function (/**
                             * @param {?} toggle
                             * @return {?}
                             */ toggle) { return toggle._markForCheck(); }));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype.ngOnInit = function () {
                    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
                };
                /**
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype.ngAfterContentInit = function () {
                    var _a;
                    (_a = this._selectionModel).select.apply(_a, this._buttonToggles.filter(( /**
                     * @param {?} toggle
                     * @return {?}
                     */function (/**
                     * @param {?} toggle
                     * @return {?}
                     */ toggle) { return toggle.checked; })));
                };
                /**
                 * Sets the model value. Implemented as part of ControlValueAccessor.
                 * @param {?} value Value to be set to the model.
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype.writeValue = function (value) {
                    this.value = value;
                    this._changeDetector.markForCheck();
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype.registerOnChange = function (fn) {
                    this._controlValueAccessorChangeFn = fn;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype.registerOnTouched = function (fn) {
                    this._onTouched = fn;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype.setDisabledState = function (isDisabled) {
                    this.disabled = isDisabled;
                };
                /**
                 * Dispatch change event with current selection and group value.
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._emitChangeEvent = function () {
                    /** @type {?} */
                    var selected = this.selected;
                    /** @type {?} */
                    var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
                    /** @type {?} */
                    var event = new MatButtonToggleChange(( /** @type {?} */(source)), this.value);
                    this._controlValueAccessorChangeFn(event.value);
                    this.change.emit(event);
                };
                /**
                 * Syncs a button toggle's selected state with the model value.
                 * @param {?} toggle Toggle to be synced.
                 * @param {?} select Whether the toggle should be selected.
                 * @param {?=} isUserInput Whether the change was a result of a user interaction.
                 * @param {?=} deferEvents Whether to defer emitting the change events.
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._syncButtonToggle = function (toggle, select, isUserInput, deferEvents) {
                    if (isUserInput === void 0) { isUserInput = false; }
                    if (deferEvents === void 0) { deferEvents = false; }
                    // Deselect the currently-selected toggle, if we're in single-selection
                    // mode and the button being toggled isn't selected at the moment.
                    if (!this.multiple && this.selected && !toggle.checked) {
                        (( /** @type {?} */(this.selected))).checked = false;
                    }
                    if (this._selectionModel) {
                        if (select) {
                            this._selectionModel.select(toggle);
                        }
                        else {
                            this._selectionModel.deselect(toggle);
                        }
                    }
                    else {
                        deferEvents = true;
                    }
                    // We need to defer in some cases in order to avoid "changed after checked errors", however
                    // the side-effect is that we may end up updating the model value out of sequence in others
                    // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
                    if (deferEvents) {
                    }
                    else {
                        this._updateModelValue(isUserInput);
                    }
                };
                /**
                 * Checks whether a button toggle is selected.
                 * @param {?} toggle
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._isSelected = function (toggle) {
                    return this._selectionModel && this._selectionModel.isSelected(toggle);
                };
                /**
                 * Determines whether a button toggle should be checked on init.
                 * @param {?} toggle
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._isPrechecked = function (toggle) {
                    if (typeof this._rawValue === 'undefined') {
                        return false;
                    }
                    if (this.multiple && Array.isArray(this._rawValue)) {
                        return this._rawValue.some(( /**
                         * @param {?} value
                         * @return {?}
                         */function (/**
                         * @param {?} value
                         * @return {?}
                         */ value) { return toggle.value != null && value === toggle.value; }));
                    }
                    return toggle.value === this._rawValue;
                };
                /**
                 * Updates the selection state of the toggles in the group based on a value.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._setSelectionByValue = function (value) {
                    var _this = this;
                    this._rawValue = value;
                    if (!this._buttonToggles) {
                        return;
                    }
                    if (this.multiple && value) {
                        if (!Array.isArray(value)) {
                            throw Error('Value must be an array in multiple-selection mode.');
                        }
                        this._clearSelection();
                        value.forEach(( /**
                         * @param {?} currentValue
                         * @return {?}
                         */function (currentValue) { return _this._selectValue(currentValue); }));
                    }
                    else {
                        this._clearSelection();
                        this._selectValue(value);
                    }
                };
                /**
                 * Clears the selected toggles.
                 * @private
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._clearSelection = function () {
                    this._selectionModel.clear();
                    this._buttonToggles.forEach(( /**
                     * @param {?} toggle
                     * @return {?}
                     */function (/**
                     * @param {?} toggle
                     * @return {?}
                     */ toggle) { return toggle.checked = false; }));
                };
                /**
                 * Selects a value if there's a toggle that corresponds to it.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._selectValue = function (value) {
                    /** @type {?} */
                    var correspondingOption = this._buttonToggles.find(( /**
                     * @param {?} toggle
                     * @return {?}
                     */function (/**
                     * @param {?} toggle
                     * @return {?}
                     */ toggle) {
                        return toggle.value != null && toggle.value === value;
                    }));
                    if (correspondingOption) {
                        correspondingOption.checked = true;
                        this._selectionModel.select(correspondingOption);
                    }
                };
                /**
                 * Syncs up the group's value with the model and emits the change event.
                 * @private
                 * @param {?} isUserInput
                 * @return {?}
                 */
                MatButtonToggleGroup.prototype._updateModelValue = function (isUserInput) {
                    // Only emit the change event for user input.
                    if (isUserInput) {
                        this._emitChangeEvent();
                    }
                    // Note: we emit this one no matter whether it was a user interaction, because
                    // it is used by Angular to sync up the two-way data binding.
                    this.valueChange.emit(this.value);
                };
                return MatButtonToggleGroup;
            }());
            MatButtonToggleGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                            selector: 'mat-button-toggle-group',
                            providers: [
                                MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
                                { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
                            ],
                            host: {
                                'role': 'group',
                                'class': 'mat-button-toggle-group',
                                '[attr.aria-disabled]': 'disabled',
                                '[class.mat-button-toggle-vertical]': 'vertical',
                                '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"',
                            },
                            exportAs: 'matButtonToggleGroup',
                        },] },
            ];
            /** @nocollapse */
            MatButtonToggleGroup.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
            ]; };
            MatButtonToggleGroup.propDecorators = {
                _buttonToggles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(( /**
                                         * @return {?}
                                         */function () { return MatButtonToggle; })),] }],
                appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
                multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
            };
            // Boilerplate for applying mixins to the MatButtonToggle class.
            /**
             * \@docs-private
             */
            var MatButtonToggleBase = /** @class */ (function () {
                function MatButtonToggleBase() {
                }
                return MatButtonToggleBase;
            }());
            /** @type {?} */
            var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
            /**
             * Single button inside of a toggle group.
             */
            var MatButtonToggle = /** @class */ (function (_super) {
                __extends(MatButtonToggle, _super);
                /**
                 * @param {?} toggleGroup
                 * @param {?} _changeDetectorRef
                 * @param {?} _elementRef
                 * @param {?} _focusMonitor
                 * @param {?} defaultTabIndex
                 * @param {?=} defaultOptions
                 */
                function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, 
                // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
                defaultTabIndex, defaultOptions) {
                    var _this = _super.call(this) || this;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._elementRef = _elementRef;
                    _this._focusMonitor = _focusMonitor;
                    _this._isSingleSelector = false;
                    _this._checked = false;
                    /**
                     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
                     */
                    _this.ariaLabelledby = null;
                    _this._disabled = false;
                    /**
                     * Event emitted when the group value changes.
                     */
                    _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                    /** @type {?} */
                    var parsedTabIndex = Number(defaultTabIndex);
                    _this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
                    _this.buttonToggleGroup = toggleGroup;
                    _this.appearance =
                        defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
                    return _this;
                }
                Object.defineProperty(MatButtonToggle.prototype, "buttonId", {
                    /**
                     * Unique ID for the underlying `button` element.
                     * @return {?}
                     */
                    get: function () { return this.id + "-button"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggle.prototype, "appearance", {
                    /**
                     * The appearance style of the button.
                     * @return {?}
                     */
                    get: function () {
                        return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._appearance = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggle.prototype, "checked", {
                    /**
                     * Whether the button is checked.
                     * @return {?}
                     */
                    get: function () {
                        return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                        if (newValue !== this._checked) {
                            this._checked = newValue;
                            if (this.buttonToggleGroup) {
                                this.buttonToggleGroup._syncButtonToggle(this, this._checked);
                            }
                            this._changeDetectorRef.markForCheck();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatButtonToggle.prototype, "disabled", {
                    /**
                     * Whether the button is disabled.
                     * @return {?}
                     */
                    get: function () {
                        return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatButtonToggle.prototype.ngOnInit = function () {
                    this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
                    this._type = this._isSingleSelector ? 'radio' : 'checkbox';
                    this.id = this.id || "mat-button-toggle-" + _uniqueIdCounter++;
                    if (this._isSingleSelector) {
                        this.name = this.buttonToggleGroup.name;
                    }
                    if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
                        this.checked = true;
                    }
                    this._focusMonitor.monitor(this._elementRef, true);
                };
                /**
                 * @return {?}
                 */
                MatButtonToggle.prototype.ngOnDestroy = function () {
                    /** @type {?} */
                    var group = this.buttonToggleGroup;
                    this._focusMonitor.stopMonitoring(this._elementRef);
                    // Remove the toggle from the selection once it's destroyed. Needs to happen
                    // on the next tick in order to avoid "changed after checked" errors.
                    if (group && group._isSelected(this)) {
                        group._syncButtonToggle(this, false, false, true);
                    }
                };
                /**
                 * Focuses the button.
                 * @param {?=} options
                 * @return {?}
                 */
                MatButtonToggle.prototype.focus = function (options) {
                    this._buttonElement.nativeElement.focus(options);
                };
                /**
                 * Checks the button toggle due to an interaction with the underlying native button.
                 * @return {?}
                 */
                MatButtonToggle.prototype._onButtonClick = function () {
                    /** @type {?} */
                    var newChecked = this._isSingleSelector ? true : !this._checked;
                    if (newChecked !== this._checked) {
                        this._checked = newChecked;
                        if (this.buttonToggleGroup) {
                            this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
                            this.buttonToggleGroup._onTouched();
                        }
                    }
                    // Emit a change event when it's the single selector
                    this.change.emit(new MatButtonToggleChange(this, this.value));
                };
                /**
                 * Marks the button toggle as needing checking for change detection.
                 * This method is exposed because the parent button toggle group will directly
                 * update bound properties of the radio button.
                 * @return {?}
                 */
                MatButtonToggle.prototype._markForCheck = function () {
                    // When the group value changes, the button will not be notified.
                    // Use `markForCheck` to explicit update button toggle's status.
                    this._changeDetectorRef.markForCheck();
                };
                return MatButtonToggle;
            }(_MatButtonToggleMixinBase));
            MatButtonToggle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{ selector: 'mat-button-toggle',
                            template: "<button #button class=\"mat-button-toggle-button\" type=\"button\" [id]=\"buttonId\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [attr.aria-pressed]=\"checked\" [disabled]=\"disabled || null\" [attr.name]=\"name || null\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (click)=\"_onButtonClick()\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></button><div class=\"mat-button-toggle-focus-overlay\"></div><div class=\"mat-button-toggle-ripple\" matRipple [matRippleTrigger]=\"button\" [matRippleDisabled]=\"this.disableRipple || this.disabled\"></div>",
                            styles: [".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                            exportAs: 'matButtonToggle',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                            inputs: ['disableRipple'],
                            host: {
                                '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
                                '[class.mat-button-toggle-checked]': 'checked',
                                '[class.mat-button-toggle-disabled]': 'disabled',
                                '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
                                'class': 'mat-button-toggle',
                                // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
                                // but can still receive focus from things like cdkFocusInitial.
                                '[attr.tabindex]': '-1',
                                '[attr.id]': 'id',
                                '[attr.name]': 'null',
                                '(focus)': 'focus()',
                            }
                        },] },
            ];
            /** @nocollapse */
            MatButtonToggle.ctorParameters = function () { return [
                { type: MatButtonToggleGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['tabindex',] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
            ]; };
            MatButtonToggle.propDecorators = {
                ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-label',] }],
                ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-labelledby',] }],
                _buttonElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['button', { static: false },] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
                change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatButtonToggleModule = /** @class */ (function () {
                function MatButtonToggleModule() {
                }
                return MatButtonToggleModule;
            }());
            MatButtonToggleModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
                            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
                            declarations: [MatButtonToggleGroup, MatButtonToggle],
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
            //# sourceMappingURL=button-toggle.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa-es2015.js.map
//# sourceMappingURL=default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa-es5.js.map
//# sourceMappingURL=default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa-es5.js.map