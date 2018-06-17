import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-student-details',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
  @Input() userId: number;
  private stu: User = new User;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserById(this.userId).subscribe(
      student => {
        this.stu.userid = student.userid;
        this.stu.firstname = student.firstname;
        this.stu.lastname = student.lastname;
        this.stu.url = student.url;
        this.stu.email = student.email;
        this.stu.phone = student.phone;
      });
  }
}
