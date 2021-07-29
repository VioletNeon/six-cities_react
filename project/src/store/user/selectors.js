import {NameSpace} from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
const getFavoriteOffers = (state) => state[NameSpace.USER].favoriteOffers;
const getFavoritesLoadState = (state) => state[NameSpace.USER].isFavoritesLoad;

export {getAuthorizationStatus, getAuthInfo, getFavoriteOffers, getFavoritesLoadState};
