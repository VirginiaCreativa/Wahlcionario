import React, { useEffect } from 'react';
import { Router, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './redux/store/store';
import { LoadUser, isMenusShow } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (localStorage.user || auth === undefined) {
      dispatch(LoadUser());
      dispatch(isMenusShow(true));
    } else {
      dispatch(isMenusShow(false));
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
