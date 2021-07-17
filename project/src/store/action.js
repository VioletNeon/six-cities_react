const ActionType = {
  CHANGE_CITY_OFFERS: 'changeCityOffers',
  CHANGE_SORT_TYPE: 'changeSortType',
  CHANGE_ACTIVE_CARD_ID: 'changeActiveCardId',
  LOAD_HOTELS: 'loadHotels',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
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
};

export {ActionType, ActionCreator};
