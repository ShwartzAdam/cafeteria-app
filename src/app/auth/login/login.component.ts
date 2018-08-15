import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserData} from '../../services/user-data/user-data.service';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';

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
    // console.log(this.registerCredentials.role);
  }
  login() {
    // console.log(this.registerCredentials);
    this.loading = true;
    Observable.interval(1000).take(1).subscribe(() =>
      this.userService.getUser(this.registerCredentials).then( result => {
        if (result) {
          // console.log('Log In Successful, UID: ' + result['userid'] );
          this.userData.setUserId(result['userid']);
          this.userData.setRole(this.registerCredentials.role);
          // this.userData.setToken(result['token']);
          this.authService.loginSucc();
          // console.log(this.authService.isLoggedIn);
          this.loading = false;
        }}).catch( err => {
          // console.log(err);
          this.loading = false;
          // console.log('bad input for loggin');
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
