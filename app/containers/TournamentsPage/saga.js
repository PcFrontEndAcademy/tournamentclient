import { put, takeEvery } from 'redux-saga/effects';
import { GET_TOURNAMENTS, SET_TOURNAMENTS } from './constants';
import * as service from '../../api/tournamentsService';
import { callAction } from '../App/saga';

function* get() {
  // eslint-disable-next-line func-names
  yield callAction([service.get], function*(response) {
    yield put({
      type: SET_TOURNAMENTS,
      tournaments: response.data,
    });
  });
}

export default function*() {
  yield takeEvery(GET_TOURNAMENTS, get);
}
