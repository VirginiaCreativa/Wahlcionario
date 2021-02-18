import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Palabra from '../containers/Palabra';
import MisPalabra from '../containers/MisPalabras';

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
    </Switch>
  );
};

export default Routes;
