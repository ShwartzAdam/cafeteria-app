import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../services/orderlist.service';
import {OrderList} from '../../classes/orderlist';

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

  // Order list with status 'active'
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
      return;
    } else {
      if ( changes.insertOrder.currentValue ) {
        this.orderList = new Array();
        this.getActiveOrders();
        this.notifyUpdated.emit('Active Table Updated Succesfuly');
      }
    }
  }
  ngOnDestroy(): void {
    $( '.ui.complete.order.modal' ).remove();
  }
  onNotifyClicked(message) {
    if ( message === 'Order Complete') {
      this.orderList = new Array();
      this.getActiveOrders();
    }
  }
  getActiveOrders(): void {
    jQuery.uiAlert({
      textHead: 'Active Orders', // header
      text: 'Active orders table has been updated succesfuly', // Text
      bgcolor: '#55a9ee', // background-color
      textcolor: '#fff', // color
      position: 'top-left',// position . top And bottom ||  left / center / right
      icon: 'info circle', // icon in semantic-UI
      time: 3, // time
    });
    this.orderListService.getTodayActiveOrders().then( (_orderList: any) => {
      const len = _orderList['length'];
      if ( len === 0 ) {
        // change orders table to display empty line
      } else {
        _orderList.forEach( ol => {
          let _ol: OrderList = new OrderList;
          _ol.userid = ol.userid;
          _ol.olid = ol.olid;
          _ol.totalprice = ol.totalprice;
          _ol.totalpreptime = ol.totalpreptime;
          _ol.ol_dttm = ol.ol_dttm;
          _ol.ol_dttm_real = ol.ol_dttm_real;
          _ol.hasreview = ol.hasreview;
          this.orderList.push(_ol);
        });
      }
    });
  }
  completeOrder(order) {
    this.ordertocomplete = order;
    $('.ui.complete.order.modal')
      .modal('setting', 'transition', 'horizontal flip')
      .modal('show')
    ;
  }


}
