import {Component} from '@angular/core';
import {User} from '../../classes/user';
import {UserService} from '../../services/user.service';

declare var jQuery: any;


@Component({
  selector: 'app-employee-invite',
  templateUrl: './emp-invite.component.html',
  styleUrls: ['./emp-invite.component.css'],
  providers: []
})
export class EmployeeInviteComponent {
  private userReg: User = new User;
  public registerCredentials = { email: '',
                                  password: '',
                                  firstname: '',
                                  lastname: '',
                                  credit: 0,
                                  phone: '',
                                  url: '',
                                  role: ''
  };
  constructor(private userPro: UserService) {}

  inviteEmployee(): void {
    // console.log('Invite an Employee to the system');
    this.userReg.email = this.registerCredentials.email;
    this.userReg.firstname = this.registerCredentials.firstname;
    this.userReg.lastname = this.registerCredentials.lastname;
    this.userReg.password = this.registerCredentials.password;
    this.userReg.phone = this.registerCredentials.phone;
    this.userReg.role = 'Employee';
    this.userReg.url = 'None';
    this.userPro.createUser(this.userReg).then(
      res => {
        this.cleanForm();
        jQuery.uiAlert({
          textHead: 'Employee Invitation', // header
          text: 'Employee has been invited successfully', // Text
          bgcolor: '#55a9ee', // background-color
          textcolor: '#fff', // color
          position: 'top-left', // position . top And bottom ||  left / center / right
          icon: 'info circle', // icon in semantic-UI
          time: 5, // time
        });
      }
    );
  }
  cleanForm(): any {
    this.registerCredentials.email = '';
    this.registerCredentials.firstname = '';
    this.registerCredentials.lastname = '';
    this.registerCredentials.password = '';
    this.registerCredentials.phone = '';
  }

}
