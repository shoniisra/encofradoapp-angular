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
export class LoadingBarService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.progress$ = (/** @type {?} */ ((new Subject()).pipe(debounceTime(0))));
        this._pendingRequests = 0;
        this._value = 0;
    }
    /**
     * @param {?=} initialValue
     * @return {?}
     */
    start(initialValue = 2) {
        ++this._pendingRequests;
        if (this._value === 0 || this._pendingRequests === 1) {
            // Inserts the loading bar element into the dom, and sets it to 2%
            this.set(this._pendingRequests === 1 && this._value > 0 ? this._value : initialValue);
        }
    }
    /**
     * @return {?}
     */
    stop() {
        this.complete();
        while (this._pendingRequests > 0) {
            this.complete();
        }
    }
    /**
     * @return {?}
     */
    complete() {
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
            setTimeout(() => this.set(0), 500);
        }
    }
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param {?} n any value between 0 and 100
     * @return {?}
     */
    set(n) {
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
            this._incTimeout = setTimeout(() => this.increment(), 250);
        }
    }
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     * @param {?=} rnd
     * @return {?}
     */
    increment(rnd = 0) {
        if (rnd > 0) {
            this.set(this._value + rnd);
        }
        /** @type {?} */
        const stat = this._value;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress$.complete();
    }
}
LoadingBarService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LoadingBarService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ LoadingBarService.ngInjectableDef = i0.defineInjectable({ factory: function LoadingBarService_Factory() { return new LoadingBarService(i0.inject(i0.PLATFORM_ID)); }, token: LoadingBarService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1iYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtbG9hZGluZy1iYXIvY29yZS8iLCJzb3VyY2VzIjpbImxvYWRpbmctYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3BELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFPNUIsWUFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQU5sRCxjQUFTLEdBQUcsbUJBQUEsQ0FBQyxJQUFJLE9BQU8sRUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFtQixDQUFDO1FBRTlFLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRzJDLENBQUM7Ozs7O0lBRS9ELEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQztRQUNwQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDcEQsa0VBQWtFO1lBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENB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QUMzQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFBTSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNsQyw2QkFBNkI7WUFDN0IsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNYO2FBQU07WUFDTCw4QkFBOEI7WUFDOUIsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNUO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUEzR0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVFxQixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7Ozs7SUFOL0Isc0NBQXNGOzs7OztJQUV0Riw2Q0FBNkI7Ozs7O0lBQzdCLG1DQUFtQjs7Ozs7SUFDbkIsd0NBQXlCOzs7OztJQUViLHVDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcmVhZG9ubHkgcHJvZ3Jlc3MkID0gKG5ldyBTdWJqZWN0PG51bWJlcj4oKSkucGlwZShkZWJvdW5jZVRpbWUoMCkpIGFzIFN1YmplY3Q8bnVtYmVyPjtcblxuICBwcml2YXRlIF9wZW5kaW5nUmVxdWVzdHMgPSAwO1xuICBwcml2YXRlIF92YWx1ZSA9IDA7XG4gIHByaXZhdGUgX2luY1RpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCkge31cblxuICBzdGFydChpbml0aWFsVmFsdWUgPSAyKSB7XG4gICAgKyt0aGlzLl9wZW5kaW5nUmVxdWVzdHM7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSAwIHx8IHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9PT0gMSkge1xuICAgICAgLy8gSW5zZXJ0cyB0aGUgbG9hZGluZyBiYXIgZWxlbWVudCBpbnRvIHRoZSBkb20sIGFuZCBzZXRzIGl0IHRvIDIlXG4gICAgICB0aGlzLnNldCh0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPT09IDEgJiYgdGhpcy5fdmFsdWUgPiAwID8gdGhpcy5fdmFsdWUgOiBpbml0aWFsVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIHdoaWxlICh0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPiAwKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9PT0gMCAmJiB0aGlzLl92YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPiAwKSB7XG4gICAgICAtLXRoaXMuX3BlbmRpbmdSZXF1ZXN0cztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ1JlcXVlc3RzID09PSAwIHx8ICh0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPT09IDAgJiYgdGhpcy5fdmFsdWUgPiAwKSkge1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSAxMDApIHtcbiAgICAgICAgdGhpcy5zZXQoMTAwKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXR0ZW1wdCB0byBhZ2dyZWdhdGUgYW55IHN0YXJ0L2NvbXBsZXRlIGNhbGxzIHdpdGhpbiA1MDBtczpcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXQoMCksIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbG9hZGluZyBiYXIncyB3aWR0aCB0byBhIGNlcnRhaW4gcGVyY2VudC5cbiAgICpcbiAgICogQHBhcmFtIG4gYW55IHZhbHVlIGJldHdlZW4gMCBhbmQgMTAwXG4gICAqL1xuICBzZXQobikge1xuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobiA9PT0gMCAmJiB0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPiAwKSB7XG4gICAgICBuID0gMjtcbiAgICB9XG5cbiAgICB0aGlzLl92YWx1ZSA9IG47XG4gICAgdGhpcy5wcm9ncmVzcyQubmV4dChuKTtcblxuICAgIGlmICh0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpbmNyZW1lbnQgbG9hZGluZ2JhciB0byBnaXZlIHRoZSBpbGx1c2lvbiB0aGF0IHRoZXJlIGlzIGFsd2F5c1xuICAgIC8vIHByb2dyZXNzIGJ1dCBtYWtlIHN1cmUgdG8gY2FuY2VsIHRoZSBwcmV2aW91cyB0aW1lb3V0cyBzbyB3ZSBkb24ndFxuICAgIC8vIGhhdmUgbXVsdGlwbGUgaW5jcyBydW5uaW5nIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2luY1RpbWVvdXQpO1xuICAgIGlmICh0aGlzLl92YWx1ZSA+IDAgJiYgdGhpcy5fdmFsdWUgPCAxMDApIHtcbiAgICAgIHRoaXMuX2luY1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5jcmVtZW50KCksIDI1MCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgdGhlIGxvYWRpbmcgYmFyIGJ5IGEgcmFuZG9tIGFtb3VudFxuICAgKiBidXQgc2xvd3MgZG93biBhcyBpdCBwcm9ncmVzc2VzXG4gICAqL1xuICBpbmNyZW1lbnQocm5kID0gMCkge1xuICAgIGlmIChybmQgPiAwKSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl92YWx1ZSArIHJuZCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdCA9IHRoaXMuX3ZhbHVlO1xuICAgIGlmIChzdGF0ID49IDAgJiYgc3RhdCA8IDI1KSB7XG4gICAgICAvLyBTdGFydCBvdXQgYmV0d2VlbiAzIC0gNiUgaW5jcmVtZW50c1xuICAgICAgcm5kID0gKE1hdGgucmFuZG9tKCkgKiAoNSAtIDMgKyAxKSArIDMpO1xuICAgIH0gZWxzZSBpZiAoc3RhdCA+PSAyNSAmJiBzdGF0IDwgNjUpIHtcbiAgICAgIC8vIGluY3JlbWVudCBiZXR3ZWVuIDAgLSAzJVxuICAgICAgcm5kID0gKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICB9IGVsc2UgaWYgKHN0YXQgPj0gNjUgJiYgc3RhdCA8IDkwKSB7XG4gICAgICAvLyBpbmNyZW1lbnQgYmV0d2VlbiAwIC0gMiVcbiAgICAgIHJuZCA9IChNYXRoLnJhbmRvbSgpICogMik7XG4gICAgfSBlbHNlIGlmIChzdGF0ID49IDkwICYmIHN0YXQgPCA5OSkge1xuICAgICAgLy8gZmluYWxseSwgaW5jcmVtZW50IGl0IC41ICVcbiAgICAgIHJuZCA9IDAuNTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWZ0ZXIgOTklLCBkb24ndCBpbmNyZW1lbnQ6XG4gICAgICBybmQgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuc2V0KHRoaXMuX3ZhbHVlICsgcm5kKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucHJvZ3Jlc3MkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==