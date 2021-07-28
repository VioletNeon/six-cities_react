import {ActionType} from '../action';

const initialState = {
  activeCardId: 0,
};

const activeCard = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_CARD_ID:
      return {
        ...state,
        activeCardId: action.activeCardId,
      };
    default:
      return state;
  }
};

export {activeCard};
