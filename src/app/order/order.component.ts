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

  constructor(private orderService: OrderService) { }
  ngOnInit() {
    this.getOrdersList();
  }
  getOrdersList(): void {
    this.orderService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'I');
      this.orderList = rawData;
      console.log(rawData);
    });
  }
  getOrderDetailes(): void {}
  getOrderStudentImage(): void {}
  startOrder(): void {}
  notifyStudent(): void {}
}
