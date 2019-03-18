import * as api from './server';
import ENDPOINTS from './endpoint';

export function get(tournamentid) {
  return api.GET(ENDPOINTS.GROUP.BASE, { tournamentid });
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

export function addParticipant(groupId, participantId) {
  return api.POST(ENDPOINTS.GROUP.ADD_PARTICIPANT, {
    id: groupId,
    participant: participantId,
  });
}

export function start(tournamentid) {
  return api.POST(ENDPOINTS.GROUP.START, {
    tournamentid,
  });
}
