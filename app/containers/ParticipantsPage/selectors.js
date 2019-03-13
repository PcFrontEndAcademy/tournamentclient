import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the participantsPage state domain
 */

const selectParticipantsPageDomain = state =>
  state.get('participantsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ParticipantsPage
 */

const makeSelectParticipantsPage = () =>
  createSelector(selectParticipantsPageDomain, substate => substate.toJS());

export default makeSelectParticipantsPage;
export { selectParticipantsPageDomain };
