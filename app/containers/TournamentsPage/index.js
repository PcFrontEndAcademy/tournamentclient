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
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import makeSelectTournamentsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTournaments, createTournament } from './actions';
import Tournaments from '../../components/lists/tournaments';
import DialogForm from '../../components/Dialog/dialogForm';
import CONFIG from '../../api/config';

/* eslint-disable react/prefer-stateless-function */
export class TournamentsPage extends React.Component {
  componentDidMount() {
    this.props.get();
  }

  groupsRedirect = tournamentId => {
    this.props.history.push(`/${tournamentId}/groups`);
  };

  addTournament = tournament => {
    this.props.createTournament(tournament);
  };

  render() {
    const { tournaments } = this.props;
    const isLoggedInUser = CONFIG.GET_TOKEN();
    return (
      <div>
        <h1>Tournaments</h1>
        {isLoggedInUser && (
          <DialogForm
            buttonTitle="Add new"
            handleSubmit={this.addTournament}
            fields={[
              <TextField name="name" fullWidth label="Name" />,
              <Select
                fullWidth
                native
                inputProps={{
                  name: 'type',
                }}
              >
                <option value="" />
                <option value="Football">Football</option>
                <option value="TableTennis">Table Tennis</option>
              </Select>,
            ]}
          />
        )}
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
  createTournament: PropTypes.func,
};

const mapStateToProps = makeSelectTournamentsPage();

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getTournaments()),
    createTournament: tournament => dispatch(createTournament(tournament)),
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