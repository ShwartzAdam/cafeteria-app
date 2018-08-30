/**
 * Order List service - api calls to web service
 *
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderList} from '../classes/orderlist';
import {Observable} from 'rxjs/Observable';
import {UserData} from './user-data/user-data.service';


@Injectable()
export class OrderListService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlEv = 'http://localhost:3000/api';
  public headerConfig: any;
  private http: HttpClient;
  private userData: UserData;
  constructor() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }

  // Get order list by id
  public getOrderListById(id: number): Observable<OrderList> {
    return this.http.get<OrderList>(this.url + '/orderedlist/' + id , {headers: this.headerConfig} );
  }
  // Get all orders by status
  public getAllOrdersByStatus(status: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist/status/' + status , {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // Get today future orders
  public getTodayFutureOrders() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist/todayfutureorders' , {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // Get today active orders
  public getTodayActiveOrders() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist/todayactiveorders', {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // Update order list
  public updateOrderList(_orderList: OrderList) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/orderedlist/' , JSON.stringify(_orderList) , {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
