import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoSVG from '../../assets/logo/logo.svg';

const ImgStyle = styled.img`
  height: ${({ size }) => size || '40px'};
`;

const Logo = ({ size }) => {
  return (
    <>
      <Link to="/">
        <ImgStyle src={LogoSVG} alt="Icono de Logo Wahlcionario" size={size} />
      </Link>
    </>
  );
};

export default Logo;
