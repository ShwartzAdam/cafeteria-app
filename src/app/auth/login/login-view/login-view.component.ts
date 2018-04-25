import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserData} from '../../../services/user-data/user-data.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  private registerCredentials = { email: '', password: '' };

  constructor(public userService: UserService,
              public userData: UserData) { }

  ngOnInit() {
  }

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
