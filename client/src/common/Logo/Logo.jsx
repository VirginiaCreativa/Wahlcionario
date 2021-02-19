import React from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from '../../assets/logo/logo.svg';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          src={LogoSVG}
          alt="Icono de Logo Wahlcionario"
          style={{ height: '40px' }}
        />
      </Link>
    </>
  );
};

export default Logo;
