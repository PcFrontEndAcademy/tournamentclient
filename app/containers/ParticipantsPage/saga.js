import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_PARTICIPANTS,
  SET_PARTICIPANTS,
  CREATE_PARTICIPANT,
} from './constants';
import * as service from '../../api/participantService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* get() {
  // eslint-disable-next-line func-names
  yield callAction([service.get], function*(response) {
    yield put({
      type: SET_PARTICIPANTS,
      participants: response.data,
    });
  });
}

function* create(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.create, action.participant], function*() {
    yield put({
      type: SET_INFO,
      message: 'Participant created !!!',
    });
    yield put({
      type: GET_PARTICIPANTS,
    });
  });
}

export default function*() {
  yield takeEvery(GET_PARTICIPANTS, get);
  yield takeEvery(CREATE_PARTICIPANT, create);
}
