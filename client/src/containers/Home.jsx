import React from 'react';
import styled from 'styled-components';
import SearchHome from '../components/Search/SearchHome';
import Variables from '../styles/VariableStyled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 80vh;
`;

const BoxContent = styled.div`
  margin-bottom: 20px;
  width: 28vw;
  h1 {
    margin-bottom: 20px;
    font-size: 3.5rem;
  }
  p {
    color: ${Variables.grey2};
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <BoxContent>
        <h1>Más significados</h1>
        <p>
          Ex aliquip mollit consequat magna excepteur. Ullamco excepteur
          occaecat incididunt incididunt.
        </p>
      </BoxContent>
      <SearchHome />
    </Wrapper>
  );
};

export default Home;
