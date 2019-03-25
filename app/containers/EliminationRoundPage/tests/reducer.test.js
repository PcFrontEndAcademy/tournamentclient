import { fromJS } from 'immutable';
import eliminationRoundPageReducer from '../reducer';

describe('eliminationRoundPageReducer', () => {
  it('returns the initial state', () => {
    expect(eliminationRoundPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
