/*
 *
 * GroupsPage actions
 *
 */

import {
  GET_GROUPS,
  SET_GROUPS,
  CREATE_GROUP,
  GET_UNUSED_PARTICIPANTS,
  SET_UNUSED_PARTICIPANTS,
  ADD_PARTICIPANT_TO_GROUP,
  START_GROUP_STAGE,
  ADD_RESULT,
} from './constants';

export function getGroups(tournamentId) {
  return {
    type: GET_GROUPS,
    tournamentId,
  };
}

export function setGroups(groups) {
  return {
    type: SET_GROUPS,
    groups,
  };
}

export function createGroup(group) {
  return {
    type: CREATE_GROUP,
    group,
  };
}

export function getUnusedParticipants(tournamentId) {
  return {
    type: GET_UNUSED_PARTICIPANTS,
    tournamentId,
  };
}

export function setUnusedParticipants(participants) {
  return {
    type: SET_UNUSED_PARTICIPANTS,
    participants,
  };
}

export function addParticipantToGroup(groupdId, participantId, tournamentId) {
  return {
    type: ADD_PARTICIPANT_TO_GROUP,
    groupdId,
    participantId,
    tournamentId,
  };
}

export function startGroupStage(tournamentId) {
  return {
    type: START_GROUP_STAGE,
    tournamentId,
  };
}

export function addResult(
  tournamentId,
  groupdId,
  resultId,
  homeScore,
  awayScore,
) {
  return {
    type: ADD_RESULT,
    tournamentId,
    groupdId,
    resultId,
    homeScore,
    awayScore,
  };
}
