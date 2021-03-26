/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Variables from '../styles/VariableStyled';

import AlertErrorPalabra from '../common/Alert/AlertErrorPalabra';
import PalabraComponent from '../components/Palabra/Palabra';
import { capitalizefirstletter } from '../scripts/plugin';
import setLexicalCategorySpanish from '../scripts/LexicalCategory';

const TitlePalabra = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  h1 {
    padding-right: 20px;
    color: ${Variables.blue1};
    font-weight: 700;
    ::before {
      display: block;
      position: absolute;
      bottom: -10px;
      z-index: -999;
      border-bottom: 1px solid ${Variables.grey5};
      width: 100%;
      content: '';
    }
    ::after {
      display: block;
      position: absolute;
      top: -10px;
      z-index: -999;
      border-bottom: 1px solid ${Variables.grey5};
      width: 100%;
      content: '';
    }
  }
`;

const ButtonAddPalabra = styled.button`
  margin-left: 10px;
  border: none;
  background-color: transparent;
  padding-left: 10px;
  i {
    position: relative;
    top: 1px;
    margin: 0;
    padding: 0;
    font-size: 24px;
    &.bx-star {
      color: ${Variables.grey1};
    }
    &.bxs-star {
      color: ${Variables.blue2};
    }
  }
`;

const LexicalCategory = styled.span`
  position: relative;
  top: -5px;
  left: 5px;
  margin-bottom: 0;
  border-radius: 4px;
  background-color: ${Variables.grey5};
  padding: 2px 6px;
  letter-spacing: 0.4px;
  color: ${Variables.blue2};
  font-size: 0.85rem;
  font-weight: 400;
`;

const Palabra = () => {
  const [hasAddPalabra, setHasAddPalabra] = useState(true);

  const isPalabra = useSelector((state) => state.search.palabra);
  const errorPalabra = useSelector((state) => state.palabra.error);
  const errorMessage = useSelector((state) => state.palabra.message);
  const isLexica = useSelector((state) => state.palabra.lexica);
  const { search } = useParams();
  const history = useHistory();
  const lexica = setLexicalCategorySpanish(isLexica);

  console.log(setLexicalCategorySpanish(`${isLexica}`));
  return (
    <div className="container">
      <TitlePalabra>
        <h1>
          {capitalizefirstletter(isPalabra || search)}
          <LexicalCategory>{lexica}</LexicalCategory>
        </h1>
        <ButtonAddPalabra
          type="button"
          onClick={() => setHasAddPalabra(!hasAddPalabra)}>
          {hasAddPalabra ? (
            <i className="bx bx-star" />
          ) : (
            <i className="bx bxs-star" />
          )}
        </ButtonAddPalabra>
      </TitlePalabra>
      {errorPalabra === true ? (
        <AlertErrorPalabra title={errorMessage} />
      ) : null}
      <PalabraComponent palabra={isPalabra} />
    </div>
  );
};

export default Palabra;
