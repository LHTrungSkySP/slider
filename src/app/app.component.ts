import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider';
  layoutNumber = 0;
  tranferLayout(numberLayout : number) {
    this.layoutNumber = numberLayout;
  }
}
