import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../../services/orderlist.service';
import {OrderList} from '../../../interface/orderlist';

@Component({
  selector: 'app-order-modal-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
  providers: [OrderListService]
})
export class OrderCompComponent implements OnChanges {
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
      console.log('Order has been complete and ready for pickup - Order List ID : ' + this.order.olid);
      this.order.status = 'Complete';
      this.orderListService.updateOrderList(this.order).then(
        res => {
          console.log(res);
          this.notifyChange.emit('Order Complete');
        }
      );
    } else {
      console.log('Exit Confirm Modal');
    }
  }
}
