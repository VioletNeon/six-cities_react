import {NameSpace} from '../root-reducer';

const selectDataLoadedState = (state) => state[NameSpace.OFFERS].isDataLoaded;
const selectOffers = (state) => state[NameSpace.OFFERS].offers;
const selectCities = (state) => state[NameSpace.OFFERS].cities;
const selectCity = (state) => state[NameSpace.OFFERS].city;
const selectCityOffers = (state) => state[NameSpace.OFFERS].cityOffers;
const selectSortType = (state) => state[NameSpace.OFFERS].sortType;
const selectLatitude = (state) => state[NameSpace.OFFERS].latitude;
const selectLongitude = (state) => state[NameSpace.OFFERS].longitude;
const selectZoom = (state) => state[NameSpace.OFFERS].zoom;

export {
  selectDataLoadedState,
  selectOffers,
  selectCities,
  selectCity,
  selectCityOffers,
  selectSortType,
  selectLatitude,
  selectLongitude,
  selectZoom
};
