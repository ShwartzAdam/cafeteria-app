import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {OrderListService} from '../../../services/orderlist.service';
import {OrderList} from '../../../classes/orderlist';
import {UserService} from '../../../services/user.service';
declare var jQuery: any;

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
  constructor(private orderListService: OrderListService,
              private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      // console.log(changes);
      return;
    } else {
      // console.log(changes.orderInputConf.currentValue);
      this.order = changes.orderInputConf.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Ok') {
      // console.log('Order has been complete and ready for pickup - Order List ID : ' + this.order.olid);
      this.order.status = 'Complete';
      this.orderListService.updateOrderList(this.order).then(
        res => {
          // console.log(res);
          this.userService.notifyStudent(this.order.olid).then(
            respond => {}
          );
          this.notifyChange.emit('Order Complete');
          jQuery.uiAlert({
            textHead: 'Order has been completed', // header
            text: 'An order has been completed and moved to the complete table', // Text
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
