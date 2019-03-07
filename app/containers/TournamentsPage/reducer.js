/*
 *
 * TournamentsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_TOURNAMENTS } from './constants';

export const initialState = fromJS({
  tournaments: [],
});

function tournamentsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOURNAMENTS:
      return state.set('tournaments', action.tournaments);
    default:
      return state;
  }
}

export default tournamentsPageReducer;
