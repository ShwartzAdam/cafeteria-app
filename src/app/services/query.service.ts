import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class QueryService {
  url = 'https://cafeappserver.herokuapp.com/api';

  constructor(private http: HttpClient) {}
  public getBestUsers(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/' + type );
  }
  public getBestItems(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/query/' + type );
  }


}
