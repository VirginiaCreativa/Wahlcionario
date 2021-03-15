import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';
import Icon from '../../assets/icons/icons';

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${Variables.grey0};
  padding: 20px;
`;

const FoundPictograma = () => {
  return (
    <BoxStyled>
      <img src={Icon.imgFound} alt="Images Found" />
      <h3>No tenemos pictograma</h3>
    </BoxStyled>
  );
};

export default FoundPictograma;
