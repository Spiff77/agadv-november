import {Component, inject} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-superform',
  templateUrl: './superform.component.html',
  styleUrls: ['./superform.component.scss']
})
export class SuperformComponent {

  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    firstName: '',
    address: this.fb.group({
      streetName: '',
      streetNumber: 0,
    }),
    favColors: this.fb.array(['red'])
  })

  getColorFormArray(): FormArray{
    return (this.myForm.get('favColors') as FormArray)
  }

  addColor() {
    this.getColorFormArray().push(this.fb.control(''))
  }

  removeColor(index: number) {
    this.getColorFormArray().removeAt(index)
  }
}
