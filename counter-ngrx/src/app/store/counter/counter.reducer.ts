import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset, update} from './counter.actions';

const initialState = 5

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0),
  on(update, (state, {newValue}) => newValue)

)
