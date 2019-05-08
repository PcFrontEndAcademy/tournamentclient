/*
 *
 * TournamentDetails reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_TOURNAMENT, CLEAR_STATE } from './constants';

export const initialState = fromJS({
  tournament: null,
});

function tournamentDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOURNAMENT:
      return state.set('tournament', action.tournament);
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default tournamentDetailsReducer;
