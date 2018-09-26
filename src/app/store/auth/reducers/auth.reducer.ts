import * as fromAuth from '../actions/auth.actions';

export interface State {
  authenticating: boolean;
  authenticated: boolean;
}

export const initialState: State = {
  authenticating: false,
  authenticated: false
};

export function reducer(
  state = initialState,
  action: fromAuth.TestAction
): State {
  switch (action.type) {
    case fromAuth.AUTH_AUTHENTICATE: {
      return {
        ...state,
        authenticating: true,
        authenticated: false
      };
    }

    case fromAuth.AUTH_SUCCESS: {
      return {
        ...state,
        authenticating: false,
        authenticated: true
      };
    }
    default:
      return state;
  }
}

export const getAuthenticating = (state: State) => state.authenticating;
export const getAuthenticated = (state: State) => state.authenticated;
