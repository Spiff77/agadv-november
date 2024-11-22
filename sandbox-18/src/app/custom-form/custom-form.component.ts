import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {interval} from 'rxjs';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => CustomFormComponent),
      multi: true
    }
  ],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.scss'
})
export class CustomFormComponent implements ControlValueAccessor{

    username = ''

    onChange!: (value:string) => () => {}

    writeValue(obj: any): void {
      this.username = obj
    }
    registerOnChange(fn: any): void {
      this.onChange = fn
      // avec formControl:  this.username.valueChanges.subscribe(fn)

    }
    registerOnTouched(fn: any): void {
    }
}
