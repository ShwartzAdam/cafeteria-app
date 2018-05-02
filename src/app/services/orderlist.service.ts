import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderList} from '../interface/orderlist';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OrderListService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getAllOrders(): Observable<OrderList[]> {
    return this.http.get<OrderList[]>(this.url + '/orderedlists');
  }

  public getOrderListById(id: number): Observable<OrderList> {
    return this.http.get<OrderList>(this.url + '/orderedlists/' + id );
  }
  public getAllOrdersPromise() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlists' , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public updateOrderListPromise(_orderList: OrderList) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/orderedlists/' , JSON.stringify(_orderList) , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public updateOrderList(_orderList: OrderList) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/orderedlists/' , JSON.stringify(_orderList) , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
