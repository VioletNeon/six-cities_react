import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import {adaptToClient, adaptCommentToClient} from '../utils';

const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadHotels(data.map((dataItem) => adaptToClient(dataItem))));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

const fetchHotel = (URL) => (dispatch, _getState, api) => (
  api.get(URL)
    .then(({data}) => {
      dispatch(ActionCreator.loadHotel(adaptToClient(data)));
    })
);

const fetchNearbyHotels = (URL) => (dispatch, _getState, api) => (
  api.get(URL)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearbyHotels(data.map((dataItem) => adaptToClient(dataItem))));
    })
);

const fetchComments = (URL) => (dispatch, _getState, api) => (
  api.get(URL)
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(data.map((dataItem) => adaptCommentToClient(dataItem))));
    })
);

const toComment = (URL, commentData) => (dispatch, _getState, api) => (
  api.post(URL, commentData)
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(data.map((dataItem) => adaptCommentToClient(dataItem))));
    })
);

export {fetchHotelsList, checkAuth, login, fetchHotel, fetchNearbyHotels, fetchComments, toComment};
