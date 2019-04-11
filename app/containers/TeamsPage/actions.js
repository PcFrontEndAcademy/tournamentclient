/*
 *
 * TeamsPage actions
 *
 */

import {
  ADD_TEAM,
  GET_PARTICIPANTS,
  GET_TEAMS,
  SET_TEAMS,
  SET_PARTICIPANTS,
} from './constants';

export function addTeam(team) {
  return {
    type: ADD_TEAM,
    team,
  };
}

export function getTeams() {
  return {
    type: GET_TEAMS,
  };
}

export function setTeams(teams) {
  return {
    type: SET_TEAMS,
    teams,
  };
}

export function getParticipants() {
  return {
    type: GET_PARTICIPANTS,
  };
}

export function setParticipants(participants) {
  return {
    type: SET_PARTICIPANTS,
    participants,
  };
}
