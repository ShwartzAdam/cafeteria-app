import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// models
import {Order} from '../interface/order';

@Injectable()
export class ItemService {

  url = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {}
}
