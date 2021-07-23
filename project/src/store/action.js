const ActionType = {
  CHANGE_CITY_OFFERS: 'changeCityOffers',
  CHANGE_SORT_TYPE: 'changeSortType',
  CHANGE_ACTIVE_CARD_ID: 'changeActiveCardId',
  LOAD_HOTELS: 'loadHotels',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  LOAD_HOTEL: 'loadHotel',
  LOAD_NEARBY_HOTELS: 'loadNearbyHotels',
  LOAD_COMMENTS: 'loadComments',
  CLEAR_HOTEL_DATA: 'clearHotelData',
};

const ActionCreator = {
  changeCityOffers: ({latitude, longitude, zoom}, name) => ({
    type: ActionType.CHANGE_CITY_OFFERS,
    city: name,
    latitude: latitude,
    longitude: longitude,
    zoom,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    sortType,
  }),
  changeActiveCardId: (activeCardId) => ({
    type: ActionType.CHANGE_ACTIVE_CARD_ID,
    activeCardId,
  }),
  loadHotels: (offers) => ({
    type: ActionType.LOAD_HOTELS,
    offers,
  }),
  requireAuthorization: (authorizationStatus) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    authorizationStatus,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadHotel: (offer) => ({
    type: ActionType.LOAD_HOTEL,
    offer: [offer],
  }),
  loadNearbyHotels: (nearbyOffers) => ({
    type: ActionType.LOAD_NEARBY_HOTELS,
    nearbyOffers,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    comments,
  }),
  clearHotelData: () => ({
    type: ActionType.CLEAR_HOTEL_DATA,
  }),
};

export {ActionType, ActionCreator};
