import { put, takeEvery } from 'redux-saga/effects';
import { GET_TOURNAMENT, SET_TOURNAMENT, DELETE_TOURNAMENT } from './constants';
import * as service from '../../api/tournamentsService';
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

export default function*() {
  yield takeEvery(GET_TOURNAMENT, get);
  yield takeEvery(DELETE_TOURNAMENT, deleteTournament);
}
