import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset, update} from './counter.actions';
import {state} from '@angular/animations';

export type CounterState = {value: number, name: string, color: string}

const initialState: CounterState = {
  value: 5,
  name: 'My Awesome counter',
  color: 'green'
}

export const counterReducer = createReducer<CounterState>(
  initialState,
  on(increment, (state) => ({...state, value: state.value + 1})),
  on(decrement, (state) => ({...state, value: state.value - 1})),
  on(reset, (state) => ({...state, value: 0})),
  on(update, (state, {newValue}) => ({...state, value: newValue}))
)


