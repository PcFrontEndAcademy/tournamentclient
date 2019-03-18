/* eslint-disable no-underscore-dangle */
/**
 *
 * GroupsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '../../components/fields/autocomplete';
import makeSelect from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  getGroups,
  createGroup,
  getUnusedParticipants,
  addParticipantToGroup,
  startGroupStage,
} from './actions';
import BaseList from '../../components/lists/Base';
import DialogForm from '../../components/Dialog/dialogForm';

/* eslint-disable react/prefer-stateless-function */
export class GroupsPage extends React.Component {
  state = {
    participantToAdd: null,
    standings: true,
    matches: false,
  };

  componentDidMount() {
    const { tournamentId } = this.props.match.params;
    this.props.get(tournamentId);
    this.props.getUnusedParticipants(tournamentId);
  }

  addGroup = group => {
    const { tournamentId } = this.props.match.params;
    this.props.createGroup({ tournament: tournamentId, ...group });
  };

  participantChanged = participant => {
    this.setState({ participantToAdd: participant });
  };

  addParticipant = groupId => {
    const { tournamentId } = this.props.match.params;
    this.props.addParticipantToGroup(
      groupId,
      this.state.participantToAdd.value,
      tournamentId,
    );
    this.setState({ participantToAdd: null });
  };

  startGroupStage = () => {
    const { tournamentId } = this.props.match.params;
    this.props.startGroupStage(tournamentId);
  };

  switchToStandings = () => {
    this.setState({ matches: false, standings: true });
  };

  switchToMatches = () => {
    this.setState({ matches: true, standings: false });
  };

  render() {
    const { groups, unusedParticipants } = this.props;
    const options = unusedParticipants.map(participant => ({
      value: participant._id,
      label: participant.name,
    }));

    const isGroupStageStarted =
      groups && groups.length > 0 && groups[0].results.length > 0;
    return (
      <div>
        <h1>
          Groups{' '}
          {!isGroupStageStarted && (
            <Button
              color="primary"
              variant="contained"
              onClick={this.startGroupStage}
            >
              Start group stage
            </Button>
          )}
          {isGroupStageStarted && (
            <Button
              color="primary"
              variant="contained"
              disabled={this.state.standings}
              onClick={this.switchToStandings}
            >
              Standings
            </Button>
          )}
          {isGroupStageStarted && (
            <Button
              color="primary"
              variant="contained"
              disabled={this.state.matches}
              onClick={this.switchToMatches}
            >
              Matches
            </Button>
          )}
        </h1>
        {!isGroupStageStarted && (
          <DialogForm
            buttonTitle="Add new"
            handleSubmit={this.addGroup}
            fields={[<TextField name="name" fullWidth label="Name" />]}
          />
        )}
        {!isGroupStageStarted && (
          <Autocomplete
            options={options}
            placeholder="Participant"
            onChange={this.participantChanged}
            value={this.state.participantToAdd}
          />
        )}
        {groups.map(group => (
          <div key={group._id}>
            <h2>
              {group.name}
              <br />
              {!isGroupStageStarted && (
                <Button
                  disabled={this.state.participantToAdd === null}
                  color="primary"
                  variant="contained"
                  onClick={() => this.addParticipant(group._id)}
                >
                  Add player
                </Button>
              )}
            </h2>
            {this.state.standings && (
              <BaseList items={group.participants} excludeKeys={['_id']} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

GroupsPage.propTypes = {
  get: PropTypes.func,
  match: PropTypes.any,
  groups: PropTypes.array,
  createGroup: PropTypes.func,
  getUnusedParticipants: PropTypes.func,
  unusedParticipants: PropTypes.array,
  addParticipantToGroup: PropTypes.func,
  startGroupStage: PropTypes.func,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    get: tournamentId => dispatch(getGroups(tournamentId)),
    createGroup: group => dispatch(createGroup(group)),
    getUnusedParticipants: tournamentId =>
      dispatch(getUnusedParticipants(tournamentId)),
    addParticipantToGroup: (groupId, participantId, tournamentId) =>
      dispatch(addParticipantToGroup(groupId, participantId, tournamentId)),
    startGroupStage: tournamentId => dispatch(startGroupStage(tournamentId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'groupsPage', reducer });
const withSaga = injectSaga({ key: 'groupsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GroupsPage);
