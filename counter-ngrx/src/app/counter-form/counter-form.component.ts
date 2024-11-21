import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {updateValue} from '../store/counter/counter.actions';
import {CounterState} from '../store/counter/counter.reducer';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss']
})
export class CounterFormComponent implements OnInit{
  value = 0

  private store = inject(Store<{counter: CounterState}>)

  setCounterValue() {
    this.store.dispatch(updateValue({newValue: this.value}))
  }

  ngOnInit(): void {

    this.store.select(c => c.counter.value).subscribe(v => console.log('Counter Form Value Component updated'))
  }
}
