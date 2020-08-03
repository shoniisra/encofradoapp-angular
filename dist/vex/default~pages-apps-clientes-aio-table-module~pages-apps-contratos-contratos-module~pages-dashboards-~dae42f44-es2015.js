(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~dae42f44"],{

/***/ "./node_modules/@angular/cdk/esm2015/accordion.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/accordion.js ***!
  \********************************************************/
/*! exports provided: CdkAccordionItem, CdkAccordion, CdkAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion.
 * @type {?}
 */
let nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
    constructor() {
        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */
        this.id = `cdk-accordion-${nextId++}`;
        this._multi = false;
    }
    /**
     * Whether the accordion should allow multiple expanded accordion items simultaneously.
     * @return {?}
     */
    get multi() { return this._multi; }
    /**
     * @param {?} multi
     * @return {?}
     */
    set multi(multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(multi); }
    /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    openAll() {
        this._openCloseAll(true);
    }
    /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    closeAll() {
        this._openCloseAll(false);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _openCloseAll(expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
CdkAccordion.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion',
            },] },
];
CdkAccordion.propDecorators = {
    multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
let nextId$1 = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _expansionDispatcher
     */
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */
        this.id = `cdk-accordion-child-${nextId$1++}`;
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */
        this._removeUniqueSelectionListener = (/**
         * @return {?}
         */
        () => { });
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((/**
             * @param {?} id
             * @param {?} accordionId
             * @return {?}
             */
            (id, accordionId) => {
                if (this.accordion && !this.accordion.multi &&
                    this.accordion.id === accordionId && this.id !== id) {
                    this.expanded = false;
                }
            }));
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /**
     * Whether the AccordionItem is expanded.
     * @return {?}
     */
    get expanded() { return this._expanded; }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(expanded);
        // Only emit events and update the internal value if the value changes.
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 * @type {?}
                 */
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the AccordionItem is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(disabled); }
    /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe((/**
         * @param {?} expanded
         * @return {?}
         */
        expanded => {
            // Only change expanded state if item is enabled
            if (!this.disabled) {
                this.expanded = expanded;
            }
        }));
    }
}
CdkAccordionItem.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                    // to the same accordion.
                    { provide: CdkAccordion, useValue: ɵ0 },
                ],
            },] },
];
/** @nocollapse */
CdkAccordionItem.ctorParameters = () => [
    { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"] }
];
CdkAccordionItem.propDecorators = {
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkAccordionModule {
}
CdkAccordionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: [CdkAccordion, CdkAccordionItem],
                declarations: [CdkAccordion, CdkAccordionItem],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=accordion.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/tree.js":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/tree.js ***!
  \***************************************************/
/*! exports provided: BaseTreeControl, FlatTreeControl, NestedTreeControl, CdkNestedTreeNode, CdkTreeNodeOutletContext, CdkTreeNodeDef, CdkTreeNodePadding, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet, CdkTree, CdkTreeNode, getTreeNoValidDataSourceError, getTreeMultipleDefaultNodeDefsError, getTreeMissingMatchingNodeDefError, getTreeControlMissingError, getTreeControlFunctionsMissingError, CdkTreeModule, CdkTreeNodeToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function() { return BaseTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function() { return FlatTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function() { return NestedTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function() { return CdkNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function() { return CdkTreeNodeOutletContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function() { return CdkTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function() { return CdkTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function() { return CDK_TREE_NODE_OUTLET_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function() { return CdkTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTree", function() { return CdkTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function() { return CdkTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function() { return getTreeNoValidDataSourceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function() { return getTreeMultipleDefaultNodeDefsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function() { return getTreeMissingMatchingNodeDefError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function() { return getTreeControlMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function() { return getTreeControlFunctionsMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function() { return CdkTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function() { return CdkTreeNodeToggle; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
 * @abstract
 * @template T
 */
class BaseTreeControl {
    constructor() {
        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
    }
    /**
     * Toggles one single data node's expanded/collapsed state.
     * @param {?} dataNode
     * @return {?}
     */
    toggle(dataNode) {
        this.expansionModel.toggle(dataNode);
    }
    /**
     * Expands one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    expand(dataNode) {
        this.expansionModel.select(dataNode);
    }
    /**
     * Collapses one single data node.
     * @param {?} dataNode
     * @return {?}
     */
    collapse(dataNode) {
        this.expansionModel.deselect(dataNode);
    }
    /**
     * Whether a given data node is expanded or not. Returns true if the data node is expanded.
     * @param {?} dataNode
     * @return {?}
     */
    isExpanded(dataNode) {
        return this.expansionModel.isSelected(dataNode);
    }
    /**
     * Toggles a subtree rooted at `node` recursively.
     * @param {?} dataNode
     * @return {?}
     */
    toggleDescendants(dataNode) {
        this.expansionModel.isSelected(dataNode)
            ? this.collapseDescendants(dataNode)
            : this.expandDescendants(dataNode);
    }
    /**
     * Collapse all dataNodes in the tree.
     * @return {?}
     */
    collapseAll() {
        this.expansionModel.clear();
    }
    /**
     * Expands a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    expandDescendants(dataNode) {
        /** @type {?} */
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.select(...toBeProcessed);
    }
    /**
     * Collapses a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    collapseDescendants(dataNode) {
        /** @type {?} */
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.deselect(...toBeProcessed);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
 * @template T
 */
class FlatTreeControl extends BaseTreeControl {
    /**
     * Construct with flat tree data node functions getLevel and isExpandable.
     * @param {?} getLevel
     * @param {?} isExpandable
     */
    constructor(getLevel, isExpandable) {
        super();
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
    }
    /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     * @param {?} dataNode
     * @return {?}
     */
    getDescendants(dataNode) {
        /** @type {?} */
        const startIndex = this.dataNodes.indexOf(dataNode);
        /** @type {?} */
        const results = [];
        // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
        // The level of descendants of a tree node must be greater than the level of the given
        // tree node.
        // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
        // If we reach a node whose level is greater than the level of the tree node, we hit a
        // sibling of an ancestor.
        for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
        }
        return results;
    }
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     * @return {?}
     */
    expandAll() {
        this.expansionModel.select(...this.dataNodes);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
 * @template T
 */
class NestedTreeControl extends BaseTreeControl {
    /**
     * Construct with nested tree function getChildren.
     * @param {?} getChildren
     */
    constructor(getChildren) {
        super();
        this.getChildren = getChildren;
    }
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     * @return {?}
     */
    expandAll() {
        this.expansionModel.clear();
        /** @type {?} */
        const allNodes = this.dataNodes.reduce((/**
         * @param {?} accumulator
         * @param {?} dataNode
         * @return {?}
         */
        (accumulator, dataNode) => [...accumulator, ...this.getDescendants(dataNode), dataNode]), []);
        this.expansionModel.select(...allNodes);
    }
    /**
     * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
     * @param {?} dataNode
     * @return {?}
     */
    getDescendants(dataNode) {
        /** @type {?} */
        const descendants = [];
        this._getDescendants(descendants, dataNode);
        // Remove the node itself
        return descendants.splice(1);
    }
    /**
     * A helper function to get descendants recursively.
     * @protected
     * @param {?} descendants
     * @param {?} dataNode
     * @return {?}
     */
    _getDescendants(descendants, dataNode) {
        descendants.push(dataNode);
        /** @type {?} */
        const childrenNodes = this.getChildren(dataNode);
        if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => this._getDescendants(descendants, child)));
        }
        else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/** @type {?} */ (Boolean))))
                .subscribe((/**
             * @param {?} children
             * @return {?}
             */
            children => {
                for (const child of children) {
                    this._getDescendants(descendants, child);
                }
            }));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
const CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
class CdkTreeNodeOutlet {
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
CdkTreeNodeOutlet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[cdkTreeNodeOutlet]'
            },] },
];
/** @nocollapse */
CdkTreeNodeOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Context provided to the tree node component.
 * @template T
 */
class CdkTreeNodeOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 * @template T
 */
class CdkTreeNodeDef {
    /**
     * \@docs-private
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
CdkTreeNodeDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[cdkTreeNodeDef]',
                inputs: [
                    'when: cdkTreeNodeDefWhen'
                ],
            },] },
];
/** @nocollapse */
CdkTreeNodeDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns an error to be thrown when there is no usable data.
 * \@docs-private
 * @return {?}
 */
function getTreeNoValidDataSourceError() {
    return Error(`A valid data source must be provided.`);
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTreeMultipleDefaultNodeDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * \@docs-private
 * @return {?}
 */
function getTreeMissingMatchingNodeDefError() {
    return Error(`Could not find a matching node definition for the provided node data.`);
}
/**
 * Returns an error to be thrown when there are tree control.
 * \@docs-private
 * @return {?}
 */
function getTreeControlMissingError() {
    return Error(`Could not find a tree control for the tree.`);
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * \@docs-private
 * @return {?}
 */
function getTreeControlFunctionsMissingError() {
    return Error(`Could not find functions for nested/flat tree in tree control.`);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 * @template T
 */
class CdkTree {
    /**
     * @param {?} _differs
     * @param {?} _changeDetectorRef
     */
    constructor(_differs, _changeDetectorRef) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Level of nodes
         */
        this._levels = new Map();
        // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
    }
    /**
     * Provides a stream containing the latest data array to render. Influenced by the tree's
     * stream of view window (what dataNodes are currently on screen).
     * Data source can be an observable of data array, or a data array to render.
     * @return {?}
     */
    get dataSource() { return this._dataSource; }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._dataDiffer = this._differs.find([]).create(this.trackBy);
        if (!this.treeControl) {
            throw getTreeControlMissingError();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._nodeOutlet.viewContainer.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof ((/** @type {?} */ (this._dataSource))).disconnect === 'function') {
            ((/** @type {?} */ (this.dataSource))).disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const defaultNodeDefs = this._nodeDefs.filter((/**
         * @param {?} def
         * @return {?}
         */
        def => !def.when));
        if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
        if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
        }
    }
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        if (this._dataSource && typeof ((/** @type {?} */ (this._dataSource))).disconnect === 'function') {
            ((/** @type {?} */ (this.dataSource))).disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        // Remove the all dataNodes if there is now no data source
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._observeRenderChanges();
        }
    }
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    _observeRenderChanges() {
        /** @type {?} */
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.renderNodeChanges(data)));
        }
        else {
            throw getTreeNoValidDataSourceError();
        }
    }
    /**
     * Check for changes made in the data and render each change (node added/removed/moved).
     * @param {?} data
     * @param {?=} dataDiffer
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
        /** @type {?} */
        const changes = dataDiffer.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation((/**
         * @param {?} item
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (item, adjustedPreviousIndex, currentIndex) => {
            if (item.previousIndex == null) {
                this.insertNode(data[(/** @type {?} */ (currentIndex))], (/** @type {?} */ (currentIndex)), viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (adjustedPreviousIndex)));
                this._levels.delete(item.item);
            }
            else {
                /** @type {?} */
                const view = viewContainer.get((/** @type {?} */ (adjustedPreviousIndex)));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        }));
        this._changeDetectorRef.detectChanges();
    }
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    _getNodeDef(data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        /** @type {?} */
        const nodeDef = this._nodeDefs.find((/**
         * @param {?} def
         * @return {?}
         */
        def => def.when && def.when(i, data))) || this._defaultNodeDef;
        if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    }
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     * @param {?} nodeData
     * @param {?} index
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    insertNode(nodeData, index, viewContainer, parentData) {
        /** @type {?} */
        const node = this._getNodeDef(nodeData, index);
        // Node context that will be provided to created embedded view
        /** @type {?} */
        const context = new CdkTreeNodeOutletContext(nodeData);
        // If the tree is flat tree, then use the `getLevel` function in flat tree control
        // Otherwise, use the level of parent node.
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level = (/** @type {?} */ (this._levels.get(parentData))) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(nodeData, context.level);
        // Use default tree nodeOutlet, or nested node's nodeOutlet
        /** @type {?} */
        const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        // Set the data to just created `CdkTreeNode`.
        // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
        //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    }
}
CdkTree.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{selector: 'cdk-tree',
                exportAs: 'cdkTree',
                template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'cdk-tree',
                    'role': 'tree',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            },] },
];
/** @nocollapse */
CdkTree.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
CdkTree.propDecorators = {
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    treeControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkTreeNodeOutlet, { static: true },] }],
    _nodeDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkTreeNodeDef,] }]
};
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 * @template T
 */
class CdkTreeNode {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     */
    constructor(_elementRef, _tree) {
        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */
        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */
        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode = (/** @type {?} */ (this));
    }
    /**
     * The tree node's data.
     * @return {?}
     */
    get data() { return this._data; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        if (value !== this._data) {
            this._data = value;
            this._setRoleFromData();
            this._dataChanges.next();
        }
    }
    /**
     * @return {?}
     */
    get isExpanded() {
        return this._tree.treeControl.isExpanded(this._data);
    }
    /**
     * @return {?}
     */
    get level() {
        return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // If this is the last tree node being destroyed,
        // clear out the reference to avoid leaking memory.
        if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Focuses the menu item. Implements for FocusableOption.
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /**
     * @protected
     * @return {?}
     */
    _setRoleFromData() {
        if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
        }
        else {
            if (!this._tree.treeControl.getChildren) {
                throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */
            const childrenNodes = this._tree.treeControl.getChildren(this._data);
            if (Array.isArray(childrenNodes)) {
                this._setRoleFromChildren((/** @type {?} */ (childrenNodes)));
            }
            else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
                childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed))
                    .subscribe((/**
                 * @param {?} children
                 * @return {?}
                 */
                children => this._setRoleFromChildren(children)));
            }
        }
    }
    /**
     * @protected
     * @param {?} children
     * @return {?}
     */
    _setRoleFromChildren(children) {
        this.role = children && children.length ? 'group' : 'treeitem';
    }
}
/**
 * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
 * in `CdkTree` and set the data to it.
 */
CdkTreeNode.mostRecentTreeNode = null;
CdkTreeNode.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: 'cdk-tree-node',
                exportAs: 'cdkTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'role === "treeitem" ? level : null',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node',
                },
            },] },
];
/** @nocollapse */
CdkTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: CdkTree }
];
CdkTreeNode.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * For example:
 *   ```html
 *   <cdk-nested-tree-node>
 *     {{node.name}}
 *     <ng-template cdkTreeNodeOutlet></ng-template>
 *   </cdk-nested-tree-node>
 *   ```
 * The children of node will be automatically added to `cdkTreeNodeOutlet`, the result dom will be
 * like this:
 *   ```html
 *   <cdk-nested-tree-node>
 *     {{node.name}}
 *      <cdk-nested-tree-node>{{child1.name}}</cdk-nested-tree-node>
 *      <cdk-nested-tree-node>{{child2.name}}</cdk-nested-tree-node>
 *   </cdk-nested-tree-node>
 *   ```
 * @template T
 */
class CdkNestedTreeNode extends CdkTreeNode {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} _differs
     */
    constructor(_elementRef, _tree, _differs) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this._differs = _differs;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
        }
        /** @type {?} */
        const childrenNodes = this._tree.treeControl.getChildren(this.data);
        if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes((/** @type {?} */ (childrenNodes)));
        }
        else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => this.updateChildrenNodes(result)));
        }
        this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateChildrenNodes()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._clear();
        super.ngOnDestroy();
    }
    /**
     * Add children dataNodes to the NodeOutlet
     * @protected
     * @param {?=} children
     * @return {?}
     */
    updateChildrenNodes(children) {
        /** @type {?} */
        const outlet = this._getNodeOutlet();
        if (children) {
            this._children = children;
        }
        if (outlet && this._children) {
            /** @type {?} */
            const viewContainer = outlet.viewContainer;
            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        }
        else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
        }
    }
    /**
     * Clear the children dataNodes.
     * @protected
     * @return {?}
     */
    _clear() {
        /** @type {?} */
        const outlet = this._getNodeOutlet();
        if (outlet) {
            outlet.viewContainer.clear();
            this._dataDiffer.diff([]);
        }
    }
    /**
     * Gets the outlet for the current node.
     * @private
     * @return {?}
     */
    _getNodeOutlet() {
        /** @type {?} */
        const outlets = this.nodeOutlet;
        // Note that since we use `descendants: true` on the query, we have to ensure
        // that we don't pick up the outlet of a child node by accident.
        return outlets && outlets.find((/**
         * @param {?} outlet
         * @return {?}
         */
        outlet => !outlet._node || outlet._node === this));
    }
}
CdkNestedTreeNode.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: 'cdk-nested-tree-node',
                exportAs: 'cdkNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node cdk-nested-tree-node',
                },
                providers: [
                    { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
                    { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
                ]
            },] },
];
/** @nocollapse */
CdkNestedTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: CdkTree },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
CdkNestedTreeNode.propDecorators = {
    nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkTreeNodeOutlet, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Regex used to split a string on its CSS units.
 * @type {?}
 */
const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 * @template T
 */
class CdkTreeNodePadding {
    /**
     * @param {?} _treeNode
     * @param {?} _tree
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _dir
     */
    constructor(_treeNode, _tree, _renderer, _element, _dir) {
        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */
        this.indentUnits = 'px';
        this._indent = 40;
        this._setPadding();
        if (_dir) {
            _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => this._setPadding(true)));
        }
        // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.
        _treeNode._dataChanges.subscribe((/**
         * @return {?}
         */
        () => this._setPadding()));
    }
    /**
     * The level of depth of the tree node. The padding will be `level * indent` pixels.
     * @return {?}
     */
    get level() { return this._level; }
    /**
     * @param {?} value
     * @return {?}
     */
    set level(value) {
        // Set to null as the fallback value so that _setPadding can fall back to the node level if the
        // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
        // they set 0 explicitly.
        this._level = (/** @type {?} */ (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null)));
        this._setPadding();
    }
    /**
     * The indent for each level. Can be a number or a CSS string.
     * Default number 40px from material design menu sub-menu spec.
     * @return {?}
     */
    get indent() { return this._indent; }
    /**
     * @param {?} indent
     * @return {?}
     */
    set indent(indent) {
        /** @type {?} */
        let value = indent;
        /** @type {?} */
        let units = 'px';
        if (typeof indent === 'string') {
            /** @type {?} */
            const parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
        }
        this.indentUnits = units;
        this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);
        this._setPadding();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * The padding indent value for the tree node. Returns a string with px numbers if not null.
     * @return {?}
     */
    _paddingIndent() {
        /** @type {?} */
        const nodeLevel = (this._treeNode.data && this._tree.treeControl.getLevel)
            ? this._tree.treeControl.getLevel(this._treeNode.data)
            : null;
        /** @type {?} */
        const level = this._level == null ? nodeLevel : this._level;
        return typeof level === 'number' ? `${level * this._indent}${this.indentUnits}` : null;
    }
    /**
     * @param {?=} forceChange
     * @return {?}
     */
    _setPadding(forceChange = false) {
        /** @type {?} */
        const padding = this._paddingIndent();
        if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            const element = this._element.nativeElement;
            /** @type {?} */
            const paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */
            const resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
            this._renderer.setStyle(element, paddingProp, padding);
            this._renderer.setStyle(element, resetProp, null);
            this._currentPadding = padding;
        }
    }
}
CdkTreeNodePadding.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[cdkTreeNodePadding]',
            },] },
];
/** @nocollapse */
CdkTreeNodePadding.ctorParameters = () => [
    { type: CdkTreeNode },
    { type: CdkTree },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkTreeNodePadding.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkTreeNodePadding',] }],
    indent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkTreeNodePaddingIndent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Node toggle to expand/collapse the node.
 * @template T
 */
class CdkTreeNodeToggle {
    /**
     * @param {?} _tree
     * @param {?} _treeNode
     */
    constructor(_tree, _treeNode) {
        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
    }
    /**
     * Whether expand/collapse the node recursively.
     * @return {?}
     */
    get recursive() { return this._recursive; }
    /**
     * @param {?} value
     * @return {?}
     */
    set recursive(value) { this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @param {?} event
     * @return {?}
     */
    _toggle(event) {
        this.recursive
            ? this._tree.treeControl.toggleDescendants(this._treeNode.data)
            : this._tree.treeControl.toggle(this._treeNode.data);
        event.stopPropagation();
    }
}
CdkTreeNodeToggle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{ selector: '[cdkTreeNodeToggle]' },] },
];
/** @nocollapse */
CdkTreeNodeToggle.ctorParameters = () => [
    { type: CdkTree },
    { type: CdkTreeNode }
];
CdkTreeNodeToggle.propDecorators = {
    recursive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkTreeNodeToggleRecursive',] }],
    _toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkNestedTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTreeNodeToggle,
    CdkTree,
    CdkTreeNode,
    CdkTreeNodeOutlet,
];
class CdkTreeModule {
}
CdkTreeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=tree.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/badge.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/badge.js ***!
  \*********************************************************/
/*! exports provided: MatBadgeModule, MatBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return MatBadgeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return MatBadge; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let nextId = 0;
// Boilerplate for applying mixins to MatBadge.
/**
 * \@docs-private
 */
class MatBadgeBase {
}
/** @type {?} */
const _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatBadgeBase);
/**
 * Directive to display a text badge.
 */
class MatBadge extends _MatBadgeMixinBase {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _ariaDescriber
     * @param {?} _renderer
     * @param {?=} _animationMode
     */
    constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        super();
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._ariaDescriber = _ariaDescriber;
        this._renderer = _renderer;
        this._animationMode = _animationMode;
        /**
         * Whether the badge has any content.
         */
        this._hasContent = false;
        this._color = 'primary';
        this._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */
        this.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */
        this.size = 'medium';
        /**
         * Unique id for the badge
         */
        this._id = nextId++;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            /** @type {?} */
            const nativeElement = _elementRef.nativeElement;
            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
                throw Error('matBadge must be attached to an element node.');
            }
        }
    }
    /**
     * The color of the badge. Can be `primary`, `accent`, or `warn`.
     * @return {?}
     */
    get color() { return this._color; }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._setColor(value);
        this._color = value;
    }
    /**
     * Whether the badge should overlap its contents or not
     * @return {?}
     */
    get overlap() { return this._overlap; }
    /**
     * @param {?} val
     * @return {?}
     */
    set overlap(val) {
        this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
    }
    /**
     * Message used to describe the decorated element via aria-describedby
     * @return {?}
     */
    get description() { return this._description; }
    /**
     * @param {?} newDescription
     * @return {?}
     */
    set description(newDescription) {
        if (newDescription !== this._description) {
            /** @type {?} */
            const badgeElement = this._badgeElement;
            this._updateHostAriaDescription(newDescription, this._description);
            this._description = newDescription;
            if (badgeElement) {
                newDescription ? badgeElement.setAttribute('aria-label', newDescription) :
                    badgeElement.removeAttribute('aria-label');
            }
        }
    }
    /**
     * Whether the badge is hidden.
     * @return {?}
     */
    get hidden() { return this._hidden; }
    /**
     * @param {?} val
     * @return {?}
     */
    set hidden(val) {
        this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
    }
    /**
     * Whether the badge is above the host or not
     * @return {?}
     */
    isAbove() {
        return this.position.indexOf('below') === -1;
    }
    /**
     * Whether the badge is after the host or not
     * @return {?}
     */
    isAfter() {
        return this.position.indexOf('before') === -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const contentChange = changes['content'];
        if (contentChange) {
            /** @type {?} */
            const value = contentChange.currentValue;
            this._hasContent = value != null && `${value}`.trim().length > 0;
            this._updateTextContent();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const badgeElement = this._badgeElement;
        if (badgeElement) {
            if (this.description) {
                this._ariaDescriber.removeDescription(badgeElement, this.description);
            }
            // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.
            if (this._renderer.destroyNode) {
                this._renderer.destroyNode(badgeElement);
            }
        }
    }
    /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     * @return {?}
     */
    getBadgeElement() {
        return this._badgeElement;
    }
    /**
     * Injects a span element into the DOM with the content.
     * @private
     * @return {?}
     */
    _updateTextContent() {
        if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
        }
        else {
            this._badgeElement.textContent = this.content;
        }
        return this._badgeElement;
    }
    /**
     * Creates the badge element
     * @private
     * @return {?}
     */
    _createBadgeElement() {
        /** @type {?} */
        const badgeElement = this._renderer.createElement('span');
        /** @type {?} */
        const activeClass = 'mat-badge-active';
        /** @type {?} */
        const contentClass = 'mat-badge-content';
        // Clear any existing badges which may have persisted from a server-side render.
        this._clearExistingBadges(contentClass);
        badgeElement.setAttribute('id', `mat-badge-content-${this._id}`);
        badgeElement.classList.add(contentClass);
        badgeElement.textContent = this.content;
        if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
        }
        if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
        }
        this._elementRef.nativeElement.appendChild(badgeElement);
        // animate in after insertion
        if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    badgeElement.classList.add(activeClass);
                }));
            }));
        }
        else {
            badgeElement.classList.add(activeClass);
        }
        return badgeElement;
    }
    /**
     * Sets the aria-label property on the element
     * @private
     * @param {?} newDescription
     * @param {?} oldDescription
     * @return {?}
     */
    _updateHostAriaDescription(newDescription, oldDescription) {
        // ensure content available before setting label
        /** @type {?} */
        const content = this._updateTextContent();
        if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
        }
        if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
        }
    }
    /**
     * Adds css theme class given the color to the component host
     * @private
     * @param {?} colorPalette
     * @return {?}
     */
    _setColor(colorPalette) {
        if (colorPalette !== this._color) {
            if (this._color) {
                this._elementRef.nativeElement.classList.remove(`mat-badge-${this._color}`);
            }
            if (colorPalette) {
                this._elementRef.nativeElement.classList.add(`mat-badge-${colorPalette}`);
            }
        }
    }
    /**
     * Clears any existing badges that might be left over from server-side rendering.
     * @private
     * @param {?} cssClass
     * @return {?}
     */
    _clearExistingBadges(cssClass) {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        let childCount = element.children.length;
        // Use a reverse while, because we'll be removing elements from the list as we're iterating.
        while (childCount--) {
            /** @type {?} */
            const currentChild = element.children[childCount];
            if (currentChild.classList.contains(cssClass)) {
                element.removeChild(currentChild);
            }
        }
    }
}
MatBadge.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                selector: '[matBadge]',
                inputs: ['disabled: matBadgeDisabled'],
                host: {
                    'class': 'mat-badge',
                    '[class.mat-badge-overlap]': 'overlap',
                    '[class.mat-badge-above]': 'isAbove()',
                    '[class.mat-badge-below]': '!isAbove()',
                    '[class.mat-badge-before]': '!isAfter()',
                    '[class.mat-badge-after]': 'isAfter()',
                    '[class.mat-badge-small]': 'size === "small"',
                    '[class.mat-badge-medium]': 'size === "medium"',
                    '[class.mat-badge-large]': 'size === "large"',
                    '[class.mat-badge-hidden]': 'hidden || !_hasContent',
                    '[class.mat-badge-disabled]': 'disabled',
                },
            },] },
];
/** @nocollapse */
MatBadge.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["AriaDescriber"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] }
];
MatBadge.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadgeColor',] }],
    overlap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadgeOverlap',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadgePosition',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadge',] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadgeDescription',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadgeSize',] }],
    hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matBadgeHidden',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatBadgeModule {
}
MatBadgeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]
                ],
                exports: [MatBadge],
                declarations: [MatBadge],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=badge.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/bottom-sheet.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/bottom-sheet.js ***!
  \****************************************************************/
/*! exports provided: MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function() { return MatBottomSheetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function() { return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function() { return MatBottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function() { return MAT_BOTTOM_SHEET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function() { return MatBottomSheetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function() { return MatBottomSheetContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function() { return matBottomSheetAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function() { return MatBottomSheetRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to access the data that was passed in to a bottom sheet.
 * @type {?}
 */
const MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatBottomSheetData');
/**
 * Configuration used when opening a bottom sheet.
 * @template D
 */
class MatBottomSheetConfig {
    constructor() {
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * Whether the bottom sheet has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Whether the user can use escape or clicking outside to close the bottom sheet.
         */
        this.disableClose = false;
        /**
         * Aria label to assign to the bottom sheet element.
         */
        this.ariaLabel = null;
        /**
         * Whether the bottom sheet should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // Note that this is disabled by default, because while the a11y recommendations are to focus
        // the first focusable element, doing so prevents screen readers from reading out the
        // rest of the bottom sheet content.
        /**
         * Whether the bottom sheet should focus the first focusable element on open.
         */
        this.autoFocus = false;
        /**
         * Whether the bottom sheet should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material bottom sheet.
 * @type {?}
 */
const matBottomSheetAnimations = {
    /**
     * Animation that shows and hides a bottom sheet.
     */
    bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].COMPLEX} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].ACCELERATION_CURVE}`)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].EXITING} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].DECELERATION_CURVE}`)),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar
/**
 * Internal component that wraps user-provided bottom sheet content.
 * \@docs-private
 */
class MatBottomSheetContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["BasePortalOutlet"] {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} _focusTrapFactory
     * @param {?} breakpointObserver
     * @param {?} document
     * @param {?} bottomSheetConfig
     */
    constructor(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document, bottomSheetConfig) {
        super();
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.bottomSheetConfig = bottomSheetConfig;
        /**
         * The state of the bottom sheet animations.
         */
        this._animationState = 'void';
        /**
         * Emits whenever the state of the animation changes.
         */
        this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Element that was focused before the bottom sheet was opened.
         */
        this._elementFocusedBeforeOpened = null;
        this._document = document;
        this._breakpointSubscription = breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge])
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium));
            this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large));
            this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge));
        }));
    }
    /**
     * Attach a component portal as content to this bottom sheet container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a template portal as content to this bottom sheet container.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /**
     * Begin animation of bottom sheet entrance into view.
     * @return {?}
     */
    enter() {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Begin animation of the bottom sheet exiting from view.
     * @return {?}
     */
    exit() {
        if (!this._destroyed) {
            this._animationState = 'hidden';
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
        this._destroyed = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onAnimationDone(event) {
        if (event.toState === 'hidden') {
            this._restoreFocus();
        }
        else if (event.toState === 'visible') {
            this._trapFocus();
        }
        this._animationStateChanged.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onAnimationStart(event) {
        this._animationStateChanged.emit(event);
    }
    /**
     * @private
     * @param {?} cssClass
     * @param {?} add
     * @return {?}
     */
    _toggleClass(cssClass, add) {
        /** @type {?} */
        const classList = this._elementRef.nativeElement.classList;
        add ? classList.add(cssClass) : classList.remove(cssClass);
    }
    /**
     * @private
     * @return {?}
     */
    _validatePortalAttached() {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setPanelClass() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        const panelClass = this.bottomSheetConfig.panelClass;
        if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            cssClass => element.classList.add(cssClass)));
        }
        else if (panelClass) {
            element.classList.add(panelClass);
        }
    }
    /**
     * Moves the focus inside the focus trap.
     * @private
     * @return {?}
     */
    _trapFocus() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(element);
        }
        if (this.bottomSheetConfig.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else {
            /** @type {?} */
            const activeElement = this._document.activeElement;
            // Otherwise ensure that focus is on the container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the bottom sheet already, because it's possible that the
            // consumer turned off `autoFocus` in order to move focus themselves.
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    /**
     * Restores focus to the element that was focused before the bottom sheet was opened.
     * @private
     * @return {?}
     */
    _restoreFocus() {
        /** @type {?} */
        const toFocus = this._elementFocusedBeforeOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /**
     * Saves a reference to the element that was focused before the bottom sheet was opened.
     * @private
     * @return {?}
     */
    _savePreviouslyFocusedElement() {
        this._elementFocusedBeforeOpened = (/** @type {?} */ (this._document.activeElement));
        // The `focus` method isn't available during server-side rendering.
        if (this._elementRef.nativeElement.focus) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this._elementRef.nativeElement.focus()));
        }
    }
}
MatBottomSheetContainer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-bottom-sheet-container',
                template: "<ng-template cdkPortalOutlet></ng-template>",
                styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}@media (-ms-high-contrast:active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium,.mat-bottom-sheet-container-xlarge{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [matBottomSheetAnimations.bottomSheetState],
                host: {
                    'class': 'mat-bottom-sheet-container',
                    'tabindex': '-1',
                    'role': 'dialog',
                    'aria-modal': 'true',
                    '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
                    '[@state]': '_animationState',
                    '(@state.start)': '_onAnimationStart($event)',
                    '(@state.done)': '_onAnimationDone($event)'
                },
            },] },
];
/** @nocollapse */
MatBottomSheetContainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: MatBottomSheetConfig }
];
MatBottomSheetContainer.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatBottomSheetModule {
}
MatBottomSheetModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                ],
                exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                declarations: [MatBottomSheetContainer],
                entryComponents: [MatBottomSheetContainer],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 * @template T, R
 */
class MatBottomSheetRef {
    /**
     * @param {?} containerInstance
     * @param {?} _overlayRef
     * @param {?=} _location
     */
    constructor(containerInstance, _overlayRef, 
    // @breaking-change 8.0.0 `_location` parameter to be removed.
    _location) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the bottom sheet has been dismissed.
         */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Subject for notifying the user that the bottom sheet has opened and appeared.
         */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.containerInstance = containerInstance;
        this.disableClose = containerInstance.bottomSheetConfig.disableClose;
        // Emit when opening animation completes
        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'visible')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._afterOpened.next();
            this._afterOpened.complete();
        }));
        // Dispose overlay when closing animation is complete
        containerInstance._animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'hidden')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            clearTimeout(this._closeFallbackTimeout);
            _overlayRef.dispose();
        }));
        _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this._afterDismissed.next(this._result);
            this._afterDismissed.complete();
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"])))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (!this.disableClose &&
                (event.type !== 'keydown' || !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])((/** @type {?} */ (event))))) {
                event.preventDefault();
                this.dismiss();
            }
        }));
    }
    /**
     * Dismisses the bottom sheet.
     * @param {?=} result Data to be passed back to the bottom sheet opener.
     * @return {?}
     */
    dismiss(result) {
        if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
             * @param {?} event
             * @return {?}
             */
            event => event.phaseName === 'start')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                // The logic that disposes of the overlay depends on the exit animation completing, however
                // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
                // timeout which will clean everything up if the animation hasn't fired within the specified
                // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
                // vast majority of cases the timeout will have been cleared before it has fired.
                this._closeFallbackTimeout = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._overlayRef.dispose();
                }), event.totalTime + 100);
                this._overlayRef.detachBackdrop();
            }));
            this._result = result;
            this.containerInstance.exit();
        }
    }
    /**
     * Gets an observable that is notified when the bottom sheet is finished closing.
     * @return {?}
     */
    afterDismissed() {
        return this._afterDismissed.asObservable();
    }
    /**
     * Gets an observable that is notified when the bottom sheet has opened and appeared.
     * @return {?}
     */
    afterOpened() {
        return this._afterOpened.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     * @return {?}
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify default bottom sheet options.
 * @type {?}
 */
const MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-bottom-sheet-default-options');
/**
 * Service to trigger Material Design bottom sheets.
 */
class MatBottomSheet {
    /**
     * @param {?} _overlay
     * @param {?} _injector
     * @param {?} _parentBottomSheet
     * @param {?=} _location
     * @param {?=} _defaultOptions
     */
    constructor(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._bottomSheetRefAtThisLevel = null;
    }
    /**
     * Reference to the currently opened bottom sheet.
     * @return {?}
     */
    get _openedBottomSheetRef() {
        /** @type {?} */
        const parent = this._parentBottomSheet;
        return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _openedBottomSheetRef(value) {
        if (this._parentBottomSheet) {
            this._parentBottomSheet._openedBottomSheetRef = value;
        }
        else {
            this._bottomSheetRefAtThisLevel = value;
        }
    }
    /**
     * @template T, D, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    open(componentOrTemplateRef, config) {
        /** @type {?} */
        const _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);
        /** @type {?} */
        const overlayRef = this._createOverlay(_config);
        /** @type {?} */
        const container = this._attachContainer(overlayRef, _config);
        /** @type {?} */
        const ref = new MatBottomSheetRef(container, overlayRef, this._location);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({
                $implicit: _config.data,
                bottomSheetRef: ref
            }))));
        }
        else {
            /** @type {?} */
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            /** @type {?} */
            const contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
        }
        // When the bottom sheet is dismissed, clear the reference to it.
        ref.afterDismissed().subscribe((/**
         * @return {?}
         */
        () => {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (this._openedBottomSheetRef == ref) {
                this._openedBottomSheetRef = null;
            }
        }));
        if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe((/**
             * @return {?}
             */
            () => ref.containerInstance.enter()));
            this._openedBottomSheetRef.dismiss();
        }
        else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
        }
        this._openedBottomSheetRef = ref;
        return ref;
    }
    /**
     * Dismisses the currently-visible bottom sheet.
     * @return {?}
     */
    dismiss() {
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
        }
    }
    /**
     * Attaches the bottom sheet container component to the overlay.
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    _attachContainer(overlayRef, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([
            [MatBottomSheetConfig, config]
        ]));
        /** @type {?} */
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @private
     * @param {?} config The user-specified bottom sheet config.
     * @return {?}
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayConfig"]({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            disposeOnNavigation: config.closeOnNavigation,
            maxWidth: '100%',
            scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
        });
        if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
        }
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @private
     * @template T
     * @param {?} config Config that was used to create the bottom sheet.
     * @param {?} bottomSheetRef Reference to the bottom sheet.
     * @return {?}
     */
    _createInjector(config, bottomSheetRef) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injectionTokens = new WeakMap([
            [MatBottomSheetRef, bottomSheetRef],
            [MAT_BOTTOM_SHEET_DATA, config.data]
        ]);
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])()
            });
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, injectionTokens);
    }
}
MatBottomSheet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: MatBottomSheetModule },] },
];
/** @nocollapse */
MatBottomSheet.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: MatBottomSheet, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: MatBottomSheetConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ MatBottomSheet.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatBottomSheet_Factory() { return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8)); }, token: MatBottomSheet, providedIn: MatBottomSheetModule });
/**
 * Applies default options to the bottom sheet config.
 * @param {?} defaults Object containing the default values to which to fall back.
 * @param {?=} config The configuration to which the defaults will be applied.
 * @return {?} The new configuration object with defaults applied.
 */
function _applyConfigDefaults(defaults, config) {
    return Object.assign({}, defaults, config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bottom-sheet.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/chips.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/chips.js ***!
  \*********************************************************/
/*! exports provided: MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event object emitted by MatChip when selected or deselected.
 */
class MatChipSelectionChange {
    /**
     * @param {?} source
     * @param {?} selected
     * @param {?=} isUserInput
     */
    constructor(source, selected, isUserInput = false) {
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
}
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
class MatChipBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatChipBase)), 'primary');
/**
 * Dummy directive to add CSS class to chip avatar.
 * \@docs-private
 */
class MatChipAvatar {
}
MatChipAvatar.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: 'mat-chip-avatar, [matChipAvatar]',
                host: { 'class': 'mat-chip-avatar' }
            },] },
];
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * \@docs-private
 */
class MatChipTrailingIcon {
}
MatChipTrailingIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                host: { 'class': 'mat-chip-trailing-icon' }
            },] },
];
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
class MatChip extends _MatChipMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} platform
     * @param {?} globalRippleOptions
     * @param {?=} animationMode
     * @param {?=} _changeDetectorRef
     */
    constructor(_elementRef, _ngZone, platform, globalRippleOptions, 
    // @breaking-change 8.0.0 `animationMode` parameter to become required.
    animationMode, _changeDetectorRef) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the chip has focus.
         */
        this._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */
        this.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */
        this._chipListMultiple = false;
        this._selected = false;
        this._selectable = true;
        this._removable = true;
        /**
         * Emits when the chip is focused.
         */
        this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the chip is blured.
         */
        this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._addHostClassName();
        this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["RippleRenderer"](this, _ngZone, _elementRef, platform);
        this._chipRipple.setupTriggerEvents(_elementRef);
        this.rippleConfig = globalRippleOptions || {};
        this._animationsDisabled = animationMode === 'NoopAnimations';
    }
    /**
     * Whether ripples are disabled on interaction
     * \@docs-private
     * @return {?}
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
    }
    /**
     * Whether the chip is selected.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        /** @type {?} */
        const coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        if (coercedValue !== this._selected) {
            this._selected = coercedValue;
            this._dispatchSelectionChange();
        }
    }
    /**
     * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
     * @return {?}
     */
    get value() {
        return this._value !== undefined
            ? this._value
            : this._elementRef.nativeElement.textContent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) { this._value = value; }
    /**
     * Whether or not the chip is selectable. When a chip is not selectable,
     * changes to its selected state are always ignored. By default a chip is
     * selectable, and it becomes non-selectable if its parent chip list is
     * not selectable.
     * @return {?}
     */
    get selectable() { return this._selectable && this.chipListSelectable; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
    }
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     * @return {?}
     */
    get removable() { return this._removable; }
    /**
     * @param {?} value
     * @return {?}
     */
    set removable(value) {
        this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
    }
    /**
     * The ARIA selected applied to the chip.
     * @return {?}
     */
    get ariaSelected() {
        // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
        // it adds noise to NVDA users where "not selected" will be read out for each chip.
        return this.selectable && (this._chipListMultiple || this.selected) ?
            this.selected.toString() : null;
    }
    /**
     * @return {?}
     */
    _addHostClassName() {
        /** @type {?} */
        const basicChipAttrName = 'mat-basic-chip';
        /** @type {?} */
        const element = (/** @type {?} */ (this._elementRef.nativeElement));
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    }
    /**
     * Selects the chip.
     * @return {?}
     */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    }
    /**
     * Deselects the chip.
     * @return {?}
     */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    }
    /**
     * Select this chip and emit selected event
     * @return {?}
     */
    selectViaInteraction() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._markForCheck();
        }
    }
    /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    toggleSelected(isUserInput = false) {
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._markForCheck();
        return this.selected;
    }
    /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    focus() {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    }
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    remove() {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    }
    /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    }
    /**
     * Handle custom key presses.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    }
    /**
     * @return {?}
     */
    _blur() {
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this._hasFocus = false;
                this._onBlur.next({ chip: this });
            }));
        }));
    }
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    _dispatchSelectionChange(isUserInput = false) {
        this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this._selected
        });
    }
    /**
     * @private
     * @return {?}
     */
    _markForCheck() {
        // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
    }
}
MatChip.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
                inputs: ['color', 'disabled', 'disableRipple'],
                exportAs: 'matChip',
                host: {
                    'class': 'mat-chip',
                    '[attr.tabindex]': 'disabled ? null : -1',
                    'role': 'option',
                    '[class.mat-chip-selected]': 'selected',
                    '[class.mat-chip-with-avatar]': 'avatar',
                    '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                    '[class.mat-chip-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationsDisabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                },
            },] },
];
/** @nocollapse */
MatChip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
MatChip.propDecorators = {
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatChipAvatar, { static: false },] }],
    trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatChipTrailingIcon, { static: false },] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((/**
                 * @return {?}
                 */
                () => MatChipRemove)), { static: false },] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
class MatChipRemove {
    /**
     * @param {?} _parentChip
     */
    constructor(_parentChip) {
        this._parentChip = _parentChip;
    }
    /**
     * Calls the parent chip's public `remove()` method if applicable.
     * @param {?} event
     * @return {?}
     */
    _handleClick(event) {
        /** @type {?} */
        const parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    }
}
MatChipRemove.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[matChipRemove]',
                host: {
                    'class': 'mat-chip-remove mat-chip-trailing-icon',
                    '(click)': '_handleClick($event)',
                }
            },] },
];
/** @nocollapse */
MatChipRemove.ctorParameters = () => [
    { type: MatChip }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for the chips module.
 * @type {?}
 */
const MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-chips-default-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
class MatChipListBase {
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
/** @type {?} */
const _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
/** @type {?} */
let nextUniqueId = 0;
/**
 * Change event object that is emitted when the chip list value has changed.
 */
class MatChipListChange {
    /**
     * @param {?} source
     * @param {?} value
     */
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
class MatChipList extends _MatChipListMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} _dir
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} _defaultErrorStateMatcher
     * @param {?} ngControl
     */
    constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        this._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Uid of the chip list
         */
        this._uid = `mat-chip-list-${nextUniqueId++}`;
        /**
         * Tab index for the chip list.
         */
        this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        this._userTabIndex = null;
        /**
         * Function when touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * Function when changed
         */
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._multiple = false;
        this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this._required = false;
        this._disabled = false;
        /**
         * Orientation of the chip list.
         */
        this.ariaOrientation = 'horizontal';
        this._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * The array of selected chips inside chip list.
     * @return {?}
     */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /**
     * The ARIA role applied to the chip list.
     * @return {?}
     */
    get role() { return this.empty ? null : 'listbox'; }
    /**
     * Whether the user should be allowed to select multiple chips.
     * @return {?}
     */
    get multiple() { return this._multiple; }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.writeValue(value);
        this._value = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get id() {
        return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * Whether any chips or the matChipInput inside of this chip-list has focus.
     * @return {?}
     */
    get focused() {
        return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get empty() {
        return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get shouldLabelFloat() { return !this.empty || this.focused; }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     * @return {?}
     */
    get selectable() { return this._selectable; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        if (this.chips) {
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip.chipListSelectable = this._selectable));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tabIndex(value) {
        this._userTabIndex = value;
        this._tabIndex = value;
    }
    /**
     * Combined stream of all of the child chips' selection change events.
     * @return {?}
     */
    get chipSelectionChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip.selectionChange)));
    }
    /**
     * Combined stream of all of the child chips' focus change events.
     * @return {?}
     */
    get chipFocusChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip._onFocus)));
    }
    /**
     * Combined stream of all of the child chips' blur change events.
     * @return {?}
     */
    get chipBlurChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip._onBlur)));
    }
    /**
     * Combined stream of all of the child chips' remove change events.
     * @return {?}
     */
    get chipRemoveChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip.destroyed)));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusKeyManager"](this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            dir => this._keyManager.withHorizontalOrientation(dir)));
        }
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            this._allowFocusEscape();
        }));
        // When the list changes, re-subscribe
        this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            if (this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this._syncChipsState();
                }));
            }
            this._resetChips();
            // Reset chips selected/deselected status
            this._initializeSelection();
            // Check to see if we need to update our tab index
            this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            this._updateFocusForDestroyedChips();
            this.stateChanges.next();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](this.multiple, undefined, false);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    }
    /**
     * Associates an HTML input element with this chip list.
     * @param {?} inputElement
     * @return {?}
     */
    registerInput(inputElement) {
        this._chipInput = inputElement;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) { this._ariaDescribedby = ids.join(' '); }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput(options);
            this.stateChanges.next();
        }
    }
    /**
     * Attempt to focus an input if we have one.
     * @param {?=} options
     * @return {?}
     */
    _focusInput(options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["HOME"]) {
                this._keyManager.setFirstItemActive();
                event.preventDefault();
            }
            else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["END"]) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else {
                this._keyManager.onKeydown(event);
            }
            this.stateChanges.next();
        }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     * @protected
     * @return {?}
     */
    _updateTabIndex() {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @protected
     * @return {?}
     */
    _updateFocusForDestroyedChips() {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                /** @type {?} */
                const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    _isInputEmpty(element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            let input = (/** @type {?} */ (element));
            return !input.value;
        }
        return false;
    }
    /**
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip.deselect()));
        if (Array.isArray(value)) {
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            currentValue => this._selectValue(currentValue, isUserInput)));
            this._sortValues();
        }
        else {
            /** @type {?} */
            const correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    }
    /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput = true) {
        /** @type {?} */
        const correspondingChip = this.chips.find((/**
         * @param {?} chip
         * @return {?}
         */
        chip => {
            return chip.value != null && this._compareWith(chip.value, value);
        }));
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    }
    /**
     * @private
     * @return {?}
     */
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            if (this.ngControl || this._value) {
                this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                this.stateChanges.next();
            }
        }));
    }
    /**
     * Deselects every chip in the list.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        chip => {
            if (chip !== skip) {
                chip.deselect();
            }
        }));
        this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     * @private
     * @return {?}
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => {
                if (chip.selected) {
                    this._selectionModel.select(chip);
                }
            }));
            this.stateChanges.next();
        }
    }
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    _propagateChanges(fallbackValue) {
        /** @type {?} */
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip.value));
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * When blurred, mark the field as touched when focus moved outside the chip list.
     * @return {?}
     */
    _blur() {
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    if (!this.focused) {
                        this._markAsTouched();
                    }
                }));
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    }
    /**
     * Mark the field as touched
     * @return {?}
     */
    _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    _allowFocusEscape() {
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._tabIndex = this._userTabIndex || 0;
                this._changeDetectorRef.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _resetChips() {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    }
    /**
     * @private
     * @return {?}
     */
    _dropSubscriptions() {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    }
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    _listenToChipsSelection() {
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.source.selected
                ? this._selectionModel.select(event.source)
                : this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!this.multiple) {
                this.chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                chip => {
                    if (!this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                }));
            }
            if (event.isUserInput) {
                this._propagateChanges();
            }
        }));
    }
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    _listenToChipsFocus() {
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            let chipIndex = this.chips.toArray().indexOf(event.chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItemIndex(chipIndex);
            }
            this.stateChanges.next();
        }));
        this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
         * @return {?}
         */
        () => {
            this._blur();
            this.stateChanges.next();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToChipsRemoved() {
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const chip = event.chip;
            /** @type {?} */
            const chipIndex = this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                this._lastDestroyedChipIndex = chipIndex;
            }
        }));
    }
    /**
     * Checks whether an event comes from inside a chip element.
     * @private
     * @param {?} event
     * @return {?}
     */
    _originatesFromChip(event) {
        /** @type {?} */
        let currentElement = (/** @type {?} */ (event.target));
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    /**
     * Checks whether any of the chips is focused.
     * @private
     * @return {?}
     */
    _hasFocusedChip() {
        return this.chips.some((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip._hasFocus));
    }
    /**
     * Syncs the list's state with the individual chips.
     * @private
     * @return {?}
     */
    _syncChipsState() {
        if (this.chips) {
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => {
                chip.disabled = this._disabled;
                chip._chipListMultiple = this.multiple;
            }));
        }
    }
}
MatChipList.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{selector: 'mat-chip-list',
                template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
                exportAs: 'matChipList',
                host: {
                    '[attr.tabindex]': 'disabled ? null : _tabIndex',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-required]': 'required.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.role]': 'role',
                    '[class.mat-chip-list-disabled]': 'disabled',
                    '[class.mat-chip-list-invalid]': 'errorState',
                    '[class.mat-chip-list-required]': 'required',
                    '[attr.aria-orientation]': 'ariaOrientation',
                    'class': 'mat-chip-list',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                    '(keydown)': '_keydown($event)',
                    '[id]': '_uid',
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldControl"], useExisting: MatChipList }],
                styles: [".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
MatChipList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
];
MatChipList.propDecorators = {
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-orientation',] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids.
/** @type {?} */
let nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
class MatChipInput {
    /**
     * @param {?} _elementRef
     * @param {?} _defaultOptions
     */
    constructor(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */
        this.placeholder = '';
        /**
         * Unique id for the input.
         */
        this.id = `mat-chip-list-input-${nextUniqueId$1++}`;
        this._disabled = false;
        this._inputElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    /**
     * Register input for chip list
     * @param {?} value
     * @return {?}
     */
    set chipList(value) {
        if (value) {
            this._chipList = value;
            this._chipList.registerInput(this);
        }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     * @return {?}
     */
    get addOnBlur() { return this._addOnBlur; }
    /**
     * @param {?} value
     * @return {?}
     */
    set addOnBlur(value) { this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * Whether the input is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * Whether the input is empty.
     * @return {?}
     */
    get empty() { return !this._inputElement.value; }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._chipList.stateChanges.next();
    }
    /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    _keydown(event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    }
    /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    _blur() {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    }
    /**
     * @return {?}
     */
    _focus() {
        this.focused = true;
        this._chipList.stateChanges.next();
    }
    /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    _emitChipEnd(event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    _onInput() {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    }
    /**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._inputElement.focus(options);
    }
    /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    _isSeparatorKey(event) {
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["hasModifierKey"])(event)) {
            return false;
        }
        /** @type {?} */
        const separators = this.separatorKeyCodes;
        /** @type {?} */
        const keyCode = event.keyCode;
        return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
    }
}
MatChipInput.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: 'input[matChipInputFor]',
                exportAs: 'matChipInput, matChipInputFor',
                host: {
                    'class': 'mat-chip-input mat-input-element',
                    '(keydown)': '_keydown($event)',
                    '(blur)': '_blur()',
                    '(focus)': '_focus()',
                    '(input)': '_onInput()',
                    '[id]': 'id',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.placeholder]': 'placeholder || null',
                    '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                }
            },] },
];
/** @nocollapse */
MatChipInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
];
MatChipInput.propDecorators = {
    chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matChipInputFor',] }],
    addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matChipInputAddOnBlur',] }],
    separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matChipInputSeparatorKeyCodes',] }],
    chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['matChipInputTokenEnd',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const ɵ0 = ({
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"]]
});
class MatChipsModule {
}
MatChipsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"],
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: (/** @type {?} */ (ɵ0))
                    }
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=chips.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/expansion.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/expansion.js ***!
  \*************************************************************/
/*! exports provided: MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return MAT_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm2015/accordion.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 * @type {?}
 */
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_ACCORDION');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time and timing curve for expansion panel animations.
 * @type {?}
 */
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * \@docs-private
 * @type {?}
 */
const matExpansionAnimations = {
    /**
     * Animation that rotates the indicator arrow.
     */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /**
     * Animation that expands and collapses the panel header height.
     */
    expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expansionHeight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '{{collapsedHeight}}',
        }), {
            params: { collapsedHeight: '48px' },
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '{{expandedHeight}}'
        }), {
            params: { expandedHeight: '64px' }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING),
        ])),
    ]),
    /**
     * Animation that expands and collapses the panel content.
     */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
    /**
     * @param {?} _template
     */
    constructor(_template) {
        this._template = _template;
    }
}
MatExpansionPanelContent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ng-template[matExpansionPanelContent]'
            },] },
];
/** @nocollapse */
MatExpansionPanelContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter for generating unique element ids.
 * @type {?}
 */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 * @type {?}
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
const ɵ0 = undefined;
/**
 * `<mat-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionItem"] {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _uniqueSelectionDispatcher
     * @param {?} _viewContainerRef
     * @param {?} _document
     * @param {?} _animationMode
     * @param {?=} defaultOptions
     */
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._viewContainerRef = _viewContainerRef;
        this._animationMode = _animationMode;
        this._hideToggle = false;
        /**
         * An event emitted after the body's expansion animation happens.
         */
        this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted after the body's collapse animation happens.
         */
        this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */
        this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */
        this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
        /**
         * Stream of body animation done events.
         */
        this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.accordion = accordion;
        this._document = _document;
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        }));
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /**
     * Whether the toggle indicator should be hidden.
     * @return {?}
     */
    get hideToggle() {
        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideToggle(value) {
        this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * The position of the expansion indicator.
     * @return {?}
     */
    get togglePosition() {
        return this._togglePosition || (this.accordion && this.accordion.togglePosition);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set togglePosition(value) {
        this._togglePosition = value;
    }
    /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    _hasSpacing() {
        if (this.accordion) {
            // We don't need to subscribe to the `stateChanges` of the parent accordion because each time
            // the [displayMode] input changes, the change detection will also cover the host bindings
            // of this expansion panel.
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        }
        return false;
    }
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])((/** @type {?} */ (null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
             * @return {?}
             */
            () => this.expanded && !this._portal)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe((/**
             * @return {?}
             */
            () => {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](this._lazyContent._template, this._viewContainerRef);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._bodyAnimationDone.complete();
        this._inputChanges.complete();
    }
    /**
     * Checks whether the expansion panel's content contains the currently-focused element.
     * @return {?}
     */
    _containsFocus() {
        if (this._body) {
            /** @type {?} */
            const focusedElement = this._document.activeElement;
            /** @type {?} */
            const bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
}
MatExpansionPanel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base{margin-left:0;margin-right:8px}"],
                selector: 'mat-expansion-panel',
                exportAs: 'matExpansionPanel',
                template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content><div class=\"mat-expansion-panel-content\" role=\"region\" [@bodyExpansion]=\"_getExpandedState()\" (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\" [attr.aria-labelledby]=\"_headerId\" [id]=\"id\" #body><div class=\"mat-expansion-panel-body\"><ng-content></ng-content><ng-template [cdkPortalOutlet]=\"_portal\"></ng-template></div><ng-content select=\"mat-action-row\"></ng-content></div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled', 'expanded'],
                outputs: ['opened', 'closed', 'expandedChange'],
                animations: [matExpansionAnimations.bodyExpansion],
                providers: [
                    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                    // to the same accordion.
                    { provide: MAT_ACCORDION, useValue: ɵ0 },
                ],
                host: {
                    'class': 'mat-expansion-panel',
                    '[class.mat-expanded]': 'expanded',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-expansion-panel-spacing]': '_hasSpacing()',
                }
            },] },
];
/** @nocollapse */
MatExpansionPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_ACCORDION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatExpansionPanel.propDecorators = {
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    afterExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatExpansionPanelContent, { static: false },] }],
    _body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['body', { static: false },] }]
};
class MatExpansionPanelActionRow {
}
MatExpansionPanelActionRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-action-row',
                host: {
                    class: 'mat-action-row'
                }
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader {
    /**
     * @param {?} panel
     * @param {?} _element
     * @param {?} _focusMonitor
     * @param {?} _changeDetectorRef
     * @param {?=} defaultOptions
     */
    constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */
        this._animationsDisabled = true;
        /** @type {?} */
        const accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
             * @param {?} changes
             * @return {?}
             */
            changes => !!(changes['hideToggle'] || changes['togglePosition'])))) :
            rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
             * @param {?} changes
             * @return {?}
             */
            changes => {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            }))))
                .subscribe((/**
             * @return {?}
             */
            () => this._changeDetectorRef.markForCheck()));
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
         * @return {?}
         */
        () => panel._containsFocus())))
            .subscribe((/**
         * @return {?}
         */
        () => _focusMonitor.focusVia(_element, 'program')));
        _focusMonitor.monitor(_element).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            if (origin && panel.accordion) {
                panel.accordion._handleHeaderFocus(this);
            }
        }));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * @return {?}
     */
    _animationStarted() {
        // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
        // there to work around a bug in Angular (see #13088), however this introduces a different
        // issue. The new transition will cause the header to animate in on init (see #16067), if the
        // consumer has set a header height that is different from the default one. We work around it
        // by disabling animations on the header and re-enabling them after the first animation has run.
        // Note that Angular dispatches animation events even if animations are disabled. Ideally this
        // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
        // for https://github.com/angular/angular/issues/18847 to be resolved.
        this._animationsDisabled = false;
    }
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @return {?}
     */
    get disabled() {
        return this.panel.disabled;
    }
    /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    _toggle() {
        this.panel.toggle();
    }
    /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    _isExpanded() {
        return this.panel.expanded;
    }
    /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /**
     * Gets the panel id.
     * @return {?}
     */
    _getPanelId() {
        return this.panel.id;
    }
    /**
     * Gets the toggle position for the header.
     * @return {?}
     */
    _getTogglePosition() {
        return this.panel.togglePosition;
    }
    /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @param {?=} origin Origin of the action that triggered the focus.
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        this._focusMonitor.focusVia(this._element, origin, options);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    }
}
MatExpansionPanelHeader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-expansion-panel-header',
                styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],
                template: "<span class=\"mat-content\"><ng-content select=\"mat-panel-title\"></ng-content><ng-content select=\"mat-panel-description\"></ng-content><ng-content></ng-content></span><span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\" class=\"mat-expansion-indicator\"></span>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    matExpansionAnimations.indicatorRotate,
                    matExpansionAnimations.expansionHeaderHeight
                ],
                host: {
                    'class': 'mat-expansion-panel-header',
                    'role': 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.mat-expanded]': '_isExpanded()',
                    '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
                    '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)',
                    '[@.disabled]': '_animationsDisabled',
                    '(@expansionHeight.start)': '_animationStarted()',
                    '[@expansionHeight]': `{
        value: _getExpandedState(),
        params: {
          collapsedHeight: collapsedHeight,
          expandedHeight: expandedHeight
        }
    }`,
                },
            },] },
];
/** @nocollapse */
MatExpansionPanelHeader.ctorParameters = () => [
    { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    collapsedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
class MatExpansionPanelDescription {
}
MatExpansionPanelDescription.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-panel-description',
                host: {
                    class: 'mat-expansion-panel-header-description'
                }
            },] },
];
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
class MatExpansionPanelTitle {
}
MatExpansionPanelTitle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-panel-title',
                host: {
                    class: 'mat-expansion-panel-header-title'
                }
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordion"] {
    constructor() {
        super(...arguments);
        this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */
        this.togglePosition = 'after';
    }
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    get hideToggle() { return this._hideToggle; }
    /**
     * @param {?} show
     * @return {?}
     */
    set hideToggle(show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(show); }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusKeyManager"](this._headers).withWrap();
    }
    /**
     * Handles keyboard events coming in from the panel headers.
     * @param {?} event
     * @return {?}
     */
    _handleHeaderKeydown(event) {
        const { keyCode } = event;
        /** @type {?} */
        const manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                manager.setFirstItemActive();
                event.preventDefault();
            }
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                manager.setLastItemActive();
                event.preventDefault();
            }
        }
        else {
            this._keyManager.onKeydown(event);
        }
    }
    /**
     * @param {?} header
     * @return {?}
     */
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
}
MatAccordion.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-accordion',
                exportAs: 'matAccordion',
                inputs: ['multi'],
                providers: [{
                        provide: MAT_ACCORDION,
                        useExisting: MatAccordion
                    }],
                host: {
                    class: 'mat-accordion'
                }
            },] },
];
MatAccordion.propDecorators = {
    _headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatExpansionPanelHeader, { descendants: true },] }],
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatExpansionModule {
}
MatExpansionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]],
                exports: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ],
                declarations: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=expansion.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/material.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/material.js ***!
  \************************************************************/
/*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin, MatBadgeModule, MatBadge, MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef, MatButtonModule, MatButton, MatAnchor, MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, _MatCheckboxRequiredValidatorModule, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator, MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS, ɵa1, VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, MatMultiYearView, yearsPerPage, yearsPerRow, MatDatepickerModule, MatCalendarHeader, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent, MatDatepicker, matDatepickerAnimations, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView, MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations, MatDivider, MatDividerModule, MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations, MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations, ɵa11, MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER, MatTextareaAutosize, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR, MatListModule, MatNavList, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatListItem, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatSelectionListChange, MatListOption, MatSelectionList, ɵa22, ɵb22, ɵc22, MatMenu, MAT_MENU_DEFAULT_OPTIONS, _MatMenu, _MatMenuBase, MatMenuItem, MatMenuTrigger, MAT_MENU_SCROLL_STRATEGY, MAT_MENU_PANEL, _MatMenuDirectivesModule, MatMenuModule, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER, MatProgressBarModule, MAT_PROGRESS_BAR_LOCATION_FACTORY, MAT_PROGRESS_BAR_LOCATION, MatProgressBar, MatProgressSpinner, MatSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinnerModule, MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroup, MatRadioButton, MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent, MatSidenavModule, throwMatDuplicatedDrawerError, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, matDrawerAnimations, _MatSlideToggleRequiredValidatorModule, MatSlideToggleModule, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggleChange, MatSlideToggle, MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MatSlideToggleRequiredValidator, MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSlider, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarContainer, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations, MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations, MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon, MatTableModule, MatCellDef, MatHeaderCellDef, MatFooterCellDef, MatColumnDef, MatHeaderCell, MatFooterCell, MatCell, MatTable, MatHeaderRowDef, MatFooterRowDef, MatRowDef, MatHeaderRow, MatFooterRow, MatRow, MatTableDataSource, MatTextColumn, ɵa24, ɵb24, MatTabsModule, MatInkBar, _MAT_INK_BAR_POSITIONER, MatTabBody, _MatTabBodyBase, MatTabBodyPortal, MatTabHeader, _MatTabHeaderBase, MatTabLabelWrapper, MatTab, MatTabLabel, MatTabNav, MatTabLink, _MatTabNavBase, _MatTabLinkBase, MatTabContent, MatTabChangeEvent, MAT_TABS_CONFIG, _MatTabGroupBase, MatTabGroup, matTabsAnimations, MatToolbarModule, throwToolbarMixedModesError, MatToolbarRow, MatToolbar, MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations, MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteSelectedEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["getMatAutocompleteMissingPanelError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AUTOCOMPLETE_OPTION_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["AUTOCOMPLETE_PANEL_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MAT_AUTOCOMPLETE_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteOrigin"]; });

/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadge"]; });

/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["matBottomSheetAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function() { return _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButton", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]; });

/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroupMultiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function() { return _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"]; });

/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSmImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardMdImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardLgImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardXlImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitleGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]; });

/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["TransitionCheckState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_CLICK_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["_MatCheckboxRequiredValidatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MAT_CHECKBOX_REQUIRED_VALIDATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxRequiredValidator"]; });

/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipListChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipSelectionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipAvatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipTrailingIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MAT_CHIPS_DEFAULT_OPTIONS"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ɵa1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AnimationCurves"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AnimationDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisableRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinTabIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinInitialized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_NATIVE_DATE_FORMATS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ShowOnDirtyErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_HAMMER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["GestureConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["setLines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineSetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_countGroupLabelsBeforeOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["_getOptionScrollPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionSelectionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptgroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RippleState", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["defaultRippleAnimationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JAN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["FEB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["APR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JUN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["JUL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["AUG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["SEP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["OCT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NOV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DEC"]; });

/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatMultiYearView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["yearsPerPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["yearsPerRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendarBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["matDatepickerAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MAT_DATEPICKER_VALIDATORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInputEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggleIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatMonthView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function() { return _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatYearView"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["throwMatDialogContentAlreadyAttachedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["matDialogAnimations"]; });

/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDivider", function() { return _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDividerModule", function() { return _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"]; });

/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_ACCORDION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelActionRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["EXPANSION_PANEL_ANIMATION_TIMING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["matExpansionAnimations"]; });

/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldPlaceholderConflictError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldDuplicatedHintError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["getMatFormFieldMissingControlError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["matFormFieldAnimations"]; });

/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa11", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["ɵa11"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridAvatarCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileHeaderCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTileFooterCssMatStyler"]; });

/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconNameNotFoundError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconNoHttpProviderError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconFailedToSanitizeUrlError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["getMatIconFailedToSanitizeLiteralError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["ICON_REGISTRY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["ICON_REGISTRY_PROVIDER"]; });

/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatTextareaAutosize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["getMatInputUnsupportedTypeError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MAT_INPUT_VALUE_ACCESSOR"]; });

/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListModule", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatNavList", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatNavList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatList", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListAvatarCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListIconCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListSubheaderCssMatStyler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListItem", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECTION_LIST_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatSelectionListChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListOption", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectionList", function() { return _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatSelectionList"]; });

/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa22", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵa22"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb22", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵb22"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc22", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["ɵc22"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenu", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatMenu", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuItem", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MAT_MENU_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenuDirectivesModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["matMenuAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInItems", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["fadeInItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformMenu", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["transformMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuContent", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuContent"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["PageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MAT_PAGINATOR_INTL_PROVIDER"]; });

/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MAT_PROGRESS_BAR_LOCATION_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MAT_PROGRESS_BAR_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBar", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"]; });

/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSpinner", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function() { return _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"]; });

/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioButton"]; });

/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_MAX_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_PADDING_X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_INDENT_PADDING_X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_ITEM_HEIGHT_EM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_MULTIPLE_PANEL_PADDING_X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["SELECT_PANEL_VIEWPORT_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["matSelectAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["transformPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["fadeInContent"]; });

/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["throwMatDuplicatedDrawerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MAT_DRAWER_DEFAULT_AUTOSIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDrawer", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenav", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["matDrawerAnimations"]; });

/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["_MatSlideToggleRequiredValidatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleRequiredValidator"]; });

/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSliderModule", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MAT_SLIDER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSliderChange", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlider", function() { return _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSlider"]; });

/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBar", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["SimpleSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["matSnackBarAnimations"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortHeaderIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MAT_SORT_HEADER_INTL_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["matSortAnimations"]; });

/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatHorizontalStepper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatVerticalStepper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperPrevious"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MAT_STEPPER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MAT_STEPPER_INTL_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["matStepperAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperIcon"]; });

/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatCellDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderCellDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterCellDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatColumnDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderRowDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterRowDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatRowDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatHeaderRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatFooterRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTextColumn"]; });

/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa24", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["ɵa24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb24", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["ɵb24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatInkBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MAT_INK_BAR_POSITIONER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabBodyBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabBodyPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabHeaderBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLabelWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTab", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabNavBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabLinkBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabChangeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MAT_TABS_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["_MatTabGroupBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["MatTabGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function() { return _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__["matTabsAnimations"]; });

/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["throwToolbarMixedModesError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbar", function() { return _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbar"]; });

/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["getMatTooltipInvalidPositionError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["SCROLL_THROTTLE_MS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["TOOLTIP_PANEL_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MAT_TOOLTIP_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["matTooltipAnimations"]; });

/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNode", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatNestedTreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodePadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTree", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeModule", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNodeOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeFlattener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeFlatDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function() { return _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeNestedDataSource"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//# sourceMappingURL=material.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/tree.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/tree.js ***!
  \********************************************************/
/*! exports provided: MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNode", function() { return MatTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function() { return MatTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function() { return MatNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function() { return MatTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTree", function() { return MatTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeModule", function() { return MatTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function() { return MatTreeNodeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function() { return MatTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function() { return MatTreeFlattener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function() { return MatTreeFlatDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function() { return MatTreeNestedDataSource; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
/**
 * Wrapper for the CdkTree node with Material design styles.
 * @template T
 */
class MatTreeNode extends _MatTreeNodeMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} tabIndex
     */
    constructor(_elementRef, _tree, tabIndex) {
        super(_elementRef, _tree);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this.role = 'treeitem';
        this.tabIndex = Number(tabIndex) || 0;
    }
}
MatTreeNode.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'mat-tree-node',
                exportAs: 'matTreeNode',
                inputs: ['disabled', 'tabIndex'],
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'role === "treeitem" ? level : null',
                    '[attr.role]': 'role',
                    'class': 'mat-tree-node'
                },
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatTreeNode }]
            },] },
];
/** @nocollapse */
MatTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
];
MatTreeNode.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 * @template T
 */
class MatTreeNodeDef extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"] {
}
MatTreeNodeDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[matTreeNodeDef]',
                inputs: [
                    'when: matTreeNodeDefWhen'
                ],
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"], useExisting: MatTreeNodeDef }]
            },] },
];
MatTreeNodeDef.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNode',] }]
};
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 * @template T
 */
class MatNestedTreeNode extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"] {
    /**
     * @param {?} _elementRef
     * @param {?} _tree
     * @param {?} _differs
     * @param {?} tabIndex
     */
    constructor(_elementRef, _tree, _differs, tabIndex) {
        super(_elementRef, _tree, _differs);
        this._elementRef = _elementRef;
        this._tree = _tree;
        this._differs = _differs;
        this._disabled = false;
        this.tabIndex = Number(tabIndex) || 0;
    }
    /**
     * Whether the node is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); }
    /**
     * Tabindex for the node.
     * @return {?}
     */
    get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
    /**
     * @param {?} value
     * @return {?}
     */
    set tabIndex(value) {
        // If the specified tabIndex value is null or undefined, fall back to the default value.
        this._tabIndex = value != null ? value : 0;
    }
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        super.ngAfterContentInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
MatNestedTreeNode.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'mat-nested-tree-node',
                exportAs: 'matNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'mat-nested-tree-node',
                },
                providers: [
                    { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"], useExisting: MatNestedTreeNode },
                    { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"], useExisting: MatNestedTreeNode },
                    { provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"], useExisting: MatNestedTreeNode }
                ]
            },] },
];
/** @nocollapse */
MatNestedTreeNode.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] }
];
MatNestedTreeNode.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matNestedTreeNode',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTree padding with Material design styles.
 * @template T
 */
class MatTreeNodePadding extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"] {
}
MatTreeNodePadding.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[matTreeNodePadding]',
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"], useExisting: MatTreeNodePadding }]
            },] },
];
MatTreeNodePadding.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodePadding',] }],
    indent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodePaddingIndent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
class MatTreeNodeOutlet {
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
MatTreeNodeOutlet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[matTreeNodeOutlet]',
                providers: [{
                        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeOutlet"],
                        useExisting: MatTreeNodeOutlet
                    }]
            },] },
];
/** @nocollapse */
MatTreeNodeOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 * @template T
 */
class MatTree extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"] {
}
MatTree.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-tree',
                exportAs: 'matTree',
                template: `<ng-container matTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'mat-tree',
                    'role': 'tree',
                },
                styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-ndoe{border-bottom-width:0}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                // See note on CdkTree for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"], useExisting: MatTree }]
            },] },
];
MatTree.propDecorators = {
    _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MatTreeNodeOutlet, { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 * @template T
 */
class MatTreeNodeToggle extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"] {
    constructor() {
        super(...arguments);
        this.recursive = false;
    }
}
MatTreeNodeToggle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[matTreeNodeToggle]',
                providers: [{ provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"], useExisting: MatTreeNodeToggle }]
            },] },
];
MatTreeNodeToggle.propDecorators = {
    recursive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matTreeNodeToggleRecursive',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
class MatTreeModule {
}
MatTreeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: MAT_TREE_DIRECTIVES,
                declarations: MAT_TREE_DIRECTIVES,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 * @template T, F
 */
class MatTreeFlattener {
    /**
     * @param {?} transformFunction
     * @param {?} getLevel
     * @param {?} isExpandable
     * @param {?} getChildren
     */
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    /**
     * @param {?} node
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    _flattenNode(node, level, resultNodes, parentMap) {
        /** @type {?} */
        const flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            /** @type {?} */
            const childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
                     * @param {?} children
                     * @return {?}
                     */
                    children => {
                        this._flattenChildren(children, level, resultNodes, parentMap);
                    }));
                }
            }
        }
        return resultNodes;
    }
    /**
     * @param {?} children
     * @param {?} level
     * @param {?} resultNodes
     * @param {?} parentMap
     * @return {?}
     */
    _flattenChildren(children, level, resultNodes, parentMap) {
        children.forEach((/**
         * @param {?} child
         * @param {?} index
         * @return {?}
         */
        (child, index) => {
            /** @type {?} */
            let childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);
            this._flattenNode(child, level + 1, resultNodes, childParentMap);
        }));
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     * @param {?} structuredData
     * @return {?}
     */
    flattenNodes(structuredData) {
        /** @type {?} */
        let resultNodes = [];
        structuredData.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => this._flattenNode(node, 0, resultNodes, [])));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     * @param {?} nodes
     * @param {?} treeControl
     * @return {?}
     */
    expandFlattenedNodes(nodes, treeControl) {
        /** @type {?} */
        let results = [];
        /** @type {?} */
        let currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            /** @type {?} */
            let expand = true;
            for (let i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        }));
        return results;
    }
}
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 * @template T, F
 */
class MatTreeFlatDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"] {
    /**
     * @param {?} _treeControl
     * @param {?} _treeFlattener
     * @param {?=} initialData
     */
    constructor(_treeControl, _treeFlattener, initialData = []) {
        super();
        this._treeControl = _treeControl;
        this._treeFlattener = _treeFlattener;
        this._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](initialData);
    }
    /**
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        this._data.next(value);
        this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
        this._treeControl.dataNodes = this._flattenedData.value;
    }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        /** @type {?} */
        const changes = [
            collectionViewer.viewChange,
            this._treeControl.expansionModel.onChange,
            this._flattenedData
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @return {?}
         */
        () => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
            return this._expandedData.value;
        })));
    }
    /**
     * @return {?}
     */
    disconnect() {
        // no op
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 * @template T
 */
class MatTreeNestedDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"] {
    constructor() {
        super(...arguments);
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
    }
    /**
     * Data for the nested tree
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) { this._data.next(value); }
    /**
     * @param {?} collectionViewer
     * @return {?}
     */
    connect(collectionViewer) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...[collectionViewer.viewChange, this._data])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @return {?}
         */
        () => {
            return this.data;
        })));
    }
    /**
     * @return {?}
     */
    disconnect() {
        // no op
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=tree.js.map


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-more-horiz.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ })

}]);
//# sourceMappingURL=default~pages-apps-clientes-aio-table-module~pages-apps-contratos-contratos-module~pages-dashboards-~dae42f44-es2015.js.map