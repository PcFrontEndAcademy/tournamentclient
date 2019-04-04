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
                  { home: 'B4', away: 'A5' },
                  { home: 'B5', away: 'A4' },
                  { home: 'A1', away: 'Winner of Game #1' },
                  { home: 'B2', away: 'A3' },
                  { home: 'B3', away: 'A2' },
                  { home: 'Winner of Game #2', away: 'B1' },
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
                    { home: 'Losser of Game #7', away: 'Losser of Game #8' },
                  ]}
                />
                <h2>5th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={10}
                  height={40}
                  participantsNumber={4}
                  games={[
                    { home: 'Losser of Game #3', away: 'Losser of Game #4' },
                    { home: 'Losser of Game #5', away: 'Losser of Game #6' },
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
                    { home: 'Losser of Game #11', away: 'Losser of Game #12' },
                  ]}
                />
                <h2>9th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={9}
                  height={20}
                  participantsNumber={2}
                  games={[
                    { home: 'Losser of Game #1', away: 'Losser of Game #2' },
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
                    { home: 'Losser of Game #7', away: 'Losser of Game #8' },
                  ]}
                />
                <h2>5th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={10}
                  height={40}
                  participantsNumber={4}
                  games={[
                    { home: 'Losser of Game #3', away: 'Losser of Game #4' },
                    { home: 'Losser of Game #5', away: 'Losser of Game #6' },
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
                    { home: 'Losser of Game #11', away: 'Losser of Game #12' },
                  ]}
                />
                <h2>9th place</h2>
                <hr />
                <Bracket
                  gameNumberModifier={9}
                  height={20}
                  participantsNumber={2}
                  games={[
                    { home: 'Losser of Game #1', away: 'Losser of Game #2' },
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
