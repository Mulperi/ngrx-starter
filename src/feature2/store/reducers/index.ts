import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromTest from './test.reducer';

export interface Feature2State {
  test: fromTest.State;
}

export const reducers: ActionReducerMap<Feature2State> = {
  test: fromTest.reducer
};

export const getTestState = createFeatureSelector<Feature2State>('feature2');
