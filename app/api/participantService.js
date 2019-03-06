import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.PARTICIPANT);
}

export function create(participant) {
  return api.POST(ENDPOINTS.PARTICIPANT, participant);
}

export function remove(id) {
  return api.DELETE(ENDPOINTS.PARTICIPANT, { id });
}

export function update(participant) {
  return api.PUT(ENDPOINTS.PARTICIPANT, participant);
}
