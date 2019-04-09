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
import Autocomplete from '../../components/fields/autocomplete';
import makeSelect from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  getGroups,
  getUnusedParticipants,
  addParticipantToGroup,
  startGroupStage,
  addResult,
} from './actions';
import BaseList from '../../components/lists/Base';
import { buildFullName } from '../../helpers/textManagment';
import VersusCard from '../../components/VersusCard';
import CONFIG from '../../api/config';
import RestrictedAcces from '../../components/RestrictedAcess';

/* eslint-disable react/prefer-stateless-function */
export class GroupsPage extends React.Component {
  state = {
    participantToAdd: null,
    standings: true,
    matches: false,
    pending: true,
    finished: false,
  };

  componentDidMount() {
    const { tournamentId } = this.props.match.params;
    this.props.get(tournamentId);
    this.props.getUnusedParticipants(tournamentId);
  }

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

  switchToPending = () => {
    this.setState({ pending: true, finished: false });
  };

  switchToFinished = () => {
    this.setState({ finished: true, pending: false });
  };

  saveScore = (homeScore, awayScore, groupId, resultId) => {
    const { tournamentId } = this.props.match.params;
    this.props.addResult(tournamentId, groupId, resultId, homeScore, awayScore);
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
            <RestrictedAcces>
              <Button
                color="primary"
                variant="contained"
                onClick={this.startGroupStage}
              >
                Start group stage
              </Button>
            </RestrictedAcces>
          )}
          {isGroupStageStarted && (
            <Button
              color="primary"
              variant={this.state.standings ? 'contained' : 'text'}
              onClick={this.switchToStandings}
            >
              Standings
            </Button>
          )}
          {isGroupStageStarted && (
            <Button
              color="primary"
              variant={this.state.matches ? 'contained' : 'text'}
              onClick={this.switchToMatches}
            >
              Matches
            </Button>
          )}
        </h1>
        {!isGroupStageStarted && (
          <RestrictedAcces>
            <Autocomplete
              options={options}
              placeholder="Participant"
              onChange={this.participantChanged}
              value={this.state.participantToAdd}
            />
          </RestrictedAcces>
        )}
        {this.state.standings &&
          groups.map(group => (
            <div key={group._id}>
              <h2>
                {group.name}
                <br />
                {!isGroupStageStarted && (
                  <RestrictedAcces>
                    <Button
                      disabled={this.state.participantToAdd === null}
                      color="primary"
                      variant="contained"
                      onClick={() => this.addParticipant(group._id)}
                    >
                      Add player
                    </Button>
                  </RestrictedAcces>
                )}
              </h2>
              <BaseList
                items={group.participants}
                excludeKeys={['_id']}
                keyProperty="_id"
              />
            </div>
          ))}
        {this.state.matches && (
          <div>
            <Button
              color="primary"
              variant={this.state.pending ? 'contained' : 'text'}
              onClick={this.switchToPending}
            >
              Pending
            </Button>
            <Button
              color="primary"
              onClick={this.switchToFinished}
              variant={this.state.finished ? 'contained' : 'text'}
            >
              Finished
            </Button>
            <hr />
            {this.state.pending &&
              groups.map(group =>
                group.results
                  .filter(result => result.homeScore == null)
                  .map(result => (
                    <div style={{ margin: '10px', display: 'inline-block' }}>
                      <VersusCard
                        key={result._id}
                        home={buildFullName(result.home.name)}
                        away={buildFullName(result.away.name)}
                        enableEdit={CONFIG.GET_TOKEN() != null}
                        saveScore={(homeScore, awayScore) =>
                          this.saveScore(
                            homeScore,
                            awayScore,
                            group._id,
                            result._id,
                          )
                        }
                      />
                    </div>
                  )),
              )}
            {this.state.finished &&
              groups.map(group =>
                group.results
                  .filter(result => result.homeScore != null)
                  .map(result => (
                    <div style={{ margin: '10px', display: 'inline-block' }}>
                      <VersusCard
                        key={result._id}
                        home={buildFullName(result.home.name)}
                        away={buildFullName(result.away.name)}
                        homeScore={result.homeScore}
                        awayScore={result.awayScore}
                      />
                    </div>
                  )),
              )}
          </div>
        )}
      </div>
    );
  }
}

GroupsPage.propTypes = {
  get: PropTypes.func,
  match: PropTypes.any,
  groups: PropTypes.array,
  getUnusedParticipants: PropTypes.func,
  unusedParticipants: PropTypes.array,
  addParticipantToGroup: PropTypes.func,
  startGroupStage: PropTypes.func,
  addResult: PropTypes.func,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    get: tournamentId => dispatch(getGroups(tournamentId)),
    getUnusedParticipants: tournamentId =>
      dispatch(getUnusedParticipants(tournamentId)),
    addParticipantToGroup: (groupId, participantId, tournamentId) =>
      dispatch(addParticipantToGroup(groupId, participantId, tournamentId)),
    startGroupStage: tournamentId => dispatch(startGroupStage(tournamentId)),
    addResult: (tournamentId, groupId, resultId, homeScore, awayScore) =>
      dispatch(
        addResult(tournamentId, groupId, resultId, homeScore, awayScore),
      ),
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
