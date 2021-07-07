const ActionType = {
  CHANGE_CITY_OFFERS: 'changeCityOffers',
};

const ActionCreator = {
  changeCityOffers: (city) => ({
    type: ActionType.CHANGE_CITY_OFFERS,
    city,
  }),
};

export {ActionType, ActionCreator};
