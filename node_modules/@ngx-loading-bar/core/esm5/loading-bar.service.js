/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
var LoadingBarService = /** @class */ (function () {
    function LoadingBarService(platformId) {
        this.platformId = platformId;
        this.progress$ = (/** @type {?} */ ((new Subject()).pipe(debounceTime(0))));
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
        if (initialValue === void 0) { initialValue = 2; }
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
        if (!isPlatformBrowser(this.platformId)) {
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
        if (rnd === void 0) { rnd = 0; }
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoadingBarService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ LoadingBarService.ngInjectableDef = i0.defineInjectable({ factory: function LoadingBarService_Factory() { return new LoadingBarService(i0.inject(i0.PLATFORM_ID)); }, token: LoadingBarService, providedIn: "root" });
    return LoadingBarService;
}());
export { LoadingBarService };
if (false) {
    /** @type {?} */
    LoadingBarService.prototype.progress$;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._pendingRequests;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._value;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._incTimeout;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1iYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtbG9hZGluZy1iYXIvY29yZS8iLCJzb3VyY2VzIjpbImxvYWRpbmctYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXBEO0lBUUUsMkJBQXlDLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFObEQsY0FBUyxHQUFHLG1CQUFBLENBQUMsSUFBSSxPQUFPLEVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbUIsQ0FBQztRQUU5RSxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsV0FBTSxHQUFHLENBQUMsQ0FBQztJQUcyQyxDQUFDOzs7OztJQUUvRCxpQ0FBSzs7OztJQUFMLFVBQU0sWUFBZ0I7UUFBaEIsNkJBQUEsRUFBQSxnQkFBZ0I7UUFDcEIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQ3BELGtFQUFrRTtZQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FB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LENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDbEMsMkJBQTJCO1lBQzNCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2xDLDZCQUE2QjtZQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ1g7YUFBTTtZQUNMLDhCQUE4QjtZQUM5QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBM0dGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBUXFCLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXOzs7NEJBZGpDO0NBa0hDLEFBNUdELElBNEdDO1NBM0dZLGlCQUFpQjs7O0lBQzVCLHNDQUFzRjs7Ozs7SUFFdEYsNkNBQTZCOzs7OztJQUM3QixtQ0FBbUI7Ozs7O0lBQ25CLHdDQUF5Qjs7Ozs7SUFFYix1Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHJlYWRvbmx5IHByb2dyZXNzJCA9IChuZXcgU3ViamVjdDxudW1iZXI+KCkpLnBpcGUoZGVib3VuY2VUaW1lKDApKSBhcyBTdWJqZWN0PG51bWJlcj47XG5cbiAgcHJpdmF0ZSBfcGVuZGluZ1JlcXVlc3RzID0gMDtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuICBwcml2YXRlIF9pbmNUaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHt9XG5cbiAgc3RhcnQoaW5pdGlhbFZhbHVlID0gMikge1xuICAgICsrdGhpcy5fcGVuZGluZ1JlcXVlc3RzO1xuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gMCB8fCB0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPT09IDEpIHtcbiAgICAgIC8vIEluc2VydHMgdGhlIGxvYWRpbmcgYmFyIGVsZW1lbnQgaW50byB0aGUgZG9tLCBhbmQgc2V0cyBpdCB0byAyJVxuICAgICAgdGhpcy5zZXQodGhpcy5fcGVuZGluZ1JlcXVlc3RzID09PSAxICYmIHRoaXMuX3ZhbHVlID4gMCA/IHRoaXMuX3ZhbHVlIDogaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB3aGlsZSAodGhpcy5fcGVuZGluZ1JlcXVlc3RzID4gMCkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPT09IDAgJiYgdGhpcy5fdmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ1JlcXVlc3RzID4gMCkge1xuICAgICAgLS10aGlzLl9wZW5kaW5nUmVxdWVzdHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9PT0gMCB8fCAodGhpcy5fcGVuZGluZ1JlcXVlc3RzID09PSAwICYmIHRoaXMuX3ZhbHVlID4gMCkpIHtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gMTAwKSB7XG4gICAgICAgIHRoaXMuc2V0KDEwMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGVtcHQgdG8gYWdncmVnYXRlIGFueSBzdGFydC9jb21wbGV0ZSBjYWxscyB3aXRoaW4gNTAwbXM6XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0KDApLCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvYWRpbmcgYmFyJ3Mgd2lkdGggdG8gYSBjZXJ0YWluIHBlcmNlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBuIGFueSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMFxuICAgKi9cbiAgc2V0KG4pIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDAgJiYgdGhpcy5fcGVuZGluZ1JlcXVlc3RzID4gMCkge1xuICAgICAgbiA9IDI7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSBuO1xuICAgIHRoaXMucHJvZ3Jlc3MkLm5leHQobik7XG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ1JlcXVlc3RzID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaW5jcmVtZW50IGxvYWRpbmdiYXIgdG8gZ2l2ZSB0aGUgaWxsdXNpb24gdGhhdCB0aGVyZSBpcyBhbHdheXNcbiAgICAvLyBwcm9ncmVzcyBidXQgbWFrZSBzdXJlIHRvIGNhbmNlbCB0aGUgcHJldmlvdXMgdGltZW91dHMgc28gd2UgZG9uJ3RcbiAgICAvLyBoYXZlIG11bHRpcGxlIGluY3MgcnVubmluZyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9pbmNUaW1lb3V0KTtcbiAgICBpZiAodGhpcy5fdmFsdWUgPiAwICYmIHRoaXMuX3ZhbHVlIDwgMTAwKSB7XG4gICAgICB0aGlzLl9pbmNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluY3JlbWVudCgpLCAyNTApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBsb2FkaW5nIGJhciBieSBhIHJhbmRvbSBhbW91bnRcbiAgICogYnV0IHNsb3dzIGRvd24gYXMgaXQgcHJvZ3Jlc3Nlc1xuICAgKi9cbiAgaW5jcmVtZW50KHJuZCA9IDApIHtcbiAgICBpZiAocm5kID4gMCkge1xuICAgICAgdGhpcy5zZXQodGhpcy5fdmFsdWUgKyBybmQpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXQgPSB0aGlzLl92YWx1ZTtcbiAgICBpZiAoc3RhdCA+PSAwICYmIHN0YXQgPCAyNSkge1xuICAgICAgLy8gU3RhcnQgb3V0IGJldHdlZW4gMyAtIDYlIGluY3JlbWVudHNcbiAgICAgIHJuZCA9IChNYXRoLnJhbmRvbSgpICogKDUgLSAzICsgMSkgKyAzKTtcbiAgICB9IGVsc2UgaWYgKHN0YXQgPj0gMjUgJiYgc3RhdCA8IDY1KSB7XG4gICAgICAvLyBpbmNyZW1lbnQgYmV0d2VlbiAwIC0gMyVcbiAgICAgIHJuZCA9IChNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgfSBlbHNlIGlmIChzdGF0ID49IDY1ICYmIHN0YXQgPCA5MCkge1xuICAgICAgLy8gaW5jcmVtZW50IGJldHdlZW4gMCAtIDIlXG4gICAgICBybmQgPSAoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdCA+PSA5MCAmJiBzdGF0IDwgOTkpIHtcbiAgICAgIC8vIGZpbmFsbHksIGluY3JlbWVudCBpdCAuNSAlXG4gICAgICBybmQgPSAwLjU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFmdGVyIDk5JSwgZG9uJ3QgaW5jcmVtZW50OlxuICAgICAgcm5kID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNldCh0aGlzLl92YWx1ZSArIHJuZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnByb2dyZXNzJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=