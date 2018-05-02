import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { OrderListService } from '../services/orderlist.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderListService]
})
export class OrderComponent implements OnInit {
  isActiveTableUpdated: boolean = false;
  constructor() {}

  onChange(message: string) {
    if ( message === 'Update Active Table') {
      console.log(message);
      this.isActiveTableUpdated = true;
      console.log('changed to true to update active table');
    } else {
      console.log(message);

    }
    // this.isActiveTableUpdated = false;
  }
  onFinish(message: string) {
    if ( message === 'Active Table Updated Succesfuly' ) {
      console.log(message);
      this.isActiveTableUpdated = false;
    }
  }
  ngOnInit() {}

}
