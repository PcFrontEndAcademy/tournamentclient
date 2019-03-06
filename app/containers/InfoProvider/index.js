import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import injectReducer from 'utils/injectReducer';
import makeSelectInfoProvider from './selectors';
import reducer from './reducer';

import { clearInfo } from './actions';

export function InfoProvider(props) {
  const { message, clear } = props;
  return (
    <Snackbar
      open={!!message}
      message={message || ''}
      autoHideDuration={4000}
      onClose={clear}
    />
  );
}

InfoProvider.propTypes = {
  message: PropTypes.string,
  clear: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectInfoProvider();

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clearInfo()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'infoProvider',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(InfoProvider);
