import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../common/loading/Loading';

const Home = lazy(() => import('../containers/Home'));
const Login = lazy(() => import('../containers/Login'));
const Register = lazy(() => import('../containers/Register'));
const Landing = lazy(() => import('../containers/Landing'));
const MisPalabras = lazy(() => import('../containers/MisPalabras'));
const NotFound = lazy(() => import('../containers/404'));

const Routes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/mispalabras" component={MisPalabras} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
