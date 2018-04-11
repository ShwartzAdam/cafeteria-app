import { Component, OnInit } from '@angular/core';
import {OrderListService} from '../../services/orderlist.service';
import {OrderList} from '../../interface/orderlist';

@Component({
  selector: 'app-order-active',
  templateUrl: './order-active.component.html',
  styleUrls: ['./order-active.component.css'],
  providers : [OrderListService]
})
export class OrderActiveComponent implements OnInit {

  // ORDER LIST WITH STATUS 'ACTIVE'
  orderList: OrderList[] ;
  //
  orderListId: number[];
  checkedOrderList: boolean[];
  constructor(public orderListService: OrderListService) { }

  ngOnInit() {
    this.getActiveOrders();
  }
  getActiveOrders(): void {
    console.log('Getting Active Orders !');
    this.orderListService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'A');
      this.orderList = rawData;
      console.log(rawData);
      this.checkedOrderList = new Array(this.orderList.length).fill(false);
      this.orderListId = new Array(this.orderList.length);
    });
  }

}
