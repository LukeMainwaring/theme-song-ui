import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Typography, withStyles } from '@material-ui/core';

import { createGame } from '../actions/games';

const Lobby = ({ classes, createGame, words }) => {
  return (
    <div>
      <Typography variant='h1' component='h2' align='center'>
        Theme Song
      </Typography>
      <Grid alignItems='center' container justify='center' spacing={2}>
        <Grid item>
          <Button
            className={classes.createGameButton}
            color='primary'
            variant='contained'
            onClick={() => createGame()}
            size='large'
          >
            Create New Game
          </Button>
        </Grid>
      </Grid>

      <span>{words}</span>
    </div>
  );
};

const mapStateToProps = ({ games }) => {
  return { words: games.words };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createGame,
    },
    dispatch
  );
};

const styles = {
  createGameButton: {
    justifyContent: 'right',
    // paddingLeft: 40,
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Lobby));
