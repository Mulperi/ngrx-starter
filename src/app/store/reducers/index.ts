import { Params } from '@angular/router';

import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface RootState {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer
};

export const getTestState = createFeatureSelector<RootState>('root');
