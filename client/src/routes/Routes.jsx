import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Palabra from '../containers/Palabra';
import MisPalabra from '../containers/MisPalabras';
import Login from '../containers/Login';
import NotFound from '../containers/404';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/palabra">
        <Palabra />
      </Route>
      <Route exact path="/mispalabras">
        <MisPalabra />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
