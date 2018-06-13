import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../services/orderlist.service';
import {OrderList} from '../../interface/orderlist';

import 'jquery';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-order-active',
  templateUrl: './order-active.component.html',
  styleUrls: ['./order-active.component.css'],
  providers : [OrderListService]
})
export class OrderActiveComponent implements OnInit, OnChanges, OnDestroy {

  // ORDER LIST WITH STATUS 'ACTIVE'
  public orderList: OrderList[] = new Array();  //
  @Output() notifyUpdated: EventEmitter<string> = new EventEmitter<string>();
  @Input() insertOrder: boolean = false;
  public ordertocomplete: OrderList;
  constructor(public orderListService: OrderListService) { }

  ngOnInit() {
    this.getActiveOrders();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      console.log(changes);
      return;
    } else {
      console.log(changes.insertOrder);
      if ( changes.insertOrder.currentValue ) {
        this.orderList = new Array();
        this.getActiveOrders();
        this.notifyUpdated.emit('Active Table Updated Succesfuly');
      }
    }
  }
  ngOnDestroy(): void {
    console.log("Active - Destory");
    $( '.ui.complete.order.modal' ).remove();
  }
  onNotifyClicked(message) {
    console.log(message);
    if ( message === 'Order Complete') {
      this.orderList = new Array();
      this.getActiveOrders();
    }
  }
  getActiveOrders(): void {
    console.log('Getting Active Orders !');
    jQuery.uiAlert({
      textHead: 'Active Orders', // header
      text: 'Active orders table has been updated succesfuly', // Text
      bgcolor: '#55a9ee', // background-color
      textcolor: '#fff', // color
      position: 'top-left',// position . top And bottom ||  left / center / right
      icon: 'info circle', // icon in semantic-UI
      time: 5, // time
    });
    this.orderListService.getAllOrdersByStatus('Active').
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
  completeOrder(order) {
    console.log(order);
    console.log('Complete Order List and notify Student');
    this.ordertocomplete = order;
    console.log(this.ordertocomplete);
    $('.ui.complete.order.modal')
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
