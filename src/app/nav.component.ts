import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  items = [
    {'name' : 'Dashboard', 'routerLink' : '/dashboard', 'icon' : 'cogs'},
    {'name' : 'Orders', 'routerLink' : '/order', 'icon' : 'coffee'},
    {'name' : 'Storage', 'routerLink' : '/menu', 'icon' : 'map'},
    {'name' : 'Charts', 'routerLink' : '/charts', 'icon' : 'chart line'},
    {'name' : 'Employee', 'routerLink' : '/emp', 'icon' : 'address book'}
    ];
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }

}
