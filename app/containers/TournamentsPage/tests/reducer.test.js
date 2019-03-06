import { fromJS } from 'immutable';
import tournamentsPageReducer from '../reducer';

describe('tournamentsPageReducer', () => {
  it('returns the initial state', () => {
    expect(tournamentsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
