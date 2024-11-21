import { Component } from '@angular/core';

type Person = {id: number, fname: string, age: number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-ngrx';


}
