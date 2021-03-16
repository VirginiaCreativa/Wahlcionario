/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Loading from '../../common/loading/LoadingHorizontal';
import FoundPictograma from '../../common/Found/FoundPictograma';
import { capitalizefirstletter } from '../../scripts/plugin';
import {
  fetchPalabraDefinicion,
  fetchPalabraSinonimos,
  fetchPalabraAntonimos,
  fetchPalabraImages,
  fetchPalabraPictograma,
} from '../../redux/actions/Palabra.Action';

import Definicion from './Definiciones/DefinicionItem';
import Ejemplo from './Definiciones/EjemplosItems';
import Sinonimo from './Definiciones/SinonimosItems';
import Antonimo from './Definiciones/AntonimosItems';
import ImagesItemTrumb from './Images/ImagesItemTrumb';
import ImagesPictograma from './Images/ImagesPictograma';
import Variables from '../../styles/VariableStyled';

const Section = styled.div`
  margin: 20px 0 40px;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 63% auto;
  grid-gap: 60px;
`;

const ColumnImages = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 40px;
`;
const Grid = styled.div`
  h3 {
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 16px;
    font-weight: 600;
    ::after {
      display: block;
      position: absolute;
      bottom: 6px;
      border-bottom: 2px solid ${Variables.blue1};
      width: 60px;
      content: '';
    }
  }
  h4 {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 14px;
    font-weight: 600;
    ::after {
      display: block;
      position: absolute;
      bottom: 6px;
      border-bottom: 2px solid ${Variables.blue1};
      width: 60px;
      content: '';
    }
  }
`;

const GridImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const hasDefiniciones = useSelector((state) => state.palabra.definiciones);
  const hasEjemplos = useSelector((state) => state.palabra.definiciones);
  const hasSinonimos = useSelector((state) => state.palabra.sinonimos);
  const hasAntonimos = useSelector((state) => state.palabra.antonimos);
  const hasPictograma = useSelector((state) => state.palabra.pictograma);
  const hasImages = useSelector((state) => state.palabra.images);
  const errorPalabra = useSelector((state) => state.palabra.error);
  const errorMessage = useSelector((state) => state.palabra.message);

  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraAntonimos(search));
    dispatch(fetchPalabraImages(search));
    dispatch(fetchPalabraPictograma(search));

    if (errorPalabra) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    // if (hasPictograma) console.log(hasPictograma);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <Column>
              <Grid>
                <h3>Definición</h3>
                <Section>
                  {hasDefiniciones &&
                    hasDefiniciones.map((item, id) => (
                      <div key={id}>
                        <Definicion items={item.senses} {...item} />
                      </div>
                    ))}
                </Section>
                <Section>
                  <ColumnImages>
                    <Grid>
                      {hasPictograma !== undefined ? (
                        <ImagesPictograma src={hasPictograma} />
                      ) : (
                        <FoundPictograma />
                      )}
                    </Grid>
                    <Grid>
                      {!errorPalabra && (
                        <>
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
                        </>
                      )}
                    </Grid>
                  </ColumnImages>
                </Section>
              </Grid>
              <Grid>
                <Section>
                  <h3>Ejemplos</h3>
                  {hasEjemplos &&
                    hasEjemplos.map((item, index) => (
                      <div key={index}>
                        <Ejemplo items={item.senses} />
                      </div>
                    ))}
                </Section>
                <Section>
                  <h4>{errorPalabra ? null : <span>Sinónimos</span>}</h4>
                  {hasSinonimos.length >= 0 ? (
                    <Sinonimo items={hasSinonimos} />
                  ) : null}
                </Section>
                <Section>
                  <h4>{errorPalabra ? null : <span>Antónimos</span>}</h4>
                  {hasAntonimos.length >= 0 ? (
                    <Antonimo items={hasAntonimos} />
                  ) : null}
                </Section>
              </Grid>
            </Column>
          </Section>
        </>
      )}
    </>
  );
};

export default Palabra;
