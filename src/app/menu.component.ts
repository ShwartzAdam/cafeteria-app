import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items = [
    {'name' : 'Home', 'routerLink' : '/', 'icon' : 'home'},
    {'name' : 'Quick Order', 'routerLink' : '/quickorder', 'icon' : 'coffee'},
    {'name' : 'Full Menu', 'routerLink' : '/menuorder', 'icon' : 'map'},
    {'name' : 'Tracking', 'routerLink' : '/tracking', 'icon' : 'block book icon'},
    {'name' : 'Wallet', 'routerLink' : '/', 'icon' : 'credit card'},
    {'name' : 'Basket', 'routerLink' : '/', 'icon' : 'shopping basket'},
    {'name' : 'Logout', 'routerLink' : '/', 'icon' : 'power off'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
