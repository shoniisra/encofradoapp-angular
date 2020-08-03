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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37"], {
        /***/ "./node_modules/@angular/material/esm2015/datepicker.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/datepicker.js ***!
          \**************************************************************/
        /*! exports provided: MatMultiYearView, yearsPerPage, yearsPerRow, MatDatepickerModule, MatCalendarHeader, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent, MatDatepicker, matDatepickerAnimations, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () { return MatMultiYearView; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () { return yearsPerPage; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () { return yearsPerRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () { return MatDatepickerModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () { return MatCalendarHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function () { return MatCalendar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () { return MatCalendarCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () { return MatCalendarBody; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () { return MAT_DATEPICKER_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () { return MatDatepickerContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () { return MatDatepicker; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () { return matDatepickerAnimations; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () { return MAT_DATEPICKER_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () { return MAT_DATEPICKER_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () { return MatDatepickerInputEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () { return MatDatepickerInput; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () { return MatDatepickerIntl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () { return MatDatepickerToggleIcon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () { return MatDatepickerToggle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function () { return MatMonthView; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function () { return MatYearView; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
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
             * \@docs-private
             * @param {?} provider
             * @return {?}
             */
            function createMissingDateImplError(provider) {
                return Error("MatDatepicker: No provider found for " + provider + ". You must import one of the following " +
                    "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " +
                    "custom implementation.");
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Datepicker data that requires internationalization.
             */
            var MatDatepickerIntl = /** @class */ (function () {
                function MatDatepickerIntl() {
                    /**
                     * Stream that emits whenever the labels here are changed. Use this to notify
                     * components if the labels have changed after initialization.
                     */
                    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    /**
                     * A label for the calendar popup (used by screen readers).
                     */
                    this.calendarLabel = 'Calendar';
                    /**
                     * A label for the button used to open the calendar popup (used by screen readers).
                     */
                    this.openCalendarLabel = 'Open calendar';
                    /**
                     * A label for the previous month button (used by screen readers).
                     */
                    this.prevMonthLabel = 'Previous month';
                    /**
                     * A label for the next month button (used by screen readers).
                     */
                    this.nextMonthLabel = 'Next month';
                    /**
                     * A label for the previous year button (used by screen readers).
                     */
                    this.prevYearLabel = 'Previous year';
                    /**
                     * A label for the next year button (used by screen readers).
                     */
                    this.nextYearLabel = 'Next year';
                    /**
                     * A label for the previous multi-year button (used by screen readers).
                     */
                    this.prevMultiYearLabel = 'Previous 20 years';
                    /**
                     * A label for the next multi-year button (used by screen readers).
                     */
                    this.nextMultiYearLabel = 'Next 20 years';
                    /**
                     * A label for the 'switch to month view' button (used by screen readers).
                     */
                    this.switchToMonthViewLabel = 'Choose date';
                    /**
                     * A label for the 'switch to year view' button (used by screen readers).
                     */
                    this.switchToMultiYearViewLabel = 'Choose month and year';
                }
                /**
                 * Formats a range of years.
                 * @param {?} start
                 * @param {?} end
                 * @return {?}
                 */
                MatDatepickerIntl.prototype.formatYearRange = function (start, end) {
                    return start + " \u2013 " + end;
                };
                return MatDatepickerIntl;
            }());
            MatDatepickerIntl.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ MatDatepickerIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * An internal class that represents the data corresponding to a single calendar cell.
             * \@docs-private
             */
            var MatCalendarCell = /** @class */ (function () {
                /**
                 * @param {?} value
                 * @param {?} displayValue
                 * @param {?} ariaLabel
                 * @param {?} enabled
                 * @param {?=} cssClasses
                 */
                function MatCalendarCell(value, displayValue, ariaLabel, enabled, cssClasses) {
                    this.value = value;
                    this.displayValue = displayValue;
                    this.ariaLabel = ariaLabel;
                    this.enabled = enabled;
                    this.cssClasses = cssClasses;
                }
                return MatCalendarCell;
            }());
            /**
             * An internal component used to display calendar data in a table.
             * \@docs-private
             */
            var MatCalendarBody = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _ngZone
                 */
                function MatCalendarBody(_elementRef, _ngZone) {
                    this._elementRef = _elementRef;
                    this._ngZone = _ngZone;
                    /**
                     * The number of columns in the table.
                     */
                    this.numCols = 7;
                    /**
                     * The cell number of the active cell in the table.
                     */
                    this.activeCell = 0;
                    /**
                     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
                     * maintained even as the table resizes.
                     */
                    this.cellAspectRatio = 1;
                    /**
                     * Emits when a new value is selected.
                     */
                    this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                }
                /**
                 * @param {?} cell
                 * @return {?}
                 */
                MatCalendarBody.prototype._cellClicked = function (cell) {
                    if (cell.enabled) {
                        this.selectedValueChange.emit(cell.value);
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatCalendarBody.prototype.ngOnChanges = function (changes) {
                    /** @type {?} */
                    var columnChanges = changes['numCols'];
                    var _a = this, rows = _a.rows, numCols = _a.numCols;
                    if (changes['rows'] || columnChanges) {
                        this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
                    }
                    if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
                        this._cellPadding = 50 * this.cellAspectRatio / numCols + "%";
                    }
                    if (columnChanges || !this._cellWidth) {
                        this._cellWidth = 100 / numCols + "%";
                    }
                };
                /**
                 * @param {?} rowIndex
                 * @param {?} colIndex
                 * @return {?}
                 */
                MatCalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
                    /** @type {?} */
                    var cellNumber = rowIndex * this.numCols + colIndex;
                    // Account for the fact that the first row may not have as many cells.
                    if (rowIndex) {
                        cellNumber -= this._firstRowOffset;
                    }
                    return cellNumber == this.activeCell;
                };
                /**
                 * Focuses the active cell after the microtask queue is empty.
                 * @return {?}
                 */
                MatCalendarBody.prototype._focusActiveCell = function () {
                    var _this = this;
                    this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        _this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var activeCell = _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                            if (activeCell) {
                                activeCell.focus();
                            }
                        }));
                    }));
                };
                return MatCalendarBody;
            }());
            MatCalendarBody.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: '[mat-calendar-body]',
                            template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"mat-calendar-body-label\" [attr.colspan]=\"numCols\" [style.paddingTop]=\"_cellPadding\" [style.paddingBottom]=\"_cellPadding\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"mat-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\" [style.paddingTop]=\"_cellPadding\" [style.paddingBottom]=\"_cellPadding\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"mat-calendar-body-cell\" [ngClass]=\"item.cssClasses\" [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.mat-calendar-body-disabled]=\"!item.enabled\" [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" [attr.aria-selected]=\"selectedValue === item.value\" (click)=\"_cellClicked(item)\" [style.width]=\"_cellWidth\" [style.paddingTop]=\"_cellPadding\" role=\"button\" [style.paddingBottom]=\"_cellPadding\"><div class=\"mat-calendar-body-cell-content\" [class.mat-calendar-body-selected]=\"selectedValue === item.value\" [class.mat-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
                            styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.71429%;padding-right:4.71429%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}@media (-ms-high-contrast:active){.mat-calendar-body-cell-content{border:none}}@media (-ms-high-contrast:active){.mat-calendar-body-selected,.mat-datepicker-popup:not(:empty){outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
                            host: {
                                'class': 'mat-calendar-body',
                                'role': 'grid',
                                'aria-readonly': 'true'
                            },
                            exportAs: 'matCalendarBody',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatCalendarBody.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            MatCalendarBody.propDecorators = {
                label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                labelMinRequiredCells: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                cellAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var DAYS_PER_WEEK = 7;
            /**
             * An internal component used to display a single month in the datepicker.
             * \@docs-private
             * @template D
             */
            var MatMonthView = /** @class */ (function () {
                /**
                 * @param {?} _changeDetectorRef
                 * @param {?} _dateFormats
                 * @param {?} _dateAdapter
                 * @param {?=} _dir
                 */
                function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
                    this._changeDetectorRef = _changeDetectorRef;
                    this._dateFormats = _dateFormats;
                    this._dateAdapter = _dateAdapter;
                    this._dir = _dir;
                    /**
                     * Emits when a new date is selected.
                     */
                    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when any date is selected.
                     */
                    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when any date is activated.
                     */
                    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    if (!this._dateAdapter) {
                        throw createMissingDateImplError('DateAdapter');
                    }
                    if (!this._dateFormats) {
                        throw createMissingDateImplError('MAT_DATE_FORMATS');
                    }
                    this._activeDate = this._dateAdapter.today();
                }
                Object.defineProperty(MatMonthView.prototype, "activeDate", {
                    /**
                     * The date to display in this month view (everything other than the month and year is ignored).
                     * @return {?}
                     */
                    get: function () { return this._activeDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var oldActiveDate = this._activeDate;
                        /** @type {?} */
                        var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
                        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
                        if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
                            this._init();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatMonthView.prototype, "selected", {
                    /**
                     * The currently selected date.
                     * @return {?}
                     */
                    get: function () { return this._selected; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                        this._selectedDate = this._getDateInCurrentMonth(this._selected);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatMonthView.prototype, "minDate", {
                    /**
                     * The minimum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._minDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatMonthView.prototype, "maxDate", {
                    /**
                     * The maximum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._maxDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatMonthView.prototype.ngAfterContentInit = function () {
                    this._init();
                };
                /**
                 * Handles when a new date is selected.
                 * @param {?} date
                 * @return {?}
                 */
                MatMonthView.prototype._dateSelected = function (date) {
                    if (this._selectedDate != date) {
                        /** @type {?} */
                        var selectedYear = this._dateAdapter.getYear(this.activeDate);
                        /** @type {?} */
                        var selectedMonth = this._dateAdapter.getMonth(this.activeDate);
                        /** @type {?} */
                        var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
                        this.selectedChange.emit(selectedDate);
                    }
                    this._userSelection.emit();
                };
                /**
                 * Handles keydown events on the calendar body when calendar is in month view.
                 * @param {?} event
                 * @return {?}
                 */
                MatMonthView.prototype._handleCalendarBodyKeydown = function (event) {
                    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
                    // disabled ones from being selected. This may not be ideal, we should look into whether
                    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
                    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
                    // disabled ones from being selected. This may not be ideal, we should look into whether
                    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
                    /** @type {?} */
                    var oldActiveDate = this._activeDate;
                    /** @type {?} */
                    var isRtl = this._isRtl();
                    switch (event.keyCode) {
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                            this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                                this._dateAdapter.getDate(this._activeDate)));
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                            this.activeDate = event.altKey ?
                                this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                                this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                            this.activeDate = event.altKey ?
                                this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                                this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]:
                            if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                                this._dateSelected(this._dateAdapter.getDate(this._activeDate));
                                this._userSelection.emit();
                                // Prevent unexpected default actions such as form submission.
                                event.preventDefault();
                            }
                            return;
                        default:
                            // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                            return;
                    }
                    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
                        this.activeDateChange.emit(this.activeDate);
                    }
                    this._focusActiveCell();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                };
                /**
                 * Initializes this month view.
                 * @return {?}
                 */
                MatMonthView.prototype._init = function () {
                    this._selectedDate = this._getDateInCurrentMonth(this.selected);
                    this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
                    this._monthLabel =
                        this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                            .toLocaleUpperCase();
                    /** @type {?} */
                    var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
                    this._firstWeekOffset =
                        (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                            this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
                    this._initWeekdays();
                    this._createWeekCells();
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Focuses the active cell after the microtask queue is empty.
                 * @return {?}
                 */
                MatMonthView.prototype._focusActiveCell = function () {
                    this._matCalendarBody._focusActiveCell();
                };
                /**
                 * Initializes the weekdays.
                 * @private
                 * @return {?}
                 */
                MatMonthView.prototype._initWeekdays = function () {
                    /** @type {?} */
                    var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
                    /** @type {?} */
                    var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
                    /** @type {?} */
                    var longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
                    // Rotate the labels for days of the week based on the configured first day of the week.
                    /** @type {?} */
                    var weekdays = longWeekdays.map(( /**
                     * @param {?} long
                     * @param {?} i
                     * @return {?}
                     */function (long, i) {
                        return { long: long, narrow: narrowWeekdays[i] };
                    }));
                    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
                };
                /**
                 * Creates MatCalendarCells for the dates in this month.
                 * @private
                 * @return {?}
                 */
                MatMonthView.prototype._createWeekCells = function () {
                    /** @type {?} */
                    var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
                    /** @type {?} */
                    var dateNames = this._dateAdapter.getDateNames();
                    this._weeks = [[]];
                    for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
                        if (cell == DAYS_PER_WEEK) {
                            this._weeks.push([]);
                            cell = 0;
                        }
                        /** @type {?} */
                        var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
                        /** @type {?} */
                        var enabled = this._shouldEnableDate(date);
                        /** @type {?} */
                        var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
                        /** @type {?} */
                        var cellClasses = this.dateClass ? this.dateClass(date) : undefined;
                        this._weeks[this._weeks.length - 1]
                            .push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
                    }
                };
                /**
                 * Date filter for the month
                 * @private
                 * @param {?} date
                 * @return {?}
                 */
                MatMonthView.prototype._shouldEnableDate = function (date) {
                    return !!date &&
                        (!this.dateFilter || this.dateFilter(date)) &&
                        (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
                        (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
                };
                /**
                 * Gets the date in this month that the given Date falls on.
                 * Returns null if the given Date is in another month.
                 * @private
                 * @param {?} date
                 * @return {?}
                 */
                MatMonthView.prototype._getDateInCurrentMonth = function (date) {
                    return date && this._hasSameMonthAndYear(date, this.activeDate) ?
                        this._dateAdapter.getDate(date) : null;
                };
                /**
                 * Checks whether the 2 dates are non-null and fall within the same month of the same year.
                 * @private
                 * @param {?} d1
                 * @param {?} d2
                 * @return {?}
                 */
                MatMonthView.prototype._hasSameMonthAndYear = function (d1, d2) {
                    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
                        this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
                };
                /**
                 * @private
                 * @param {?} obj The object to check.
                 * @return {?} The given object if it is both a date instance and valid, otherwise null.
                 */
                MatMonthView.prototype._getValidDateOrNull = function (obj) {
                    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
                };
                /**
                 * Determines whether the user has the RTL layout direction.
                 * @private
                 * @return {?}
                 */
                MatMonthView.prototype._isRtl = function () {
                    return this._dir && this._dir.value === 'rtl';
                };
                return MatMonthView;
            }());
            MatMonthView.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-month-view',
                            template: "<table class=\"mat-calendar-table\" role=\"presentation\"><thead class=\"mat-calendar-table-header\"><tr><th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr></thead><tbody mat-calendar-body [label]=\"_monthLabel\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [labelMinRequiredCells]=\"3\" [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                            exportAs: 'matMonthView',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            MatMonthView.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            MatMonthView.propDecorators = {
                activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody, { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var yearsPerPage = 24;
            /** @type {?} */
            var yearsPerRow = 4;
            /**
             * An internal component used to display a year selector in the datepicker.
             * \@docs-private
             * @template D
             */
            var MatMultiYearView = /** @class */ (function () {
                /**
                 * @param {?} _changeDetectorRef
                 * @param {?} _dateAdapter
                 * @param {?=} _dir
                 */
                function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
                    this._changeDetectorRef = _changeDetectorRef;
                    this._dateAdapter = _dateAdapter;
                    this._dir = _dir;
                    /**
                     * Emits when a new year is selected.
                     */
                    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits the selected year. This doesn't imply a change on the selected date
                     */
                    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when any date is activated.
                     */
                    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    if (!this._dateAdapter) {
                        throw createMissingDateImplError('DateAdapter');
                    }
                    this._activeDate = this._dateAdapter.today();
                }
                Object.defineProperty(MatMultiYearView.prototype, "activeDate", {
                    /**
                     * The date to display in this multi-year view (everything other than the year is ignored).
                     * @return {?}
                     */
                    get: function () { return this._activeDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var oldActiveDate = this._activeDate;
                        /** @type {?} */
                        var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
                        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
                        if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
                            this._init();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatMultiYearView.prototype, "selected", {
                    /**
                     * The currently selected date.
                     * @return {?}
                     */
                    get: function () { return this._selected; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                        this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatMultiYearView.prototype, "minDate", {
                    /**
                     * The minimum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._minDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatMultiYearView.prototype, "maxDate", {
                    /**
                     * The maximum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._maxDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatMultiYearView.prototype.ngAfterContentInit = function () {
                    this._init();
                };
                /**
                 * Initializes this multi-year view.
                 * @return {?}
                 */
                MatMultiYearView.prototype._init = function () {
                    var _this = this;
                    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
                    // We want a range years such that we maximize the number of
                    // enabled dates visible at once. This prevents issues where the minimum year
                    // is the last item of a page OR the maximum year is the first item of a page.
                    // The offset from the active year to the "slot" for the starting year is the
                    // *actual* first rendered year in the multi-year view.
                    /** @type {?} */
                    var activeYear = this._dateAdapter.getYear(this._activeDate);
                    /** @type {?} */
                    var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
                    this._years = [];
                    for (var i = 0, row = []; i < yearsPerPage; i++) {
                        row.push(minYearOfPage + i);
                        if (row.length == yearsPerRow) {
                            this._years.push(row.map(( /**
                             * @param {?} year
                             * @return {?}
                             */function (/**
                             * @param {?} year
                             * @return {?}
                             */ year) { return _this._createCellForYear(year); })));
                            row = [];
                        }
                    }
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Handles when a new year is selected.
                 * @param {?} year
                 * @return {?}
                 */
                MatMultiYearView.prototype._yearSelected = function (year) {
                    this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
                    /** @type {?} */
                    var month = this._dateAdapter.getMonth(this.activeDate);
                    /** @type {?} */
                    var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
                    this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
                };
                /**
                 * Handles keydown events on the calendar body when calendar is in multi-year view.
                 * @param {?} event
                 * @return {?}
                 */
                MatMultiYearView.prototype._handleCalendarBodyKeydown = function (event) {
                    /** @type {?} */
                    var oldActiveDate = this._activeDate;
                    /** @type {?} */
                    var isRtl = this._isRtl();
                    switch (event.keyCode) {
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                            this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                            this.activeDate =
                                this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                            this.activeDate =
                                this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]:
                            this._yearSelected(this._dateAdapter.getYear(this._activeDate));
                            break;
                        default:
                            // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                            return;
                    }
                    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
                        this.activeDateChange.emit(this.activeDate);
                    }
                    this._focusActiveCell();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                };
                /**
                 * @return {?}
                 */
                MatMultiYearView.prototype._getActiveCell = function () {
                    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
                };
                /**
                 * Focuses the active cell after the microtask queue is empty.
                 * @return {?}
                 */
                MatMultiYearView.prototype._focusActiveCell = function () {
                    this._matCalendarBody._focusActiveCell();
                };
                /**
                 * Creates an MatCalendarCell for the given year.
                 * @private
                 * @param {?} year
                 * @return {?}
                 */
                MatMultiYearView.prototype._createCellForYear = function (year) {
                    /** @type {?} */
                    var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
                    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
                };
                /**
                 * Whether the given year is enabled.
                 * @private
                 * @param {?} year
                 * @return {?}
                 */
                MatMultiYearView.prototype._shouldEnableYear = function (year) {
                    // disable if the year is greater than maxDate lower than minDate
                    if (year === undefined || year === null ||
                        (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
                        (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
                        return false;
                    }
                    // enable if it reaches here and there's no filter defined
                    if (!this.dateFilter) {
                        return true;
                    }
                    /** @type {?} */
                    var firstOfYear = this._dateAdapter.createDate(year, 0, 1);
                    // If any date in the year is enabled count the year as enabled.
                    for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
                        if (this.dateFilter(date)) {
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * @private
                 * @param {?} obj The object to check.
                 * @return {?} The given object if it is both a date instance and valid, otherwise null.
                 */
                MatMultiYearView.prototype._getValidDateOrNull = function (obj) {
                    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
                };
                /**
                 * Determines whether the user has the RTL layout direction.
                 * @private
                 * @return {?}
                 */
                MatMultiYearView.prototype._isRtl = function () {
                    return this._dir && this._dir.value === 'rtl';
                };
                return MatMultiYearView;
            }());
            MatMultiYearView.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-multi-year-view',
                            template: "<table class=\"mat-calendar-table\" role=\"presentation\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body [rows]=\"_years\" [todayValue]=\"_todayYear\" [selectedValue]=\"_selectedYear\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_getActiveCell()\" (selectedValueChange)=\"_yearSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                            exportAs: 'matMultiYearView',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            MatMultiYearView.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            MatMultiYearView.propDecorators = {
                activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody, { static: false },] }]
            };
            /**
             * @template D
             * @param {?} dateAdapter
             * @param {?} date1
             * @param {?} date2
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
                /** @type {?} */
                var year1 = dateAdapter.getYear(date1);
                /** @type {?} */
                var year2 = dateAdapter.getYear(date2);
                /** @type {?} */
                var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
                return Math.floor((year1 - startingYear) / yearsPerPage) ===
                    Math.floor((year2 - startingYear) / yearsPerPage);
            }
            /**
             * When the multi-year view is first opened, the active year will be in view.
             * So we compute how many years are between the active year and the *slot* where our
             * "startingYear" will render when paged into view.
             * @template D
             * @param {?} dateAdapter
             * @param {?} activeDate
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
                /** @type {?} */
                var activeYear = dateAdapter.getYear(activeDate);
                return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
            }
            /**
             * We pick a "starting" year such that either the maximum year would be at the end
             * or the minimum year would be at the beginning of a page.
             * @template D
             * @param {?} dateAdapter
             * @param {?} minDate
             * @param {?} maxDate
             * @return {?}
             */
            function getStartingYear(dateAdapter, minDate, maxDate) {
                /** @type {?} */
                var startingYear = 0;
                if (maxDate) {
                    /** @type {?} */
                    var maxYear = dateAdapter.getYear(maxDate);
                    startingYear = maxYear - yearsPerPage + 1;
                }
                else if (minDate) {
                    startingYear = dateAdapter.getYear(minDate);
                }
                return startingYear;
            }
            /**
             * Gets remainder that is non-negative, even if first number is negative
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function euclideanModulo(a, b) {
                return (a % b + b) % b;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * An internal component used to display a single year in the datepicker.
             * \@docs-private
             * @template D
             */
            var MatYearView = /** @class */ (function () {
                /**
                 * @param {?} _changeDetectorRef
                 * @param {?} _dateFormats
                 * @param {?} _dateAdapter
                 * @param {?=} _dir
                 */
                function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
                    this._changeDetectorRef = _changeDetectorRef;
                    this._dateFormats = _dateFormats;
                    this._dateAdapter = _dateAdapter;
                    this._dir = _dir;
                    /**
                     * Emits when a new month is selected.
                     */
                    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits the selected month. This doesn't imply a change on the selected date
                     */
                    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when any date is activated.
                     */
                    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    if (!this._dateAdapter) {
                        throw createMissingDateImplError('DateAdapter');
                    }
                    if (!this._dateFormats) {
                        throw createMissingDateImplError('MAT_DATE_FORMATS');
                    }
                    this._activeDate = this._dateAdapter.today();
                }
                Object.defineProperty(MatYearView.prototype, "activeDate", {
                    /**
                     * The date to display in this year view (everything other than the year is ignored).
                     * @return {?}
                     */
                    get: function () { return this._activeDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var oldActiveDate = this._activeDate;
                        /** @type {?} */
                        var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
                        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
                        if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
                            this._init();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatYearView.prototype, "selected", {
                    /**
                     * The currently selected date.
                     * @return {?}
                     */
                    get: function () { return this._selected; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                        this._selectedMonth = this._getMonthInCurrentYear(this._selected);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatYearView.prototype, "minDate", {
                    /**
                     * The minimum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._minDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatYearView.prototype, "maxDate", {
                    /**
                     * The maximum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._maxDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatYearView.prototype.ngAfterContentInit = function () {
                    this._init();
                };
                /**
                 * Handles when a new month is selected.
                 * @param {?} month
                 * @return {?}
                 */
                MatYearView.prototype._monthSelected = function (month) {
                    /** @type {?} */
                    var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
                    this.monthSelected.emit(normalizedDate);
                    /** @type {?} */
                    var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
                    this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
                };
                /**
                 * Handles keydown events on the calendar body when calendar is in year view.
                 * @param {?} event
                 * @return {?}
                 */
                MatYearView.prototype._handleCalendarBodyKeydown = function (event) {
                    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
                    // disabled ones from being selected. This may not be ideal, we should look into whether
                    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
                    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
                    // disabled ones from being selected. This may not be ideal, we should look into whether
                    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
                    /** @type {?} */
                    var oldActiveDate = this._activeDate;
                    /** @type {?} */
                    var isRtl = this._isRtl();
                    switch (event.keyCode) {
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                            this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                            this.activeDate =
                                this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                            this.activeDate =
                                this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                            break;
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]:
                            this._monthSelected(this._dateAdapter.getMonth(this._activeDate));
                            break;
                        default:
                            // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                            return;
                    }
                    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
                        this.activeDateChange.emit(this.activeDate);
                    }
                    this._focusActiveCell();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                };
                /**
                 * Initializes this year view.
                 * @return {?}
                 */
                MatYearView.prototype._init = function () {
                    var _this = this;
                    this._selectedMonth = this._getMonthInCurrentYear(this.selected);
                    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
                    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
                    /** @type {?} */
                    var monthNames = this._dateAdapter.getMonthNames('short');
                    // First row of months only contains 5 elements so we can fit the year label on the same row.
                    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(( /**
                     * @param {?} row
                     * @return {?}
                     */function (/**
                     * @param {?} row
                     * @return {?}
                     */ row) { return row.map(( /**
                     * @param {?} month
                     * @return {?}
                     */function (/**
                     * @param {?} month
                     * @return {?}
                     */ month) { return _this._createCellForMonth(month, monthNames[month]); })); }));
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Focuses the active cell after the microtask queue is empty.
                 * @return {?}
                 */
                MatYearView.prototype._focusActiveCell = function () {
                    this._matCalendarBody._focusActiveCell();
                };
                /**
                 * Gets the month in this year that the given Date falls on.
                 * Returns null if the given Date is in another year.
                 * @private
                 * @param {?} date
                 * @return {?}
                 */
                MatYearView.prototype._getMonthInCurrentYear = function (date) {
                    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
                        this._dateAdapter.getMonth(date) : null;
                };
                /**
                 * Creates an MatCalendarCell for the given month.
                 * @private
                 * @param {?} month
                 * @param {?} monthName
                 * @return {?}
                 */
                MatYearView.prototype._createCellForMonth = function (month, monthName) {
                    /** @type {?} */
                    var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
                    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
                };
                /**
                 * Whether the given month is enabled.
                 * @private
                 * @param {?} month
                 * @return {?}
                 */
                MatYearView.prototype._shouldEnableMonth = function (month) {
                    /** @type {?} */
                    var activeYear = this._dateAdapter.getYear(this.activeDate);
                    if (month === undefined || month === null ||
                        this._isYearAndMonthAfterMaxDate(activeYear, month) ||
                        this._isYearAndMonthBeforeMinDate(activeYear, month)) {
                        return false;
                    }
                    if (!this.dateFilter) {
                        return true;
                    }
                    /** @type {?} */
                    var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
                    // If any date in the month is enabled count the month as enabled.
                    for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
                        if (this.dateFilter(date)) {
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * Tests whether the combination month/year is after this.maxDate, considering
                 * just the month and year of this.maxDate
                 * @private
                 * @param {?} year
                 * @param {?} month
                 * @return {?}
                 */
                MatYearView.prototype._isYearAndMonthAfterMaxDate = function (year, month) {
                    if (this.maxDate) {
                        /** @type {?} */
                        var maxYear = this._dateAdapter.getYear(this.maxDate);
                        /** @type {?} */
                        var maxMonth = this._dateAdapter.getMonth(this.maxDate);
                        return year > maxYear || (year === maxYear && month > maxMonth);
                    }
                    return false;
                };
                /**
                 * Tests whether the combination month/year is before this.minDate, considering
                 * just the month and year of this.minDate
                 * @private
                 * @param {?} year
                 * @param {?} month
                 * @return {?}
                 */
                MatYearView.prototype._isYearAndMonthBeforeMinDate = function (year, month) {
                    if (this.minDate) {
                        /** @type {?} */
                        var minYear = this._dateAdapter.getYear(this.minDate);
                        /** @type {?} */
                        var minMonth = this._dateAdapter.getMonth(this.minDate);
                        return year < minYear || (year === minYear && month < minMonth);
                    }
                    return false;
                };
                /**
                 * @private
                 * @param {?} obj The object to check.
                 * @return {?} The given object if it is both a date instance and valid, otherwise null.
                 */
                MatYearView.prototype._getValidDateOrNull = function (obj) {
                    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
                };
                /**
                 * Determines whether the user has the RTL layout direction.
                 * @private
                 * @return {?}
                 */
                MatYearView.prototype._isRtl = function () {
                    return this._dir && this._dir.value === 'rtl';
                };
                return MatYearView;
            }());
            MatYearView.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-year-view',
                            template: "<table class=\"mat-calendar-table\" role=\"presentation\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_dateAdapter.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                            exportAs: 'matYearView',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            MatYearView.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            MatYearView.propDecorators = {
                activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody, { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Default header for MatCalendar
             * @template D
             */
            var MatCalendarHeader = /** @class */ (function () {
                /**
                 * @param {?} _intl
                 * @param {?} calendar
                 * @param {?} _dateAdapter
                 * @param {?} _dateFormats
                 * @param {?} changeDetectorRef
                 */
                function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
                    this._intl = _intl;
                    this.calendar = calendar;
                    this._dateAdapter = _dateAdapter;
                    this._dateFormats = _dateFormats;
                    this.calendar.stateChanges.subscribe(( /**
                     * @return {?}
                     */function () { return changeDetectorRef.markForCheck(); }));
                }
                Object.defineProperty(MatCalendarHeader.prototype, "periodButtonText", {
                    /**
                     * The label for the current calendar view.
                     * @return {?}
                     */
                    get: function () {
                        if (this.calendar.currentView == 'month') {
                            return this._dateAdapter
                                .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                                .toLocaleUpperCase();
                        }
                        if (this.calendar.currentView == 'year') {
                            return this._dateAdapter.getYearName(this.calendar.activeDate);
                        }
                        // The offset from the active year to the "slot" for the starting year is the
                        // *actual* first rendered year in the multi-year view, and the last year is
                        // just yearsPerPage - 1 away.
                        /** @type {?} */
                        var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
                        /** @type {?} */
                        var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
                        /** @type {?} */
                        var maxYearOfPage = minYearOfPage + yearsPerPage - 1;
                        /** @type {?} */
                        var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
                        /** @type {?} */
                        var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
                        return this._intl.formatYearRange(minYearName, maxYearName);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendarHeader.prototype, "periodButtonLabel", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this.calendar.currentView == 'month' ?
                            this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendarHeader.prototype, "prevButtonLabel", {
                    /**
                     * The label for the previous button.
                     * @return {?}
                     */
                    get: function () {
                        return {
                            'month': this._intl.prevMonthLabel,
                            'year': this._intl.prevYearLabel,
                            'multi-year': this._intl.prevMultiYearLabel
                        }[this.calendar.currentView];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendarHeader.prototype, "nextButtonLabel", {
                    /**
                     * The label for the next button.
                     * @return {?}
                     */
                    get: function () {
                        return {
                            'month': this._intl.nextMonthLabel,
                            'year': this._intl.nextYearLabel,
                            'multi-year': this._intl.nextMultiYearLabel
                        }[this.calendar.currentView];
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Handles user clicks on the period label.
                 * @return {?}
                 */
                MatCalendarHeader.prototype.currentPeriodClicked = function () {
                    this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
                };
                /**
                 * Handles user clicks on the previous button.
                 * @return {?}
                 */
                MatCalendarHeader.prototype.previousClicked = function () {
                    this.calendar.activeDate = this.calendar.currentView == 'month' ?
                        this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
                        this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
                };
                /**
                 * Handles user clicks on the next button.
                 * @return {?}
                 */
                MatCalendarHeader.prototype.nextClicked = function () {
                    this.calendar.activeDate = this.calendar.currentView == 'month' ?
                        this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
                        this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
                };
                /**
                 * Whether the previous period button is enabled.
                 * @return {?}
                 */
                MatCalendarHeader.prototype.previousEnabled = function () {
                    if (!this.calendar.minDate) {
                        return true;
                    }
                    return !this.calendar.minDate ||
                        !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
                };
                /**
                 * Whether the next period button is enabled.
                 * @return {?}
                 */
                MatCalendarHeader.prototype.nextEnabled = function () {
                    return !this.calendar.maxDate ||
                        !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
                };
                /**
                 * Whether the two dates represent the same view in the current view mode (month or year).
                 * @private
                 * @param {?} date1
                 * @param {?} date2
                 * @return {?}
                 */
                MatCalendarHeader.prototype._isSameView = function (date1, date2) {
                    if (this.calendar.currentView == 'month') {
                        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                            this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
                    }
                    if (this.calendar.currentView == 'year') {
                        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
                    }
                    // Otherwise we are in 'multi-year' view.
                    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
                };
                return MatCalendarHeader;
            }());
            MatCalendarHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-calendar-header',
                            template: "<div class=\"mat-calendar-header\"><div class=\"mat-calendar-controls\"><button mat-button type=\"button\" class=\"mat-calendar-period-button\" (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\" cdkAriaLive=\"polite\">{{periodButtonText}}<div class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div></button><div class=\"mat-calendar-spacer\"></div><ng-content></ng-content><button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\" [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\" [attr.aria-label]=\"prevButtonLabel\"></button> <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\" [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\" [attr.aria-label]=\"nextButtonLabel\"></button></div></div>",
                            exportAs: 'matCalendarHeader',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatCalendarHeader.ctorParameters = function () { return [
                { type: MatDatepickerIntl },
                { type: MatCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return MatCalendar; })),] }] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            /**
             * A calendar that is used as part of the datepicker.
             * \@docs-private
             * @template D
             */
            var MatCalendar = /** @class */ (function () {
                /**
                 * @param {?} _intl
                 * @param {?} _dateAdapter
                 * @param {?} _dateFormats
                 * @param {?} _changeDetectorRef
                 */
                function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
                    var _this = this;
                    this._dateAdapter = _dateAdapter;
                    this._dateFormats = _dateFormats;
                    this._changeDetectorRef = _changeDetectorRef;
                    /**
                     * Used for scheduling that focus should be moved to the active cell on the next tick.
                     * We need to schedule it, rather than do it immediately, because we have to wait
                     * for Angular to re-evaluate the view children.
                     */
                    this._moveFocusOnNextTick = false;
                    /**
                     * Whether the calendar should be started in month or year view.
                     */
                    this.startView = 'month';
                    /**
                     * Emits when the currently selected date changes.
                     */
                    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits the year chosen in multiyear view.
                     * This doesn't imply a change on the selected date.
                     */
                    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits the month chosen in year view.
                     * This doesn't imply a change on the selected date.
                     */
                    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when any date is selected.
                     */
                    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits whenever there is a state change that the header may need to respond to.
                     */
                    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    if (!this._dateAdapter) {
                        throw createMissingDateImplError('DateAdapter');
                    }
                    if (!this._dateFormats) {
                        throw createMissingDateImplError('MAT_DATE_FORMATS');
                    }
                    this._intlChanges = _intl.changes.subscribe(( /**
                     * @return {?}
                     */function () {
                        _changeDetectorRef.markForCheck();
                        _this.stateChanges.next();
                    }));
                }
                Object.defineProperty(MatCalendar.prototype, "startAt", {
                    /**
                     * A date representing the period (month or year) to start the calendar in.
                     * @return {?}
                     */
                    get: function () { return this._startAt; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendar.prototype, "selected", {
                    /**
                     * The currently selected date.
                     * @return {?}
                     */
                    get: function () { return this._selected; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendar.prototype, "minDate", {
                    /**
                     * The minimum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._minDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendar.prototype, "maxDate", {
                    /**
                     * The maximum selectable date.
                     * @return {?}
                     */
                    get: function () { return this._maxDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendar.prototype, "activeDate", {
                    /**
                     * The current active date. This determines which time period is shown and which date is
                     * highlighted when using keyboard navigation.
                     * @return {?}
                     */
                    get: function () { return this._clampedActiveDate; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
                        this.stateChanges.next();
                        this._changeDetectorRef.markForCheck();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatCalendar.prototype, "currentView", {
                    /**
                     * Whether the calendar is in month view.
                     * @return {?}
                     */
                    get: function () { return this._currentView; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._currentView = value;
                        this._moveFocusOnNextTick = true;
                        this._changeDetectorRef.markForCheck();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatCalendar.prototype.ngAfterContentInit = function () {
                    this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
                    this.activeDate = this.startAt || this._dateAdapter.today();
                    // Assign to the private property since we don't want to move focus on init.
                    this._currentView = this.startView;
                };
                /**
                 * @return {?}
                 */
                MatCalendar.prototype.ngAfterViewChecked = function () {
                    if (this._moveFocusOnNextTick) {
                        this._moveFocusOnNextTick = false;
                        this.focusActiveCell();
                    }
                };
                /**
                 * @return {?}
                 */
                MatCalendar.prototype.ngOnDestroy = function () {
                    this._intlChanges.unsubscribe();
                    this.stateChanges.complete();
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatCalendar.prototype.ngOnChanges = function (changes) {
                    /** @type {?} */
                    var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
                    if (change && !change.firstChange) {
                        /** @type {?} */
                        var view = this._getCurrentViewComponent();
                        if (view) {
                            // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                            // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                            this._changeDetectorRef.detectChanges();
                            view._init();
                        }
                    }
                    this.stateChanges.next();
                };
                /**
                 * @return {?}
                 */
                MatCalendar.prototype.focusActiveCell = function () {
                    this._getCurrentViewComponent()._focusActiveCell();
                };
                /**
                 * Updates today's date after an update of the active date
                 * @return {?}
                 */
                MatCalendar.prototype.updateTodaysDate = function () {
                    /** @type {?} */
                    var view = this.currentView == 'month' ? this.monthView :
                        (this.currentView == 'year' ? this.yearView : this.multiYearView);
                    view.ngAfterContentInit();
                };
                /**
                 * Handles date selection in the month view.
                 * @param {?} date
                 * @return {?}
                 */
                MatCalendar.prototype._dateSelected = function (date) {
                    if (!this._dateAdapter.sameDate(date, this.selected)) {
                        this.selectedChange.emit(date);
                    }
                };
                /**
                 * Handles year selection in the multiyear view.
                 * @param {?} normalizedYear
                 * @return {?}
                 */
                MatCalendar.prototype._yearSelectedInMultiYearView = function (normalizedYear) {
                    this.yearSelected.emit(normalizedYear);
                };
                /**
                 * Handles month selection in the year view.
                 * @param {?} normalizedMonth
                 * @return {?}
                 */
                MatCalendar.prototype._monthSelectedInYearView = function (normalizedMonth) {
                    this.monthSelected.emit(normalizedMonth);
                };
                /**
                 * @return {?}
                 */
                MatCalendar.prototype._userSelected = function () {
                    this._userSelection.emit();
                };
                /**
                 * Handles year/month selection in the multi-year/year views.
                 * @param {?} date
                 * @param {?} view
                 * @return {?}
                 */
                MatCalendar.prototype._goToDateInView = function (date, view) {
                    this.activeDate = date;
                    this.currentView = view;
                };
                /**
                 * @private
                 * @param {?} obj The object to check.
                 * @return {?} The given object if it is both a date instance and valid, otherwise null.
                 */
                MatCalendar.prototype._getValidDateOrNull = function (obj) {
                    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
                };
                /**
                 * Returns the component instance that corresponds to the current calendar view.
                 * @private
                 * @return {?}
                 */
                MatCalendar.prototype._getCurrentViewComponent = function () {
                    return this.monthView || this.yearView || this.multiYearView;
                };
                return MatCalendar;
            }());
            MatCalendar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-calendar',
                            template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template><div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\"><mat-month-view *ngSwitchCase=\"'month'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" [dateClass]=\"dateClass\" (selectedChange)=\"_dateSelected($event)\" (_userSelection)=\"_userSelected()\"></mat-month-view><mat-year-view *ngSwitchCase=\"'year'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (monthSelected)=\"_monthSelectedInYearView($event)\" (selectedChange)=\"_goToDateInView($event, 'month')\"></mat-year-view><mat-multi-year-view *ngSwitchCase=\"'multi-year'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (yearSelected)=\"_yearSelectedInMultiYearView($event)\" (selectedChange)=\"_goToDateInView($event, 'year')\"></mat-multi-year-view></div>",
                            styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"],
                            host: {
                                'class': 'mat-calendar',
                            },
                            exportAs: 'matCalendar',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatCalendar.ctorParameters = function () { return [
                { type: MatDatepickerIntl },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            MatCalendar.propDecorators = {
                headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                monthView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatMonthView, { static: false },] }],
                yearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatYearView, { static: false },] }],
                multiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatMultiYearView, { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Animations used by the Material datepicker.
             * \@docs-private
             * @type {?}
             */
            var matDatepickerAnimations = {
                /**
                 * Transforms the height of the datepicker's calendar.
                 */
                transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('transformPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 0,
                        transform: 'scale(1, 0.8)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 1,
                        transform: 'scale(1, 1)'
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })))
                ]),
                /**
                 * Fades in the content of the calendar.
                 */
                fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeInCalendar', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 })),
                    // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
                    // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
                ])
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Used to generate a unique ID for each datepicker instance.
             * @type {?}
             */
            var datepickerUid = 0;
            /**
             * Injection token that determines the scroll handling while the calendar is open.
             * @type {?}
             */
            var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-datepicker-scroll-strategy');
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.reposition(); });
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
                provide: MAT_DATEPICKER_SCROLL_STRATEGY,
                deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]],
                useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
            };
            // Boilerplate for applying mixins to MatDatepickerContent.
            /**
             * \@docs-private
             */
            var MatDatepickerContentBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatDatepickerContentBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatDatepickerContentBase;
            }());
            /** @type {?} */
            var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatDatepickerContentBase);
            /**
             * Component used as the content for the datepicker dialog and popup. We use this instead of using
             * MatCalendar directly as the content so we can control the initial focus. This also gives us a
             * place to put additional features of the popup that are not part of the calendar itself in the
             * future. (e.g. confirmation buttons).
             * \@docs-private
             * @template D
             */
            var MatDatepickerContent = /** @class */ (function (_super) {
                __extends(MatDatepickerContent, _super);
                /**
                 * @param {?} elementRef
                 */
                function MatDatepickerContent(elementRef) {
                    return _super.call(this, elementRef) || this;
                }
                /**
                 * @return {?}
                 */
                MatDatepickerContent.prototype.ngAfterViewInit = function () {
                    this._calendar.focusActiveCell();
                };
                return MatDatepickerContent;
            }(_MatDatepickerContentMixinBase));
            MatDatepickerContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-datepicker-content',
                            template: "<mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [headerComponent]=\"datepicker.calendarHeaderComponent\" [selected]=\"datepicker._selected\" [dateClass]=\"datepicker.dateClass\" [@fadeInCalendar]=\"'enter'\" (selectedChange)=\"datepicker.select($event)\" (yearSelected)=\"datepicker._selectYear($event)\" (monthSelected)=\"datepicker._selectMonth($event)\" (_userSelection)=\"datepicker.close()\"></mat-calendar>",
                            styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation:landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation:portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}"],
                            host: {
                                'class': 'mat-datepicker-content',
                                '[@transformPanel]': '"enter"',
                                '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                            },
                            animations: [
                                matDatepickerAnimations.transformPanel,
                                matDatepickerAnimations.fadeInCalendar,
                            ],
                            exportAs: 'matDatepickerContent',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            inputs: ['color'],
                        },] },
            ];
            /** @nocollapse */
            MatDatepickerContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            MatDatepickerContent.propDecorators = {
                _calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendar, { static: false },] }]
            };
            // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
            // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
            // if angular adds support for `exportAs: '$implicit'` on directives.
            /**
             * Component responsible for managing the datepicker popup/dialog.
             * @template D
             */
            var MatDatepicker = /** @class */ (function () {
                /**
                 * @param {?} _dialog
                 * @param {?} _overlay
                 * @param {?} _ngZone
                 * @param {?} _viewContainerRef
                 * @param {?} scrollStrategy
                 * @param {?} _dateAdapter
                 * @param {?} _dir
                 * @param {?} _document
                 */
                function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
                    this._dialog = _dialog;
                    this._overlay = _overlay;
                    this._ngZone = _ngZone;
                    this._viewContainerRef = _viewContainerRef;
                    this._dateAdapter = _dateAdapter;
                    this._dir = _dir;
                    this._document = _document;
                    /**
                     * The view that the calendar should start in.
                     */
                    this.startView = 'month';
                    this._touchUi = false;
                    /**
                     * Emits selected year in multiyear view.
                     * This doesn't imply a change on the selected date.
                     */
                    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits selected month in year view.
                     * This doesn't imply a change on the selected date.
                     */
                    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when the datepicker has been opened.
                     */
                    this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when the datepicker has been closed.
                     */
                    this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._opened = false;
                    /**
                     * The id for the datepicker calendar.
                     */
                    this.id = "mat-datepicker-" + datepickerUid++;
                    this._validSelected = null;
                    /**
                     * The element that was focused before the datepicker was opened.
                     */
                    this._focusedElementBeforeOpen = null;
                    /**
                     * Subscription to value changes in the associated input element.
                     */
                    this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
                    /**
                     * Emits when the datepicker is disabled.
                     */
                    this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    /**
                     * Emits new selected date when selected date changes.
                     */
                    this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    if (!this._dateAdapter) {
                        throw createMissingDateImplError('DateAdapter');
                    }
                    this._scrollStrategy = scrollStrategy;
                }
                Object.defineProperty(MatDatepicker.prototype, "startAt", {
                    /**
                     * The date to open the calendar to initially.
                     * @return {?}
                     */
                    get: function () {
                        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
                        // selected value is.
                        return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "color", {
                    /**
                     * Color palette to use on the datepicker's calendar.
                     * @return {?}
                     */
                    get: function () {
                        return this._color ||
                            (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._color = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "touchUi", {
                    /**
                     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
                     * than a popup and elements have more padding to allow for bigger touch targets.
                     * @return {?}
                     */
                    get: function () { return this._touchUi; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "disabled", {
                    /**
                     * Whether the datepicker pop-up should be disabled.
                     * @return {?}
                     */
                    get: function () {
                        return this._disabled === undefined && this._datepickerInput ?
                            this._datepickerInput.disabled : !!this._disabled;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
                        if (newValue !== this._disabled) {
                            this._disabled = newValue;
                            this._disabledChange.next(newValue);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "opened", {
                    /**
                     * Whether the calendar is open.
                     * @return {?}
                     */
                    get: function () { return this._opened; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { value ? this.open() : this.close(); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "_selected", {
                    /**
                     * The currently selected date.
                     * @return {?}
                     */
                    get: function () { return this._validSelected; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._validSelected = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "_minDate", {
                    /**
                     * The minimum selectable date.
                     * @return {?}
                     */
                    get: function () {
                        return this._datepickerInput && this._datepickerInput.min;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "_maxDate", {
                    /**
                     * The maximum selectable date.
                     * @return {?}
                     */
                    get: function () {
                        return this._datepickerInput && this._datepickerInput.max;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepicker.prototype, "_dateFilter", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._datepickerInput && this._datepickerInput._dateFilter;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatDatepicker.prototype.ngOnDestroy = function () {
                    this.close();
                    this._inputSubscription.unsubscribe();
                    this._disabledChange.complete();
                    if (this._popupRef) {
                        this._popupRef.dispose();
                        this._popupComponentRef = null;
                    }
                };
                /**
                 * Selects the given date
                 * @param {?} date
                 * @return {?}
                 */
                MatDatepicker.prototype.select = function (date) {
                    /** @type {?} */
                    var oldValue = this._selected;
                    this._selected = date;
                    if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
                        this._selectedChanged.next(date);
                    }
                };
                /**
                 * Emits the selected year in multiyear view
                 * @param {?} normalizedYear
                 * @return {?}
                 */
                MatDatepicker.prototype._selectYear = function (normalizedYear) {
                    this.yearSelected.emit(normalizedYear);
                };
                /**
                 * Emits selected month in year view
                 * @param {?} normalizedMonth
                 * @return {?}
                 */
                MatDatepicker.prototype._selectMonth = function (normalizedMonth) {
                    this.monthSelected.emit(normalizedMonth);
                };
                /**
                 * Register an input with this datepicker.
                 * @param {?} input The datepicker input to register with this datepicker.
                 * @return {?}
                 */
                MatDatepicker.prototype._registerInput = function (input) {
                    var _this = this;
                    if (this._datepickerInput) {
                        throw Error('A MatDatepicker can only be associated with a single input.');
                    }
                    this._datepickerInput = input;
                    this._inputSubscription =
                        this._datepickerInput._valueChange.subscribe(( /**
                         * @param {?} value
                         * @return {?}
                         */function (value) { return _this._selected = value; }));
                };
                /**
                 * Open the calendar.
                 * @return {?}
                 */
                MatDatepicker.prototype.open = function () {
                    if (this._opened || this.disabled) {
                        return;
                    }
                    if (!this._datepickerInput) {
                        throw Error('Attempted to open an MatDatepicker with no associated input.');
                    }
                    if (this._document) {
                        this._focusedElementBeforeOpen = this._document.activeElement;
                    }
                    this.touchUi ? this._openAsDialog() : this._openAsPopup();
                    this._opened = true;
                    this.openedStream.emit();
                };
                /**
                 * Close the calendar.
                 * @return {?}
                 */
                MatDatepicker.prototype.close = function () {
                    var _this = this;
                    if (!this._opened) {
                        return;
                    }
                    if (this._popupRef && this._popupRef.hasAttached()) {
                        this._popupRef.detach();
                    }
                    if (this._dialogRef) {
                        this._dialogRef.close();
                        this._dialogRef = null;
                    }
                    if (this._calendarPortal && this._calendarPortal.isAttached) {
                        this._calendarPortal.detach();
                    }
                    /** @type {?} */
                    var completeClose = ( /**
                     * @return {?}
                     */function () {
                        // The `_opened` could've been reset already if
                        // we got two events in quick succession.
                        if (_this._opened) {
                            _this._opened = false;
                            _this.closedStream.emit();
                            _this._focusedElementBeforeOpen = null;
                        }
                    });
                    if (this._focusedElementBeforeOpen &&
                        typeof this._focusedElementBeforeOpen.focus === 'function') {
                        // Because IE moves focus asynchronously, we can't count on it being restored before we've
                        // marked the datepicker as closed. If the event fires out of sequence and the element that
                        // we're refocusing opens the datepicker on focus, the user could be stuck with not being
                        // able to close the calendar at all. We work around it by making the logic, that marks
                        // the datepicker as closed, async as well.
                        this._focusedElementBeforeOpen.focus();
                        setTimeout(completeClose);
                    }
                    else {
                        completeClose();
                    }
                };
                /**
                 * Open the calendar as a dialog.
                 * @private
                 * @return {?}
                 */
                MatDatepicker.prototype._openAsDialog = function () {
                    var _this = this;
                    // Usually this would be handled by `open` which ensures that we can only have one overlay
                    // open at a time, however since we reset the variables in async handlers some overlays
                    // may slip through if the user opens and closes multiple times in quick succession (e.g.
                    // by holding down the enter key).
                    if (this._dialogRef) {
                        this._dialogRef.close();
                    }
                    this._dialogRef = this._dialog.open(MatDatepickerContent, {
                        direction: this._dir ? this._dir.value : 'ltr',
                        viewContainerRef: this._viewContainerRef,
                        panelClass: 'mat-datepicker-dialog',
                    });
                    this._dialogRef.afterClosed().subscribe(( /**
                     * @return {?}
                     */function () { return _this.close(); }));
                    this._dialogRef.componentInstance.datepicker = this;
                    this._setColor();
                };
                /**
                 * Open the calendar as a popup.
                 * @private
                 * @return {?}
                 */
                MatDatepicker.prototype._openAsPopup = function () {
                    var _this = this;
                    if (!this._calendarPortal) {
                        this._calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);
                    }
                    if (!this._popupRef) {
                        this._createPopup();
                    }
                    if (!this._popupRef.hasAttached()) {
                        this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
                        this._popupComponentRef.instance.datepicker = this;
                        this._setColor();
                        // Update the position once the calendar has rendered.
                        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this._popupRef.updatePosition();
                        }));
                    }
                };
                /**
                 * Create the popup.
                 * @private
                 * @return {?}
                 */
                MatDatepicker.prototype._createPopup = function () {
                    var _this = this;
                    /** @type {?} */
                    var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayConfig"]({
                        positionStrategy: this._createPopupPositionStrategy(),
                        hasBackdrop: true,
                        backdropClass: 'mat-overlay-transparent-backdrop',
                        direction: this._dir,
                        scrollStrategy: this._scrollStrategy(),
                        panelClass: 'mat-datepicker-popup',
                    });
                    this._popupRef = this._overlay.create(overlayConfig);
                    this._popupRef.overlayElement.setAttribute('role', 'dialog');
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        // Closing on alt + up is only valid when there's an input associated with the datepicker.
                        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ESCAPE"] ||
                            (_this._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]);
                    })))).subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        if (event) {
                            event.preventDefault();
                        }
                        _this.close();
                    }));
                };
                /**
                 * Create the popup PositionStrategy.
                 * @private
                 * @return {?}
                 */
                MatDatepicker.prototype._createPopupPositionStrategy = function () {
                    return this._overlay.position()
                        .flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin())
                        .withTransformOriginOn('.mat-datepicker-content')
                        .withFlexibleDimensions(false)
                        .withViewportMargin(8)
                        .withLockedPosition()
                        .withPositions([
                        {
                            originX: 'start',
                            originY: 'bottom',
                            overlayX: 'start',
                            overlayY: 'top'
                        },
                        {
                            originX: 'start',
                            originY: 'top',
                            overlayX: 'start',
                            overlayY: 'bottom'
                        },
                        {
                            originX: 'end',
                            originY: 'bottom',
                            overlayX: 'end',
                            overlayY: 'top'
                        },
                        {
                            originX: 'end',
                            originY: 'top',
                            overlayX: 'end',
                            overlayY: 'bottom'
                        }
                    ]);
                };
                /**
                 * @private
                 * @param {?} obj The object to check.
                 * @return {?} The given object if it is both a date instance and valid, otherwise null.
                 */
                MatDatepicker.prototype._getValidDateOrNull = function (obj) {
                    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
                };
                /**
                 * Passes the current theme color along to the calendar overlay.
                 * @private
                 * @return {?}
                 */
                MatDatepicker.prototype._setColor = function () {
                    /** @type {?} */
                    var color = this.color;
                    if (this._popupComponentRef) {
                        this._popupComponentRef.instance.color = color;
                    }
                    if (this._dialogRef) {
                        this._dialogRef.componentInstance.color = color;
                    }
                };
                return MatDatepicker;
            }());
            MatDatepicker.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-datepicker',
                            template: '',
                            exportAs: 'matDatepicker',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                        },] },
            ];
            /** @nocollapse */
            MatDatepicker.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] }
            ]; };
            MatDatepicker.propDecorators = {
                calendarHeaderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                touchUi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['opened',] }],
                closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['closed',] }],
                opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_DATEPICKER_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MatDatepickerInput; })),
                multi: true
            };
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_DATEPICKER_VALIDATORS = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MatDatepickerInput; })),
                multi: true
            };
            /**
             * An event used for datepicker input and change events. We don't always have access to a native
             * input or change event because the event may have been triggered by the user clicking on the
             * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
             * @template D
             */
            var MatDatepickerInputEvent = /** @class */ (function () {
                /**
                 * @param {?} target
                 * @param {?} targetElement
                 */
                function MatDatepickerInputEvent(target, targetElement) {
                    this.target = target;
                    this.targetElement = targetElement;
                    this.value = this.target.value;
                }
                return MatDatepickerInputEvent;
            }());
            /**
             * Directive used to connect an input to a MatDatepicker.
             * @template D
             */
            var MatDatepickerInput = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 * @param {?} _dateAdapter
                 * @param {?} _dateFormats
                 * @param {?} _formField
                 */
                function MatDatepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
                    var _this = this;
                    this._elementRef = _elementRef;
                    this._dateAdapter = _dateAdapter;
                    this._dateFormats = _dateFormats;
                    this._formField = _formField;
                    /**
                     * Emits when a `change` event is fired on this `<input>`.
                     */
                    this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when an `input` event is fired on this `<input>`.
                     */
                    this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when the value changes (either due to user input or programmatic change).
                     */
                    this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Emits when the disabled state has changed
                     */
                    this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._cvaOnChange = ( /**
                     * @return {?}
                     */function () { });
                    this._validatorOnChange = ( /**
                     * @return {?}
                     */function () { });
                    this._datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
                    this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
                    /**
                     * The form control validator for whether the input parses.
                     */
                    this._parseValidator = ( /**
                     * @return {?}
                     */function () {
                        return _this._lastValueValid ?
                            null : { 'matDatepickerParse': { 'text': _this._elementRef.nativeElement.value } };
                    });
                    /**
                     * The form control validator for the min date.
                     */
                    this._minValidator = ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                        return (!_this.min || !controlValue ||
                            _this._dateAdapter.compareDate(_this.min, controlValue) <= 0) ?
                            null : { 'matDatepickerMin': { 'min': _this.min, 'actual': controlValue } };
                    });
                    /**
                     * The form control validator for the max date.
                     */
                    this._maxValidator = ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                        return (!_this.max || !controlValue ||
                            _this._dateAdapter.compareDate(_this.max, controlValue) >= 0) ?
                            null : { 'matDatepickerMax': { 'max': _this.max, 'actual': controlValue } };
                    });
                    /**
                     * The form control validator for the date filter.
                     */
                    this._filterValidator = ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                        return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                            null : { 'matDatepickerFilter': true };
                    });
                    /**
                     * The combined form control validator for this input.
                     */
                    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
                    /**
                     * Whether the last value set on the input was valid.
                     */
                    this._lastValueValid = false;
                    if (!this._dateAdapter) {
                        throw createMissingDateImplError('DateAdapter');
                    }
                    if (!this._dateFormats) {
                        throw createMissingDateImplError('MAT_DATE_FORMATS');
                    }
                    // Update the displayed date when the locale changes.
                    this._localeSubscription = _dateAdapter.localeChanges.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.value = _this.value;
                    }));
                }
                Object.defineProperty(MatDatepickerInput.prototype, "matDatepicker", {
                    /**
                     * The datepicker that this input is associated with.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        var _this = this;
                        if (!value) {
                            return;
                        }
                        this._datepicker = value;
                        this._datepicker._registerInput(this);
                        this._datepickerSubscription.unsubscribe();
                        this._datepickerSubscription = this._datepicker._selectedChanged.subscribe(( /**
                         * @param {?} selected
                         * @return {?}
                         */function (selected) {
                            _this.value = selected;
                            _this._cvaOnChange(selected);
                            _this._onTouched();
                            _this.dateInput.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                            _this.dateChange.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                        }));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepickerInput.prototype, "matDatepickerFilter", {
                    /**
                     * Function that can be used to filter out dates within the datepicker.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._dateFilter = value;
                        this._validatorOnChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepickerInput.prototype, "value", {
                    /**
                     * The value of the input.
                     * @return {?}
                     */
                    get: function () { return this._value; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        value = this._dateAdapter.deserialize(value);
                        this._lastValueValid = !value || this._dateAdapter.isValid(value);
                        value = this._getValidDateOrNull(value);
                        /** @type {?} */
                        var oldDate = this.value;
                        this._value = value;
                        this._formatValue(value);
                        if (!this._dateAdapter.sameDate(oldDate, value)) {
                            this._valueChange.emit(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepickerInput.prototype, "min", {
                    /**
                     * The minimum valid date.
                     * @return {?}
                     */
                    get: function () { return this._min; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                        this._validatorOnChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepickerInput.prototype, "max", {
                    /**
                     * The maximum valid date.
                     * @return {?}
                     */
                    get: function () { return this._max; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
                        this._validatorOnChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDatepickerInput.prototype, "disabled", {
                    /**
                     * Whether the datepicker-input is disabled.
                     * @return {?}
                     */
                    get: function () { return !!this._disabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
                        /** @type {?} */
                        var element = this._elementRef.nativeElement;
                        if (this._disabled !== newValue) {
                            this._disabled = newValue;
                            this._disabledChange.emit(newValue);
                        }
                        // We need to null check the `blur` method, because it's undefined during SSR.
                        if (newValue && element.blur) {
                            // Normally, native input elements automatically blur if they turn disabled. This behavior
                            // is problematic, because it would mean that it triggers another change detection cycle,
                            // which then causes a changed after checked error if the input element was focused before.
                            element.blur();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatDatepickerInput.prototype.ngOnDestroy = function () {
                    this._datepickerSubscription.unsubscribe();
                    this._localeSubscription.unsubscribe();
                    this._valueChange.complete();
                    this._disabledChange.complete();
                };
                /**
                 * \@docs-private
                 * @param {?} fn
                 * @return {?}
                 */
                MatDatepickerInput.prototype.registerOnValidatorChange = function (fn) {
                    this._validatorOnChange = fn;
                };
                /**
                 * \@docs-private
                 * @param {?} c
                 * @return {?}
                 */
                MatDatepickerInput.prototype.validate = function (c) {
                    return this._validator ? this._validator(c) : null;
                };
                /**
                 * @deprecated
                 * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
                 * @return {?}
                 */
                MatDatepickerInput.prototype.getPopupConnectionElementRef = function () {
                    return this.getConnectedOverlayOrigin();
                };
                /**
                 * Gets the element that the datepicker popup should be connected to.
                 * @return {?} The element to connect the popup to.
                 */
                MatDatepickerInput.prototype.getConnectedOverlayOrigin = function () {
                    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} value
                 * @return {?}
                 */
                MatDatepickerInput.prototype.writeValue = function (value) {
                    this.value = value;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                MatDatepickerInput.prototype.registerOnChange = function (fn) {
                    this._cvaOnChange = fn;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                MatDatepickerInput.prototype.registerOnTouched = function (fn) {
                    this._onTouched = fn;
                };
                // Implemented as part of ControlValueAccessor.
                /**
                 * @param {?} isDisabled
                 * @return {?}
                 */
                MatDatepickerInput.prototype.setDisabledState = function (isDisabled) {
                    this.disabled = isDisabled;
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                MatDatepickerInput.prototype._onKeydown = function (event) {
                    /** @type {?} */
                    var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"];
                    if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
                        this._datepicker.open();
                        event.preventDefault();
                    }
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                MatDatepickerInput.prototype._onInput = function (value) {
                    /** @type {?} */
                    var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
                    this._lastValueValid = !date || this._dateAdapter.isValid(date);
                    date = this._getValidDateOrNull(date);
                    if (!this._dateAdapter.sameDate(date, this._value)) {
                        this._value = date;
                        this._cvaOnChange(date);
                        this._valueChange.emit(date);
                        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
                    }
                    else {
                        this._validatorOnChange();
                    }
                };
                /**
                 * @return {?}
                 */
                MatDatepickerInput.prototype._onChange = function () {
                    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
                };
                /**
                 * Returns the palette used by the input's form field, if any.
                 * @return {?}
                 */
                MatDatepickerInput.prototype._getThemePalette = function () {
                    return this._formField ? this._formField.color : undefined;
                };
                /**
                 * Handles blur events on the input.
                 * @return {?}
                 */
                MatDatepickerInput.prototype._onBlur = function () {
                    // Reformat the input only if we have a valid value.
                    if (this.value) {
                        this._formatValue(this.value);
                    }
                    this._onTouched();
                };
                /**
                 * Formats a value and sets it on the input element.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatDatepickerInput.prototype._formatValue = function (value) {
                    this._elementRef.nativeElement.value =
                        value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
                };
                /**
                 * @private
                 * @param {?} obj The object to check.
                 * @return {?} The given object if it is both a date instance and valid, otherwise null.
                 */
                MatDatepickerInput.prototype._getValidDateOrNull = function (obj) {
                    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
                };
                return MatDatepickerInput;
            }());
            MatDatepickerInput.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[matDatepicker]',
                            providers: [
                                MAT_DATEPICKER_VALUE_ACCESSOR,
                                MAT_DATEPICKER_VALIDATORS,
                                { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: MatDatepickerInput },
                            ],
                            host: {
                                '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                                '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                                '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                                '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                                '[disabled]': 'disabled',
                                '(input)': '_onInput($event.target.value)',
                                '(change)': '_onChange()',
                                '(blur)': '_onBlur()',
                                '(keydown)': '_onKeydown($event)',
                            },
                            exportAs: 'matDatepickerInput',
                        },] },
            ];
            /** @nocollapse */
            MatDatepickerInput.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
                { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            MatDatepickerInput.propDecorators = {
                matDatepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                matDatepickerFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                dateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Can be used to override the icon of a `matDatepickerToggle`.
             */
            var MatDatepickerToggleIcon = /** @class */ (function () {
                function MatDatepickerToggleIcon() {
                }
                return MatDatepickerToggleIcon;
            }());
            MatDatepickerToggleIcon.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[matDatepickerToggleIcon]'
                        },] },
            ];
            /**
             * @template D
             */
            var MatDatepickerToggle = /** @class */ (function () {
                /**
                 * @param {?} _intl
                 * @param {?} _changeDetectorRef
                 * @param {?} defaultTabIndex
                 */
                function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
                    this._intl = _intl;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
                    /** @type {?} */
                    var parsedTabIndex = Number(defaultTabIndex);
                    this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
                }
                Object.defineProperty(MatDatepickerToggle.prototype, "disabled", {
                    /**
                     * Whether the toggle button is disabled.
                     * @return {?}
                     */
                    get: function () {
                        if (this._disabled === undefined && this.datepicker) {
                            return this.datepicker.disabled;
                        }
                        return !!this._disabled;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatDatepickerToggle.prototype.ngOnChanges = function (changes) {
                    if (changes['datepicker']) {
                        this._watchStateChanges();
                    }
                };
                /**
                 * @return {?}
                 */
                MatDatepickerToggle.prototype.ngOnDestroy = function () {
                    this._stateChanges.unsubscribe();
                };
                /**
                 * @return {?}
                 */
                MatDatepickerToggle.prototype.ngAfterContentInit = function () {
                    this._watchStateChanges();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                MatDatepickerToggle.prototype._open = function (event) {
                    if (this.datepicker && !this.disabled) {
                        this.datepicker.open();
                        event.stopPropagation();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatDatepickerToggle.prototype._watchStateChanges = function () {
                    var _this = this;
                    /** @type {?} */
                    var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
                    /** @type {?} */
                    var inputDisabled = this.datepicker && this.datepicker._datepickerInput ?
                        this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
                    /** @type {?} */
                    var datepickerToggled = this.datepicker ?
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) :
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
                    this._stateChanges.unsubscribe();
                    this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(( /**
                     * @return {?}
                     */function () { return _this._changeDetectorRef.markForCheck(); }));
                };
                return MatDatepickerToggle;
            }());
            MatDatepickerToggle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-datepicker-toggle',
                            template: "<button #button mat-icon-button type=\"button\" [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\" [attr.aria-label]=\"_intl.openCalendarLabel\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [disabled]=\"disabled\" [disableRipple]=\"disableRipple\" (click)=\"_open($event)\"><svg *ngIf=\"!_customIcon\" class=\"mat-datepicker-toggle-default-icon\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" fill=\"currentColor\" focusable=\"false\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/></svg><ng-content select=\"[matDatepickerToggleIcon]\"></ng-content></button>",
                            styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}"],
                            host: {
                                'class': 'mat-datepicker-toggle',
                                // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                                // consumer may have provided, while still being able to receive focus.
                                '[attr.tabindex]': '-1',
                                '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                                '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                                '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                                '(focus)': '_button.focus()',
                            },
                            exportAs: 'matDatepickerToggle',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatDatepickerToggle.ctorParameters = function () { return [
                { type: MatDatepickerIntl },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] }
            ]; };
            MatDatepickerToggle.propDecorators = {
                datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['for',] }],
                tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                _customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatDatepickerToggleIcon, { static: false },] }],
                _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['button', { static: false },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatDatepickerModule = /** @class */ (function () {
                function MatDatepickerModule() {
                }
                return MatDatepickerModule;
            }());
            MatDatepickerModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"],
                                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["A11yModule"],
                                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
                            ],
                            exports: [
                                MatCalendar,
                                MatCalendarBody,
                                MatDatepicker,
                                MatDatepickerContent,
                                MatDatepickerInput,
                                MatDatepickerToggle,
                                MatDatepickerToggleIcon,
                                MatMonthView,
                                MatYearView,
                                MatMultiYearView,
                                MatCalendarHeader,
                            ],
                            declarations: [
                                MatCalendar,
                                MatCalendarBody,
                                MatDatepicker,
                                MatDatepickerContent,
                                MatDatepickerInput,
                                MatDatepickerToggle,
                                MatDatepickerToggleIcon,
                                MatMonthView,
                                MatYearView,
                                MatMultiYearView,
                                MatCalendarHeader,
                            ],
                            providers: [
                                MatDatepickerIntl,
                                MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                            ],
                            entryComponents: [
                                MatDatepickerContent,
                                MatCalendarHeader,
                            ]
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
            //# sourceMappingURL=datepicker.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37-es2015.js.map
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37-es5.js.map
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-calendar-calendar-module~pages-apps-clientes~ea910b37-es5.js.map