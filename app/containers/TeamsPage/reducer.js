/*
 *
 * TeamsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_PARTICIPANTS, SET_TEAMS } from './constants';

export const initialState = fromJS({
  participants: [],
  teams: [],
});

function teamsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return state.set('participants', action.participants);
    case SET_TEAMS:
      return state.set('teams', action.teams);
    default:
      return state;
  }
}

export default teamsPageReducer;
