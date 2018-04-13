import { Component, OnInit } from '@angular/core';
import { OrderListService } from '../services/orderlist.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderListService]
})
export class OrderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
