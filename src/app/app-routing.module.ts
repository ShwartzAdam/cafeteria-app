import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components for routes
import {LoginComponent} from './auth/login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo : '/home' , pathMatch : 'full' },
  { path: 'home', component: LoginComponent},

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
