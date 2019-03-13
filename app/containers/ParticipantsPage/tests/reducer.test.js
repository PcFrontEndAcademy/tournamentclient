import { fromJS } from 'immutable';
import participantsPageReducer from '../reducer';

describe('participantsPageReducer', () => {
  it('returns the initial state', () => {
    expect(participantsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
