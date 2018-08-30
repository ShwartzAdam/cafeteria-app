/**
 * Login Component - allows emp/mang to login
 *
 */
import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserData} from '../../services/user-data/user-data.service';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../classes/user';

declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loading = false;
  public registerCredentials = { email: '', password: '', role: '' };
  constructor(public userService: UserService,
              public userData: UserData,
              private authService: AuthService) {}
  setRole(s) {
    this.registerCredentials.role = s;
  }
  login() {
    // display login
    this.loading = true;
    // start interval
    Observable.interval(1000).take(1).subscribe(() =>
      this.userService.getUser(this.registerCredentials).then( result => {
        if (result) {
          // if user exist save it in local storage - id and role
          this.userData.setUserId(result['userid']);
          this.userData.setRole(this.registerCredentials.role);
          this.authService.loginSucc();
          // hide loading
          this.loading = false;
        }}).catch( err => {
          this.loading = false;
          if ( this.registerCredentials.role === '') {
            jQuery.uiAlert({
              textHead: 'Error Login', // header
              text: 'Choose a role - Manager or Employee', // Text
              bgcolor: '#DB2828', // background-color
              textcolor: '#fff', // color
              position: 'top-right',// position . top And bottom ||  left / center / right
              icon: 'remove circle', // icon in semantic-UI
              time: 3, // time
            });
          } else {
            jQuery.uiAlert({
              textHead: 'Error Login', // header
              text: 'Email or password are incorrect', // Text
              bgcolor: '#DB2828', // background-color
              textcolor: '#fff', // color
              position: 'top-right',// position . top And bottom ||  left / center / right
              icon: 'remove circle', // icon in semantic-UI
              time: 3, // time
            });
          }

      })
    );
  }
}
