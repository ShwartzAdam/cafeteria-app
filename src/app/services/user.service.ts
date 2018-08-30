/**
 * User service - api calls to web service
 *
 */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../classes/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  public url = 'https://cafeappserver.herokuapp.com/api';
  public urlEnv = 'http://localhost:3000/api';
  public headerConfig: any;
  private http: HttpClient;
  constructor() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }
  // Create user - emp
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
  // login
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
  // get users by role
  public getUserByRole(role): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users/role/' + role , {headers: this.headerConfig});
  }
  // get user by id
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/users/' + id , {headers: this.headerConfig} );
  }
  // notify student when order is ready
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
