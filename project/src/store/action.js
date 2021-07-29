const ActionType = {
  CHANGE_CITY_OFFERS: 'changeCityOffers',
  CHANGE_SORT_TYPE: 'changeSortType',
  CHANGE_ACTIVE_CARD_ID: 'changeActiveCardId',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  LOAD_HOTELS: 'loadHotels',
  LOAD_HOTEL: 'loadHotel',
  LOAD_NEARBY_HOTELS: 'loadNearbyHotels',
  LOAD_COMMENTS: 'loadComments',
  LOAD_AUTH_INFO: 'loadAuthInfo',
  LOAD_FAVORITE_HOTELS: 'loadFavoriteHotels',
  CLEAR_HOTEL_DATA: 'clearHotelData',
  CLEAR_AUTH_INFO: 'clearAuthInfo',
  CLEAR_FAVORITES_DATA: 'clearFavoritesData',
};

const changeCityOffers = ({latitude, longitude, zoom}, name) => ({
  type: ActionType.CHANGE_CITY_OFFERS,
  city: name,
  latitude: latitude,
  longitude: longitude,
  zoom,
});

const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  sortType,
});

const changeActiveCardId = (activeCardId) => ({
  type: ActionType.CHANGE_ACTIVE_CARD_ID,
  activeCardId,
});

const loadHotels = (offers) => ({
  type: ActionType.LOAD_HOTELS,
  offers,
});

const requireAuthorization = (authorizationStatus) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  authorizationStatus,
});

const signOut = () => ({
  type: ActionType.LOGOUT,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const loadHotel = (offer) => ({
  type: ActionType.LOAD_HOTEL,
  offer: [offer],
});

const loadNearbyHotels = (nearbyOffers) => ({
  type: ActionType.LOAD_NEARBY_HOTELS,
  nearbyOffers,
});

const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  comments,
});

const loadAuthInfo = (authInfo) => ({
  type: ActionType.LOAD_AUTH_INFO,
  authInfo: [authInfo],
});

const loadFavoriteHotels = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_HOTELS,
  favoriteOffers,
});

const clearHotelData = () => ({
  type: ActionType.CLEAR_HOTEL_DATA,
});

const clearFavoritesData = () => ({
  type: ActionType.CLEAR_FAVORITES_DATA,
});

export {
  ActionType,
  changeCityOffers,
  changeSortType,
  changeActiveCardId,
  loadHotels,
  requireAuthorization,
  signOut,
  redirectToRoute,
  loadHotel,
  loadNearbyHotels,
  loadComments,
  loadAuthInfo,
  loadFavoriteHotels,
  clearHotelData,
  clearFavoritesData
};
