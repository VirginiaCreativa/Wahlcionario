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
  fetchPalabraAntonimos,
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
  const [isLoading, setIsLoading] = useState(false);

  const hasDefiniciones = useSelector((state) => state.palabra.definiciones);
  const hasSinonimos = useSelector((state) => state.palabra.sinonimos);
  const hasAntonimos = useSelector((state) => state.palabra.antonimos);
  const errorPalabra = useSelector((state) => state.palabra.error);

  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraAntonimos(search));

    if (errorPalabra === null) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }

    console.log('>>>', hasSinonimos);
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
            <div className="row">
              <div className="col">
                <h6>{!errorPalabra ? 'Similar = Sinónimos' : null}</h6>
                <ul>
                  {hasSinonimos &&
                    hasSinonimos.map((item, key) => (
                      <li key={key}>{capitalizefirstletter(item.sinonimo)}</li>
                    ))}
                </ul>
              </div>
              <div className="col">
                <h6>{!errorPalabra ? 'Opuesta = Antónimos' : null}</h6>
                <ul>
                  {hasAntonimos &&
                    hasAntonimos.map((item, key) => (
                      <li key={key}>{capitalizefirstletter(item.antonimo)}</li>
                    ))}
                </ul>
              </div>
            </div>
          </Section>
        </>
      )}
    </>
  );
};

export default Palabra;
