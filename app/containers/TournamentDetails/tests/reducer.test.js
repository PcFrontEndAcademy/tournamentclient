import { fromJS } from 'immutable';
import tournamentDetailsReducer from '../reducer';

describe('tournamentDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(tournamentDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
