import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { OrderList } from '../interface/orderlist';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  orderList: OrderList[] ;

  constructor() {}
  ngOnInit() {}
  getOrderDetailes(): void {}
  getOrderStudentImage(): void {}
  startOrder(): void {}
  notifyStudent(): void {}
}
