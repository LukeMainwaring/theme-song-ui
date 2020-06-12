import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Lobby from './Lobby';
import Game from './Game';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' exact component={Lobby} />
            <Route path='/:gameId' exact component={Game} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
