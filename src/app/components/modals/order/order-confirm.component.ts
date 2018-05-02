import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../../services/orderlist.service';
import {OrderList} from '../../../interface/orderlist';

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
      console.log(changes);
      return;
    } else {
      console.log(changes.orderInputConf.currentValue);
      this.order = changes.orderInputConf.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Ok') {
      console.log('Start Making Order List ID : ' + this.order.olid);
      this.order.status = 'Active';
      this.order.ol_dttm_real = new Date().toISOString();
      this.orderListService.updateOrderList(this.order).then(
        res => {
          console.log(res);
          this.notifyChange.emit('Update Table');
        }
      );
    } else {
      console.log('Exit Confirm Modal');
    }
  }
}
