/*
 *
 * GroupsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_GROUPS, SET_UNUSED_PARTICIPANTS } from './constants';

export const initialState = fromJS({
  groups: [],
  unusedParticipants: [],
});

function groupsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return state.set('groups', action.groups);
    case SET_UNUSED_PARTICIPANTS:
      return state.set('unusedParticipants', action.participants);
    default:
      return state;
  }
}

export default groupsPageReducer;
