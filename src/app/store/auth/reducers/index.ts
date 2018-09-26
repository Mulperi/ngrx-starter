import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export interface AuthState {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<AuthState>('auth');
