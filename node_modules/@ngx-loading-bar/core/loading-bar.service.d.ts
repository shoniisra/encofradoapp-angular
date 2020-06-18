import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
export declare class LoadingBarService implements OnDestroy {
    private platformId;
    readonly progress$: Subject<number>;
    private _pendingRequests;
    private _value;
    private _incTimeout;
    constructor(platformId: Object);
    start(initialValue?: number): void;
    stop(): void;
    complete(): void;
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param n any value between 0 and 100
     */
    set(n: any): void;
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     */
    increment(rnd?: number): void;
    ngOnDestroy(): void;
}
