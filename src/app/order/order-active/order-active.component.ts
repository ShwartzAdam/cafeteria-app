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
  orderList: OrderList[] = new Array();  //


  constructor(public orderListService: OrderListService) { }

  ngOnInit() {
    this.getActiveOrders();
  }
  getActiveOrders(): void {
    console.log('Getting Active Orders !');
    this.orderListService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'A');
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

}
