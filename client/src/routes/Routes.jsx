import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import MisPalabras from '../containers/MisPalabras';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/404';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mispalabras" component={MisPalabras} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
