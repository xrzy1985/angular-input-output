import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() getEvent: EventEmitter<any> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.getEvent.emit('app-child message');
  }

}
