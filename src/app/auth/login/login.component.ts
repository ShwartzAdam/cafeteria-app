import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserData} from '../../services/user-data/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private registerCredentials = { email: '', password: '', role: 'Manager' };
  constructor(public userService: UserService,
              public userData: UserData) { }

  login() {
    console.log(this.registerCredentials);
    this.userService.getUser(this.registerCredentials).then( result => {
      if (result) {
        console.log('Log In Successful, UID: ' + result['userid'] );
        this.userData.setUserId(result['userid']);

      } else {
        console.log('bad input for loggin');
      }

    });
  }
}
