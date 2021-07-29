import {NameSpace} from '../root-reducer';

const getDataLoadedState = (state) => state[NameSpace.OFFERS].isDataLoaded;
const getOffers = (state) => state[NameSpace.OFFERS].offers;
const getCities = (state) => state[NameSpace.OFFERS].cities;
const getCity = (state) => state[NameSpace.OFFERS].city;
const getCityOffers = (state) => state[NameSpace.OFFERS].cityOffers;
const getSortType = (state) => state[NameSpace.OFFERS].sortType;
const getLatitude = (state) => state[NameSpace.OFFERS].latitude;
const getLongitude = (state) => state[NameSpace.OFFERS].longitude;
const getZoom = (state) => state[NameSpace.OFFERS].zoom;

export {
  getDataLoadedState,
  getOffers,
  getCities,
  getCity,
  getCityOffers,
  getSortType,
  getLatitude,
  getLongitude,
  getZoom
};
