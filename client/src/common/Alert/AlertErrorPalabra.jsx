import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const AlertStyled = styled.div`
  display: flex;
  padding: 10px 0;
  i {
    margin-right: 10px;
    color: ${Variables.red1};
    font-size: 26px;
  }
`;

const AlertErrorPalabra = ({ title }) => {
  return (
    <AlertStyled>
      <i className="bx bx-error-alt" />
      <h4>{title}</h4>
    </AlertStyled>
  );
};

export default AlertErrorPalabra;
