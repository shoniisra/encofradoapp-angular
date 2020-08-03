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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"], {
        /***/ "./node_modules/@angular/material/esm2015/dialog.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/dialog.js ***!
          \**********************************************************/
        /*! exports provided: MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () { return MatDialogModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () { return MAT_DIALOG_DATA; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () { return MAT_DIALOG_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () { return MAT_DIALOG_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function () { return MatDialog; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () { return throwMatDialogContentAlreadyAttachedError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () { return MatDialogContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () { return MatDialogClose; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () { return MatDialogTitle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () { return MatDialogContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () { return MatDialogActions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () { return MatDialogConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () { return MatDialogRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () { return matDialogAnimations; });
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
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
             * Configuration for opening a modal dialog with the MatDialog service.
             * @template D
             */
            var MatDialogConfig = /** @class */ (function () {
                function MatDialogConfig() {
                    /**
                     * The ARIA role of the dialog element.
                     */
                    this.role = 'dialog';
                    /**
                     * Custom class for the overlay pane.
                     */
                    this.panelClass = '';
                    /**
                     * Whether the dialog has a backdrop.
                     */
                    this.hasBackdrop = true;
                    /**
                     * Custom class for the backdrop.
                     */
                    this.backdropClass = '';
                    /**
                     * Whether the user can use escape or clicking on the backdrop to close the modal.
                     */
                    this.disableClose = false;
                    /**
                     * Width of the dialog.
                     */
                    this.width = '';
                    /**
                     * Height of the dialog.
                     */
                    this.height = '';
                    /**
                     * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
                     */
                    this.maxWidth = '80vw';
                    /**
                     * Data being injected into the child component.
                     */
                    this.data = null;
                    /**
                     * ID of the element that describes the dialog.
                     */
                    this.ariaDescribedBy = null;
                    /**
                     * ID of the element that labels the dialog.
                     */
                    this.ariaLabelledBy = null;
                    /**
                     * Aria label to assign to the dialog element.
                     */
                    this.ariaLabel = null;
                    /**
                     * Whether the dialog should focus the first focusable element on open.
                     */
                    this.autoFocus = true;
                    /**
                     * Whether the dialog should restore focus to the
                     * previously-focused element, after it's closed.
                     */
                    this.restoreFocus = true;
                    /**
                     * Whether the dialog should close when the user goes backwards/forwards in history.
                     * Note that this usually doesn't include clicking on links (unless the user is using
                     * the `HashLocationStrategy`).
                     */
                    this.closeOnNavigation = true;
                    // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
                }
                return MatDialogConfig;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var animationBody = [
                // Note: The `enter` animation transitions to `transform: none`, because for some reason
                // specifying the transform explicitly, causes IE both to blur the dialog content and
                // decimate the animation performance. Leaving it as `none` solves both issues.
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', opacity: 1 }))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))),
            ];
            /**
             * Animations used by MatDialog.
             * \@docs-private
             * @type {?}
             */
            var matDialogAnimations = {
                /**
                 * Animation that is applied on the dialog container by defalt.
                 */
                dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dialogContainer', animationBody),
                /**
                 * @deprecated \@breaking-change 8.0.0 Use `matDialogAnimations.dialogContainer` instead.
                 */
                slideDialog: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDialog', animationBody)
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Throws an exception for the case when a ComponentPortal is
             * attached to a DomPortalOutlet without an origin.
             * \@docs-private
             * @return {?}
             */
            function throwMatDialogContentAlreadyAttachedError() {
                throw Error('Attempting to attach dialog content after content is already attached');
            }
            /**
             * Internal component that wraps user-provided dialog content.
             * Animation is based on https://material.io/guidelines/motion/choreography.html.
             * \@docs-private
             */
            var MatDialogContainer = /** @class */ (function (_super) {
                __extends(MatDialogContainer, _super);
                /**
                 * @param {?} _elementRef
                 * @param {?} _focusTrapFactory
                 * @param {?} _changeDetectorRef
                 * @param {?} _document
                 * @param {?} _config
                 */
                function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
                    var _this = _super.call(this) || this;
                    _this._elementRef = _elementRef;
                    _this._focusTrapFactory = _focusTrapFactory;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._document = _document;
                    _this._config = _config;
                    /**
                     * Element that was focused before the dialog was opened. Save this to restore upon close.
                     */
                    _this._elementFocusedBeforeDialogWasOpened = null;
                    /**
                     * State of the dialog animation.
                     */
                    _this._state = 'enter';
                    /**
                     * Emits when an animation state changes.
                     */
                    _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    _this._ariaLabelledBy = _config.ariaLabelledBy || null;
                    return _this;
                }
                /**
                 * Attach a ComponentPortal as content to this dialog container.
                 * @template T
                 * @param {?} portal Portal to be attached as the dialog content.
                 * @return {?}
                 */
                MatDialogContainer.prototype.attachComponentPortal = function (portal) {
                    if (this._portalOutlet.hasAttached()) {
                        throwMatDialogContentAlreadyAttachedError();
                    }
                    this._savePreviouslyFocusedElement();
                    return this._portalOutlet.attachComponentPortal(portal);
                };
                /**
                 * Attach a TemplatePortal as content to this dialog container.
                 * @template C
                 * @param {?} portal Portal to be attached as the dialog content.
                 * @return {?}
                 */
                MatDialogContainer.prototype.attachTemplatePortal = function (portal) {
                    if (this._portalOutlet.hasAttached()) {
                        throwMatDialogContentAlreadyAttachedError();
                    }
                    this._savePreviouslyFocusedElement();
                    return this._portalOutlet.attachTemplatePortal(portal);
                };
                /**
                 * Moves the focus inside the focus trap.
                 * @private
                 * @return {?}
                 */
                MatDialogContainer.prototype._trapFocus = function () {
                    /** @type {?} */
                    var element = this._elementRef.nativeElement;
                    if (!this._focusTrap) {
                        this._focusTrap = this._focusTrapFactory.create(element);
                    }
                    // If we were to attempt to focus immediately, then the content of the dialog would not yet be
                    // ready in instances where change detection has to run first. To deal with this, we simply
                    // wait for the microtask queue to be empty.
                    if (this._config.autoFocus) {
                        this._focusTrap.focusInitialElementWhenReady();
                    }
                    else {
                        /** @type {?} */
                        var activeElement = this._document.activeElement;
                        // Otherwise ensure that focus is on the dialog container. It's possible that a different
                        // component tried to move focus while the open animation was running. See:
                        // https://github.com/angular/components/issues/16215. Note that we only want to do this
                        // if the focus isn't inside the dialog already, because it's possible that the consumer
                        // turned off `autoFocus` in order to move focus themselves.
                        if (activeElement !== element && !element.contains(activeElement)) {
                            element.focus();
                        }
                    }
                };
                /**
                 * Restores focus to the element that was focused before the dialog opened.
                 * @private
                 * @return {?}
                 */
                MatDialogContainer.prototype._restoreFocus = function () {
                    /** @type {?} */
                    var toFocus = this._elementFocusedBeforeDialogWasOpened;
                    // We need the extra check, because IE can set the `activeElement` to null in some cases.
                    if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
                        toFocus.focus();
                    }
                    if (this._focusTrap) {
                        this._focusTrap.destroy();
                    }
                };
                /**
                 * Saves a reference to the element that was focused before the dialog was opened.
                 * @private
                 * @return {?}
                 */
                MatDialogContainer.prototype._savePreviouslyFocusedElement = function () {
                    var _this = this;
                    if (this._document) {
                        this._elementFocusedBeforeDialogWasOpened = ( /** @type {?} */(this._document.activeElement));
                        // Note that there is no focus method when rendering on the server.
                        if (this._elementRef.nativeElement.focus) {
                            // Move focus onto the dialog immediately in order to prevent the user from accidentally
                            // opening multiple dialogs at the same time. Needs to be async, because the element
                            // may not be focusable immediately.
                            Promise.resolve().then(( /**
                             * @return {?}
                             */function () { return _this._elementRef.nativeElement.focus(); }));
                        }
                    }
                };
                /**
                 * Callback, invoked whenever an animation on the host completes.
                 * @param {?} event
                 * @return {?}
                 */
                MatDialogContainer.prototype._onAnimationDone = function (event) {
                    if (event.toState === 'enter') {
                        this._trapFocus();
                    }
                    else if (event.toState === 'exit') {
                        this._restoreFocus();
                    }
                    this._animationStateChanged.emit(event);
                };
                /**
                 * Callback, invoked when an animation on the host starts.
                 * @param {?} event
                 * @return {?}
                 */
                MatDialogContainer.prototype._onAnimationStart = function (event) {
                    this._animationStateChanged.emit(event);
                };
                /**
                 * Starts the dialog exit animation.
                 * @return {?}
                 */
                MatDialogContainer.prototype._startExitAnimation = function () {
                    this._state = 'exit';
                    // Mark the container for check so it can react if the
                    // view container is using OnPush change detection.
                    this._changeDetectorRef.markForCheck();
                };
                return MatDialogContainer;
            }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["BasePortalOutlet"]));
            MatDialogContainer.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: 'mat-dialog-container',
                            template: "<ng-template cdkPortalOutlet></ng-template>",
                            styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                            // tslint:disable-next-line:validate-decorators
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                            animations: [matDialogAnimations.dialogContainer],
                            host: {
                                'class': 'mat-dialog-container',
                                'tabindex': '-1',
                                'aria-modal': 'true',
                                '[attr.id]': '_id',
                                '[attr.role]': '_config.role',
                                '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                                '[attr.aria-label]': '_config.ariaLabel',
                                '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                                '[@dialogContainer]': '_state',
                                '(@dialogContainer.start)': '_onAnimationStart($event)',
                                '(@dialogContainer.done)': '_onAnimationDone($event)',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatDialogContainer.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: MatDialogConfig }
            ]; };
            MatDialogContainer.propDecorators = {
                _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], { static: true },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // TODO(jelbourn): resizing
            // Counter for unique dialog ids.
            /** @type {?} */
            var uniqueId = 0;
            /**
             * Reference to a dialog opened via the MatDialog service.
             * @template T, R
             */
            var MatDialogRef = /** @class */ (function () {
                /**
                 * @param {?} _overlayRef
                 * @param {?} _containerInstance
                 * @param {?=} _location
                 * @param {?=} id
                 */
                function MatDialogRef(_overlayRef, _containerInstance, 
                // @breaking-change 8.0.0 `_location` parameter to be removed.
                _location, id) {
                    var _this = this;
                    if (id === void 0) { id = "mat-dialog-" + uniqueId++; }
                    this._overlayRef = _overlayRef;
                    this._containerInstance = _containerInstance;
                    this.id = id;
                    /**
                     * Whether the user is allowed to close the dialog.
                     */
                    this.disableClose = this._containerInstance._config.disableClose;
                    /**
                     * Subject for notifying the user that the dialog has finished opening.
                     */
                    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    /**
                     * Subject for notifying the user that the dialog has finished closing.
                     */
                    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    /**
                     * Subject for notifying the user that the dialog has started closing.
                     */
                    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    /**
                     * Current state of the dialog.
                     */
                    this._state = 0 /* OPEN */;
                    // Pass the id along to the container.
                    _containerInstance._id = id;
                    // Emit when opening animation completes
                    _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return event.phaseName === 'done' && event.toState === 'enter'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this._afterOpened.next();
                        _this._afterOpened.complete();
                    }));
                    // Dispose overlay when closing animation is complete
                    _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return event.phaseName === 'done' && event.toState === 'exit'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(( /**
                     * @return {?}
                     */function () {
                        clearTimeout(_this._closeFallbackTimeout);
                        _this._overlayRef.dispose();
                    }));
                    _overlayRef.detachments().subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._beforeClosed.next(_this._result);
                        _this._beforeClosed.complete();
                        _this._afterClosed.next(_this._result);
                        _this._afterClosed.complete();
                        _this.componentInstance = ( /** @type {?} */(null));
                        _this._overlayRef.dispose();
                    }));
                    _overlayRef.keydownEvents()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] && !_this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event);
                    })))
                        .subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        event.preventDefault();
                        _this.close();
                    }));
                }
                /**
                 * Close the dialog.
                 * @param {?=} dialogResult Optional result to return to the dialog opener.
                 * @return {?}
                 */
                MatDialogRef.prototype.close = function (dialogResult) {
                    var _this = this;
                    this._result = dialogResult;
                    // Transition the backdrop in parallel to the dialog.
                    this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) { return event.phaseName === 'start'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                        .subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        _this._beforeClosed.next(dialogResult);
                        _this._beforeClosed.complete();
                        _this._state = 2 /* CLOSED */;
                        _this._overlayRef.detachBackdrop();
                        // The logic that disposes of the overlay depends on the exit animation completing, however
                        // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
                        // timeout which will clean everything up if the animation hasn't fired within the specified
                        // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
                        // vast majority of cases the timeout will have been cleared before it has the chance to fire.
                        _this._closeFallbackTimeout = setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this._overlayRef.dispose();
                        }), event.totalTime + 100);
                    }));
                    this._containerInstance._startExitAnimation();
                    this._state = 1 /* CLOSING */;
                };
                /**
                 * Gets an observable that is notified when the dialog is finished opening.
                 * @return {?}
                 */
                MatDialogRef.prototype.afterOpened = function () {
                    return this._afterOpened.asObservable();
                };
                /**
                 * Gets an observable that is notified when the dialog is finished closing.
                 * @return {?}
                 */
                MatDialogRef.prototype.afterClosed = function () {
                    return this._afterClosed.asObservable();
                };
                /**
                 * Gets an observable that is notified when the dialog has started closing.
                 * @return {?}
                 */
                MatDialogRef.prototype.beforeClosed = function () {
                    return this._beforeClosed.asObservable();
                };
                /**
                 * Gets an observable that emits when the overlay's backdrop has been clicked.
                 * @return {?}
                 */
                MatDialogRef.prototype.backdropClick = function () {
                    return this._overlayRef.backdropClick();
                };
                /**
                 * Gets an observable that emits when keydown events are targeted on the overlay.
                 * @return {?}
                 */
                MatDialogRef.prototype.keydownEvents = function () {
                    return this._overlayRef.keydownEvents();
                };
                /**
                 * Updates the dialog's position.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} position New dialog position.
                 * @return {THIS}
                 */
                MatDialogRef.prototype.updatePosition = function (position) {
                    /** @type {?} */
                    var strategy = ( /** @type {?} */(this))._getPositionStrategy();
                    if (position && (position.left || position.right)) {
                        position.left ? strategy.left(position.left) : strategy.right(position.right);
                    }
                    else {
                        strategy.centerHorizontally();
                    }
                    if (position && (position.top || position.bottom)) {
                        position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
                    }
                    else {
                        strategy.centerVertically();
                    }
                    ( /** @type {?} */(this))._overlayRef.updatePosition();
                    return ( /** @type {?} */(this));
                };
                /**
                 * Updates the dialog's width and height.
                 * @template THIS
                 * @this {THIS}
                 * @param {?=} width New width of the dialog.
                 * @param {?=} height New height of the dialog.
                 * @return {THIS}
                 */
                MatDialogRef.prototype.updateSize = function (width, height) {
                    if (width === void 0) { width = ''; }
                    if (height === void 0) { height = ''; }
                    ( /** @type {?} */(this))._getPositionStrategy().width(width).height(height);
                    ( /** @type {?} */(this))._overlayRef.updatePosition();
                    return ( /** @type {?} */(this));
                };
                /**
                 * Add a CSS class or an array of classes to the overlay pane.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} classes
                 * @return {THIS}
                 */
                MatDialogRef.prototype.addPanelClass = function (classes) {
                    ( /** @type {?} */(this))._overlayRef.addPanelClass(classes);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Remove a CSS class or an array of classes from the overlay pane.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} classes
                 * @return {THIS}
                 */
                MatDialogRef.prototype.removePanelClass = function (classes) {
                    ( /** @type {?} */(this))._overlayRef.removePanelClass(classes);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Gets an observable that is notified when the dialog is finished opening.
                 * @deprecated Use `afterOpened` instead.
                 * \@breaking-change 8.0.0
                 * @return {?}
                 */
                MatDialogRef.prototype.afterOpen = function () {
                    return this.afterOpened();
                };
                /**
                 * Gets an observable that is notified when the dialog has started closing.
                 * @deprecated Use `beforeClosed` instead.
                 * \@breaking-change 8.0.0
                 * @return {?}
                 */
                MatDialogRef.prototype.beforeClose = function () {
                    return this.beforeClosed();
                };
                /**
                 * Gets the current state of the dialog's lifecycle.
                 * @return {?}
                 */
                MatDialogRef.prototype.getState = function () {
                    return this._state;
                };
                /**
                 * Fetches the position strategy object from the overlay ref.
                 * @private
                 * @return {?}
                 */
                MatDialogRef.prototype._getPositionStrategy = function () {
                    return ( /** @type {?} */(this._overlayRef.getConfig().positionStrategy));
                };
                return MatDialogRef;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Injection token that can be used to access the data that was passed in to a dialog.
             * @type {?}
             */
            var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatDialogData');
            /**
             * Injection token that can be used to specify default dialog options.
             * @type {?}
             */
            var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-dialog-default-options');
            /**
             * Injection token that determines the scroll handling while the dialog is open.
             * @type {?}
             */
            var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-dialog-scroll-strategy');
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.block(); });
            }
            /**
             * \@docs-private
             * @param {?} overlay
             * @return {?}
             */
            function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
                return ( /**
                 * @return {?}
                 */function () { return overlay.scrollStrategies.block(); });
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
                provide: MAT_DIALOG_SCROLL_STRATEGY,
                deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]],
                useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
            };
            /**
             * Service to open Material Design modal dialogs.
             */
            var MatDialog = /** @class */ (function () {
                /**
                 * @param {?} _overlay
                 * @param {?} _injector
                 * @param {?} _location
                 * @param {?} _defaultOptions
                 * @param {?} scrollStrategy
                 * @param {?} _parentDialog
                 * @param {?} _overlayContainer
                 */
                function MatDialog(_overlay, _injector, _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
                    var _this = this;
                    this._overlay = _overlay;
                    this._injector = _injector;
                    this._location = _location;
                    this._defaultOptions = _defaultOptions;
                    this._parentDialog = _parentDialog;
                    this._overlayContainer = _overlayContainer;
                    this._openDialogsAtThisLevel = [];
                    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    this._ariaHiddenElements = new Map();
                    // TODO (jelbourn): tighten the typing right-hand side of this expression.
                    /**
                     * Stream that emits when all open dialog have finished closing.
                     * Will emit on subscribe if there are no open dialogs to begin with.
                     */
                    this.afterAllClosed = ( /** @type {?} */(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(( /**
                     * @return {?}
                     */function () { return _this.openDialogs.length ?
                        _this._afterAllClosed :
                        _this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined)); }))));
                    this._scrollStrategy = scrollStrategy;
                }
                Object.defineProperty(MatDialog.prototype, "openDialogs", {
                    /**
                     * Keeps track of the currently-open dialogs.
                     * @return {?}
                     */
                    get: function () {
                        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDialog.prototype, "afterOpened", {
                    /**
                     * Stream that emits when a dialog has been opened.
                     * @return {?}
                     */
                    get: function () {
                        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDialog.prototype, "afterOpen", {
                    /**
                     * Stream that emits when a dialog has been opened.
                     * @deprecated Use `afterOpened` instead.
                     * \@breaking-change 8.0.0
                     * @return {?}
                     */
                    get: function () {
                        return this.afterOpened;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatDialog.prototype, "_afterAllClosed", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var parent = this._parentDialog;
                        return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Opens a modal dialog containing the given component.
                 * @template T, D, R
                 * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
                 *     or a TemplateRef to instantiate as the dialog content.
                 * @param {?=} config Extra configuration options.
                 * @return {?} Reference to the newly-opened dialog.
                 */
                MatDialog.prototype.open = function (componentOrTemplateRef, config) {
                    var _this = this;
                    config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
                    if (config.id && this.getDialogById(config.id)) {
                        throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
                    }
                    /** @type {?} */
                    var overlayRef = this._createOverlay(config);
                    /** @type {?} */
                    var dialogContainer = this._attachDialogContainer(overlayRef, config);
                    /** @type {?} */
                    var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
                    // If this is the first dialog that we're opening, hide all the non-overlay content.
                    if (!this.openDialogs.length) {
                        this._hideNonDialogContentFromAssistiveTechnology();
                    }
                    this.openDialogs.push(dialogRef);
                    dialogRef.afterClosed().subscribe(( /**
                     * @return {?}
                     */function () { return _this._removeOpenDialog(dialogRef); }));
                    this.afterOpened.next(dialogRef);
                    return dialogRef;
                };
                /**
                 * Closes all of the currently-open dialogs.
                 * @return {?}
                 */
                MatDialog.prototype.closeAll = function () {
                    this._closeDialogs(this.openDialogs);
                };
                /**
                 * Finds an open dialog by its id.
                 * @param {?} id ID to use when looking up the dialog.
                 * @return {?}
                 */
                MatDialog.prototype.getDialogById = function (id) {
                    return this.openDialogs.find(( /**
                     * @param {?} dialog
                     * @return {?}
                     */function (/**
                     * @param {?} dialog
                     * @return {?}
                     */ dialog) { return dialog.id === id; }));
                };
                /**
                 * @return {?}
                 */
                MatDialog.prototype.ngOnDestroy = function () {
                    // Only close the dialogs at this level on destroy
                    // since the parent service may still be active.
                    this._closeDialogs(this._openDialogsAtThisLevel);
                    this._afterAllClosedAtThisLevel.complete();
                    this._afterOpenedAtThisLevel.complete();
                };
                /**
                 * Creates the overlay into which the dialog will be loaded.
                 * @private
                 * @param {?} config The dialog configuration.
                 * @return {?} A promise resolving to the OverlayRef for the created overlay.
                 */
                MatDialog.prototype._createOverlay = function (config) {
                    /** @type {?} */
                    var overlayConfig = this._getOverlayConfig(config);
                    return this._overlay.create(overlayConfig);
                };
                /**
                 * Creates an overlay config from a dialog config.
                 * @private
                 * @param {?} dialogConfig The dialog configuration.
                 * @return {?} The overlay configuration.
                 */
                MatDialog.prototype._getOverlayConfig = function (dialogConfig) {
                    /** @type {?} */
                    var state$$1 = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayConfig"]({
                        positionStrategy: this._overlay.position().global(),
                        scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
                        panelClass: dialogConfig.panelClass,
                        hasBackdrop: dialogConfig.hasBackdrop,
                        direction: dialogConfig.direction,
                        minWidth: dialogConfig.minWidth,
                        minHeight: dialogConfig.minHeight,
                        maxWidth: dialogConfig.maxWidth,
                        maxHeight: dialogConfig.maxHeight,
                        disposeOnNavigation: dialogConfig.closeOnNavigation
                    });
                    if (dialogConfig.backdropClass) {
                        state$$1.backdropClass = dialogConfig.backdropClass;
                    }
                    return state$$1;
                };
                /**
                 * Attaches an MatDialogContainer to a dialog's already-created overlay.
                 * @private
                 * @param {?} overlay Reference to the dialog's underlying overlay.
                 * @param {?} config The dialog configuration.
                 * @return {?} A promise resolving to a ComponentRef for the attached container.
                 */
                MatDialog.prototype._attachDialogContainer = function (overlay, config) {
                    /** @type {?} */
                    var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
                    /** @type {?} */
                    var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([
                        [MatDialogConfig, config]
                    ]));
                    /** @type {?} */
                    var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
                    /** @type {?} */
                    var containerRef = overlay.attach(containerPortal);
                    return containerRef.instance;
                };
                /**
                 * Attaches the user-provided component to the already-created MatDialogContainer.
                 * @private
                 * @template T, R
                 * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
                 *     or a TemplateRef to instantiate as the content.
                 * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
                 * @param {?} overlayRef Reference to the overlay in which the dialog resides.
                 * @param {?} config The dialog configuration.
                 * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
                 */
                MatDialog.prototype._attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
                    // Create a reference to the dialog we're creating in order to give the user a handle
                    // to modify and close it.
                    /** @type {?} */
                    var dialogRef = new MatDialogRef(overlayRef, dialogContainer, this._location, config.id);
                    // When the dialog backdrop is clicked, we want to close it.
                    if (config.hasBackdrop) {
                        overlayRef.backdropClick().subscribe(( /**
                         * @return {?}
                         */function () {
                            if (!dialogRef.disableClose) {
                                dialogRef.close();
                            }
                        }));
                    }
                    if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
                        dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](componentOrTemplateRef, ( /** @type {?} */(null)), ( /** @type {?} */({ $implicit: config.data, dialogRef: dialogRef }))));
                    }
                    else {
                        /** @type {?} */
                        var injector = this._createInjector(config, dialogRef, dialogContainer);
                        /** @type {?} */
                        var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
                        dialogRef.componentInstance = contentRef.instance;
                    }
                    dialogRef
                        .updateSize(config.width, config.height)
                        .updatePosition(config.position);
                    return dialogRef;
                };
                /**
                 * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
                 * of a dialog to close itself and, optionally, to return a value.
                 * @private
                 * @template T
                 * @param {?} config Config object that is used to construct the dialog.
                 * @param {?} dialogRef Reference to the dialog.
                 * @param {?} dialogContainer
                 * @return {?} The custom injector that can be used inside the dialog.
                 */
                MatDialog.prototype._createInjector = function (config, dialogRef, dialogContainer) {
                    /** @type {?} */
                    var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
                    // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
                    // content are created out of the same ViewContainerRef and as such, are siblings for injector
                    // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
                    // added to the injection tokens.
                    /** @type {?} */
                    var injectionTokens = new WeakMap([
                        [MatDialogContainer, dialogContainer],
                        [MAT_DIALOG_DATA, config.data],
                        [MatDialogRef, dialogRef]
                    ]);
                    if (config.direction &&
                        (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
                        injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], {
                            value: config.direction,
                            change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
                        });
                    }
                    return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, injectionTokens);
                };
                /**
                 * Removes a dialog from the array of open dialogs.
                 * @private
                 * @param {?} dialogRef Dialog to be removed.
                 * @return {?}
                 */
                MatDialog.prototype._removeOpenDialog = function (dialogRef) {
                    /** @type {?} */
                    var index = this.openDialogs.indexOf(dialogRef);
                    if (index > -1) {
                        this.openDialogs.splice(index, 1);
                        // If all the dialogs were closed, remove/restore the `aria-hidden`
                        // to a the siblings and emit to the `afterAllClosed` stream.
                        if (!this.openDialogs.length) {
                            this._ariaHiddenElements.forEach(( /**
                             * @param {?} previousValue
                             * @param {?} element
                             * @return {?}
                             */function (previousValue, element) {
                                if (previousValue) {
                                    element.setAttribute('aria-hidden', previousValue);
                                }
                                else {
                                    element.removeAttribute('aria-hidden');
                                }
                            }));
                            this._ariaHiddenElements.clear();
                            this._afterAllClosed.next();
                        }
                    }
                };
                /**
                 * Hides all of the content that isn't an overlay from assistive technology.
                 * @private
                 * @return {?}
                 */
                MatDialog.prototype._hideNonDialogContentFromAssistiveTechnology = function () {
                    /** @type {?} */
                    var overlayContainer = this._overlayContainer.getContainerElement();
                    // Ensure that the overlay container is attached to the DOM.
                    if (overlayContainer.parentElement) {
                        /** @type {?} */
                        var siblings = overlayContainer.parentElement.children;
                        for (var i = siblings.length - 1; i > -1; i--) {
                            /** @type {?} */
                            var sibling = siblings[i];
                            if (sibling !== overlayContainer &&
                                sibling.nodeName !== 'SCRIPT' &&
                                sibling.nodeName !== 'STYLE' &&
                                !sibling.hasAttribute('aria-live')) {
                                this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                                sibling.setAttribute('aria-hidden', 'true');
                            }
                        }
                    }
                };
                /**
                 * Closes all of the dialogs in an array.
                 * @private
                 * @param {?} dialogs
                 * @return {?}
                 */
                MatDialog.prototype._closeDialogs = function (dialogs) {
                    /** @type {?} */
                    var i = dialogs.length;
                    while (i--) {
                        // The `_openDialogs` property isn't updated after close until the rxjs subscription
                        // runs on the next microtask, in addition to modifying the array as we're going
                        // through it. We loop through all of them and call close without assuming that
                        // they'll be removed from the list instantaneously.
                        dialogs[i].close();
                    }
                };
                return MatDialog;
            }());
            MatDialog.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
            ];
            /** @nocollapse */
            MatDialog.ctorParameters = function () { return [
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: MatDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
                { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"] }
            ]; };
            /**
             * Applies default options to the dialog config.
             * @param {?=} config Config to be modified.
             * @param {?=} defaultOptions Default options provided.
             * @return {?} The new configuration object.
             */
            function _applyConfigDefaults(config, defaultOptions) {
                return Object.assign({}, defaultOptions, config);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Counter used to generate unique IDs for dialog elements.
             * @type {?}
             */
            var dialogElementUid = 0;
            /**
             * Button that will close the current dialog.
             */
            var MatDialogClose = /** @class */ (function () {
                /**
                 * @param {?} dialogRef
                 * @param {?} _elementRef
                 * @param {?} _dialog
                 */
                function MatDialogClose(dialogRef, _elementRef, _dialog) {
                    this.dialogRef = dialogRef;
                    this._elementRef = _elementRef;
                    this._dialog = _dialog;
                    /**
                     * Default to "button" to prevents accidental form submits.
                     */
                    this.type = 'button';
                }
                /**
                 * @return {?}
                 */
                MatDialogClose.prototype.ngOnInit = function () {
                    if (!this.dialogRef) {
                        // When this directive is included in a dialog via TemplateRef (rather than being
                        // in a Component), the DialogRef isn't available via injection because embedded
                        // views cannot be given a custom injector. Instead, we look up the DialogRef by
                        // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
                        // be resolved at constructor time.
                        this.dialogRef = ( /** @type {?} */(getClosestDialog(this._elementRef, this._dialog.openDialogs)));
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatDialogClose.prototype.ngOnChanges = function (changes) {
                    /** @type {?} */
                    var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
                    if (proxiedChange) {
                        this.dialogResult = proxiedChange.currentValue;
                    }
                };
                return MatDialogClose;
            }());
            MatDialogClose.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[mat-dialog-close], [matDialogClose]',
                            exportAs: 'matDialogClose',
                            host: {
                                '(click)': 'dialogRef.close(dialogResult)',
                                '[attr.aria-label]': 'ariaLabel || null',
                                '[attr.type]': 'type',
                            }
                        },] },
            ];
            /** @nocollapse */
            MatDialogClose.ctorParameters = function () { return [
                { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: MatDialog }
            ]; };
            MatDialogClose.propDecorators = {
                ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label',] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                dialogResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-dialog-close',] }],
                _matDialogClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matDialogClose',] }]
            };
            /**
             * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
             */
            var MatDialogTitle = /** @class */ (function () {
                /**
                 * @param {?} _dialogRef
                 * @param {?} _elementRef
                 * @param {?} _dialog
                 */
                function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
                    this._dialogRef = _dialogRef;
                    this._elementRef = _elementRef;
                    this._dialog = _dialog;
                    this.id = "mat-dialog-title-" + dialogElementUid++;
                }
                /**
                 * @return {?}
                 */
                MatDialogTitle.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._dialogRef) {
                        this._dialogRef = ( /** @type {?} */(getClosestDialog(this._elementRef, this._dialog.openDialogs)));
                    }
                    if (this._dialogRef) {
                        Promise.resolve().then(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var container = _this._dialogRef._containerInstance;
                            if (container && !container._ariaLabelledBy) {
                                container._ariaLabelledBy = _this.id;
                            }
                        }));
                    }
                };
                return MatDialogTitle;
            }());
            MatDialogTitle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[mat-dialog-title], [matDialogTitle]',
                            exportAs: 'matDialogTitle',
                            host: {
                                'class': 'mat-dialog-title',
                                '[id]': 'id',
                            },
                        },] },
            ];
            /** @nocollapse */
            MatDialogTitle.ctorParameters = function () { return [
                { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: MatDialog }
            ]; };
            MatDialogTitle.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * Scrollable content container of a dialog.
             */
            var MatDialogContent = /** @class */ (function () {
                function MatDialogContent() {
                }
                return MatDialogContent;
            }());
            MatDialogContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
                            host: { 'class': 'mat-dialog-content' }
                        },] },
            ];
            /**
             * Container for the bottom action buttons in a dialog.
             * Stays fixed to the bottom when scrolling.
             */
            var MatDialogActions = /** @class */ (function () {
                function MatDialogActions() {
                }
                return MatDialogActions;
            }());
            MatDialogActions.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
                            host: { 'class': 'mat-dialog-actions' }
                        },] },
            ];
            /**
             * Finds the closest MatDialogRef to an element by looking at the DOM.
             * @param {?} element Element relative to which to look for a dialog.
             * @param {?} openDialogs References to the currently-open dialogs.
             * @return {?}
             */
            function getClosestDialog(element, openDialogs) {
                /** @type {?} */
                var parent = element.nativeElement.parentElement;
                while (parent && !parent.classList.contains('mat-dialog-container')) {
                    parent = parent.parentElement;
                }
                return parent ? openDialogs.find(( /**
                 * @param {?} dialog
                 * @return {?}
                 */function (/**
                 * @param {?} dialog
                 * @return {?}
                 */ dialog) { return dialog.id === ( /** @type {?} */(parent)).id; })) : null;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatDialogModule = /** @class */ (function () {
                function MatDialogModule() {
                }
                return MatDialogModule;
            }());
            MatDialogModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"],
                                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"],
                            ],
                            exports: [
                                MatDialogContainer,
                                MatDialogClose,
                                MatDialogTitle,
                                MatDialogContent,
                                MatDialogActions,
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"],
                            ],
                            declarations: [
                                MatDialogContainer,
                                MatDialogClose,
                                MatDialogTitle,
                                MatDialogActions,
                                MatDialogContent,
                            ],
                            providers: [
                                MatDialog,
                                MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                            ],
                            entryComponents: [MatDialogContainer],
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
            //# sourceMappingURL=dialog.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f-es2015.js.map
//# sourceMappingURL=default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f-es5.js.map
//# sourceMappingURL=default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f-es5.js.map