import {combineReducers} from 'redux';
import {offers} from './offers/offers';
import {offerData} from './offer-data/offer-data';
import {activeCard} from './active-card/active-card';
import {user} from './user/user';

const NameSpace = {
  OFFERS: 'OFFERS',
  OFFER_DATA: 'OFFER_DATA',
  ACTIVE_CARD: 'ACTIVE_CARD',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.OFFER_DATA]: offerData,
  [NameSpace.ACTIVE_CARD]: activeCard,
  [NameSpace.USER]: user,
});

export {NameSpace};
