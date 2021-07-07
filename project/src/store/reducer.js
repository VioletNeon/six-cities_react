import offers from '../mocks/offers';
import {ActionType} from './action';

const getCityOffers = function (city, citiesOffers) {
  return citiesOffers.filter((offer) => offer.city.name === city);
};

const initialState = {
  city: 'Paris',
  cityOffers: getCityOffers('Paris', offers),
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_OFFERS:
      return {
        ...state,
        city: action.city,
        cityOffers: getCityOffers(action.city, state.offers),
      };
    default:
      return state;
  }
};


export {reducer};
