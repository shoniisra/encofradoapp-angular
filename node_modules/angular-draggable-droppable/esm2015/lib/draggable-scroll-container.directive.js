/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
export class DraggableScrollContainerDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(elementRef, renderer, zone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         */
        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         */
        this.longPressConfig = { duration: 300, delta: 30 };
        this.cancelledScroll = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            this.renderer.listen(this.elementRef.nativeElement, 'touchmove', (event) => {
                if (this.cancelledScroll && event.cancelable) {
                    event.preventDefault();
                }
            });
        });
    }
    /**
     * @return {?}
     */
    disableScroll() {
        this.cancelledScroll = true;
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    }
    /**
     * @return {?}
     */
    enableScroll() {
        this.cancelledScroll = false;
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
    }
    /**
     * @return {?}
     */
    hasScrollbar() {
        /** @type {?} */
        const containerHasHorizontalScroll = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth >
            0;
        /** @type {?} */
        const containerHasVerticalScroll = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight >
            0;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    }
}
DraggableScrollContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlDraggableScrollContainer]'
            },] }
];
/** @nocollapse */
DraggableScrollContainerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
DraggableScrollContainerDirective.propDecorators = {
    activeLongPressDrag: [{ type: Input }],
    longPressConfig: [{ type: Input }]
};
if (false) {
    /**
     * Trigger the DragStart after a long touch in scrollable container when true
     * @type {?}
     */
    DraggableScrollContainerDirective.prototype.activeLongPressDrag;
    /**
     * Configuration of a long touch
     * Duration in ms of a long touch before activating DragStart
     * Delta of the
     * @type {?}
     */
    DraggableScrollContainerDirective.prototype.longPressConfig;
    /** @type {?} */
    DraggableScrollContainerDirective.prototype.cancelledScroll;
    /** @type {?} */
    DraggableScrollContainerDirective.prototype.elementRef;
    /** @type {?} */
    DraggableScrollContainerDirective.prototype.renderer;
    /** @type {?} */
    DraggableScrollContainerDirective.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlLyIsInNvdXJjZXMiOlsibGliL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTTs7Ozs7O0lBaUJKLFlBQ1MsWUFDQyxVQUNBO1FBRkQsZUFBVSxHQUFWLFVBQVU7UUFDVCxhQUFRLEdBQVIsUUFBUTtRQUNSLFNBQUksR0FBSixJQUFJOzs7O21DQWZpQixLQUFLOzs7Ozs7K0JBUWxCLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFOytCQUVwQixLQUFLO0tBTTNCOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsV0FBVyxFQUNYLENBQUMsS0FBaUIsRUFBRSxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDNUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjthQUNGLENBQ0YsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM3RTs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDM0U7Ozs7SUFFRCxZQUFZOztRQUNWLE1BQU0sNEJBQTRCLEdBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVc7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVztZQUMzQyxDQUFDLENBQUM7O1FBQ0osTUFBTSwwQkFBMEIsR0FDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQzVDLENBQUMsQ0FBQztRQUNKLE9BQU8sNEJBQTRCLElBQUksMEJBQTBCLENBQUM7S0FDbkU7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjthQUMxQzs7OztZQVRDLFVBQVU7WUFJVixTQUFTO1lBRlQsTUFBTTs7O2tDQVlMLEtBQUs7OEJBUUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVTY3JvbGxDb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVHJpZ2dlciB0aGUgRHJhZ1N0YXJ0IGFmdGVyIGEgbG9uZyB0b3VjaCBpbiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGFjdGl2ZUxvbmdQcmVzc0RyYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBvZiBhIGxvbmcgdG91Y2hcbiAgICogRHVyYXRpb24gaW4gbXMgb2YgYSBsb25nIHRvdWNoIGJlZm9yZSBhY3RpdmF0aW5nIERyYWdTdGFydFxuICAgKiBEZWx0YSBvZiB0aGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGxvbmdQcmVzc0NvbmZpZyA9IHsgZHVyYXRpb246IDMwMCwgZGVsdGE6IDMwIH07XG5cbiAgcHJpdmF0ZSBjYW5jZWxsZWRTY3JvbGwgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY2FuY2VsbGVkU2Nyb2xsICYmIGV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlZFNjcm9sbCA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsbGVkU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ2F1dG8nKTtcbiAgfVxuXG4gIGhhc1Njcm9sbGJhcigpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250YWluZXJIYXNIb3Jpem9udGFsU2Nyb2xsID1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoIC1cbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPlxuICAgICAgMDtcbiAgICBjb25zdCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbCA9XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgLVxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPlxuICAgICAgMDtcbiAgICByZXR1cm4gY29udGFpbmVySGFzSG9yaXpvbnRhbFNjcm9sbCB8fCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbDtcbiAgfVxufVxuIl19