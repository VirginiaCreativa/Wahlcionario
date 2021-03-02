import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PalabraComponent from '../components/Palabra/Palabra';

const Palabra = () => {
  const isPalabra = useSelector((state) => state.search.palabra);
  return (
    <div className="container">
      <h1>{isPalabra}</h1>

      <PalabraComponent palabra={isPalabra} />
    </div>
  );
};

export default Palabra;
