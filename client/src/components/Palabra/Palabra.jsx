/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Definicion from './Definiciones/DefinicionItem';

const BoxContent = styled.div`
  margin: 20px 0;
`;

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
          <BoxContent key={id}>
            <Definicion items={item.senses} {...item} />
          </BoxContent>
        ))}
      {errPalabra && <h4>{errPalabraMessage}</h4>}
    </>
  );
};

export default Palabra;
