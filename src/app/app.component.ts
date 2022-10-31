import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  public getEvent(data: any) {
    this.message = 'This, (' + data + '), is being sent from the app-child component to app-child2';
  }
}
