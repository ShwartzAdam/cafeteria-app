import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules Added
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

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
import {EmployeeComponent} from './components/employee/employee.component';
import {MenuPublishedComponent} from './menu/menu-published/menu-published.component';
import {OrderConfirmComponent} from './components/modals/order/order-confirm.component';
import {OrderCompComponent} from './components/modals/order/order-complete.component';

// services
import {OrderService} from './services/order.service';
import {OrderListService} from './services/orderlist.service';
import {UserService} from './services/user.service';
import {ItemService} from './services/item.service';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './auth/auth.service';
import {SortService} from './components/sort/sort.service';
import {UserData} from './services/user-data/user-data.service';

// pipes
import {CapitalizeFirstPipe} from './pipes/capitalizefirst.pipe';
import {TimeOrderPipe} from './pipes/time-order.pipe';
import {SortableColumnComponent} from './components/sort/sortable-column.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SortableTableDirective} from './components/sort/sort.directive';
import {ReviewPipe} from './pipes/review.pipe';


import '../app/interface/rxjs-operators';

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
    DashboardComponent,
    SortableColumnComponent,
    SortableTableDirective,
    EmployeeComponent,
    MenuPublishedComponent,
    OrderConfirmComponent,
    OrderCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSemanticModule,
    FormsModule,
    DataTablesModule,
    CommonModule
  ],
  providers: [
    OrderListService,
    OrderService,
    UserService,
    ItemService,
    UserData,
    SortService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
