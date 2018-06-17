import {Component} from '@angular/core';
import {User} from '../../classes/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-employee-invite',
  templateUrl: './emp-inivte.component.html',
  styleUrls: ['./emp-inivte.component.css'],
  providers: []
})
export class EmployeeInviteComponent {
  private userReg: User = new User;
  public registerCredentials = { email: '',
                                  password: '',
                                  firstname: '',
                                  lastname: '',
                                  phone: ''
  };
  constructor(private userPro: UserService) {}

  inviteEmployee(): void {
    console.log('Invite an Employee to the system');
    this.userReg.email = this.registerCredentials.email;
    this.userReg.firstname = this.registerCredentials.firstname;
    this.userReg.lastname = this.registerCredentials.lastname;
    this.userReg.password = this.registerCredentials.password;
    this.userReg.phone = this.registerCredentials.phone;
    this.userReg.role = 'Employee';
    this.userReg.url = 'None';
    this.userReg.credit = 0;
    this.userPro.createUser(this.userReg).then(
      res => {
        console.log(res );
        this.cleanForm();
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
