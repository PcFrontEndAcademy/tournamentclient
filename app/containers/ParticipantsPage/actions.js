/*
 *
 * ParticipantsPage actions
 *
 */

import {
  GET_PARTICIPANTS,
  SET_PARTICIPANTS,
  CREATE_PARTICIPANT,
} from './constants';

export function getParticipants() {
  return {
    type: GET_PARTICIPANTS,
  };
}

export function setParticipants(participants) {
  return {
    type: SET_PARTICIPANTS,
    participants,
  };
}

export function createParticipant(participant) {
  return {
    type: CREATE_PARTICIPANT,
    participant,
  };
}
