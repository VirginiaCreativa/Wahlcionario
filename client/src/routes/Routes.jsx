import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { LoadUser } from '../redux/actions/Auth.Action';
import setAuthToken from '../server/AuthToken.Server';
import Home from '../containers/Home';
import MisPalabras from '../containers/MisPalabras';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/404';

const Routes = () => {
  const dispatch = useDispatch();
  setAuthToken(localStorage.user);
  useEffect(() => {
    if (localStorage.user) {
      dispatch(LoadUser());
    }
  }, [dispatch]);
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
