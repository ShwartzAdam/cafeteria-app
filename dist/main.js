(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _order_order_incoming_order_incoming_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order-incoming/order-incoming.component */ "./src/app/order/order-incoming/order-incoming.component.ts");
/* harmony import */ var _order_order_active_order_active_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/order-active/order-active.component */ "./src/app/order/order-active/order-active.component.ts");
/* harmony import */ var _order_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/order-complete/order-complete.component */ "./src/app/order/order-complete/order-complete.component.ts");
/* harmony import */ var _menu_menu_storage_menu_storage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu-storage/menu-storage.component */ "./src/app/menu/menu-storage/menu-storage.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/auth-layout.component */ "./src/app/layouts/auth-layout.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components for routes










// guards



var appRoutes = [
    {
        path: '',
        component: _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_14__["HomeLayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
            {
                path: 'order',
                component: _order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
                children: [
                    { path: '', redirectTo: '/order', pathMatch: 'full' },
                    { path: 'incoming', component: _order_order_incoming_order_incoming_component__WEBPACK_IMPORTED_MODULE_6__["OrderIncomingComponent"] },
                    { path: 'active', component: _order_order_active_order_active_component__WEBPACK_IMPORTED_MODULE_7__["OrderActiveComponent"] },
                    { path: 'complete', component: _order_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_8__["OrderCompleteComponent"] }
                ]
            },
            {
                path: 'menu',
                component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                children: [
                    { path: '', redirectTo: '/menu', pathMatch: 'full' },
                    { path: 'storage', component: _menu_menu_storage_menu_storage_component__WEBPACK_IMPORTED_MODULE_9__["MenuStorageComponent"] }
                ],
            },
            { path: 'charts',
                component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_5__["ChartsComponent"],
            },
            { path: 'emp',
                component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"],
            }
        ]
    },
    {
        path: '',
        component: _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full height\">\n  <div class=\"article\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../.././node_modules/semantic-ui/dist/semantic.css */ "./node_modules/semantic-ui/dist/semantic.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ng_semantic_ng_semantic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-semantic/ng-semantic */ "./node_modules/ng-semantic/ng-semantic.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _modules_material_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material-module.module */ "./src/app/modules/material-module.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _menu_menu_storage_menu_storage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu-storage/menu-storage.component */ "./src/app/menu/menu-storage/menu-storage.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/forgotpass/forgotpass.component */ "./src/app/auth/forgotpass/forgotpass.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _components_orderinfo_orderdetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/orderinfo/orderdetails.component */ "./src/app/components/orderinfo/orderdetails.component.ts");
/* harmony import */ var _components_userInfo_userdetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/userInfo/userdetails.component */ "./src/app/components/userInfo/userdetails.component.ts");
/* harmony import */ var _order_order_incoming_order_incoming_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order/order-incoming/order-incoming.component */ "./src/app/order/order-incoming/order-incoming.component.ts");
/* harmony import */ var _order_order_active_order_active_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order/order-active/order-active.component */ "./src/app/order/order-active/order-active.component.ts");
/* harmony import */ var _order_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./order/order-complete/order-complete.component */ "./src/app/order/order-complete/order-complete.component.ts");
/* harmony import */ var _components_modals_item_Item_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/modals/item/Item-add.component */ "./src/app/components/modals/item/Item-add.component.ts");
/* harmony import */ var _components_modals_item_item_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modals/item/item-edit.component */ "./src/app/components/modals/item/item-edit.component.ts");
/* harmony import */ var _components_modals_item_item_confirm_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modals/item/item-confirm.component */ "./src/app/components/modals/item/item-confirm.component.ts");
/* harmony import */ var _menu_menu_published_menu_published_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./menu/menu-published/menu-published.component */ "./src/app/menu/menu-published/menu-published.component.ts");
/* harmony import */ var _components_modals_order_order_confirm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/modals/order/order-confirm.component */ "./src/app/components/modals/order/order-confirm.component.ts");
/* harmony import */ var _components_modals_order_order_complete_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/modals/order/order-complete.component */ "./src/app/components/modals/order/order-complete.component.ts");
/* harmony import */ var _components_emp_invite_emp_invite_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/emp-invite/emp-invite.component */ "./src/app/components/emp-invite/emp-invite.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _components_emp_list_emp_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/emp-list/emp-list.component */ "./src/app/components/emp-list/emp-list.component.ts");
/* harmony import */ var _components_reports_bestUsers_best_users_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/reports/bestUsers/best-users.component */ "./src/app/components/reports/bestUsers/best-users.component.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _components_sort_sort_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/sort/sort.service */ "./src/app/components/sort/sort.service.ts");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _pipes_capitalizefirst_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/capitalizefirst.pipe */ "./src/app/pipes/capitalizefirst.pipe.ts");
/* harmony import */ var _pipes_time_order_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pipes/time-order.pipe */ "./src/app/pipes/time-order.pipe.ts");
/* harmony import */ var _components_sort_sortable_column_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/sort/sortable-column.component */ "./src/app/components/sort/sortable-column.component.ts");
/* harmony import */ var _components_sort_sort_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/sort/sort.directive */ "./src/app/components/sort/sort.directive.ts");
/* harmony import */ var _pipes_review_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pipes/review.pipe */ "./src/app/pipes/review.pipe.ts");
/* harmony import */ var _pipes_on_menu_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pipes/on-menu.pipe */ "./src/app/pipes/on-menu.pipe.ts");
/* harmony import */ var _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./layouts/auth-layout.component */ "./src/app/layouts/auth-layout.component.ts");
/* harmony import */ var _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./layouts/home-layout.component */ "./src/app/layouts/home-layout.component.ts");
/* harmony import */ var _classes_rxjs_operators__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./classes/rxjs-operators */ "./src/app/classes/rxjs-operators.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _components_reports_bestItems_best_items_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/reports/bestItems/best-items.component */ "./src/app/components/reports/bestItems/best-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules Added






// import { DataTablesModule } from 'angular-datatables';
// Main Component

// Sub Components
























// services







// data storage

// pipes






// layouts components






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _menu_menu_storage_menu_storage_component__WEBPACK_IMPORTED_MODULE_11__["MenuStorageComponent"],
                _components_modals_item_Item_add_component__WEBPACK_IMPORTED_MODULE_22__["ItemAddComponent"],
                _components_modals_item_item_edit_component__WEBPACK_IMPORTED_MODULE_23__["ItemEditComponent"],
                _components_modals_item_item_confirm_component__WEBPACK_IMPORTED_MODULE_24__["ItemConfirmComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _auth_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_14__["ForgotpassComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"],
                _charts_charts_component__WEBPACK_IMPORTED_MODULE_16__["ChartsComponent"],
                _order_order_incoming_order_incoming_component__WEBPACK_IMPORTED_MODULE_19__["OrderIncomingComponent"],
                _order_order_active_order_active_component__WEBPACK_IMPORTED_MODULE_20__["OrderActiveComponent"],
                _order_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_21__["OrderCompleteComponent"],
                _components_userInfo_userdetails_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailsComponent"],
                _components_orderinfo_orderdetails_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailsComponent"],
                _pipes_capitalizefirst_pipe__WEBPACK_IMPORTED_MODULE_41__["CapitalizeFirstPipe"],
                _pipes_time_order_pipe__WEBPACK_IMPORTED_MODULE_42__["TimeOrderPipe"],
                _pipes_review_pipe__WEBPACK_IMPORTED_MODULE_45__["ReviewPipe"],
                _pipes_on_menu_pipe__WEBPACK_IMPORTED_MODULE_46__["MenuPipe"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _components_sort_sortable_column_component__WEBPACK_IMPORTED_MODULE_43__["SortableColumnComponent"],
                _components_sort_sort_directive__WEBPACK_IMPORTED_MODULE_44__["SortableTableDirective"],
                _components_emp_invite_emp_invite_component__WEBPACK_IMPORTED_MODULE_28__["EmployeeInviteComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_29__["EmployeeComponent"],
                _components_emp_list_emp_list_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeListComponent"],
                _menu_menu_published_menu_published_component__WEBPACK_IMPORTED_MODULE_25__["MenuPublishedComponent"],
                _components_modals_order_order_confirm_component__WEBPACK_IMPORTED_MODULE_26__["OrderConfirmComponent"],
                _components_modals_order_order_complete_component__WEBPACK_IMPORTED_MODULE_27__["OrderCompComponent"],
                _layouts_auth_layout_component__WEBPACK_IMPORTED_MODULE_47__["AuthLayoutComponent"],
                _layouts_home_layout_component__WEBPACK_IMPORTED_MODULE_48__["HomeLayoutComponent"],
                _components_reports_bestUsers_best_users_component__WEBPACK_IMPORTED_MODULE_32__["BestUsersComponent"],
                _components_reports_bestItems_best_items_component__WEBPACK_IMPORTED_MODULE_52__["BestItemsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng_semantic_ng_semantic__WEBPACK_IMPORTED_MODULE_2__["NgSemanticModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                // DataTablesModule,
                _modules_material_module_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_orderlist_service__WEBPACK_IMPORTED_MODULE_34__["OrderListService"],
                _services_order_service__WEBPACK_IMPORTED_MODULE_33__["OrderService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_35__["UserService"],
                _services_item_service__WEBPACK_IMPORTED_MODULE_36__["ItemService"],
                _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_40__["UserData"],
                _components_sort_sort_service__WEBPACK_IMPORTED_MODULE_39__["SortService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_38__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"],
                _services_query_service__WEBPACK_IMPORTED_MODULE_51__["QueryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        console.log('can activate');
        console.log(next);
        console.log(state);
        console.log(this.authService.isLoggedIn);
        return this.authService.isLoggedIn // {1}
            .take(1) // {2}
            .map(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']); // {4}
                return false;
            }
            return true;
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false); // {1}
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.loginSucc = function () {
        this.loggedIn.next(true);
        this.router.navigate(['/dashboard']);
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/forgotpass/forgotpass.component.css":
/*!**********************************************************!*\
  !*** ./src/app/auth/forgotpass/forgotpass.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/forgotpass/forgotpass.component.html":
/*!***********************************************************!*\
  !*** ./src/app/auth/forgotpass/forgotpass.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui one column grid\">\n      <a routerLink=\"/home\">\n        <button class=\"ui inverted red button\">\n          <i class=\"chevron circle left icon\"></i>\n          Return\n        </button>\n      </a>\n    </div>\n    <div class=\"ui one column grid\">\n      <div class=\"column\">\n        <img class=\"ui centered circular massive image\" src=\"../../../../../ionic-project/student-app/src/assets/png/Logo_Little%20Cafeteria.png\">\n      </div>\n      <div class=\"column\">\n        <h3 class=\"ui grey inverted header centered\"> Welcome to Little Cafeteria</h3>\n      </div>\n    </div>\n      <div class=\"ui one column grid\">\n        <div class=\"column\">\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" placeholder=\"Email\">\n            <i class=\"users icon\"></i>\n          </div>\n        </div>\n        <div class=\"column\">\n          <div class=\"ui fluid icon input\">\n            <input type=\"text\" placeholder=\"Repeat Email\">\n            <i class=\"users icon\"></i>\n          </div>\n        </div>\n        <div class=\"column\">\n          <button class=\"fluid large ui teal button\">RECOVER PASSWORD TO E-MAIL</button>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/forgotpass/forgotpass.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/forgotpass/forgotpass.component.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassComponent", function() { return ForgotpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotpassComponent = /** @class */ (function () {
    function ForgotpassComponent() {
    }
    ForgotpassComponent.prototype.ngOnInit = function () {
    };
    ForgotpassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.component.html */ "./src/app/auth/forgotpass/forgotpass.component.html"),
            styles: [__webpack_require__(/*! ./forgotpass.component.css */ "./src/app/auth/forgotpass/forgotpass.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotpassComponent);
    return ForgotpassComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grouped.fields{\n  color:#fff;\n}\n.ui.checkbox label {\n  color: #fff !important;\n}\n.large.ui.button{\n  background-color: #094C38 !important;\n  font-size: 1.40em;\n  color: #fff;\n  letter-spacing: 3px;\n}\n.ui.button{\n  background-color: #CCCCCC !important;\n  color: #fff;\n}\n.ui.button:hover{\n  background-color: #2A7C63 !important;\n  color: #fff;\n\n}\n.ui.vertical.segment{\n  background-color: #2A7C63 !important;\n  margin-top: 3%;\n  margin-bottom: 5%;\n}\n.ui.segment{\n  background-color: #5DC7A7 !important;\n  border-radius: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui center aligned segment\">\n      <div class=\"ui active dimmer\" *ngIf=\"loading\">\n        <div class=\"ui medium text loader\">Loading...</div>\n      </div>\n      <div class=\"ui one column grid\">\n        <div class=\"column\">\n          <img class=\"ui centered image\" src=\"../../../assets/png/littlecafe.png\">\n        </div>\n      </div>\n      <form (ngSubmit)=\"login()\" #registerForm=\"ngForm\">\n        <div class=\"ui one column grid\">\n          <div class=\"column\">\n            <div class=\"ui icon input\">\n              <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"registerCredentials.email\" required>\n              <i class=\"users icon\"></i>\n            </div>\n          </div>\n          <div class=\"column\">\n            <div class=\"ui icon input\">\n              <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"registerCredentials.password\" required>\n              <i class=\"key icon\"></i>\n            </div>\n          </div>\n          <div class=\"column\">\n            <div class=\"ui large buttons\">\n              <button class=\"ui button\" type=\"button\" (click)=\"setRole('Manager')\">Manager</button>\n              <div class=\"or\"></div>\n              <button class=\"ui button\" type=\"button\" (click)=\"setRole('Employee')\">Employee</button>\n            </div>\n          </div>\n          <div class=\"column\">\n            <button class=\"large ui button\" type=\"submit\"  [disabled]=\"!registerForm.form.valid\">Login</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-data/user-data.service */ "./src/app/services/user-data/user-data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, userData, authService) {
        this.userService = userService;
        this.userData = userData;
        this.authService = authService;
        this.loading = false;
        this.registerCredentials = { email: '', password: '', role: '' };
    }
    LoginComponent.prototype.setRole = function (s) {
        this.registerCredentials.role = s;
        console.log(this.registerCredentials.role);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.registerCredentials);
        this.loading = true;
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].interval(1000).take(1).subscribe(function () {
            return _this.userService.getUser(_this.registerCredentials).then(function (result) {
                if (result) {
                    console.log('Log In Successful, UID: ' + result['userid']);
                    _this.userData.setUserId(result['userid']);
                    _this.authService.loginSucc();
                    console.log(_this.authService.isLoggedIn);
                    _this.loading = false;
                }
            }).catch(function (err) {
                console.log(err);
                _this.loading = false;
                console.log('bad input for loggin');
                if (_this.registerCredentials.role === '') {
                    jQuery.uiAlert({
                        textHead: 'Error Login',
                        text: 'Choose a role - Manager or Employee',
                        bgcolor: '#DB2828',
                        textcolor: '#fff',
                        position: 'top-right',
                        icon: 'remove circle',
                        time: 3,
                    });
                }
                else {
                    jQuery.uiAlert({
                        textHead: 'Error Login',
                        text: 'Email or password are incorrect',
                        bgcolor: '#DB2828',
                        textcolor: '#fff',
                        position: 'top-right',
                        icon: 'remove circle',
                        time: 3,
                    });
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_user_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserData"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui one column grid\">\n      <a routerLink=\"/home\">\n        <button class=\"ui inverted red button\">\n          <i class=\"chevron circle left icon\"></i>\n          Return\n        </button>\n      </a>\n    </div>\n    <div class=\"ui one column grid\">\n      <div class=\"column\">\n        <img class=\"ui centered circular massive image\" src=\"../../../../../ionic-project/student-app/src/assets/png/Logo_Little%20Cafeteria.png\">\n      </div>\n      <div class=\"column\">\n        <h3 class=\"ui grey inverted header centered\"> Insert you personal information below...</h3>\n      </div>\n    </div>\n    <div class=\"ui one column grid\">\n      <div class=\"column\">\n        <div class=\"ui fluid icon input\">\n          <input type=\"text\" placeholder=\"First Name\">\n          <i class=\"users icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui fluid icon input\">\n          <input type=\"text\" placeholder=\"Last Name\">\n          <i class=\"users icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui fluid icon input\">\n          <input type=\"text\" placeholder=\"Email\">\n          <i class=\"users icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui fluid icon input\">\n          <input type=\"text\" placeholder=\"Telephone\">\n          <i class=\"users icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui fluid icon input\">\n          <input type=\"text\" placeholder=\"Password\">\n          <i class=\"users icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui fluid icon input\">\n          <input type=\"text\" placeholder=\"Repeat Password\">\n          <i class=\"users icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <button class=\"fluid large ui teal button\">CREATE ACCOUNT</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.component.css":
/*!*********************************************!*\
  !*** ./src/app/charts/charts.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/charts/charts.component.html":
/*!**********************************************!*\
  !*** ./src/app/charts/charts.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui two column centered grid\">\n        <div class=\"column\">\n          <div class=\"ui segment\">\n            <h2 class=\"ui block header\">\n              <i class=\"small map icon\"></i>\n              <div class=\"content\">\n                Best Users This Month\n                <div class=\"sub header\">List of users who spend the most</div>\n              </div>\n            </h2>\n            <app-charts-users [option]=\"'MonthBestUsers'\"></app-charts-users>\n          </div>\n        </div>\n        <div class=\"column\">\n          <div class=\"ui segment\">\n            <h2 class=\"ui block header\">\n              <i class=\"small map icon\"></i>\n              <div class=\"content\">\n                Best Users Of Week\n                <div class=\"sub header\">List of users who spend the most</div>\n              </div>\n            </h2>\n            <app-charts-users [option]=\"'WeekBestUsers'\"></app-charts-users>\n          </div>\n        </div>\n        <div class=\"column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small map icon\"></i>\n            <div class=\"content\">\n              Best Users Of Today\n              <div class=\"sub header\">List of users who spend the most</div>\n            </div>\n          </h2>\n          <app-charts-users [option]=\"'TodayBestUsers'\"></app-charts-users>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small map icon\"></i>\n            <div class=\"content\">\n              Best Items Of Today\n              <div class=\"sub header\">List of items and theirs performance</div>\n            </div>\n          </h2>\n          <app-charts-items [option]=\"'TodayBestItems'\"></app-charts-items>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small map icon\"></i>\n            <div class=\"content\">\n              Best Items Of Week\n              <div class=\"sub header\">List of items and theirs performance</div>\n            </div>\n          </h2>\n          <app-charts-items [option]=\"'WeekBestItems'\"></app-charts-items>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small map icon\"></i>\n            <div class=\"content\">\n              Best Items Of Month\n              <div class=\"sub header\">List of items and theirs performance</div>\n            </div>\n          </h2>\n          <app-charts-items [option]=\"'MonthBestItems'\"></app-charts-items>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/*!********************************************!*\
  !*** ./src/app/charts/charts.component.ts ***!
  \********************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.css */ "./src/app/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/classes/item.ts":
/*!*********************************!*\
  !*** ./src/app/classes/item.ts ***!
  \*********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(init) {
        this.itemid = 0;
        this.supid = 1;
        this.name = "";
        this.description = "";
        this.qty = 0;
        this.url = "";
        this.price = 0;
        this.type = "";
        this.ispublished = false;
        this.preptime = 0;
        Object.assign(this, init);
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/classes/order.ts":
/*!**********************************!*\
  !*** ./src/app/classes/order.ts ***!
  \**********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(init) {
        this.orderid = 0;
        this.itemid = 0;
        this.olid = 0;
        this.qty = 0;
        Object.assign(this, init);
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/classes/orderlist.ts":
/*!**************************************!*\
  !*** ./src/app/classes/orderlist.ts ***!
  \**************************************/
/*! exports provided: OrderList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderList", function() { return OrderList; });
var OrderList = /** @class */ (function () {
    function OrderList(init) {
        this.olid = 0;
        this.userid = 0;
        this.totalprice = 0;
        this.ol_dttm = "default";
        this.ol_dttm_real = "default";
        this.status = "default";
        this.hasreview = false;
        this.totalpreptime = 0;
        Object.assign(this, init);
    }
    return OrderList;
}());



/***/ }),

/***/ "./src/app/classes/rxjs-operators.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/rxjs-operators.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
// Observable class extensions

// Observable operators






/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(init) {
        this.userid = 0;
        this.email = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.phone = "";
        this.url = "";
        this.role = "";
        this.credit = 0;
        Object.assign(this, init);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/emp-invite/emp-inivte.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/emp-invite/emp-inivte.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/emp-invite/emp-inivte.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/emp-invite/emp-inivte.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"inviteEmployee()\" #registerForm=\"ngForm\">\n  <div class=\"ui center aligned two column grid\">\n    <div class=\"row\">\n      <div class=\"column\">\n        <div class=\"ui icon input\">\n          <input type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"registerCredentials.email\" required>\n          <i class=\"inbox icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui icon input\">\n          <input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"registerCredentials.password\" required>\n          <i class=\"keyboard icon\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"column\">\n        <div class=\"ui icon input\">\n          <input type=\"text\" placeholder=\"First Name\" name=\"firstname\" [(ngModel)]=\"registerCredentials.firstname\" required>\n          <i class=\"user circle  icon\"></i>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui icon input\">\n          <input type=\"text\" placeholder=\"Last Name\" name=\"lastname\" [(ngModel)]=\"registerCredentials.lastname\" required>\n          <i class=\"user circle icon\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"column\">\n        <div class=\"ui icon input\">\n          <input type=\"text\" placeholder=\"Phone\" name=\"phone\" [(ngModel)]=\"registerCredentials.phone\" required>\n          <i class=\"phone icon\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <button class=\"large ui teal button\" type=\"submit\"  [disabled]=\"!registerForm.form.valid\">Invite</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/emp-invite/emp-invite.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/emp-invite/emp-invite.component.ts ***!
  \***************************************************************/
/*! exports provided: EmployeeInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeInviteComponent", function() { return EmployeeInviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeInviteComponent = /** @class */ (function () {
    function EmployeeInviteComponent(userPro) {
        this.userPro = userPro;
        this.userReg = new _classes_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.registerCredentials = { email: '',
            password: '',
            firstname: '',
            lastname: '',
            phone: ''
        };
    }
    EmployeeInviteComponent.prototype.inviteEmployee = function () {
        var _this = this;
        console.log('Invite an Employee to the system');
        this.userReg.email = this.registerCredentials.email;
        this.userReg.firstname = this.registerCredentials.firstname;
        this.userReg.lastname = this.registerCredentials.lastname;
        this.userReg.password = this.registerCredentials.password;
        this.userReg.phone = this.registerCredentials.phone;
        this.userReg.role = 'Employee';
        this.userReg.url = 'None';
        this.userReg.credit = 0;
        this.userPro.createUser(this.userReg).then(function (res) {
            console.log(res);
            _this.cleanForm();
        });
    };
    EmployeeInviteComponent.prototype.cleanForm = function () {
        this.registerCredentials.email = '';
        this.registerCredentials.firstname = '';
        this.registerCredentials.lastname = '';
        this.registerCredentials.password = '';
        this.registerCredentials.phone = '';
    };
    EmployeeInviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-invite',
            template: __webpack_require__(/*! ./emp-inivte.component.html */ "./src/app/components/emp-invite/emp-inivte.component.html"),
            styles: [__webpack_require__(/*! ./emp-inivte.component.css */ "./src/app/components/emp-invite/emp-inivte.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], EmployeeInviteComponent);
    return EmployeeInviteComponent;
}());



/***/ }),

/***/ "./src/app/components/emp-list/emp-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/emp-list/emp-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/emp-list/emp-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/emp-list/emp-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n  <div class=\"ui three column centered grid\">\n    <table  class=\"ui compact celled definition table\">\n      <!-- datatable [dtOptions]=\"dtOptions\" -->\n      <thead class=\"full-width\">\n      <tr>\n        <th>ID</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Phone Name</th>\n        <th>Email</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.userid}}</td>\n        <td>{{user.firstname}}</td>\n        <td>{{user.lastname}}</td>\n        <td>{{user.phone}}</td>\n        <td>{{user.email}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/emp-list/emp-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/emp-list/emp-list.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = /** @class */ (function () {
    // dtOptions: DataTables.Settings = {};
    function EmployeeListComponent(userPro) {
        this.userPro = userPro;
        this.users = new Array();
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit - Employee list");
        /*this.dtOptions = {
          searching: false,
          ordering:  false,
          info: false,
          pageLength: 7,
          lengthChange: false
        };
        */
    };
    EmployeeListComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit - Employee list");
        this.getAllEmps();
    };
    EmployeeListComponent.prototype.getAllEmps = function () {
        var _this = this;
        /*
        this.userPro.getUserByRole('Employee').then(
          (usersRes: any) => {
             usersRes.forEach(user => {
                this.users.push(user);
             });
          });
        */
        this.userPro.getUserByRole('Employee').subscribe(function (res) {
            _this.users = res;
            console.log(_this.users);
        });
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./emp-list.component.html */ "./src/app/components/emp-list/emp-list.component.html"),
            styles: [__webpack_require__(/*! ./emp-list.component.css */ "./src/app/components/emp-list/emp-list.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/item/Item-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/modals/item/Item-add.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAddComponent", function() { return ItemAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/item */ "./src/app/classes/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemAddComponent = /** @class */ (function () {
    function ItemAddComponent(itemService) {
        this.itemService = itemService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.item = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
        this.suppliers = new Array();
    }
    ItemAddComponent.prototype.ngOnInit = function () {
    };
    ItemAddComponent.prototype.action = function (event) {
        var _this = this;
        if (event === 'Upload') {
            console.log('UPLOAD Item');
            console.log(this.item);
            this.itemService.createItem(this.item).then(function (res) {
                console.log(res);
                _this.notify.emit('Add');
            });
        }
        else {
            console.log('Cancel and exit add Item mod');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemAddComponent.prototype, "notify", void 0);
    ItemAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-modal-add',
            template: __webpack_require__(/*! ./item-add.component.html */ "./src/app/components/modals/item/item-add.component.html"),
            styles: [__webpack_require__(/*! ./item-add.component.css */ "./src/app/components/modals/item/item-add.component.css")],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]]
        }),
        __metadata("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ItemAddComponent);
    return ItemAddComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/item/item-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/modals/item/item-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modals/item/item-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/modals/item/item-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui add modal\">\n  <div class=\"header\">\n    Add A New Item To The Cafeteria\n  </div>\n  <div class=\"ui internally celled grid\">\n      <div class=\"row\">\n        <div class=\"three wide column\">\n          <div class=\"ui left aligned image content\">\n            <img class=\"ui centered small circular image padding\" src=\"../../../../assets/png/item.png\">\n            <label>Click To Upload Image</label>\n          </div>\n        </div>\n        <div class=\"eleven wide column\">\n          <div class=\"ui form\">\n            <div class=\"two fields\">\n              <div class=\"field\">\n                <label>Item Name</label>\n                <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"item.name\" required>\n              </div>\n              <div class=\"field\">\n                <label>Item Description</label>\n                <textarea rows=\"4\" [(ngModel)]=\"item.description\" required>\n                </textarea>\n              </div>\n            </div>\n            <div class=\"three fields\">\n              <div class=\"field\">\n                <label>Item Price</label>\n                <input type=\"text\" placeholder=\"Price\" [(ngModel)]=\"item.price\">\n              </div>\n              <div class=\"field\">\n                <label>Item Quantity</label>\n                <input type=\"text\" placeholder=\"Quantity\" [(ngModel)]=\"item.qty\">\n              </div>\n              <div class=\"field\">\n                <label>Item Type</label>\n                <select class=\"ui fluid search dropdown\" [(ngModel)]=\"item.type\">\n                  <option value=\"Drink\">Dish</option>\n                  <option value=\"Food\">Pastry</option>\n                  <option value=\"Food\">Drink</option>\n                  <option value=\"Food\">Sandwich</option>\n                  <option value=\"Food\">Snack</option>\n                </select>\n              </div>\n              <div class=\"field\">\n                <label>Time Preparation</label>\n                <input type=\"text\" placeholder=\"5 Min..\"  [(ngModel)]=\"item.preptime\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui left floated red cancel button\" (click)=\"action('Cancel')\" >\n      <i class=\"remove icon\"></i>\n      Cancel\n    </div>\n    <div class=\"ui green ok button\" (click)=\"action('Upload')\">\n      <i class=\"checkmark icon\"></i>\n      Upload\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modals/item/item-confirm.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/modals/item/item-confirm.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modals/item/item-confirm.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/modals/item/item-confirm.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui confirm modal\">\n  <div class=\"ui icon header\">\n    <i class=\"archive icon\"></i>\n    Action confirmation\n  </div>\n  <div class=\"content\">\n    <div class=\"ui centered header\">\n      <h1>Are you sure to want to delete this item? </h1>\n      <p> Item Name : <span>{{item.name}}</span></p>\n      <p> Item Type : <span>{{item.type}}</span></p>\n      <p> Item Desc : <span>{{item.description}}</span></p>\n    </div>\n\n\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui left floated red cancel button\" (click)=\"action('Cancel')\">\n      <i class=\"remove icon\"></i>\n      No\n    </div>\n    <div class=\"ui green ok button\" (click)=\"action('Ok')\">\n      <i class=\"checkmark icon\"></i>\n      Yes\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modals/item/item-confirm.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/modals/item/item-confirm.component.ts ***!
  \******************************************************************/
/*! exports provided: ItemConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConfirmComponent", function() { return ItemConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/item */ "./src/app/classes/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemConfirmComponent = /** @class */ (function () {
    function ItemConfirmComponent(itemService) {
        this.itemService = itemService;
        this.itemInputDelete = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.item = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
    }
    ItemConfirmComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            return;
        }
        else {
            console.log(changes.itemInputDelete.currentValue);
            this.item = changes.itemInputDelete.currentValue;
        }
    };
    ItemConfirmComponent.prototype.action = function (event) {
        var _this = this;
        if (event === 'Ok') {
            console.log('Delete Item : ' + this.item.itemid);
            this.itemService.deleteItem(this.item.itemid).then(function (res) {
                console.log(res);
                _this.notify.emit('Delete');
                // event to tell the table to referesh
            });
        }
        else {
            console.log('Exit Confirm Modal');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"])
    ], ItemConfirmComponent.prototype, "itemInputDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemConfirmComponent.prototype, "notify", void 0);
    ItemConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-modal-confirm',
            template: __webpack_require__(/*! ./item-confirm.component.html */ "./src/app/components/modals/item/item-confirm.component.html"),
            styles: [__webpack_require__(/*! ./item-confirm.component.css */ "./src/app/components/modals/item/item-confirm.component.css")],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]]
        }),
        __metadata("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ItemConfirmComponent);
    return ItemConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/item/item-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/modals/item/item-edit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modals/item/item-edit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/modals/item/item-edit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui edit modal\">\n  <div class=\"ui icon header\">\n    <i class=\"edit icon\"></i>\n    Edit An Existing Item In The Cafeteria\n  </div>\n  <div class=\"ui internally celled grid\">\n    <div class=\"row\">\n      <div class=\"three wide column\">\n        <div class=\"ui left aligned image content\">\n          <img class=\"ui centered small circular image padding\" src=\"../../../../assets/png/item.png\">\n          <label>Click To Change Image</label>\n        </div>\n      </div>\n      <div class=\"eleven wide column\">\n        <div class=\"ui form\">\n          <div class=\"two fields\">\n            <div class=\"field\">\n              <label>Item Name</label>\n              <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"item.name\" required>\n            </div>\n            <div class=\"field\">\n              <label>Item Description</label>\n              <textarea rows=\"2\" [(ngModel)]=\"item.description\" required>\n                </textarea>\n            </div>\n          </div>\n          <div class=\"three fields\">\n            <div class=\"field\">\n              <label>Item Price</label>\n              <input type=\"text\" placeholder=\"Price\" [(ngModel)]=\"item.price\">\n            </div>\n            <div class=\"field\">\n              <label>Item Quantity</label>\n              <input type=\"text\" placeholder=\"Quantity\" [(ngModel)]=\"item.qty\">\n            </div>\n            <div class=\"field\">\n              <label>Item Type</label>\n              <select class=\"ui fluid search dropdown\" [(ngModel)]=\"item.type\">\n                <option value=\"Drink\">Dish</option>\n                <option value=\"Food\">Pastry</option>\n                <option value=\"Food\">Drink</option>\n                <option value=\"Food\">Sandwich</option>\n                <option value=\"Food\">Snack</option>\n              </select>\n            </div>\n            <div class=\"field\">\n              <label>Time Preparation</label>\n              <input type=\"text\" placeholder=\"5 Min..\"  [(ngModel)]=\"item.preptime\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui left floated red cancel button\" (click)=\"action('Cancel')\" >\n      <i class=\"remove icon\"></i>\n      Cancel\n    </div>\n    <div class=\"ui green ok button\" (click)=\"action('Upload The Changes')\">\n      <i class=\"checkmark icon\"></i>\n      Upload\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modals/item/item-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/modals/item/item-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function() { return ItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/item */ "./src/app/classes/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>



var ItemEditComponent = /** @class */ (function () {
    function ItemEditComponent(itemService) {
        this.itemService = itemService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemEditComponent.prototype.ngOnInit = function () {
        this.itemInputEdit = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
        this.item = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
    };
    ItemEditComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            return;
        }
        else {
            console.log(changes.itemInputEdit.currentValue);
            this.item = changes.itemInputEdit.currentValue;
        }
    };
    ItemEditComponent.prototype.ngOnDestroy = function () {
        console.log(event);
    };
    ItemEditComponent.prototype.action = function (event) {
        var _this = this;
        if (event === 'Upload The Changes') {
            console.log('UPLOAD changed Item');
            console.log(this.item);
            console.log(this.itemInputEdit);
            // create the object and update
            this.itemService.updateItem(this.item).then(function (res) {
                console.log(res);
                _this.notify.emit('Edit');
            });
        }
        else {
            console.log('Cancel and exit add Item mod');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemEditComponent.prototype, "notify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"])
    ], ItemEditComponent.prototype, "itemInputEdit", void 0);
    ItemEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-modal-edit',
            template: __webpack_require__(/*! ./item-edit.component.html */ "./src/app/components/modals/item/item-edit.component.html"),
            styles: [__webpack_require__(/*! ./item-edit.component.css */ "./src/app/components/modals/item/item-edit.component.css")],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]]
        }),
        __metadata("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ItemEditComponent);
    return ItemEditComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/order/order-complete.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/modals/order/order-complete.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modals/order/order-complete.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/modals/order/order-complete.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui complete order modal\">\n  <div class=\"ui icon header\">\n    <i class=\"archive icon\"></i>\n    Action confirmation - Order Complete\n  </div>\n  <div class=\"content\">\n    <div class=\"ui centered header\">\n      <h1>Does this order is ready for pick up by the student ? </h1>\n      <p> Order ID : <span>{{order?.olid}}</span></p>\n      <p> Order Pick Up Time : <span>{{order?.ol_dttm | date: 'medium'}}</span></p>\n      <p> Order Total Price : <span>{{order?.totalprice}} &#8362;</span></p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui left floated red cancel button\" (click)=\"action('Cancel')\">\n      <i class=\"remove icon\"></i>\n      No\n    </div>\n    <div class=\"ui green ok button\" (click)=\"action('Ok')\">\n      <i class=\"checkmark icon\"></i>\n      Yes\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modals/order/order-complete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/modals/order/order-complete.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompComponent", function() { return OrderCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/orderlist */ "./src/app/classes/orderlist.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderCompComponent = /** @class */ (function () {
    function OrderCompComponent(orderListService) {
        this.orderListService = orderListService;
        this.orderInputConf = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"];
        this.notifyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.order = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"];
    }
    OrderCompComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            console.log(changes);
            return;
        }
        else {
            console.log(changes.orderInputConf.currentValue);
            this.order = changes.orderInputConf.currentValue;
        }
    };
    OrderCompComponent.prototype.action = function (event) {
        var _this = this;
        if (event === 'Ok') {
            console.log('Order has been complete and ready for pickup - Order List ID : ' + this.order.olid);
            this.order.status = 'Complete';
            this.orderListService.updateOrderList(this.order).then(function (res) {
                console.log(res);
                _this.notifyChange.emit('Order Complete');
                jQuery.uiAlert({
                    textHead: 'Order has been completed',
                    text: 'An order has been completed and moved to the complete table',
                    bgcolor: '#F2711C',
                    textcolor: '#fff',
                    position: 'top-right',
                    icon: 'warning sign',
                    time: 5,
                });
            });
        }
        else {
            console.log('Exit Confirm Modal');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"])
    ], OrderCompComponent.prototype, "orderInputConf", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrderCompComponent.prototype, "notifyChange", void 0);
    OrderCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-modal-complete',
            template: __webpack_require__(/*! ./order-complete.component.html */ "./src/app/components/modals/order/order-complete.component.html"),
            styles: [__webpack_require__(/*! ./order-complete.component.css */ "./src/app/components/modals/order/order-complete.component.css")],
            providers: [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]])
    ], OrderCompComponent);
    return OrderCompComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/order/order-confirm.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/modals/order/order-confirm.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modals/order/order-confirm.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/modals/order/order-confirm.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui confirm order modal\">\n  <div class=\"ui icon header\">\n    <i class=\"archive icon\"></i>\n    Action confirmation - Start Making The Order\n  </div>\n  <div class=\"content\">\n    <div class=\"ui centered header\">\n      <h1>Are you sure to want to start this order list? </h1>\n      <p> Order ID : <span>{{order?.olid}}</span></p>\n      <p> Order Pick Up Time : <span>{{order?.ol_dttm | date: 'medium'}}</span></p>\n      <p> Order Total Price : <span>{{order?.totalprice}} &#8362;</span></p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui left floated red cancel button\" (click)=\"action('Cancel')\">\n      <i class=\"remove icon\"></i>\n      No\n    </div>\n    <div class=\"ui green ok button\" (click)=\"action('Ok')\">\n      <i class=\"checkmark icon\"></i>\n      Yes\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/modals/order/order-confirm.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/modals/order/order-confirm.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmComponent", function() { return OrderConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/orderlist */ "./src/app/classes/orderlist.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderConfirmComponent = /** @class */ (function () {
    function OrderConfirmComponent(orderListService) {
        this.orderListService = orderListService;
        this.orderInputConf = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"];
        this.notifyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.order = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"];
    }
    OrderConfirmComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            console.log(changes);
            return;
        }
        else {
            console.log("current value in comfirm :");
            console.log(changes.orderInputConf.currentValue);
            this.order = changes.orderInputConf.currentValue;
        }
    };
    OrderConfirmComponent.prototype.action = function (event) {
        var _this = this;
        if (event === 'Ok') {
            console.log('Start Making Order List ID : ' + this.order.olid);
            this.order.status = 'Active';
            this.order.ol_dttm_real = new Date().toISOString();
            this.orderListService.updateOrderList(this.order).then(function (res) {
                console.log(res);
                _this.notifyChange.emit('Update Table');
                jQuery.uiAlert({
                    textHead: 'Order has been activated',
                    text: 'An order has been started and moved to the active table',
                    bgcolor: '#F2711C',
                    textcolor: '#fff',
                    position: 'top-right',
                    icon: 'warning sign',
                    time: 5,
                });
            });
        }
        else {
            console.log('Exit Confirm Modal');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"])
    ], OrderConfirmComponent.prototype, "orderInputConf", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrderConfirmComponent.prototype, "notifyChange", void 0);
    OrderConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-modal-confirm',
            template: __webpack_require__(/*! ./order-confirm.component.html */ "./src/app/components/modals/order/order-confirm.component.html"),
            styles: [__webpack_require__(/*! ./order-confirm.component.css */ "./src/app/components/modals/order/order-confirm.component.css")],
            providers: [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]])
    ], OrderConfirmComponent);
    return OrderConfirmComponent;
}());



/***/ }),

/***/ "./src/app/components/orderinfo/orderdetails.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/orderinfo/orderdetails.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/orderinfo/orderdetails.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/orderinfo/orderdetails.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"ui labeled icon button\" (click)=\"myModalNormal.show({inverted: false})\">\n  <i class=\"search plus icon\"></i>Info\n</button>\n<sm-modal title=\"Order List Details\" class=\"\" icon=\"clipboard\" #myModalNormal>\n  <modal-content>\n    <div class=\"ui six column grid\" *ngFor=\"let order of orders; let i = index\">\n        <div class=\"six column row\">\n          <div class=\"column\">\n            <strong>Order ID :</strong>\n          </div>\n          <div class=\"column\">\n            {{order.orderid}}\n          </div>\n        </div>\n      <div class=\"column\">\n        <strong>Item Name :</strong>\n      </div>\n      <div class=\"column\">\n        {{this.items[i]?.name}}\n      </div>\n      <div class=\"column\">\n        <strong>Item Quantity :</strong>\n      </div>\n      <div class=\"column\">\n        {{order.qty}}\n      </div>\n      <div class=\"column\">\n        <strong>Item Price :</strong>\n      </div>\n      <div class=\"column\">\n        {{this.items[i]?.price}} &#8362;\n      </div>\n    </div>\n    <div class=\"ui four column grid\">\n      <div class=\"column\">\n        <strong>Pick Up Time:</strong>\n      </div>\n      <div class=\"column\">\n       {{orderListRef?.ol_dttm | date: 'medium' }}\n      </div>\n    </div>\n    <div class=\"ui four column grid\">\n      <div class=\"column\">\n        <strong>Preperation Time:</strong>\n      </div>\n      <div class=\"column\">\n        {{orderListRef?.totalpreptime }} Minutes\n      </div>\n    </div>\n  </modal-content>\n  <modal-actions>\n    <div class=\"ui buttons\">\n      <div class=\"ui button primary\" (click)=\"myModalNormal.hide()\">Close</div>\n    </div>\n  </modal-actions>\n</sm-modal>\n"

/***/ }),

/***/ "./src/app/components/orderinfo/orderdetails.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/orderinfo/orderdetails.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var _classes_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/order */ "./src/app/classes/order.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/item */ "./src/app/classes/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(orderService, orderListService, itemService) {
        this.orderService = orderService;
        this.orderListService = orderListService;
        this.itemService = itemService;
        this.orders = new Array();
        this.items = new Array();
    }
    OrderDetailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!changes) {
            return;
        }
        else {
            this.orderListService.getOrderListById(this.olid).subscribe(function (res) {
                _this.orderListRef = res;
            });
            this.olid = changes.olid.currentValue;
            this.orderService.getOrdersByOrderListId(this.olid).then(function (resOrders) {
                resOrders.forEach(function (order) {
                    var _order = new _classes_order__WEBPACK_IMPORTED_MODULE_4__["Order"];
                    _order.orderid = order.orderid;
                    _order.olid = order.olid;
                    _order.itemid = order.itemid;
                    _order.qty = order.qty;
                    _this.orders.push(_order);
                });
                _this.orders.forEach(function (order) {
                    _this.itemService.getItemById(order.itemid).then(function (resItem) {
                        var _item = new _classes_item__WEBPACK_IMPORTED_MODULE_5__["Item"];
                        _item.itemid = order.itemid;
                        _item.name = resItem.name;
                        _item.price = resItem.price;
                        _this.items.push(_item);
                    });
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrderDetailsComponent.prototype, "olid", void 0);
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./orderdetails.component.html */ "./src/app/components/orderinfo/orderdetails.component.html"),
            styles: [__webpack_require__(/*! ./orderdetails.component.css */ "./src/app/components/orderinfo/orderdetails.component.css")],
            providers: [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _services_orderlist_service__WEBPACK_IMPORTED_MODULE_3__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _services_orderlist_service__WEBPACK_IMPORTED_MODULE_3__["OrderListService"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/bestItems/best-items.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/reports/bestItems/best-items.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reports/bestItems/best-items.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/reports/bestItems/best-items.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n  <!--\n  <div class=\"ui three column centered grid\">\n    <table  class=\"ui compact celled definition table\">\n      <thead class=\"full-width\">\n      <tr>\n        <th>ID</th>\n        <th>Email</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Total Spend</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.userid}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.firstname}}</td>\n        <td>{{user.lastname}} </td>\n        <td>{{user.total}} &#8362;</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  -->\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search..\">\n  </mat-form-field>\n  <div class=\"mat-elevation-z8\">\n    <mat-table #table matSort [dataSource]=\"dataSource\" >\n      <ng-container matColumnDef=\"itemid\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Item ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"  >{{element.itemid}}  </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" >{{element.name}}  </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"price\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Item Price </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" > {{element.price}}  </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"total\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Total Amount </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" >{{element.total}}  </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paging\n                   [length]=\"7\"\n                   [pageSize]=\"5\"\n                   [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reports/bestItems/best-items.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/reports/bestItems/best-items.component.ts ***!
  \**********************************************************************/
/*! exports provided: BestItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestItemsComponent", function() { return BestItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BestItemsComponent = /** @class */ (function () {
    function BestItemsComponent(queryPro) {
        this.queryPro = queryPro;
        this.items = [];
        this.displayedColumns = ['itemid', 'name', 'price', 'total'];
    }
    BestItemsComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit - Best Items report - ' + this.option);
        this.getReportBy(this.option);
    };
    BestItemsComponent.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit - Best Items report' + this.option);
    };
    BestItemsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    BestItemsComponent.prototype.getReportBy = function (s) {
        var _this = this;
        this.queryPro.getBestUsers(s).subscribe(function (itemArr) {
            console.log(itemArr);
            itemArr.forEach(function (it) {
                _this.items.push(it);
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.items);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BestItemsComponent.prototype, "option", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paging'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BestItemsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BestItemsComponent.prototype, "sort", void 0);
    BestItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts-items',
            template: __webpack_require__(/*! ./best-items.component.html */ "./src/app/components/reports/bestItems/best-items.component.html"),
            styles: [__webpack_require__(/*! ./best-items.component.css */ "./src/app/components/reports/bestItems/best-items.component.css")],
            providers: [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], BestItemsComponent);
    return BestItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/bestUsers/best-users.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/reports/bestUsers/best-users.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reports/bestUsers/best-users.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/reports/bestUsers/best-users.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n  <!--\n  <div class=\"ui three column centered grid\">\n    <table  class=\"ui compact celled definition table\">\n      <thead class=\"full-width\">\n      <tr>\n        <th>ID</th>\n        <th>Email</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Total Spend</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.userid}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.firstname}}</td>\n        <td>{{user.lastname}} </td>\n        <td>{{user.total}} &#8362;</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  -->\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search..\">\n  </mat-form-field>\n  <div class=\"mat-elevation-z8\">\n    <mat-table #table matSort [dataSource]=\"dataSource\" >\n      <ng-container matColumnDef=\"userid\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> User ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"  >{{element.userid}}  </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" >{{element.email}}  </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"firstname\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> First Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" >{{element.firstname}}  </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"lastname\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" > {{element.lastname}}  </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"total\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Total Spend </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" > {{element.total}} &#8362; </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paging\n                   [length]=\"7\"\n                   [pageSize]=\"5\"\n                   [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reports/bestUsers/best-users.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/reports/bestUsers/best-users.component.ts ***!
  \**********************************************************************/
/*! exports provided: BestUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestUsersComponent", function() { return BestUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BestUsersComponent = /** @class */ (function () {
    function BestUsersComponent(queryPro) {
        this.queryPro = queryPro;
        this.users = [];
        this.displayedColumns = ['userid', 'email', 'firstname', 'lastname', 'total'];
    }
    BestUsersComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit - Best Users report - " + this.option);
        this.getReportBy(this.option);
    };
    BestUsersComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit - Best Users report" + this.option);
    };
    BestUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    BestUsersComponent.prototype.getReportBy = function (s) {
        var _this = this;
        this.queryPro.getBestUsers(s).subscribe(function (userArr) {
            console.log(userArr);
            userArr.forEach(function (user) {
                _this.users.push(user);
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.users);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BestUsersComponent.prototype, "option", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paging'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BestUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BestUsersComponent.prototype, "sort", void 0);
    BestUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts-users',
            template: __webpack_require__(/*! ./best-users.component.html */ "./src/app/components/reports/bestUsers/best-users.component.html"),
            styles: [__webpack_require__(/*! ./best-users.component.css */ "./src/app/components/reports/bestUsers/best-users.component.css")],
            providers: [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], BestUsersComponent);
    return BestUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/sort/sort.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sort/sort.directive.ts ***!
  \***************************************************/
/*! exports provided: SortableTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableTableDirective", function() { return SortableTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.service */ "./src/app/components/sort/sort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableTableDirective = /** @class */ (function () {
    function SortableTableDirective(sortService) {
        this.sortService = sortService;
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SortableTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            _this.sorted.emit(event);
        });
    };
    SortableTableDirective.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SortableTableDirective.prototype, "sorted", void 0);
    SortableTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sortable-table]'
        }),
        __metadata("design:paramtypes", [_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]])
    ], SortableTableDirective);
    return SortableTableDirective;
}());



/***/ }),

/***/ "./src/app/components/sort/sort.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/sort/sort.service.ts ***!
  \*************************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortService = /** @class */ (function () {
    function SortService() {
        this.columnSortedSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.columnSorted$ = this.columnSortedSource.asObservable();
    }
    SortService.prototype.columnSorted = function (event) {
        this.columnSortedSource.next(event);
    };
    SortService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SortService);
    return SortService;
}());



/***/ }),

/***/ "./src/app/components/sort/sortable-column.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/sort/sortable-column.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-chevron-up\" *ngIf=\"sortDirection === 'asc'\" ></i>\n<i class=\"fa fa-chevron-down\" *ngIf=\"sortDirection === 'desc'\"></i>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/components/sort/sortable-column.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/sort/sortable-column.component.ts ***!
  \**************************************************************/
/*! exports provided: SortableColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableColumnComponent", function() { return SortableColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.service */ "./src/app/components/sort/sort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableColumnComponent = /** @class */ (function () {
    function SortableColumnComponent(sortService) {
        this.sortService = sortService;
        this.sortDirection = '';
    }
    SortableColumnComponent.prototype.sort = function () {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    };
    SortableColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            // reset this column's sort direction to hide the sort icons
            if (_this.columnName !== event.sortColumn) {
                _this.sortDirection = '';
            }
        });
    };
    SortableColumnComponent.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sortable-column'),
        __metadata("design:type", String)
    ], SortableColumnComponent.prototype, "columnName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sort-direction'),
        __metadata("design:type", String)
    ], SortableColumnComponent.prototype, "sortDirection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SortableColumnComponent.prototype, "sort", null);
    SortableColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[sortable-column]',
            template: __webpack_require__(/*! ./sortable-column.component.html */ "./src/app/components/sort/sortable-column.component.html")
        }),
        __metadata("design:paramtypes", [_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]])
    ], SortableColumnComponent);
    return SortableColumnComponent;
}());



/***/ }),

/***/ "./src/app/components/userInfo/userdetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/userInfo/userdetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/userInfo/userdetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/userInfo/userdetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"mini ui icon button\" (click)=\"myModalImage.show({inverted: false})\" xmlns=\"http://www.w3.org/1999/html\">\n  <i class=\"user circle icon\"></i>\n</button>\n<label>{{stu.firstname | capitalizeFirst}} {{stu.lastname | capitalizeFirst}}</label>\n<sm-modal title=\"Student Personal Details\" class=\"\" icon=\"address card\" #myModalImage>\n  <modal-content>\n    <div class=\"ui grid\">\n      <div class=\"three wide column\">\n        <div class=\"ui left aligned image content\">\n          <img class=\"ui centered small circular image\" src=\"../../assets/png/adam%20copy.jpg\">\n        </div>\n      </div>\n      <div class=\"ten wide column\">\n        <div class=\"ui labeled\">\n          Full Name : <strong> {{stu.firstname | capitalizeFirst}} {{stu.lastname | capitalizeFirst}}</strong>\n        </div>\n        <div class=\"ui divider\"></div>\n        <div class=\"ui labeled\">\n          Email : <strong> {{stu.email}}</strong>\n        </div>\n        <div class=\"ui divider\"></div>\n        <div class=\"ui labeled\">\n          Phone : <strong> {{stu.phone}}</strong>\n        </div>\n        <div class=\"ui divider\"></div>\n      </div>\n    </div>\n\n  </modal-content>\n  <modal-actions>\n    <div class=\"ui buttons\">\n      <div class=\"ui button primary\" (click)=\"myModalImage.hide()\">Close</div>\n    </div>\n  </modal-actions>\n</sm-modal>\n"

/***/ }),

/***/ "./src/app/components/userInfo/userdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/userInfo/userdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/user */ "./src/app/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService) {
        this.userService = userService;
        this.stu = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserById(this.userId).subscribe(function (student) {
            _this.stu.userid = student.userid;
            _this.stu.firstname = student.firstname;
            _this.stu.lastname = student.lastname;
            _this.stu.url = student.url;
            _this.stu.email = student.email;
            _this.stu.phone = student.phone;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UserDetailsComponent.prototype, "userId", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./userdetails.component.html */ "./src/app/components/userInfo/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.css */ "./src/app/components/userInfo/userdetails.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui two column centered grid\">\n      <div class=\"ten wide column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small map icon\"></i>\n            <div class=\"content\">\n              Last 10 Completed Orders\n              <div class=\"sub header\">These orders has been completed</div>\n            </div>\n          </h2>\n          <app-order-complete></app-order-complete>\n        </div>\n      </div>\n      <div class=\"six wide column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small book icon\"></i>\n            <div class=\"content\">\n              Published Menu\n              <div class=\"sub header\">These items are published on the student menu</div>\n            </div>\n          </h2>\n          <app-menu-published></app-menu-published>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui two column centered grid\">\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small map icon\"></i>\n            <div class=\"content\">\n              List Of Employees\n              <div class=\"sub header\">View Employees Details</div>\n            </div>\n          </h2>\n          <app-employee-list></app-employee-list>\n        </div>\n      </div>\n      <div class=\"column\">\n        <div class=\"ui segment\">\n          <h2 class=\"ui block header\">\n            <i class=\"small plus users icon\"></i>\n            <div class=\"content\">\n              Add a New Employee\n              <div class=\"sub header\">Invite a worker to the cafeteria</div>\n            </div>\n          </h2>\n          <app-employee-invite></app-employee-invite>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/auth-layout.component.ts ***!
  \**************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-layout',
            template: "\n    <div class=\"full height\">\n      <div class=\"article\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
            styles: []
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/home-layout.component.ts ***!
  \**************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            template: "\n    <div class=\"full height\">\n      <app-nav ></app-nav>\n      <div class=\"article\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
            styles: []
        })
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu-published/menu-published.component.css":
/*!******************************************************************!*\
  !*** ./src/app/menu/menu-published/menu-published.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-paginator-navigation-previous mat-icon-button{\n  color: #000 !important;\n}\n.mat-sort-header-button{\n  color: #000 !important;\n}\n"

/***/ }),

/***/ "./src/app/menu/menu-published/menu-published.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/menu/menu-published/menu-published.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search an item..\">\n</mat-form-field>\n<div class=\"mat-elevation-z8\">\n  <mat-table #table matSort [dataSource]=\"dataSource\" >\n    <ng-container matColumnDef=\"itemid\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Item ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"  >{{element.itemid}}  </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"supid\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Supplier ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" >{{element.supid}}  </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" >{{element.name}}  </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"type\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" > {{element.type}}  </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"quantity\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" > {{element.qty}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" > {{element.price}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paging\n                 [length]=\"7\"\n                 [pageSize]=\"8\"\n                 [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu-published/menu-published.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/menu/menu-published/menu-published.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuPublishedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPublishedComponent", function() { return MenuPublishedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPublishedComponent = /** @class */ (function () {
    function MenuPublishedComponent(itemService) {
        this.itemService = itemService;
        this.items = [];
        this.displayedColumns = ['itemid', 'supid', 'name', 'type', 'quantity', 'price'];
    }
    MenuPublishedComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit - Menu published');
        this.getPusblishedMenu();
    };
    MenuPublishedComponent.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit - Menu published');
    };
    MenuPublishedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    MenuPublishedComponent.prototype.getPusblishedMenu = function () {
        var _this = this;
        this.itemService.getAllItemsSub().subscribe(function (itemsArr) {
            // this.itemsMenu = items;
            console.log(itemsArr);
            itemsArr.forEach(function (it) {
                _this.items.push(it);
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.items);
            setTimeout(function () {
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paging'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MenuPublishedComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MenuPublishedComponent.prototype, "sort", void 0);
    MenuPublishedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-published',
            template: __webpack_require__(/*! ./menu-published.component.html */ "./src/app/menu/menu-published/menu-published.component.html"),
            styles: [__webpack_require__(/*! ./menu-published.component.css */ "./src/app/menu/menu-published/menu-published.component.css")],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]]
        }),
        __metadata("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], MenuPublishedComponent);
    return MenuPublishedComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu-storage/menu-storage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/menu/menu-storage/menu-storage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu-storage/menu-storage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/menu/menu-storage/menu-storage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n  <div class=\"ui three column centered grid\">\n    <table class=\"ui compact celled definition table\">\n      <thead class=\"full-width\">\n      <tr>\n        <th>Item ID</th>\n        <th>Item Type</th>\n        <th>Item Name</th>\n        <th>Item Quantity </th>\n        <th>Item Time Prep </th>\n        <th>Item Price </th>\n        <th>On Menu ?</th>\n        <th>Actions </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of itemsMenu; let i = index;\">\n        <td>{{item.itemid}}</td>\n        <td>{{item.type}}</td>\n        <td>{{item.name}}</td>\n        <td>{{item.qty}}</td>\n        <td>{{item.preptime}}</td>\n        <td>{{item.price}} &#8362;</td>\n        <td>{{item.ispublished | onMenuPipe }}</td>\n        <td>\n          <div class=\"ui left floated labeled icon button\"\n               (click)=\"displayModal('Edit', item)\">\n            <i class=\"edit icon\"></i>Edit\n          </div>\n          <div class=\"ui right floated labeled icon button\"\n               (click)=\"displayModal('Delete', item)\">\n            <i class=\"delete icon\"></i>Delete\n          </div>\n        </td>\n      </tr>\n      </tbody>\n      <tfoot class=\"full-width\">\n      <tr>\n        <th></th>\n        <th colspan=\"7\">\n          <div class=\"ui small labeled icon button\" (click)=\"displayModal('Add')\">\n            <i class=\"plus icon\"></i>Add Item\n          </div>\n        </th>\n      </tr>\n      </tfoot>\n    </table>\n    <app-item-modal-add (notify)=\"onNotifyClicked($event)\"></app-item-modal-add>\n    <app-item-modal-edit [itemInputEdit]=\"editItem\" (notify)=\"onNotifyClicked($event)\"></app-item-modal-edit>\n    <app-item-modal-confirm [itemInputDelete]=\"deleteItem\" (notify)=\"onNotifyClicked($event)\"></app-item-modal-confirm>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu-storage/menu-storage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/menu/menu-storage/menu-storage.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStorageComponent", function() { return MenuStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/item */ "./src/app/classes/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuStorageComponent = /** @class */ (function () {
    function MenuStorageComponent(itemService) {
        this.itemService = itemService;
        // THE ITEMS IN PUBLISHED MENU
        this.itemsMenu = new Array();
        this.editItem = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
        this.deleteItem = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"];
    }
    MenuStorageComponent.prototype.onNotifyClicked = function (message) {
        this.itemsMenu = new Array();
        this.getStorage();
        if (message === 'Delete') {
            jQuery.uiAlert({
                textHead: 'Item notification',
                text: 'An item was delete from the storage successfully',
                bgcolor: '#19c3aa',
                textcolor: '#fff',
                position: 'top-right',
                icon: 'checkmark box',
                time: 5,
            });
        }
        else if (message === 'Edit') {
            jQuery.uiAlert({
                textHead: 'Item notification',
                text: 'An item was edit successfully',
                bgcolor: '#19c3aa',
                textcolor: '#fff',
                position: 'top-right',
                icon: 'checkmark box',
                time: 5,
            });
        }
        else if (message === 'Add') {
            jQuery.uiAlert({
                textHead: 'Item notification',
                text: 'An item was added successfully',
                bgcolor: '#19c3aa',
                textcolor: '#fff',
                position: 'top-right',
                icon: 'checkmark box',
                time: 5,
            });
        }
    };
    MenuStorageComponent.prototype.ngOnInit = function () {
        this.getStorage();
    };
    MenuStorageComponent.prototype.ngOnDestroy = function () {
        console.log('exit Menu Storage');
        $('.ui.edit.modal').remove();
        $('.ui.add.modal').remove();
        $('.ui.confirm.modal').remove();
    };
    MenuStorageComponent.prototype.getStorage = function () {
        var _this = this;
        jQuery.uiAlert({
            textHead: 'Storage',
            text: 'Storage table has been updated successfully',
            bgcolor: '#55a9ee',
            textcolor: '#fff',
            position: 'top-left',
            icon: 'info circle',
            time: 5,
        });
        this.itemService.getAllItems().then(function (items) {
            items.forEach(function (item) {
                var itemTmp = new _classes_item__WEBPACK_IMPORTED_MODULE_2__["Item"](item);
                _this.itemsMenu.push(itemTmp);
            });
            console.log(_this.itemsMenu);
        });
    };
    MenuStorageComponent.prototype.displayModal = function (action, item) {
        console.log(action);
        console.log(item);
        if (action === 'Add') {
            console.log('Show Modal To Add Item');
            $('.ui.add.modal')
                .modal('setting', 'transition', 'horizontal flip')
                .modal('show');
        }
        else if (action === 'Edit') {
            console.log('Show Modal To Edit Item');
            // update the modal with item
            this.editItem = item;
            console.log(this.editItem);
            $('.ui.edit.modal')
                .modal('setting', 'transition', 'horizontal flip')
                .modal('show');
        }
        else if (action === 'Delete') {
            // post delete to server
            this.deleteItem = item;
            console.log('Show Modal To Delete Item');
            $('.ui.confirm.modal')
                .modal('setting', 'transition', 'horizontal flip')
                .modal('show');
        }
        else {
            console.log('ERROR');
        }
    };
    MenuStorageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-storage',
            template: __webpack_require__(/*! ./menu-storage.component.html */ "./src/app/menu/menu-storage/menu-storage.component.html"),
            styles: [__webpack_require__(/*! ./menu-storage.component.css */ "./src/app/menu/menu-storage/menu-storage.component.css")],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]]
        }),
        __metadata("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], MenuStorageComponent);
    return MenuStorageComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui segment\">\n      <h2 class=\"ui block header\">\n        <i class=\"small map icon\"></i>\n        <div class=\"content\">\n          Storage\n          <div class=\"sub header\">View all items in the cafeteria</div>\n        </div>\n      </h2>\n      <app-menu-storage></app-menu-storage>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/material-module.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/material-module.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/*!***********************************!*\
  !*** ./src/app/nav.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout{\n  color:#fff !important;\n}\n"

/***/ }),

/***/ "./src/app/nav.component.html":
/*!************************************!*\
  !*** ./src/app/nav.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sm-menu title=\"CMS - Little Cafeteria\" class=\"\"  logoClass=\"home icon\">\n  <sm-menu class=\"left menu\">\n    <a sm-item *ngFor=\"let item of items\" class=\"item\" [routerLink]=\"item.routerLink\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <i class=\"white big {{ item.icon }} icon\"></i>\n      {{ item.name }}\n    </a>\n  </sm-menu>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <button class=\"logout\" (click)=\"onLogout()\">Logout</button>\n    </div>\n    <div class=\"item\">\n      <img class=\"ui mini circular image\"\n           src=\"../assets/png/adam%20copy.jpg\">\n    </div>\n  </div>\n</sm-menu>\n"

/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.items = [
            { 'name': 'Dashboard', 'routerLink': '/dashboard', 'icon': 'cogs' },
            { 'name': 'Orders', 'routerLink': '/order', 'icon': 'coffee' },
            { 'name': 'Storage', 'routerLink': '/menu', 'icon': 'map' },
            { 'name': 'Charts', 'routerLink': '/charts', 'icon': 'chart line' },
            { 'name': 'Employee', 'routerLink': '/emp', 'icon': 'address book' }
        ];
    }
    NavComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/order/order-active/order-active.component.css":
/*!***************************************************************!*\
  !*** ./src/app/order/order-active/order-active.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order-active/order-active.component.html":
/*!****************************************************************!*\
  !*** ./src/app/order/order-active/order-active.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n<table class=\"ui compact celled definition table\">\n  <thead class=\"full-width\">\n  <tr>\n    <th>Order ID</th>\n    <th>Student Full Name</th>\n    <th>Pick-Up Time</th>\n    <th>Total Price (NIS)</th>\n    <th>Order Information</th>\n    <th>End Order</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let order of ( orderList | orderByTime : 5); let i = index;\">\n    <td>{{order.olid}}</td>\n    <td>\n      <app-student-details [userId]=\"order.userid\" ></app-student-details>\n    </td>\n    <td>{{order?.ol_dttm | date: 'short' : 'UTC'  }}</td>\n    <td>{{order?.totalprice}} &#8362;</td>\n    <td>\n      <app-order-details [olid]=\"order.olid\"></app-order-details>\n    </td>\n    <td>\n      <div class=\"ui labeled icon button\" (click)=\"completeOrder(order)\">\n        <i class=\"bullhorn icon\"></i> Order Is Ready\n      </div>\n    </td>\n  </tr>\n  </tbody>\n  <app-order-modal-complete [orderInputConf]=\"ordertocomplete\" (notifyChange)=\"onNotifyClicked($event)\"></app-order-modal-complete>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/order/order-active/order-active.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order/order-active/order-active.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderActiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderActiveComponent", function() { return OrderActiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/orderlist */ "./src/app/classes/orderlist.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderActiveComponent = /** @class */ (function () {
    function OrderActiveComponent(orderListService) {
        this.orderListService = orderListService;
        // ORDER LIST WITH STATUS 'ACTIVE'
        this.orderList = new Array(); //
        this.notifyUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.insertOrder = false;
    }
    OrderActiveComponent.prototype.ngOnInit = function () {
        this.getActiveOrders();
    };
    OrderActiveComponent.prototype.ngOnChanges = function (changes) {
        if (!changes) {
            console.log(changes);
            return;
        }
        else {
            console.log(changes.insertOrder);
            if (changes.insertOrder.currentValue) {
                this.orderList = new Array();
                this.getActiveOrders();
                this.notifyUpdated.emit('Active Table Updated Succesfuly');
            }
        }
    };
    OrderActiveComponent.prototype.ngOnDestroy = function () {
        console.log("Active - Destory");
        $('.ui.complete.order.modal').remove();
    };
    OrderActiveComponent.prototype.onNotifyClicked = function (message) {
        console.log(message);
        if (message === 'Order Complete') {
            this.orderList = new Array();
            this.getActiveOrders();
        }
    };
    OrderActiveComponent.prototype.getActiveOrders = function () {
        var _this = this;
        console.log('Getting Active Orders !');
        jQuery.uiAlert({
            textHead: 'Active Orders',
            text: 'Active orders table has been updated succesfuly',
            bgcolor: '#55a9ee',
            textcolor: '#fff',
            position: 'top-left',
            icon: 'info circle',
            time: 5,
        });
        /*
        this.orderListService.getAllOrdersByStatus('Active').
        then( (_orderList: any) =>  {
          _orderList.forEach( ol => {
            const _ol: OrderList = new OrderList;
            _ol.userid = ol.userid;
            _ol.olid = ol.olid
            _ol.totalprice = ol.totalprice;
            _ol.status = ol.status;
            _ol.ol_dttm = ol.ol_dttm;
            _ol.ol_dttm_real = ol.ol_dttm_real;
            _ol.hasreview = ol.hasreview;
            this.orderList.push(_ol);
          });
          console.log(this.orderList);
        });
        */
        this.orderListService.getTodayActiveOrders().then(function (_orderList) {
            var len = _orderList['length'];
            if (len === 0) {
                console.log('no orders yet');
                // change orders table to display empty line
            }
            else {
                console.log('there are orders waiting');
                _orderList.forEach(function (ol) {
                    console.log(ol);
                    var _ol = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_2__["OrderList"];
                    _ol.userid = ol.userid;
                    _ol.olid = ol.olid;
                    _ol.totalprice = ol.totalprice;
                    // _ol.status = ol.status;
                    _ol.ol_dttm = ol.ol_dttm;
                    // _ol.ol_dttm_real = ol.ol_dttm_real;
                    // _ol.hasreview = ol.hasreview;
                    _this.orderList.push(_ol);
                });
            }
        });
    };
    OrderActiveComponent.prototype.completeOrder = function (order) {
        console.log(order);
        console.log('Complete Order List and notify Student');
        this.ordertocomplete = order;
        console.log(this.ordertocomplete);
        $('.ui.complete.order.modal')
            .modal('setting', 'transition', 'horizontal flip')
            .modal('show');
        // modal for action - yes or no - then if
        // yes  - put call with orderlist to change status to 'Active'
        //        notify student (server side my opion
        //        get new incoming order to the list
        // no -   return to old screen review incoming anyway
        //
        // call it again to present changes in tables
        //this.getIncomingOrders();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrderActiveComponent.prototype, "notifyUpdated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OrderActiveComponent.prototype, "insertOrder", void 0);
    OrderActiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-active',
            template: __webpack_require__(/*! ./order-active.component.html */ "./src/app/order/order-active/order-active.component.html"),
            styles: [__webpack_require__(/*! ./order-active.component.css */ "./src/app/order/order-active/order-active.component.css")],
            providers: [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]])
    ], OrderActiveComponent);
    return OrderActiveComponent;
}());



/***/ }),

/***/ "./src/app/order/order-complete/order-complete.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/order/order-complete/order-complete.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsive_table {\n  overflow-x: auto !important;\n}\n\n"

/***/ }),

/***/ "./src/app/order/order-complete/order-complete.component.html":
/*!********************************************************************!*\
  !*** ./src/app/order/order-complete/order-complete.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n  <div class=\"responsive_table\">\n    <table class=\"mat-table mat-elevation-z1\">\n      <thead>\n      <tr class=\"mat-header-row\">\n        <th class=\"mat-header-cell\">Order ID</th>\n        <th class=\"mat-header-cell\">Student Full Name</th>\n        <th class=\"mat-header-cell\"> Pick-Up Time </th>\n        <th class=\"mat-header-cell\"> Review </th>\n        <th class=\"mat-header-cell\"> Total Price (NIS) </th>\n        <th class=\"mat-header-cell\"> Order Information </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"mat-row\" *ngFor=\"let element of ( elements | orderByTime: 10);\">\n        <td class=\"mat-cell\">{{element.olid}} </td>\n        <td class=\"mat-cell\">\n          <app-student-details [userId]=\"element.userid\" ></app-student-details>\n        </td>\n        <td class=\"mat-cell\"> {{element.ol_dttm | date: 'short' : 'UTC' }} </td>\n        <td class=\"mat-cell\"> {{element.hasreview | reviewPipe}} </td>\n        <td class=\"mat-cell\"> {{element.totalprice}}  &#8362;</td>\n        <td class=\"mat-cell\">\n          <app-order-details [olid]=\"element.olid\"></app-order-details>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/order/order-complete/order-complete.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/order/order-complete/order-complete.component.ts ***!
  \******************************************************************/
/*! exports provided: OrderCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompleteComponent", function() { return OrderCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _classes_orderlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/orderlist */ "./src/app/classes/orderlist.ts");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderCompleteComponent = /** @class */ (function () {
    function OrderCompleteComponent(orderListService) {
        this.orderListService = orderListService;
        // ORDER LIST WITH STATUS 'Completed'
        this.elements = [];
    }
    OrderCompleteComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit - Complete Orders");
    };
    OrderCompleteComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit - Complete Orders");
        this.getCompletedOrders();
    };
    OrderCompleteComponent.prototype.getCompletedOrders = function () {
        var _this = this;
        console.log('Getting Completed Orders !');
        /*
       this.orderListService.getAllOrdersByStatus('Complete').
       then( (_orderList: any) =>  {
         this.orderList = _orderList;
         console.log(this.orderList);
    
       });
        */
        this.orderListService.getAllOrdersByStatus('Complete').
            then(function (_orderList) {
            _orderList.forEach(function (ol) {
                var _ol = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_1__["OrderList"];
                _ol.userid = ol.userid;
                _ol.olid = ol.olid;
                _ol.totalprice = ol.totalprice;
                _ol.status = ol.status;
                _ol.ol_dttm = ol.ol_dttm;
                _ol.ol_dttm_real = ol.ol_dttm_real;
                _ol.hasreview = ol.hasreview;
                _this.elements.push(_ol);
            });
            console.log(_this.elements);
        });
    };
    OrderCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-complete',
            template: __webpack_require__(/*! ./order-complete.component.html */ "./src/app/order/order-complete/order-complete.component.html"),
            styles: [__webpack_require__(/*! ./order-complete.component.css */ "./src/app/order/order-complete/order-complete.component.css")],
            providers: [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"]])
    ], OrderCompleteComponent);
    return OrderCompleteComponent;
}());



/***/ }),

/***/ "./src/app/order/order-incoming/order-incoming.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/order/order-incoming/order-incoming.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order-incoming/order-incoming.component.html":
/*!********************************************************************!*\
  !*** ./src/app/order/order-incoming/order-incoming.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n<table class=\"ui compact celled definition table\">\n  <thead class=\"full-width\">\n  <tr>\n    <th><span>Order ID</span></th>\n    <th><span>Student Full Name</span></th>\n    <th><span>PickUp Time</span></th>\n    <th><span>Total Price (NIS)</span></th>\n    <th><span>Order Information</span></th>\n    <th><span>Start Order</span></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let order of ( orderList | orderByTime: 5); let i = index; \">\n    <td>{{order.olid}}</td>\n    <td>\n      <app-student-details [userId]=\"order.userid\" ></app-student-details>\n    </td>\n    <td>{{order.ol_dttm | date: 'short' : 'UTC' }}</td>\n    <td>{{order.totalprice}} &#8362;</td>\n    <td>\n     <app-order-details [olid]=\"order.olid\"></app-order-details>\n    </td>\n    <td>\n      <div class=\"ui labeled icon button\" (click)=\"startMakingOrder(order)\">\n        <i class=\"bullhorn icon\"></i> Start Order\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n  <app-order-modal-confirm [orderInputConf]=\"ordertodo\" (notifyChange)=\"onNotifyClicked($event)\"></app-order-modal-confirm>\n</div>\n"

/***/ }),

/***/ "./src/app/order/order-incoming/order-incoming.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/order/order-incoming/order-incoming.component.ts ***!
  \******************************************************************/
/*! exports provided: OrderIncomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderIncomingComponent", function() { return OrderIncomingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _classes_orderlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/orderlist */ "./src/app/classes/orderlist.ts");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderIncomingComponent = /** @class */ (function () {
    function OrderIncomingComponent(orderListService) {
        this.orderListService = orderListService;
        // ORDER LIST WITH STATUS 'INCOMING'
        this.orderList = [];
        this.notifyTable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloadTable = false;
    }
    OrderIncomingComponent.prototype.ngOnInit = function () {
        /*Observable.interval(25000).takeWhile(() => true).subscribe(() => {
          this.getIncomingOrders();
        });
        */
        this.getIncomingOrders();
        $(document).ready(function () {
            $('.reload-button').hover(function () {
                $(this).transition('horizontal flip')
                    .transition('horizontal flip')
                    .transition('horizontal flip')
                    .transition('stop')
                    .transition('vertical flip');
            }, function () {
                console.log('reload button triggerd');
            });
        });
    };
    OrderIncomingComponent.prototype.onNotifyClicked = function (message) {
        if (message === 'Update Table') {
            this.orderList = new Array();
            this.getIncomingOrders();
            this.notifyTable.emit('Update Active Table');
        }
    };
    OrderIncomingComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (!changes) {
            console.log(changes);
            return;
        }
        else {
            console.log(changes.reloadTable.currentValue);
            console.log(changes.reloadTable.firstChange);
            if (changes.reloadTable.currentValue) {
                this.orderList = new Array();
                this.getIncomingOrders();
                this.notifyTable.emit('Incoming Table Updated Succesfuly');
            }
        }
    };
    OrderIncomingComponent.prototype.ngOnDestroy = function () {
        console.log('exit Menu Storage');
        $('.ui.confirm.order.modal').remove();
    };
    OrderIncomingComponent.prototype.getIncomingOrders = function () {
        var _this = this;
        /*jQuery.uiAlert({
          textHead: 'Incoming Orders', // header
          text: 'Incoming orders table has been updated succesfuly', // Text
          bgcolor: '#55a9ee', // background-color
          textcolor: '#fff', // color
          position: 'top-left', // position . top And bottom ||  left / center / right
          icon: 'info circle', // icon in semantic-UI
          time: 5, // time
        });
        */
        this.orderList = new Array();
        console.log('Getting Incoming Orders !');
        /*
        this.orderListService.getAllOrdersByStatus('Incoming').
        then( (_orderList: any) =>  {
          _orderList.forEach( ol => {
            const _ol: OrderList = new OrderList;
            _ol.userid = ol.userid;
            _ol.olid = ol.olid
            _ol.totalprice = ol.totalprice;
            _ol.status = ol.status;
            _ol.ol_dttm = ol.ol_dttm;
            _ol.ol_dttm_real = ol.ol_dttm_real;
            _ol.hasreview = ol.hasreview;
            this.orderList.push(_ol);
          });
          console.log(this.orderList);
        });
        */
        this.orderListService.getTodayFutureOrders().then(function (_orderList) {
            var len = _orderList['length'];
            if (len === 0) {
                console.log('no orders yet');
                // change orders table to display empty line
            }
            else {
                console.log('there are orders waiting');
                _orderList.forEach(function (ol) {
                    console.log(ol);
                    var _ol = new _classes_orderlist__WEBPACK_IMPORTED_MODULE_1__["OrderList"];
                    _ol.userid = ol.userid;
                    _ol.olid = ol.olid;
                    _ol.totalprice = ol.totalprice;
                    // _ol.status = ol.status;
                    _ol.ol_dttm = ol.ol_dttm;
                    // _ol.ol_dttm_real = ol.ol_dttm_real;
                    // _ol.hasreview = ol.hasreview;
                    _this.orderList.push(_ol);
                });
            }
        });
    };
    OrderIncomingComponent.prototype.startMakingOrder = function (order) {
        console.log('Start Making Order List');
        this.ordertodo = order;
        $('.ui.confirm.order.modal')
            .modal('setting', 'transition', 'horizontal flip')
            .modal('show');
        // modal for action - yes or no - then if
        // yes  - put call with orderlist to change status to 'Active'
        //        notify student (server side my opion
        //        get new incoming order to the list
        // no -   return to old screen review incoming anyway
        //
        // call it again to present changes in tables
        //this.getIncomingOrders();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrderIncomingComponent.prototype, "notifyTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OrderIncomingComponent.prototype, "reloadTable", void 0);
    OrderIncomingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-incoming',
            template: __webpack_require__(/*! ./order-incoming.component.html */ "./src/app/order/order-incoming/order-incoming.component.html"),
            styles: [__webpack_require__(/*! ./order-incoming.component.css */ "./src/app/order/order-incoming/order-incoming.component.css")],
            providers: [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"]])
    ], OrderIncomingComponent);
    return OrderIncomingComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reload-button{\n  float:right;\n}\n"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui masthead vertical segment\">\n  <div class=\"ui container\">\n    <div class=\"ui segment\">\n      <h2 class=\"ui block header\">\n        <div class=\"reload-button\" (click)=\"reloadTable()\">\n          <i class=\"circular white sync icon\" id='refresh'></i>\n        </div>\n        <i class=\"small map icon\"></i>\n        <div class=\"content\">\n          Incoming Orders\n          <div class=\"sub header\">List of incoming orders</div>\n        </div>\n      </h2>\n      <app-order-incoming [reloadTable]=\"isReloadAsked\" (notifyTable)=\"onChange($event)\"></app-order-incoming>\n    </div>\n    <div class=\"ui segment\">\n      <h2 class=\"ui block header\">\n        <i class=\"small map icon\"></i>\n        <div class=\"content\">\n          Active Orders\n          <div class=\"sub header\">List of active orders</div>\n        </div>\n      </h2>\n      <app-order-active [insertOrder]=\"isActiveTableUpdated\" (notifyUpdated)=\"onFinish($event)\"></app-order-active>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orderlist.service */ "./src/app/services/orderlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.isActiveTableUpdated = false;
        this.isReloadAsked = false;
    }
    OrderComponent.prototype.onChange = function (message) {
        var _this = this;
        if (message === 'Update Active Table') {
            console.log(message);
            this.isActiveTableUpdated = true;
            console.log('changed to true to update active table');
        }
        else if (message === 'Incoming Table Updated Succesfuly') {
            console.log(message);
            setTimeout(function () {
                _this.isReloadAsked = false;
            });
        }
        // this.isActiveTableUpdated = false;
    };
    OrderComponent.prototype.onFinish = function (message) {
        var _this = this;
        if (message === 'Active Table Updated Succesfuly') {
            console.log(message);
            setTimeout(function () {
                _this.isActiveTableUpdated = false;
            });
        }
    };
    OrderComponent.prototype.reloadTable = function () {
        console.log('reload data from server');
        this.isReloadAsked = true;
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")],
            providers: [_services_orderlist_service__WEBPACK_IMPORTED_MODULE_1__["OrderListService"]]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/pipes/capitalizefirst.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/capitalizefirst.pipe.ts ***!
  \***********************************************/
/*! exports provided: CapitalizeFirstPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeFirstPipe", function() { return CapitalizeFirstPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Daniel
*/
var CapitalizeFirstPipe = /** @class */ (function () {
    function CapitalizeFirstPipe() {
    }
    CapitalizeFirstPipe.prototype.transform = function (value, args) {
        if (value === null)
            return 'Not assigned';
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    CapitalizeFirstPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalizeFirst'
        })
    ], CapitalizeFirstPipe);
    return CapitalizeFirstPipe;
}());



/***/ }),

/***/ "./src/app/pipes/on-menu.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/on-menu.pipe.ts ***!
  \***************************************/
/*! exports provided: MenuPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPipe", function() { return MenuPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuPipe = /** @class */ (function () {
    function MenuPipe() {
    }
    MenuPipe.prototype.transform = function (value, args) {
        if (value.toString() === '0') {
            return 'No';
        }
        else {
            return 'Yes';
        }
    };
    MenuPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'onMenuPipe'
        })
    ], MenuPipe);
    return MenuPipe;
}());



/***/ }),

/***/ "./src/app/pipes/review.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/review.pipe.ts ***!
  \**************************************/
/*! exports provided: ReviewPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPipe", function() { return ReviewPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReviewPipe = /** @class */ (function () {
    function ReviewPipe() {
    }
    ReviewPipe.prototype.transform = function (value, args) {
        if (value.toString() === '0') {
            return 'False';
        }
        else {
            return 'True';
        }
    };
    ReviewPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reviewPipe'
        })
    ], ReviewPipe);
    return ReviewPipe;
}());



/***/ }),

/***/ "./src/app/pipes/time-order.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/time-order.pipe.ts ***!
  \******************************************/
/*! exports provided: TimeOrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeOrderPipe", function() { return TimeOrderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeOrderPipe = /** @class */ (function () {
    function TimeOrderPipe() {
    }
    TimeOrderPipe.prototype.transform = function (orderlist, numberoforders) {
        return this.sort(orderlist).slice(0, numberoforders);
    };
    TimeOrderPipe.prototype.sort = function (orderlist) {
        var newVal = orderlist.sort(function (a, b) {
            var date1 = new Date(a.ol_dttm);
            var date2 = new Date(b.ol_dttm);
            if (date1 < date2) {
                return 1;
            }
            else if (date1 > date2) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return newVal;
    };
    TimeOrderPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByTime',
            pure: false
        }),
        __metadata("design:paramtypes", [])
    ], TimeOrderPipe);
    return TimeOrderPipe;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.url = 'https://cafeappserver.herokuapp.com/api';
    }
    ItemService.prototype.getItemById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/items/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ItemService.prototype.getAllItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/items', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ItemService.prototype.getAllItemsSub = function () {
        return this.http.get(this.url + '/items');
    };
    ItemService.prototype.createItem = function (_item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/items', JSON.stringify(_item), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ItemService.prototype.deleteItem = function (itemid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.url + '/items/' + itemid)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ItemService.prototype.updateItem = function (_item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.url + '/items/', JSON.stringify(_item), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.url = 'https://cafeappserver.herokuapp.com/api';
    }
    OrderService.prototype.createOrder = function (_order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/ordereditems', JSON.stringify(_order), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderService.prototype.getOrderById = function (id) {
        return this.http.get(this.url + '/ordereditems/' + id);
    };
    // delete order list by id
    OrderService.prototype.deleteOrderById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.url + '/ordereditems/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // get all orders by olid
    OrderService.prototype.getOrdersByOrderListId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/ordereditems/olid/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/orderlist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/orderlist.service.ts ***!
  \***********************************************/
/*! exports provided: OrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListService", function() { return OrderListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderListService = /** @class */ (function () {
    function OrderListService(http) {
        this.http = http;
        this.url = 'https://cafeappserver.herokuapp.com/api';
    }
    OrderListService.prototype.getAllOrders = function () {
        return this.http.get(this.url + '/orderedlist');
    };
    OrderListService.prototype.getOrderListById = function (id) {
        return this.http.get(this.url + '/orderedlist/' + id);
    };
    OrderListService.prototype.getAllOrdersPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/orderedlist', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderListService.prototype.getAllOrdersByStatus = function (status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/orderedlist/status/' + status, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderListService.prototype.getTodayFutureOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/orderedlist/todayfutureorders', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderListService.prototype.getTodayActiveOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + '/orderedlist/todayactiveorders', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderListService.prototype.updateOrderListPromise = function (_orderList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.url + '/orderedlist/', JSON.stringify(_orderList), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderListService.prototype.updateOrderList = function (_orderList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.url + '/orderedlist/', JSON.stringify(_orderList), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderListService);
    return OrderListService;
}());



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
        this.url = 'https://cafeappserver.herokuapp.com/api';
    }
    QueryService.prototype.getBestUsers = function (type) {
        return this.http.get(this.url + '/query/' + type);
    };
    QueryService.prototype.getBestItems = function (type) {
        return this.http.get(this.url + '/query/' + type);
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/services/user-data/user-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/user-data/user-data.service.ts ***!
  \*********************************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserData = /** @class */ (function () {
    function UserData() {
        localforage__WEBPACK_IMPORTED_MODULE_1__["config"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_1__["WEBSQL"],
            name: 'Cafteria Application',
            version: 1.0,
            size: 4980736,
            storeName: 'keyvaluepairs',
            description: 'some description'
        });
        this.instance = localforage__WEBPACK_IMPORTED_MODULE_1__["createInstance"]({});
    }
    // Gets userid for any  cause
    UserData.prototype.getUserId = function () {
        var _this = this;
        if (this.userid) {
            return Promise.resolve(this.userid);
        }
        else {
            return this.instance.getItem('userid').then(function (res) {
                _this.userid = res;
                return res;
            });
        }
    };
    // Sets the userid after succussful login
    UserData.prototype.setUserId = function (userid) {
        return this.instance.setItem('userid', userid).then(function (res) { return console.log(res); });
    };
    UserData.prototype.setManager = function (manager) { };
    UserData.prototype.clearManager = function () {
        this.instance.removeItem('userid');
    };
    UserData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserData);
    return UserData;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'https://cafeappserver.herokuapp.com/api';
    }
    UserService.prototype.createUser = function (_user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/users/signupemployee', JSON.stringify(_user), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
                responseType: 'text'
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.getUser = function (registerCredentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/users/login', JSON.stringify(registerCredentials), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json')
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*
    public getUserByRole(role) {
      return new Promise(resolve => {
        this.http.get(this.url + '/users/role/' + role , {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
          .subscribe(res => {
            resolve(res);
          });
      });
    }
    */
    UserService.prototype.getUserByRole = function (role) {
        return this.http.get(this.url + '/users/role/' + role);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.url + '/users/' + id);
    };
    UserService.prototype.getImage = function (imageUrl) {
        return this.http.get(this.url + '/download/' + imageUrl, { responseType: 'blob' });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/AdamShwartz/WebstormProjects/cafeteria-app copy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map