import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tournamentsPage state domain
 */

const selectTournamentsPageDomain = state =>
  state.get('tournamentsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TournamentsPage
 */

const makeSelectTournamentsPage = () =>
  createSelector(selectTournamentsPageDomain, substate => substate.toJS());

export default makeSelectTournamentsPage;
export { selectTournamentsPageDomain };
