import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// models
import {Order} from '../classes/order';
import {UserData} from './user-data/user-data.service';

@Injectable()
export class OrderService {

  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlDev = 'http://localhost:3000/api';
  public headerConfig: any;
  constructor(private http: HttpClient) {
    // this.setToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  /*
  setToken() {
    console.log('Order Provider - Setting Access Token');
    this.userData.getToken().then(
      res => {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-access-token', res);
        this.headerConfig = headers;
      });
  }
  */
  public createOrder(_order: Order) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/ordereditems', JSON.stringify(_order), {
        headers: this.headerConfig,
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.url + '/ordereditems/' + id , {headers: this.headerConfig} );
  }

  // delete order list by id
  public deleteOrderById(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/ordereditems/' + id , {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // get all orders by olid
  public getOrdersByOrderListId(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/ordereditems/olid/' + id , {
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
