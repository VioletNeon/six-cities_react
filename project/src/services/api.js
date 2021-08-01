import axios from 'axios';
import browserHistory from '../browser-history';
import {AppRoute} from '../const';

const BASE_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

const token = localStorage.getItem('token') ?? '';

const createAPI = (onBadRequested) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const setToken = (config) => {
    config.headers['x-token'] = localStorage.getItem('token') ?? '';
    return config;
  };

  const onFail = (err) => {
    if (err.response.status === HttpCode.BAD_REQUEST) {
      onBadRequested();
    } else if (err.status === HttpCode.NOT_FOUND) {
      browserHistory.push(AppRoute.NOT_FOUND);
    }
    throw err;
  };

  api.interceptors.request.use(setToken);
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
