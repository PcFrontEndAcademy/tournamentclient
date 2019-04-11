import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the teamsPage state domain
 */

const selectTeamsPageDomain = state => state.get('teamsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TeamsPage
 */

const makeSelectTeamsPage = () =>
  createSelector(selectTeamsPageDomain, substate => substate.toJS());

export default makeSelectTeamsPage;
export { selectTeamsPageDomain };
