/*
 *
 * GroupsPage actions
 *
 */

import { GET_GROUPS, SET_GROUPS, CREATE_GROUP } from './constants';

export function getGroups(tournamentId) {
  return {
    type: GET_GROUPS,
    tournamentId,
  };
}

export function setGroups(groups) {
  return {
    type: SET_GROUPS,
    groups,
  };
}

export function createGroup(group) {
  return {
    type: CREATE_GROUP,
    group,
  };
}
