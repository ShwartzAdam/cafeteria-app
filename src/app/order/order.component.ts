import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

import { OrderList } from '../interface/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  orderList: OrderList[] ;

  constructor(private orderService: OrderService) { }
  ngOnInit() {
    this.getOrdersList();
  }
  getOrdersList(): void {
    this.orderService.getAllOrders().subscribe(orderList => this.orderList = orderList);
  }
  getOrderDetailes(): void {}
  getOrderStudentImage(): void {}
  startOrder(): void {}
  notifyStudent(): void {}
}
