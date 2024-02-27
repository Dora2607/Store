import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-headers></app-headers>
   <router-outlet> </router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Store';
}
