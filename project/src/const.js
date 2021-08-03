const AppRoute = {
  LOGIN: '/login',
  ROOM: '/hotels/:id',
  FAVORITES: '/favorites',
  MAIN: '/',
  BAD_REQUEST: '/not-found',
};

const Cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const cities = Object.values(Cities);

const SortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/',
  FAVORITE: '/favorite',
};

export {AppRoute, cities, Cities, SortTypes, AuthorizationStatus, APIRoute};
