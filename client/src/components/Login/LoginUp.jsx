import React from 'react';
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
`;

const LoginUp = () => {
  return (
    <div className="container">
      <Wrapper>
        <LogoIcon size="100px" />
        <h2>iniciar sesión</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </form>
      </Wrapper>
    </div>
  );
};

export default LoginUp;
