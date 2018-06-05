import {AfterContentInit, Component, OnInit} from '@angular/core';
import {User} from '../../interface/user';
import {UserService} from '../../services/user.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  providers: [UserService]
})
export class EmployeeListComponent implements OnInit, AfterContentInit {
  private users: User[] = new Array();
  dtOptions: DataTables.Settings = {};
  constructor(private userPro: UserService) {}

  ngOnInit(): void {
    console.log("ngOnInit - Employee list");
    this.dtOptions = {
      searching: false,
      ordering:  false,
      info: false,
      pageLength: 7,
      lengthChange: false
    };
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - Employee list");
    this.getAllEmps();
  }

  public getAllEmps(): any {
    /*
    this.userPro.getUserByRole('Employee').then(
      (usersRes: any) => {
         usersRes.forEach(user => {
            this.users.push(user);
         });
      });
    */
    this.userPro.getUserByRole('Employee').subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      });
  }

}
