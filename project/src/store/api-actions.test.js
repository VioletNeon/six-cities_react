import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {checkAuth, login, fetchHotelsList, fetchHotel, fetchNearbyHotels, fetchComments, toComment, fetchFavoriteHotels, markFavorite} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';

let api = null;

const defaultHotelData = {
  'bedrooms': '1',
  'city': {
    'location': {
      'latitude': '55',
      'longitude': '66',
      'zoom': '11',
    },
    'name': 'name',
  },
  'description': 'cool place',
  'goods': ['Heating', 'Kitchen'],
  'host': {
    'avatar_url': 'url',
    'id': '0',
    'is_pro': 'true',
    'name': 'name',
  },
  'id': '0',
  'images': ['img1', 'img2'],
  'is_favorite': 'true',
  'is_premium': 'false',
  'location': {
    'latitude': '55',
    'longitude': '66',
    'zoom': '11',
  },
  'max_adults': '1',
  'preview_image': 'img3',
  'price': '150',
  'rating': '4',
  'title': 'Super',
  'type': 'apartment',
};

const adaptedHotelData = {
  'bedrooms': '1',
  'city': {
    'location': {
      'latitude': '55',
      'longitude': '66',
      'zoom': '11',
    },
    'name': 'name',
  },
  'description': 'cool place',
  'goods': ['Heating', 'Kitchen'],
  'host': {
    'avatarUrl': 'url',
    'id': '0',
    'isPro': 'true',
    'name': 'name',
  },
  'id': '0',
  'images': ['img1', 'img2'],
  'isFavorite': 'true',
  'isPremium': 'false',
  'location': {
    'latitude': '55',
    'longitude': '66',
    'zoom': '11',
  },
  'maxAdults': '1',
  'previewImage': 'img3',
  'price': '150',
  'rating': '4',
  'title': 'Super',
  'type': 'apartment',
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {
        ...defaultHotelData.host,
        'token': 'token',
        'email': 'email',
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          authorizationStatus: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_AUTH_INFO,
          authInfo: [{
            'avatarUrl': 'url',
            'email': 'email',
            'id': '0',
            'isPro': 'true',
            'name': 'name',
            'token': 'token',
          }],
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const FAKE_USER = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(FAKE_USER);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, {
        ...defaultHotelData.host,
        'token': 'token',
        'email': 'email',
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_AUTH_INFO,
          authInfo: [{
            'avatarUrl': 'url',
            'email': 'email',
            'id': '0',
            'isPro': 'true',
            'name': 'name',
            'token': 'token',
          }],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          authorizationStatus: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchHotelsList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [defaultHotelData]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTELS,
          offers: [adaptedHotelData],
        });
      });
  });

  it('should make a correct API call to GET /hotels/id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const FAKE_URL = '/hotels/0';
    const hotelLoader = fetchHotel(FAKE_URL);

    apiMock
      .onGet(FAKE_URL)
      .reply(200, defaultHotelData);

    return hotelLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTEL,
          offer: [adaptedHotelData],
        });
      });
  });

  it('should make a correct API call to GET /hotels/id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const FAKE_URL = '/hotels/0/nearby';
    const nearbyHotelsLoader = fetchNearbyHotels(FAKE_URL);

    apiMock
      .onGet(FAKE_URL)
      .reply(200, [defaultHotelData]);

    return nearbyHotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_HOTELS,
          nearbyOffers: [adaptedHotelData],
        });
      });
  });

  it('should make a correct API call to GET /comments/id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const FAKE_URL = '/comments/0';
    const commentsLoader = fetchComments(FAKE_URL);

    apiMock
      .onGet(FAKE_URL)
      .reply(200, [{
        'user': {...defaultHotelData.host},
        'comment': 'Wow',
        'date': '2021',
        'id': '0',
        'rating': '4',
      }]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          comments: [{
            'user': {...adaptedHotelData.host},
            'comment': 'Wow',
            'date': '2021',
            'id': '0',
            'rating': '4',
          }],
        });
      });
  });

  it('should make a correct API call to POST /comments/id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const FAKE_URL = '/comments/0';
    const fakeComment = {
      'comment': 'Wow',
      'rating': '4',
    };
    const commentsLoader = toComment(FAKE_URL, fakeComment);

    apiMock
      .onPost(FAKE_URL)
      .reply(200, [{
        'user': {...defaultHotelData.host},
        'comment': 'Wow',
        'date': '2021',
        'id': '0',
        'rating': '4',
      }]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          comments: [{
            'user': {...adaptedHotelData.host},
            'comment': 'Wow',
            'date': '2021',
            'id': '0',
            'rating': '4',
          }],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteHotelsLoader = fetchFavoriteHotels();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [defaultHotelData]);

    return favoriteHotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_HOTELS,
          favoriteOffers: [adaptedHotelData],
        });
      });
  });

  it('should make a correct API call to POST /favorite/id/status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const FAKE_URL = '/favorite/0/1';
    const offerLoader = markFavorite(FAKE_URL);

    apiMock
      .onPost(FAKE_URL)
      .reply(200, defaultHotelData);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_HOTELS,
          updatedOffer: adaptedHotelData,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_HOTEL,
          offer: [adaptedHotelData],
        });
      });
  });
});
