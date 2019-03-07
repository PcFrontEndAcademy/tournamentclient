/*
 *
 * GroupsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_GROUPS } from './constants';

export const initialState = fromJS({
  groups: [],
});

function groupsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return state.set('groups', action.groups);
    default:
      return state;
  }
}

export default groupsPageReducer;
