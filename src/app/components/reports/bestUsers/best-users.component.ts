import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-charts-users',
  templateUrl: './best-users.component.html',
  styleUrls: ['./best-users.component.css'],
  providers: [UserService]
})
export class BestUsersComponent implements OnInit, AfterContentInit {
  @Input() option: string;
  public users: any[] = new Array();
  // dtOptions: DataTables.Settings = {};
  constructor(private userPro: UserService) {}

  ngOnInit(): void {
    console.log("ngOnInit - Best Users report - " + this.option);
    /*this.dtOptions = {
      searching: false,
      ordering:  false,
      info: false,
      pageLength: 7,
      lengthChange: false
    };
    */
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - Best Users report" + this.option);
    this.getReportBy(this.option);
  }
  private getReportBy(s: string) {
    this.userPro.getBestUsers(s).subscribe(
      res => {
          this.users = res;
      });
  }
}
