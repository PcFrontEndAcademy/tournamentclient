import * as api from './server';
import ENDPOINTS from './endpoint';

export function get() {
  return api.GET(ENDPOINTS.GROUP.BASE);
}

export function create(group) {
  return api.POST(ENDPOINTS.GROUP.BASE, group);
}

export function remove(id) {
  return api.DELETE(ENDPOINTS.GROUP.BASE, { id });
}

export function update(group) {
  return api.PUT(ENDPOINTS.GROUP.BASE, group);
}
