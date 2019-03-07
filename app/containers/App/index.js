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
import GroupsPage from '../GroupsPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div style={{ padding: '1% 15%', color: 'white' }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tournaments" component={TournamentsPage} />
        <Route exact path="/:tournamentid/groups" component={GroupsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
