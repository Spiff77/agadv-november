import {Component, input, Input, signal} from '@angular/core';

@Component({
  selector: 'app-c2',
  standalone: true,
  imports: [],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.scss'
})
export class C2Component {

  name = input.required()

}