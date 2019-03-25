import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eliminationRoundPage state domain
 */

const selectEliminationRoundPageDomain = state =>
  state.get('eliminationRoundPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EliminationRoundPage
 */

const makeSelectEliminationRoundPage = () =>
  createSelector(selectEliminationRoundPageDomain, substate => substate.toJS());

export default makeSelectEliminationRoundPage;
export { selectEliminationRoundPageDomain };
