import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Typography, withStyles } from '@material-ui/core';

const Game = ({ match }) => {
  const gameId = match.params.gameId;

  return (
    <div>
      <Typography variant='h2' component='h2' align='center'>
        Theme Song
      </Typography>

      <Typography variant='h4' component='h4' align='center'>
        {gameId}
      </Typography>
    </div>
  );
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const styles = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Game));
