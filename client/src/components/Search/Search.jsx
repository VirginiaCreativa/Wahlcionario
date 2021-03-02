import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

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
  width: 15vw;
  text-align: center;
  font-size: 0.85rem;
`;

const Search = () => {
  return (
    <SearchStyled>
      <Button type="button">
        <i className="bx bx-search" />
      </Button>
      <InputStyled
        type="text"
        name="search"
        placeholder="Buscador una palabra"
      />
    </SearchStyled>
  );
};

export default Search;
