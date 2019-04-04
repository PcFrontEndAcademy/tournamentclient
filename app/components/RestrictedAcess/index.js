/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../api/config';

function RestrictedAccess({ children }) {
  if (CONFIG.GET_TOKEN()) {
    return children;
  }
  return null;
}

RestrictedAccess.propTypes = {
  children: PropTypes.node,
};

export default RestrictedAccess;
