import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.GROUP);
}

export function create(group) {
  return api.POST(ENDPOINTS.GROUP, group);
}

export function remove(id) {
  return api.DELETE(ENDPOINTS.GROUP, { id });
}

export function update(group) {
  return api.PUT(ENDPOINTS.GROUP, group);
}
