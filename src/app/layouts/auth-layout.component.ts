import { Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
    <div class="full height">
      <div class="article">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AuthLayoutComponent {}
