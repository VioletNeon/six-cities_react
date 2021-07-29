import {NameSpace} from '../root-reducer';

const getActiveCardId = (state) => state[NameSpace.ACTIVE_CARD].activeCardId;

export {getActiveCardId};
