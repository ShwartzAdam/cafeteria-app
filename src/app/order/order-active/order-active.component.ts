import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../services/orderlist.service';
import {OrderList} from '../../interface/orderlist';

@Component({
  selector: 'app-order-active',
  templateUrl: './order-active.component.html',
  styleUrls: ['./order-active.component.css'],
  providers : [OrderListService]
})
export class OrderActiveComponent implements OnInit, OnChanges {

  // ORDER LIST WITH STATUS 'ACTIVE'
  orderList: OrderList[] = new Array();  //
  @Output() notifyUpdated: EventEmitter<string> = new EventEmitter<string>();
  @Input() insertOrder: boolean = false;
  constructor(public orderListService: OrderListService) { }

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
  ngOnInit() {
    this.getActiveOrders();
  }
  getActiveOrders(): void {
    console.log('Getting Active Orders !');
    this.orderListService.getAllOrders().subscribe( ( _orderList) => {
      const rawData = _orderList.filter(order => order.status === 'Active');
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

}
