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
import {EmployeeComponent} from './employee/employee.component';
// guards
import {AuthGuard} from './auth/auth.guard';
import {AuthLayoutComponent} from './layouts/auth-layout.component';
import {HomeLayoutComponent} from './layouts/home-layout.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
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
        ],
        /*canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin'
        }
        */
      },
      { path: 'charts' ,
        component : ChartsComponent,
        /*
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin'
        }
        */
      },
      { path: 'emp' ,
        component : EmployeeComponent,
        /*
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin'
        }
        */
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
