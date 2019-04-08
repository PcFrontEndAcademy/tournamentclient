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
import RestrictedAcces from '../../components/RestrictedAcess';

/* eslint-disable react/prefer-stateless-function */
export class TournamentsPage extends React.Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    const { tournaments, createTournament: create } = this.props;
    return (
      <div>
        <h1>Tournaments</h1>
        <RestrictedAcces>
          <DialogForm
            buttonTitle="Add new"
            handleSubmit={create}
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
        </RestrictedAcces>
        <Tournaments tournaments={tournaments} />
      </div>
    );
  }
}

TournamentsPage.propTypes = {
  tournaments: PropTypes.array,
  get: PropTypes.func,
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
