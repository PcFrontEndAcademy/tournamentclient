/**
 *
 * TournamentsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTournamentsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTournaments } from './actions';
import Tournaments from '../../components/lists/tournaments';

/* eslint-disable react/prefer-stateless-function */
export class TournamentsPage extends React.Component {
  componentDidMount() {
    this.props.get();
  }

  groupsRedirect = tournamentId => {
    this.props.history.push(`/${tournamentId}/groups`);
  };

  render() {
    const { tournaments } = this.props;
    return (
      <div>
        <h1>Tournaments</h1>
        <Tournaments
          tournaments={tournaments}
          groupsRedirect={this.groupsRedirect}
        />
      </div>
    );
  }
}

TournamentsPage.propTypes = {
  tournaments: PropTypes.array,
  get: PropTypes.func,
  history: PropTypes.any,
};

const mapStateToProps = makeSelectTournamentsPage();

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getTournaments()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tournamentsPage', reducer });
const withSaga = injectSaga({ key: 'tournamentsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TournamentsPage);
