import { ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
export declare class DraggableScrollContainerDirective implements OnInit {
    elementRef: ElementRef<HTMLElement>;
    private renderer;
    private zone;
    /**
     * Trigger the DragStart after a long touch in scrollable container when true
     */
    activeLongPressDrag: boolean;
    /**
     * Configuration of a long touch
     * Duration in ms of a long touch before activating DragStart
     * Delta of the
     */
    longPressConfig: {
        duration: number;
        delta: number;
    };
    private cancelledScroll;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, zone: NgZone);
    ngOnInit(): void;
    disableScroll(): void;
    enableScroll(): void;
    hasScrollbar(): boolean;
}
