/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TournamentsPage from '../TournamentsPage/Loadable';
import ParticipantsPage from '../ParticipantsPage/Loadable';
import EliminationRoundPage from '../EliminationRoundPage/Loadable';
import GroupsPage from '../GroupsPage/Loadable';
import InfoProvider from '../InfoProvider';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div style={{ padding: '1% 15%', color: 'white' }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tournaments" component={TournamentsPage} />
        <Route exact path="/participants" component={ParticipantsPage} />
        <Route exact path="/:tournamentId/groups" component={GroupsPage} />
        <Route
          exact
          path="/eliminationround"
          component={EliminationRoundPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <InfoProvider />
      <GlobalStyle />
    </div>
  );
}
