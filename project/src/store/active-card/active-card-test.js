import {activeCard} from './active-card';
import {changeActiveCardId} from '../action';

const initialExpectedState = {
  activeCardId: 0,
};

describe('Reducer: active-card', () => {
  it('without additional parameters should return initial state', () => {

    expect(activeCard(undefined, {})).toEqual(initialExpectedState);
  });

  it('should set active hotel offer card id by given data', () => {

    const activeCardId = 3;

    expect(activeCard(initialExpectedState, changeActiveCardId(activeCardId))).toEqual({activeCardId: 3,});
  });
});
