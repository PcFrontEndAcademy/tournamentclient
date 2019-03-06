import { SET_INFO, CLEAR_INFO } from './constants';

export function setInfo(message) {
  return {
    type: SET_INFO,
    message,
  };
}

export function clearInfo() {
  return { type: CLEAR_INFO };
}
