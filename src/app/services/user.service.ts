import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student} from '../interface/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getUserById(id: number): Observable<Student> {
    return this.http.get<Student>(this.url + '/users/' + id );
  }


  public getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(this.url + '/download/' + imageUrl , {responseType: 'blob'});
  }

}