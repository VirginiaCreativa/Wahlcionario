import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoadUser } from './redux/actions/Auth.Action';
import Routes from './routes/Routes';
import Layouts from './layouts/Layout';

const App = () => {
  return (
    <Router>
      <Layouts>
        <Routes />
      </Layouts>
    </Router>
  );
};
export default App;
