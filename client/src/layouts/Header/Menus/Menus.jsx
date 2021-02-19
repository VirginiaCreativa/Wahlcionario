import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Variables from "../../../styles/VariableStyled";

const MenuStyled = styled.div`
  position: relative;
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
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
  width: 200px;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  ul {
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
      :last-child {
        margin-bottom: 0;
        padding-top: 10px;
        border-top: 1px dotted ${Variables.grey0};
      }
      i {
        position: relative;
        top: 2px;
        margin-right: 10px;
        color: ${Variables.grey1};
      }
    }
  }
`;

const Menus = () => {
  const [btnSubMenu, setBtnSubMenu] = useState(false);
  const [userCurrent, setUserCurrent] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/current", {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyZDdlZTkyZjI0OGQzNTAxMWQwMTJmIn0sImlhdCI6MTYxMzc0MTM1MCwiZXhwIjoxNjEzNzc3MzUwfQ.iruzrEBwb44WcqY5vcYKlTnGzn7hUv08Wu556Rk8Lno",
        },
      })
      .then((res) => {
        if (res) setUserCurrent(res.data.data.name);
      })
      .catch((err) => console.error(err));
    // ===== BOX SUBMENU =====//
    const bodyBox = document.querySelector("body");
    if (bodyBox) {
      bodyBox.addEventListener("mouseover", (ev) => {
        if (ev.clientY >= 220) {
          setBtnSubMenu(false);
        }
      });
    }
  });

  return (
    <MenuStyled>
      <Button type="button" onClick={() => history.push("mispalabras")}>
        <i className="bx bx-layer"></i>
      </Button>
      <Button
        type="button"
        activeuser={btnSubMenu ? "#2868ee" : "#a4b0be"}
        onClick={() => setBtnSubMenu(!btnSubMenu)}
      >
        <i className="bx bx-user"></i>
      </Button>
      {btnSubMenu && (
        <SubMenu className="boxSubMenu">
          <ul className="list-unstyled">
            <li>
              <p>{userCurrent || "Desconocido"}</p>
            </li>
            <li>
              <i className="bx bx-layer"></i>
              <Link to="mispalabras">Mis palabras</Link>
            </li>
            <li>
              <i className="bx bxs-cog"></i>
              <Link to="configuracion">Configuración</Link>
            </li>
            <li>
              <i className="bx bx-exit"></i>
              <Link to="logout">Salir</Link>
            </li>
          </ul>
        </SubMenu>
      )}
    </MenuStyled>
  );
};

export default Menus;
