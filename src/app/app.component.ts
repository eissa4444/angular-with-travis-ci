import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-title [subtitle]="subtitle"></app-title>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subtitle = '111111111111';
}
