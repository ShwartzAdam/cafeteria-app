import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components for routes
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ForgotpassComponent} from './auth/forgotpass/forgotpass.component';
import {OrderComponent} from './order/order.component';
import {MenuComponent} from './menu/menu.component';
import {ChartsComponent} from './charts/charts.component';
import {OrderIncomingComponent} from './order/order-incoming/order-incoming.component';
import {OrderActiveComponent} from './order/order-active/order-active.component';
import {OrderCompleteComponent} from './order/order-complete/order-complete.component';


const appRoutes: Routes = [
  { path: '' , redirectTo : '/home' , pathMatch : 'full' },
  { path: 'home' , component : LoginComponent},
  { path: 'signup' , component : SignupComponent},
  { path: 'forgotpass' , component : ForgotpassComponent},
  {
    path: 'order' ,
    component : OrderComponent,
    children: [
      {path: '' , redirectTo: '/order' , pathMatch : 'full' },
      {path: 'incoming' , component: OrderIncomingComponent},
      {path: 'active' , component: OrderActiveComponent},
      {path: 'complete' , component: OrderCompleteComponent}
    ]
  },
  {
    path: 'menu' ,
    component : OrderComponent,
    children: [
      {path: '' , redirectTo: '/menu' , pathMatch : 'full' }
    ]
  },
  { path: 'charts' , component : ChartsComponent},
  { path: '**' , component : LoginComponent},

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
