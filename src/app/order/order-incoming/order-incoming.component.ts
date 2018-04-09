import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {OrderList} from "../../interface/orderlist";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : [OrderService]
})
export class OrderIncomingComponent implements OnInit {

  // ORDER LIST WITH STATUS 'INCOMING'
  orderList: OrderList[] ;
  //
  orderListId: number[];
  checkedOrderList: boolean[];
  constructor(public orderService: OrderService) {}

  ngOnInit() {
    this.getIncomingOrders();
  }
  getIncomingOrders(): void {
    this.orderService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'I');
      this.orderList = rawData;
      console.log(rawData);
      this.checkedOrderList = new Array(this.orderList.length).fill(false);
      this.orderListId = new Array(this.orderList.length);
    });
  }

  startMakingOrder(orderlistid){
      // collect the checkbox orderlist from the template
      console.log(this.checkedOrderList);
      let index = 0;
      let indey = 0;
      this.checkedOrderList.forEach( order => {
        console.log(order);
        if (order === true) {
          console.log('true');
          console.log(this.orderList[index]['olid']);
          this.orderListId[indey++] = this.orderList[index]['olid'];
        } else {
          console.log('false');
        }
        index++;
      });
      console.log(this.orderListId);
      this.orderListId.forEach(orderListToMake => {
        this.orderService.getOrderListById(orderListToMake).subscribe(res => {
          console.log(res);
        });
      });

  }

}
