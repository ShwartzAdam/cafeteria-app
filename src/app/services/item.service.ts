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
  public createItem(_item: Item) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/items', JSON.stringify(_item), {
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
