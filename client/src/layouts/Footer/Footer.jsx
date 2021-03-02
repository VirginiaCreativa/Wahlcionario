import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const FooterStyled = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 15px;
  p {
    margin-bottom: 0;
    color: ${Variables.grey1};
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>© 2021 / Creative Commons (CC) / @Virginia.Creativa</p>
    </FooterStyled>
  );
};

export default Footer;
