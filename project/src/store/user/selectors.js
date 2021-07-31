import {NameSpace} from '../root-reducer';

const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const selectAuthInfo = (state) => state[NameSpace.USER].authInfo;
const selectFavoriteOffers = (state) => state[NameSpace.USER].favoriteOffers;
const selectFavoritesLoadState = (state) => state[NameSpace.USER].isFavoritesLoad;

export {selectAuthorizationStatus, selectAuthInfo, selectFavoriteOffers, selectFavoritesLoadState};
