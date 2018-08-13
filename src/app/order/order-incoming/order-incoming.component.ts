import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {OrderList} from '../../classes/orderlist';
import {OrderListService} from '../../services/orderlist.service';

import 'jquery';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import {Observable} from 'rxjs';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : [OrderListService]
})
export class OrderIncomingComponent implements OnInit, OnChanges, OnDestroy {

  // ORDER LIST WITH STATUS 'INCOMING'
  public orderList: OrderList[] = [];
  @Output() notifyTable: EventEmitter<string> = new EventEmitter<string>();
  @Input() reloadTable: boolean = false;
  public ordertodo: OrderList;
  constructor(public orderListService: OrderListService) {}
  ngOnInit() {
    // every 30 second i will bring new orders
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
    // console.log(changes);
    if (!changes) {
      // console.log(changes);
      return;
    } else {
      // console.log(changes.reloadTable.currentValue);
      // console.log(changes.reloadTable.firstChange);
      if (changes.reloadTable.currentValue) {
        this.orderList = new Array();
        this.getIncomingOrders();
        this.notifyTable.emit('Incoming Table Updated Succesfuly');
      }
    }
  }

  ngOnDestroy(): void {
    // console.log('exit Menu Storage');
    $( '.ui.confirm.order.modal' ).remove();
  }

  getIncomingOrders(): void {
   /* jQuery.uiAlert({
      textHead: 'Incoming Orders', // header
      text: 'Incoming orders table has been updated succesfuly', // Text
      bgcolor: '#55a9ee', // background-color
      textcolor: '#fff', // color
      position: 'top-left', // position . top And bottom ||  left / center / right
      icon: 'info circle', // icon in semantic-UI
      time: 2, // time
    });
    */
    this.orderList = new Array();
    // console.log('Getting Incoming Orders !');
    /*
    this.orderListService.getAllOrdersByStatus('Incoming').
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
    */
    this.orderListService.getTodayFutureOrders().then( (_orderList: any) => {
        const len = _orderList['length'];
        if ( len === 0 ) {
         //  console.log('no orders yet');
          // change orders table to display empty line
        } else {
          // console.log('there are orders waiting');
          _orderList.forEach( ol => {
            // console.log(ol);
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
    // console.log('Start Making Order List');
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
