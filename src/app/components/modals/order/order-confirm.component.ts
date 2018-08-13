import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../../services/orderlist.service';
import {OrderList} from '../../../classes/orderlist';

declare var jQuery: any;

@Component({
  selector: 'app-order-modal-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css'],
  providers: [OrderListService]
})
export class OrderConfirmComponent implements OnChanges {
  @Input() orderInputConf: OrderList = new OrderList;
  @Output() notifyChange: EventEmitter<string> = new EventEmitter<string>();
  public order: OrderList = new OrderList;
  constructor(private orderListService: OrderListService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      // console.log(changes);
      return;
    } else {
      // console.log("current value in comfirm :");
      // console.log(changes.orderInputConf.currentValue);
      this.order = changes.orderInputConf.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Ok') {
      // console.log('Start Making Order List ID : ' + this.order.olid);
      this.order.status = 'Active';
      console.log(this.order);
      this.order.ol_dttm_real = new Date().toISOString();
      this.orderListService.updateOrderList(this.order).then(
        res => {
          // console.log(res);
          this.notifyChange.emit('Update Table');
          jQuery.uiAlert({
            textHead: 'Order has been activated', // header
            text: 'An order has been started and moved to the active table', // Text
            bgcolor: '#F2711C', // background-color
            textcolor: '#fff', // color
            position: 'top-right',// position . top And bottom ||  left / center / right
            icon: 'warning sign', // icon in semantic-UI
            time: 5, // time
          });
        }
      );
    } else {
      // console.log('Exit Confirm Modal');
    }
  }
}
