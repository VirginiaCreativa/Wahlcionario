/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PalabraComponent from '../components/Palabra/Palabra';
import { capitalizefirstletter } from '../scripts/plugin';

const Palabra = () => {
  const isPalabra = useSelector((state) => state.search.palabra);
  const { search } = useParams();
  const history = useHistory();
  return (
    <div className="container">
      <h1>{capitalizefirstletter(isPalabra || search)}</h1>
      <PalabraComponent palabra={isPalabra} />
    </div>
  );
};

export default Palabra;
