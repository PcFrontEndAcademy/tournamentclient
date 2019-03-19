/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN } from './constants';

export const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
