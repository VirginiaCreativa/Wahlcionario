import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LogoIcon from '../../common/Logo/LogoIcon';
import Variables from '../../styles/VariableStyled';

import { LoginSucces } from '../../redux/actions/Auth.Action';

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 80vh;
  a,
  h2 {
    margin-bottom: 40px;
  }
  button {
    width: 100%;
  }
`;

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

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { email, password } = hasFormDatas;

  const handleInputChange = (ev) => {
    setFormDatas({ ...hasFormDatas, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(LoginSucces({ email, password }));
    if (!isAuthenticated) history.push('/');
  };

  return (
    <div className="container">
      <Wrapper>
        <LogoIcon size="100px" />
        <h2>Iniciar Sesión</h2>
        <form onSubmit={(ev) => handleSubmit(ev)}>
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
                  <p>La contraseña de validación no coincide.</p>
                </AlertPassword>
              )}
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary ">
              Entrar
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default SignIn;
