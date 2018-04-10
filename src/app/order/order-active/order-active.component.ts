import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-active',
  templateUrl: './order-active.component.html',
  styleUrls: ['./order-active.component.css'],
  providers : [OrderService]
})
export class OrderActiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
