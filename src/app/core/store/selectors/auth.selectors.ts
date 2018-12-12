import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthenticated = createSelector(
  fromFeature.getAuthState,
  fromAuth.getAuthenticated
);

export const getAuthenticating = createSelector(
  fromFeature.getAuthState,
  fromAuth.getAuthenticating
);
