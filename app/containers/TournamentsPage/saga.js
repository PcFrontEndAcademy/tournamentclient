import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_TOURNAMENTS,
  SET_TOURNAMENTS,
  CREATE_TOURNAMENT,
} from './constants';
import * as service from '../../api/tournamentsService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* get() {
  // eslint-disable-next-line func-names
  yield callAction([service.get], function*(response) {
    yield put({
      type: SET_TOURNAMENTS,
      tournaments: response.data,
    });
  });
}

function* create(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.create, action.tournament], function*() {
    yield put({
      type: SET_INFO,
      message: 'Tournament created !!!',
    });
    yield put({
      type: GET_TOURNAMENTS,
    });
  });
}

export default function*() {
  yield takeEvery(GET_TOURNAMENTS, get);
  yield takeEvery(CREATE_TOURNAMENT, create);
}
