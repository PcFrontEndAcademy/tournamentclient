/*
 *
 * TournamentDetails actions
 *
 */

import {
  GET_TOURNAMENT,
  SET_TOURNAMENT,
  DELETE_TOURNAMENT,
  CREATE_GROUPS,
} from './constants';

export function get(id) {
  return {
    type: GET_TOURNAMENT,
    id,
  };
}

export function set(tournament) {
  return {
    type: SET_TOURNAMENT,
    tournament,
  };
}

export function deleteTournament(id) {
  return {
    type: DELETE_TOURNAMENT,
    id,
  };
}

export function createGroups(groups) {
  return {
    type: CREATE_GROUPS,
    groups,
  };
}
