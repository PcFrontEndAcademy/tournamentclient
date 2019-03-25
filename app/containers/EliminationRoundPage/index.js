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
import makeSelectEliminationRoundPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import VersusCard from '../../components/VersusCard';

/* eslint-disable react/prefer-stateless-function */
export class EliminationRoundPage extends React.Component {
  render() {
    const gridContainer = {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto auto',
    };

    const gridItem = {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      border: '1px solid rgba(0, 0, 0, 0.8)',
      padding: '20px',
      fontSize: '30px',
      textAlign: 'center',
    };
    // const count = 10;
    return (
      <div>
        <h1>Elimination Round</h1>
        <div style={gridContainer}>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
          <div style={gridItem}>
            <VersusCard />
          </div>
        </div>
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
