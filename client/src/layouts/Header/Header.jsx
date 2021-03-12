import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Logo from '../../common/Logo/Logo';
import Search from '../../components/Search/Search';
import Menus from './Menus/Menus';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 15px;
`;

const Header = () => {
  const isMenus = useSelector((state) => state.auth.menus);
  const isPathSearchHide = useSelector(
    (state) => state.router.location.pathname,
  );

  return (
    <>
      {isMenus && (
        <HeaderStyled>
          <Logo size="50px" />
          {isPathSearchHide !== '/' ? <Search /> : null}
          <Menus />
        </HeaderStyled>
      )}
    </>
  );
};

export default Header;
