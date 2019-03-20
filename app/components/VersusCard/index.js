/**
 *
 * VersusCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const inputStyle = {
  width: '40px',
  float: 'right',
  textAlign: 'center',
  WebkitAppearance: 'none',
  margin: '0',
};

const scoreStyle = {
  float: 'right',
  fontSize: '30px',
  position: 'relative',
  top: '-11px',
  left: '11px',
};

class VersusCard extends React.Component {
  state = {
    homeScore: null,
    awayScore: null,
  };

  handleChange = event => {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  };

  saveScore = () => {
    const { homeScore, awayScore } = this.state;
    this.props.saveScore(homeScore, awayScore);
  };

  render() {
    const { away, home, homeScore, awayScore, enableEdit } = this.props;
    const isMatchFinished = homeScore != null && awayScore != null;
    return (
      <Card
        style={{
          width: '200px',
          color: 'black',
          margin: '10px',
          display: 'inline-block',
        }}
      >
        <CardContent>
          {home}
          {isMatchFinished && (
            <span style={{ ...scoreStyle, left: '-5px' }}>{homeScore}</span>
          )}
          {!isMatchFinished &&
            (enableEdit && (
              <TextField
                onChange={this.handleChange}
                type="number"
                name="homeScore"
                style={inputStyle}
              />
            ))}
          <hr />
          {away}
          {isMatchFinished && <span style={scoreStyle}>{awayScore}</span>}
          {!isMatchFinished &&
            (enableEdit && (
              <TextField
                onChange={this.handleChange}
                name="awayScore"
                type="number"
                style={inputStyle}
              />
            ))}
        </CardContent>
        <CardActions>
          {!isMatchFinished &&
            (enableEdit && (
              <Button
                onClick={this.saveScore}
                color="primary"
                variant="contained"
              >
                Save score
              </Button>
            ))}
        </CardActions>
      </Card>
    );
  }
}

VersusCard.propTypes = {
  away: PropTypes.string,
  home: PropTypes.string,
  saveScore: PropTypes.func,
  homeScore: PropTypes.number,
  awayScore: PropTypes.number,
  enableEdit: PropTypes.bool,
};

export default VersusCard;
