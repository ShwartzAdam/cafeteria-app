import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {OrderList} from '../interface/orderlist';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OrderService {
  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
  getAllOrders(): Observable<OrderList[]> {
   return this.http.get<OrderList[]>(this.url + '/orderedlists');
  }

}
