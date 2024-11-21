import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset, updateName, updateValue} from './counter.actions';

export type CounterState = {value: number, name: string, color: string}
export type CounterStore = {counter: CounterState}

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
  on(updateValue, (state, {newValue}) => ({...state, value: newValue})),
  on(updateName, (state, {newName}) => ({...state, name: newName}))
)


