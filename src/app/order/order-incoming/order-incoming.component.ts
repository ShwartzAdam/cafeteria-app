import { Component, OnInit } from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : [OrderListService]
})
export class OrderIncomingComponent implements OnInit {

  // ORDER LIST WITH STATUS 'INCOMING'
  orderList: OrderList[] = new Array();

  constructor(public orderListService: OrderListService) {}

  ngOnInit() {
    this.getIncomingOrders();
  }
  getIncomingOrders(): void {
    console.log('Getting Incoming Orders !');
    this.orderListService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'Incoming');
      rawData.forEach( order => {
        const ol: OrderList = new OrderList;
        ol.userid = order.userid;
        ol.olid = order.olid
        ol.totalprice = order.totalprice;
        ol.status = order.status;
        ol.ol_dttm = order.ol_dttm;
        ol.ol_dttm_real = order.ol_dttm_real;
        ol.hasreview = order.hasreview;
        this.orderList.push(ol);
      });
      console.log(this.orderList);
    });
  }

  startMakingOrder(order) {
    console.log('Start Making Order List');
    console.log(order);
    // modal for action - yes or no - then if
    // yes  - put call with orderlist to change status to 'Active'
    //        notify student (server side my opion
    //        get new incoming order to the list
    // no -   return to old screen review incoming anyway
    //
    // call it again to present changes in tables
    this.getIncomingOrders();

  }


}
