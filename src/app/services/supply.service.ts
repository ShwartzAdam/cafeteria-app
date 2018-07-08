import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Supplier} from '../classes/supplier';
import {UserData} from './user-data/user-data.service';


@Injectable()
export class SupplyService {
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
    console.log('Supplier Provider - Setting Access Token');
    this.userData.getToken().then(
      res => {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-access-token', res);
        this.headerConfig = headers;
      });
  }
  */
  public getAllSupply(): Observable<Supplier> {
    return this.http.get<Supplier>(this.url + '/sup/' , {headers: this.headerConfig});
  }



}
