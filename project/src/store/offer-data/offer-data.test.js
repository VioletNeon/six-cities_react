import {offerData} from './offer-data';
import {
  loadHotel,
  loadNearbyHotels,
  loadComments,
  clearHotelData,
  updateOffer
} from '../action';

const initialExpectedState = {
  offer: [],
  nearbyOffers: [],
  comments: [],
};

describe('Reducer: offer-data', () => {
  it('without additional parameters should return initial state', () => {

    expect(offerData(undefined, {})).toEqual(initialExpectedState);
  });

  it('should upload hotel offer by given data', () => {

    const expectedState = {
      ...initialExpectedState,
      offer: [{
        description: 'correct-description',
        city: 'correct-city',
      }],
    };

    const offer = {
      description: 'correct-description',
      city: 'correct-city',
    };

    expect(offerData(initialExpectedState, loadHotel(offer))).toEqual(expectedState);
  });

  it('should upload nearby hotels offers list by a given data', () => {
    const expectedState = {
      ...initialExpectedState,
      nearbyOffers: [{
        description: 'correct-description',
        city: 'correct-city',
      }],
    };

    const nearbyOffers = [{
      description: 'correct-description',
      city: 'correct-city',
    }];

    expect(offerData(initialExpectedState, loadNearbyHotels(nearbyOffers))).toEqual(expectedState);
  });

  it('should upload hotel offer comments list by a given data', () => {
    const expectedState = {
      ...initialExpectedState,
      comments: [{
        comment: 'bla-bla-bla',
        rating: 3,
      }],
    };

    const comments = [{
      comment: 'bla-bla-bla',
      rating: 3,
    }];

    expect(offerData(initialExpectedState, loadComments(comments))).toEqual(expectedState);
  });

  it('should update hotel offer by a given data', () => {
    const expectedState = {
      ...initialExpectedState,
      offer: [{
        description: 'correct-description',
        city: 'correct-city',
      }],
    };

    const updatedOffer = {
      description: 'correct-description',
      city: 'correct-city',
    };

    expect(offerData(initialExpectedState, updateOffer(updatedOffer))).toEqual(expectedState);
  });

  it('should clear hotel offer data', () => {
    const trialState = {
      offer: [{
        description: 'correct-description',
        city: 'correct-city',
      }],
      nearbyOffers: [{
        description: 'correct-description',
        city: 'correct-city',
      }],
      comments: [{
        comment: 'bla-bla-bla',
        rating: 3,
      }],
    };

    expect(offerData(trialState, clearHotelData())).toEqual(initialExpectedState);
  });
});
