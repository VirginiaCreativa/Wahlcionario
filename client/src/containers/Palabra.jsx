/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PalabraComponent from '../components/Palabra/Palabra';

const Palabra = () => {
  const isPalabra = useSelector((state) => state.search.palabra);
  const history = useHistory();
  return (
    <div className="container">
      <h1>{isPalabra}</h1>
      <PalabraComponent palabra={isPalabra} />
    </div>
  );
};

export default Palabra;
