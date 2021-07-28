import {NameSpace} from '../root-reducer';

const getOffer = (state) => state[NameSpace.OFFER_DATA].offer;
const getNearbyOffers = (state) => state[NameSpace.OFFER_DATA].nearbyOffers;
const getComments = (state) => state[NameSpace.OFFER_DATA].comments;

export {getOffer, getNearbyOffers, getComments};
