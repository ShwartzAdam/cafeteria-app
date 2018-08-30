/**
 * Order - Incoming order component and Active order component
 *
 */
import {Component} from '@angular/core';
import { OrderListService } from '../services/orderlist.service';

declare var jQuery: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderListService]
})
export class OrderComponent {
  isActiveTableUpdated: boolean = false;
  isReloadAsked: boolean = false;

  constructor() {}

  onChange(message: string) {
    if ( message === 'Update Active Table') {
      this.isActiveTableUpdated = true;
    } else if (message === 'Incoming Table Updated Succesfuly') {
        setTimeout(() => {
          this.isReloadAsked = false;
        });
    }
  }
  onFinish(message: string) {
    if ( message === 'Active Table Updated Succesfuly' ) {
      setTimeout(() => {
        this.isActiveTableUpdated = false;
      });
    }
  }
  reloadTable() {
    this.isReloadAsked = true;
  }

}
