import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items = [
    {'name' : 'Orders', 'routerLink' : '/order', 'icon' : 'coffee'},
    {'name' : 'Menu', 'routerLink' : '/menu', 'icon' : 'map'},
    {'name' : 'Charts', 'routerLink' : '/charts', 'icon' : 'block book icon'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
