import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the groupsPage state domain
 */

const selectGroupsPageDomain = state => state.get('groupsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GroupsPage
 */

const makeSelectGroupsPage = () =>
  createSelector(selectGroupsPageDomain, substate => substate.toJS());

export default makeSelectGroupsPage;
export { selectGroupsPageDomain };
