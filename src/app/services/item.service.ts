import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// models
import {Item} from '../interface/item';

@Injectable()
export class ItemService {

  url = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {}

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/items' );
  }
  public getItemById(id): Observable<Item> {
    return this.http.get<Item>(this.url + '/items/' + id );
  }
}
