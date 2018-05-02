import { Component, OnInit } from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
  providers : [OrderListService]
})
export class OrderCompleteComponent implements OnInit {

  // ORDER LIST WITH STATUS 'Completed'
  private orderList: OrderList[] = [];

  constructor(public orderListService: OrderListService) { }

  ngOnInit() {
    this.getCompletedOrders();
  }
  getCompletedOrders(): void {
    console.log('Getting Completed Orders !');
    this.orderListService.getAllOrdersByStatus('Complete').
      then( (_orderList: any) =>  {
        _orderList.forEach( ol => {
          const _ol: OrderList = new OrderList;
          _ol.userid = ol.userid;
          _ol.olid = ol.olid
          _ol.totalprice = ol.totalprice;
          _ol.status = ol.status;
          _ol.ol_dttm = ol.ol_dttm;
          _ol.ol_dttm_real = ol.ol_dttm_real;
          _ol.hasreview = ol.hasreview;
          this.orderList.push(_ol);
        });
        console.log(this.orderList);
      });
  }

}
