import { Action } from '@ngrx/store';

export const DATA_LOAD = '[Data] Load';
export const DATA_LOAD_SUCCESS = '[Data] Load Success';
export const DATA_ERROR = '[Data] Error';

export class DataLoad implements Action {
  readonly type = DATA_LOAD;
  constructor(public payload?: any) {}
}

export class DataLoadSuccess implements Action {
  readonly type = DATA_LOAD_SUCCESS;
  constructor(public payload: any) {}
}

export class DataLoadError implements Action {
  readonly type = DATA_LOAD_SUCCESS;
  constructor(public payload: any) {}
}

export type TestAction = DataLoad | DataLoadSuccess | DataLoadError;
