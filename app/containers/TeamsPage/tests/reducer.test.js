import { fromJS } from 'immutable';
import teamsPageReducer from '../reducer';

describe('teamsPageReducer', () => {
  it('returns the initial state', () => {
    expect(teamsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
