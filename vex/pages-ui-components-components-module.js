(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-components-components-module"],{

/***/ "./src/app/pages/ui/components/components-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ui/components/components-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'overview',
        loadChildren: () => Promise.all(/*! import() | components-overview-components-overview-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~b589e09d"), __webpack_require__.e("default~components-overview-components-overview-module~components-radio-components-radio-module~page~2454e66f"), __webpack_require__.e("default~components-overview-components-overview-module~components-slide-toggle-components-slide-togg~a0b60a3e"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~fa6c178b"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~9c85ba8d"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module"), __webpack_require__.e("common"), __webpack_require__.e("components-overview-components-overview-module")]).then(__webpack_require__.bind(null, /*! ./components-overview/components-overview.module */ "./src/app/pages/ui/components/components-overview/components-overview.module.ts")).then(m => m.ComponentsOverviewModule)
    },
    {
        path: 'autocomplete',
        loadChildren: () => Promise.all(/*! import() | components-autocomplete-components-autocomplete-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-overview-components-overvi~9739c1c8"), __webpack_require__.e("common"), __webpack_require__.e("components-autocomplete-components-autocomplete-module")]).then(__webpack_require__.bind(null, /*! ./components-autocomplete/components-autocomplete.module */ "./src/app/pages/ui/components/components-autocomplete/components-autocomplete.module.ts")).then(m => m.ComponentsAutocompleteModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'buttons',
        loadChildren: () => Promise.all(/*! import() | components-buttons-components-buttons-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("common"), __webpack_require__.e("components-buttons-components-buttons-module")]).then(__webpack_require__.bind(null, /*! ./components-buttons/components-buttons.module */ "./src/app/pages/ui/components/components-buttons/components-buttons.module.ts")).then(m => m.ComponentsButtonsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'button-group',
        loadChildren: () => Promise.all(/*! import() | components-button-group-components-button-group-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("common"), __webpack_require__.e("components-button-group-components-button-group-module")]).then(__webpack_require__.bind(null, /*! ./components-button-group/components-button-group.module */ "./src/app/pages/ui/components/components-button-group/components-button-group.module.ts")).then(m => m.ComponentsButtonGroupModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'cards',
        loadChildren: () => Promise.all(/*! import() | components-cards-components-cards-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-button-group-components-button-group-module~components-buttons-components-buttons~471913aa"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module~page~9c85ba8d"), __webpack_require__.e("default~components-cards-components-cards-module~components-overview-components-overview-module"), __webpack_require__.e("common"), __webpack_require__.e("components-cards-components-cards-module")]).then(__webpack_require__.bind(null, /*! ./components-cards/components-cards.module */ "./src/app/pages/ui/components/components-cards/components-cards.module.ts")).then(m => m.ComponentsCardsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'checkbox',
        loadChildren: () => Promise.all(/*! import() | components-checkbox-components-checkbox-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-checkbox-components-checkbox-module~components-overview-components-overview-modul~2bad73dc"), __webpack_require__.e("common"), __webpack_require__.e("components-checkbox-components-checkbox-module")]).then(__webpack_require__.bind(null, /*! ./components-checkbox/components-checkbox.module */ "./src/app/pages/ui/components/components-checkbox/components-checkbox.module.ts")).then(m => m.ComponentsCheckboxModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'dialogs',
        loadChildren: () => Promise.all(/*! import() | components-dialogs-components-dialogs-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-dialogs-components-dialogs-module~components-overview-components-overview-module~~e8ad5f8f"), __webpack_require__.e("common"), __webpack_require__.e("components-dialogs-components-dialogs-module")]).then(__webpack_require__.bind(null, /*! ./components-dialogs/components-dialogs.module */ "./src/app/pages/ui/components/components-dialogs/components-dialogs.module.ts")).then(m => m.ComponentsDialogsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'grid-list',
        loadChildren: () => Promise.all(/*! import() | components-grid-list-components-grid-list-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-grid-list-components-grid-list-module~components-overview-components-overview-mod~fa6c178b"), __webpack_require__.e("common"), __webpack_require__.e("components-grid-list-components-grid-list-module")]).then(__webpack_require__.bind(null, /*! ./components-grid-list/components-grid-list.module */ "./src/app/pages/ui/components/components-grid-list/components-grid-list.module.ts")).then(m => m.ComponentsGridListModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'input',
        loadChildren: () => Promise.all(/*! import() | components-input-components-input-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("common"), __webpack_require__.e("components-input-components-input-module")]).then(__webpack_require__.bind(null, /*! ./components-input/components-input.module */ "./src/app/pages/ui/components/components-input/components-input.module.ts")).then(m => m.ComponentsInputModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'lists',
        loadChildren: () => Promise.all(/*! import() | components-lists-components-lists-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("common"), __webpack_require__.e("components-lists-components-lists-module")]).then(__webpack_require__.bind(null, /*! ./components-lists/components-lists.module */ "./src/app/pages/ui/components/components-lists/components-lists.module.ts")).then(m => m.ComponentsListsModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() | components-menu-components-menu-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("common"), __webpack_require__.e("components-menu-components-menu-module")]).then(__webpack_require__.bind(null, /*! ./components-menu/components-menu.module */ "./src/app/pages/ui/components/components-menu/components-menu.module.ts")).then(m => m.ComponentsMenuModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'progress',
        loadChildren: () => Promise.all(/*! import() | components-progress-components-progress-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("common"), __webpack_require__.e("components-progress-components-progress-module")]).then(__webpack_require__.bind(null, /*! ./components-progress/components-progress.module */ "./src/app/pages/ui/components/components-progress/components-progress.module.ts")).then(m => m.ComponentsProgressModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'progress-spinner',
        loadChildren: () => Promise.all(/*! import() | components-progress-spinner-components-progress-spinner-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-overview-components-overview-module~components-progress-spinner-components-progre~92b3aede"), __webpack_require__.e("common"), __webpack_require__.e("components-progress-spinner-components-progress-spinner-module")]).then(__webpack_require__.bind(null, /*! ./components-progress-spinner/components-progress-spinner.module */ "./src/app/pages/ui/components/components-progress-spinner/components-progress-spinner.module.ts")).then(m => m.ComponentsProgressSpinnerModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'radio',
        loadChildren: () => Promise.all(/*! import() | components-radio-components-radio-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-overview-components-overview-module~components-radio-components-radio-module~page~2454e66f"), __webpack_require__.e("common"), __webpack_require__.e("components-radio-components-radio-module")]).then(__webpack_require__.bind(null, /*! ./components-radio/components-radio.module */ "./src/app/pages/ui/components/components-radio/components-radio.module.ts")).then(m => m.ComponentsRadioModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'slide-toggle',
        loadChildren: () => Promise.all(/*! import() | components-slide-toggle-components-slide-toggle-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-overview-components-overview-module~components-slide-toggle-components-slide-togg~a0b60a3e"), __webpack_require__.e("common"), __webpack_require__.e("components-slide-toggle-components-slide-toggle-module")]).then(__webpack_require__.bind(null, /*! ./components-slide-toggle/components-slide-toggle.module */ "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts")).then(m => m.ComponentsSlideToggleModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'slider',
        loadChildren: () => Promise.all(/*! import() | components-slider-components-slider-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-overview-components-overview-module~components-slider-components-slider-module~pa~b589e09d"), __webpack_require__.e("common"), __webpack_require__.e("components-slider-components-slider-module")]).then(__webpack_require__.bind(null, /*! ./components-slider/components-slider.module */ "./src/app/pages/ui/components/components-slider/components-slider.module.ts")).then(m => m.ComponentsSliderModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'snack-bar',
        loadChildren: () => Promise.all(/*! import() | components-snack-bar-components-snack-bar-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("default~components-overview-components-overview-module~components-snack-bar-components-snack-bar-mod~caef03c6"), __webpack_require__.e("common"), __webpack_require__.e("components-snack-bar-components-snack-bar-module")]).then(__webpack_require__.bind(null, /*! ./components-snack-bar/components-snack-bar.module */ "./src/app/pages/ui/components/components-snack-bar/components-snack-bar.module.ts")).then(m => m.ComponentsSnackBarModule),
        data: {
            containerEnabled: true
        }
    },
    {
        path: 'tooltip',
        loadChildren: () => Promise.all(/*! import() | components-tooltip-components-tooltip-module */[__webpack_require__.e("default~components-autocomplete-components-autocomplete-module~components-button-group-components-bu~319c71e2"), __webpack_require__.e("common"), __webpack_require__.e("components-tooltip-components-tooltip-module")]).then(__webpack_require__.bind(null, /*! ./components-tooltip/components-tooltip.module */ "./src/app/pages/ui/components/components-tooltip/components-tooltip.module.ts")).then(m => m.ComponentsTooltipModule),
        data: {
            containerEnabled: true
        }
    }
];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComponentsRoutingModule);



/***/ }),

/***/ "./src/app/pages/ui/components/components.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ui/components/components.module.ts ***!
  \**********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-routing.module */ "./src/app/pages/ui/components/components-routing.module.ts");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsRoutingModule"]
        ]
    })
], ComponentsModule);



/***/ })

}]);
//# sourceMappingURL=pages-ui-components-components-module.js.map