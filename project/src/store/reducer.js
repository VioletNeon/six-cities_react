import {ActionType} from './action';
import {SortTypes, AuthorizationStatus} from '../const';

const getCityOffers = (city, citiesOffers) => citiesOffers.filter((offer) => offer.city.name === city);

const sorting = {
  [SortTypes.PRICE_LOW_TO_HIGH]: (offers) => offers.sort((a, b) => a.price - b.price),
  [SortTypes.PRICE_HIGH_TO_LOW]: (offers) => offers.sort((a, b) => b.price - a.price),
  [SortTypes.TOP_RATED_FIRST]: (offers) => offers.sort((a, b) => b.rating - a.rating),
};

const sortOffers = function(sortType, offers) {
  return sorting[sortType](offers);
};

const getCities = (dataList) => {
  const cities = {};
  dataList.forEach(({city}) => cities[city.name] = city);
  return Object.values(cities);
};

const DEFAULT_CITY = {
  name: 'Paris',
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
};

const initialState = {
  city: DEFAULT_CITY.name,
  offers: [],
  cityOffers: [],
  sortType: SortTypes.POPULAR,
  activeCardId: 0,
  cities: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  latitude: DEFAULT_CITY.latitude,
  longitude: DEFAULT_CITY.longitude,
  zoom: DEFAULT_CITY.zoom,
  offer: [],
  nearbyOffers: [],
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.offers,
        isDataLoaded: true,
        cityOffers: getCityOffers(state.city, action.offers),
        cities: getCities(action.offers),
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.authorizationStatus,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.LOAD_HOTEL:
      return {
        ...state,
        offer: action.offer,
      };
    case ActionType.LOAD_NEARBY_HOTELS:
      return {
        ...state,
        nearbyOffers: action.nearbyOffers,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case ActionType.CLEAR_HOTEL_DATA:
      return {
        ...state,
        offer: initialState.offer,
        nearbyOffers: initialState.nearbyOffers,
        comments: initialState.comments,
      };
    default:
      return state;
  }
};

export {reducer};
