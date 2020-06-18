/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
var DraggableScrollContainerDirective = /** @class */ (function () {
    function DraggableScrollContainerDirective(elementRef, renderer, zone) {
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
    DraggableScrollContainerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.renderer.listen(_this.elementRef.nativeElement, 'touchmove', function (event) {
                if (_this.cancelledScroll && event.cancelable) {
                    event.preventDefault();
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.disableScroll = /**
     * @return {?}
     */
    function () {
        this.cancelledScroll = true;
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    };
    /**
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.enableScroll = /**
     * @return {?}
     */
    function () {
        this.cancelledScroll = false;
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
    };
    /**
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.hasScrollbar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerHasHorizontalScroll = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth >
            0;
        /** @type {?} */
        var containerHasVerticalScroll = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight >
            0;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    };
    DraggableScrollContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlDraggableScrollContainer]'
                },] }
    ];
    /** @nocollapse */
    DraggableScrollContainerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    DraggableScrollContainerDirective.propDecorators = {
        activeLongPressDrag: [{ type: Input }],
        longPressConfig: [{ type: Input }]
    };
    return DraggableScrollContainerDirective;
}());
export { DraggableScrollContainerDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlLyIsInNvdXJjZXMiOlsibGliL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7O0lBc0JyQiwyQ0FDUyxZQUNDLFVBQ0E7UUFGRCxlQUFVLEdBQVYsVUFBVTtRQUNULGFBQVEsR0FBUixRQUFRO1FBQ1IsU0FBSSxHQUFKLElBQUk7Ozs7bUNBZmlCLEtBQUs7Ozs7OzsrQkFRbEIsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7K0JBRXBCLEtBQUs7S0FNM0I7Ozs7SUFFSixvREFBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDMUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsVUFBQyxLQUFpQjtnQkFDaEIsSUFBSSxLQUFJLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQzVDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDeEI7YUFDRixDQUNGLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7OztJQUVELHlEQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM3RTs7OztJQUVELHdEQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzRTs7OztJQUVELHdEQUFZOzs7SUFBWjs7UUFDRSxJQUFNLDRCQUE0QixHQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVc7WUFDM0MsQ0FBQyxDQUFDOztRQUNKLElBQU0sMEJBQTBCLEdBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUM1QyxDQUFDLENBQUM7UUFDSixPQUFPLDRCQUE0QixJQUFJLDBCQUEwQixDQUFDO0tBQ25FOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7aUJBQzFDOzs7O2dCQVRDLFVBQVU7Z0JBSVYsU0FBUztnQkFGVCxNQUFNOzs7c0NBWUwsS0FBSztrQ0FRTCxLQUFLOzs0Q0F4QlI7O1NBWWEsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bERyYWdnYWJsZVNjcm9sbENvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBEcmFnU3RhcnQgYWZ0ZXIgYSBsb25nIHRvdWNoIGluIHNjcm9sbGFibGUgY29udGFpbmVyIHdoZW4gdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgYWN0aXZlTG9uZ1ByZXNzRHJhZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uIG9mIGEgbG9uZyB0b3VjaFxuICAgKiBEdXJhdGlvbiBpbiBtcyBvZiBhIGxvbmcgdG91Y2ggYmVmb3JlIGFjdGl2YXRpbmcgRHJhZ1N0YXJ0XG4gICAqIERlbHRhIG9mIHRoZVxuICAgKi9cbiAgQElucHV0KClcbiAgbG9uZ1ByZXNzQ29uZmlnID0geyBkdXJhdGlvbjogMzAwLCBkZWx0YTogMzAgfTtcblxuICBwcml2YXRlIGNhbmNlbGxlZFNjcm9sbCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jYW5jZWxsZWRTY3JvbGwgJiYgZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsbGVkU2Nyb2xsID0gdHJ1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gIH1cblxuICBlbmFibGVTY3JvbGwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxsZWRTY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnYXV0bycpO1xuICB9XG5cbiAgaGFzU2Nyb2xsYmFyKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckhhc0hvcml6b250YWxTY3JvbGwgPVxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggLVxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA+XG4gICAgICAwO1xuICAgIGNvbnN0IGNvbnRhaW5lckhhc1ZlcnRpY2FsU2Nyb2xsID1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCAtXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+XG4gICAgICAwO1xuICAgIHJldHVybiBjb250YWluZXJIYXNIb3Jpem9udGFsU2Nyb2xsIHx8IGNvbnRhaW5lckhhc1ZlcnRpY2FsU2Nyb2xsO1xuICB9XG59XG4iXX0=