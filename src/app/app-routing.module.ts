import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components for routes
import {LoginComponent} from './auth/login/login.component';
import {OrderComponent} from './order/order.component';
import {MenuComponent} from './menu/menu.component';
import {ChartsComponent} from './charts/charts.component';
import {OrderIncomingComponent} from './order/order-incoming/order-incoming.component';
import {OrderActiveComponent} from './order/order-active/order-active.component';
import {OrderCompleteComponent} from './order/order-complete/order-complete.component';
import {MenuStorageComponent} from './menu/menu-storage/menu-storage.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: '' , redirectTo : '/home' , pathMatch : 'full' },
  { path: 'home' , component : LoginComponent},
  { path: 'dashboard' , component : DashboardComponent},
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
    component : MenuComponent,
    children: [
      {path: '' , redirectTo: '/menu' , pathMatch : 'full' },
      {path: 'storage' , component: MenuStorageComponent}
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
