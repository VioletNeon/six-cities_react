const ActionType = {
  CHANGE_CITY_OFFERS: 'changeCityOffers',
  CHANGE_SORT_TYPE: 'changeSortType',
  CHANGE_ACTIVE_CARD_ID: 'changeActiveCardId',
};

const ActionCreator = {
  changeCityOffers: (city) => ({
    type: ActionType.CHANGE_CITY_OFFERS,
    city,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    sortType,
  }),
  changeActiveCardId: (activeCardId) => ({
    type: ActionType.CHANGE_ACTIVE_CARD_ID,
    activeCardId,
  }),
};

export {ActionType, ActionCreator};
