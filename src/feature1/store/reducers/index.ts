import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromTest from './test.reducer';

export interface Feature1State {
  test: fromTest.State;
}

export const reducers: ActionReducerMap<Feature1State> = {
  test: fromTest.reducer
};

export const getTestState = createFeatureSelector<Feature1State>('feature1');
