import { fromJS } from 'immutable';
import types from './constants';

const initialState = fromJS({
  isLoading: true,
  error: null,
  data: [],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH:
      return state.set('isLoading', true);
    case types.FETCH_SUCCESS:
      return state.set('data', action.payload.data).set('isLoading', false);
    case types.CREATE:
      return state.set('isLoading', true);
    case types.CREATE_SUCCESS:
      return state.set('data', action.payload).set('isLoading', false);
    case types.CREATE_FAILED:
      return state.set('isLoading', false);
    case types.FETCH_FAILED:
      return state.set('isLoading', false);
    case types.REMOVE:
      return state.set('isLoading', true);
    case types.REMOVE_SUCCESS:
      return state.set('data', action.payload).set('isLoading', false);
    case types.REMOVE_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
