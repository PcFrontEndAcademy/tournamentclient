import { put, call } from 'redux-saga/effects';
import { SET_INFO } from '../InfoProvider/constants';
// import { SHOW_LOADING, HIDE_LOADING } from '../App/constants';

function* handleResponse(response, handleResult) {
  if (response) {
    if (response.type === SET_INFO) {
      yield put(response);
    } else if (response.data) {
      yield handleResult(response);
    } else {
      yield put({
        type: SET_INFO,
        message: 'Something went wrong',
      });
    }
  }
}

export function* callAction(props, cb) {
  try {
    const response = yield call(...props);
    yield handleResponse(response, cb);
  } catch (ex) {
    if (ex.response.status === 401) {
      yield put({
        type: SET_INFO,
        message: 'Failed to login: Please try different credentials',
      });
    } else {
      yield put({
        type: SET_INFO,
        message: ex.message,
      });
    }
  }
}

// export function* callActionWithLoading(props, cb) {
//   yield put({ type: SHOW_LOADING });
//   const response = yield call(...props);
//   try {
//     yield handleResponse(response, cb);
//   } finally {
//     yield put({ type: HIDE_LOADING });
//   }
// }
