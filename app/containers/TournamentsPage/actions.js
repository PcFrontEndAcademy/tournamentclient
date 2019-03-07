/*
 *
 * TournamentsPage actions
 *
 */

import { GET_TOURNAMENTS, SET_TOURNAMENTS } from './constants';

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
