import {ActionType} from '../action';

const initialState = {
  offer: [],
  nearbyOffers: [],
  comments: [],
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
