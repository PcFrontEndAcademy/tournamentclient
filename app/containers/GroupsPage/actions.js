/*
 *
 * GroupsPage actions
 *
 */

import { GET_GROUPS, SET_GROUPS } from './constants';

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
