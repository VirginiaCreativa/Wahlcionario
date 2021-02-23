import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Register from '../components/Login/Register';
import LoginIn from '../components/Login/Login';

const Login = () => {
  const [hasUser, setHasUser] = useState(false);
  const auth = useSelector((state) => state.auth.token);
  return <div className="container">{auth ? <LoginIn /> : <Register />}</div>;
};

export default Login;
