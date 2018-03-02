import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components for routes
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ForgotpassComponent} from './auth/forgotpass/forgotpass.component';


const appRoutes: Routes = [
  { path: '' , redirectTo : '/home' , pathMatch : 'full' },
  { path: 'home' , component : LoginComponent},
  { path: 'signup' , component : SignupComponent},
  { path: 'forgotpass' , component : ForgotpassComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
