import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Wrapper, Form } from '../../styles/ExtendStyled';
import LogoIcon from '../../common/Logo/LogoIcon';
import Variables from '../../styles/VariableStyled';

import { LoginSucces } from '../../redux/actions/Auth.Action';

const AlertPassword = styled.div`
  p {
    margin-bottom: 0;
    color: ${Variables.red1};
  }
`;

const SignIn = () => {
  const [errPassword, setErrPassword] = useState(false);
  const [hasFormDatas, setFormDatas] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const alertErrorPassword = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isUser = useSelector((state) => state.auth.user);

  const { email, password } = hasFormDatas;

  const handleInputChange = (ev) => {
    setFormDatas({ ...hasFormDatas, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(LoginSucces({ email, password }));

    if (isUser === null) {
      setErrPassword(true);
    }
    history.push('/');
  };

  return (
    <>
      <Wrapper>
        <LogoIcon size="100px" />
        <h2>Iniciar Sesión</h2>
        <Form onSubmit={(ev) => handleSubmit(ev)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                className="form-control"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
              <input
                onChange={handleInputChange}
                type="password"
                name="password"
                className="form-control"
              />
              {errPassword && (
                <AlertPassword>
                  <p>{alertErrorPassword}</p>
                </AlertPassword>
              )}
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary ">
              Entrar
            </button>
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignIn;
