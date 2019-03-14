/*
 *
 * TournamentsPage actions
 *
 */

import {
  GET_TOURNAMENTS,
  SET_TOURNAMENTS,
  CREATE_TOURNAMENT,
} from './constants';

export function getTournaments() {
  return {
    type: GET_TOURNAMENTS,
  };
}

export function setTournaments(tournaments) {
  return {
    type: SET_TOURNAMENTS,
    tournaments,
  };
}

export function createTournament(tournament) {
  return {
    type: CREATE_TOURNAMENT,
    tournament,
  };
}
