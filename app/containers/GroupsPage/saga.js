/* eslint-disable func-names */
import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_GROUPS,
  SET_GROUPS,
  CREATE_GROUP,
  GET_UNUSED_PARTICIPANTS,
  SET_UNUSED_PARTICIPANTS,
  ADD_PARTICIPANT_TO_GROUP,
  START_GROUP_STAGE,
} from './constants';
import * as service from '../../api/groupService';
import * as participantService from '../../api/participantService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* get(action) {
  yield callAction([service.get, action.tournamentId], function*(response) {
    yield put({
      type: SET_GROUPS,
      groups: response.data,
    });
  });
}

function* create(action) {
  yield callAction([service.create, action.group], function*() {
    yield put({
      type: SET_INFO,
      message: 'Group created !!!',
    });
    yield put({
      type: GET_GROUPS,
      tournamentId: action.group.tournament,
    });
  });
}

function* getUnusedParticipants(action) {
  yield callAction(
    [participantService.getUnused, action.tournamentId],
    function*(response) {
      yield put({
        type: SET_UNUSED_PARTICIPANTS,
        participants: response.data,
      });
    },
  );
}

function* addParticipant(action) {
  yield callAction(
    [service.addParticipant, action.groupdId, action.participantId],
    function*() {
      yield put({
        type: SET_INFO,
        message: 'Participant added to a group !!!',
      });
      yield put({
        type: GET_GROUPS,
        tournamentId: action.tournamentId,
      });
      yield put({
        type: GET_UNUSED_PARTICIPANTS,
        tournamentId: action.tournamentId,
      });
    },
  );
}

function* start(action) {
  yield callAction([service.start, action.tournamentId], function*() {
    yield put({
      type: SET_INFO,
      message: 'Group stage started!!!',
    });
    yield put({
      type: GET_GROUPS,
      tournamentId: action.tournamentId,
    });
  });
}

export default function*() {
  yield takeEvery(GET_GROUPS, get);
  yield takeEvery(CREATE_GROUP, create);
  yield takeEvery(GET_UNUSED_PARTICIPANTS, getUnusedParticipants);
  yield takeEvery(ADD_PARTICIPANT_TO_GROUP, addParticipant);
  yield takeEvery(START_GROUP_STAGE, start);
}
