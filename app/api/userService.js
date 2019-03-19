import * as api from './server';
import ENDPOINTS from './endpoint';

export function login(email, password) {
  return api.POST(ENDPOINTS.USER.LOGIN, { email, password });
}
