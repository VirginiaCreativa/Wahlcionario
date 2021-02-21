import React, { useState } from 'react';
import styled from 'styled-components';
import LogoIcon from '../../common/Logo/LogoIcon';

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

const SignUp = () => {
  const [hasFormDatas, setFormDatas] = useState({
    fullname: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });

  const handleInputChange = (ev) => {
    setFormDatas({ ...hasFormDatas, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="container">
      <Wrapper>
        <LogoIcon size="100px" />
        <h2>Registrarse</h2>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Nombre completo
              <input
                onChange={handleInputChange}
                type="text"
                name="fullname"
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
