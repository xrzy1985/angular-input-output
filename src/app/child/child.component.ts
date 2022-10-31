import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ``,
  styleUrls: [],
})
export class ChildComponent implements OnInit {
  @Output() getEvent: EventEmitter<any> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.emitMessage();
  }

  private emitMessage() {
    this.getEvent.emit('app-child message');
  }
}
