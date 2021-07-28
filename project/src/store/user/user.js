import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: [{
    email: '',
    avatarUrl: '',
    name: '',
  }],
  favoriteOffers: [],
  isFavoritesLoad: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.authorizationStatus,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: initialState.authInfo,
        favoriteOffers: initialState.favoriteOffers,
        isFavoritesLoad: false,
      };
    case ActionType.LOAD_AUTH_INFO:
      return {
        ...state,
        authInfo: action.authInfo,
      };
    case ActionType.LOAD_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteOffers: action.favoriteOffers,
        isFavoritesLoad: true,
      };
    case ActionType.CLEAR_FAVORITES_DATA:
      return {
        ...state,
        favoriteOffers: initialState.favoriteOffers,
        isFavoritesLoad: false,
      };
    default:
      return state;
  }
};

export {user};
