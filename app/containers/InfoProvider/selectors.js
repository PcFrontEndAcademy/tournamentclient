import { createSelector } from 'reselect';

/**
 * Direct selector to the InfoProvider state domain
 */
const selectInfoProviderDomain = state => state.get('infoProvider');

const makeSelectInfoProvider = () =>
  createSelector(selectInfoProviderDomain, substate => substate.toJS());

export default makeSelectInfoProvider;
export { selectInfoProviderDomain };
