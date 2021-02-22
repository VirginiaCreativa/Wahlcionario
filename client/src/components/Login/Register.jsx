import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AuthService from '../../services/authentication.service';
import LogoIcon from '../../common/Logo/LogoIcon';
import Variables from '../../styles/VariableStyled';

import RegisterSucces from '../../redux/actions/Auth.Action';

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
    margin-top: 10px;
    width: 100%;
  }
`;

const AlertPassword = styled.div`
  p {
    margin-bottom: 0;
    color: ${Variables.red1};
  }
`;

const SignUp = () => {
  const [errPassword, setErrPassword] = useState(false);
  const [hasFormDatas, setFormDatas] = useState({
    name: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const { name, email, password, passwordconfirm } = hasFormDatas;

  const handleInputChange = (ev) => {
    setFormDatas({ ...hasFormDatas, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (password !== passwordconfirm) {
      setErrPassword(true);
    } else {
      dispatch(RegisterSucces({ name, email, password }));
    }
  };

  return (
    <div className="container">
      <Wrapper>
        <LogoIcon size="100px" />
        <h2>Registrarse</h2>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre completo
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                className="form-control"
              />
            </label>
          </div>
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
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirma contraseña
              <input
                onChange={handleInputChange}
                type="password"
                name="passwordconfirm"
                className="form-control"
              />
              {errPassword && (
                <AlertPassword>
                  <p>La contraseña de verificación no coincide.</p>
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

export default SignUp;
