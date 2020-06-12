import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

import { createGame, initGame } from '../actions/games';

const Lobby = ({ classes, createGame, initGame, gameIdWords }) => {
  const [gameId, setGameId] = useState('');

  // TODO: Figure out how to setGameId once value is in reducer
  useEffect(() => {
    initGame();
  }, []);

  return (
    <div>
      <Typography variant='h2' component='h2' align='center'>
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
        <Grid item>
          <TextField id='outlined-basic' label='Game ID' variant='outlined' />
        </Grid>
      </Grid>

      <div>{gameIdWords}</div>
      <div>{gameId}</div>
    </div>
  );
};

const mapStateToProps = ({ games }) => {
  return { gameIdWords: games.gameId };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createGame,
      initGame,
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
