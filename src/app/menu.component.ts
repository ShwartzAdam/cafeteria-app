import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items = [
    {'name' : 'Dashboard', 'routerLink' : '/', 'icon' : 'home'},
    {'name' : 'Orders', 'routerLink' : '/order', 'icon' : 'coffee'},
    {'name' : 'Menu', 'routerLink' : '/items', 'icon' : 'map'},
    {'name' : 'Charts', 'routerLink' : '/charts', 'icon' : 'block book icon'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
