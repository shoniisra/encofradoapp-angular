(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-button-group-components-button-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-button-group/components-button-group.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-button-group/components-button-group.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout @stagger>\n\n  <vex-secondary-toolbar current=\"Button Group\">\n    <vex-breadcrumbs [crumbs]=\"['Components', 'Button Group']\"></vex-breadcrumbs>\n  </vex-secondary-toolbar>\n\n  <vex-page-layout-content vexContainer>\n    <vex-components-overview-button-group @fadeInUp class=\"block\"></vex-components-overview-button-group>\n\n    <!--\n    <h2 class=\"title mt-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <span @scaleIn\n          class=\"block w-10 h-10 rounded-full bg-primary-50 text-primary-500 mr-3\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\">\n      <ic-icon [icon]=\"icSettings\" height=\"20px\" width=\"20px\"></ic-icon>\n      </span>\n      <span @fadeInRight class=\"block\">Button Group Options</span>\n    </h2>\n    -->\n  </vex-page-layout-content>\n\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n  <div class=\"p-6\">\n    <h2 class=\"title mt-0 mb-4\">Preview</h2>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n      <mat-button-toggle-group>\n        <mat-button-toggle value=\"left\">\n          <mat-icon [icIcon]=\"icFormatAlignLeft\"></mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"center\">\n          <mat-icon [icIcon]=\"icFormatAlignCenter\"></mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"right\">\n          <mat-icon [icIcon]=\"icFormatAlignRight\"></mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"justify\">\n          <mat-icon [icIcon]=\"icFormatAlignJustify\"></mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n\n      <mat-button-toggle-group class=\"mt-6\">\n        <mat-button-toggle value=\"left\">Left</mat-button-toggle>\n        <mat-button-toggle value=\"center\">Center</mat-button-toggle>\n        <mat-button-toggle value=\"right\">Right</mat-button-toggle>\n      </mat-button-toggle-group>\n\n      <mat-button-toggle-group appearance=\"legacy\" class=\"mt-6\">\n        <mat-button-toggle value=\"left\">Left</mat-button-toggle>\n        <mat-button-toggle value=\"center\">Center</mat-button-toggle>\n        <mat-button-toggle value=\"right\">Right</mat-button-toggle>\n      </mat-button-toggle-group>\n\n      <mat-button-toggle-group class=\"mt-6\" vertical>\n        <mat-button-toggle value=\"left\">Top</mat-button-toggle>\n        <mat-button-toggle value=\"center\">Center</mat-button-toggle>\n        <mat-button-toggle value=\"right\">Bottom</mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n  </div>\n\n  <div class=\"border-l\" fxFlex>\n    <div class=\"p-6\">\n      <h2 class=\"title mt-0 mb-4\">Button Group</h2>\n      <h4 class=\"body-2 text-secondary m-0\">&lt;mat-button-toggle-group&gt;</h4>\n    </div>\n\n    <mat-tab-group class=\"vex-tabs\">\n      <mat-tab label=\"DESCRIPTION\">\n        <div class=\"p-6\">\n          <p>\n            Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group\n            should share a common container.\n          </p>\n          <h4 class=\"subheading-1 font-medium mb-0\">Active and available toggle buttons:</h4>\n          <p>\n            A toggle button’s state makes it clear which button is active. Hover and focus states express the available\n            selection options for buttons in a toggle group.\n          </p>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"SOURCE CODE\">\n        <pre><code [vexHighlight]=\"buttonToggleHTML\"></code></pre>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/ui/components/components-button-group/components-button-group-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ComponentsButtonGroupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsButtonGroupRoutingModule", function() { return ComponentsButtonGroupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_button_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-button-group.component */ "./src/app/pages/ui/components/components-button-group/components-button-group.component.ts");




const routes = [
    {
        path: '',
        component: _components_button_group_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsButtonGroupComponent"]
    }
];
let ComponentsButtonGroupRoutingModule = class ComponentsButtonGroupRoutingModule {
};
ComponentsButtonGroupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComponentsButtonGroupRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/components/components-button-group/components-button-group.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1idXR0b24tZ3JvdXAvY29tcG9uZW50cy1idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ui/components/components-button-group/components-button-group.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComponentsButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsButtonGroupComponent", function() { return ComponentsButtonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-settings */ "./node_modules/@iconify/icons-ic/twotone-settings.js");
/* harmony import */ var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");







let ComponentsButtonGroupComponent = class ComponentsButtonGroupComponent {
    constructor() {
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
};
ComponentsButtonGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-components-button-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-button-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-button-group/components-button-group.component.html")).default,
        animations: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger80ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__["scaleIn400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRight400ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-button-group.component.scss */ "./src/app/pages/ui/components/components-button-group/components-button-group.component.scss")).default]
    })
], ComponentsButtonGroupComponent);



/***/ }),

/***/ "./src/app/pages/ui/components/components-button-group/components-button-group.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-button-group/components-button-group.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComponentsButtonGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsButtonGroupModule", function() { return ComponentsButtonGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-button-group-routing.module */ "./src/app/pages/ui/components/components-button-group/components-button-group-routing.module.ts");
/* harmony import */ var _components_button_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components-button-group.component */ "./src/app/pages/ui/components/components-button-group/components-button-group.component.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components-overview/components/components-overview-button-group/components-overview-button-group.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.module.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");












let ComponentsButtonGroupModule = class ComponentsButtonGroupModule {
};
ComponentsButtonGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_button_group_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsButtonGroupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_button_group_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsButtonGroupRoutingModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _components_overview_components_components_overview_button_group_components_overview_button_group_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsOverviewButtonGroupModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__["ContainerModule"]
        ]
    })
], ComponentsButtonGroupModule);



/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy9jb21wb25lbnRzL2NvbXBvbmVudHMtb3ZlcnZpZXctYnV0dG9uLWdyb3VwL2NvbXBvbmVudHMtb3ZlcnZpZXctYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: ComponentsOverviewButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOverviewButtonGroupComponent", function() { return ComponentsOverviewButtonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-left */ "./node_modules/@iconify/icons-ic/twotone-format-align-left.js");
/* harmony import */ var _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-center */ "./node_modules/@iconify/icons-ic/twotone-format-align-center.js");
/* harmony import */ var _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-right */ "./node_modules/@iconify/icons-ic/twotone-format-align-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-format-align-justify */ "./node_modules/@iconify/icons-ic/twotone-format-align-justify.js");
/* harmony import */ var _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_5__);






let ComponentsOverviewButtonGroupComponent = class ComponentsOverviewButtonGroupComponent {
    constructor() {
        this.buttonToggleHTML = `<mat-button-toggle-group>
  <mat-button-toggle value="left">
    <mat-icon [icIcon]="icFormatAlignLeft"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon [icIcon]="icFormatAlignCenter"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon [icIcon]="icFormatAlignRight"></mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify">
    <mat-icon [icIcon]="icFormatAlignJustify"></mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6">
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6" appearance="legacy">
  <mat-button-toggle value="left">Left</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Right</mat-button-toggle>
</mat-button-toggle-group>

<mat-button-toggle-group class="mt-6" vertical>
  <mat-button-toggle value="left">Top</mat-button-toggle>
  <mat-button-toggle value="center">Center</mat-button-toggle>
  <mat-button-toggle value="right">Bottom</mat-button-toggle>
</mat-button-toggle-group>`;
        this.icFormatAlignLeft = _iconify_icons_ic_twotone_format_align_left__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icFormatAlignCenter = _iconify_icons_ic_twotone_format_align_center__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icFormatAlignRight = _iconify_icons_ic_twotone_format_align_right__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icFormatAlignJustify = _iconify_icons_ic_twotone_format_align_justify__WEBPACK_IMPORTED_MODULE_5___default.a;
    }
    ngOnInit() {
    }
};
ComponentsOverviewButtonGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'vex-components-overview-button-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./components-overview-button-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./components-overview-button-group.component.scss */ "./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.scss")).default]
    })
], ComponentsOverviewButtonGroupComponent);



/***/ }),

/***/ "./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.module.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.module.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: ComponentsOverviewButtonGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOverviewButtonGroupModule", function() { return ComponentsOverviewButtonGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-overview-button-group.component */ "./src/app/pages/ui/components/components-overview/components/components-overview-button-group/components-overview-button-group.component.ts");
/* harmony import */ var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../@vex/components/highlight/highlight.module */ "./src/@vex/components/highlight/highlight.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");











let ComponentsOverviewButtonGroupModule = class ComponentsOverviewButtonGroupModule {
};
ComponentsOverviewButtonGroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewButtonGroupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_4__["HighlightModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"]
        ],
        exports: [_components_overview_button_group_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewButtonGroupComponent"]]
    })
], ComponentsOverviewButtonGroupModule);



/***/ })

}]);
//# sourceMappingURL=components-button-group-components-button-group-module-es2015.js.map