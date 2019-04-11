/* eslint-disable no-underscore-dangle */
/**
 *
 * TeamsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import TextField from '@material-ui/core/TextField';
import DialogForm from '../../components/Dialog/dialogForm';
import makeSelectTeamsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import RestrictedAccess from '../../components/RestrictedAcess';
import Autocomplete from '../../components/fields/autocomplete';
import { getParticipants, getTeams, addTeam } from './actions';
import BaseList from '../../components/lists/Base';

/* eslint-disable react/prefer-stateless-function */
export class TeamsPage extends React.Component {
  componentDidMount() {
    this.props.getParticipants();
    this.props.getTeams();
  }

  addTeam = data => {
    this.props.addTeam(data);
  };

  render() {
    const { participants, teams } = this.props;
    const options = participants.map(item => ({
      label: item.name,
      value: item._id,
    }));

    return (
      <div>
        <h1>Teams</h1>
        <RestrictedAccess>
          <DialogForm
            buttonTitle="Add Team"
            handleSubmit={this.addTeam}
            fields={[
              <TextField name="name" fullWidth label="name" />,
              <Autocomplete
                options={options}
                placeholder="Participants"
                name="participants"
                isMulti
              />,
            ]}
          />
        </RestrictedAccess>
        <br />
        <BaseList
          items={teams}
          excludeKeys={['_id', '__v', 'tournament', 'participants']}
        />
      </div>
    );
  }
}

TeamsPage.propTypes = {
  getParticipants: PropTypes.func,
  getTeams: PropTypes.func,
  addTeam: PropTypes.func,
  participants: PropTypes.array,
  teams: PropTypes.array,
};

const mapStateToProps = makeSelectTeamsPage();

function mapDispatchToProps(dispatch) {
  return {
    getParticipants: () => dispatch(getParticipants()),
    getTeams: () => dispatch(getTeams()),
    addTeam: team => dispatch(addTeam(team)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'teamsPage', reducer });
const withSaga = injectSaga({ key: 'teamsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TeamsPage);
