import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules Added
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Main Component
import { AppComponent } from './app.component';
// Sub Components
import { MenuComponent } from './menu.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view/login-view.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { OrderComponent } from './order/order.component';
import { ItemsComponent } from './items/items.component';
import { ChartsComponent } from './charts/charts.component';
// services
import {OrderService} from './services/order.service';
import { OrderIncomingComponent } from './order/order-incoming/order-incoming.component';
import { OrderActiveComponent } from './order/order-active/order-active.component';
import { OrderCompleteComponent } from './order/order-complete/order-complete.component';
import {FormsModule} from "@angular/forms";
import {OrderListService} from "./services/orderlist.service";
import {UserService} from "./services/user.service";
import {ItemService} from "./services/item.service";
// directives
import { StudentDirective } from './directives/user.directive';
import { UserDetailsComponent } from './ui-compoents/button/userdetails.component';
import {CapitalizeFirstPipe} from './pipes/capitalizefirst.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LoginViewComponent,
    SignupComponent,
    ForgotpassComponent,
    OrderComponent,
    ItemsComponent,
    ChartsComponent,
    OrderIncomingComponent,
    OrderActiveComponent,
    OrderCompleteComponent,
    StudentDirective,
    UserDetailsComponent,
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
