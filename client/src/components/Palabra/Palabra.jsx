/* eslint-disable consistent-return */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Loading from '../../common/loading/LoadingHorizontal';
import { capitalizefirstletter } from '../../scripts/plugin';

const Definicion = lazy(() => import('./Definiciones/DefinicionItem'));

const BoxContent = styled.div`
  margin: 20px 0;
`;

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const { search } = useParams();
  const [hasDefinition, setHasDefinition] = useState([]);
  const [hasSinonimos, setHasSinonimos] = useState([]);
  const [errPalabra, setErrPalabra] = useState(false);
  const [errPalabraMessage, setErrPalabraMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`http://localhost:3000/palabra/${search}`)
          .then((response) => {
            if (response.data.definiciones === undefined) {
              setErrPalabraMessage(response.data.message);
              setErrPalabra(true);
              setHasDefinition(null);
              setHasSinonimos(null);
            } else {
              setErrPalabra(false);
              setHasDefinition(
                response.data.definiciones.results[0].lexicalEntries[0].entries,
              );
              setHasSinonimos(response.data.sinonimos.sinonimos);
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

  console.log(hasSinonimos);
  return (
    <>
      <Suspense fallback={<Loading />}>
        {hasDefinition &&
          hasDefinition.map((item, id) => (
            <BoxContent key={id}>
              <Definicion items={item.senses} {...item} />
            </BoxContent>
          ))}
      </Suspense>
      <h6>{!errPalabra ? 'Similar' : null}</h6>
      <ul>
        {hasSinonimos &&
          hasSinonimos.map((item, key) => (
            <li key={key}>{capitalizefirstletter(item.sinonimo)}</li>
          ))}
      </ul>
      {errPalabra && <h4>{errPalabraMessage}</h4>}
    </>
  );
};

export default Palabra;
