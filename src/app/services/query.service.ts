import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {UserData} from './user-data/user-data.service';


@Injectable()
export class QueryService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlPrd = 'http://localhost:3000/api';
  public headerConfig: any;
  constructor(private http: HttpClient,
              private userData: UserData) {
    // this.setToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  /*
  setToken() {
    console.log('Query Provider - Setting Access Token');
    this.userData.getToken().then(
      res => {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-access-token', res);
        this.headerConfig = headers;
      });
  }
  */
  public getBestUsers(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/' + type , {headers: this.headerConfig});
  }
  public getBestItems(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/' + type , {headers: this.headerConfig});
  }
  public getDateRange(rangeStart: string, rangeEnd: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/orderlistreportFromDateToDate?param1=' + rangeStart + '&param2=' + rangeEnd ,
      {headers: this.headerConfig});
  }


}
