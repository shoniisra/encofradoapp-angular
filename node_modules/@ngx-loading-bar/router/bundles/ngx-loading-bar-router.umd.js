(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ngx-loading-bar/core')) :
    typeof define === 'function' && define.amd ? define('@ngx-loading-bar/router', ['exports', '@angular/core', '@angular/router', '@ngx-loading-bar/core'], factory) :
    (factory((global['ngx-loading-bar'] = global['ngx-loading-bar'] || {}, global['ngx-loading-bar'].router = {}),global.ng.core,global.ng.router,global.core$1));
}(this, (function (exports,core,router,core$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingBarRouterModule = /** @class */ (function () {
        function LoadingBarRouterModule(router$$1, loadingBar) {
            var _this = this;
            router$$1.events.subscribe(function (event) {
                /** @type {?} */
                var state = _this.getCurrentNavigationState(router$$1);
                if (state && state.ignoreLoadingBar) {
                    return;
                }
                if (event instanceof router.NavigationStart) {
                    loadingBar.start();
                }
                if ((event instanceof router.NavigationError || event instanceof router.NavigationEnd || event instanceof router.NavigationCancel)) {
                    loadingBar.complete();
                }
            });
        }
        /**
         * @private
         * @param {?} router
         * @return {?}
         */
        LoadingBarRouterModule.prototype.getCurrentNavigationState = /**
         * @private
         * @param {?} router
         * @return {?}
         */
            function (router$$1) {
                // `getCurrentNavigation` only available in angular `7.2`
                /** @type {?} */
                var currentNavigation = router$$1.getCurrentNavigation && router$$1.getCurrentNavigation();
                if (currentNavigation && currentNavigation.extras) {
                    return currentNavigation.extras.state;
                }
                return {};
            };
        LoadingBarRouterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule,
                            core$1.LoadingBarModule,
                        ],
                        exports: [
                            router.RouterModule,
                            core$1.LoadingBarModule,
                        ],
                    },] }
        ];
        /** @nocollapse */
        LoadingBarRouterModule.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: core$1.LoadingBarService }
            ];
        };
        return LoadingBarRouterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LoadingBarRouterModule = LoadingBarRouterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-loading-bar-router.umd.js.map