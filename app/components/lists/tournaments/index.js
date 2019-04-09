/* eslint-disable no-underscore-dangle */
/**
 *
 * Tournaments
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RestrictedAcess from '../../RestrictedAcess';

function Tournaments({ tournaments, history }) {
  return tournaments.map(tournament => (
    <Card
      key={tournament._id}
      style={{
        width: '29.33%',
        display: 'inline-block',
        margin: '2%',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Tourney logo"
          height="140"
          image="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?cs=srgb&dl=ball-field-football-47730.jpg&fm=jpg"
          title="Tourney logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tournament.name}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => history.push(`/${tournament._id}/groups`)}
          size="small"
          color="primary"
        >
          Groups
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push('/eliminationround')}
        >
          Elimination round
        </Button>
        <RestrictedAcess>
          <Button
            size="small"
            color="primary"
            onClick={() => history.push(`/${tournament._id}/details`)}
          >
            Details
          </Button>
        </RestrictedAcess>
      </CardActions>
    </Card>
  ));
}

Tournaments.propTypes = {};

export default withRouter(Tournaments);
