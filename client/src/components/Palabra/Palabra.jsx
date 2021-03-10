/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Loading from '../../common/loading/LoadingHorizontal';
import { capitalizefirstletter } from '../../scripts/plugin';
import {
  fetchPalabraDefinicion,
  fetchPalabraSinonimos,
  fetchPalabraAntonimos,
  fetchPalabraImages,
} from '../../redux/actions/Palabra.Action';

import Definicion from './Definiciones/DefinicionItem';
import ImagesItemTrumb from './Images/ImagesItemTrumb';
import ImagesPictograma from './Images/ImagesPictograma';

const Section = styled.div`
  margin: 20px 0 40px;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 63% auto;
`;

const Grid = styled.div``;

const GridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState('');

  const hasDefiniciones = useSelector((state) => state.palabra.definiciones);
  const hasSinonimos = useSelector((state) => state.palabra.sinonimos);
  const hasAntonimos = useSelector((state) => state.palabra.antonimos);
  const hasImages = useSelector((state) => state.palabra.images);
  const errorPalabra = useSelector((state) => state.palabra.error);
  const errorMessage = useSelector((state) => state.palabra.message);

  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraAntonimos(search));
    dispatch(fetchPalabraImages(search));

    if (errorPalabra) {
      setIsLoading(true);
      setIsErrorMessage(errorMessage);
    } else {
      setIsLoading(false);
    }
    console.log(hasAntonimos.length);
  }, []);

  return (
    <>
      {errorMessage && <h4>{errorMessage}</h4>}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <Column>
              <Grid>
                {hasDefiniciones &&
                  hasDefiniciones.map((item, id) => (
                    <div key={id}>
                      <Definicion items={item.senses} {...item} />
                    </div>
                  ))}
              </Grid>
              <Grid>
                <GridImages>
                  {hasImages &&
                    hasImages.map((item, id) => (
                      <ImagesItemTrumb
                        key={id}
                        src={item.assets.large_thumb.url}
                        alt={item.assets}
                      />
                    ))}
                </GridImages>
              </Grid>
            </Column>
          </Section>
          <Section>
            <div className="row">
              <div className="col">
                <h6>{!errorPalabra ? 'Similar = Sinónimos = Igual' : null}</h6>
                <ul>
                  {hasSinonimos.length >= 0
                    ? hasSinonimos.map((item, key) => (
                        <li key={key}>
                          {capitalizefirstletter(item.sinonimo)}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              <div className="col">
                <h6>
                  {!errorPalabra ? 'Opuesta = Antónimos = Diferente' : null}
                </h6>
                <ul>
                  {hasAntonimos.length >= 0
                    ? hasAntonimos.map((item, key) => (
                        <li key={key}>
                          {capitalizefirstletter(item.antonimo)}
                        </li>
                      ))
                    : null}
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
