/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule, Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel } from '@angular/router';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';
export class LoadingBarRouterModule {
    /**
     * @param {?} router
     * @param {?} loadingBar
     */
    constructor(router, loadingBar) {
        router.events.subscribe(event => {
            /** @type {?} */
            const state = this.getCurrentNavigationState(router);
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
    getCurrentNavigationState(router) {
        // `getCurrentNavigation` only available in angular `7.2`
        /** @type {?} */
        const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
        if (currentNavigation && currentNavigation.extras) {
            return currentNavigation.extras.state;
        }
        return {};
    }
}
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
LoadingBarRouterModule.ctorParameters = () => [
    { type: Router },
    { type: LoadingBarService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtbG9hZGluZy1iYXIvcm91dGVyLyIsInNvdXJjZXMiOlsicm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBWTVFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQVksTUFBYyxFQUFFLFVBQTZCO1FBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFOztrQkFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO2dCQUNuQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksQ0FBQyxLQUFLLFlBQVksZUFBZSxJQUFJLEtBQUssWUFBWSxhQUFhLElBQUksS0FBSyxZQUFZLGdCQUFnQixDQUFDLEVBQUU7Z0JBQzdHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8seUJBQXlCLENBQUMsTUFBVzs7O2NBRXJDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFDdEYsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDakQsT0FBTyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUFwQ0YsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjthQUNGOzs7O1lBWnNCLE1BQU07WUFDRixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uQ2FuY2VsIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvYWRpbmdCYXJNb2R1bGUsIExvYWRpbmdCYXJTZXJ2aWNlIH0gZnJvbSAnQG5neC1sb2FkaW5nLWJhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMb2FkaW5nQmFyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExvYWRpbmdCYXJNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXJSb3V0ZXJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgbG9hZGluZ0JhcjogTG9hZGluZ0JhclNlcnZpY2UpIHtcbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudE5hdmlnYXRpb25TdGF0ZShyb3V0ZXIpO1xuICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlnbm9yZUxvYWRpbmdCYXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgbG9hZGluZ0Jhci5zdGFydCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpKSB7XG4gICAgICAgIGxvYWRpbmdCYXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudE5hdmlnYXRpb25TdGF0ZShyb3V0ZXI6IGFueSkge1xuICAgIC8vIGBnZXRDdXJyZW50TmF2aWdhdGlvbmAgb25seSBhdmFpbGFibGUgaW4gYW5ndWxhciBgNy4yYFxuICAgIGNvbnN0IGN1cnJlbnROYXZpZ2F0aW9uID0gcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uICYmIHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuICAgIGlmIChjdXJyZW50TmF2aWdhdGlvbiAmJiBjdXJyZW50TmF2aWdhdGlvbi5leHRyYXMpIHtcbiAgICAgIHJldHVybiBjdXJyZW50TmF2aWdhdGlvbi5leHRyYXMuc3RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG4iXX0=