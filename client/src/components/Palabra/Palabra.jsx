/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Loading from '../../common/loading/LoadingHorizontal';
import { capitalizefirstletter } from '../../scripts/plugin';
import {
  fetchPalabraDefinicion,
  fetchPalabraSinonimos,
  fetchPalabraSAntonimos,
} from '../../redux/actions/Palabra.Action';

const Definicion = lazy(() => import('./Definiciones/DefinicionItem'));

const Section = styled.div`
  margin: 20px 0;
  min-height: 20vh;
`;

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const hasDefiniciones = useSelector((state) => state.palabra.definiciones);
  const hasSinonimos = useSelector((state) => state.palabra.sinonimos);
  const hasAntonimos = useSelector((state) => state.palabra.antonimos);
  const errorPalabra = useSelector((state) => state.palabra.error);

  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraSAntonimos(search));

    console.log(errorPalabra);
    if (!errorPalabra) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    // if (errorPalabra === null) {
    //   setIsLoading(false);
    // } else {
    //   setIsLoading(true);
    // }
  }, []);

  return (
    <>
      {errorPalabra && <h4>{errorPalabra}</h4>}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Section>
            {hasDefiniciones &&
              hasDefiniciones.map((item, id) => (
                <div key={id}>
                  <Definicion items={item.senses} {...item} />
                </div>
              ))}
          </Section>
          <Section>
            <h6>{!errorPalabra ? 'Similar' : null}</h6>
            <ul>
              {hasSinonimos &&
                hasSinonimos.map((item, key) => (
                  <li key={key}>{capitalizefirstletter(item.sinonimo)}</li>
                ))}
            </ul>
          </Section>
        </>
      )}
    </>
  );
};

export default Palabra;
