import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo/Logo';
import Banner from '../assets/21_01_WC_5_7_Banner_v1.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100vw;
  height: 80vh;
  a {
    margin-bottom: 60px;
  }
  .group {
    display: flex;
    align-items: center;
    .col {
      :last-child {
        padding: 60px;
      }
      img {
        height: 400px;
      }
      .box {
        margin-bottom: 40px;
      }
      button {
        display: inline-block;
        margin-right: 10px;
        width: 48%;
      }
    }
  }
`;

const Landing = () => {
  const history = useHistory();
  return (
    <>
      <Wrapper>
        <Logo size="140px" />
        <div className="group">
          <div className="col">
            <img src={Banner} alt="Imagen de mujer con celular" />
          </div>
          <div className="col">
            <div className="box">
              <h1>Si tenemos más diccionarios</h1>
              <h3>También visual más aclaración</h3>
            </div>
            <div className="box">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => history.push('login')}>
                Iniciar Sesión
              </button>
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={() => history.push('register')}>
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
