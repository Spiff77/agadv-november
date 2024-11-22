import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {C1Component} from './c1/c1.component';
import {CustomFormComponent} from './custom-form/custom-form.component';
import {FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {CustomFormContainerComponent} from './custom-form-container/custom-form-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C1Component, CustomFormComponent, ReactiveFormsModule, JsonPipe, CustomFormContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sandbox-18';

  private fb = inject(FormBuilder)
  theForm = this.fb.group({
    username: '',
    age: 30
  })

  username = new FormControl('Toto');
}
