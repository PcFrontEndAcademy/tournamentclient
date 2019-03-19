import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN } from './constants';
import * as service from '../../api/userService';
import { callAction } from '../App/saga';
import { SET_INFO } from '../InfoProvider/constants';

function* login(action) {
  // eslint-disable-next-line func-names
  yield callAction([service.login, action.email, action.password], function*(
    result,
  ) {
    if (result && result.data) {
      let message = 'Hello :)';
      if (result.data.message) {
        // eslint-disable-next-line prefer-destructuring
        message = result.data.message;
      }

      if (result.data.token) {
        localStorage.tournamentsToken = result.data.token;
      }

      yield put({
        type: SET_INFO,
        message,
      });
    }
  });
}

export default function*() {
  yield takeEvery(LOGIN, login);
}
