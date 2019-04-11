import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_PARTICIPANTS,
  SET_PARTICIPANTS,
  GET_TEAMS,
  SET_TEAMS,
  ADD_TEAM,
} from './constants';
import * as service from '../../api/teamService';
import * as participantService from '../../api/participantService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* getParticipants() {
  // eslint-disable-next-line func-names
  yield callAction([participantService.get], function*(response) {
    yield put({
      type: SET_PARTICIPANTS,
      participants: response.data,
    });
  });
}

function* getTeams() {
  // eslint-disable-next-line func-names
  yield callAction([service.get], function*(response) {
    yield put({
      type: SET_TEAMS,
      teams: response.data,
    });
  });
}

function* addTeam(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.create, action.team], function*() {
    yield put({
      type: GET_TEAMS,
    });
    yield put({
      type: SET_INFO,
      message: 'Team created !!!',
    });
  });
}

export default function*() {
  yield takeEvery(GET_PARTICIPANTS, getParticipants);
  yield takeEvery(GET_TEAMS, getTeams);
  yield takeEvery(ADD_TEAM, addTeam);
}
