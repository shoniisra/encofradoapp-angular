import { NgModule } from '@angular/core';
import { RouterModule, Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel } from '@angular/router';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingBarRouterModule = /** @class */ (function () {
    function LoadingBarRouterModule(router, loadingBar) {
        var _this = this;
        router.events.subscribe(function (event) {
            /** @type {?} */
            var state = _this.getCurrentNavigationState(router);
            if (state && state.ignoreLoadingBar) {
                return;
            }
            if (event instanceof NavigationStart) {
                loadingBar.start();
            }
            if ((event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel)) {
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
    function (router) {
        // `getCurrentNavigation` only available in angular `7.2`
        /** @type {?} */
        var currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
        if (currentNavigation && currentNavigation.extras) {
            return currentNavigation.extras.state;
        }
        return {};
    };
    LoadingBarRouterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule,
                        LoadingBarModule,
                    ],
                    exports: [
                        RouterModule,
                        LoadingBarModule,
                    ],
                },] }
    ];
    /** @nocollapse */
    LoadingBarRouterModule.ctorParameters = function () { return [
        { type: Router },
        { type: LoadingBarService }
    ]; };
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

export { LoadingBarRouterModule };

//# sourceMappingURL=ngx-loading-bar-router.js.map