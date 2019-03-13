/*
 *
 * ParticipantsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_PARTICIPANTS } from './constants';

export const initialState = fromJS({
  participants: [],
});

function participantsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return state.set('participants', action.participants);
    default:
      return state;
  }
}

export default participantsPageReducer;
