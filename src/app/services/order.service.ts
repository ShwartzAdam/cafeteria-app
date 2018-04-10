import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// models
import {Order} from '../interface/order';

@Injectable()
export class OrderService {

  url = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {}

  public createOrder(_order: Order) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/ordereditems', JSON.stringify(_order), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.url + '/ordereditems/' + id );
  }

  // delete order list by id
  public deleteOrderById(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/ordereditems/' + id , {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
