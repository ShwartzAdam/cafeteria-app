// Little Cafe - Cafeteria Application
// Shenkar 2018 final project

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Main Component
import { AppComponent } from './app.component';
// Sub Components
import { NavComponent } from './nav.component';
import { MenuComponent} from './menu/menu.component';
import { MenuStorageComponent } from './menu/menu-storage/menu-storage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { OrderComponent } from './order/order.component';
import { ChartsComponent } from './charts/charts.component';
import { OrderDetailsComponent } from './components/orderinfo/orderdetails.component';
import { UserDetailsComponent } from './components/userInfo/userdetails.component';
import { OrderIncomingComponent } from './order/order-incoming/order-incoming.component';
import { OrderActiveComponent } from './order/order-active/order-active.component';
import { OrderCompleteComponent } from './order/order-complete/order-complete.component';
import { ItemAddComponent } from './components/modals/item/Item-add.component';
import { ItemEditComponent } from './components/modals/item/item-edit.component';
import {ItemConfirmComponent} from './components/modals/item/item-confirm.component';
import {MenuPublishedComponent} from './menu/menu-published/menu-published.component';
import {OrderConfirmComponent} from './components/modals/order/order-confirm.component';
import {OrderCompComponent} from './components/modals/order/order-complete.component';
import {EmployeeInviteComponent} from './components/emp-invite/emp-invite.component';
import {EmployeeComponent} from './employee/employee.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeListComponent} from './components/emp-list/emp-list.component';
import {BestUsersComponent} from './components/reports/bestUsers/best-users.component';
import {BestItemsComponent} from './components/reports/bestItems/best-items.component';
import {DatePickerComponent} from './components/reports/date-picker/datepicker.component';
import {ChartjsComponent} from './components/reports/chart-component/chartjs.component';
// services
import {AddHttpHeaderInterceptor} from './services/http-interceptors/noop-interceptor';
import {OrderService} from './services/order.service';
import {OrderListService} from './services/orderlist.service';
import {UserService} from './services/user.service';
import {ItemService} from './services/item.service';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './auth/auth.service';
import {QueryService} from './services/query.service';
// data storage
import {UserData} from './services/user-data/user-data.service';
// pipes
import {CapitalizeFirstPipe} from './pipes/capitalizefirst.pipe';
import {TimeOrderPipe} from './pipes/time-order.pipe';
import {ReviewPipe} from './pipes/review.pipe';
import {MenuPipe} from './pipes/on-menu.pipe';
// layouts components
import {AuthLayoutComponent} from './layouts/auth-layout.component';
import {HomeLayoutComponent} from './layouts/home-layout.component';

import './classes/rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    MenuStorageComponent,
    ItemAddComponent,
    ItemEditComponent,
    ItemConfirmComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    OrderComponent,
    ChartsComponent,
    OrderIncomingComponent,
    OrderActiveComponent,
    OrderCompleteComponent,
    UserDetailsComponent,
    OrderDetailsComponent,
    CapitalizeFirstPipe,
    TimeOrderPipe,
    ReviewPipe,
    MenuPipe,
    DashboardComponent,
    EmployeeInviteComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MenuPublishedComponent,
    OrderConfirmComponent,
    OrderCompComponent,
    AuthLayoutComponent,
    HomeLayoutComponent,
    BestUsersComponent,
    BestItemsComponent,
    DatePickerComponent,
    ChartjsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSemanticModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MyDateRangePickerModule,
    ReactiveFormsModule
  ],
  providers: [
    OrderListService,
    OrderService,
    UserService,
    ItemService,
    UserData,
    AuthService,
    AuthGuard,
    QueryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHttpHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
