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

export {AppRoute, cities};
