import { Injectable } from '@angular/core';
import {User} from '../../classes/user';
import * as localForage from 'localforage';

@Injectable()
export class UserData {

  public userid: number;
  public token: string;
  public role: string;
  public instance: any;
  constructor () {
    localForage.config({
      driver      : localForage.WEBSQL, // Force WebSQL; same as using setDriver()
      name        : 'Cafteria Application',
      version     : 1.0,
      size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
      description : 'some description'
    });
    this.instance = localForage.createInstance({});
  }
  // Gets userid for any  cause
  public getUserId(): Promise<number> {
    if (this.userid) {
      return Promise.resolve(this.userid);
    } else {
      return this.instance.getItem('userid').then((res) => {
        this.userid = res;
        return res;
      });
    }
  }

  // Sets the userid after succussful login
  public setUserId(userid: number): void {
    return this.instance.setItem('userid', userid).then(res => {});
  }
  public setRole(role: string): void {
    return this.instance.setItem('role', role).then(res => {});
  }
  public getRole(): Promise<string> {
    if (this.role) {
      return Promise.resolve(this.role);
    } else {
      return this.instance.getItem('role').then((res) => {
        this.token = res;
        return res;
      });
    }
  }
  // Gets userid for any  cause
  public getToken(): Promise<string> {
    if (this.token) {
      return Promise.resolve(this.token);
    } else {
      return this.instance.getItem('token').then((res) => {
        this.token = res;
        return res;
      });
    }
  }

  // Sets the userid after succussful login
  public setToken(token: string): void {
    return this.instance.setItem('token', token).then(res => {});
  }
  public clearUserId(): void {
    this.instance.removeItem('userid');
  }
  public clearRole(): void {
    this.instance.removeItem('role');
  }


}
