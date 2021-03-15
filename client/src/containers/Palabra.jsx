/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Variables from '../styles/VariableStyled';

import AlertErrorPalabra from '../common/Alert/AlertErrorPalabra';
import PalabraComponent from '../components/Palabra/Palabra';
import { capitalizefirstletter } from '../scripts/plugin';

const TitlePalabra = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  h1 {
    background-color: #fff;
    padding-right: 20px;
    color: ${Variables.blue1};
    ::before {
      display: block;
      position: absolute;
      top: 65%;
      z-index: -999;
      border-bottom: 1px solid ${Variables.grey5};
      width: 100%;
      content: '';
    }
  }
`;

const ButtonAddPalabra = styled.button`
  position: relative;
  top: 8px;
  margin-left: 10px;
  border: none;
  background-color: #fff;
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
const Palabra = () => {
  const [hasAddPalabra, setHasAddPalabra] = useState(true);

  const isPalabra = useSelector((state) => state.search.palabra);
  const errorPalabra = useSelector((state) => state.palabra.error);
  const errorMessage = useSelector((state) => state.palabra.message);
  const { search } = useParams();
  const history = useHistory();

  return (
    <div className="container">
      <TitlePalabra>
        <h1>{capitalizefirstletter(isPalabra || search)}</h1>
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
