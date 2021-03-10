import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { eliminardiacriticos } from '../../scripts/plugin';
import Variables from '../../styles/VariableStyled';

import { setValueSearch } from '../../redux/actions/Search.Action';

import {
  fetchPalabraDefinicion,
  fetchPalabraSinonimos,
  fetchPalabraAntonimos,
  fetchPalabraImages,
} from '../../redux/actions/Palabra.Action';

const SearchStyled = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 5px;
  border: 0;
  background-color: transparent;
  .bx {
    color: ${Variables.grey3};
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
  padding: 6px 40px 6px 40px;
  text-align: center;
  font-size: 0.85rem;
  @media screen and (min-width: 1366px) {
    width: 30vw;
  }
  @media screen and (min-width: 1920px) {
    width: 20vw;
  }
`;

const Search = () => {
  const [doSearchValue, setDoSearchValue] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const HandlerChangeSearchHome = (ev) => {
    setDoSearchValue(ev.target.value);
  };
  const HandleSearchValue = (ev) => {
    ev.preventDefault();
    if (ev.key === 'Enter' || ev.charCode === 13) {
      dispatch(setValueSearch(doSearchValue));
    }
    if (!doSearchValue) {
      console.log('falta');
    } else {
      dispatch(setValueSearch(doSearchValue));
      dispatch(fetchPalabraDefinicion(doSearchValue));
      dispatch(fetchPalabraSinonimos(doSearchValue));
      dispatch(fetchPalabraAntonimos(doSearchValue));
      dispatch(fetchPalabraImages(doSearchValue));
      history.push(`/palabra/${eliminardiacriticos(doSearchValue)}`);
    }
  };

  return (
    <SearchStyled>
      <Button type="button" onClick={HandleSearchValue}>
        <i className="bx bx-search" />
      </Button>
      <form action="" onSubmit={HandleSearchValue}>
        <InputStyled
          type="text"
          name="search"
          placeholder="Buscador una palabra"
          onChange={HandlerChangeSearchHome}
        />
      </form>
    </SearchStyled>
  );
};

export default Search;
