import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {OrderList} from '../interface/order';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OrderService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getAllOrders(): Observable<OrderList[]> {
   return this.http.get<OrderList[]>(this.url + '/orderList');
  }

}
