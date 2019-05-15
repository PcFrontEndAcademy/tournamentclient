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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import injectReducer from 'utils/injectReducer';
import makeSelectTournamentDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  get,
  deleteTournament,
  createGroups,
  updateSettings,
  clearState,
} from './actions';
import DialogForm from '../../components/Dialog/dialogForm';
import Form from '../../components/Form';

/* eslint-disable react/prefer-stateless-function */
export class TournamentDetails extends React.Component {
  state = {
    tab: 'settings',
  };

  componentDidMount() {
    const { tournamentId } = this.props.match.params;
    this.props.get(tournamentId);
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  deleteTournament = () => {
    const { tournamentId } = this.props.match.params;
    this.props.deleteTournament(tournamentId);
  };

  addGroups = groupsCount => {
    const { tournamentId } = this.props.match.params;
    this.props.createGroups({ tournament: tournamentId, ...groupsCount });
  };

  saveSettings = settings => {
    const { tournamentId } = this.props.match.params;
    this.props.updateSettings(tournamentId, settings);
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    const { tournament } = this.props;
    return (
      <div>
        <h1>{tournament && tournament.name}</h1>
        <Button
          variant="contained"
          onClick={this.deleteTournament}
          style={{ float: 'right' }}
        >
          Delete
        </Button>
        <Tabs
          value={this.state.tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
        >
          <Tab label="Settings" value="settings" />
          <Tab label="Groups" value="groups" />
        </Tabs>
        {this.state.tab === 'settings' &&
          (tournament && (
            <Form
              handleSubmit={this.saveSettings}
              fields={[
                <FormControl component="fieldset">
                  <FormLabel component="legend">Participant Mode</FormLabel>
                  <RadioGroup
                    name="participantMode"
                    defaultValue={tournament.participantMode}
                  >
                    <FormControlLabel
                      value="single"
                      control={<Radio color="primary" />}
                      label="single"
                    />
                    <FormControlLabel
                      value="teams"
                      control={<Radio color="primary" />}
                      label="teams"
                    />
                  </RadioGroup>
                </FormControl>,
                <TextField
                  type="number"
                  name="groupQualifiers"
                  defaultValue={tournament.groupQualifiers}
                  fullWidth
                  label="Players to qualify from groups"
                />,
              ]}
            />
          ))}
        {this.state.tab === 'groups' && (
          <div>
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
            {tournament &&
              tournament.groups.map(group => (
                <Chip
                  style={{ padding: '20px', margin: '20px' }}
                  label={group.name}
                />
              ))}
          </div>
        )}
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
  updateSettings: PropTypes.func,
  clearState: PropTypes.func,
};

const mapStateToProps = makeSelectTournamentDetails();

function mapDispatchToProps(dispatch) {
  return {
    get: id => dispatch(get(id)),
    deleteTournament: id => dispatch(deleteTournament(id)),
    createGroups: groupsData => dispatch(createGroups(groupsData)),
    updateSettings: (id, settings) => dispatch(updateSettings(id, settings)),
    clearState: () => dispatch(clearState()),
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
