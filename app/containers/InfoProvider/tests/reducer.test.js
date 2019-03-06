import { fromJS } from 'immutable';
import InfoProviderReducer from '../reducer';

describe('InfoProviderReducer', () => {
  it('returns the initial state', () => {
    expect(InfoProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
