/**
 *
 * ParticipantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import TextField from '@material-ui/core/TextField';
import makeSelectParticipantsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getParticipants, createParticipant } from './actions';
import BaseList from '../../components/lists/Base';
import Dialog from '../../components/Dialog';

/* eslint-disable react/prefer-stateless-function */
export class ParticipantsPage extends React.Component {
  state = {
    formData: {},
  };

  componentDidMount() {
    this.props.getParticipants();
  }

  addPlayer = () => {
    this.props.createParticipant(this.state.formData);
    this.clearState();
  };

  clearState = () => {
    this.setState({ formData: {} });
  };

  handleChange = event => {
    const { target } = event;
    this.setState(state => ({
      formData: Object.assign(state.formData, { [target.name]: target.value }),
    }));
  };

  render() {
    const { participants } = this.props;
    return (
      <div>
        <h1>Participants</h1>
        <Dialog
          buttonTitle="Add new"
          handleSubmit={this.addPlayer}
          beforeClose={this.clearState}
        >
          <div>
            <TextField
              onChange={this.handleChange}
              fullWidth
              label="Player name"
              name="name"
            />
          </div>
        </Dialog>
        <br />
        <BaseList
          items={participants}
          excludeKeys={['_id', '__v', 'tournament']}
        />
      </div>
    );
  }
}

ParticipantsPage.propTypes = {
  getParticipants: PropTypes.func,
  participants: PropTypes.array,
  createParticipant: PropTypes.func,
};

const mapStateToProps = makeSelectParticipantsPage();

function mapDispatchToProps(dispatch) {
  return {
    getParticipants: () => dispatch(getParticipants()),
    createParticipant: participant => dispatch(createParticipant(participant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'participantsPage', reducer });
const withSaga = injectSaga({ key: 'participantsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ParticipantsPage);
