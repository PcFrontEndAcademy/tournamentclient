import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.TOURNAMENT);
}

export function create(tournament) {
  return api.POST(ENDPOINTS.TOURNAMENT, tournament);
}

export function remove(id) {
  return api.DELETE(ENDPOINTS.TOURNAMENT, { id });
}

export function update(tournament) {
  return api.PUT(ENDPOINTS.TOURNAMENT, tournament);
}
