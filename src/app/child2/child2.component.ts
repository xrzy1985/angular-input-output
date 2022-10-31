import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `<h4>{{ message }}</h4>`,
  styleUrls: [],
})
export class Child2Component implements OnInit {
  @Input() message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
