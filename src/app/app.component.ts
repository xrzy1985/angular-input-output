import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child (getEvent)="getEvent($event)"></app-child>
    <app-child2 [message]="message"></app-child2>
  `,
  styleUrls: [],
})
export class AppComponent {
  message = '';

  public getEvent(data: any) {
    this.message =
      'This, (' +
      data +
      '), is being sent from the app-child component to app-child2';
  }
}
