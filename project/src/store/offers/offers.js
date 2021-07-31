import {getCityOffers} from '../../utils';
import {SortTypes} from '../../const';
import {ActionType} from '../action';

const DEFAULT_CITY = {
  name: 'Paris',
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

const offerSortings = {
  [SortTypes.PRICE_LOW_TO_HIGH]: (offerHotels) => offerHotels.sort((a, b) => a.price - b.price),
  [SortTypes.PRICE_HIGH_TO_LOW]: (offerHotels) => offerHotels.sort((a, b) => b.price - a.price),
  [SortTypes.TOP_RATED_FIRST]: (offerHotels) => offerHotels.sort((a, b) => b.rating - a.rating),
};

const updatedOffers = (stateOffers, updatedOffer) => {
  const updatedOfferIndex = stateOffers.findIndex((offer) => offer.id === updatedOffer.id);
  return [...stateOffers.slice(0, updatedOfferIndex), updatedOffer, ...stateOffers.slice(updatedOfferIndex + 1)];
};

const initialState = {
  isDataLoaded: false,
  offers: [],
  cities: [],
  city: DEFAULT_CITY.name,
  cityOffers: [],
  sortType: SortTypes.POPULAR,
  latitude: DEFAULT_CITY.latitude,
  longitude: DEFAULT_CITY.longitude,
  zoom: DEFAULT_CITY.zoom,
};

const getCities = (dataList) => {
  const cities = {};
  dataList.forEach(({city}) => cities[city.name] = city);
  return Object.values(cities);
};

const offers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.offers,
        isDataLoaded: true,
        cityOffers: getCityOffers(state.city, action.offers),
        cities: getCities(action.offers),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.sortType,
        cityOffers: action.sortType === SortTypes.POPULAR ? getCityOffers(state.city, state.offers) : offerSortings[action.sortType](state.cityOffers),
      };
    case ActionType.CHANGE_CITY_OFFERS:
      return {
        ...state,
        city: action.city,
        sortType: initialState.sortType,
        cityOffers: getCityOffers(action.city, state.offers),
        latitude: action.latitude,
        longitude: action.longitude,
        zoom: action.zoom,
      };
    case ActionType.UPDATE_HOTELS:
      return {
        ...state,
        offers: updatedOffers(state.offers, action.updatedOffer),
        cityOffers: getCityOffers(state.city, updatedOffers(state.offers, action.updatedOffer)),
      };
    default:
      return state;
  }
};

export {offers};
