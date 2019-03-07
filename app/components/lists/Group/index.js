/* eslint-disable no-underscore-dangle */
/**
 *
 * Group
 *
 */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

function Group({ items, excludeKeys }) {
  let keys = (items.length > 0 && Object.keys(items[0])) || [];
  keys = keys.filter(key => excludeKeys.indexOf(key) === -1);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {keys.map(key => (
              <TableCell>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(row => (
            <TableRow hover key={row._id}>
              {keys.map(key => (
                <TableCell>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Group.defaultProps = {
  items: [],
  excludeKeys: [],
};

Group.propTypes = {
  items: PropTypes.array,
  excludeKeys: PropTypes.array,
};

export default Group;
