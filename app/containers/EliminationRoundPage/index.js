/**
 *
 * EliminationRoundPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeSelectEliminationRoundPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Bracket from '../../components/Bracket';

/* eslint-disable react/prefer-stateless-function */
export class EliminationRoundPage extends React.Component {
  state = {
    tabValue: 0,
    secondaryTabValue: 0,
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue, secondaryTabValue: 0 });
  };

  handleSecondaryTabChange = (event, secondaryTabValue) => {
    this.setState({ secondaryTabValue });
  };

  render() {
    return (
      <div>
        <Tabs
          value={this.state.tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
          variant="fullWidth"
        >
          <Tab label="Elite Cup" />
          <Tab label="Challenger Cup" />
        </Tabs>
        {this.state.tabValue === 0 && (
          <div>
            <Tabs
              value={this.state.secondaryTabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleSecondaryTabChange}
            >
              <Tab label="Main" />
              <Tab label="Other places" />
            </Tabs>
            {this.state.secondaryTabValue === 0 && (
              <Bracket
                participantsNumber={10}
                games={[
                  {
                    home: '(B4) Almantas K.',
                    homeScore: 0,
                    away: '(A5) Martynas J.',
                    awayScore: 5,
                  },
                  {
                    home: '(B5) Ignas Č.',
                    homeScore: 0,
                    away: '(A4) Darius O.',
                    awayScore: 5,
                  },
                  {
                    home: '(A1) Rimvydas T.',
                    homeScore: 1,
                    away: '(A5) Martynas J.',
                    awayScore: 5,
                  },
                  {
                    home: '(B2) Edvinas V.',
                    homeScore: 0,
                    away: '(A3) Rokas J.',
                    awayScore: 5,
                  },
                  {
                    home: '(B3) Domantas J.',
                    homeScore: 0,
                    away: '(A2) Ernestas B.',
                    awayScore: 5,
                  },
                  {
                    home: '(A4) Darius O.',
                    homeScore: 5,
                    away: '(B1) Laimonas M.',
                    awayScore: 3,
                  },
                  {
                    home: '(A5) Martynas J.',
                    homeScore: 0,
                    away: '(A3) Rokas J.',
                    awayScore: 5,
                  },
                  {
                    home: '(A2) Ernestas B.',
                    homeScore: 5,
                    away: '(A4) Darius O.',
                    awayScore: 2,
                  },
                  {
                    home: '(A3) Rokas J.',
                    homeScore: 0,
                    away: '(A2) Ernestas B.',
                    awayScore: 5,
                  },
                ]}
              />
            )}
            {this.state.secondaryTabValue === 1 && (
              <div>
                <h2>3rd place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={14}
                  height={20}
                  participantsNumber={2}
                  games={[
                    {
                      home: '(A5) Martynas J.',
                      homeScore: 3,
                      away: '(A4) Darius O.',
                      awayScore: 5,
                    },
                  ]}
                />
                <h2>5th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={10}
                  height={40}
                  participantsNumber={4}
                  games={[
                    {
                      home: '(A1) Rimvydas T.',
                      homeScore: 5,
                      away: '(B2) Edvinas V.',
                      awayScore: 1,
                    },
                    {
                      home: '(B3) Domantas J.',
                      homeScore: 0,
                      away: '(B1) Laimonas M.',
                      awayScore: 5,
                    },
                    { home: '(A1) Rimvydas T.', away: '(B1) Laimonas M.' },
                  ]}
                />
                <h2>7th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={13}
                  height={20}
                  participantsNumber={2}
                  games={[
                    {
                      home: '(B2) Edvinas V.',
                      homeScore: 5,
                      away: '(B3) Domantas J.',
                      awayScore: 3,
                    },
                  ]}
                />
                <h2>9th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={9}
                  height={20}
                  participantsNumber={2}
                  games={[
                    {
                      home: '(B4) Almantas K.',
                      homeScore: 5,
                      away: '(B5) Ignas Č.',
                      awayScore: 1,
                    },
                  ]}
                />
              </div>
            )}
          </div>
        )}
        {this.state.tabValue === 1 && (
          <div>
            <Tabs
              value={this.state.secondaryTabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleSecondaryTabChange}
            >
              <Tab label="Main" />
              <Tab label="Other places" />
            </Tabs>
            {this.state.secondaryTabValue === 0 && (
              <Bracket
                participantsNumber={10}
                games={[
                  {
                    home: '(B9) Neringa F.',
                    homeScore: 5,

                    away: '(A10) Tadas V.',
                    awayScore: 0,
                  },
                  {
                    home: '(B10) Julius D.',
                    homeScore: 0,
                    away: '(A9) Egidijus B.',
                    awayScore: 5,
                  },
                  {
                    home: '(A6) Edgaras N.',
                    homeScore: 5,
                    away: '(B9) Neringa F.',
                    awayScore: 0,
                  },
                  {
                    home: '(B7) Lukas S.',
                    homeScore: 5,
                    away: '(A8) Artūras Ž.',
                    awayScore: 0,
                  },
                  {
                    home: '(B8) Justinas B.',
                    homeScore: 0,
                    away: '(A7) Rimas D.',
                    awayScore: 5,
                  },
                  {
                    home: '(A9) Egidijus B.',
                    homeScore: 5,
                    away: '(B6) Simas V.',
                    awayScore: 0,
                  },
                  {
                    home: '(A6) Edgaras N.',
                    homeScore: 5,
                    away: '(B7) Lukas S.',
                    awayScore: 0,
                  },
                  {
                    home: '(A7) Rimas D.',
                    homeScore: 5,
                    away: '(A9) Egidijus B.',
                    awayScore: 0,
                  },
                  {
                    home: '(A6) Edgaras N.',
                    homeScore: 5,
                    away: '(A7) Rimas D.',
                    awayScore: 0,
                  },
                ]}
              />
            )}
            {this.state.secondaryTabValue === 1 && (
              <div>
                <h2>3rd place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={14}
                  height={20}
                  participantsNumber={2}
                  games={[
                    {
                      home: '(B7) Lukas S.',
                      homeScore: 5,
                      away: '(A9) Egidijus B.',
                      awayScore: 0,
                    },
                  ]}
                />
                <h2>5th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={10}
                  height={40}
                  participantsNumber={4}
                  games={[
                    {
                      home: '(B9) Neringa F.',
                      homeScore: 5,
                      away: '(A8) Artūras Ž.',
                      awayScore: 0,
                    },
                    {
                      home: '(B8) Justinas B.',
                      homeScore: 4,
                      away: '(B6) Simas V.',
                      awayScore: 5,
                    },
                    { home: '(B9) Neringa F.', away: '(B6) Simas V.' },
                  ]}
                />
                <h2>7th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={13}
                  height={20}
                  participantsNumber={2}
                  games={[
                    {
                      home: '(A8) Artūras Ž.',
                      homeScore: 0,
                      away: '(B8) Justinas B.',
                      awayScore: 5,
                    },
                  ]}
                />
                <h2>9th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={9}
                  height={20}
                  participantsNumber={2}
                  games={[
                    {
                      home: '(A10) Tadas V.',
                      homeScore: 5,
                      away: '(B10) Julius D.',
                      awayScore: 0,
                    },
                  ]}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

EliminationRoundPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  eliminationRoundPage: makeSelectEliminationRoundPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eliminationRoundPage', reducer });
const withSaga = injectSaga({ key: 'eliminationRoundPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EliminationRoundPage);
