/**
 * Order service - api calls to web service
 *
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  public url = 'https://cafeappserver.herokuapp.com/api';
  // public urlEnv = 'http://localhost:3000/api';
  public headerConfig: any;
  private http: HttpClient
  constructor() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
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
