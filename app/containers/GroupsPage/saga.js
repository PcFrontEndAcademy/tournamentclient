import { put, takeEvery } from 'redux-saga/effects';
import { GET_GROUPS, SET_GROUPS } from './constants';
import * as service from '../../api/groupService';
import { callAction } from '../App/saga';

function* get(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.get, action.tournamentId], function*(response) {
    yield put({
      type: SET_GROUPS,
      groups: response.data,
    });
  });
}

export default function*() {
  yield takeEvery(GET_GROUPS, get);
}
