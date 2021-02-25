import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { history } from './redux/store/store';
import { LoadUser } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.user) {
      dispatch(LoadUser());
    } else {
      history.push('landing');
    }
  });

  return (
    <Router history={history}>
      <Layouts>
        <Routes />
      </Layouts>
    </Router>
  );
};

export default App;
