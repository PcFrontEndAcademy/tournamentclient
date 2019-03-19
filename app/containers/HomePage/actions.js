/*
 *
 * HomePage actions
 *
 */

import { LOGIN } from './constants';

export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}
