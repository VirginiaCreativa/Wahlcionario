import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

import { setValueSearch } from '../../redux/actions/Search.Action';

const SearchStyled = styled.div`
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  border-radius: 26px;
  background-color: ${Variables.blue1};
  padding: 11px 36px;
  &:hover {
    background-color: ${Variables.blue2};
  }
  .bx {
    position: relative;
    top: 2px;
    color: #fff;
    font-size: 18px;
    &:hover {
      color: ${Variables.blue1};
    }
  }
`;
const InputStyled = styled.input`
  border: 0;
  border-radius: 100px;
  background-color: ${Variables.grey0};
  padding: 12px 30px 12px 30px;
  width: 28vw;
  font-size: 0.85rem;
`;

const SearchHome = () => {
  const [doSearchValue, setDoSearchValue] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const HandlerChangeSearchHome = (ev) => {
    setDoSearchValue(ev.target.value);
  };
  const HandleSearchValue = (ev) => {
    ev.preventDefault();
    if (!doSearchValue) {
      console.log('falta');
    } else {
      dispatch(setValueSearch(doSearchValue));
      history.push('/palabra');
    }
  };

  return (
    <SearchStyled>
      <Button type="button" onClick={HandleSearchValue}>
        <i className="bx bx-search" />
      </Button>
      <InputStyled
        type="text"
        name="search"
        placeholder="Buscador una palabra"
        onChange={HandlerChangeSearchHome}
      />
    </SearchStyled>
  );
};

export default SearchHome;
