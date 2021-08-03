import {offers, DEFAULT_CITY} from './offers';
import {SortTypes} from '../../const';
import {changeCityOffers, changeSortType, loadHotels, updateOffers} from '../action';

const initialExpectedState = {
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

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {

    expect(offers(undefined, {})).toEqual(initialExpectedState);
  });

  it('should upload hotels offers by given data', () => {

    const expectedState = {
      ...initialExpectedState,
      offers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
      isDataLoaded: true,
      cityOffers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
      cities: [{name: DEFAULT_CITY.name}],
    };

    const hotels = [{
      city: {
        name: DEFAULT_CITY.name,
      },
    }];

    expect(offers(initialExpectedState, loadHotels(hotels))).toEqual(expectedState);
  });

  it('should change order of hotels offers list by a given sort type', () => {
    const expectedState = {
      ...initialExpectedState,
      offers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
      cityOffers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
    };

    const trialState = {
      ...initialExpectedState,
      offers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
      cityOffers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
    };

    expect(offers(trialState, changeSortType(SortTypes.POPULAR))).toEqual(expectedState);

    expect(offers(initialExpectedState, changeSortType(SortTypes.PRICE_HIGH_TO_LOW)))
      .toEqual({
        ...initialExpectedState,
        sortType: SortTypes.PRICE_HIGH_TO_LOW,
      });

    expect(offers(initialExpectedState, changeSortType(SortTypes.PRICE_LOW_TO_HIGH)))
      .toEqual({
        ...initialExpectedState,
        sortType: SortTypes.PRICE_LOW_TO_HIGH,
      });

    expect(offers(initialExpectedState, changeSortType(SortTypes.TOP_RATED_FIRST)))
      .toEqual({
        ...initialExpectedState,
        sortType: SortTypes.TOP_RATED_FIRST,
      });
  });

  it('should change hotels offers list by a given city filter state', () => {
    const expectedState = {
      ...initialExpectedState,
      offers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
      cityOffers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
    };

    const trialState = {
      ...initialExpectedState,
      offers: [{
        city: {
          name: DEFAULT_CITY.name,
        },
      }],
    };

    const city = DEFAULT_CITY.name;

    const location = {
      latitude: DEFAULT_CITY.latitude,
      longitude: DEFAULT_CITY.longitude,
      zoom: DEFAULT_CITY.zoom,
    };

    expect(offers(trialState, changeCityOffers(location, city))).toEqual(expectedState);
  });

  it('should upload hotel offer by a given data', () => {
    const expectedState = {
      ...initialExpectedState,
      offers: [
        {city: {name: DEFAULT_CITY.name}, id: 1},
        {city: {name: DEFAULT_CITY.name}, id: 2},
        {city: {name: 'cityTwo'}, id: 3}],
      cityOffers: [
        {city: {name: DEFAULT_CITY.name}, id: 1},
        {city: {name: DEFAULT_CITY.name}, id: 2},
      ],
    };

    const trialState = {
      ...initialExpectedState,
      offers: [
        {city: {name: DEFAULT_CITY.name}, id: 1},
        {city: {name: 'cityOne'}, id: 2},
        {city: {name: 'cityTwo'}, id: 3},
      ],
    };

    const updatedOffer = {city: {name: DEFAULT_CITY.name}, id: 2};

    expect(offers(trialState, updateOffers(updatedOffer))).toEqual(expectedState);
  });
});
