import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Palabra = () => {
  const isPalabra = useSelector((state) => state.search.palabra);
  return (
    <div className="container">
      <h3>{isPalabra}</h3>
    </div>
  );
};

export default Palabra;
