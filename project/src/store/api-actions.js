import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import {adaptToClient, adaptCommentToClient, adaptAuthInfoToClient} from '../utils';
import {
  loadHotels,
  requireAuthorization,
  signOut, redirectToRoute,
  loadHotel,
  loadNearbyHotels,
  loadComments,
  loadAuthInfo,
  loadFavoriteHotels,
  updateOffers,
  updateOffer,
  updateNearbyOffer
} from './action';

const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(loadHotels(data.map((dataItem) => adaptToClient(dataItem))));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadAuthInfo(adaptAuthInfoToClient(data)));
    })
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(loadAuthInfo(adaptAuthInfoToClient(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signOut()))
);

const fetchHotel = (URL) => (dispatch, _getState, api) => (
  api.get(URL)
    .then(({data}) => {
      dispatch(loadHotel(adaptToClient(data)));
    })
);

const fetchNearbyHotels = (URL) => (dispatch, _getState, api) => (
  api.get(URL)
    .then(({data}) => {
      dispatch(loadNearbyHotels(data.map((dataItem) => adaptToClient(dataItem))));
    })
);

const fetchComments = (URL) => (dispatch, _getState, api) => (
  api.get(URL)
    .then(({data}) => {
      dispatch(loadComments(data.map((dataItem) => adaptCommentToClient(dataItem))));
    })
);

const toComment = (URL, commentData) => (dispatch, _getState, api) => (
  api.post(URL, commentData)
    .then(({data}) => {
      dispatch(loadComments(data.map((dataItem) => adaptCommentToClient(dataItem))));
    })
);

const fetchFavoriteHotels = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteHotels(data.map((dataItem) => adaptToClient(dataItem)))))
);

const markFavoriteInList = (URL) => (dispatch, _getState, api) => api.post(URL)
  .then(({data}) => {
    dispatch(updateOffers(adaptToClient(data)));
    dispatch(updateNearbyOffer(adaptToClient(data)));
  });

const markFavoriteInCard = (URL) => (dispatch, _getState, api) => api.post(URL)
  .then(({data}) => {
    dispatch(updateOffer(adaptToClient(data)));
  });

export {
  fetchHotelsList,
  checkAuth,
  login,
  logout,
  fetchHotel,
  fetchNearbyHotels,
  fetchComments,
  fetchFavoriteHotels,
  toComment,
  markFavoriteInList,
  markFavoriteInCard
};
