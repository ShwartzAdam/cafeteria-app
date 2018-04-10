import { Component, OnInit } from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : []
})
export class OrderIncomingComponent implements OnInit {

  // ORDER LIST WITH STATUS 'INCOMING'
  orderList: OrderList[] ;
  //
  orderListId: number[];
  checkedOrderList: boolean[];
  constructor(public orderListService: OrderListService) {}

  ngOnInit() {
    this.getIncomingOrders();
  }
  getIncomingOrders(): void {
    console.log('Getting Incoming Orders !');
    this.orderListService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'I');
      this.orderList = rawData;
      console.log(rawData);
      this.checkedOrderList = new Array(this.orderList.length).fill(false);
      this.orderListId = new Array(this.orderList.length);
    });
  }

  startMakingOrder() {
    console.log('Start Making Orders !');
      // collect the checkbox orderlist from the template
      console.log(this.checkedOrderList);
      let index = 0;
      let indey = 0;
      this.checkedOrderList.forEach( order => {
        // if order has true from checkbox add it to orderlistid
        if (order === true) {
          console.log(this.orderList[index]['olid']);
          this.orderListId[indey++] = this.orderList[index]['olid'];
        } else {
        }
        index++;
      });
      console.log(this.orderListId);
      this.orderListId.forEach(orderListToMake => {
        this.orderListService.getOrderListById(orderListToMake).subscribe(res => {
          console.log(res);
        });
      });
      // call it again to present changes in tables
      this.getIncomingOrders();

  }

}
