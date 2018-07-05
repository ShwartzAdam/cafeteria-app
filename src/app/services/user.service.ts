import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../classes/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {UserData} from './user-data/user-data.service';


@Injectable()
export class UserService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlEnv = 'http://localhost:3000/api';
  public headerConfig: any;
  constructor(private http: HttpClient) {
    // this.setToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  /*
  setToken() {
    console.log('User Provider - Setting Access Token');
    this.userData.getToken().then(
      res => {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-access-token', res);
        this.headerConfig = headers;
      });
  }
  */
  public createUser(_user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/signup', JSON.stringify(_user), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getUser(registerCredentials) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/login' , JSON.stringify(registerCredentials), {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  /*
  public getUserByRole(role) {
    return new Promise(resolve => {
      this.http.get(this.url + '/users/role/' + role , {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        });
    });
  }
  */
  public getUserByRole(role): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users/role/' + role , {headers: this.headerConfig});
  }
  public getUserByRoleAny(role): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/users/role/' + role ,{headers: this.headerConfig});
  }
  public getUserByRolePromise(s: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/users/role/' + s, {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/users/' + id , {headers: this.headerConfig} );
  }
  public getUserByIdPromise(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/users/' + id, {
        headers: this.headerConfig
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(this.url + '/download/' + imageUrl , {headers: this.headerConfig, responseType: 'blob'});
  }
  public notifyStudent(olid: number) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/users/sms/' + olid, {}, {
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
