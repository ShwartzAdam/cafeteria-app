import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../classes/user';
import {UserService} from '../../services/user.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-employee-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  providers: [UserService]
})
export class EmployeeListComponent implements OnInit, AfterContentInit {
  public users: User[] = [];
  public displayedColumns = ['userid' , 'firstname' , 'lastname' , 'phone' , 'email' ];
  public dataSource: any ;
  @ViewChild('paging') paginator: MatPaginator;
  constructor(private userPro: UserService) {}

  ngOnInit(): void {
    console.log("ngOnInit - Employee list");
    this.getAllEmps();
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - Employee list");
  }
  getAllEmps(): any {
    this.userPro.getUserByRole('Employee').subscribe(
      empArr => {
          empArr.forEach( emp => this.users.push(emp));
          this.dataSource = new MatTableDataSource<User>(this.users);
          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
          });
      });
  }

}
