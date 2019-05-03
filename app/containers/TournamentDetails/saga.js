/* eslint-disable func-names */
import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_TOURNAMENT,
  SET_TOURNAMENT,
  DELETE_TOURNAMENT,
  UPDATE_SETTINGS,
  CREATE_GROUPS,
} from './constants';
import * as service from '../../api/tournamentsService';
import * as groupService from '../../api/groupService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* get(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.getById, action.id], function*(response) {
    yield put({
      type: SET_TOURNAMENT,
      tournament: response.data,
    });
  });
}

function* deleteTournament(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.deleteById, action.id], function*() {
    yield put({
      type: SET_INFO,
      message: 'Tournament deleted !!!',
    });
  });
}

function* createGroups(action) {
  // eslint-disable-next-line func-names
  yield callAction([groupService.create, action.groups], function*() {
    yield put({
      type: SET_INFO,
      message: 'Groups Created !!!',
    });
    yield put({
      type: GET_TOURNAMENT,
      id: action.groups.tournament,
    });
  });
}

function* updateSettings(action) {
  // eslint-disable-next-line func-names
  yield callAction(
    [service.updateSettings, action.id, action.settings],
    function*() {
      yield put({
        type: SET_INFO,
        message: 'Settings Updated',
      });
    },
  );
}

export default function*() {
  yield takeEvery(GET_TOURNAMENT, get);
  yield takeEvery(DELETE_TOURNAMENT, deleteTournament);
  yield takeEvery(CREATE_GROUPS, createGroups);
  yield takeEvery(UPDATE_SETTINGS, updateSettings);
}
