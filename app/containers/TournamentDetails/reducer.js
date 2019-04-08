/*
 *
 * TournamentDetails reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_TOURNAMENT } from './constants';

export const initialState = fromJS({
  tournament: null,
});

function tournamentDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOURNAMENT:
      return state.set('tournament', action.tournament);
    default:
      return state;
  }
}

export default tournamentDetailsReducer;
