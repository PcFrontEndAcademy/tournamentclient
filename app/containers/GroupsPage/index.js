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
import makeSelect from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getGroups, createGroup } from './actions';
import BaseList from '../../components/lists/Base';
import DialogForm from '../../components/Dialog/dialogForm';

/* eslint-disable react/prefer-stateless-function */
export class GroupsPage extends React.Component {
  componentDidMount() {
    const { tournamentId } = this.props.match.params;
    this.props.get(tournamentId);
  }

  addGroup = group => {
    const { tournamentId } = this.props.match.params;
    this.props.createGroup({ tournament: tournamentId, ...group });
  };

  render() {
    const { groups } = this.props;
    return (
      <div>
        <h1>Groups</h1>
        <DialogForm
          buttonTitle="Add new"
          handleSubmit={this.addGroup}
          fields={[<TextField name="name" fullWidth label="Name" />]}
        />
        {groups.map(group => (
          <div key={group._id}>
            <h2>
              {group.name}
              <br />
              <Button color="primary" variant="contained">
                Add player
              </Button>
            </h2>
            <BaseList items={group.participants} excludeKeys={['_id']} />
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
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    get: tournamentId => dispatch(getGroups(tournamentId)),
    createGroup: group => dispatch(createGroup(group)),
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
