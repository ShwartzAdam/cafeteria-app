import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components for routes
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ForgotpassComponent} from './auth/forgotpass/forgotpass.component';
import {QuickOrderViewComponent} from './order/quick-order-view/quick-order-view.component';
import {MenuOrderViewComponent} from './order/menu-order-view/menu-order-view.component';
import {TrackingComponent} from './tracking/tracking.component';


const appRoutes: Routes = [
  { path: '' , redirectTo : '/home' , pathMatch : 'full' },
  { path: 'home' , component : LoginComponent},
  { path: 'signup' , component : SignupComponent},
  { path: 'forgotpass' , component : ForgotpassComponent},
  { path: 'quickorder' , component : QuickOrderViewComponent},
  { path: 'menuorder' , component : MenuOrderViewComponent},
  { path: 'tracking' , component : TrackingComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
