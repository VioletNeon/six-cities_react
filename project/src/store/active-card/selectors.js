import {NameSpace} from '../root-reducer';

const selectActiveCardId = (state) => state[NameSpace.ACTIVE_CARD].activeCardId;

export {selectActiveCardId};
