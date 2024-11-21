import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {update} from '../store/counter/counter.actions';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss']
})
export class CounterFormComponent {
  value = 0

  private store = inject(Store<{counter: number}>)

  setCounterValue() {
    this.store.dispatch(update({newValue: this.value}))
  }
}
