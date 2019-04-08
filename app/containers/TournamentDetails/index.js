/**
 *
 * TournamentDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import Button from '@material-ui/core/Button';
import injectReducer from 'utils/injectReducer';
import makeSelectTournamentDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import { get, deleteTournament } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class TournamentDetails extends React.Component {
  componentDidMount() {
    const { tournamentId } = this.props.match.params;
    this.props.get(tournamentId);
  }

  deleteTournament = () => {
    const { tournamentId } = this.props.match.params;
    this.props.deleteTournament(tournamentId);
  };

  render() {
    const { tournament } = this.props;
    return (
      <div>
        <h1>{tournament && tournament.name}</h1>
        <Button variant="contained" onClick={this.deleteTournament}>
          Delete
        </Button>
      </div>
    );
  }
}

TournamentDetails.propTypes = {
  get: PropTypes.func,
  match: PropTypes.any,
  tournament: PropTypes.shape({
    name: PropTypes.string,
  }),
  deleteTournament: PropTypes.func,
};

const mapStateToProps = makeSelectTournamentDetails();

function mapDispatchToProps(dispatch) {
  return {
    get: id => dispatch(get(id)),
    deleteTournament: id => dispatch(deleteTournament(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tournamentDetails', reducer });
const withSaga = injectSaga({ key: 'tournamentDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TournamentDetails);
