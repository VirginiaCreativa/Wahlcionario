import React, { useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoadUser } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(localStorage.user);
  useEffect(() => {
    if (localStorage.user) {
      dispatch(LoadUser());
    }
  }, [dispatch]);
  return (
    <Router>
      <Layouts>
        <Routes />
      </Layouts>
    </Router>
  );
};
export default App;
