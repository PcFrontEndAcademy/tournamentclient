import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.TEAM.BASE);
}

export function create(team) {
  return api.POST(ENDPOINTS.TEAM.BASE, team);
}
