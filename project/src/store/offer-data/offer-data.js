import {ActionType} from '../action';

const initialState = {
  offer: [],
  nearbyOffers: [],
  comments: [],
};

const updatedOffers = (stateOffers, updatedOffer) => {
  const updatedOfferIndex = stateOffers.findIndex((offer) => offer.id === updatedOffer.id);
  return [...stateOffers.slice(0, updatedOfferIndex), updatedOffer, ...stateOffers.slice(updatedOfferIndex + 1)];
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTEL:
      return {
        ...state,
        offer: action.offer,
      };
    case ActionType.LOAD_NEARBY_HOTELS:
      return {
        ...state,
        nearbyOffers: action.nearbyOffers,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case ActionType.UPDATE_HOTEL:
      return {
        ...state,
        offer: action.offer,
      };
    case ActionType.UPDATE_NEARBY_HOTEL:
      return {
        ...state,
        nearbyOffers: updatedOffers(state.nearbyOffers, action.updatedOffer),
      };
    case ActionType.CLEAR_HOTEL_DATA:
      return {
        ...state,
        offer: initialState.offer,
        nearbyOffers: initialState.nearbyOffers,
        comments: initialState.comments,
      };
    default:
      return state;
  }
};

export {offerData};
