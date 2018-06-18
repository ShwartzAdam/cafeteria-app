import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderList} from '../classes/orderlist';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OrderListService {
  url = 'https://cafeappserver.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  public getAllOrders(): Observable<OrderList[]> {
    return this.http.get<OrderList[]>(this.url + '/orderedlist');
  }

  public getOrderListById(id: number): Observable<OrderList> {
    return this.http.get<OrderList>(this.url + '/orderedlist/' + id );
  }
  public getAllOrdersPromise() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist' , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public getAllOrdersByStatus(status: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist/status/' + status , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public getTodayFutureOrders() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist/todayfutureorders' , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public getTodayActiveOrders() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist/todayactiveorders', {
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
      this.http.put(this.url + '/orderedlist/' , JSON.stringify(_orderList) , {
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
      this.http.put(this.url + '/orderedlist/' , JSON.stringify(_orderList) , {
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
