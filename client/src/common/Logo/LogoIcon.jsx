import React from 'react';
import { Link } from 'react-router-dom';
import LogoIconSVG from '../../assets/logo/Logo_Icon.svg';

const LogoIcon = ({ size = '60px' }) => {
  return (
    <>
      <Link to="/">
        <img
          src={LogoIconSVG}
          alt="Icono de Logo Wahlcionario"
          style={{ height: `${size}` }}
        />
      </Link>
    </>
  );
};

export default LogoIcon;
