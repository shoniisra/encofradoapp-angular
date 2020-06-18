/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule, Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel } from '@angular/router';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';
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
export { LoadingBarRouterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtbG9hZGluZy1iYXIvcm91dGVyLyIsInNvdXJjZXMiOlsicm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVFO0lBV0UsZ0NBQVksTUFBYyxFQUFFLFVBQTZCO1FBQXpELGlCQWVDO1FBZEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLOztnQkFDckIsS0FBSyxHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksQ0FBQyxLQUFLLFlBQVksZUFBZSxJQUFJLEtBQUssWUFBWSxhQUFhLElBQUksS0FBSyxZQUFZLGdCQUFnQixDQUFDLEVBQUU7Z0JBQzdHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sMERBQXlCOzs7OztJQUFqQyxVQUFrQyxNQUFXOzs7WUFFckMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUN0RixJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2dCQXBDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO2lCQUNGOzs7O2dCQVpzQixNQUFNO2dCQUNGLGlCQUFpQjs7SUF1QzVDLDZCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0EzQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkNhbmNlbCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nQmFyTW9kdWxlLCBMb2FkaW5nQmFyU2VydmljZSB9IGZyb20gJ0BuZ3gtbG9hZGluZy1iYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTG9hZGluZ0Jhck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMb2FkaW5nQmFyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyUm91dGVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIGxvYWRpbmdCYXI6IExvYWRpbmdCYXJTZXJ2aWNlKSB7XG4gICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldEN1cnJlbnROYXZpZ2F0aW9uU3RhdGUocm91dGVyKTtcbiAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pZ25vcmVMb2FkaW5nQmFyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIGxvYWRpbmdCYXIuc3RhcnQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSkge1xuICAgICAgICBsb2FkaW5nQmFyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnROYXZpZ2F0aW9uU3RhdGUocm91dGVyOiBhbnkpIHtcbiAgICAvLyBgZ2V0Q3VycmVudE5hdmlnYXRpb25gIG9ubHkgYXZhaWxhYmxlIGluIGFuZ3VsYXIgYDcuMmBcbiAgICBjb25zdCBjdXJyZW50TmF2aWdhdGlvbiA9IHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbiAmJiByb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKTtcbiAgICBpZiAoY3VycmVudE5hdmlnYXRpb24gJiYgY3VycmVudE5hdmlnYXRpb24uZXh0cmFzKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5hdmlnYXRpb24uZXh0cmFzLnN0YXRlO1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuIl19