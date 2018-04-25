import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items = [
    {'name' : 'Dashboard', 'routerLink' : '/dashboard', 'icon' : 'cogs'},
    {'name' : 'Orders', 'routerLink' : '/order', 'icon' : 'coffee'},
    {'name' : 'Storage', 'routerLink' : '/menu', 'icon' : 'map'},
    {'name' : 'Charts', 'routerLink' : '/charts', 'icon' : 'chart line'},
    {'name' : 'Employee', 'routerLink' : '/charts', 'icon' : 'user plus'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
