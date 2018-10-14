import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromTest from './test.reducer';

export interface State {
  test: fromTest.State;
}

export const reducers: ActionReducerMap<State> = {
  test: fromTest.reducer
};

export const getTestFeatureState = createFeatureSelector<State>('feature2');
