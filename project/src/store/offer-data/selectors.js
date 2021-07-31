import {NameSpace} from '../root-reducer';

const selectOffer = (state) => state[NameSpace.OFFER_DATA].offer;
const selectNearbyOffers = (state) => state[NameSpace.OFFER_DATA].nearbyOffers;
const selectComments = (state) => state[NameSpace.OFFER_DATA].comments;

export {selectOffer, selectNearbyOffers, selectComments};
