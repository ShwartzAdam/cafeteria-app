import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Supplier} from '../interface/supplier';


@Injectable()
export class SupplyService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getAllSupply(): Observable<Supplier> {
    return this.http.get<Supplier>(this.url + '/sup/');
  }



}
