/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LoadingBarService } from './loading-bar.service';
var LoadingBarComponent = /** @class */ (function () {
    function LoadingBarComponent(loader) {
        this.loader = loader;
        this.includeSpinner = true;
        this.includeBar = true;
        this.fixed = true;
        this.value = null;
    }
    LoadingBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-loading-bar',
                    template: "\n    <ng-container *ngIf=\"(value !== null ? value : loader.progress$|async) as progress\">\n      <div id=\"loading-bar-spinner\" *ngIf=\"includeSpinner\" [style.color]=\"color\">\n        <div [style.width]=\"diameter\" [style.height]=\"diameter\" class=\"spinner-icon\"></div>\n      </div>\n      <div id=\"loading-bar\" *ngIf=\"includeBar\" [style.color]=\"color\">\n        <div class=\"bar\" [style.background]=\"color\" [style.height]=\"height\" [style.width]=\"progress + '%'\">\n          <div class=\"peg\" [style.height]=\"height\"></div>\n        </div>\n      </div>\n    </ng-container>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.Emulated,
                    host: {
                        '[class.loading-bar-fixed]': 'fixed',
                    },
                    styles: [":host{position:relative;display:block}:host.loading-bar-fixed>div .bar{position:fixed}:host.loading-bar-fixed>div#loading-bar-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host.loading-bar-fixed>div#loading-bar-spinner{right:10px;left:unset}:host.loading-bar-fixed>div .peg{display:block}:host>div{pointer-events:none;transition:350ms linear;color:#29d}:host>div .bar{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host>div .bar{right:0;left:unset}:host>div .peg{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}:host>div#loading-bar-spinner{display:block;position:absolute;z-index:10002;top:5px;left:0}:host>div#loading-bar-spinner .spinner-icon{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    LoadingBarComponent.ctorParameters = function () { return [
        { type: LoadingBarService }
    ]; };
    LoadingBarComponent.propDecorators = {
        includeSpinner: [{ type: Input }],
        includeBar: [{ type: Input }],
        fixed: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        diameter: [{ type: Input }],
        value: [{ type: Input }]
    };
    return LoadingBarComponent;
}());
export { LoadingBarComponent };
if (false) {
    /** @type {?} */
    LoadingBarComponent.prototype.includeSpinner;
    /** @type {?} */
    LoadingBarComponent.prototype.includeBar;
    /** @type {?} */
    LoadingBarComponent.prototype.fixed;
    /** @type {?} */
    LoadingBarComponent.prototype.color;
    /** @type {?} */
    LoadingBarComponent.prototype.height;
    /** @type {?} */
    LoadingBarComponent.prototype.diameter;
    /** @type {?} */
    LoadingBarComponent.prototype.value;
    /** @type {?} */
    LoadingBarComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1sb2FkaW5nLWJhci9jb3JlLyIsInNvdXJjZXMiOlsibG9hZGluZy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUE4QkUsNkJBQW1CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBUm5DLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUliLFVBQUssR0FBRyxJQUFJLENBQUM7SUFFeUIsQ0FBQzs7Z0JBOUJqRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGdtQkFXVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTtvQkFFekMsSUFBSSxFQUFFO3dCQUNKLDJCQUEyQixFQUFFLE9BQU87cUJBQ3JDOztpQkFDRjs7OztnQkF0QlEsaUJBQWlCOzs7aUNBd0J2QixLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQUdSLDBCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0FWWSxtQkFBbUI7OztJQUM5Qiw2Q0FBK0I7O0lBQy9CLHlDQUEyQjs7SUFDM0Isb0NBQXNCOztJQUN0QixvQ0FBZTs7SUFDZixxQ0FBZ0I7O0lBQ2hCLHVDQUFrQjs7SUFDbEIsb0NBQXNCOztJQUVWLHFDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGluZ0JhclNlcnZpY2UgfSBmcm9tICcuL2xvYWRpbmctYmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtbG9hZGluZy1iYXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIodmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGxvYWRlci5wcm9ncmVzcyR8YXN5bmMpIGFzIHByb2dyZXNzXCI+XG4gICAgICA8ZGl2IGlkPVwibG9hZGluZy1iYXItc3Bpbm5lclwiICpuZ0lmPVwiaW5jbHVkZVNwaW5uZXJcIiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIj5cbiAgICAgICAgPGRpdiBbc3R5bGUud2lkdGhdPVwiZGlhbWV0ZXJcIiBbc3R5bGUuaGVpZ2h0XT1cImRpYW1ldGVyXCIgY2xhc3M9XCJzcGlubmVyLWljb25cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImxvYWRpbmctYmFyXCIgKm5nSWY9XCJpbmNsdWRlQmFyXCIgW3N0eWxlLmNvbG9yXT1cImNvbG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJjb2xvclwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCIgW3N0eWxlLndpZHRoXT1cInByb2dyZXNzICsgJyUnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBlZ1wiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1iYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubG9hZGluZy1iYXItZml4ZWRdJzogJ2ZpeGVkJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW5jbHVkZVNwaW5uZXIgPSB0cnVlO1xuICBASW5wdXQoKSBpbmNsdWRlQmFyID0gdHJ1ZTtcbiAgQElucHV0KCkgZml4ZWQgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xvcjtcbiAgQElucHV0KCkgaGVpZ2h0O1xuICBASW5wdXQoKSBkaWFtZXRlcjtcbiAgQElucHV0KCkgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2FkZXI6IExvYWRpbmdCYXJTZXJ2aWNlKSB7fVxufVxuIl19