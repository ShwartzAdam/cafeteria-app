import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
      console.log(message);
      this.isActiveTableUpdated = true;
      console.log('changed to true to update active table');
    } else if (message === 'Incoming Table Updated Succesfuly'){
        console.log(message);
        setTimeout(() => {
          this.isReloadAsked = false;
        });
    }
    // this.isActiveTableUpdated = false;
  }
  onFinish(message: string) {
    if ( message === 'Active Table Updated Succesfuly' ) {
      console.log(message);
      setTimeout(() => {
        this.isActiveTableUpdated = false;
      });
    }
  }
  reloadTable() {
    console.log('reload data from server');
    this.isReloadAsked = true;
  }

}
