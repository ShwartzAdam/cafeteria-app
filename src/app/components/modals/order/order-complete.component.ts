/**
 * Order modal - Complete
 *
 */
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
  // input of orderlist
  @Input() orderInputConf: OrderList = new OrderList;
  // output of nofity event
  @Output() notifyChange: EventEmitter<string> = new EventEmitter<string>();
  // holds the orderlist
  public order: OrderList = new OrderList;
  constructor(private orderListService: OrderListService,
              private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      // if there werent any change , return
      return;
    } else {
      // if an event change the object , fetch it and store it
      this.order = changes.orderInputConf.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Ok') {
      this.order.status = 'Complete';
      this.orderListService.updateOrderList(this.order).then(
        () => {
          this.userService.notifyStudent(this.order.olid).then(
            () => {}
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
    }
  }
}
