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

function Base({ items, excludeKeys, keyProperty, primaryRows, secondaryRows }) {
  let keys = (items.length > 0 && Object.keys(items[0])) || [];
  keys = keys.filter(key => excludeKeys.indexOf(key) === -1);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr.</TableCell>
            {keys.map(key => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow
              style={{
                backgroundColor:
                  index < primaryRows
                    ? '#aed581'
                    : index < primaryRows + secondaryRows && '#ffe082',
              }}
              key={row[keyProperty]}
            >
              <TableCell>{index + 1}</TableCell>
              {keys.map(key => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Base.defaultProps = {
  items: [],
  excludeKeys: [],
};

Base.propTypes = {
  items: PropTypes.array,
  excludeKeys: PropTypes.array,
  keyProperty: PropTypes.string,
  primaryRows: PropTypes.number,
  secondaryRows: PropTypes.number,
};

export default Base;
