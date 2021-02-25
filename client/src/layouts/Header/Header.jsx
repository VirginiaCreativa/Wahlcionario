import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from '../../redux/actions/Auth.Action';
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
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isMenus = useSelector((state) => state.auth.menus);

  useEffect(() => {
    if (localStorage.user || isAuthenticated) {
      dispatch(LoadUser());
    } else {
      history.push('/landing');
    }
  }, [history, isAuthenticated, dispatch]);

  return (
    <>
      {isMenus && (
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
