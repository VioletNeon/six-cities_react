import {user} from './user';
import {AuthorizationStatus} from '../../const';
import {
  clearFavoritesData,
  loadAuthInfo,
  loadFavoriteHotels,
  requireAuthorization,
  signOut,
} from '../action';

const initialExpectedState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: [{
    email: '',
    avatarUrl: '',
    name: '',
  }],
  favoriteOffers: [],
  isFavoritesLoad: false,
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {

    expect(user(undefined, {})).toEqual(initialExpectedState);
  });

  it('should update authorization status by a given value', () => {

    const expectedState = {
      ...initialExpectedState,
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const authorizationStatus = AuthorizationStatus.AUTH;

    expect(user(initialExpectedState, requireAuthorization(authorizationStatus))).toEqual(expectedState);
  });

  it('should clear user data', () => {
    const trialState = {
      authorizationStatus: AuthorizationStatus.AUTH,
      authInfo: [{
        email: 'correct-email',
        avatarUrl: 'correct-url',
        name: 'correct-name',
      }],
      favoriteOffers: [{description: ''}],
      isFavoritesLoad: true,
    };

    expect(user(trialState, signOut())).toEqual(initialExpectedState);
  });

  it('should upload user auth info by given data', () => {
    const expectedState = {
      ...initialExpectedState,
      authInfo: [{
        email: 'correct-email',
        avatarUrl: 'correct-url',
        name: 'correct-name',
      }],
    };

    const authInfo = {
      email: 'correct-email',
      avatarUrl: 'correct-url',
      name: 'correct-name',
    };

    expect(user(initialExpectedState, loadAuthInfo(authInfo))).toEqual(expectedState);
  });

  it('should upload favorite hotels offers by given data', () => {
    const expectedState = {
      ...initialExpectedState,
      favoriteOffers: [{
        description: 'correct-description',
        city: 'correct-city',
      }],
      isFavoritesLoad: true,
    };

    const favoriteOffers = [{
      description: 'correct-description',
      city: 'correct-city',
    }];

    expect(user(initialExpectedState, loadFavoriteHotels(favoriteOffers))).toEqual(expectedState);
  });

  it('should clear favorite hotels offers', () => {
    const trialState = {
      ...initialExpectedState,
      favoriteOffers: [{description: ''}],
      isFavoritesLoad: true,
    };

    expect(user(trialState, clearFavoritesData())).toEqual(initialExpectedState);
  });
});
