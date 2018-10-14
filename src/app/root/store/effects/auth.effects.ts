import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as authActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  authenticate$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTH_AUTHENTICATE),
    map((x: any) => new authActions.AuthSuccess('user'))
  );
}
