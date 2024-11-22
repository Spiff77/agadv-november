import {Component, inject, OnInit} from '@angular/core';
import {ControlContainer, Form, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-custom-form-container',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './custom-form-container.component.html',
  styleUrl: './custom-form-container.component.scss'
})
export class CustomFormContainerComponent implements OnInit{
  container = inject(ControlContainer)
  ageControl!: FormControl

  ngOnInit(): void {
    this.ageControl = (this.container.control as FormGroup).get('age') as FormControl
    console.log('CustomFormContainer', this.container.value);
  }



}
