/**
 * Dashboard component - display completed orderlist and items in the menu
 *
 */

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {OrderListService} from '../services/orderlist.service';
import {UserService} from '../services/user.service';
import {OrderService} from '../services/order.service';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [OrderListService, OrderService, ItemService, UserService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
