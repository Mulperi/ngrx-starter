import { Params } from '@angular/router';

import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromAuth from './auth.reducer';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  auth: fromAuth.reducer
};

export const getState = createFeatureSelector<State>('root');
