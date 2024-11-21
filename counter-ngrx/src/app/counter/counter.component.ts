import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {decrement, increment, reset} from '../store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  private store = inject(Store<{counter: number}>)

  count$: Observable<number> = this.store.select( c => c.counter )

  decrement() {
    this.store.dispatch(decrement())
  }

  increment() {
    this.store.dispatch(increment())
  }

  reset() {
    this.store.dispatch(reset())
  }

}
