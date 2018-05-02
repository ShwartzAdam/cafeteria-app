import {Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: []
})
export class EmployeeComponent {

  private registerCredentials = { email: '', firstname: '', lastname: '' };

  constructor() {}
  inviteEmployee(): void {
    console.log(this.registerCredentials);

  }

}
