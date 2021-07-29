import {getCityOffers, sorting} from '../../utils';
import {SortTypes} from '../../const';
import {ActionType} from '../action';

const DEFAULT_CITY = {
  name: 'Paris',
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 13,
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

const sortOffers = function(sortType, offersList) {
  return sorting[sortType](offersList);
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
        cityOffers: action.sortType === SortTypes.POPULAR ? getCityOffers(state.city, state.offers) : sortOffers(action.sortType, state.cityOffers),
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
    default:
      return state;
  }
};

export {offers};
