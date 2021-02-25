import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './redux/store/store';
import { LoadUser } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (auth) {
      dispatch(LoadUser());
    } else {
      history.push('/landing');
    }
  }, [dispatch, auth]);

  return (
    <Router history={history}>
      <Layouts>
        <Routes />
      </Layouts>
    </Router>
  );
};

export default App;
