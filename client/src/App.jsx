import React, { useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { history } from './redux/store/store';
import { LoadUser } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.user) {
      useDispatch(LoadUser());
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
