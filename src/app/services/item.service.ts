import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// models
import {Item} from '../classes/item';

@Injectable()
export class ItemService {

  url = 'https://cafeappserver.herokuapp.com/api';

  constructor(public http: HttpClient) {}


  public getItemById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/items/' + id , {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public getAllItems() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/items', {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public getAllItemsSub(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/items');
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
  public deleteItem(itemid: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/items/' + itemid)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  public updateItem(_item: Item) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/items/' , JSON.stringify(_item) , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
