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
  fetchPalabraImages,
} from '../../redux/actions/Palabra.Action';

const Definicion = lazy(() => import('./Definiciones/DefinicionItem'));

const Section = styled.div`
  margin: 20px 0 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
`;

const Column = styled.div``;

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const hasDefiniciones = useSelector((state) => state.palabra.definiciones);
  const hasSinonimos = useSelector((state) => state.palabra.sinonimos);
  const hasAntonimos = useSelector((state) => state.palabra.antonimos);
  const hasImages = useSelector((state) => state.palabra.images);
  const errorPalabra = useSelector((state) => state.palabra.error);

  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraAntonimos(search));
    dispatch(fetchPalabraImages(search));

    if (errorPalabra === null) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, []);

  return (
    <>
      {errorPalabra && <h4>{errorPalabra}</h4>}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <Grid>
              <Column>
                {hasDefiniciones &&
                  hasDefiniciones.map((item, id) => (
                    <div key={id}>
                      <Definicion items={item.senses} {...item} />
                    </div>
                  ))}
              </Column>
              <Column>
                {hasImages &&
                  hasImages.map((item, id) => (
                    <div key={id}>
                      <img
                        src={item.assets.large_thumb.url}
                        alt={item.assets}
                      />
                    </div>
                  ))}
              </Column>
            </Grid>
          </Section>
          <Section>
            <div className="row">
              <div className="col">
                <h6>{!errorPalabra ? 'Similar = Sinónimos = Igual' : null}</h6>
                <ul>
                  {hasSinonimos &&
                    hasSinonimos.map((item, key) => (
                      <li key={key}>{capitalizefirstletter(item.sinonimo)}</li>
                    ))}
                </ul>
              </div>
              <div className="col">
                <h6>
                  {!errorPalabra ? 'Opuesta = Antónimos = Diferente' : null}
                </h6>
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
