import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterState} from './counter.reducer';

export const counterFeatureSelector = createFeatureSelector<CounterState>('counter')

export const selectCounterValue = createSelector(
  counterFeatureSelector,
  (state) => state.value
)

export const selectCounterName = createSelector(
  counterFeatureSelector,
  (state) => state.name
)
