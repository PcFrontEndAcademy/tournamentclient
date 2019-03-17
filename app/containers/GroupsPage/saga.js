import { put, takeEvery } from 'redux-saga/effects';
import { GET_GROUPS, SET_GROUPS, CREATE_GROUP } from './constants';
import * as service from '../../api/groupService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* get(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.get, action.tournamentId], function*(response) {
    yield put({
      type: SET_GROUPS,
      groups: response.data,
    });
  });
}

function* create(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.create, action.group], function*() {
    yield put({
      type: SET_INFO,
      message: 'Group created !!!',
    });
    yield put({
      type: GET_GROUPS,
    });
  });
}

export default function*() {
  yield takeEvery(GET_GROUPS, get);
  yield takeEvery(CREATE_GROUP, create);
}
