import React from 'react';
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
  width: 100%;
  height: 60vh;
`;

const Landing = () => {
  return (
    <>
      <div className="container">
        <Wrapper>
          <Logo size="140px" />
          <div className="row">
            <div className="col">
              <img src={Banner} alt="" />
            </div>
            <div className="col">
              <h2>Si tenemos más diccionario</h2>
              <h4>También visual más recomendación</h4>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Landing;
