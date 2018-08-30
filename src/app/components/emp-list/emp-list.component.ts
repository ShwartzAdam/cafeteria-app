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
export class EmployeeListComponent implements OnInit {
  public users: User[] = [];
  public displayedColumns = ['userid' , 'firstname' , 'lastname' , 'phone' , 'email' ];
  public dataSource: any ;
  @ViewChild('paging') paginator: MatPaginator;
  constructor(private userPro: UserService) {}

  ngOnInit(): void {
    this.getAllEmps();
  }

  getAllEmps(): any {
    // get all emplys and display in a list
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
