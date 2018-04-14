import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules Added
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Main Component
import { AppComponent } from './app.component';
// Sub Components
import { NavComponent } from './nav.component';
import { MenuComponent} from './menu/menu.component';
import {MenuPublishedComponent} from './menu/menu-published/menu-published.component';
import {MenuStorageComponent} from './menu/menu-storage/menu-storage.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view/login-view.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { OrderComponent } from './order/order.component';
import { ChartsComponent } from './charts/charts.component';
import { OrderDetailsComponent } from './ui-compoents/orderinfo/orderdetails.component';
import { UserDetailsComponent } from './ui-compoents/userInfo/userdetails.component';
import { OrderIncomingComponent } from './order/order-incoming/order-incoming.component';
import { OrderActiveComponent } from './order/order-active/order-active.component';
import { OrderCompleteComponent } from './order/order-complete/order-complete.component';
import { ItemAddComponent } from './ui-compoents/modals/item-add.component';
import { ItemEditComponent } from './ui-compoents/modals/item-edit.component';

// services
import {OrderService} from './services/order.service';
import {OrderListService} from './services/orderlist.service';
import {UserService} from './services/user.service';
import {ItemService} from './services/item.service';
// pipes
import {CapitalizeFirstPipe} from './pipes/capitalizefirst.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    MenuPublishedComponent,
    MenuStorageComponent,
    ItemAddComponent,
    ItemEditComponent,
    LoginComponent,
    LoginViewComponent,
    SignupComponent,
    ForgotpassComponent,
    OrderComponent,
    ChartsComponent,
    OrderIncomingComponent,
    OrderActiveComponent,
    OrderCompleteComponent,
    UserDetailsComponent,
    OrderDetailsComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSemanticModule,
    FormsModule
  ],
  providers: [OrderListService,
              OrderService,
              UserService,
              ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
