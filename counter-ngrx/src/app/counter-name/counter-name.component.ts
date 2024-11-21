import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as CounterActions from '../store/counter/counter.actions';
import {CounterState, CounterStore} from '../store/counter/counter.reducer';

@Component({
  selector: 'app-counter-name',
  templateUrl: './counter-name.component.html',
  styleUrls: ['./counter-name.component.scss']
})
export class CounterNameComponent implements OnInit{
  value = ''

  private store = inject(Store<CounterStore>)

  setCounterName() {
    this.store.dispatch(CounterActions.updateName({newName:this.value}))
  }

  ngOnInit(): void {
    this.store.subscribe(v => console.log('Counter Name Component updated'))
  }
}
