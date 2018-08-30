/**
 * Order incoming component
 *
 */
import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {OrderList} from '../../classes/orderlist';
import {OrderListService} from '../../services/orderlist.service';

import 'jquery';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import {Observable} from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : [OrderListService]
})
export class OrderIncomingComponent implements OnInit, OnChanges, OnDestroy {

  // Order list with status 'incoming'
  public orderList: OrderList[] = [];
  // notify table
  @Output() notifyTable: EventEmitter<string> = new EventEmitter<string>();
  // reload table boolean
  @Input() reloadTable: boolean = false;
  public ordertodo: OrderList;
  constructor(public orderListService: OrderListService) {}
  ngOnInit() {
    // Every 30 second i will bring new orders
    Observable.interval(30000).takeWhile(() => true).subscribe(() => {
      this.getIncomingOrders();
    });
    this.getIncomingOrders();
    $(document).ready(function() {
      $('.reload-button').hover(function() {
        $(this).transition('horizontal flip')
          .transition('horizontal flip')
          .transition('horizontal flip')
          .transition('stop')
          .transition('vertical flip');
      });
    });
  }
  onNotifyClicked(message: string): void {
    if ( message === 'Update Table') {
      this.orderList = new Array();
      this.getIncomingOrders();
      this.notifyTable.emit('Update Active Table');
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      // nothing change return
      return;
    } else {
      // the object has changed - fetch it
      if (changes.reloadTable.currentValue) {
        this.orderList = new Array();
        this.getIncomingOrders();
        this.notifyTable.emit('Incoming Table Updated Succesfuly');
      }
    }
  }

  ngOnDestroy(): void {
    // remove modal
    $( '.ui.confirm.order.modal' ).remove();
  }

  getIncomingOrders(): void {
    // init a new array
    this.orderList = new Array();
    // get future orders
    this.orderListService.getTodayFutureOrders().then( (_orderList: any) => {
        const len = _orderList['length'];
        if ( len === 0 ) {
          // change orders table to display empty line
        } else {
          // there are waiting orders
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

  startMakingOrder(order) {
    // make this order
    this.ordertodo = order;
    $('.ui.confirm.order.modal')
      .modal('setting', 'transition', 'horizontal flip')
      .modal('show');
  }
}
