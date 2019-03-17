import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.PARTICIPANT.BASE);
}

export function getUnused(tournamentid) {
  return api.GET(ENDPOINTS.PARTICIPANT.GET_UNUSED, { tournamentid });
}

export function create(participant) {
  return api.POST(ENDPOINTS.PARTICIPANT.BASE, participant);
}

export function remove(id) {
  return api.DELETE(ENDPOINTS.PARTICIPANT.BASE, { id });
}

export function update(participant) {
  return api.PUT(ENDPOINTS.PARTICIPANT.BASE, participant);
}
