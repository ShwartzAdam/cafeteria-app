import {AfterContentInit, Component} from '@angular/core';
import {OrderList} from '../../classes/orderlist';
import {OrderListService} from '../../services/orderlist.service';


@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements AfterContentInit {
  // order list with status 'completed'
  public elements: OrderList[] = [];
  constructor(public orderListService: OrderListService) { }
  ngAfterContentInit(): void {
    this.getCompletedOrders();
  }

  getCompletedOrders(): void {
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
        this.elements.push(_ol);
      });
    });

  }

}
