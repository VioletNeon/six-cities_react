import {
  changeCityOffers,
  changeSortType,
  changeActiveCardId,
  loadHotels,
  loadHotel,
  loadNearbyHotels,
  loadComments,
  loadFavoriteHotels,
  updateOffers,
  updateOffer,
  loadAuthInfo,
  requireAuthorization,
  signOut,
  redirectToRoute,
  clearHotelData,
  clearFavoritesData,
  ActionType
} from './action';


describe('Actions', () => {
  it('action creator for changing city location returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY_OFFERS,
      city: 'correct-city',
      latitude: '55',
      longitude: '66',
      zoom: '11',
    };

    const NAME = 'correct-city';

    const location = {
      latitude: '55',
      longitude: '66',
      zoom: '11',
    };

    expect(changeCityOffers(location, NAME)).toEqual(expectedAction);
  });

  it('action creator for changing offers sorting returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      sortType: 'correct-sorting',
    };

    const sortType = 'correct-sorting';

    expect(changeSortType(sortType)).toEqual(expectedAction);
  });

  it('action creator for changing active offer card id returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_CARD_ID,
      activeCardId: 0,
    };

    const ACTIVE_CARD_ID = 0;

    expect(changeActiveCardId(ACTIVE_CARD_ID)).toEqual(expectedAction);
  });

  it('action creator for loading hotels offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_HOTELS,
      offers: [{
        description: '',
        city: '',
      }],
    };

    const offers = [{
      description: '',
      city: '',
    }];

    expect(loadHotels(offers)).toEqual(expectedAction);
  });

  it('action creator for loading hotel offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_HOTEL,
      offer: [{
        description: '',
        city: '',
      }],
    };

    const offer = {
      description: '',
      city: '',
    };

    expect(loadHotel(offer)).toEqual(expectedAction);
  });

  it('action creator for loading nearby hotels offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_HOTELS,
      nearbyOffers: [{
        description: '',
        city: '',
      }],
    };

    const nearbyOffers = [{
      description: '',
      city: '',
    }];

    expect(loadNearbyHotels(nearbyOffers)).toEqual(expectedAction);
  });

  it('action creator for loading hotel offer comments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      comments: [{
        comment: '',
        rating: 3,
      }],
    };

    const comments = [{
      comment: '',
      rating: 3,
    }];

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('action creator for loading favorite hotels offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_HOTELS,
      favoriteOffers: [{
        description: '',
        city: '',
      }],
    };

    const favoriteOffers = [{
      description: '',
      city: '',
    }];

    expect(loadFavoriteHotels(favoriteOffers)).toEqual(expectedAction);
  });

  it('action creator for updating hotels offers list returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_HOTELS,
      updatedOffer: {
        description: '',
        city: '',
      },
    };

    const updatedOffer = {
      description: '',
      city: '',
    };

    expect(updateOffers(updatedOffer)).toEqual(expectedAction);
  });

  it('action creator for updating hotel offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_HOTEL,
      offer: [{
        description: '',
        city: '',
      }],
    };

    const updatedOffer = {
      description: '',
      city: '',
    };

    expect(updateOffer(updatedOffer)).toEqual(expectedAction);
  });

  it('action creator for loading auth data returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_AUTH_INFO,
      authInfo: [{
        email: '',
        name: '',
      }],
    };

    const authInfo = {
      email: '',
      name: '',
    };

    expect(loadAuthInfo(authInfo)).toEqual(expectedAction);
  });

  it('action creator for requiring authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      authorizationStatus: 'correct-status',
    };

    const AUTHORIZATION_STATUS = 'correct-status';

    expect(requireAuthorization(AUTHORIZATION_STATUS)).toEqual(expectedAction);
  });

  it('action creator for clearing auth data', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(signOut()).toEqual(expectedAction);
  });

  it('action creator for setting redirect url return correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'correct-url',
    };

    const PAYLOAD = 'correct-url';

    expect(redirectToRoute(PAYLOAD)).toEqual(expectedAction);
  });

  it('action creator for clearing hotels offers data list return correct action', () => {
    const expectedAction = {
      type: ActionType.CLEAR_HOTEL_DATA,
    };

    expect(clearHotelData()).toEqual(expectedAction);
  });

  it('action creator for clearing favorite hotels offers data list return correct action', () => {
    const expectedAction = {
      type: ActionType.CLEAR_FAVORITES_DATA,
    };

    expect(clearFavoritesData()).toEqual(expectedAction);
  });
});
