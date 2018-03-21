import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-incoming',
  templateUrl: './order-incoming.component.html',
  styleUrls: ['./order-incoming.component.css'],
  providers : [OrderService]
})
export class OrderIncomingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
