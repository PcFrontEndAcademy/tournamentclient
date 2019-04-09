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
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import injectReducer from 'utils/injectReducer';
import makeSelectTournamentDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import { get, deleteTournament, createGroups } from './actions';
import DialogForm from '../../components/Dialog/dialogForm';

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

  addGroups = groupsCount => {
    const { tournamentId } = this.props.match.params;
    this.props.createGroups({ tournament: tournamentId, ...groupsCount });
  };

  render() {
    const { tournament } = this.props;
    return (
      <div>
        <h1>{tournament && tournament.name}</h1>
        <Button variant="contained" onClick={this.deleteTournament}>
          Delete
        </Button>
        <h3>Groups</h3>
        {tournament &&
          (tournament.groups.length === 0 && (
            <DialogForm
              buttonTitle="Add Groups"
              handleSubmit={this.addGroups}
              fields={[
                <TextField
                  type="number"
                  name="groupsCount"
                  fullWidth
                  label="Groups count"
                />,
              ]}
            />
          ))}
        <hr />
        {tournament &&
          tournament.groups.map(group => (
            <Chip
              style={{ padding: '20px', margin: '20px' }}
              label={group.name}
            />
          ))}
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
  createGroups: PropTypes.func,
};

const mapStateToProps = makeSelectTournamentDetails();

function mapDispatchToProps(dispatch) {
  return {
    get: id => dispatch(get(id)),
    deleteTournament: id => dispatch(deleteTournament(id)),
    createGroups: groupsData => dispatch(createGroups(groupsData)),
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
