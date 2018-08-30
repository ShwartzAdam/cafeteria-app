import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Item} from '../classes/item';
import {UserData} from './user-data/user-data.service';

@Injectable()
export class ItemService {

  public url = 'https://cafeappserver.herokuapp.com/api';
  // public urlPrd = 'http://localhost:3000/api';
  public headerConfig: any;
  constructor(private http: HttpClient,
              private userData: UserData) {
    this.setToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  setToken() {
    console.log('Item Provider - Setting Access Token');
    this.userData.getToken().then(
      res => {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-access-token', res);
        this.headerConfig = headers;
      });
  }
  // Get item by id
  public getItemById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/items/' + id , {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // get all items
  public getAllItems() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/items', {
        headers: this.headerConfig,
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // Get all items
  public getAllItemsSub(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/items', {headers: this.headerConfig});
  }
  // Create item
  public createItem(_item: Item) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/items', JSON.stringify(_item), {
        headers: this.headerConfig,
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // Delete item
  public deleteItem(itemid: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/items/' + itemid, {headers: this.headerConfig})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // Update item
  public updateItem(_item: Item) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/items/' , JSON.stringify(_item) , {
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
