import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tournamentDetails state domain
 */

const selectTournamentDetailsDomain = state =>
  state.get('tournamentDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TournamentDetails
 */

const makeSelectTournamentDetails = () =>
  createSelector(selectTournamentDetailsDomain, substate => substate.toJS());

export default makeSelectTournamentDetails;
export { selectTournamentDetailsDomain };
