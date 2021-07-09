const AppRoute = {
  SIGN_IN: '/login',
  ROOM: '/offer/:id',
  FAVORITES: '/favorites',
  MAIN: '/',
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

export {AppRoute, cities, Cities, SortTypes};
