/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import CONFIG from '../../api/config';
import DialogForm from '../../components/Dialog/dialogForm';
import { login } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  login = data => {
    this.props.login(data.email, data.password);
  };

  logOut = () => {
    localStorage.clear();
  };

  render() {
    const isLoggedIn = CONFIG.GET_TOKEN() != null;
    return (
      <div>
        <div>
          {isLoggedIn && (
            <Button variant="contained" color="primary" onClick={this.logOut}>
              Log Out
            </Button>
          )}
          {!isLoggedIn && (
            <DialogForm
              handleSubmit={this.login}
              buttonTitle="Log In"
              fields={[
                <TextField name="email" fullWidth label="Email" />,
                <TextField
                  type="password"
                  name="password"
                  fullWidth
                  label="Password"
                />,
              ]}
            />
          )}
        </div>
        <h1>HOME</h1>
        <Link to="/participants">Participants</Link>
        <br />
        <Link to="/tournaments">Tournaments</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  login: PropTypes.func,
};

const mapStateToProps = makeSelectHomePage();

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
