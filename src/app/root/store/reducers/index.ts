import { Params } from '@angular/router';

import {
  createFeatureSelector,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromAuth from './auth.reducer';
import { environment } from 'src/environments/environment';

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

/*
  Store freeze makes sure you don't accidentally mutate the state
*/
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
