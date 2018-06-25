import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../classes/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  url = 'https://cafeappserver.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  public createUser(_user: User) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/users/signup', JSON.stringify(_user), {
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
      this.http.post(this.url + '/users/login' , JSON.stringify(registerCredentials), {
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
    return this.http.get<User[]>(this.url + '/users/role/' + role );
  }
  public getUserByRoleAny(role): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/users/role/' + role );
  }
  public getUserByRolePromise(s: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/users/role/' + s, {
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

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/users/' + id );
  }


  public getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(this.url + '/download/' + imageUrl , {responseType: 'blob'});
  }

}
