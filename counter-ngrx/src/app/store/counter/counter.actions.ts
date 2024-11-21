import {createAction, props} from '@ngrx/store';

export const increment = createAction("[Counter] Increment")
export const decrement = createAction("[Counter] Decrement")
export const reset = createAction("[Counter] Reset")
export const updateValue = createAction("[Counter] Update Value", props<{newValue: number}>())
export const updateName = createAction("[Counter] Update Name", props<{newName: string}>())
