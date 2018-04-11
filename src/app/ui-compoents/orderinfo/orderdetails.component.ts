import {Component, Input, OnInit} from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
  providers: [OrderListService]
})
export class OrderDetailsComponent implements OnInit {
  @Input() orderListId: number;
  private orderList: OrderList = new OrderList();

  constructor(private orderListService: OrderListService) {}

  ngOnInit() {
    /*
    this.orderListService.getOrderListById(this.userId).subscribe(
      student => {
        this.stu.userid = student.userid;
        this.stu.firstname = student.firstname;
        this.stu.lastname = student.lastname;
        this.stu.image = student.image;
        this.stu.email = student.email;
        this.stu.phone = student.phone;
      });
  }*/
  }
}
