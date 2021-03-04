/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import DefinicionItem from './Definiciones/DefinicionItem';

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const { search } = useParams();
  const [hasDefinition, setHasDefinition] = useState([]);
  const [errPalabra, setErrPalabra] = useState(false);
  const [errPalabraMessage, setErrPalabraMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`http://localhost:3000/palabra/${search}`)
          .then((response) => {
            if (response.data.data === undefined) {
              setErrPalabraMessage(response.data.message);
              setErrPalabra(true);
            } else {
              setErrPalabra(false);
              setHasDefinition(
                response.data.data.results[0].lexicalEntries[0].entries,
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [history, palabra, search]);

  return (
    <>
      {hasDefinition &&
        hasDefinition.map((item, id) => (
          <div key={id}>
            <DefinicionItem items={item.senses} {...item} />
          </div>
        ))}
      {errPalabra && <h4>{errPalabraMessage}</h4>}
    </>
  );
};

export default Palabra;
