import offers from '../mocks/offers';
import {ActionType} from './action';
import {Cities, SortTypes, cities} from '../const';

const getCityOffers = (city, citiesOffers) => citiesOffers.filter((offer) => offer.city.name === city);

const sorting = {
  [SortTypes.PRICE_LOW_TO_HIGH]: (citiesOffers) => citiesOffers.sort((itemA, itemB) => itemA.price - itemB.price),
  [SortTypes.PRICE_HIGH_TO_LOW]: (citiesOffers) => citiesOffers.sort((itemA, itemB) => itemB.price - itemA.price),
  [SortTypes.TOP_RATED_FIRST]: (citiesOffers) => citiesOffers.sort((itemA, itemB) => itemB.rating - itemA.rating),
};

const sortOffers = function(sortType, citiesOffers) {
  return sorting[sortType](citiesOffers);
};

const initialState = {
  city: Cities.PARIS,
  cityOffers: getCityOffers(Cities.PARIS, offers),
  offers,
  sortType: SortTypes.POPULAR,
  activeCardId: 0,
  cities,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_OFFERS:
      return {
        ...state,
        city: action.city,
        sortType: initialState.sortType,
        cityOffers: getCityOffers(action.city, state.offers),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.sortType,
        cityOffers: action.sortType === SortTypes.POPULAR ? getCityOffers(state.city, state.offers) : sortOffers(action.sortType, state.cityOffers),
      };
    case ActionType.CHANGE_ACTIVE_CARD_ID:
      return {
        ...state,
        activeCardId: action.activeCardId,
      };
    default:
      return state;
  }
};

export {reducer};
