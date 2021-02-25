import React from 'react';
import styled from 'styled-components';
import Variables from '../styles/VariableStyled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 80vh;
  h1 {
    font-size: 6rem;
  }
  h3 {
    color: ${Variables.grey2};
  }
`;

const NotFound = () => {
  return (
    <div className="container">
      <Wrapper>
        <h1>NOT FOUND 404</h1>
        <h3>Extraviado == Perdido</h3>
      </Wrapper>
    </div>
  );
};

export default NotFound;
