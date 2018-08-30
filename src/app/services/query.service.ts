/**
 * Query service - api calls to web service
 *
 */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlDev = 'http://localhost:3000/api';
  public headerConfig: any;
  private http: HttpClient;
  constructor() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  // get best users by type (day, month,week)
  public getBestUsers(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/' + type , {headers: this.headerConfig});
  }
  // get best items by type (day, month,week)
  public getBestItems(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/' + type , {headers: this.headerConfig});
  }
  // get date range of orderlist
  public getDateRange(rangeStart: string, rangeEnd: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/orderlistreportFromDateToDate?param1=' + rangeStart + '&param2=' + rangeEnd ,
      {headers: this.headerConfig});
  }


}
