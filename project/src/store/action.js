const ActionType = {
  CHANGE_CITY_OFFERS: 'hotels/changeCityOffers',
  CHANGE_SORT_TYPE: 'hotels/changeSortType',
  CHANGE_ACTIVE_CARD_ID: 'hotels/changeActiveCardId',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  LOAD_HOTELS: 'hotels/loadHotels',
  LOAD_HOTEL: 'hotels/loadHotel',
  LOAD_NEARBY_HOTELS: 'nearby/loadNearbyHotels',
  LOAD_COMMENTS: 'comments/loadComments',
  LOAD_AUTH_INFO: 'user/loadAuthInfo',
  LOAD_FAVORITE_HOTELS: 'favorite/loadFavoriteHotels',
  CLEAR_HOTEL_DATA: 'hotels/clearHotelData',
  CLEAR_AUTH_INFO: 'user/clearAuthInfo',
  CLEAR_FAVORITES_DATA: 'favorite/clearFavoritesData',
  UPDATE_HOTELS: 'hotels/updateHotels',
  UPDATE_HOTEL: 'hotels/updateHotel',
  UPDATE_FAVORITES_LIST: 'favorite/updateFavoritesList',
  UPDATE_NEARBY_HOTEL: 'nearby/updateNearbyHotel',
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

const updateOffers = (updatedOffer) => ({
  type: ActionType.UPDATE_HOTELS,
  updatedOffer,
});

const updateOffer = (updatedOffer) => ({
  type: ActionType.UPDATE_HOTEL,
  offer: [updatedOffer],
});

const updateNearbyOffer = (updatedOffer) => ({
  type: ActionType.UPDATE_NEARBY_HOTEL,
  updatedOffer,
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
  clearFavoritesData,
  updateOffers,
  updateOffer,
  updateNearbyOffer
};
