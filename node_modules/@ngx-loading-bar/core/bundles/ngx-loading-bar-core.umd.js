(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ngx-loading-bar/core', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global['ngx-loading-bar'] = global['ngx-loading-bar'] || {}, global['ngx-loading-bar'].core = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common));
}(this, (function (exports,i0,rxjs,operators,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingBarService = /** @class */ (function () {
        function LoadingBarService(platformId) {
            this.platformId = platformId;
            this.progress$ = ( /** @type {?} */((new rxjs.Subject()).pipe(operators.debounceTime(0))));
            this._pendingRequests = 0;
            this._value = 0;
        }
        /**
         * @param {?=} initialValue
         * @return {?}
         */
        LoadingBarService.prototype.start = /**
         * @param {?=} initialValue
         * @return {?}
         */
            function (initialValue) {
                if (initialValue === void 0) {
                    initialValue = 2;
                }
                ++this._pendingRequests;
                if (this._value === 0 || this._pendingRequests === 1) {
                    // Inserts the loading bar element into the dom, and sets it to 2%
                    this.set(this._pendingRequests === 1 && this._value > 0 ? this._value : initialValue);
                }
            };
        /**
         * @return {?}
         */
        LoadingBarService.prototype.stop = /**
         * @return {?}
         */
            function () {
                this.complete();
                while (this._pendingRequests > 0) {
                    this.complete();
                }
            };
        /**
         * @return {?}
         */
        LoadingBarService.prototype.complete = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._pendingRequests === 0 && this._value === 0) {
                    return;
                }
                if (this._pendingRequests > 0) {
                    --this._pendingRequests;
                }
                if (this._pendingRequests === 0 || (this._pendingRequests === 0 && this._value > 0)) {
                    if (this._value !== 100) {
                        this.set(100);
                    }
                    // Attempt to aggregate any start/complete calls within 500ms:
                    setTimeout(function () { return _this.set(0); }, 500);
                }
            };
        /**
         * Set the loading bar's width to a certain percent.
         *
         * @param n any value between 0 and 100
         */
        /**
         * Set the loading bar's width to a certain percent.
         *
         * @param {?} n any value between 0 and 100
         * @return {?}
         */
        LoadingBarService.prototype.set = /**
         * Set the loading bar's width to a certain percent.
         *
         * @param {?} n any value between 0 and 100
         * @return {?}
         */
            function (n) {
                var _this = this;
                if (!common.isPlatformBrowser(this.platformId)) {
                    this._pendingRequests = 0;
                    return;
                }
                if (n === 0 && this._pendingRequests > 0) {
                    n = 2;
                }
                this._value = n;
                this.progress$.next(n);
                if (this._pendingRequests === 0) {
                    return;
                }
                // increment loadingbar to give the illusion that there is always
                // progress but make sure to cancel the previous timeouts so we don't
                // have multiple incs running at the same time.
                clearTimeout(this._incTimeout);
                if (this._value > 0 && this._value < 100) {
                    this._incTimeout = setTimeout(function () { return _this.increment(); }, 250);
                }
            };
        /**
         * Increments the loading bar by a random amount
         * but slows down as it progresses
         */
        /**
         * Increments the loading bar by a random amount
         * but slows down as it progresses
         * @param {?=} rnd
         * @return {?}
         */
        LoadingBarService.prototype.increment = /**
         * Increments the loading bar by a random amount
         * but slows down as it progresses
         * @param {?=} rnd
         * @return {?}
         */
            function (rnd) {
                if (rnd === void 0) {
                    rnd = 0;
                }
                if (rnd > 0) {
                    this.set(this._value + rnd);
                }
                /** @type {?} */
                var stat = this._value;
                if (stat >= 0 && stat < 25) {
                    // Start out between 3 - 6% increments
                    rnd = (Math.random() * (5 - 3 + 1) + 3);
                }
                else if (stat >= 25 && stat < 65) {
                    // increment between 0 - 3%
                    rnd = (Math.random() * 3);
                }
                else if (stat >= 65 && stat < 90) {
                    // increment between 0 - 2%
                    rnd = (Math.random() * 2);
                }
                else if (stat >= 90 && stat < 99) {
                    // finally, increment it .5 %
                    rnd = 0.5;
                }
                else {
                    // after 99%, don't increment:
                    rnd = 0;
                }
                this.set(this._value + rnd);
            };
        /**
         * @return {?}
         */
        LoadingBarService.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.progress$.complete();
            };
        LoadingBarService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        LoadingBarService.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        /** @nocollapse */ LoadingBarService.ngInjectableDef = i0.defineInjectable({ factory: function LoadingBarService_Factory() { return new LoadingBarService(i0.inject(i0.PLATFORM_ID)); }, token: LoadingBarService, providedIn: "root" });
        return LoadingBarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingBarComponent = /** @class */ (function () {
        function LoadingBarComponent(loader) {
            this.loader = loader;
            this.includeSpinner = true;
            this.includeBar = true;
            this.fixed = true;
            this.value = null;
        }
        LoadingBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-loading-bar',
                        template: "\n    <ng-container *ngIf=\"(value !== null ? value : loader.progress$|async) as progress\">\n      <div id=\"loading-bar-spinner\" *ngIf=\"includeSpinner\" [style.color]=\"color\">\n        <div [style.width]=\"diameter\" [style.height]=\"diameter\" class=\"spinner-icon\"></div>\n      </div>\n      <div id=\"loading-bar\" *ngIf=\"includeBar\" [style.color]=\"color\">\n        <div class=\"bar\" [style.background]=\"color\" [style.height]=\"height\" [style.width]=\"progress + '%'\">\n          <div class=\"peg\" [style.height]=\"height\"></div>\n        </div>\n      </div>\n    </ng-container>\n  ",
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        host: {
                            '[class.loading-bar-fixed]': 'fixed',
                        },
                        styles: [":host{position:relative;display:block}:host.loading-bar-fixed>div .bar{position:fixed}:host.loading-bar-fixed>div#loading-bar-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host.loading-bar-fixed>div#loading-bar-spinner{right:10px;left:unset}:host.loading-bar-fixed>div .peg{display:block}:host>div{pointer-events:none;transition:350ms linear;color:#29d}:host>div .bar{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host>div .bar{right:0;left:unset}:host>div .peg{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}:host>div#loading-bar-spinner{display:block;position:absolute;z-index:10002;top:5px;left:0}:host>div#loading-bar-spinner .spinner-icon{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                    }] }
        ];
        /** @nocollapse */
        LoadingBarComponent.ctorParameters = function () {
            return [
                { type: LoadingBarService }
            ];
        };
        LoadingBarComponent.propDecorators = {
            includeSpinner: [{ type: i0.Input }],
            includeBar: [{ type: i0.Input }],
            fixed: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            diameter: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return LoadingBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingBarModule = /** @class */ (function () {
        function LoadingBarModule() {
        }
        LoadingBarModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [LoadingBarComponent],
                        exports: [LoadingBarComponent],
                    },] }
        ];
        return LoadingBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LoadingBarModule = LoadingBarModule;
    exports.LoadingBarComponent = LoadingBarComponent;
    exports.LoadingBarService = LoadingBarService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-loading-bar-core.umd.js.map