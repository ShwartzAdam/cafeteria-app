import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <div class="full height">
      <app-nav ></app-nav>
      <div class="article">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class HomeLayoutComponent {}
