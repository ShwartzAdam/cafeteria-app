import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules Added
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { AppRoutingModule } from './app-routing.module';
// Main Component
import { AppComponent } from './app.component';
// Sub Components
import { MenuComponent } from './menu.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view/login-view.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { OrderComponent } from './order/order.component';
import { QuickOrderViewComponent } from './order/quick-order-view/quick-order-view.component';
import { MenuOrderViewComponent } from './order/menu-order-view/menu-order-view.component';
import { TrackingComponent } from './tracking/tracking.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LoginViewComponent,
    SignupComponent,
    ForgotpassComponent,
    OrderComponent,
    QuickOrderViewComponent,
    MenuOrderViewComponent,
    TrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
