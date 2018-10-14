import * as fromTest from '../actions/test.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  data: any[];
}

export const initialState: State = {
  loading: false,
  loaded: false,
  data: [4, 5, 6]
};

export function reducer(
  state = initialState,
  action: fromTest.TestAction
): State {
  switch (action.type) {
    case fromTest.DATA_LOAD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromTest.DATA_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }
    default:
      return state;
  }
}

export const isLoading = (state: State) => state.loading;
export const getData = (state: State) => state.data;
