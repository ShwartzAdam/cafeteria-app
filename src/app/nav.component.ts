/**
 * Naviagation
 *
 */
import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {UserData} from './services/user-data/user-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private items: any;
  constructor(private authService: AuthService,
              private userData: UserData) {
  }

  onLogout() {
    this.userData.clearRole();
    this.userData.clearUserId();
    this.authService.logout();
  }

  ngOnInit(): void {
    this.userData.getRole().then(
      res => {
        // display the right nav accroding to his role
        if (res === 'Manager') {
          this.items = [
            {'name' : 'Dashboard', 'routerLink' : '/dashboard', 'icon' : 'cogs'},
            {'name' : 'Orders', 'routerLink' : '/order', 'icon' : 'coffee'},
            {'name' : 'Storage', 'routerLink' : '/menu', 'icon' : 'map'},
            {'name' : 'Charts', 'routerLink' : '/charts', 'icon' : 'chart line'},
            {'name' : 'Employee', 'routerLink' : '/emp', 'icon' : 'address book'}
          ];
        } else {
          this.items = [
            {'name' : 'Dashboard', 'routerLink' : '/dashboard', 'icon' : 'cogs'},
            {'name' : 'Orders', 'routerLink' : '/order', 'icon' : 'coffee'},
            {'name' : 'Storage', 'routerLink' : '/menu', 'icon' : 'map'},
          ];
        }
      });
  }

}
