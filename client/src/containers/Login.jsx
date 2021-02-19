import React, { useState } from 'react';
import LoginUp from '../components/Login/LoginUp';

const Login = () => {
  const [hasUser, setHasUser] = useState(false);
  return <div className="container">{hasUser ? <LoginUp /> : <LoginUp />}</div>;
};

export default Login;
