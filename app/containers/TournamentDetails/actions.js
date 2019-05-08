/*
 *
 * TournamentDetails actions
 *
 */

import {
  GET_TOURNAMENT,
  SET_TOURNAMENT,
  DELETE_TOURNAMENT,
  UPDATE_SETTINGS,
  CREATE_GROUPS,
  CLEAR_STATE,
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

export function updateSettings(id, settings) {
  return {
    type: UPDATE_SETTINGS,
    id,
    settings,
  };
}

export function createGroups(groups) {
  return {
    type: CREATE_GROUPS,
    groups,
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}
