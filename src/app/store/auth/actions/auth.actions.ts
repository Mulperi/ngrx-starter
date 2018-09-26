import { Action } from '@ngrx/store';

export const AUTH_AUTHENTICATE = '[Auth] Authenticate';
export const AUTH_SUCCESS = '[Auth] Success';
export const AUTH_ERROR = '[Auth] Error';

export class AuthAuthenticate implements Action {
  readonly type = AUTH_AUTHENTICATE;
  constructor(public payload?: any) {}
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(public payload: any) {}
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public payload: any) {}
}

export type TestAction = AuthAuthenticate | AuthSuccess | AuthError;
