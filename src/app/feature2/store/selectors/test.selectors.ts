import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromTest from '../reducers/test.reducer';

export const getTestState = createSelector(
  fromFeature.getTestFeatureState,
  state => state.test
);

export const getLoading = createSelector(getTestState, fromTest.isLoading);

export const getData = createSelector(getTestState, fromTest.getData);
