import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderList} from '../classes/orderlist';
import {Observable} from 'rxjs/Observable';
import {UserData} from './user-data/user-data.service';


@Injectable()
export class OrderListService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlPrd = 'http://localhost:3000/api';
  public headerConfig: any;
  constructor(private http: HttpClient) {
    // this.setToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  /*
  setToken() {
    console.log('Order List Provider - Setting Access Token');
    this.userData.getToken().then(
      res => {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-access-token', res);
        this.headerConfig = headers;
      });
  }
  */
  public getAllOrders(): Observable<OrderList[]> {
    return this.http.get<OrderList[]>(this.url + '/orderedlist' , {headers: this.headerConfig});
  }

  public getOrderListById(id: number): Observable<OrderList> {
    return this.http.get<OrderList>(this.url + '/orderedlist/' + id , {headers: this.headerConfig} );
  }
  public getAllOrdersPromise() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/orderedlist' , {
        headers: this.headerConfig
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
        headers: this.headerConfig
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
        headers: this.headerConfig
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
        headers: this.headerConfig
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
        headers: this.headerConfig
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
