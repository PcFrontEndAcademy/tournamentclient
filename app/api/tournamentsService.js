import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.TOURNAMENT.BASE);
}

export function getById(id) {
  return api.GET(ENDPOINTS.TOURNAMENT.GET_ONE(id));
}

export function create(tournament) {
  return api.POST(ENDPOINTS.TOURNAMENT.BASE, tournament);
}

export function remove(id) {
  return api.DELETE(ENDPOINTS.TOURNAMENT.BASE, { id });
}

export function update(tournament) {
  return api.PUT(ENDPOINTS.TOURNAMENT.BASE, tournament);
}

export function deleteById(id) {
  return api.DELETE(ENDPOINTS.TOURNAMENT.BASE, { id });
}
