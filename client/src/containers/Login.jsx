import React, { useState } from 'react';
import Register from '../components/Login/Register';
import LoginIn from '../components/Login/Login';

const Login = () => {
  const [hasUser, setHasUser] = useState(true);
  return (
    <div className="container">{hasUser ? <LoginIn /> : <Register />}</div>
  );
};

export default Login;
