import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-scss-configurable-button';
  smallButtonClicked(event: any) {
    console.log(event);
  }
}
