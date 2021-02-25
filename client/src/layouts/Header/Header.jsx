import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from '../../common/Logo/Logo';
import Search from '../../components/Search/Search';
import Menus from './Menus/Menus';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <HeaderStyled>
          <Logo />
          <Search>search</Search>
          <Menus />
        </HeaderStyled>
      )}
    </>
  );
};

export default Header;
