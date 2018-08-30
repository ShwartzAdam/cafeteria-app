/**
 * Supply service - api calls to web service
 *
 */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Supplier} from '../classes/supplier';

@Injectable()
export class SupplyService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlDev = 'http://localhost:3000/api';
  public headerConfig: any;
  private http: HttpClient;
  constructor() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  // get all suppliers
  public getAllSupply(): Observable<Supplier> {
    return this.http.get<Supplier>(this.url + '/sup/' , {headers: this.headerConfig});
  }



}
