# SharingData

Shows how to send data from app-child component to the app component, and 
in return send that data to the app-child2 component. So, you're emitting data
from the app-child component to the app component. Taking that data and sending it
to the app-child2 component.

## Development server

Run `npm run this` for a dev server that will open `http://localhost:4200/` in your browser.

## Steps

1. Import (Output, EventEmitter) from '@angular/core' into the child component.
2. Create  `@Output() nameOfEvent: EventEmitter<any> = new EventEmitter<any>()` inside the child component.
3. Add `<app-child (nameOfEvent)="nameOfEvent($event)"></app-child>` to the app-child component html block.
4. Create the `nameOfEvent` method inside of the app component ts file.
5. Create a variable `nameOfVariable: string = ''` inside of the app component ts file.
6. Inside of the `nameOfEvent` method, set the `nameOfVariable` to the output of the app-child.
7. Inside of app-child2, import `Input from '@angular/core`.
8. Add `@Input() nameOfVariable: string = ''` inside of the app-child2 component.
9. `Optionally`, display the nameOfVariable in the html of the app-child2 component, or whatever you need to do
10. That is how to pass data from `child to parent`, `parent to child`, and `child to child`
