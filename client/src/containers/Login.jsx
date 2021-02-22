import React, { useState } from 'react';
import SignUp from '../components/Login/SignUp';
import SignIn from '../components/Login/SignIn';

const Login = () => {
  const [hasUser, setHasUser] = useState(true);
  return <div className="container">{hasUser ? <SignIn /> : <SignUp />}</div>;
};

export default Login;
