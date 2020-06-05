import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createGame } from '../actions/games';

const Lobby = ({ createGame }) => {
  return (
    <div>
      <button className='ui button primary' onClick={() => createGame()}>
        Create New Game
      </button>
    </div>
  );
};

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createGame,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
