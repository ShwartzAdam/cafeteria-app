import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';

import 'jquery';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : [OrderListService]
})
export class OrderIncomingComponent implements OnInit, OnDestroy {

  // ORDER LIST WITH STATUS 'INCOMING'
  orderList: OrderList[] ;
  @Output() notifyTable: EventEmitter<string> = new EventEmitter<string>();
  public ordertodo: OrderList;
  constructor(public orderListService: OrderListService) {
    this.orderList = new Array();
  }

  ngOnInit() {
    this.getIncomingOrders();
  }
  onNotifyClicked(message: string): void {
    if ( message === 'Update Table') {
      this.orderList = new Array();
      this.getIncomingOrders();
      this.notifyTable.emit('Update Active Table');
    }
  }

  ngOnDestroy(): void {
    console.log('exit Menu Storage');
    $( '.ui.confirm.order.modal' ).remove();
  }

  getIncomingOrders(): void {
    console.log('Getting Incoming Orders !');
    this.orderListService.getAllOrdersPromise().then( ( _orderList: any) => {
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
    });
  }

  startMakingOrder(order) {
    console.log('Start Making Order List');
    this.ordertodo = order;
    $('.ui.confirm.order.modal')
      .modal('setting', 'transition', 'horizontal flip')
      .modal('show')
    ;
    // modal for action - yes or no - then if
    // yes  - put call with orderlist to change status to 'Active'
    //        notify student (server side my opion
    //        get new incoming order to the list
    // no -   return to old screen review incoming anyway
    //
    // call it again to present changes in tables
    //this.getIncomingOrders();

  }


}
