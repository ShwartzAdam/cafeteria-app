import { Component, OnInit } from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
  providers : [OrderListService]
})
export class OrderCompleteComponent implements OnInit {

  // ORDER LIST WITH STATUS 'Completed'
  orderList: OrderList[] ;

  constructor(public orderListService: OrderListService) { }

  ngOnInit() {
    this.getCompletedOrders();
  }
  getCompletedOrders(): void {
    console.log('Getting Completed Orders !');
    this.orderListService.getAllOrders().subscribe( ( _orderList: any) => {
      this.orderList = _orderList.filter(order => order.status === 'Complete');
    });
  }

}
