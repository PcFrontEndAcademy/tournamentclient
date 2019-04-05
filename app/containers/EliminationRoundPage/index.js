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
                  { home: '(B4) Almantas K.', away: '(A5) Martynas J.' },
                  { home: '(B5) Ignas Č.', away: '(A4) Darius O.' },
                  { home: '(A1) Rimvydas T.', away: 'Winner of Game #1' },
                  { home: '(B2) Edvinas V.', away: '(A3) Rokas J.' },
                  { home: '(B3) Domantas J.', away: '(A2) Ernestas B.' },
                  { home: 'Winner of Game #2', away: '(B1) Laimonas M.' },
                  { home: 'Winner of Game #3', away: 'Winner of Game #4' },
                  { home: 'Winner of Game #5', away: 'Winner of Game #6' },
                  { home: 'Winner of Game #7', away: 'Winner of Game #8' },
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
                    { home: 'Looser of Game #7', away: 'Looser of Game #8' },
                  ]}
                />
                <h2>5th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={10}
                  height={40}
                  participantsNumber={4}
                  games={[
                    { home: 'Looser of Game #3', away: 'Looser of Game #4' },
                    { home: 'Looser of Game #5', away: 'Looser of Game #6' },
                    { home: 'Winner of Game #11', away: 'Winner of Game #12' },
                  ]}
                />
                <h2>7th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={13}
                  height={20}
                  participantsNumber={2}
                  games={[
                    { home: 'Looser of Game #11', away: 'Looser of Game #12' },
                  ]}
                />
                <h2>9th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={9}
                  height={20}
                  participantsNumber={2}
                  games={[
                    { home: 'Looser of Game #1', away: 'Looser of Game #2' },
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
                  { home: 'B9', away: 'A10' },
                  { home: 'B10', away: 'A9' },
                  { home: 'A6', away: 'Winner of Game #1' },
                  { home: 'B7', away: 'A8' },
                  { home: 'B8', away: 'A7' },
                  { home: 'Winner of Game #2', away: 'B6' },
                  { home: 'Winner of Game #3', away: 'Winner of Game #4' },
                  { home: 'Winner of Game #5', away: 'Winner of Game #6' },
                  { home: 'Winner of Game #7', away: 'Winner of Game #8' },
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
                    { home: 'Looser of Game #7', away: 'Looser of Game #8' },
                  ]}
                />
                <h2>5th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={10}
                  height={40}
                  participantsNumber={4}
                  games={[
                    { home: 'Looser of Game #3', away: 'Looser of Game #4' },
                    { home: 'Looser of Game #5', away: 'Looser of Game #6' },
                    { home: 'Winner of Game #11', away: 'Winner of Game #12' },
                  ]}
                />
                <h2>7th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={13}
                  height={20}
                  participantsNumber={2}
                  games={[
                    { home: 'Looser of Game #11', away: 'Looser of Game #12' },
                  ]}
                />
                <h2>9th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={9}
                  height={20}
                  participantsNumber={2}
                  games={[
                    { home: 'Looser of Game #1', away: 'Looser of Game #2' },
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
