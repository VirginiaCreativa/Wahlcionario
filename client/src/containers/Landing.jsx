import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo/Logo';
import Variables from '../styles/VariableStyled';
import Banner from '../assets/21_01_WC_5_7_Banner_v1.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  width: 100vw;
  height: 100vh;
  a {
    margin-bottom: 60px;
  }
  .group {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    .col {
      :last-child {
        padding: 80px;
      }
      img {
        height: 400px;
      }
      .box {
        margin-bottom: 60px;
        h1 {
          margin-bottom: 10px;
          font-size: 3.1rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        p {
          margin-bottom: 10px;
          color: ${Variables.grey2};
          font-size: 1.2rem;
        }
      }
      button {
        display: inline-block;
        margin-right: 10px;
        width: 46%;
      }
    }
  }
`;

const Landing = () => {
  const history = useHistory();
  return (
    <>
      <Wrapper>
        <Logo size="130px" />
        <div className="group">
          <div className="col">
            <img src={Banner} alt="Imagen de mujer con celular" />
          </div>
          <div className="col">
            <div className="box">
              <p>Definición, ejemplos, similar, conjugar y además</p>
              <h1>Si tenemos app de varios diccionarios.</h1>
              <h2>También visual más aclaración</h2>
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
