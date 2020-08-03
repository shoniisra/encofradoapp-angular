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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47"], {
        /***/ "./node_modules/@angular/cdk/esm2015/table.js": 
        /*!****************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/table.js ***!
          \****************************************************/
        /*! exports provided: DataSource, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CDK_TABLE_TEMPLATE, CdkTable, CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, BaseCdkCell, CdkHeaderCell, CdkFooterCell, CdkCell, CDK_ROW_TEMPLATE, BaseRowDef, CdkHeaderRowDef, CdkFooterRowDef, CdkRowDef, CdkCellOutlet, CdkHeaderRow, CdkFooterRow, CdkRow, CdkTableModule, STICKY_DIRECTIONS, StickyStyler, mixinHasStickyInput, TEXT_COLUMN_OPTIONS, CdkTextColumn */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () { return DataRowOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () { return HeaderRowOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () { return FooterRowOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () { return CDK_TABLE_TEMPLATE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function () { return CdkTable; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () { return CdkCellDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () { return CdkHeaderCellDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () { return CdkFooterCellDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () { return CdkColumnDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () { return BaseCdkCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () { return CdkHeaderCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () { return CdkFooterCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function () { return CdkCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () { return CDK_ROW_TEMPLATE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () { return BaseRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () { return CdkHeaderRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () { return CdkFooterRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () { return CdkRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () { return CdkCellOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () { return CdkHeaderRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () { return CdkFooterRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function () { return CdkRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () { return CdkTableModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () { return STICKY_DIRECTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function () { return StickyStyler; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () { return mixinHasStickyInput; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () { return TEXT_COLUMN_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () { return CdkTextColumn; });
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function () { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]; });
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
             * Mixin to provide a directive with a function that checks if the sticky input has been
             * changed since the last time the function was called. Essentially adds a dirty-check to the
             * sticky value.
             * \@docs-private
             * @template T
             * @param {?} base
             * @return {?}
             */
            function mixinHasStickyInput(base) {
                return /** @class */ (function (_super) {
                    __extends(class_1, _super);
                    /**
                     * @param {...?} args
                     */
                    function class_1() {
                        var args = [];
                        for (var _a = 0; _a < arguments.length; _a++) {
                            args[_a] = arguments[_a];
                        }
                        var _this = _super.apply(this, args) || this;
                        _this._sticky = false;
                        /**
                         * Whether the sticky input has changed since it was last checked.
                         */
                        _this._hasStickyChanged = false;
                        return _this;
                    }
                    Object.defineProperty(class_1.prototype, "sticky", {
                        /**
                         * Whether sticky positioning should be applied.
                         * @return {?}
                         */
                        get: function () { return this._sticky; },
                        /**
                         * @param {?} v
                         * @return {?}
                         */
                        set: function (v) {
                            /** @type {?} */
                            var prevValue = this._sticky;
                            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
                            this._hasStickyChanged = prevValue !== this._sticky;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /**
                     * Whether the sticky value has changed since this was last called.
                     * @return {?}
                     */
                    class_1.prototype.hasStickyChanged = function () {
                        /** @type {?} */
                        var hasStickyChanged = this._hasStickyChanged;
                        this._hasStickyChanged = false;
                        return hasStickyChanged;
                    };
                    /**
                     * Resets the dirty check for cases where the sticky state has been used without checking.
                     * @return {?}
                     */
                    class_1.prototype.resetStickyChanged = function () {
                        this._hasStickyChanged = false;
                    };
                    return class_1;
                }(base));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Cell definition for a CDK table.
             * Captures the template of a column's data row cell as well as cell-specific properties.
             */
            var CdkCellDef = /** @class */ (function () {
                /**
                 * @param {?} template
                 */
                function CdkCellDef(/** @docs-private */ template) {
                    this.template = template;
                }
                return CdkCellDef;
            }());
            CdkCellDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[cdkCellDef]' },] },
            ];
            /** @nocollapse */
            CdkCellDef.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
            ]; };
            /**
             * Header cell definition for a CDK table.
             * Captures the template of a column's header cell and as well as cell-specific properties.
             */
            var CdkHeaderCellDef = /** @class */ (function () {
                /**
                 * @param {?} template
                 */
                function CdkHeaderCellDef(/** @docs-private */ template) {
                    this.template = template;
                }
                return CdkHeaderCellDef;
            }());
            CdkHeaderCellDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[cdkHeaderCellDef]' },] },
            ];
            /** @nocollapse */
            CdkHeaderCellDef.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
            ]; };
            /**
             * Footer cell definition for a CDK table.
             * Captures the template of a column's footer cell and as well as cell-specific properties.
             */
            var CdkFooterCellDef = /** @class */ (function () {
                /**
                 * @param {?} template
                 */
                function CdkFooterCellDef(/** @docs-private */ template) {
                    this.template = template;
                }
                return CdkFooterCellDef;
            }());
            CdkFooterCellDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[cdkFooterCellDef]' },] },
            ];
            /** @nocollapse */
            CdkFooterCellDef.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
            ]; };
            // Boilerplate for applying mixins to CdkColumnDef.
            /**
             * \@docs-private
             */
            var CdkColumnDefBase = /** @class */ (function () {
                function CdkColumnDefBase() {
                }
                return CdkColumnDefBase;
            }());
            /** @type {?} */
            var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
            /**
             * Column definition for the CDK table.
             * Defines a set of cells available for a table column.
             */
            var CdkColumnDef = /** @class */ (function (_super) {
                __extends(CdkColumnDef, _super);
                function CdkColumnDef() {
                    var _this = _super.apply(this, arguments) || this;
                    _this._stickyEnd = false;
                    return _this;
                }
                Object.defineProperty(CdkColumnDef.prototype, "name", {
                    /**
                     * Unique name for this column.
                     * @return {?}
                     */
                    get: function () {
                        return this._name;
                    },
                    /**
                     * @param {?} name
                     * @return {?}
                     */
                    set: function (name) {
                        // If the directive is set without a name (updated programatically), then this setter will
                        // trigger with an empty string and should not overwrite the programatically set value.
                        if (!name) {
                            return;
                        }
                        this._name = name;
                        this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkColumnDef.prototype, "stickyEnd", {
                    /**
                     * Whether this column should be sticky positioned on the end of the row. Should make sure
                     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
                     * has been changed.
                     * @return {?}
                     */
                    get: function () {
                        return this._stickyEnd;
                    },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) {
                        /** @type {?} */
                        var prevValue = this._stickyEnd;
                        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
                        this._hasStickyChanged = prevValue !== this._stickyEnd;
                    },
                    enumerable: true,
                    configurable: true
                });
                return CdkColumnDef;
            }(_CdkColumnDefBase));
            CdkColumnDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[cdkColumnDef]',
                            inputs: ['sticky'],
                            providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }],
                        },] },
            ];
            CdkColumnDef.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkColumnDef',] }],
                stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['stickyEnd',] }],
                cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [CdkCellDef, { static: false },] }],
                headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [CdkHeaderCellDef, { static: false },] }],
                footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [CdkFooterCellDef, { static: false },] }]
            };
            /**
             * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
             */
            var BaseCdkCell = /** @class */ (function () {
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function BaseCdkCell(columnDef, elementRef) {
                    /** @type {?} */
                    var columnClassName = "cdk-column-" + columnDef.cssClassFriendlyName;
                    elementRef.nativeElement.classList.add(columnClassName);
                }
                return BaseCdkCell;
            }());
            /**
             * Header cell template container that adds the right classes and role.
             */
            var CdkHeaderCell = /** @class */ (function (_super) {
                __extends(CdkHeaderCell, _super);
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function CdkHeaderCell(columnDef, elementRef) {
                    return _super.call(this, columnDef, elementRef) || this;
                }
                return CdkHeaderCell;
            }(BaseCdkCell));
            CdkHeaderCell.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'cdk-header-cell, th[cdk-header-cell]',
                            host: {
                                'class': 'cdk-header-cell',
                                'role': 'columnheader',
                            },
                        },] },
            ];
            /** @nocollapse */
            CdkHeaderCell.ctorParameters = function () { return [
                { type: CdkColumnDef },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * Footer cell template container that adds the right classes and role.
             */
            var CdkFooterCell = /** @class */ (function (_super) {
                __extends(CdkFooterCell, _super);
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function CdkFooterCell(columnDef, elementRef) {
                    return _super.call(this, columnDef, elementRef) || this;
                }
                return CdkFooterCell;
            }(BaseCdkCell));
            CdkFooterCell.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                            host: {
                                'class': 'cdk-footer-cell',
                                'role': 'gridcell',
                            },
                        },] },
            ];
            /** @nocollapse */
            CdkFooterCell.ctorParameters = function () { return [
                { type: CdkColumnDef },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * Cell template container that adds the right classes and role.
             */
            var CdkCell = /** @class */ (function (_super) {
                __extends(CdkCell, _super);
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function CdkCell(columnDef, elementRef) {
                    return _super.call(this, columnDef, elementRef) || this;
                }
                return CdkCell;
            }(BaseCdkCell));
            CdkCell.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'cdk-cell, td[cdk-cell]',
                            host: {
                                'class': 'cdk-cell',
                                'role': 'gridcell',
                            },
                        },] },
            ];
            /** @nocollapse */
            CdkCell.ctorParameters = function () { return [
                { type: CdkColumnDef },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The row template that can be used by the mat-table. Should not be used outside of the
             * material library.
             * @type {?}
             */
            var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
            /**
             * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
             * for changes and notifying the table.
             * @abstract
             */
            var BaseRowDef = /** @class */ (function () {
                /**
                 * @param {?} template
                 * @param {?} _differs
                 */
                function BaseRowDef(template, _differs) {
                    this.template = template;
                    this._differs = _differs;
                }
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                BaseRowDef.prototype.ngOnChanges = function (changes) {
                    // Create a new columns differ if one does not yet exist. Initialize it based on initial value
                    // of the columns property or an empty array if none is provided.
                    if (!this._columnsDiffer) {
                        /** @type {?} */
                        var columns = (changes['columns'] && changes['columns'].currentValue) || [];
                        this._columnsDiffer = this._differs.find(columns).create();
                        this._columnsDiffer.diff(columns);
                    }
                };
                /**
                 * Returns the difference between the current columns and the columns from the last diff, or null
                 * if there is no difference.
                 * @return {?}
                 */
                BaseRowDef.prototype.getColumnsDiff = function () {
                    return this._columnsDiffer.diff(this.columns);
                };
                /**
                 * Gets this row def's relevant cell template from the provided column def.
                 * @param {?} column
                 * @return {?}
                 */
                BaseRowDef.prototype.extractCellTemplate = function (column) {
                    if (this instanceof CdkHeaderRowDef) {
                        return column.headerCell.template;
                    }
                    if (this instanceof CdkFooterRowDef) {
                        return column.footerCell.template;
                    }
                    else {
                        return column.cell.template;
                    }
                };
                return BaseRowDef;
            }());
            // Boilerplate for applying mixins to CdkHeaderRowDef.
            /**
             * \@docs-private
             */
            var CdkHeaderRowDefBase = /** @class */ (function (_super) {
                __extends(CdkHeaderRowDefBase, _super);
                function CdkHeaderRowDefBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CdkHeaderRowDefBase;
            }(BaseRowDef));
            /** @type {?} */
            var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
            /**
             * Header row definition for the CDK table.
             * Captures the header row's template and other header properties such as the columns to display.
             */
            var CdkHeaderRowDef = /** @class */ (function (_super) {
                __extends(CdkHeaderRowDef, _super);
                /**
                 * @param {?} template
                 * @param {?} _differs
                 */
                function CdkHeaderRowDef(template, _differs) {
                    return _super.call(this, template, _differs) || this;
                }
                // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
                // Explicitly define it so that the method is called as part of the Angular lifecycle.
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                CdkHeaderRowDef.prototype.ngOnChanges = function (changes) {
                    _super.prototype.ngOnChanges.call(this, changes);
                };
                return CdkHeaderRowDef;
            }(_CdkHeaderRowDefBase));
            CdkHeaderRowDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[cdkHeaderRowDef]',
                            inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky'],
                        },] },
            ];
            /** @nocollapse */
            CdkHeaderRowDef.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }
            ]; };
            // Boilerplate for applying mixins to CdkFooterRowDef.
            /**
             * \@docs-private
             */
            var CdkFooterRowDefBase = /** @class */ (function (_super) {
                __extends(CdkFooterRowDefBase, _super);
                function CdkFooterRowDefBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CdkFooterRowDefBase;
            }(BaseRowDef));
            /** @type {?} */
            var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
            /**
             * Footer row definition for the CDK table.
             * Captures the footer row's template and other footer properties such as the columns to display.
             */
            var CdkFooterRowDef = /** @class */ (function (_super) {
                __extends(CdkFooterRowDef, _super);
                /**
                 * @param {?} template
                 * @param {?} _differs
                 */
                function CdkFooterRowDef(template, _differs) {
                    return _super.call(this, template, _differs) || this;
                }
                // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
                // Explicitly define it so that the method is called as part of the Angular lifecycle.
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                CdkFooterRowDef.prototype.ngOnChanges = function (changes) {
                    _super.prototype.ngOnChanges.call(this, changes);
                };
                return CdkFooterRowDef;
            }(_CdkFooterRowDefBase));
            CdkFooterRowDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[cdkFooterRowDef]',
                            inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky'],
                        },] },
            ];
            /** @nocollapse */
            CdkFooterRowDef.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }
            ]; };
            /**
             * Data row definition for the CDK table.
             * Captures the header row's template and other row properties such as the columns to display and
             * a when predicate that describes when this row should be used.
             * @template T
             */
            var CdkRowDef = /** @class */ (function (_super) {
                __extends(CdkRowDef, _super);
                // TODO(andrewseguin): Add an input for providing a switch function to determine
                //   if this template should be used.
                /**
                 * @param {?} template
                 * @param {?} _differs
                 */
                function CdkRowDef(template, _differs) {
                    return _super.call(this, template, _differs) || this;
                }
                return CdkRowDef;
            }(BaseRowDef));
            CdkRowDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[cdkRowDef]',
                            inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
                        },] },
            ];
            /** @nocollapse */
            CdkRowDef.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }
            ]; };
            /**
             * Outlet for rendering cells inside of a row or header row.
             * \@docs-private
             */
            var CdkCellOutlet = /** @class */ (function () {
                /**
                 * @param {?} _viewContainer
                 */
                function CdkCellOutlet(_viewContainer) {
                    this._viewContainer = _viewContainer;
                    CdkCellOutlet.mostRecentCellOutlet = this;
                }
                /**
                 * @return {?}
                 */
                CdkCellOutlet.prototype.ngOnDestroy = function () {
                    // If this was the last outlet being rendered in the view, remove the reference
                    // from the static property after it has been destroyed to avoid leaking memory.
                    if (CdkCellOutlet.mostRecentCellOutlet === this) {
                        CdkCellOutlet.mostRecentCellOutlet = null;
                    }
                };
                return CdkCellOutlet;
            }());
            /**
             * Static property containing the latest constructed instance of this class.
             * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
             * createEmbeddedView. After one of these components are created, this property will provide
             * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
             * construct the cells with the provided context.
             */
            CdkCellOutlet.mostRecentCellOutlet = null;
            CdkCellOutlet.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[cdkCellOutlet]' },] },
            ];
            /** @nocollapse */
            CdkCellOutlet.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
            ]; };
            /**
             * Header template container that contains the cell outlet. Adds the right class and role.
             */
            var CdkHeaderRow = /** @class */ (function () {
                function CdkHeaderRow() {
                }
                return CdkHeaderRow;
            }());
            CdkHeaderRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'cdk-header-row, tr[cdk-header-row]',
                            template: CDK_ROW_TEMPLATE,
                            host: {
                                'class': 'cdk-header-row',
                                'role': 'row',
                            },
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                        },] },
            ];
            /**
             * Footer template container that contains the cell outlet. Adds the right class and role.
             */
            var CdkFooterRow = /** @class */ (function () {
                function CdkFooterRow() {
                }
                return CdkFooterRow;
            }());
            CdkFooterRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'cdk-footer-row, tr[cdk-footer-row]',
                            template: CDK_ROW_TEMPLATE,
                            host: {
                                'class': 'cdk-footer-row',
                                'role': 'row',
                            },
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                        },] },
            ];
            /**
             * Data row template container that contains the cell outlet. Adds the right class and role.
             */
            var CdkRow = /** @class */ (function () {
                function CdkRow() {
                }
                return CdkRow;
            }());
            CdkRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'cdk-row, tr[cdk-row]',
                            template: CDK_ROW_TEMPLATE,
                            host: {
                                'class': 'cdk-row',
                                'role': 'row',
                            },
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * List of all possible directions that can be used for sticky positioning.
             * \@docs-private
             * @type {?}
             */
            var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
            /**
             * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
             * \@docs-private
             */
            var StickyStyler = /** @class */ (function () {
                /**
                 * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
                 *     that uses the native `<table>` element.
                 * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
                 *     sticky positioning applied.
                 * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
                 *     by reversing left/right positions.
                 * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
                 */
                function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction, _isBrowser) {
                    if (_isBrowser === void 0) { _isBrowser = true; }
                    this._isNativeHtmlTable = _isNativeHtmlTable;
                    this._stickCellCss = _stickCellCss;
                    this.direction = direction;
                    this._isBrowser = _isBrowser;
                }
                /**
                 * Clears the sticky positioning styles from the row and its cells by resetting the `position`
                 * style, setting the zIndex to 0, and unsetting each provided sticky direction.
                 * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
                 * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
                 * @return {?}
                 */
                StickyStyler.prototype.clearStickyPositioning = function (rows, stickyDirections) {
                    for (var _a = 0, rows_1 = rows; _a < rows_1.length; _a++) {
                        var row = rows_1[_a];
                        // If the row isn't an element (e.g. if it's an `ng-container`),
                        // it won't have inline styles or `children` so we skip it.
                        if (row.nodeType !== row.ELEMENT_NODE) {
                            continue;
                        }
                        this._removeStickyStyle(row, stickyDirections);
                        for (var i = 0; i < row.children.length; i++) {
                            /** @type {?} */
                            var cell = ( /** @type {?} */(row.children[i]));
                            this._removeStickyStyle(cell, stickyDirections);
                        }
                    }
                };
                /**
                 * Applies sticky left and right positions to the cells of each row according to the sticky
                 * states of the rendered column definitions.
                 * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
                 * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
                 *     in this index position should be stuck to the start of the row.
                 * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
                 *     in this index position should be stuck to the end of the row.
                 * @return {?}
                 */
                StickyStyler.prototype.updateStickyColumns = function (rows, stickyStartStates, stickyEndStates) {
                    /** @type {?} */
                    var hasStickyColumns = stickyStartStates.some(( /**
                     * @param {?} state
                     * @return {?}
                     */function (/**
                     * @param {?} state
                     * @return {?}
                     */ state) { return state; })) || stickyEndStates.some(( /**
                     * @param {?} state
                     * @return {?}
                     */function (/**
                     * @param {?} state
                     * @return {?}
                     */ state) { return state; }));
                    if (!rows.length || !hasStickyColumns || !this._isBrowser) {
                        return;
                    }
                    /** @type {?} */
                    var firstRow = rows[0];
                    /** @type {?} */
                    var numCells = firstRow.children.length;
                    /** @type {?} */
                    var cellWidths = this._getCellWidths(firstRow);
                    /** @type {?} */
                    var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
                    /** @type {?} */
                    var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
                    /** @type {?} */
                    var isRtl = this.direction === 'rtl';
                    for (var _a = 0, rows_2 = rows; _a < rows_2.length; _a++) {
                        var row = rows_2[_a];
                        for (var i = 0; i < numCells; i++) {
                            /** @type {?} */
                            var cell = ( /** @type {?} */(row.children[i]));
                            if (stickyStartStates[i]) {
                                this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                            }
                            if (stickyEndStates[i]) {
                                this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                            }
                        }
                    }
                };
                /**
                 * Applies sticky positioning to the row's cells if using the native table layout, and to the
                 * row itself otherwise.
                 * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
                 *     sticky state and to the provided top or bottom position.
                 * @param {?} stickyStates A list of boolean states where each state represents whether the row
                 *     should be stuck in the particular top or bottom position.
                 * @param {?} position The position direction in which the row should be stuck if that row should be
                 *     sticky.
                 *
                 * @return {?}
                 */
                StickyStyler.prototype.stickRows = function (rowsToStick, stickyStates, position) {
                    // Since we can't measure the rows on the server, we can't stick the rows properly.
                    if (!this._isBrowser) {
                        return;
                    }
                    // If positioning the rows to the bottom, reverse their order when evaluating the sticky
                    // position such that the last row stuck will be "bottom: 0px" and so on.
                    /** @type {?} */
                    var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
                    /** @type {?} */
                    var stickyHeight = 0;
                    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                        if (!stickyStates[rowIndex]) {
                            continue;
                        }
                        /** @type {?} */
                        var row = rows[rowIndex];
                        if (this._isNativeHtmlTable) {
                            for (var j = 0; j < row.children.length; j++) {
                                /** @type {?} */
                                var cell = ( /** @type {?} */(row.children[j]));
                                this._addStickyStyle(cell, position, stickyHeight);
                            }
                        }
                        else {
                            // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                            // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                            this._addStickyStyle(row, position, stickyHeight);
                        }
                        if (rowIndex === rows.length - 1) {
                            // prevent unnecessary reflow from getBoundingClientRect()
                            return;
                        }
                        stickyHeight += row.getBoundingClientRect().height;
                    }
                };
                /**
                 * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
                 * footer rows is to apply sticky styling to the tfoot container. This should only be done if
                 * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
                 * the tfoot element.
                 * @param {?} tableElement
                 * @param {?} stickyStates
                 * @return {?}
                 */
                StickyStyler.prototype.updateStickyFooterContainer = function (tableElement, stickyStates) {
                    if (!this._isNativeHtmlTable) {
                        return;
                    }
                    /** @type {?} */
                    var tfoot = ( /** @type {?} */(tableElement.querySelector('tfoot')));
                    if (stickyStates.some(( /**
                     * @param {?} state
                     * @return {?}
                     */function (/**
                     * @param {?} state
                     * @return {?}
                     */ state) { return !state; }))) {
                        this._removeStickyStyle(tfoot, ['bottom']);
                    }
                    else {
                        this._addStickyStyle(tfoot, 'bottom', 0);
                    }
                };
                /**
                 * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
                 * the zIndex, removing each of the provided sticky directions, and removing the
                 * sticky position if there are no more directions.
                 * @param {?} element
                 * @param {?} stickyDirections
                 * @return {?}
                 */
                StickyStyler.prototype._removeStickyStyle = function (element, stickyDirections) {
                    for (var _a = 0, stickyDirections_1 = stickyDirections; _a < stickyDirections_1.length; _a++) {
                        var dir = stickyDirections_1[_a];
                        element.style[dir] = '';
                    }
                    element.style.zIndex = this._getCalculatedZIndex(element);
                    // If the element no longer has any more sticky directions, remove sticky positioning and
                    // the sticky CSS class.
                    /** @type {?} */
                    var hasDirection = STICKY_DIRECTIONS.some(( /**
                     * @param {?} dir
                     * @return {?}
                     */function (/**
                     * @param {?} dir
                     * @return {?}
                     */ dir) { return !!element.style[dir]; }));
                    if (!hasDirection) {
                        element.style.position = '';
                        element.classList.remove(this._stickCellCss);
                    }
                };
                /**
                 * Adds the sticky styling to the element by adding the sticky style class, changing position
                 * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
                 * direction and value.
                 * @param {?} element
                 * @param {?} dir
                 * @param {?} dirValue
                 * @return {?}
                 */
                StickyStyler.prototype._addStickyStyle = function (element, dir, dirValue) {
                    element.classList.add(this._stickCellCss);
                    element.style[dir] = dirValue + "px";
                    element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
                    element.style.zIndex = this._getCalculatedZIndex(element);
                };
                /**
                 * Calculate what the z-index should be for the element, depending on what directions (top,
                 * bottom, left, right) have been set. It should be true that elements with a top direction
                 * should have the highest index since these are elements like a table header. If any of those
                 * elements are also sticky in another direction, then they should appear above other elements
                 * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
                 * (e.g. footer rows) should then be next in the ordering such that they are below the header
                 * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
                 * should minimally increment so that they are above non-sticky elements but below top and bottom
                 * elements.
                 * @param {?} element
                 * @return {?}
                 */
                StickyStyler.prototype._getCalculatedZIndex = function (element) {
                    /** @type {?} */
                    var zIndexIncrements = {
                        top: 100,
                        bottom: 10,
                        left: 1,
                        right: 1,
                    };
                    /** @type {?} */
                    var zIndex = 0;
                    for (var _a = 0, STICKY_DIRECTIONS_1 = STICKY_DIRECTIONS; _a < STICKY_DIRECTIONS_1.length; _a++) {
                        var dir = STICKY_DIRECTIONS_1[_a];
                        if (element.style[dir]) {
                            zIndex += zIndexIncrements[dir];
                        }
                    }
                    return zIndex ? "" + zIndex : '';
                };
                /**
                 * Gets the widths for each cell in the provided row.
                 * @param {?} row
                 * @return {?}
                 */
                StickyStyler.prototype._getCellWidths = function (row) {
                    /** @type {?} */
                    var cellWidths = [];
                    /** @type {?} */
                    var firstRowCells = row.children;
                    for (var i = 0; i < firstRowCells.length; i++) {
                        /** @type {?} */
                        var cell = ( /** @type {?} */(firstRowCells[i]));
                        cellWidths.push(cell.getBoundingClientRect().width);
                    }
                    return cellWidths;
                };
                /**
                 * Determines the left and right positions of each sticky column cell, which will be the
                 * accumulation of all sticky column cell widths to the left and right, respectively.
                 * Non-sticky cells do not need to have a value set since their positions will not be applied.
                 * @param {?} widths
                 * @param {?} stickyStates
                 * @return {?}
                 */
                StickyStyler.prototype._getStickyStartColumnPositions = function (widths, stickyStates) {
                    /** @type {?} */
                    var positions = [];
                    /** @type {?} */
                    var nextPosition = 0;
                    for (var i = 0; i < widths.length; i++) {
                        if (stickyStates[i]) {
                            positions[i] = nextPosition;
                            nextPosition += widths[i];
                        }
                    }
                    return positions;
                };
                /**
                 * Determines the left and right positions of each sticky column cell, which will be the
                 * accumulation of all sticky column cell widths to the left and right, respectively.
                 * Non-sticky cells do not need to have a value set since their positions will not be applied.
                 * @param {?} widths
                 * @param {?} stickyStates
                 * @return {?}
                 */
                StickyStyler.prototype._getStickyEndColumnPositions = function (widths, stickyStates) {
                    /** @type {?} */
                    var positions = [];
                    /** @type {?} */
                    var nextPosition = 0;
                    for (var i = widths.length; i > 0; i--) {
                        if (stickyStates[i]) {
                            positions[i] = nextPosition;
                            nextPosition += widths[i];
                        }
                    }
                    return positions;
                };
                return StickyStyler;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Returns an error to be thrown when attempting to find an unexisting column.
             * \@docs-private
             * @param {?} id Id whose lookup failed.
             * @return {?}
             */
            function getTableUnknownColumnError(id) {
                return Error("Could not find column with id \"" + id + "\".");
            }
            /**
             * Returns an error to be thrown when two column definitions have the same name.
             * \@docs-private
             * @param {?} name
             * @return {?}
             */
            function getTableDuplicateColumnNameError(name) {
                return Error("Duplicate column definition name provided: \"" + name + "\".");
            }
            /**
             * Returns an error to be thrown when there are multiple rows that are missing a when function.
             * \@docs-private
             * @return {?}
             */
            function getTableMultipleDefaultRowDefsError() {
                return Error("There can only be one default row without a when predicate function.");
            }
            /**
             * Returns an error to be thrown when there are no matching row defs for a particular set of data.
             * \@docs-private
             * @param {?} data
             * @return {?}
             */
            function getTableMissingMatchingRowDefError(data) {
                return Error("Could not find a matching row definition for the" +
                    ("provided row data: " + JSON.stringify(data)));
            }
            /**
             * Returns an error to be thrown when there is no row definitions present in the content.
             * \@docs-private
             * @return {?}
             */
            function getTableMissingRowDefsError() {
                return Error('Missing definitions for header, footer, and row; ' +
                    'cannot determine which columns should be rendered.');
            }
            /**
             * Returns an error to be thrown when the data source does not match the compatible types.
             * \@docs-private
             * @return {?}
             */
            function getTableUnknownDataSourceError() {
                return Error("Provided data source did not match an array, Observable, or DataSource");
            }
            /**
             * Returns an error to be thrown when the text column cannot find a parent table to inject.
             * \@docs-private
             * @return {?}
             */
            function getTableTextColumnMissingParentTableError() {
                return Error("Text column could not find a parent table for registration.");
            }
            /**
             * Returns an error to be thrown when a table text column doesn't have a name.
             * \@docs-private
             * @return {?}
             */
            function getTableTextColumnMissingNameError() {
                return Error("Table text column must have a name.");
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Provides a handle for the table to grab the view container's ng-container to insert data rows.
             * \@docs-private
             */
            var DataRowOutlet = /** @class */ (function () {
                /**
                 * @param {?} viewContainer
                 * @param {?} elementRef
                 */
                function DataRowOutlet(viewContainer, elementRef) {
                    this.viewContainer = viewContainer;
                    this.elementRef = elementRef;
                }
                return DataRowOutlet;
            }());
            DataRowOutlet.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[rowOutlet]' },] },
            ];
            /** @nocollapse */
            DataRowOutlet.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * Provides a handle for the table to grab the view container's ng-container to insert the header.
             * \@docs-private
             */
            var HeaderRowOutlet = /** @class */ (function () {
                /**
                 * @param {?} viewContainer
                 * @param {?} elementRef
                 */
                function HeaderRowOutlet(viewContainer, elementRef) {
                    this.viewContainer = viewContainer;
                    this.elementRef = elementRef;
                }
                return HeaderRowOutlet;
            }());
            HeaderRowOutlet.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[headerRowOutlet]' },] },
            ];
            /** @nocollapse */
            HeaderRowOutlet.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * Provides a handle for the table to grab the view container's ng-container to insert the footer.
             * \@docs-private
             */
            var FooterRowOutlet = /** @class */ (function () {
                /**
                 * @param {?} viewContainer
                 * @param {?} elementRef
                 */
                function FooterRowOutlet(viewContainer, elementRef) {
                    this.viewContainer = viewContainer;
                    this.elementRef = elementRef;
                }
                return FooterRowOutlet;
            }());
            FooterRowOutlet.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[footerRowOutlet]' },] },
            ];
            /** @nocollapse */
            FooterRowOutlet.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * The table template that can be used by the mat-table. Should not be used outside of the
             * material library.
             * \@docs-private
             * @type {?}
             */
            var CDK_TABLE_TEMPLATE = 
            // Note that according to MDN, the `caption` element has to be projected as the **first**
            // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
            "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
            /**
             * A data table that can render a header row, data rows, and a footer row.
             * Uses the dataSource input to determine the data to be rendered. The data can be provided either
             * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
             * connect function that will return an Observable stream that emits the data array to render.
             * @template T
             */
            var CdkTable = /** @class */ (function () {
                /**
                 * @param {?} _differs
                 * @param {?} _changeDetectorRef
                 * @param {?} _elementRef
                 * @param {?} role
                 * @param {?} _dir
                 * @param {?} _document
                 * @param {?} _platform
                 */
                function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
                    this._differs = _differs;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._elementRef = _elementRef;
                    this._dir = _dir;
                    this._platform = _platform;
                    /**
                     * Subject that emits when the component has been destroyed.
                     */
                    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    /**
                     * Map of all the user's defined columns (header, data, and footer cell template) identified by
                     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
                     * any custom column definitions added to `_customColumnDefs`.
                     */
                    this._columnDefsByName = new Map();
                    /**
                     * Column definitions that were defined outside of the direct content children of the table.
                     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
                     * column definitions as *its* content child.
                     */
                    this._customColumnDefs = new Set();
                    /**
                     * Data row definitions that were defined outside of the direct content children of the table.
                     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
                     * built-in data rows as *its* content child.
                     */
                    this._customRowDefs = new Set();
                    /**
                     * Header row definitions that were defined outside of the direct content children of the table.
                     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
                     * built-in header rows as *its* content child.
                     */
                    this._customHeaderRowDefs = new Set();
                    /**
                     * Footer row definitions that were defined outside of the direct content children of the table.
                     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
                     * built-in footer row as *its* content child.
                     */
                    this._customFooterRowDefs = new Set();
                    /**
                     * Whether the header row definition has been changed. Triggers an update to the header row after
                     * content is checked. Initialized as true so that the table renders the initial set of rows.
                     */
                    this._headerRowDefChanged = true;
                    /**
                     * Whether the footer row definition has been changed. Triggers an update to the footer row after
                     * content is checked. Initialized as true so that the table renders the initial set of rows.
                     */
                    this._footerRowDefChanged = true;
                    /**
                     * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
                     * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
                     * the cached `RenderRow` objects when possible, the row identity is preserved when the data
                     * and row template matches, which allows the `IterableDiffer` to check rows by reference
                     * and understand which rows are added/moved/removed.
                     *
                     * Implemented as a map of maps where the first key is the `data: T` object and the second is the
                     * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
                     * contains an array of created pairs. The array is necessary to handle cases where the data
                     * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
                     * stored.
                     */
                    this._cachedRenderRowsMap = new Map();
                    /**
                     * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
                     * table subclasses.
                     */
                    this.stickyCssClass = 'cdk-table-sticky';
                    this._multiTemplateDataRows = false;
                    // TODO(andrewseguin): Remove max value as the end index
                    //   and instead calculate the view on init and scroll.
                    /**
                     * Stream containing the latest information on what rows are being displayed on screen.
                     * Can be used by the data source to as a heuristic of what data should be provided.
                     *
                     * \@docs-private
                     */
                    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
                    if (!role) {
                        this._elementRef.nativeElement.setAttribute('role', 'grid');
                    }
                    this._document = _document;
                    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
                }
                Object.defineProperty(CdkTable.prototype, "trackBy", {
                    /**
                     * Tracking function that will be used to check the differences in data changes. Used similarly
                     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
                     * relative to the function to know if a row should be added/removed/moved.
                     * Accepts a function that takes two parameters, `index` and `item`.
                     * @return {?}
                     */
                    get: function () {
                        return this._trackByFn;
                    },
                    /**
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && fn != null && typeof fn !== 'function' && ( /** @type {?} */(console)) &&
                            ( /** @type {?} */(console.warn))) {
                            console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
                        }
                        this._trackByFn = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkTable.prototype, "dataSource", {
                    /**
                     * The table's source of data, which can be provided in three ways (in order of complexity):
                     *   - Simple data array (each object represents one table row)
                     *   - Stream that emits a data array each time the array changes
                     *   - `DataSource` object that implements the connect/disconnect interface.
                     *
                     * If a data array is provided, the table must be notified when the array's objects are
                     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
                     * render the diff since the last table render. If the data array reference is changed, the table
                     * will automatically trigger an update to the rows.
                     *
                     * When providing an Observable stream, the table will trigger an update automatically when the
                     * stream emits a new array of data.
                     *
                     * Finally, when providing a `DataSource` object, the table will use the Observable stream
                     * provided by the connect function and trigger updates when that stream emits new data array
                     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
                     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
                     * subscriptions registered during the connect process).
                     * @return {?}
                     */
                    get: function () {
                        return this._dataSource;
                    },
                    /**
                     * @param {?} dataSource
                     * @return {?}
                     */
                    set: function (dataSource) {
                        if (this._dataSource !== dataSource) {
                            this._switchDataSource(dataSource);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkTable.prototype, "multiTemplateDataRows", {
                    /**
                     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
                     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
                     * dataobject will render the first row that evaluates its when predicate to true, in the order
                     * defined in the table, or otherwise the default row which does not have a when predicate.
                     * @return {?}
                     */
                    get: function () {
                        return this._multiTemplateDataRows;
                    },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) {
                        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
                        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
                        // this setter will be invoked before the row outlet has been defined hence the null check.
                        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
                            this._forceRenderDataRows();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkTable.prototype.ngOnInit = function () {
                    var _this = this;
                    this._setupStickyStyler();
                    if (this._isNativeHtmlTable) {
                        this._applyNativeTableSections();
                    }
                    // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
                    // the user has provided a custom trackBy, return the result of that function as evaluated
                    // with the values of the `RenderRow`'s data and index.
                    this._dataDiffer = this._differs.find([]).create(( /**
                     * @param {?} _i
                     * @param {?} dataRow
                     * @return {?}
                     */function (_i, dataRow) {
                        return _this.trackBy ? _this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
                    }));
                };
                /**
                 * @return {?}
                 */
                CdkTable.prototype.ngAfterContentChecked = function () {
                    // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
                    this._cacheRowDefs();
                    this._cacheColumnDefs();
                    // Make sure that the user has at least added header, footer, or data row def.
                    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
                        throw getTableMissingRowDefsError();
                    }
                    // Render updates if the list of columns have been changed for the header, row, or footer defs.
                    this._renderUpdatedColumns();
                    // If the header row definition has been changed, trigger a render to the header row.
                    if (this._headerRowDefChanged) {
                        this._forceRenderHeaderRows();
                        this._headerRowDefChanged = false;
                    }
                    // If the footer row definition has been changed, trigger a render to the footer row.
                    if (this._footerRowDefChanged) {
                        this._forceRenderFooterRows();
                        this._footerRowDefChanged = false;
                    }
                    // If there is a data source and row definitions, connect to the data source unless a
                    // connection has already been made.
                    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
                        this._observeRenderChanges();
                    }
                    this._checkStickyStates();
                };
                /**
                 * @return {?}
                 */
                CdkTable.prototype.ngOnDestroy = function () {
                    this._rowOutlet.viewContainer.clear();
                    this._headerRowOutlet.viewContainer.clear();
                    this._footerRowOutlet.viewContainer.clear();
                    this._cachedRenderRowsMap.clear();
                    this._onDestroy.next();
                    this._onDestroy.complete();
                    if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
                        this.dataSource.disconnect(this);
                    }
                };
                /**
                 * Renders rows based on the table's latest set of data, which was either provided directly as an
                 * input or retrieved through an Observable stream (directly or from a DataSource).
                 * Checks for differences in the data since the last diff to perform only the necessary
                 * changes (add/remove/move rows).
                 *
                 * If the table's data source is a DataSource or Observable, this will be invoked automatically
                 * each time the provided Observable stream emits a new data array. Otherwise if your data is
                 * an array, this function will need to be called to render any changes.
                 * @return {?}
                 */
                CdkTable.prototype.renderRows = function () {
                    var _this = this;
                    this._renderRows = this._getAllRenderRows();
                    /** @type {?} */
                    var changes = this._dataDiffer.diff(this._renderRows);
                    if (!changes) {
                        return;
                    }
                    /** @type {?} */
                    var viewContainer = this._rowOutlet.viewContainer;
                    changes.forEachOperation(( /**
                     * @param {?} record
                     * @param {?} prevIndex
                     * @param {?} currentIndex
                     * @return {?}
                     */function (record, prevIndex, currentIndex) {
                        if (record.previousIndex == null) {
                            _this._insertRow(record.item, ( /** @type {?} */(currentIndex)));
                        }
                        else if (currentIndex == null) {
                            viewContainer.remove(( /** @type {?} */(prevIndex)));
                        }
                        else {
                            /** @type {?} */
                            var view = ( /** @type {?} */(viewContainer.get(( /** @type {?} */(prevIndex)))));
                            viewContainer.move(( /** @type {?} */(view)), currentIndex);
                        }
                    }));
                    // Update the meta context of a row's context data (index, count, first, last, ...)
                    this._updateRowIndexContext();
                    // Update rows that did not get added/removed/moved but may have had their identity changed,
                    // e.g. if trackBy matched data on some property but the actual data reference changed.
                    changes.forEachIdentityChange(( /**
                     * @param {?} record
                     * @return {?}
                     */function (record) {
                        /** @type {?} */
                        var rowView = ( /** @type {?} */(viewContainer.get(( /** @type {?} */(record.currentIndex)))));
                        rowView.context.$implicit = record.item.data;
                    }));
                    this.updateStickyColumnStyles();
                };
                /**
                 * Sets the header row definition to be used. Overrides the header row definition gathered by
                 * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
                 * table's content is checked.
                 * \@docs-private
                 * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
                 * \@breaking-change 8.0.0
                 * @param {?} headerRowDef
                 * @return {?}
                 */
                CdkTable.prototype.setHeaderRowDef = function (headerRowDef) {
                    this._customHeaderRowDefs = new Set([headerRowDef]);
                    this._headerRowDefChanged = true;
                };
                /**
                 * Sets the footer row definition to be used. Overrides the footer row definition gathered by
                 * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
                 * table's content is checked.
                 * \@docs-private
                 * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
                 * \@breaking-change 8.0.0
                 * @param {?} footerRowDef
                 * @return {?}
                 */
                CdkTable.prototype.setFooterRowDef = function (footerRowDef) {
                    this._customFooterRowDefs = new Set([footerRowDef]);
                    this._footerRowDefChanged = true;
                };
                /**
                 * Adds a column definition that was not included as part of the content children.
                 * @param {?} columnDef
                 * @return {?}
                 */
                CdkTable.prototype.addColumnDef = function (columnDef) {
                    this._customColumnDefs.add(columnDef);
                };
                /**
                 * Removes a column definition that was not included as part of the content children.
                 * @param {?} columnDef
                 * @return {?}
                 */
                CdkTable.prototype.removeColumnDef = function (columnDef) {
                    this._customColumnDefs.delete(columnDef);
                };
                /**
                 * Adds a row definition that was not included as part of the content children.
                 * @param {?} rowDef
                 * @return {?}
                 */
                CdkTable.prototype.addRowDef = function (rowDef) {
                    this._customRowDefs.add(rowDef);
                };
                /**
                 * Removes a row definition that was not included as part of the content children.
                 * @param {?} rowDef
                 * @return {?}
                 */
                CdkTable.prototype.removeRowDef = function (rowDef) {
                    this._customRowDefs.delete(rowDef);
                };
                /**
                 * Adds a header row definition that was not included as part of the content children.
                 * @param {?} headerRowDef
                 * @return {?}
                 */
                CdkTable.prototype.addHeaderRowDef = function (headerRowDef) {
                    this._customHeaderRowDefs.add(headerRowDef);
                    this._headerRowDefChanged = true;
                };
                /**
                 * Removes a header row definition that was not included as part of the content children.
                 * @param {?} headerRowDef
                 * @return {?}
                 */
                CdkTable.prototype.removeHeaderRowDef = function (headerRowDef) {
                    this._customHeaderRowDefs.delete(headerRowDef);
                    this._headerRowDefChanged = true;
                };
                /**
                 * Adds a footer row definition that was not included as part of the content children.
                 * @param {?} footerRowDef
                 * @return {?}
                 */
                CdkTable.prototype.addFooterRowDef = function (footerRowDef) {
                    this._customFooterRowDefs.add(footerRowDef);
                    this._footerRowDefChanged = true;
                };
                /**
                 * Removes a footer row definition that was not included as part of the content children.
                 * @param {?} footerRowDef
                 * @return {?}
                 */
                CdkTable.prototype.removeFooterRowDef = function (footerRowDef) {
                    this._customFooterRowDefs.delete(footerRowDef);
                    this._footerRowDefChanged = true;
                };
                /**
                 * Updates the header sticky styles. First resets all applied styles with respect to the cells
                 * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
                 * automatically called when the header row changes its displayed set of columns, or if its
                 * sticky input changes. May be called manually for cases where the cell content changes outside
                 * of these events.
                 * @return {?}
                 */
                CdkTable.prototype.updateStickyHeaderRowStyles = function () {
                    /** @type {?} */
                    var headerRows = this._getRenderedRows(this._headerRowOutlet);
                    /** @type {?} */
                    var tableElement = ( /** @type {?} */(this._elementRef.nativeElement));
                    // Hide the thead element if there are no header rows. This is necessary to satisfy
                    // overzealous a11y checkers that fail because the `rowgroup` element does not contain
                    // required child `row`.
                    /** @type {?} */
                    var thead = tableElement.querySelector('thead');
                    if (thead) {
                        thead.style.display = headerRows.length ? '' : 'none';
                    }
                    /** @type {?} */
                    var stickyStates = this._headerRowDefs.map(( /**
                     * @param {?} def
                     * @return {?}
                     */function (/**
                     * @param {?} def
                     * @return {?}
                     */ def) { return def.sticky; }));
                    this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
                    this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
                    // Reset the dirty state of the sticky input change since it has been used.
                    this._headerRowDefs.forEach(( /**
                     * @param {?} def
                     * @return {?}
                     */function (/**
                     * @param {?} def
                     * @return {?}
                     */ def) { return def.resetStickyChanged(); }));
                };
                /**
                 * Updates the footer sticky styles. First resets all applied styles with respect to the cells
                 * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
                 * automatically called when the footer row changes its displayed set of columns, or if its
                 * sticky input changes. May be called manually for cases where the cell content changes outside
                 * of these events.
                 * @return {?}
                 */
                CdkTable.prototype.updateStickyFooterRowStyles = function () {
                    /** @type {?} */
                    var footerRows = this._getRenderedRows(this._footerRowOutlet);
                    /** @type {?} */
                    var tableElement = ( /** @type {?} */(this._elementRef.nativeElement));
                    // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
                    // overzealous a11y checkers that fail because the `rowgroup` element does not contain
                    // required child `row`.
                    /** @type {?} */
                    var tfoot = tableElement.querySelector('tfoot');
                    if (tfoot) {
                        tfoot.style.display = footerRows.length ? '' : 'none';
                    }
                    /** @type {?} */
                    var stickyStates = this._footerRowDefs.map(( /**
                     * @param {?} def
                     * @return {?}
                     */function (/**
                     * @param {?} def
                     * @return {?}
                     */ def) { return def.sticky; }));
                    this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
                    this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
                    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
                    // Reset the dirty state of the sticky input change since it has been used.
                    this._footerRowDefs.forEach(( /**
                     * @param {?} def
                     * @return {?}
                     */function (/**
                     * @param {?} def
                     * @return {?}
                     */ def) { return def.resetStickyChanged(); }));
                };
                /**
                 * Updates the column sticky styles. First resets all applied styles with respect to the cells
                 * sticking to the left and right. Then sticky styles are added for the left and right according
                 * to the column definitions for each cell in each row. This is automatically called when
                 * the data source provides a new set of data or when a column definition changes its sticky
                 * input. May be called manually for cases where the cell content changes outside of these events.
                 * @return {?}
                 */
                CdkTable.prototype.updateStickyColumnStyles = function () {
                    var _this = this;
                    /** @type {?} */
                    var headerRows = this._getRenderedRows(this._headerRowOutlet);
                    /** @type {?} */
                    var dataRows = this._getRenderedRows(this._rowOutlet);
                    /** @type {?} */
                    var footerRows = this._getRenderedRows(this._footerRowOutlet);
                    // Clear the left and right positioning from all columns in the table across all rows since
                    // sticky columns span across all table sections (header, data, footer)
                    this._stickyStyler.clearStickyPositioning(headerRows.concat(dataRows, footerRows), ['left', 'right']);
                    // Update the sticky styles for each header row depending on the def's sticky state
                    headerRows.forEach(( /**
                     * @param {?} headerRow
                     * @param {?} i
                     * @return {?}
                     */function (headerRow, i) {
                        _this._addStickyColumnStyles([headerRow], _this._headerRowDefs[i]);
                    }));
                    // Update the sticky styles for each data row depending on its def's sticky state
                    this._rowDefs.forEach(( /**
                     * @param {?} rowDef
                     * @return {?}
                     */function (/**
                     * @param {?} rowDef
                     * @return {?}
                     */ rowDef) {
                        // Collect all the rows rendered with this row definition.
                        /** @type {?} */
                        var rows = [];
                        for (var i = 0; i < dataRows.length; i++) {
                            if (_this._renderRows[i].rowDef === rowDef) {
                                rows.push(dataRows[i]);
                            }
                        }
                        _this._addStickyColumnStyles(rows, rowDef);
                    }));
                    // Update the sticky styles for each footer row depending on the def's sticky state
                    footerRows.forEach(( /**
                     * @param {?} footerRow
                     * @param {?} i
                     * @return {?}
                     */function (footerRow, i) {
                        _this._addStickyColumnStyles([footerRow], _this._footerRowDefs[i]);
                    }));
                    // Reset the dirty state of the sticky input change since it has been used.
                    Array.from(this._columnDefsByName.values()).forEach(( /**
                     * @param {?} def
                     * @return {?}
                     */function (/**
                     * @param {?} def
                     * @return {?}
                     */ def) { return def.resetStickyChanged(); }));
                };
                /**
                 * Get the list of RenderRow objects to render according to the current list of data and defined
                 * row definitions. If the previous list already contained a particular pair, it should be reused
                 * so that the differ equates their references.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._getAllRenderRows = function () {
                    /** @type {?} */
                    var renderRows = [];
                    // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
                    // new cache while unused ones can be picked up by garbage collection.
                    /** @type {?} */
                    var prevCachedRenderRows = this._cachedRenderRowsMap;
                    this._cachedRenderRowsMap = new Map();
                    // For each data object, get the list of rows that should be rendered, represented by the
                    // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
                    for (var i = 0; i < this._data.length; i++) {
                        /** @type {?} */
                        var data = this._data[i];
                        /** @type {?} */
                        var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
                        if (!this._cachedRenderRowsMap.has(data)) {
                            this._cachedRenderRowsMap.set(data, new WeakMap());
                        }
                        for (var j = 0; j < renderRowsForData.length; j++) {
                            /** @type {?} */
                            var renderRow = renderRowsForData[j];
                            /** @type {?} */
                            var cache = ( /** @type {?} */(this._cachedRenderRowsMap.get(renderRow.data)));
                            if (cache.has(renderRow.rowDef)) {
                                ( /** @type {?} */(cache.get(renderRow.rowDef))).push(renderRow);
                            }
                            else {
                                cache.set(renderRow.rowDef, [renderRow]);
                            }
                            renderRows.push(renderRow);
                        }
                    }
                    return renderRows;
                };
                /**
                 * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
                 * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
                 * `(T, CdkRowDef)` pair.
                 * @private
                 * @param {?} data
                 * @param {?} dataIndex
                 * @param {?=} cache
                 * @return {?}
                 */
                CdkTable.prototype._getRenderRowsForData = function (data, dataIndex, cache) {
                    /** @type {?} */
                    var rowDefs = this._getRowDefs(data, dataIndex);
                    return rowDefs.map(( /**
                     * @param {?} rowDef
                     * @return {?}
                     */function (/**
                     * @param {?} rowDef
                     * @return {?}
                     */ rowDef) {
                        /** @type {?} */
                        var cachedRenderRows = (cache && cache.has(rowDef)) ? ( /** @type {?} */(cache.get(rowDef))) : [];
                        if (cachedRenderRows.length) {
                            /** @type {?} */
                            var dataRow = ( /** @type {?} */(cachedRenderRows.shift()));
                            dataRow.dataIndex = dataIndex;
                            return dataRow;
                        }
                        else {
                            return { data: data, rowDef: rowDef, dataIndex: dataIndex };
                        }
                    }));
                };
                /**
                 * Update the map containing the content's column definitions.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._cacheColumnDefs = function () {
                    var _this = this;
                    this._columnDefsByName.clear();
                    /** @type {?} */
                    var columnDefs = mergeQueryListAndSet(this._contentColumnDefs, this._customColumnDefs);
                    columnDefs.forEach(( /**
                     * @param {?} columnDef
                     * @return {?}
                     */function (/**
                     * @param {?} columnDef
                     * @return {?}
                     */ columnDef) {
                        if (_this._columnDefsByName.has(columnDef.name)) {
                            throw getTableDuplicateColumnNameError(columnDef.name);
                        }
                        _this._columnDefsByName.set(columnDef.name, columnDef);
                    }));
                };
                /**
                 * Update the list of all available row definitions that can be used.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._cacheRowDefs = function () {
                    this._headerRowDefs =
                        mergeQueryListAndSet(this._contentHeaderRowDefs, this._customHeaderRowDefs);
                    this._footerRowDefs =
                        mergeQueryListAndSet(this._contentFooterRowDefs, this._customFooterRowDefs);
                    this._rowDefs = mergeQueryListAndSet(this._contentRowDefs, this._customRowDefs);
                    // After all row definitions are determined, find the row definition to be considered default.
                    /** @type {?} */
                    var defaultRowDefs = this._rowDefs.filter(( /**
                     * @param {?} def
                     * @return {?}
                     */function (/**
                     * @param {?} def
                     * @return {?}
                     */ def) { return !def.when; }));
                    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
                        throw getTableMultipleDefaultRowDefsError();
                    }
                    this._defaultRowDef = defaultRowDefs[0];
                };
                /**
                 * Check if the header, data, or footer rows have changed what columns they want to display or
                 * whether the sticky states have changed for the header or footer. If there is a diff, then
                 * re-render that section.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._renderUpdatedColumns = function () {
                    /** @type {?} */
                    var columnsDiffReducer = ( /**
                     * @param {?} acc
                     * @param {?} def
                     * @return {?}
                     */function (acc, def) { return acc || !!def.getColumnsDiff(); });
                    // Force re-render data rows if the list of column definitions have changed.
                    if (this._rowDefs.reduce(columnsDiffReducer, false)) {
                        this._forceRenderDataRows();
                    }
                    // Force re-render header/footer rows if the list of column definitions have changed..
                    if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
                        this._forceRenderHeaderRows();
                    }
                    if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
                        this._forceRenderFooterRows();
                    }
                };
                /**
                 * Switch to the provided data source by resetting the data and unsubscribing from the current
                 * render change subscription if one exists. If the data source is null, interpret this by
                 * clearing the row outlet. Otherwise start listening for new data.
                 * @private
                 * @param {?} dataSource
                 * @return {?}
                 */
                CdkTable.prototype._switchDataSource = function (dataSource) {
                    this._data = [];
                    if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
                        this.dataSource.disconnect(this);
                    }
                    // Stop listening for data from the previous data source.
                    if (this._renderChangeSubscription) {
                        this._renderChangeSubscription.unsubscribe();
                        this._renderChangeSubscription = null;
                    }
                    if (!dataSource) {
                        if (this._dataDiffer) {
                            this._dataDiffer.diff([]);
                        }
                        this._rowOutlet.viewContainer.clear();
                    }
                    this._dataSource = dataSource;
                };
                /**
                 * Set up a subscription for the data provided by the data source.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._observeRenderChanges = function () {
                    var _this = this;
                    // If no data source has been set, there is nothing to observe for changes.
                    if (!this.dataSource) {
                        return;
                    }
                    /** @type {?} */
                    var dataStream;
                    if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
                        dataStream = this.dataSource.connect(this);
                    }
                    else if (this.dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]) {
                        dataStream = this.dataSource;
                    }
                    else if (Array.isArray(this.dataSource)) {
                        dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
                    }
                    if (dataStream === undefined) {
                        throw getTableUnknownDataSourceError();
                    }
                    this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (/**
                     * @param {?} data
                     * @return {?}
                     */ data) {
                        _this._data = data || [];
                        _this.renderRows();
                    }));
                };
                /**
                 * Clears any existing content in the header row outlet and creates a new embedded view
                 * in the outlet using the header row definition.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._forceRenderHeaderRows = function () {
                    var _this = this;
                    // Clear the header row outlet if any content exists.
                    if (this._headerRowOutlet.viewContainer.length > 0) {
                        this._headerRowOutlet.viewContainer.clear();
                    }
                    this._headerRowDefs.forEach(( /**
                     * @param {?} def
                     * @param {?} i
                     * @return {?}
                     */function (def, i) { return _this._renderRow(_this._headerRowOutlet, def, i); }));
                    this.updateStickyHeaderRowStyles();
                    this.updateStickyColumnStyles();
                };
                /**
                 * Clears any existing content in the footer row outlet and creates a new embedded view
                 * in the outlet using the footer row definition.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._forceRenderFooterRows = function () {
                    var _this = this;
                    // Clear the footer row outlet if any content exists.
                    if (this._footerRowOutlet.viewContainer.length > 0) {
                        this._footerRowOutlet.viewContainer.clear();
                    }
                    this._footerRowDefs.forEach(( /**
                     * @param {?} def
                     * @param {?} i
                     * @return {?}
                     */function (def, i) { return _this._renderRow(_this._footerRowOutlet, def, i); }));
                    this.updateStickyFooterRowStyles();
                    this.updateStickyColumnStyles();
                };
                /**
                 * Adds the sticky column styles for the rows according to the columns' stick states.
                 * @private
                 * @param {?} rows
                 * @param {?} rowDef
                 * @return {?}
                 */
                CdkTable.prototype._addStickyColumnStyles = function (rows, rowDef) {
                    var _this = this;
                    /** @type {?} */
                    var columnDefs = Array.from(rowDef.columns || []).map(( /**
                     * @param {?} columnName
                     * @return {?}
                     */function (/**
                     * @param {?} columnName
                     * @return {?}
                     */ columnName) {
                        /** @type {?} */
                        var columnDef = _this._columnDefsByName.get(columnName);
                        if (!columnDef) {
                            throw getTableUnknownColumnError(columnName);
                        }
                        return ( /** @type {?} */(columnDef));
                    }));
                    /** @type {?} */
                    var stickyStartStates = columnDefs.map(( /**
                     * @param {?} columnDef
                     * @return {?}
                     */function (/**
                     * @param {?} columnDef
                     * @return {?}
                     */ columnDef) { return columnDef.sticky; }));
                    /** @type {?} */
                    var stickyEndStates = columnDefs.map(( /**
                     * @param {?} columnDef
                     * @return {?}
                     */function (/**
                     * @param {?} columnDef
                     * @return {?}
                     */ columnDef) { return columnDef.stickyEnd; }));
                    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
                };
                /**
                 * Gets the list of rows that have been rendered in the row outlet.
                 * @param {?} rowOutlet
                 * @return {?}
                 */
                CdkTable.prototype._getRenderedRows = function (rowOutlet) {
                    /** @type {?} */
                    var renderedRows = [];
                    for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
                        /** @type {?} */
                        var viewRef = (( /** @type {?} */(( /** @type {?} */(rowOutlet.viewContainer.get(i))))));
                        renderedRows.push(viewRef.rootNodes[0]);
                    }
                    return renderedRows;
                };
                /**
                 * Get the matching row definitions that should be used for this row data. If there is only
                 * one row definition, it is returned. Otherwise, find the row definitions that has a when
                 * predicate that returns true with the data. If none return true, return the default row
                 * definition.
                 * @param {?} data
                 * @param {?} dataIndex
                 * @return {?}
                 */
                CdkTable.prototype._getRowDefs = function (data, dataIndex) {
                    if (this._rowDefs.length == 1) {
                        return [this._rowDefs[0]];
                    }
                    /** @type {?} */
                    var rowDefs = [];
                    if (this.multiTemplateDataRows) {
                        rowDefs = this._rowDefs.filter(( /**
                         * @param {?} def
                         * @return {?}
                         */function (/**
                         * @param {?} def
                         * @return {?}
                         */ def) { return !def.when || def.when(dataIndex, data); }));
                    }
                    else {
                        /** @type {?} */
                        var rowDef = this._rowDefs.find(( /**
                         * @param {?} def
                         * @return {?}
                         */function (/**
                         * @param {?} def
                         * @return {?}
                         */ def) { return def.when && def.when(dataIndex, data); })) || this._defaultRowDef;
                        if (rowDef) {
                            rowDefs.push(rowDef);
                        }
                    }
                    if (!rowDefs.length) {
                        throw getTableMissingMatchingRowDefError(data);
                    }
                    return rowDefs;
                };
                /**
                 * Create the embedded view for the data row template and place it in the correct index location
                 * within the data row view container.
                 * @private
                 * @param {?} renderRow
                 * @param {?} renderIndex
                 * @return {?}
                 */
                CdkTable.prototype._insertRow = function (renderRow, renderIndex) {
                    /** @type {?} */
                    var rowDef = renderRow.rowDef;
                    /** @type {?} */
                    var context = { $implicit: renderRow.data };
                    this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
                };
                /**
                 * Creates a new row template in the outlet and fills it with the set of cell templates.
                 * Optionally takes a context to provide to the row and cells, as well as an optional index
                 * of where to place the new row template in the outlet.
                 * @private
                 * @param {?} outlet
                 * @param {?} rowDef
                 * @param {?} index
                 * @param {?=} context
                 * @return {?}
                 */
                CdkTable.prototype._renderRow = function (outlet, rowDef, index, context) {
                    if (context === void 0) { context = {}; }
                    // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
                    outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
                    for (var _a = 0, _b = this._getCellTemplates(rowDef); _a < _b.length; _a++) {
                        var cellTemplate = _b[_a];
                        if (CdkCellOutlet.mostRecentCellOutlet) {
                            CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                        }
                    }
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Updates the index-related context for each row to reflect any changes in the index of the rows,
                 * e.g. first/last/even/odd.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._updateRowIndexContext = function () {
                    /** @type {?} */
                    var viewContainer = this._rowOutlet.viewContainer;
                    for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                        /** @type {?} */
                        var viewRef = ( /** @type {?} */(viewContainer.get(renderIndex)));
                        /** @type {?} */
                        var context = ( /** @type {?} */(viewRef.context));
                        context.count = count;
                        context.first = renderIndex === 0;
                        context.last = renderIndex === count - 1;
                        context.even = renderIndex % 2 === 0;
                        context.odd = !context.even;
                        if (this.multiTemplateDataRows) {
                            context.dataIndex = this._renderRows[renderIndex].dataIndex;
                            context.renderIndex = renderIndex;
                        }
                        else {
                            context.index = this._renderRows[renderIndex].dataIndex;
                        }
                    }
                };
                /**
                 * Gets the column definitions for the provided row def.
                 * @private
                 * @param {?} rowDef
                 * @return {?}
                 */
                CdkTable.prototype._getCellTemplates = function (rowDef) {
                    var _this = this;
                    if (!rowDef || !rowDef.columns) {
                        return [];
                    }
                    return Array.from(rowDef.columns, ( /**
                     * @param {?} columnId
                     * @return {?}
                     */function (/**
                     * @param {?} columnId
                     * @return {?}
                     */ columnId) {
                        /** @type {?} */
                        var column = _this._columnDefsByName.get(columnId);
                        if (!column) {
                            throw getTableUnknownColumnError(columnId);
                        }
                        return rowDef.extractCellTemplate(column);
                    }));
                };
                /**
                 * Adds native table sections (e.g. tbody) and moves the row outlets into them.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._applyNativeTableSections = function () {
                    /** @type {?} */
                    var documentFragment = this._document.createDocumentFragment();
                    /** @type {?} */
                    var sections = [
                        { tag: 'thead', outlet: this._headerRowOutlet },
                        { tag: 'tbody', outlet: this._rowOutlet },
                        { tag: 'tfoot', outlet: this._footerRowOutlet },
                    ];
                    for (var _a = 0, sections_1 = sections; _a < sections_1.length; _a++) {
                        var section = sections_1[_a];
                        /** @type {?} */
                        var element = this._document.createElement(section.tag);
                        element.setAttribute('role', 'rowgroup');
                        element.appendChild(section.outlet.elementRef.nativeElement);
                        documentFragment.appendChild(element);
                    }
                    // Use a DocumentFragment so we don't hit the DOM on each iteration.
                    this._elementRef.nativeElement.appendChild(documentFragment);
                };
                /**
                 * Forces a re-render of the data rows. Should be called in cases where there has been an input
                 * change that affects the evaluation of which rows should be rendered, e.g. toggling
                 * `multiTemplateDataRows` or adding/removing row definitions.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._forceRenderDataRows = function () {
                    this._dataDiffer.diff([]);
                    this._rowOutlet.viewContainer.clear();
                    this.renderRows();
                    this.updateStickyColumnStyles();
                };
                /**
                 * Checks if there has been a change in sticky states since last check and applies the correct
                 * sticky styles. Since checking resets the "dirty" state, this should only be performed once
                 * during a change detection and after the inputs are settled (after content check).
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._checkStickyStates = function () {
                    /** @type {?} */
                    var stickyCheckReducer = ( /**
                     * @param {?} acc
                     * @param {?} d
                     * @return {?}
                     */function (acc, d) {
                        return acc || d.hasStickyChanged();
                    });
                    // Note that the check needs to occur for every definition since it notifies the definition
                    // that it can reset its dirty state. Using another operator like `some` may short-circuit
                    // remaining definitions and leave them in an unchecked state.
                    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
                        this.updateStickyHeaderRowStyles();
                    }
                    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
                        this.updateStickyFooterRowStyles();
                    }
                    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
                        this.updateStickyColumnStyles();
                    }
                };
                /**
                 * Creates the sticky styler that will be used for sticky rows and columns. Listens
                 * for directionality changes and provides the latest direction to the styler. Re-applies column
                 * stickiness when directionality changes.
                 * @private
                 * @return {?}
                 */
                CdkTable.prototype._setupStickyStyler = function () {
                    var _this = this;
                    /** @type {?} */
                    var direction = this._dir ? this._dir.value : 'ltr';
                    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
                    (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
                        .subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (/**
                 * @param {?} value
                 * @return {?}
                 */ value) {
                        _this._stickyStyler.direction = value;
                        _this.updateStickyColumnStyles();
                    }));
                };
                return CdkTable;
            }());
            CdkTable.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'cdk-table, table[cdk-table]',
                            exportAs: 'cdkTable',
                            template: CDK_TABLE_TEMPLATE,
                            host: {
                                'class': 'cdk-table',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                            // The view for `MatTable` consists entirely of templates declared in other views. As they are
                            // declared elsewhere, they are checked when their declaration points are checked.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                        },] },
            ];
            /** @nocollapse */
            CdkTable.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['role',] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
            ]; };
            CdkTable.propDecorators = {
                trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
                _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
                _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
                _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [CdkColumnDef,] }],
                _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [CdkRowDef,] }],
                _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [CdkHeaderRowDef,] }],
                _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [CdkFooterRowDef,] }]
            };
            /**
             * Utility function that gets a merged list of the entries in a QueryList and values of a Set.
             * @template T
             * @param {?} queryList
             * @param {?} set
             * @return {?}
             */
            function mergeQueryListAndSet(queryList, set) {
                return queryList.toArray().concat(Array.from(set));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Injection token that can be used to specify the text column options.
             * @type {?}
             */
            var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('text-column-options');
            /**
             * Column that simply shows text content for the header and row cells. Assumes that the table
             * is using the native table implementation (`<table>`).
             *
             * By default, the name of this column will be the header text and data property accessor.
             * The header text can be overridden with the `headerText` input. Cell values can be overridden with
             * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
             * input.
             * @template T
             */
            var CdkTextColumn = /** @class */ (function () {
                /**
                 * @param {?} _table
                 * @param {?} _options
                 */
                function CdkTextColumn(_table, _options) {
                    this._table = _table;
                    this._options = _options;
                    /**
                     * Alignment of the cell values.
                     */
                    this.justify = 'start';
                    this._options = _options || {};
                }
                Object.defineProperty(CdkTextColumn.prototype, "name", {
                    /**
                     * Column name that should be used to reference this column.
                     * @return {?}
                     */
                    get: function () {
                        return this._name;
                    },
                    /**
                     * @param {?} name
                     * @return {?}
                     */
                    set: function (name) {
                        this._name = name;
                        // With Ivy, inputs can be initialized before static query results are
                        // available. In that case, we defer the synchronization until "ngOnInit" fires.
                        this._syncColumnDefName();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkTextColumn.prototype.ngOnInit = function () {
                    this._syncColumnDefName();
                    if (this.headerText === undefined) {
                        this.headerText = this._createDefaultHeaderText();
                    }
                    if (!this.dataAccessor) {
                        this.dataAccessor =
                            this._options.defaultDataAccessor || (( /**
                             * @param {?} data
                             * @param {?} name
                             * @return {?}
                             */function (data, name) { return (( /** @type {?} */(data)))[name]; }));
                    }
                    if (this._table) {
                        // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
                        // since the columnDef will not pick up its content by the time the table finishes checking
                        // its content and initializing the rows.
                        this.columnDef.cell = this.cell;
                        this.columnDef.headerCell = this.headerCell;
                        this._table.addColumnDef(this.columnDef);
                    }
                    else {
                        throw getTableTextColumnMissingParentTableError();
                    }
                };
                /**
                 * @return {?}
                 */
                CdkTextColumn.prototype.ngOnDestroy = function () {
                    if (this._table) {
                        this._table.removeColumnDef(this.columnDef);
                    }
                };
                /**
                 * Creates a default header text. Use the options' header text transformation function if one
                 * has been provided. Otherwise simply capitalize the column name.
                 * @return {?}
                 */
                CdkTextColumn.prototype._createDefaultHeaderText = function () {
                    /** @type {?} */
                    var name = this.name;
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !name) {
                        throw getTableTextColumnMissingNameError();
                    }
                    if (this._options && this._options.defaultHeaderTextTransform) {
                        return this._options.defaultHeaderTextTransform(name);
                    }
                    return name[0].toUpperCase() + name.slice(1);
                };
                /**
                 * Synchronizes the column definition name with the text column name.
                 * @private
                 * @return {?}
                 */
                CdkTextColumn.prototype._syncColumnDefName = function () {
                    if (this.columnDef) {
                        this.columnDef.name = this.name;
                    }
                };
                return CdkTextColumn;
            }());
            CdkTextColumn.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'cdk-text-column',
                            template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            // Change detection is intentionally not set to OnPush. This component's template will be provided
                            // to the table to be inserted into its view. This is problematic when change detection runs since
                            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                            // mean's the template in the table's view will not have the updated value (and in fact will cause
                            // an ExpressionChangedAfterItHasBeenCheckedError).
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                        },] },
            ];
            /** @nocollapse */
            CdkTextColumn.ctorParameters = function () { return [
                { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
            ]; };
            CdkTextColumn.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
                cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CdkCellDef, { static: true },] }],
                headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var EXPORTED_DECLARATIONS = [
                CdkTable,
                CdkRowDef,
                CdkCellDef,
                CdkCellOutlet,
                CdkHeaderCellDef,
                CdkFooterCellDef,
                CdkColumnDef,
                CdkCell,
                CdkRow,
                CdkHeaderCell,
                CdkFooterCell,
                CdkHeaderRow,
                CdkHeaderRowDef,
                CdkFooterRow,
                CdkFooterRowDef,
                DataRowOutlet,
                HeaderRowOutlet,
                FooterRowOutlet,
                CdkTextColumn,
            ];
            var CdkTableModule = /** @class */ (function () {
                function CdkTableModule() {
                }
                return CdkTableModule;
            }());
            CdkTableModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: EXPORTED_DECLARATIONS,
                            declarations: EXPORTED_DECLARATIONS
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
            //# sourceMappingURL=table.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/paginator.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/paginator.js ***!
          \*************************************************************/
        /*! exports provided: MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () { return MatPaginatorModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function () { return PageEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function () { return MatPaginator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () { return MatPaginatorIntl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () { return MAT_PAGINATOR_INTL_PROVIDER; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
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
             * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
             * include it in a custom provider
             */
            var MatPaginatorIntl = /** @class */ (function () {
                function MatPaginatorIntl() {
                    /**
                     * Stream to emit from when labels are changed. Use this to notify components when the labels have
                     * changed after initialization.
                     */
                    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    /**
                     * A label for the page size selector.
                     */
                    this.itemsPerPageLabel = 'Items per page:';
                    /**
                     * A label for the button that increments the current page.
                     */
                    this.nextPageLabel = 'Next page';
                    /**
                     * A label for the button that decrements the current page.
                     */
                    this.previousPageLabel = 'Previous page';
                    /**
                     * A label for the button that moves to the first page.
                     */
                    this.firstPageLabel = 'First page';
                    /**
                     * A label for the button that moves to the last page.
                     */
                    this.lastPageLabel = 'Last page';
                    /**
                     * A label for the range of items within the current page and the length of the whole list.
                     */
                    this.getRangeLabel = ( /**
                     * @param {?} page
                     * @param {?} pageSize
                     * @param {?} length
                     * @return {?}
                     */function (page, pageSize, length) {
                        if (length == 0 || pageSize == 0) {
                            return "0 of " + length;
                        }
                        length = Math.max(length, 0);
                        /** @type {?} */
                        var startIndex = page * pageSize;
                        // If the start index exceeds the list length, do not try and fix the end index to the end.
                        /** @type {?} */
                        var endIndex = startIndex < length ?
                            Math.min(startIndex + pageSize, length) :
                            startIndex + pageSize;
                        return startIndex + 1 + " \u2013 " + endIndex + " of " + length;
                    });
                }
                return MatPaginatorIntl;
            }());
            MatPaginatorIntl.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentIntl
             * @return {?}
             */
            function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
                return parentIntl || new MatPaginatorIntl();
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_PAGINATOR_INTL_PROVIDER = {
                // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
                provide: MatPaginatorIntl,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
                useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The default page size if there is no page size and there are no provided page size options.
             * @type {?}
             */
            var DEFAULT_PAGE_SIZE = 50;
            /**
             * Change event object that is emitted when the user selects a
             * different page size or navigates to another page.
             */
            var PageEvent = /** @class */ (function () {
                function PageEvent() {
                }
                return PageEvent;
            }());
            // Boilerplate for applying mixins to MatPaginator.
            /**
             * \@docs-private
             */
            var MatPaginatorBase = /** @class */ (function () {
                function MatPaginatorBase() {
                }
                return MatPaginatorBase;
            }());
            /** @type {?} */
            var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinInitialized"])(MatPaginatorBase));
            /**
             * Component to provide navigation between paged information. Displays the size of the current
             * page, user-selectable options to change that size, what items are being shown, and
             * navigational button to go to the previous or next page.
             */
            var MatPaginator = /** @class */ (function (_super) {
                __extends(MatPaginator, _super);
                /**
                 * @param {?} _intl
                 * @param {?} _changeDetectorRef
                 */
                function MatPaginator(_intl, _changeDetectorRef) {
                    var _this = _super.call(this) || this;
                    _this._intl = _intl;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._pageIndex = 0;
                    _this._length = 0;
                    _this._pageSizeOptions = [];
                    _this._hidePageSize = false;
                    _this._showFirstLastButtons = false;
                    /**
                     * Event emitted when the paginator changes the page size or page index.
                     */
                    _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this._intlChanges = _intl.changes.subscribe(( /**
                     * @return {?}
                     */function () { return _this._changeDetectorRef.markForCheck(); }));
                    return _this;
                }
                Object.defineProperty(MatPaginator.prototype, "pageIndex", {
                    /**
                     * The zero-based page index of the displayed list of items. Defaulted to 0.
                     * @return {?}
                     */
                    get: function () { return this._pageIndex; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);
                        this._changeDetectorRef.markForCheck();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "length", {
                    /**
                     * The length of the total number of items that are being paginated. Defaulted to 0.
                     * @return {?}
                     */
                    get: function () { return this._length; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
                        this._changeDetectorRef.markForCheck();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "pageSize", {
                    /**
                     * Number of items to display on a page. By default set to 50.
                     * @return {?}
                     */
                    get: function () { return this._pageSize; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);
                        this._updateDisplayedPageSizeOptions();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
                    /**
                     * The set of provided page size options to display to the user.
                     * @return {?}
                     */
                    get: function () { return this._pageSizeOptions; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._pageSizeOptions = (value || []).map(( /**
                         * @param {?} p
                         * @return {?}
                         */function (/**
                         * @param {?} p
                         * @return {?}
                         */ p) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(p); }));
                        this._updateDisplayedPageSizeOptions();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
                    /**
                     * Whether to hide the page size selection UI from the user.
                     * @return {?}
                     */
                    get: function () { return this._hidePageSize; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
                    /**
                     * Whether to show the first/last buttons UI to the user.
                     * @return {?}
                     */
                    get: function () { return this._showFirstLastButtons; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatPaginator.prototype.ngOnInit = function () {
                    this._initialized = true;
                    this._updateDisplayedPageSizeOptions();
                    this._markInitialized();
                };
                /**
                 * @return {?}
                 */
                MatPaginator.prototype.ngOnDestroy = function () {
                    this._intlChanges.unsubscribe();
                };
                /**
                 * Advances to the next page if it exists.
                 * @return {?}
                 */
                MatPaginator.prototype.nextPage = function () {
                    if (!this.hasNextPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex++;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Move back to the previous page if it exists.
                 * @return {?}
                 */
                MatPaginator.prototype.previousPage = function () {
                    if (!this.hasPreviousPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex--;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Move to the first page if not already there.
                 * @return {?}
                 */
                MatPaginator.prototype.firstPage = function () {
                    // hasPreviousPage being false implies at the start
                    if (!this.hasPreviousPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex = 0;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Move to the last page if not already there.
                 * @return {?}
                 */
                MatPaginator.prototype.lastPage = function () {
                    // hasNextPage being false implies at the end
                    if (!this.hasNextPage()) {
                        return;
                    }
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex = this.getNumberOfPages() - 1;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Whether there is a previous page.
                 * @return {?}
                 */
                MatPaginator.prototype.hasPreviousPage = function () {
                    return this.pageIndex >= 1 && this.pageSize != 0;
                };
                /**
                 * Whether there is a next page.
                 * @return {?}
                 */
                MatPaginator.prototype.hasNextPage = function () {
                    /** @type {?} */
                    var maxPageIndex = this.getNumberOfPages() - 1;
                    return this.pageIndex < maxPageIndex && this.pageSize != 0;
                };
                /**
                 * Calculate the number of pages
                 * @return {?}
                 */
                MatPaginator.prototype.getNumberOfPages = function () {
                    if (!this.pageSize) {
                        return 0;
                    }
                    return Math.ceil(this.length / this.pageSize);
                };
                /**
                 * Changes the page size so that the first item displayed on the page will still be
                 * displayed using the new page size.
                 *
                 * For example, if the page size is 10 and on the second page (items indexed 10-19) then
                 * switching so that the page size is 5 will set the third page as the current page so
                 * that the 10th item will still be displayed.
                 * @param {?} pageSize
                 * @return {?}
                 */
                MatPaginator.prototype._changePageSize = function (pageSize) {
                    // Current page needs to be updated to reflect the new page size. Navigate to the page
                    // containing the previous page's first item.
                    /** @type {?} */
                    var startIndex = this.pageIndex * this.pageSize;
                    /** @type {?} */
                    var previousPageIndex = this.pageIndex;
                    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
                    this.pageSize = pageSize;
                    this._emitPageEvent(previousPageIndex);
                };
                /**
                 * Checks whether the buttons for going forwards should be disabled.
                 * @return {?}
                 */
                MatPaginator.prototype._nextButtonsDisabled = function () {
                    return this.disabled || !this.hasNextPage();
                };
                /**
                 * Checks whether the buttons for going backwards should be disabled.
                 * @return {?}
                 */
                MatPaginator.prototype._previousButtonsDisabled = function () {
                    return this.disabled || !this.hasPreviousPage();
                };
                /**
                 * Updates the list of page size options to display to the user. Includes making sure that
                 * the page size is an option and that the list is sorted.
                 * @private
                 * @return {?}
                 */
                MatPaginator.prototype._updateDisplayedPageSizeOptions = function () {
                    if (!this._initialized) {
                        return;
                    }
                    // If no page size is provided, use the first page size option or the default page size.
                    if (!this.pageSize) {
                        this._pageSize = this.pageSizeOptions.length != 0 ?
                            this.pageSizeOptions[0] :
                            DEFAULT_PAGE_SIZE;
                    }
                    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
                    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
                        this._displayedPageSizeOptions.push(this.pageSize);
                    }
                    // Sort the numbers using a number-specific sort function.
                    this._displayedPageSizeOptions.sort(( /**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */function (a, b) { return a - b; }));
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Emits an event notifying that a change of the paginator's properties has been triggered.
                 * @private
                 * @param {?} previousPageIndex
                 * @return {?}
                 */
                MatPaginator.prototype._emitPageEvent = function (previousPageIndex) {
                    this.page.emit({
                        previousPageIndex: previousPageIndex,
                        pageIndex: this.pageIndex,
                        pageSize: this.pageSize,
                        length: this.length
                    });
                };
                return MatPaginator;
            }(_MatPaginatorBase));
            MatPaginator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-paginator',
                            exportAs: 'matPaginator',
                            template: "<div class=\"mat-paginator-outer-container\"><div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" [color]=\"color\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [disabled]=\"disabled\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div></div>",
                            styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
                            inputs: ['disabled'],
                            host: {
                                'class': 'mat-paginator',
                            },
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                        },] },
            ];
            /** @nocollapse */
            MatPaginator.ctorParameters = function () { return [
                { type: MatPaginatorIntl },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            MatPaginator.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                hidePageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                showFirstLastButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatPaginatorModule = /** @class */ (function () {
                function MatPaginatorModule() {
                }
                return MatPaginatorModule;
            }());
            MatPaginatorModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                            ],
                            exports: [MatPaginator],
                            declarations: [MatPaginator],
                            providers: [MAT_PAGINATOR_INTL_PROVIDER],
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
            //# sourceMappingURL=paginator.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/sort.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/sort.js ***!
          \********************************************************/
        /*! exports provided: MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function () { return MatSortModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () { return MatSortHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () { return MatSortHeaderIntl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () { return MAT_SORT_HEADER_INTL_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function () { return MatSort; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () { return matSortAnimations; });
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
             * @param {?} id
             * @return {?}
             */
            function getSortDuplicateSortableIdError(id) {
                return Error("Cannot have two MatSortables with the same id (" + id + ").");
            }
            /**
             * \@docs-private
             * @return {?}
             */
            function getSortHeaderNotContainedWithinSortError() {
                return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
            }
            /**
             * \@docs-private
             * @return {?}
             */
            function getSortHeaderMissingIdError() {
                return Error("MatSortHeader must be provided with a unique id.");
            }
            /**
             * \@docs-private
             * @param {?} direction
             * @return {?}
             */
            function getSortInvalidDirectionError(direction) {
                return Error(direction + " is not a valid sort direction ('asc' or 'desc').");
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to MatSort.
            /**
             * \@docs-private
             */
            var MatSortBase = /** @class */ (function () {
                function MatSortBase() {
                }
                return MatSortBase;
            }());
            /** @type {?} */
            var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
            /**
             * Container for MatSortables to manage the sort state and provide default sort parameters.
             */
            var MatSort = /** @class */ (function (_super) {
                __extends(MatSort, _super);
                function MatSort() {
                    var _this = _super.apply(this, arguments) || this;
                    /**
                     * Collection of all registered sortables that this directive manages.
                     */
                    _this.sortables = new Map();
                    /**
                     * Used to notify any child components listening to state changes.
                     */
                    _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * The direction to set when an MatSortable is initially sorted.
                     * May be overriden by the MatSortable's sort start.
                     */
                    _this.start = 'asc';
                    _this._direction = '';
                    /**
                     * Event emitted when the user changes either the active sort or sort direction.
                     */
                    _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(MatSort.prototype, "direction", {
                    /**
                     * The sort direction of the currently active MatSortable.
                     * @return {?}
                     */
                    get: function () { return this._direction; },
                    /**
                     * @param {?} direction
                     * @return {?}
                     */
                    set: function (direction) {
                        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                            throw getSortInvalidDirectionError(direction);
                        }
                        this._direction = direction;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSort.prototype, "disableClear", {
                    /**
                     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
                     * May be overriden by the MatSortable's disable clear input.
                     * @return {?}
                     */
                    get: function () { return this._disableClear; },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Register function to be used by the contained MatSortables. Adds the MatSortable to the
                 * collection of MatSortables.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.register = function (sortable) {
                    if (!sortable.id) {
                        throw getSortHeaderMissingIdError();
                    }
                    if (this.sortables.has(sortable.id)) {
                        throw getSortDuplicateSortableIdError(sortable.id);
                    }
                    this.sortables.set(sortable.id, sortable);
                };
                /**
                 * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
                 * collection of contained MatSortables.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.deregister = function (sortable) {
                    this.sortables.delete(sortable.id);
                };
                /**
                 * Sets the active sort id and determines the new sort direction.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.sort = function (sortable) {
                    if (this.active != sortable.id) {
                        this.active = sortable.id;
                        this.direction = sortable.start ? sortable.start : this.start;
                    }
                    else {
                        this.direction = this.getNextSortDirection(sortable);
                    }
                    this.sortChange.emit({ active: this.active, direction: this.direction });
                };
                /**
                 * Returns the next sort direction of the active sortable, checking for potential overrides.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.getNextSortDirection = function (sortable) {
                    if (!sortable) {
                        return '';
                    }
                    // Get the sort direction cycle with the potential sortable overrides.
                    /** @type {?} */
                    var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
                    /** @type {?} */
                    var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
                    // Get and return the next direction in the cycle
                    /** @type {?} */
                    var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
                    if (nextDirectionIndex >= sortDirectionCycle.length) {
                        nextDirectionIndex = 0;
                    }
                    return sortDirectionCycle[nextDirectionIndex];
                };
                /**
                 * @return {?}
                 */
                MatSort.prototype.ngOnInit = function () {
                    this._markInitialized();
                };
                /**
                 * @return {?}
                 */
                MatSort.prototype.ngOnChanges = function () {
                    this._stateChanges.next();
                };
                /**
                 * @return {?}
                 */
                MatSort.prototype.ngOnDestroy = function () {
                    this._stateChanges.complete();
                };
                return MatSort;
            }(_MatSortMixinBase));
            MatSort.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matSort]',
                            exportAs: 'matSort',
                            inputs: ['disabled: matSortDisabled']
                        },] },
            ];
            MatSort.propDecorators = {
                active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortActive',] }],
                start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortStart',] }],
                direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortDirection',] }],
                disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortDisableClear',] }],
                sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['matSortChange',] }]
            };
            /**
             * Returns the sort direction cycle to use given the provided parameters of order and clear.
             * @param {?} start
             * @param {?} disableClear
             * @return {?}
             */
            function getSortDirectionCycle(start, disableClear) {
                /** @type {?} */
                var sortOrder = ['asc', 'desc'];
                if (start == 'desc') {
                    sortOrder.reverse();
                }
                if (!disableClear) {
                    sortOrder.push('');
                }
                return sortOrder;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' +
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
            /**
             * Animations used by MatSort.
             * \@docs-private
             * @type {?}
             */
            var matSortAnimations = {
                /**
                 * Animation that moves the sort indicator.
                 */
                indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0px)' })),
                    // 10px is the height of the sort indicator, minus the width of the pointers
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(10px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))
                ]),
                /**
                 * Animation that rotates the left pointer of the indicator based on the sorting direction.
                 */
                leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('leftPointer', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(-45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))
                ]),
                /**
                 * Animation that rotates the right pointer of the indicator based on the sorting direction.
                 */
                rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rightPointer', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(-45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))
                ]),
                /**
                 * Animation that controls the arrow opacity.
                 */
                arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowOpacity', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: .54 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                    // Transition between all states except for immediate transitions
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION)),
                ]),
                /**
                 * Animation for the translation of the arrow as a whole. States are separated into two
                 * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
                 * peek, and active. The other states define a specific animation (source-to-destination)
                 * and are determined as a function of their prev user-perceived state and what the next state
                 * should be.
                 */
                arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowPosition', [
                    // Hidden Above => Hint Center
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-25%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' })
                    ]))),
                    // Hint Center => Hidden Below
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(25%)' })
                    ]))),
                    // Hidden Below => Hint Center
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(25%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' })
                    ]))),
                    // Hint Center => Hidden Above
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-25%)' })
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-25%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(25%)' })),
                ]),
                /**
                 * Necessary trigger that calls animate on children animations.
                 */
                allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('allowChildren', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true })
                    ])
                ]),
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
             * include it in a custom provider.
             */
            var MatSortHeaderIntl = /** @class */ (function () {
                function MatSortHeaderIntl() {
                    /**
                     * Stream that emits whenever the labels here are changed. Use this to notify
                     * components if the labels have changed after initialization.
                     */
                    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * ARIA label for the sorting button.
                     */
                    this.sortButtonLabel = ( /**
                     * @param {?} id
                     * @return {?}
                     */function (id) {
                        return "Change sorting for " + id;
                    });
                }
                return MatSortHeaderIntl;
            }());
            MatSortHeaderIntl.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentIntl
             * @return {?}
             */
            function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
                return parentIntl || new MatSortHeaderIntl();
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_SORT_HEADER_INTL_PROVIDER = {
                // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
                provide: MatSortHeaderIntl,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatSortHeaderIntl]],
                useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to the sort header.
            /**
             * \@docs-private
             */
            var MatSortHeaderBase = /** @class */ (function () {
                function MatSortHeaderBase() {
                }
                return MatSortHeaderBase;
            }());
            /** @type {?} */
            var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
            /**
             * Applies sorting behavior (click to change sort) and styles to an element, including an
             * arrow to display the current sort direction.
             *
             * Must be provided with an id and contained within a parent MatSort directive.
             *
             * If used on header cells in a CdkTable, it will automatically default its id from its containing
             * column definition.
             */
            var MatSortHeader = /** @class */ (function (_super) {
                __extends(MatSortHeader, _super);
                /**
                 * @param {?} _intl
                 * @param {?} changeDetectorRef
                 * @param {?} _sort
                 * @param {?} _columnDef
                 */
                function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
                    var _this = 
                    // Note that we use a string token for the `_columnDef`, because the value is provided both by
                    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
                    // and we want to avoid having the sort header depending on the CDK table because
                    // of this single reference.
                    _super.call(this) || this;
                    _this._intl = _intl;
                    _this._sort = _sort;
                    _this._columnDef = _columnDef;
                    /**
                     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
                     * provide an affordance that the header is sortable by showing on focus and hover.
                     */
                    _this._showIndicatorHint = false;
                    /**
                     * The direction the arrow should be facing according to the current state.
                     */
                    _this._arrowDirection = '';
                    /**
                     * Whether the view state animation should show the transition between the `from` and `to` states.
                     */
                    _this._disableViewStateAnimation = false;
                    /**
                     * Sets the position of the arrow that displays when sorted.
                     */
                    _this.arrowPosition = 'after';
                    if (!_sort) {
                        throw getSortHeaderNotContainedWithinSortError();
                    }
                    _this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes)
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        if (_this._isSorted()) {
                            _this._updateArrowDirection();
                        }
                        // If this header was recently active and now no longer sorted, animate away the arrow.
                        if (!_this._isSorted() && _this._viewState && _this._viewState.toState === 'active') {
                            _this._disableViewStateAnimation = false;
                            _this._setAnimationTransitionState({ fromState: 'active', toState: _this._arrowDirection });
                        }
                        changeDetectorRef.markForCheck();
                    }));
                    return _this;
                }
                Object.defineProperty(MatSortHeader.prototype, "disableClear", {
                    /**
                     * Overrides the disable clear value of the containing MatSort for this MatSortable.
                     * @return {?}
                     */
                    get: function () { return this._disableClear; },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatSortHeader.prototype.ngOnInit = function () {
                    if (!this.id && this._columnDef) {
                        this.id = this._columnDef.name;
                    }
                    // Initialize the direction of the arrow and set the view state to be immediately that state.
                    this._updateArrowDirection();
                    this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
                    this._sort.register(this);
                };
                /**
                 * @return {?}
                 */
                MatSortHeader.prototype.ngOnDestroy = function () {
                    this._sort.deregister(this);
                    this._rerenderSubscription.unsubscribe();
                };
                /**
                 * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
                 * user showing what the active sort will become. If set to false, the arrow will fade away.
                 * @param {?} visible
                 * @return {?}
                 */
                MatSortHeader.prototype._setIndicatorHintVisible = function (visible) {
                    // No-op if the sort header is disabled - should not make the hint visible.
                    if (this._isDisabled() && visible) {
                        return;
                    }
                    this._showIndicatorHint = visible;
                    if (!this._isSorted()) {
                        this._updateArrowDirection();
                        if (this._showIndicatorHint) {
                            this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
                        }
                        else {
                            this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
                        }
                    }
                };
                /**
                 * Sets the animation transition view state for the arrow's position and opacity. If the
                 * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
                 * no animation appears.
                 * @param {?} viewState
                 * @return {?}
                 */
                MatSortHeader.prototype._setAnimationTransitionState = function (viewState) {
                    this._viewState = viewState;
                    // If the animation for arrow position state (opacity/translation) should be disabled,
                    // remove the fromState so that it jumps right to the toState.
                    if (this._disableViewStateAnimation) {
                        this._viewState = { toState: viewState.toState };
                    }
                };
                /**
                 * Triggers the sort on this sort header and removes the indicator hint.
                 * @return {?}
                 */
                MatSortHeader.prototype._handleClick = function () {
                    if (this._isDisabled()) {
                        return;
                    }
                    this._sort.sort(this);
                    // Do not show the animation if the header was already shown in the right position.
                    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
                        this._disableViewStateAnimation = true;
                    }
                    // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
                    // the direction it is facing.
                    /** @type {?} */
                    var viewState = this._isSorted() ?
                        { fromState: this._arrowDirection, toState: 'active' } :
                        { fromState: 'active', toState: this._arrowDirection };
                    this._setAnimationTransitionState(viewState);
                    this._showIndicatorHint = false;
                };
                /**
                 * Whether this MatSortHeader is currently sorted in either ascending or descending order.
                 * @return {?}
                 */
                MatSortHeader.prototype._isSorted = function () {
                    return this._sort.active == this.id &&
                        (this._sort.direction === 'asc' || this._sort.direction === 'desc');
                };
                /**
                 * Returns the animation state for the arrow direction (indicator and pointers).
                 * @return {?}
                 */
                MatSortHeader.prototype._getArrowDirectionState = function () {
                    return "" + (this._isSorted() ? 'active-' : '') + this._arrowDirection;
                };
                /**
                 * Returns the arrow position state (opacity, translation).
                 * @return {?}
                 */
                MatSortHeader.prototype._getArrowViewState = function () {
                    /** @type {?} */
                    var fromState = this._viewState.fromState;
                    return (fromState ? fromState + "-to-" : '') + this._viewState.toState;
                };
                /**
                 * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
                 * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
                 * active sorted direction. The reason this is updated through a function is because the direction
                 * should only be changed at specific times - when deactivated but the hint is displayed and when
                 * the sort is active and the direction changes. Otherwise the arrow's direction should linger
                 * in cases such as the sort becoming deactivated but we want to animate the arrow away while
                 * preserving its direction, even though the next sort direction is actually different and should
                 * only be changed once the arrow displays again (hint or activation).
                 * @return {?}
                 */
                MatSortHeader.prototype._updateArrowDirection = function () {
                    this._arrowDirection = this._isSorted() ?
                        this._sort.direction :
                        (this.start || this._sort.start);
                };
                /**
                 * @return {?}
                 */
                MatSortHeader.prototype._isDisabled = function () {
                    return this._sort.disabled || this.disabled;
                };
                /**
                 * Gets the aria-sort attribute that should be applied to this sort header. If this header
                 * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
                 * says that the aria-sort property should only be present on one header at a time, so removing
                 * ensures this is true.
                 * @return {?}
                 */
                MatSortHeader.prototype._getAriaSortAttribute = function () {
                    if (!this._isSorted()) {
                        return null;
                    }
                    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
                };
                /**
                 * Whether the arrow inside the sort header should be rendered.
                 * @return {?}
                 */
                MatSortHeader.prototype._renderArrow = function () {
                    return !this._isDisabled() || this._isSorted();
                };
                return MatSortHeader;
            }(_MatSortHeaderMixinBase));
            MatSortHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: '[mat-sort-header]',
                            exportAs: 'matSortHeader',
                            template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" *ngIf=\"_renderArrow()\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
                            styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
                            host: {
                                '(click)': '_handleClick()',
                                '(mouseenter)': '_setIndicatorHintVisible(true)',
                                '(mouseleave)': '_setIndicatorHintVisible(false)',
                                '[attr.aria-sort]': '_getAriaSortAttribute()',
                                '[class.mat-sort-header-disabled]': '_isDisabled()',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                            inputs: ['disabled'],
                            animations: [
                                matSortAnimations.indicator,
                                matSortAnimations.leftPointer,
                                matSortAnimations.rightPointer,
                                matSortAnimations.arrowOpacity,
                                matSortAnimations.arrowPosition,
                                matSortAnimations.allowChildren,
                            ]
                        },] },
            ];
            /** @nocollapse */
            MatSortHeader.ctorParameters = function () { return [
                { type: MatSortHeaderIntl },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: MatSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['MAT_SORT_HEADER_COLUMN_DEF',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
            ]; };
            MatSortHeader.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-sort-header',] }],
                arrowPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatSortModule = /** @class */ (function () {
                function MatSortModule() {
                }
                return MatSortModule;
            }());
            MatSortModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [MatSort, MatSortHeader],
                            declarations: [MatSort, MatSortHeader],
                            providers: [MAT_SORT_HEADER_INTL_PROVIDER]
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
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=sort.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/table.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/table.js ***!
          \*********************************************************/
        /*! exports provided: MatTableModule, MatCellDef, MatHeaderCellDef, MatFooterCellDef, MatColumnDef, MatHeaderCell, MatFooterCell, MatCell, MatTable, MatHeaderRowDef, MatFooterRowDef, MatRowDef, MatHeaderRow, MatFooterRow, MatRow, MatTableDataSource, MatTextColumn */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function () { return MatTableModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function () { return MatCellDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () { return MatHeaderCellDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () { return MatFooterCellDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () { return MatColumnDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () { return MatHeaderCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () { return MatFooterCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function () { return MatCell; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function () { return MatTable; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () { return MatHeaderRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () { return MatFooterRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function () { return MatRowDef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () { return MatHeaderRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () { return MatFooterRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function () { return MatRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () { return MatTableDataSource; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () { return MatTextColumn; });
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
             * Wrapper for the CdkTable with Material design styles.
             * @template T
             */
            var MatTable = /** @class */ (function (_super) {
                __extends(MatTable, _super);
                function MatTable() {
                    var _this = _super.apply(this, arguments) || this;
                    /**
                     * Overrides the sticky CSS class set by the `CdkTable`.
                     */
                    _this.stickyCssClass = 'mat-table-sticky';
                    return _this;
                }
                return MatTable;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTable"]));
            MatTable.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'mat-table, table[mat-table]',
                            exportAs: 'matTable',
                            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_TABLE_TEMPLATE"],
                            styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],
                            host: {
                                'class': 'mat-table',
                            },
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTable"], useExisting: MatTable }],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Cell definition for the mat-table.
             * Captures the template of a column's data row cell as well as cell-specific properties.
             */
            var MatCellDef = /** @class */ (function (_super) {
                __extends(MatCellDef, _super);
                function MatCellDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatCellDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkCellDef"]));
            MatCellDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matCellDef]',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkCellDef"], useExisting: MatCellDef }]
                        },] },
            ];
            /**
             * Header cell definition for the mat-table.
             * Captures the template of a column's header cell and as well as cell-specific properties.
             */
            var MatHeaderCellDef = /** @class */ (function (_super) {
                __extends(MatHeaderCellDef, _super);
                function MatHeaderCellDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatHeaderCellDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderCellDef"]));
            MatHeaderCellDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matHeaderCellDef]',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]
                        },] },
            ];
            /**
             * Footer cell definition for the mat-table.
             * Captures the template of a column's footer cell and as well as cell-specific properties.
             */
            var MatFooterCellDef = /** @class */ (function (_super) {
                __extends(MatFooterCellDef, _super);
                function MatFooterCellDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatFooterCellDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterCellDef"]));
            MatFooterCellDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matFooterCellDef]',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]
                        },] },
            ];
            /**
             * Column definition for the mat-table.
             * Defines a set of cells available for a table column.
             */
            var MatColumnDef = /** @class */ (function (_super) {
                __extends(MatColumnDef, _super);
                function MatColumnDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatColumnDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"]));
            MatColumnDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matColumnDef]',
                            providers: [
                                { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"], useExisting: MatColumnDef },
                                { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                            ],
                        },] },
            ];
            MatColumnDef.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matColumnDef',] }],
                sticky: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * Header cell template container that adds the right classes and role.
             */
            var MatHeaderCell = /** @class */ (function (_super) {
                __extends(MatHeaderCell, _super);
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function MatHeaderCell(columnDef, elementRef) {
                    var _this = _super.call(this, columnDef, elementRef) || this;
                    elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
                    return _this;
                }
                return MatHeaderCell;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderCell"]));
            MatHeaderCell.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'mat-header-cell, th[mat-header-cell]',
                            host: {
                                'class': 'mat-header-cell',
                                'role': 'columnheader',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatHeaderCell.ctorParameters = function () { return [
                { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * Footer cell template container that adds the right classes and role.
             */
            var MatFooterCell = /** @class */ (function (_super) {
                __extends(MatFooterCell, _super);
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function MatFooterCell(columnDef, elementRef) {
                    var _this = _super.call(this, columnDef, elementRef) || this;
                    elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
                    return _this;
                }
                return MatFooterCell;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterCell"]));
            MatFooterCell.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'mat-footer-cell, td[mat-footer-cell]',
                            host: {
                                'class': 'mat-footer-cell',
                                'role': 'gridcell',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatFooterCell.ctorParameters = function () { return [
                { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * Cell template container that adds the right classes and role.
             */
            var MatCell = /** @class */ (function (_super) {
                __extends(MatCell, _super);
                /**
                 * @param {?} columnDef
                 * @param {?} elementRef
                 */
                function MatCell(columnDef, elementRef) {
                    var _this = _super.call(this, columnDef, elementRef) || this;
                    elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
                    return _this;
                }
                return MatCell;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkCell"]));
            MatCell.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'mat-cell, td[mat-cell]',
                            host: {
                                'class': 'mat-cell',
                                'role': 'gridcell',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatCell.ctorParameters = function () { return [
                { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Header row definition for the mat-table.
             * Captures the header row's template and other header properties such as the columns to display.
             */
            var MatHeaderRowDef = /** @class */ (function (_super) {
                __extends(MatHeaderRowDef, _super);
                function MatHeaderRowDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatHeaderRowDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRowDef"]));
            MatHeaderRowDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matHeaderRowDef]',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }],
                            inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky'],
                        },] },
            ];
            /**
             * Footer row definition for the mat-table.
             * Captures the footer row's template and other footer properties such as the columns to display.
             */
            var MatFooterRowDef = /** @class */ (function (_super) {
                __extends(MatFooterRowDef, _super);
                function MatFooterRowDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatFooterRowDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRowDef"]));
            MatFooterRowDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matFooterRowDef]',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRowDef"], useExisting: MatFooterRowDef }],
                            inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky'],
                        },] },
            ];
            /**
             * Data row definition for the mat-table.
             * Captures the data row's template and other properties such as the columns to display and
             * a when predicate that describes when this row should be used.
             * @template T
             */
            var MatRowDef = /** @class */ (function (_super) {
                __extends(MatRowDef, _super);
                function MatRowDef() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatRowDef;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRowDef"]));
            MatRowDef.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matRowDef]',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRowDef"], useExisting: MatRowDef }],
                            inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen'],
                        },] },
            ];
            /**
             * Footer template container that contains the cell outlet. Adds the right class and role.
             */
            var MatHeaderRow = /** @class */ (function (_super) {
                __extends(MatHeaderRow, _super);
                function MatHeaderRow() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatHeaderRow;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRow"]));
            MatHeaderRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'mat-header-row, tr[mat-header-row]',
                            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_ROW_TEMPLATE"],
                            host: {
                                'class': 'mat-header-row',
                                'role': 'row',
                            },
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            exportAs: 'matHeaderRow',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRow"], useExisting: MatHeaderRow }],
                        },] },
            ];
            /**
             * Footer template container that contains the cell outlet. Adds the right class and role.
             */
            var MatFooterRow = /** @class */ (function (_super) {
                __extends(MatFooterRow, _super);
                function MatFooterRow() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatFooterRow;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRow"]));
            MatFooterRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'mat-footer-row, tr[mat-footer-row]',
                            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_ROW_TEMPLATE"],
                            host: {
                                'class': 'mat-footer-row',
                                'role': 'row',
                            },
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            exportAs: 'matFooterRow',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRow"], useExisting: MatFooterRow }],
                        },] },
            ];
            /**
             * Data row template container that contains the cell outlet. Adds the right class and role.
             */
            var MatRow = /** @class */ (function (_super) {
                __extends(MatRow, _super);
                function MatRow() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatRow;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRow"]));
            MatRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'mat-row, tr[mat-row]',
                            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_ROW_TEMPLATE"],
                            host: {
                                'class': 'mat-row',
                                'role': 'row',
                            },
                            // See note on CdkTable for explanation on why this uses the default change detection strategy.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            exportAs: 'matRow',
                            providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRow"], useExisting: MatRow }],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Column that simply shows text content for the header and row cells. Assumes that the table
             * is using the native table implementation (`<table>`).
             *
             * By default, the name of this column will be the header text and data property accessor.
             * The header text can be overridden with the `headerText` input. Cell values can be overridden with
             * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
             * input.
             * @template T
             */
            var MatTextColumn = /** @class */ (function (_super) {
                __extends(MatTextColumn, _super);
                function MatTextColumn() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatTextColumn;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTextColumn"]));
            MatTextColumn.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'mat-text-column',
                            template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            // Change detection is intentionally not set to OnPush. This component's template will be provided
                            // to the table to be inserted into its view. This is problematic when change detection runs since
                            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                            // mean's the template in the table's view will not have the updated value (and in fact will cause
                            // an ExpressionChangedAfterItHasBeenCheckedError).
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var EXPORTED_DECLARATIONS = [
                // Table
                MatTable,
                // Template defs
                MatHeaderCellDef,
                MatHeaderRowDef,
                MatColumnDef,
                MatCellDef,
                MatRowDef,
                MatFooterCellDef,
                MatFooterRowDef,
                // Cell directives
                MatHeaderCell,
                MatCell,
                MatFooterCell,
                // Row directives
                MatHeaderRow,
                MatRow,
                MatFooterRow,
                MatTextColumn,
            ];
            var MatTableModule = /** @class */ (function () {
                function MatTableModule() {
                }
                return MatTableModule;
            }());
            MatTableModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [
                                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                            ],
                            exports: EXPORTED_DECLARATIONS,
                            declarations: EXPORTED_DECLARATIONS,
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
             * flaky browser support and the value not being defined in Closure's typings.
             * @type {?}
             */
            var MAX_SAFE_INTEGER = 9007199254740991;
            /**
             * Data source that accepts a client-side data array and includes native support of filtering,
             * sorting (using MatSort), and pagination (using MatPaginator).
             *
             * Allows for sort customization by overriding sortingDataAccessor, which defines how data
             * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
             * which defines how row data is converted to a string for filter matching.
             *
             * **Note:** This class is meant to be a simple data source to help you get started. As such
             * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
             * interactions. If your app needs to support more advanced use cases, consider implementing your
             * own `DataSource`.
             * @template T
             */
            var MatTableDataSource = /** @class */ (function (_super) {
                __extends(MatTableDataSource, _super);
                /**
                 * @param {?=} initialData
                 */
                function MatTableDataSource(initialData) {
                    if (initialData === void 0) { initialData = []; }
                    var _this = _super.call(this) || this;
                    /**
                     * Stream emitting render data to the table (depends on ordered data changes).
                     */
                    _this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
                    /**
                     * Stream that emits when a new filter string is set on the data source.
                     */
                    _this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
                    /**
                     * Used to react to internal changes of the paginator that are made by the data source itself.
                     */
                    _this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                    /**
                     * Subscription to the changes that should trigger an update to the table's rendered rows, such
                     * as filtering, sorting, pagination, or base data changes.
                     */
                    _this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
                    /**
                     * Data accessor function that is used for accessing data properties for sorting through
                     * the default sortData function.
                     * This default function assumes that the sort header IDs (which defaults to the column name)
                     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
                     * May be set to a custom function for different behavior.
                     * @param data Data object that is being accessed.
                     * @param sortHeaderId The name of the column that represents the data.
                     */
                    _this.sortingDataAccessor = ( /**
                     * @param {?} data
                     * @param {?} sortHeaderId
                     * @return {?}
                     */function (data, sortHeaderId) {
                        /** @type {?} */
                        var value = (( /** @type {?} */(data)))[sortHeaderId];
                        if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["_isNumberValue"])(value)) {
                            /** @type {?} */
                            var numberValue = Number(value);
                            // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                            // leave them as strings. For more info: https://goo.gl/y5vbSg
                            return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
                        }
                        return value;
                    });
                    /**
                     * Gets a sorted copy of the data array based on the state of the MatSort. Called
                     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
                     * By default, the function retrieves the active sort and its direction and compares data
                     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
                     * of data ordering.
                     * @param data The array of data that should be sorted.
                     * @param sort The connected MatSort that holds the current sort state.
                     */
                    _this.sortData = ( /**
                     * @param {?} data
                     * @param {?} sort
                     * @return {?}
                     */function (data, sort) {
                        /** @type {?} */
                        var active = sort.active;
                        /** @type {?} */
                        var direction = sort.direction;
                        if (!active || direction == '') {
                            return data;
                        }
                        return data.sort(( /**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */function (a, b) {
                            /** @type {?} */
                            var valueA = _this.sortingDataAccessor(a, active);
                            /** @type {?} */
                            var valueB = _this.sortingDataAccessor(b, active);
                            // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                            // one value exists while the other doesn't. In this case, existing value should come last.
                            // This avoids inconsistent results when comparing values to undefined/null.
                            // If neither value exists, return 0 (equal).
                            /** @type {?} */
                            var comparatorResult = 0;
                            if (valueA != null && valueB != null) {
                                // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                                if (valueA > valueB) {
                                    comparatorResult = 1;
                                }
                                else if (valueA < valueB) {
                                    comparatorResult = -1;
                                }
                            }
                            else if (valueA != null) {
                                comparatorResult = 1;
                            }
                            else if (valueB != null) {
                                comparatorResult = -1;
                            }
                            return comparatorResult * (direction == 'asc' ? 1 : -1);
                        }));
                    });
                    /**
                     * Checks if a data object matches the data source's filter string. By default, each data object
                     * is converted to a string of its properties and returns true if the filter has
                     * at least one occurrence in that string. By default, the filter string has its whitespace
                     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
                     * filter matching.
                     * @param data Data object used to check against the filter.
                     * @param filter Filter string that has been set on the data source.
                     * @return Whether the filter matches against the data
                     */
                    _this.filterPredicate = ( /**
                     * @param {?} data
                     * @param {?} filter
                     * @return {?}
                     */function (data, filter) {
                        // Transform the data into a lowercase string of all property values.
                        /** @type {?} */
                        var dataStr = Object.keys(data).reduce(( /**
                         * @param {?} currentTerm
                         * @param {?} key
                         * @return {?}
                         */function (currentTerm, key) {
                            // Use an obscure Unicode character to delimit the words in the concatenated string.
                            // This avoids matches where the values of two columns combined will match the user's query
                            // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                            // that has a very low chance of being typed in by somebody in a text field. This one in
                            // particular is "White up-pointing triangle with dot" from
                            // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                            return currentTerm + (( /** @type {?} */(data)))[key] + '◬';
                        }), '').toLowerCase();
                        // Transform the filter by converting it to lowercase and removing whitespace.
                        /** @type {?} */
                        var transformedFilter = filter.trim().toLowerCase();
                        return dataStr.indexOf(transformedFilter) != -1;
                    });
                    _this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
                    _this._updateChangeSubscription();
                    return _this;
                }
                Object.defineProperty(MatTableDataSource.prototype, "data", {
                    /**
                     * Array of data that should be rendered by the table, where each object represents one row.
                     * @return {?}
                     */
                    get: function () { return this._data.value; },
                    /**
                     * @param {?} data
                     * @return {?}
                     */
                    set: function (data) { this._data.next(data); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTableDataSource.prototype, "filter", {
                    /**
                     * Filter term that should be used to filter out objects from the data array. To override how
                     * data objects match to this filter string, provide a custom function for filterPredicate.
                     * @return {?}
                     */
                    get: function () { return this._filter.value; },
                    /**
                     * @param {?} filter
                     * @return {?}
                     */
                    set: function (filter) { this._filter.next(filter); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTableDataSource.prototype, "sort", {
                    /**
                     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
                     * emitted by the MatSort will trigger an update to the table's rendered data.
                     * @return {?}
                     */
                    get: function () { return this._sort; },
                    /**
                     * @param {?} sort
                     * @return {?}
                     */
                    set: function (sort) {
                        this._sort = sort;
                        this._updateChangeSubscription();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatTableDataSource.prototype, "paginator", {
                    /**
                     * Instance of the MatPaginator component used by the table to control what page of the data is
                     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
                     * table's rendered data.
                     *
                     * Note that the data source uses the paginator's properties to calculate which page of data
                     * should be displayed. If the paginator receives its properties as template inputs,
                     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
                     * initialized before assigning it to this data source.
                     * @return {?}
                     */
                    get: function () { return this._paginator; },
                    /**
                     * @param {?} paginator
                     * @return {?}
                     */
                    set: function (paginator) {
                        this._paginator = paginator;
                        this._updateChangeSubscription();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Subscribe to changes that should trigger an update to the table's rendered rows. When the
                 * changes occur, process the current state of the filter, sort, and pagination along with
                 * the provided base data and send it to the table for rendering.
                 * @return {?}
                 */
                MatTableDataSource.prototype._updateChangeSubscription = function () {
                    var _this = this;
                    // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
                    // The events should emit whenever the component emits a change or initializes, or if no
                    // component is provided, a stream with just a null event should be provided.
                    // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
                    // pipeline can progress to the next step. Note that the value from these streams are not used,
                    // they purely act as a signal to progress in the pipeline.
                    /** @type {?} */
                    var sortChange = this._sort ?
                        ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized))) :
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
                    /** @type {?} */
                    var pageChange = this._paginator ?
                        ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized))) :
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
                    /** @type {?} */
                    var dataStream = this._data;
                    // Watch for base data or filter changes to provide a filtered set of data.
                    /** @type {?} */
                    var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([dataStream, this._filter])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                        var data = _a[0];
                        return _this._filterData(data);
                    })));
                    // Watch for filtered data or sort changes to provide an ordered set of data.
                    /** @type {?} */
                    var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([filteredData, sortChange])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                        var data = _a[0];
                        return _this._orderData(data);
                    })));
                    // Watch for ordered data or page changes to provide a paged set of data.
                    /** @type {?} */
                    var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([orderedData, pageChange])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                        var data = _a[0];
                        return _this._pageData(data);
                    })));
                    // Watched for paged data changes and send the result to the table to render.
                    this._renderChangesSubscription.unsubscribe();
                    this._renderChangesSubscription = paginatedData.subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (/**
                     * @param {?} data
                     * @return {?}
                     */ data) { return _this._renderData.next(data); }));
                };
                /**
                 * Returns a filtered data array where each filter object contains the filter string within
                 * the result of the filterTermAccessor function. If no filter is set, returns the data array
                 * as provided.
                 * @param {?} data
                 * @return {?}
                 */
                MatTableDataSource.prototype._filterData = function (data) {
                    var _this = this;
                    // If there is a filter string, filter out data that does not contain it.
                    // Each data object is converted to a string using the function defined by filterTermAccessor.
                    // May be overridden for customization.
                    this.filteredData =
                        !this.filter ? data : data.filter(( /**
                         * @param {?} obj
                         * @return {?}
                         */function (/**
                         * @param {?} obj
                         * @return {?}
                         */ obj) { return _this.filterPredicate(obj, _this.filter); }));
                    if (this.paginator) {
                        this._updatePaginator(this.filteredData.length);
                    }
                    return this.filteredData;
                };
                /**
                 * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
                 * data array as provided. Uses the default data accessor for data lookup, unless a
                 * sortDataAccessor function is defined.
                 * @param {?} data
                 * @return {?}
                 */
                MatTableDataSource.prototype._orderData = function (data) {
                    // If there is no active sort or direction, return the data without trying to sort.
                    if (!this.sort) {
                        return data;
                    }
                    return this.sortData(data.slice(), this.sort);
                };
                /**
                 * Returns a paged slice of the provided data array according to the provided MatPaginator's page
                 * index and length. If there is no paginator provided, returns the data array as provided.
                 * @param {?} data
                 * @return {?}
                 */
                MatTableDataSource.prototype._pageData = function (data) {
                    if (!this.paginator) {
                        return data;
                    }
                    /** @type {?} */
                    var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
                    return data.slice(startIndex, startIndex + this.paginator.pageSize);
                };
                /**
                 * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
                 * index does not exceed the paginator's last page. Values are changed in a resolved promise to
                 * guard against making property changes within a round of change detection.
                 * @param {?} filteredDataLength
                 * @return {?}
                 */
                MatTableDataSource.prototype._updatePaginator = function (filteredDataLength) {
                    var _this = this;
                    Promise.resolve().then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var paginator = _this.paginator;
                        if (!paginator) {
                            return;
                        }
                        paginator.length = filteredDataLength;
                        // If the page index is set beyond the page, reduce it to the last page.
                        if (paginator.pageIndex > 0) {
                            /** @type {?} */
                            var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                            /** @type {?} */
                            var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                            if (newPageIndex !== paginator.pageIndex) {
                                paginator.pageIndex = newPageIndex;
                                // Since the paginator only emits after user-generated changes,
                                // we need our own stream so we know to should re-render the data.
                                _this._internalPageChanges.next();
                            }
                        }
                    }));
                };
                /**
                 * Used by the MatTable. Called when it connects to the data source.
                 * \@docs-private
                 * @return {?}
                 */
                MatTableDataSource.prototype.connect = function () { return this._renderData; };
                /**
                 * Used by the MatTable. Called when it is destroyed. No-op.
                 * \@docs-private
                 * @return {?}
                 */
                MatTableDataSource.prototype.disconnect = function () { };
                return MatTableDataSource;
            }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=table.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47-es2015.js.map
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47-es5.js.map
//# sourceMappingURL=default~contacts-table-contacts-table-module~pages-apps-clientes-aio-table-module~pages-apps-contrat~d964ba47-es5.js.map