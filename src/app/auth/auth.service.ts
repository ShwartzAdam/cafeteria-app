import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  constructor(private router: Router) {}
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  loginSucc() {
    // if login succ - go to dashboard
    this.loggedIn.next(true);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    // if logout - go to login
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
