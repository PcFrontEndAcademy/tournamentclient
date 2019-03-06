import { fromJS } from 'immutable';
import { SET_INFO, CLEAR_INFO } from './constants';

const initialState = fromJS({
  message: null,
});

function infoProviderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INFO:
      return state.set('message', action.message);
    case CLEAR_INFO:
      return state.set('message', null);
    default:
      return state;
  }
}

export default infoProviderReducer;
