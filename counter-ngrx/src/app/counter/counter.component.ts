import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {decrement, increment, reset} from '../store/counter/counter.actions';
import {CounterState, CounterStore} from '../store/counter/counter.reducer';
import {selectCounterName, selectCounterValue} from '../store/counter/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  private store = inject(Store<CounterStore>)
  count$: Observable<number> = this.store.select(selectCounterValue)

  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())
  }
  reset() {
    this.store.dispatch(reset())
  }

}
