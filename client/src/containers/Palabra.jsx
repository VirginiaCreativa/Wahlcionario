/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AlertErrorPalabra from '../common/Alert/AlertErrorPalabra';
import PalabraComponent from '../components/Palabra/Palabra';
import { capitalizefirstletter } from '../scripts/plugin';

const Palabra = () => {
  const isPalabra = useSelector((state) => state.search.palabra);
  const errorPalabra = useSelector((state) => state.palabra.error);
  const errorMessage = useSelector((state) => state.palabra.message);
  const { search } = useParams();
  const history = useHistory();

  return (
    <div className="container">
      <h1>{capitalizefirstletter(isPalabra || search)}</h1>
      {errorPalabra === true ? (
        <AlertErrorPalabra title={errorMessage} />
      ) : null}
      <PalabraComponent palabra={isPalabra} />
    </div>
  );
};

export default Palabra;
