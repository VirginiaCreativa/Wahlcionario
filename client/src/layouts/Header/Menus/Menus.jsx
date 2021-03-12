import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Variables from '../../../styles/VariableStyled';

import { isMenusShow } from '../../../redux/actions/Auth.Action';

const MenuStyled = styled.div`
  display: flex;
  position: relative;
`;

const Button = styled.button`
  border: 0;
  background-color: transparent;
  .bx {
    color: ${Variables.grey1};
    font-size: 18px;
    &:hover {
      color: ${Variables.blue1};
    }
  }
  .bx-user {
    color: ${(props) => props.activeuser};
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 999;
  border-radius: 6px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 15px;
  width: 180px;
  ul {
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
      font-size: 0.9rem;
      :last-child {
        margin-bottom: 0;
        border-top: 1px dotted ${Variables.grey0};
        padding-top: 10px;
      }
      i {
        position: relative;
        top: 2px;
        margin-right: 10px;
        color: ${Variables.grey1};
      }
    }
    p {
      margin-bottom: 0;
      color: ${Variables.blue1};
      font-size: 0.9rem;
    }
  }
`;

const Menus = () => {
  const [btnSubMenu, setBtnSubMenu] = useState(false);
  const [userCurrent, setUserCurrent] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.data);

  useEffect(() => {
    // ===== BOX SUBMENU =====//
    const bodyBox = document.querySelector('body');
    if (bodyBox) {
      bodyBox.addEventListener('mouseover', (ev) => {
        if (ev.clientY >= 220) {
          setBtnSubMenu(false);
        }
      });
    }
  });

  const handleLogOut = () => {
    localStorage.removeItem('user');
    dispatch(isMenusShow(false));
  };

  return (
    <MenuStyled>
      <Button type="button" onClick={() => history.push('mispalabras')}>
        <i className="bx bx-layer" />
      </Button>
      <Button
        type="button"
        activeuser={btnSubMenu ? '#2868ee' : '#a4b0be'}
        onClick={() => setBtnSubMenu(!btnSubMenu)}>
        <i className="bx bx-user" />
      </Button>
      {btnSubMenu && (
        <SubMenu className="boxSubMenu">
          <ul className="list-unstyled">
            <li>
              <p>{user ? user.name : 'Desconocido'}</p>
            </li>
            <li>
              <i className="bx bx-layer" />
              <Link to="mispalabras">Mis palabras</Link>
            </li>
            <li>
              <i className="bx bxs-cog" />
              <Link to="configuracion">Configuración</Link>
            </li>
            <li>
              <i className="bx bx-exit" />
              <Link to="/landing" onClick={handleLogOut}>
                Salir
              </Link>
            </li>
          </ul>
        </SubMenu>
      )}
    </MenuStyled>
  );
};

export default Menus;
