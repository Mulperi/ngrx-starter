import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(fromFeature.getState, state => {
  /*
    TODO: FIX SELECTOR
  */
  console.log('Root state: ' + state);
  return state.auth;
});

export const getAuthenticated = createSelector(
  getAuthState,
  fromAuth.getAuthenticated
);

export const getAuthenticating = createSelector(
  getAuthState,
  fromAuth.getAuthenticating
);
