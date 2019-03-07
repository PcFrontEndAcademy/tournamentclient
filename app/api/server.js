import axios from 'axios';
import CONFIG from './config';
import { SET_INFO } from '../containers/InfoProvider/constants';

// axios.defaults.withCredentials = true;

export function GET(path, params = null, headers = null) {
  return axios.get(`${CONFIG.API_URL}${path}`, { params, headers });
}

export function POST(path, data, headers) {
  return axios
    .post(`${CONFIG.API_URL}${path}`, data, headers)
    .catch(handleError);
}

export function PUT(path, data, headers) {
  return axios
    .put(`${CONFIG.API_URL}${path}`, data, headers)
    .catch(handleError);
}

export function DELETE(path, params = null, headers = null) {
  return axios
    .delete(`${CONFIG.API_URL}${path}`, { params, headers })
    .catch(handleError);
}

function handleError(error) {
  const { message } = error;

  return {
    type: SET_INFO,
    message,
  };
}
