/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Output, Input, EventEmitter, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, Observable, merge, EMPTY } from 'rxjs';
import { map, mergeMap, takeUntil, filter, pairwise, take, share, auditTime, switchMap, startWith } from 'rxjs/operators';
/**
 * @record
 */
function PointerEventCoordinate() { }
if (false) {
    /** @type {?} */
    PointerEventCoordinate.prototype.clientX;
    /** @type {?} */
    PointerEventCoordinate.prototype.clientY;
    /** @type {?} */
    PointerEventCoordinate.prototype.event;
}
/**
 * @record
 */
function Coordinate() { }
if (false) {
    /** @type {?} */
    Coordinate.prototype.x;
    /** @type {?} */
    Coordinate.prototype.y;
}
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision = 3) {
    /** @type {?} */
    const diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    const newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    let translateX = 0;
    /** @type {?} */
    let translateY = 0;
    /** @type {?} */
    const style = element.nativeElement.style;
    /** @type {?} */
    const transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    const transform = transformProperties
        .map(property => style[property])
        .find(value => !!value);
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        const boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY({ clientY, rect }) {
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX({ clientX, rect }) {
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges({ clientX, clientY, elm, allowedEdges, cursorPrecision }) {
    /** @type {?} */
    const elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    const edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/**
 * @record
 */
export function ResizeCursors() { }
if (false) {
    /** @type {?} */
    ResizeCursors.prototype.topLeft;
    /** @type {?} */
    ResizeCursors.prototype.topRight;
    /** @type {?} */
    ResizeCursors.prototype.bottomLeft;
    /** @type {?} */
    ResizeCursors.prototype.bottomRight;
    /** @type {?} */
    ResizeCursors.prototype.leftOrRight;
    /** @type {?} */
    ResizeCursors.prototype.topOrBottom;
}
/** @type {?} */
const DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff({ edges, initialRectangle, newRectangle }) {
    /** @type {?} */
    const edgesDiff = {};
    Object.keys(edges).forEach(edge => {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
const RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
const RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
const RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
const RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
const RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
export const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
export class ResizableDirective {
    /**
     * @hidden
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elm
     * @param {?} zone
     */
    constructor(platformId, renderer, elm, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new EventEmitter();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new EventEmitter();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new EventEmitter();
        /**
         * @hidden
         */
        this.mouseup = new Subject();
        /**
         * @hidden
         */
        this.mousedown = new Subject();
        /**
         * @hidden
         */
        this.mousemove = new Subject();
        this.destroy$ = new Subject();
        this.resizeEdges$ = new Subject();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListeners.pointerDown
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ clientX, clientY }) => {
            this.mousedown.next({ clientX, clientY });
        });
        this.pointerEventListeners.pointerMove
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ clientX, clientY, event }) => {
            this.mousemove.next({ clientX, clientY, event });
        });
        this.pointerEventListeners.pointerUp
            .pipe(takeUntil(this.destroy$))
            .subscribe(({ clientX, clientY }) => {
            this.mouseup.next({ clientX, clientY });
        });
        /** @type {?} */
        let currentResize;
        /** @type {?} */
        const removeGhostElement = () => {
            if (currentResize && currentResize.clonedNode) {
                this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        const getResizeCursors = () => {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, this.resizeCursors);
        };
        /** @type {?} */
        const mouseMove = this.mousemove.pipe(share());
        mouseMove.pipe(filter(() => !!currentResize)).subscribe(({ event }) => {
            event.preventDefault();
        });
        this.resizeEdges$
            .pipe(startWith(this.resizeEdges), map(() => {
            return (this.resizeEdges &&
                Object.keys(this.resizeEdges).some(edge => !!this.resizeEdges[edge]));
        }), switchMap(legacyResizeEdgesEnabled => legacyResizeEdgesEnabled ? mouseMove : EMPTY), auditTime(MOUSE_MOVE_THROTTLE_MS))
            .subscribe(({ clientX, clientY }) => {
            /** @type {?} */
            const resizeEdges = getResizeEdges({
                clientX,
                clientY,
                elm: this.elm,
                allowedEdges: this.resizeEdges,
                cursorPrecision: this.resizeCursorPrecision
            });
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            if (!currentResize) {
                /** @type {?} */
                const cursor = getResizeCursor(resizeEdges, resizeCursors);
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', cursor);
            }
            this.setElementClass(this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            this.setElementClass(this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            this.setElementClass(this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            this.setElementClass(this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        const mousedrag = this.mousedown
            .pipe(mergeMap(startCoords => {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            const getSnapGrid = () => {
                /** @type {?} */
                const snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +this.resizeSnapGrid.left;
                    }
                    else if (this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +this.resizeSnapGrid.right;
                    }
                    if (this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +this.resizeSnapGrid.top;
                    }
                    else if (this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return merge(mouseMove.pipe(take(1)).pipe(map(coords => [, coords])), mouseMove.pipe(pairwise()))
                .pipe(map(([previousCoords, newCoords]) => {
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(filter(([previousCoords, newCoords]) => {
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                const snapGrid = getSnapGrid();
                /** @type {?} */
                const previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                const newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(map(([, newCoords]) => {
                /** @type {?} */
                const snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(takeUntil(merge(this.mouseup, this.mousedown)));
        }))
            .pipe(filter(() => !!currentResize));
        mousedrag
            .pipe(map(({ clientX, clientY }) => {
            return getNewBoundingRectangle((/** @type {?} */ (currentResize)).startingRect, (/** @type {?} */ (currentResize)).edges, clientX, clientY);
        }))
            .pipe(filter((newBoundingRect) => {
            return (this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(filter((newBoundingRect) => {
            return this.validateResize
                ? this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }))
            .subscribe((newBoundingRect) => {
            if (currentResize && currentResize.clonedNode) {
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
            }
            this.zone.run(() => {
                this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            });
            (/** @type {?} */ (currentResize)).currentRect = newBoundingRect;
        });
        this.mousedown
            .pipe(map(({ clientX, clientY, edges }) => {
            return (edges ||
                getResizeEdges({
                    clientX,
                    clientY,
                    elm: this.elm,
                    allowedEdges: this.resizeEdges,
                    cursorPrecision: this.resizeCursorPrecision
                }));
        }))
            .pipe(filter((edges) => {
            return Object.keys(edges).length > 0;
        }))
            .subscribe((edges) => {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
            currentResize = {
                edges,
                startingRect,
                currentRect: startingRect
            };
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            /** @type {?} */
            const cursor = getResizeCursor(currentResize.edges, resizeCursors);
            this.renderer.setStyle(document.body, 'cursor', cursor);
            this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
            if (this.enableGhostResize) {
                currentResize.clonedNode = this.elm.nativeElement.cloneNode(true);
                this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
                this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                (/** @type {?} */ (currentResize.clonedNode)).scrollTop = (/** @type {?} */ (currentResize.startingRect
                    .scrollTop));
                (/** @type {?} */ (currentResize.clonedNode)).scrollLeft = (/** @type {?} */ (currentResize.startingRect
                    .scrollLeft));
            }
            this.zone.run(() => {
                this.resizeStart.emit({
                    edges: getEdgesDiff({
                        edges,
                        initialRectangle: startingRect,
                        newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(() => {
            if (currentResize) {
                this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                this.renderer.setStyle(document.body, 'cursor', '');
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');
                this.zone.run(() => {
                    this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: (/** @type {?} */ (currentResize)).edges,
                            initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                            newRectangle: (/** @type {?} */ (currentResize)).currentRect
                        }),
                        rectangle: (/** @type {?} */ (currentResize)).currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        // browser check for angular universal, because it doesn't know what document is
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.resizeEdges$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    setElementClass(elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    }
}
ResizableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlResizable]'
            },] }
];
/** @nocollapse */
ResizableDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
ResizableDirective.propDecorators = {
    validateResize: [{ type: Input }],
    resizeEdges: [{ type: Input }],
    enableGhostResize: [{ type: Input }],
    resizeSnapGrid: [{ type: Input }],
    resizeCursors: [{ type: Input }],
    resizeCursorPrecision: [{ type: Input }],
    ghostElementPositioning: [{ type: Input }],
    allowNegativeResizes: [{ type: Input }],
    resizeStart: [{ type: Output }],
    resizing: [{ type: Output }],
    resizeEnd: [{ type: Output }]
};
if (false) {
    /**
     * A function that will be called before each resize event. Return `true` to allow the resize event to propagate or `false` to cancel it
     * @type {?}
     */
    ResizableDirective.prototype.validateResize;
    /**
     * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
     * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
     * @type {?}
     */
    ResizableDirective.prototype.resizeEdges;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     * @type {?}
     */
    ResizableDirective.prototype.enableGhostResize;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     * @type {?}
     */
    ResizableDirective.prototype.resizeSnapGrid;
    /**
     * The mouse cursors that will be set on the resize edges
     * @type {?}
     */
    ResizableDirective.prototype.resizeCursors;
    /**
     * Mouse over thickness to active cursor.
     * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
     * @type {?}
     */
    ResizableDirective.prototype.resizeCursorPrecision;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     * @type {?}
     */
    ResizableDirective.prototype.ghostElementPositioning;
    /**
     * Allow elements to be resized to negative dimensions
     * @type {?}
     */
    ResizableDirective.prototype.allowNegativeResizes;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizeStart;
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizing;
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizeEnd;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mouseup;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mousedown;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mousemove;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.pointerEventListeners;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.resizeEdges$;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.renderer;
    /** @type {?} */
    ResizableDirective.prototype.elm;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.zone;
}
class PointerEventListeners {
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    static getInstance(renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(renderer, zone) {
        this.pointerDown = new Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseDown;
            /** @type {?} */
            let unsubscribeTouchStart;
            zone.runOutsideAngular(() => {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', (event) => {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(share());
        this.pointerMove = new Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseMove;
            /** @type {?} */
            let unsubscribeTouchMove;
            zone.runOutsideAngular(() => {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', (event) => {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(share());
        this.pointerUp = new Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseUp;
            /** @type {?} */
            let unsubscribeTouchEnd;
            /** @type {?} */
            let unsubscribeTouchCancel;
            zone.runOutsideAngular(() => {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', (event) => {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', (event) => {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(share());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PointerEventListeners.instance;
    /** @type {?} */
    PointerEventListeners.prototype.pointerDown;
    /** @type {?} */
    PointerEventListeners.prototype.pointerMove;
    /** @type {?} */
    PointerEventListeners.prototype.pointerUp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQvIiwic291cmNlcyI6WyJyZXNpemFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBRVosTUFBTSxFQUdOLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQ0wsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLeEIscUNBSUM7OztJQUhDLHlDQUFnQjs7SUFDaEIseUNBQWdCOztJQUNoQix1Q0FBK0I7Ozs7O0FBR2pDLHlCQUdDOzs7SUFGQyx1QkFBVTs7SUFDVix1QkFBVTs7Ozs7Ozs7QUFHWixTQUFTLGVBQWUsQ0FDdEIsTUFBYyxFQUNkLE1BQWMsRUFDZCxZQUFvQixDQUFDOztVQUVmLElBQUksR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDOUMsT0FBTyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQzFCLENBQUM7Ozs7Ozs7O0FBRUQsU0FBUyx1QkFBdUIsQ0FDOUIsWUFBK0IsRUFDL0IsS0FBWSxFQUNaLE9BQWUsRUFDZixPQUFlOztVQUVULGVBQWUsR0FBc0I7UUFDekMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHO1FBQ3JC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LEVBQUU7b0JBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ1osT0FBTyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTzt3QkFDeEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTzt3QkFDeEMsS0FBSztxQkFDTixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUNGLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sR0FBRyxFQUFFO2dCQUNWLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3JCLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCLHNCQUFzQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUNGLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGOzs7Ozs7SUFoSkMsK0JBQStDOztJQU4vQyw0Q0FBdUQ7O0lBRXZELDRDQUF1RDs7SUFFdkQsMENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG1lcmdlLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFrZVVudGlsLFxuICBmaWx0ZXIsXG4gIHBhaXJ3aXNlLFxuICB0YWtlLFxuICBzaGFyZSxcbiAgYXVkaXRUaW1lLFxuICBzd2l0Y2hNYXAsXG4gIHN0YXJ0V2l0aFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFZGdlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9lZGdlcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQm91bmRpbmdSZWN0YW5nbGUgfSBmcm9tICcuL2ludGVyZmFjZXMvYm91bmRpbmctcmVjdGFuZ2xlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBSZXNpemVFdmVudCB9IGZyb20gJy4vaW50ZXJmYWNlcy9yZXNpemUtZXZlbnQuaW50ZXJmYWNlJztcblxuaW50ZXJmYWNlIFBvaW50ZXJFdmVudENvb3JkaW5hdGUge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xufVxuXG5pbnRlcmZhY2UgQ29vcmRpbmF0ZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBpc051bWJlckNsb3NlVG8oXG4gIHZhbHVlMTogbnVtYmVyLFxuICB2YWx1ZTI6IG51bWJlcixcbiAgcHJlY2lzaW9uOiBudW1iZXIgPSAzXG4pOiBib29sZWFuIHtcbiAgY29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5hYnModmFsdWUxIC0gdmFsdWUyKTtcbiAgcmV0dXJuIGRpZmYgPCBwcmVjaXNpb247XG59XG5cbmZ1bmN0aW9uIGdldE5ld0JvdW5kaW5nUmVjdGFuZ2xlKFxuICBzdGFydGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlLFxuICBlZGdlczogRWRnZXMsXG4gIGNsaWVudFg6IG51bWJlcixcbiAgY2xpZW50WTogbnVtYmVyXG4pOiBCb3VuZGluZ1JlY3RhbmdsZSB7XG4gIGNvbnN0IG5ld0JvdW5kaW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUgPSB7XG4gICAgdG9wOiBzdGFydGluZ1JlY3QudG9wLFxuICAgIGJvdHRvbTogc3RhcnRpbmdSZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBzdGFydGluZ1JlY3QubGVmdCxcbiAgICByaWdodDogc3RhcnRpbmdSZWN0LnJpZ2h0XG4gIH07XG5cbiAgaWYgKGVkZ2VzLnRvcCkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC50b3AgKz0gY2xpZW50WTtcbiAgfVxuICBpZiAoZWRnZXMuYm90dG9tKSB7XG4gICAgbmV3Qm91bmRpbmdSZWN0LmJvdHRvbSArPSBjbGllbnRZO1xuICB9XG4gIGlmIChlZGdlcy5sZWZ0KSB7XG4gICAgbmV3Qm91bmRpbmdSZWN0LmxlZnQgKz0gY2xpZW50WDtcbiAgfVxuICBpZiAoZWRnZXMucmlnaHQpIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QucmlnaHQgKz0gY2xpZW50WDtcbiAgfVxuICBuZXdCb3VuZGluZ1JlY3QuaGVpZ2h0ID0gbmV3Qm91bmRpbmdSZWN0LmJvdHRvbSAtIG5ld0JvdW5kaW5nUmVjdC50b3A7XG4gIG5ld0JvdW5kaW5nUmVjdC53aWR0aCA9IG5ld0JvdW5kaW5nUmVjdC5yaWdodCAtIG5ld0JvdW5kaW5nUmVjdC5sZWZ0O1xuXG4gIHJldHVybiBuZXdCb3VuZGluZ1JlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRSZWN0KFxuICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICBnaG9zdEVsZW1lbnRQb3NpdGlvbmluZzogc3RyaW5nXG4pOiBCb3VuZGluZ1JlY3RhbmdsZSB7XG4gIGxldCB0cmFuc2xhdGVYID0gMDtcbiAgbGV0IHRyYW5zbGF0ZVkgPSAwO1xuICBjb25zdCBzdHlsZSA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZTtcbiAgY29uc3QgdHJhbnNmb3JtUHJvcGVydGllcyA9IFtcbiAgICAndHJhbnNmb3JtJyxcbiAgICAnLW1zLXRyYW5zZm9ybScsXG4gICAgJy1tb3otdHJhbnNmb3JtJyxcbiAgICAnLW8tdHJhbnNmb3JtJ1xuICBdO1xuICBjb25zdCB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1Qcm9wZXJ0aWVzXG4gICAgLm1hcChwcm9wZXJ0eSA9PiBzdHlsZVtwcm9wZXJ0eV0pXG4gICAgLmZpbmQodmFsdWUgPT4gISF2YWx1ZSk7XG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtLmluY2x1ZGVzKCd0cmFuc2xhdGUnKSkge1xuICAgIHRyYW5zbGF0ZVggPSB0cmFuc2Zvcm0ucmVwbGFjZSgvLip0cmFuc2xhdGVcXCgoLiopcHgsICguKilweFxcKS4qLywgJyQxJyk7XG4gICAgdHJhbnNsYXRlWSA9IHRyYW5zZm9ybS5yZXBsYWNlKC8uKnRyYW5zbGF0ZVxcKCguKilweCwgKC4qKXB4XFwpLiovLCAnJDInKTtcbiAgfVxuXG4gIGlmIChnaG9zdEVsZW1lbnRQb3NpdGlvbmluZyA9PT0gJ2Fic29sdXRlJykge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICB3aWR0aDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgdG9wOiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gdHJhbnNsYXRlWSxcbiAgICAgIGJvdHRvbTpcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArXG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLVxuICAgICAgICB0cmFuc2xhdGVZLFxuICAgICAgbGVmdDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgLSB0cmFuc2xhdGVYLFxuICAgICAgcmlnaHQ6XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArXG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC1cbiAgICAgICAgdHJhbnNsYXRlWFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgICAgd2lkdGg6IGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRyYW5zbGF0ZVksXG4gICAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSB0cmFuc2xhdGVZLFxuICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0cmFuc2xhdGVYLFxuICAgICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtIHRyYW5zbGF0ZVgsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZGluZ1koe1xuICBjbGllbnRZLFxuICByZWN0XG59OiB7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgcmVjdDogQ2xpZW50UmVjdDtcbn0pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNsaWVudFkgPj0gcmVjdC50b3AgJiYgY2xpZW50WSA8PSByZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZGluZ1goe1xuICBjbGllbnRYLFxuICByZWN0XG59OiB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgcmVjdDogQ2xpZW50UmVjdDtcbn0pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNsaWVudFggPj0gcmVjdC5sZWZ0ICYmIGNsaWVudFggPD0gcmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gZ2V0UmVzaXplRWRnZXMoe1xuICBjbGllbnRYLFxuICBjbGllbnRZLFxuICBlbG0sXG4gIGFsbG93ZWRFZGdlcyxcbiAgY3Vyc29yUHJlY2lzaW9uXG59OiB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBlbG06IEVsZW1lbnRSZWY7XG4gIGFsbG93ZWRFZGdlczogRWRnZXM7XG4gIGN1cnNvclByZWNpc2lvbjogbnVtYmVyO1xufSk6IEVkZ2VzIHtcbiAgY29uc3QgZWxtUG9zaXRpb246IENsaWVudFJlY3QgPSBlbG0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZWRnZXM6IEVkZ2VzID0ge307XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy5sZWZ0ICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFgsIGVsbVBvc2l0aW9uLmxlZnQsIGN1cnNvclByZWNpc2lvbikgJiZcbiAgICBpc1dpdGhpbkJvdW5kaW5nWSh7IGNsaWVudFksIHJlY3Q6IGVsbVBvc2l0aW9uIH0pXG4gICkge1xuICAgIGVkZ2VzLmxlZnQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy5yaWdodCAmJlxuICAgIGlzTnVtYmVyQ2xvc2VUbyhjbGllbnRYLCBlbG1Qb3NpdGlvbi5yaWdodCwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdZKHsgY2xpZW50WSwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMucmlnaHQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy50b3AgJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WSwgZWxtUG9zaXRpb24udG9wLCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1goeyBjbGllbnRYLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy50b3AgPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy5ib3R0b20gJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WSwgZWxtUG9zaXRpb24uYm90dG9tLCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1goeyBjbGllbnRYLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy5ib3R0b20gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6ZUN1cnNvcnMge1xuICB0b3BMZWZ0OiBzdHJpbmc7XG4gIHRvcFJpZ2h0OiBzdHJpbmc7XG4gIGJvdHRvbUxlZnQ6IHN0cmluZztcbiAgYm90dG9tUmlnaHQ6IHN0cmluZztcbiAgbGVmdE9yUmlnaHQ6IHN0cmluZztcbiAgdG9wT3JCb3R0b206IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9SRVNJWkVfQ1VSU09SUzogUmVzaXplQ3Vyc29ycyA9IE9iamVjdC5mcmVlemUoe1xuICB0b3BMZWZ0OiAnbnctcmVzaXplJyxcbiAgdG9wUmlnaHQ6ICduZS1yZXNpemUnLFxuICBib3R0b21MZWZ0OiAnc3ctcmVzaXplJyxcbiAgYm90dG9tUmlnaHQ6ICdzZS1yZXNpemUnLFxuICBsZWZ0T3JSaWdodDogJ2NvbC1yZXNpemUnLFxuICB0b3BPckJvdHRvbTogJ3Jvdy1yZXNpemUnXG59KTtcblxuZnVuY3Rpb24gZ2V0UmVzaXplQ3Vyc29yKGVkZ2VzOiBFZGdlcywgY3Vyc29yczogUmVzaXplQ3Vyc29ycyk6IHN0cmluZyB7XG4gIGlmIChlZGdlcy5sZWZ0ICYmIGVkZ2VzLnRvcCkge1xuICAgIHJldHVybiBjdXJzb3JzLnRvcExlZnQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMucmlnaHQgJiYgZWRnZXMudG9wKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMudG9wUmlnaHQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMubGVmdCAmJiBlZGdlcy5ib3R0b20pIHtcbiAgICByZXR1cm4gY3Vyc29ycy5ib3R0b21MZWZ0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLnJpZ2h0ICYmIGVkZ2VzLmJvdHRvbSkge1xuICAgIHJldHVybiBjdXJzb3JzLmJvdHRvbVJpZ2h0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLmxlZnQgfHwgZWRnZXMucmlnaHQpIHtcbiAgICByZXR1cm4gY3Vyc29ycy5sZWZ0T3JSaWdodDtcbiAgfSBlbHNlIGlmIChlZGdlcy50b3AgfHwgZWRnZXMuYm90dG9tKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMudG9wT3JCb3R0b207XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVkZ2VzRGlmZih7XG4gIGVkZ2VzLFxuICBpbml0aWFsUmVjdGFuZ2xlLFxuICBuZXdSZWN0YW5nbGVcbn06IHtcbiAgZWRnZXM6IEVkZ2VzO1xuICBpbml0aWFsUmVjdGFuZ2xlOiBCb3VuZGluZ1JlY3RhbmdsZTtcbiAgbmV3UmVjdGFuZ2xlOiBCb3VuZGluZ1JlY3RhbmdsZTtcbn0pOiBFZGdlcyB7XG4gIGNvbnN0IGVkZ2VzRGlmZjogRWRnZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoZWRnZXMpLmZvckVhY2goZWRnZSA9PiB7XG4gICAgZWRnZXNEaWZmW2VkZ2VdID0gKG5ld1JlY3RhbmdsZVtlZGdlXSB8fCAwKSAtIChpbml0aWFsUmVjdGFuZ2xlW2VkZ2VdIHx8IDApO1xuICB9KTtcbiAgcmV0dXJuIGVkZ2VzRGlmZjtcbn1cblxuY29uc3QgUkVTSVpFX0FDVElWRV9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1hY3RpdmUnO1xuY29uc3QgUkVTSVpFX0xFRlRfSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtbGVmdC1ob3Zlcic7XG5jb25zdCBSRVNJWkVfUklHSFRfSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtcmlnaHQtaG92ZXInO1xuY29uc3QgUkVTSVpFX1RPUF9IT1ZFUl9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS10b3AtaG92ZXInO1xuY29uc3QgUkVTSVpFX0JPVFRPTV9IT1ZFUl9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1ib3R0b20taG92ZXInO1xuY29uc3QgUkVTSVpFX0dIT1NUX0VMRU1FTlRfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtZ2hvc3QtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBNT1VTRV9NT1ZFX1RIUk9UVExFX01TOiBudW1iZXIgPSA1MDtcblxuLyoqXG4gKiBQbGFjZSB0aGlzIG9uIGFuIGVsZW1lbnQgdG8gbWFrZSBpdCByZXNpemFibGUuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXZcbiAqICAgbXdsUmVzaXphYmxlXG4gKiAgIFtyZXNpemVFZGdlc109XCJ7Ym90dG9tOiB0cnVlLCByaWdodDogdHJ1ZSwgdG9wOiB0cnVlLCBsZWZ0OiB0cnVlfVwiXG4gKiAgIFtlbmFibGVHaG9zdFJlc2l6ZV09XCJ0cnVlXCI+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsUmVzaXphYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggcmVzaXplIGV2ZW50LiBSZXR1cm4gYHRydWVgIHRvIGFsbG93IHRoZSByZXNpemUgZXZlbnQgdG8gcHJvcGFnYXRlIG9yIGBmYWxzZWAgdG8gY2FuY2VsIGl0XG4gICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZVJlc2l6ZTogKHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGVkZ2VzIHRoYXQgYW4gZWxlbWVudCBjYW4gYmUgcmVzaXplZCBmcm9tLiBQYXNzIGFuIG9iamVjdCBsaWtlIGB7dG9wOiB0cnVlLCBib3R0b206IGZhbHNlfWAuIEJ5IGRlZmF1bHQgbm8gZWRnZXMgY2FuIGJlIHJlc2l6ZWQuXG4gICAqIEBkZXByZWNhdGVkIHVzZSBhIHJlc2l6ZSBoYW5kbGUgaW5zdGVhZCB0aGF0IHBvc2l0aW9ucyBpdHNlbGYgdG8gdGhlIHNpZGUgb2YgdGhlIGVsZW1lbnQgeW91IHdvdWxkIGxpa2UgdG8gcmVzaXplXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVFZGdlczogRWRnZXMgPSB7fTtcblxuICAvKipcbiAgICogU2V0IHRvIGB0cnVlYCB0byBlbmFibGUgYSB0ZW1wb3JhcnkgcmVzaXppbmcgZWZmZWN0IG9mIHRoZSBlbGVtZW50IGluIGJldHdlZW4gdGhlIGByZXNpemVTdGFydGAgYW5kIGByZXNpemVFbmRgIGV2ZW50cy5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZUdob3N0UmVzaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgc25hcCBncmlkIHRoYXQgcmVzaXplIGV2ZW50cyB3aWxsIGJlIGxvY2tlZCB0by5cbiAgICpcbiAgICogZS5nLiB0byBvbmx5IGFsbG93IHRoZSBlbGVtZW50IHRvIGJlIHJlc2l6ZWQgZXZlcnkgMTBweCBzZXQgaXQgdG8gYHtsZWZ0OiAxMCwgcmlnaHQ6IDEwfWBcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZVNuYXBHcmlkOiBFZGdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgbW91c2UgY3Vyc29ycyB0aGF0IHdpbGwgYmUgc2V0IG9uIHRoZSByZXNpemUgZWRnZXNcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZUN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMgPSBERUZBVUxUX1JFU0laRV9DVVJTT1JTO1xuXG4gIC8qKlxuICAgKiBNb3VzZSBvdmVyIHRoaWNrbmVzcyB0byBhY3RpdmUgY3Vyc29yLlxuICAgKiBAZGVwcmVjYXRlZCBpbnZhbGlkIHdoZW4geW91IG1pZ3JhdGUgdG8gdXNlIHJlc2l6ZSBoYW5kbGVzIGluc3RlYWQgb2Ygc2V0dGluZyByZXNpemVFZGdlcyBvbiB0aGUgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgcmVzaXplQ3Vyc29yUHJlY2lzaW9uOiBudW1iZXIgPSAzO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIHBvc2l0aW9uaW5nIG9mIHRoZSBnaG9zdCBlbGVtZW50IChjYW4gYmUgZml4ZWQgb3IgYWJzb2x1dGUpXG4gICAqL1xuICBASW5wdXQoKSBnaG9zdEVsZW1lbnRQb3NpdGlvbmluZzogJ2ZpeGVkJyB8ICdhYnNvbHV0ZScgPSAnZml4ZWQnO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBlbGVtZW50cyB0byBiZSByZXNpemVkIHRvIG5lZ2F0aXZlIGRpbWVuc2lvbnNcbiAgICovXG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmVSZXNpemVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBtb3VzZSBpcyBwcmVzc2VkIGFuZCBhIHJlc2l6ZSBldmVudCBpcyBhYm91dCB0byBiZWdpbi4gYCRldmVudGAgaXMgYSBgUmVzaXplRXZlbnRgIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSByZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhcyB0aGUgbW91c2UgaXMgZHJhZ2dlZCBhZnRlciBhIHJlc2l6ZSBldmVudCBoYXMgYmVndW4uIGAkZXZlbnRgIGlzIGEgYFJlc2l6ZUV2ZW50YCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVzaXppbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIG1vdXNlIGlzIHJlbGVhc2VkIGFmdGVyIGEgcmVzaXplIGV2ZW50LiBgJGV2ZW50YCBpcyBhIGBSZXNpemVFdmVudGAgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlc2l6ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZXVwID0gbmV3IFN1YmplY3Q8e1xuICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgZWRnZXM/OiBFZGdlcztcbiAgfT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHVibGljIG1vdXNlZG93biA9IG5ldyBTdWJqZWN0PHtcbiAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgY2xpZW50WTogbnVtYmVyO1xuICAgIGVkZ2VzPzogRWRnZXM7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZW1vdmUgPSBuZXcgU3ViamVjdDx7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBlZGdlcz86IEVkZ2VzO1xuICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbiAgfT4oKTtcblxuICBwcml2YXRlIHBvaW50ZXJFdmVudExpc3RlbmVyczogUG9pbnRlckV2ZW50TGlzdGVuZXJzO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgcmVzaXplRWRnZXMkID0gbmV3IFN1YmplY3Q8RWRnZXM+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJzID0gUG9pbnRlckV2ZW50TGlzdGVuZXJzLmdldEluc3RhbmNlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICB6b25lXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBUT0RPIC0gdXNlIHNvbWUgZmFuY3kgT2JzZXJ2YWJsZS5tZXJnZSdzIGZvciB0aGlzXG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlckRvd25cbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XG4gICAgICAgIHRoaXMubW91c2Vkb3duLm5leHQoeyBjbGllbnRYLCBjbGllbnRZIH0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVycy5wb2ludGVyTW92ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoeyBjbGllbnRYLCBjbGllbnRZLCBldmVudCB9KSA9PiB7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlLm5leHQoeyBjbGllbnRYLCBjbGllbnRZLCBldmVudCB9KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlclVwXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICB0aGlzLm1vdXNldXAubmV4dCh7IGNsaWVudFgsIGNsaWVudFkgfSk7XG4gICAgICB9KTtcblxuICAgIGxldCBjdXJyZW50UmVzaXplOiB7XG4gICAgICBlZGdlczogRWRnZXM7XG4gICAgICBzdGFydGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY3VycmVudFJlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY2xvbmVkTm9kZT86IEhUTUxFbGVtZW50O1xuICAgIH0gfCBudWxsO1xuXG4gICAgY29uc3QgcmVtb3ZlR2hvc3RFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRSZXNpemUgJiYgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlKSB7XG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFJlc2l6ZUN1cnNvcnMgPSAoKTogUmVzaXplQ3Vyc29ycyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5ERUZBVUxUX1JFU0laRV9DVVJTT1JTLFxuICAgICAgICAuLi50aGlzLnJlc2l6ZUN1cnNvcnNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlTW92ZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5tb3VzZW1vdmUucGlwZShzaGFyZSgpKTtcblxuICAgIG1vdXNlTW92ZS5waXBlKGZpbHRlcigoKSA9PiAhIWN1cnJlbnRSZXNpemUpKS5zdWJzY3JpYmUoKHsgZXZlbnQgfSkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVzaXplRWRnZXMkXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMucmVzaXplRWRnZXMpLFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVkZ2VzICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc2l6ZUVkZ2VzKS5zb21lKGVkZ2UgPT4gISF0aGlzLnJlc2l6ZUVkZ2VzW2VkZ2VdKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAobGVnYWN5UmVzaXplRWRnZXNFbmFibGVkID0+XG4gICAgICAgICAgbGVnYWN5UmVzaXplRWRnZXNFbmFibGVkID8gbW91c2VNb3ZlIDogRU1QVFlcbiAgICAgICAgKSxcbiAgICAgICAgYXVkaXRUaW1lKE1PVVNFX01PVkVfVEhST1RUTEVfTVMpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVFZGdlczogRWRnZXMgPSBnZXRSZXNpemVFZGdlcyh7XG4gICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgIGVsbTogdGhpcy5lbG0sXG4gICAgICAgICAgYWxsb3dlZEVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzLFxuICAgICAgICAgIGN1cnNvclByZWNpc2lvbjogdGhpcy5yZXNpemVDdXJzb3JQcmVjaXNpb25cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc2l6ZUN1cnNvcnMgPSBnZXRSZXNpemVDdXJzb3JzKCk7XG4gICAgICAgIGlmICghY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGdldFJlc2l6ZUN1cnNvcihyZXNpemVFZGdlcywgcmVzaXplQ3Vyc29ycyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgY3Vyc29yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEVsZW1lbnRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsbSxcbiAgICAgICAgICBSRVNJWkVfTEVGVF9IT1ZFUl9DTEFTUyxcbiAgICAgICAgICByZXNpemVFZGdlcy5sZWZ0ID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9SSUdIVF9IT1ZFUl9DTEFTUyxcbiAgICAgICAgICByZXNpemVFZGdlcy5yaWdodCA9PT0gdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsbSxcbiAgICAgICAgICBSRVNJWkVfVE9QX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLnRvcCA9PT0gdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsbSxcbiAgICAgICAgICBSRVNJWkVfQk9UVE9NX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLmJvdHRvbSA9PT0gdHJ1ZVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBtb3VzZWRyYWc6IE9ic2VydmFibGU8YW55PiA9IHRoaXMubW91c2Vkb3duXG4gICAgICAucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoc3RhcnRDb29yZHMgPT4ge1xuICAgICAgICAgIGZ1bmN0aW9uIGdldERpZmYobW92ZUNvb3JkczogeyBjbGllbnRYOiBudW1iZXI7IGNsaWVudFk6IG51bWJlciB9KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjbGllbnRYOiBtb3ZlQ29vcmRzLmNsaWVudFggLSBzdGFydENvb3Jkcy5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiBtb3ZlQ29vcmRzLmNsaWVudFkgLSBzdGFydENvb3Jkcy5jbGllbnRZXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGdldFNuYXBHcmlkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc25hcEdyaWQ6IENvb3JkaW5hdGUgPSB7IHg6IDEsIHk6IDEgfTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNpemUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplU25hcEdyaWQubGVmdCAmJiBjdXJyZW50UmVzaXplLmVkZ2VzLmxlZnQpIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC54ID0gK3RoaXMucmVzaXplU25hcEdyaWQubGVmdDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVNuYXBHcmlkLnJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5lZGdlcy5yaWdodFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC54ID0gK3RoaXMucmVzaXplU25hcEdyaWQucmlnaHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGhpcy5yZXNpemVTbmFwR3JpZC50b3AgJiYgY3VycmVudFJlc2l6ZS5lZGdlcy50b3ApIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC55ID0gK3RoaXMucmVzaXplU25hcEdyaWQudG9wO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU25hcEdyaWQuYm90dG9tICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5lZGdlcy5ib3R0b21cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc25hcEdyaWQueSA9ICt0aGlzLnJlc2l6ZVNuYXBHcmlkLmJvdHRvbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc25hcEdyaWQ7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGdldEdyaWQoXG4gICAgICAgICAgICBjb29yZHM6IHsgY2xpZW50WDogbnVtYmVyOyBjbGllbnRZOiBudW1iZXIgfSxcbiAgICAgICAgICAgIHNuYXBHcmlkOiBDb29yZGluYXRlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiBNYXRoLmNlaWwoY29vcmRzLmNsaWVudFggLyBzbmFwR3JpZC54KSxcbiAgICAgICAgICAgICAgeTogTWF0aC5jZWlsKGNvb3Jkcy5jbGllbnRZIC8gc25hcEdyaWQueSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1lcmdlKFxuICAgICAgICAgICAgbW91c2VNb3ZlLnBpcGUodGFrZSgxKSkucGlwZShtYXAoY29vcmRzID0+IFssIGNvb3Jkc10pKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZS5waXBlKHBhaXJ3aXNlKCkpXG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgoW3ByZXZpb3VzQ29vcmRzLCBuZXdDb29yZHNdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzID8gZ2V0RGlmZihwcmV2aW91c0Nvb3JkcykgOiBwcmV2aW91c0Nvb3JkcyxcbiAgICAgICAgICAgICAgICAgIGdldERpZmYobmV3Q29vcmRzKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKChbcHJldmlvdXNDb29yZHMsIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpb3VzQ29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IGdldFNuYXBHcmlkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNHcmlkOiBDb29yZGluYXRlID0gZ2V0R3JpZChcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgc25hcEdyaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyaWQ6IENvb3JkaW5hdGUgPSBnZXRHcmlkKG5ld0Nvb3Jkcywgc25hcEdyaWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzR3JpZC54ICE9PSBuZXdHcmlkLnggfHwgcHJldmlvdXNHcmlkLnkgIT09IG5ld0dyaWQueVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChbLCBuZXdDb29yZHNdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcEdyaWQ6IENvb3JkaW5hdGUgPSBnZXRTbmFwR3JpZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBjbGllbnRYOlxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5ld0Nvb3Jkcy5jbGllbnRYIC8gc25hcEdyaWQueCkgKiBzbmFwR3JpZC54LFxuICAgICAgICAgICAgICAgICAgY2xpZW50WTpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChuZXdDb29yZHMuY2xpZW50WSAvIHNuYXBHcmlkLnkpICogc25hcEdyaWQueVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwobWVyZ2UodGhpcy5tb3VzZXVwLCB0aGlzLm1vdXNlZG93bikpKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiAhIWN1cnJlbnRSZXNpemUpKTtcblxuICAgIG1vdXNlZHJhZ1xuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0TmV3Qm91bmRpbmdSZWN0YW5nbGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplIS5lZGdlcyxcbiAgICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKG5ld0JvdW5kaW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5hbGxvd05lZ2F0aXZlUmVzaXplcyB8fFxuICAgICAgICAgICAgISEoXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LndpZHRoICYmXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC5oZWlnaHQgPiAwICYmXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC53aWR0aCA+IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigobmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUmVzaXplXG4gICAgICAgICAgICA/IHRoaXMudmFsaWRhdGVSZXNpemUoe1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0LFxuICAgICAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFJlY3RhbmdsZTogY3VycmVudFJlc2l6ZSEuc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBuZXdCb3VuZGluZ1JlY3RcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgobmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSAmJiBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgICBgJHtuZXdCb3VuZGluZ1JlY3QuaGVpZ2h0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICBgJHtuZXdCb3VuZGluZ1JlY3Qud2lkdGh9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBgJHtuZXdCb3VuZGluZ1JlY3QudG9wfXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC5sZWZ0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2l6aW5nLmVtaXQoe1xuICAgICAgICAgICAgZWRnZXM6IGdldEVkZ2VzRGlmZih7XG4gICAgICAgICAgICAgIGVkZ2VzOiBjdXJyZW50UmVzaXplIS5lZGdlcyxcbiAgICAgICAgICAgICAgaW5pdGlhbFJlY3RhbmdsZTogY3VycmVudFJlc2l6ZSEuc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UmVzaXplIS5jdXJyZW50UmVjdCA9IG5ld0JvdW5kaW5nUmVjdDtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tb3VzZWRvd25cbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgY2xpZW50WCwgY2xpZW50WSwgZWRnZXMgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBlZGdlcyB8fFxuICAgICAgICAgICAgZ2V0UmVzaXplRWRnZXMoe1xuICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICBlbG06IHRoaXMuZWxtLFxuICAgICAgICAgICAgICBhbGxvd2VkRWRnZXM6IHRoaXMucmVzaXplRWRnZXMsXG4gICAgICAgICAgICAgIGN1cnNvclByZWNpc2lvbjogdGhpcy5yZXNpemVDdXJzb3JQcmVjaXNpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGVkZ2VzOiBFZGdlcykgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhlZGdlcykubGVuZ3RoID4gMDtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGVkZ2VzOiBFZGdlcykgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgIHJlbW92ZUdob3N0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUgPSBnZXRFbGVtZW50UmVjdChcbiAgICAgICAgICB0aGlzLmVsbSxcbiAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudFBvc2l0aW9uaW5nXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRSZXNpemUgPSB7XG4gICAgICAgICAgZWRnZXMsXG4gICAgICAgICAgc3RhcnRpbmdSZWN0LFxuICAgICAgICAgIGN1cnJlbnRSZWN0OiBzdGFydGluZ1JlY3RcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzaXplQ3Vyc29ycyA9IGdldFJlc2l6ZUN1cnNvcnMoKTtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gZ2V0UmVzaXplQ3Vyc29yKGN1cnJlbnRSZXNpemUuZWRnZXMsIHJlc2l6ZUN1cnNvcnMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCBjdXJzb3IpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsbSwgUkVTSVpFX0FDVElWRV9DTEFTUywgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUdob3N0UmVzaXplKSB7XG4gICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICdoaWRkZW4nXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50UG9zaXRpb25pbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC5sZWZ0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3QudG9wfXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3QuaGVpZ2h0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC53aWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnY3Vyc29yJyxcbiAgICAgICAgICAgIGdldFJlc2l6ZUN1cnNvcihjdXJyZW50UmVzaXplLmVkZ2VzLCByZXNpemVDdXJzb3JzKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgIFJFU0laRV9HSE9TVF9FTEVNRU5UX0NMQVNTXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUhLnNjcm9sbFRvcCA9IGN1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0XG4gICAgICAgICAgICAuc2Nyb2xsVG9wIGFzIG51bWJlcjtcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUhLnNjcm9sbExlZnQgPSBjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdFxuICAgICAgICAgICAgLnNjcm9sbExlZnQgYXMgbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzaXplU3RhcnQuZW1pdCh7XG4gICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgZWRnZXMsXG4gICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IHN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBzdGFydGluZ1JlY3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVjdGFuZ2xlOiBnZXROZXdCb3VuZGluZ1JlY3RhbmdsZShzdGFydGluZ1JlY3QsIHt9LCAwLCAwKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tb3VzZXVwLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsIFJFU0laRV9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICcnKTtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNpemVFbmQuZW1pdCh7XG4gICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZTogY3VycmVudFJlc2l6ZSEuY3VycmVudFJlY3RcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5jdXJyZW50UmVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgICAgIGN1cnJlbnRSZXNpemUgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5yZXNpemVFZGdlcykge1xuICAgICAgdGhpcy5yZXNpemVFZGdlcyQubmV4dCh0aGlzLnJlc2l6ZUVkZ2VzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gYnJvd3NlciBjaGVjayBmb3IgYW5ndWxhciB1bml2ZXJzYWwsIGJlY2F1c2UgaXQgZG9lc24ndCBrbm93IHdoYXQgZG9jdW1lbnQgaXNcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJycpO1xuICAgIH1cbiAgICB0aGlzLm1vdXNlZG93bi5jb21wbGV0ZSgpO1xuICAgIHRoaXMubW91c2V1cC5jb21wbGV0ZSgpO1xuICAgIHRoaXMubW91c2Vtb3ZlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5yZXNpemVFZGdlcyQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RWxlbWVudENsYXNzKGVsbTogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nLCBhZGQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoYWRkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsbS5uYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbG0ubmF0aXZlRWxlbWVudCwgbmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFBvaW50ZXJFdmVudExpc3RlbmVycyB7XG4gIHB1YmxpYyBwb2ludGVyRG93bjogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwdWJsaWMgcG9pbnRlck1vdmU6IE9ic2VydmFibGU8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT47XG5cbiAgcHVibGljIHBvaW50ZXJVcDogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9pbnRlckV2ZW50TGlzdGVuZXJzOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHpvbmU6IE5nWm9uZVxuICApOiBQb2ludGVyRXZlbnRMaXN0ZW5lcnMge1xuICAgIGlmICghUG9pbnRlckV2ZW50TGlzdGVuZXJzLmluc3RhbmNlKSB7XG4gICAgICBQb2ludGVyRXZlbnRMaXN0ZW5lcnMuaW5zdGFuY2UgPSBuZXcgUG9pbnRlckV2ZW50TGlzdGVuZXJzKFxuICAgICAgICByZW5kZXJlcixcbiAgICAgICAgem9uZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFBvaW50ZXJFdmVudExpc3RlbmVycy5pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMucG9pbnRlckRvd24gPSBuZXcgT2JzZXJ2YWJsZShcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT4pID0+IHtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlTW91c2VEb3duOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaFN0YXJ0OiAoKSA9PiB2b2lkO1xuXG4gICAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VEb3duID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaFN0YXJ0ID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZURvd24oKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoU3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICB0aGlzLnBvaW50ZXJNb3ZlID0gbmV3IE9ic2VydmFibGUoXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+KSA9PiB7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZU1vdXNlTW92ZTogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlVG91Y2hNb3ZlOiAoKSA9PiB2b2lkO1xuXG4gICAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VNb3ZlID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaE1vdmUgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VNb3ZlKCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaE1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICB0aGlzLnBvaW50ZXJVcCA9IG5ldyBPYnNlcnZhYmxlKFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxQb2ludGVyRXZlbnRDb29yZGluYXRlPikgPT4ge1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVNb3VzZVVwOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaEVuZDogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlVG91Y2hDYW5jZWw6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZVVwID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgICAgIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hFbmQgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hDYW5jZWwgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlVXAoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoRW5kKCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaENhbmNlbCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19