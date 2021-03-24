/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Loading from '../../common/loading/LoadingHorizontal';
import FoundPictograma from '../../common/Found/FoundPictograma';
import {
  fetchPalabraDefinicion,
  fetchPalabraSinonimos,
  fetchPalabraAntonimos,
  fetchPalabraImages,
  fetchPalabraPictograma,
  fetchPalabraPixabay,
  fetchPalabraFlaticon,
} from '../../redux/actions/Palabra.Action';

import Definicion from './Definiciones/DefinicionItem';
import Ejemplo from './Definiciones/EjemplosItems';
import Sinonimo from './Definiciones/SinonimosItems';
import Antonimo from './Definiciones/AntonimosItems';
import ImagesItemTrumb from './Images/ImagesItemTrumb';
import ImagesPictograma from './Images/ImagesPictograma';
import ImagesPixabayItem from './Images/ImagesPixabayItem';
import Variables from '../../styles/VariableStyled';

const Section = styled.div`
  margin: 20px 0 40px;
`;
const SectionSec = styled.div`
  margin: 20px 0;
`;
const Column = styled.div`
  display: grid;
  grid-template-columns: 63% auto;
  grid-gap: 60px;
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Palabra = () => {
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
  const hasPixabay = useSelector((state) => state.palabra.pixabay);
  const hasFlaticon = useSelector((state) => state.palabra.flaticon);
  const errorPalabra = useSelector((state) => state.palabra.error);
  const errorMessage = useSelector((state) => state.palabra.message);

  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraAntonimos(search));
    dispatch(fetchPalabraImages(search));
    dispatch(fetchPalabraPictograma(search));
    dispatch(fetchPalabraPixabay(search));
    dispatch(fetchPalabraFlaticon(search));

    if (errorPalabra) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const SplideOptions = {
    type: 'loop',
    perPage: 6,
    focus: 'center',
    autoWidth: true,
    gap: '1rem',
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : !errorPalabra ? (
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
                  <SectionSec>
                    <Splide options={SplideOptions}>
                      {hasImages &&
                        hasImages.map((item, id) => (
                          <SplideSlide key={id}>
                            <ImagesItemTrumb
                              src={item.assets.large_thumb.url}
                              alt={item.assets}
                            />
                          </SplideSlide>
                        ))}
                    </Splide>
                  </SectionSec>
                  <SectionSec>
                    {hasPixabay !== undefined ? (
                      <Splide options={SplideOptions}>
                        {hasPixabay &&
                          hasPixabay.map((item, id) => (
                            <SplideSlide key={id}>
                              <ImagesPixabayItem
                                key={id}
                                src={item.largeImageURL}
                                alt={item.tags}
                              />
                            </SplideSlide>
                          ))}
                      </Splide>
                    ) : null}
                  </SectionSec>
                </Section>
              </Grid>
              <Grid>
                <SectionSec>
                  <GridImages>
                    <>
                      {hasPictograma !== undefined ? (
                        <ImagesPictograma src={hasPictograma} />
                      ) : (
                        <FoundPictograma />
                      )}
                    </>
                    <>
                      {hasPictograma !== undefined ? (
                        <ImagesPictograma src={hasFlaticon} />
                      ) : (
                        <FoundPictograma />
                      )}
                    </>
                  </GridImages>
                </SectionSec>
                <SectionSec>
                  <h3>Ejemplos</h3>
                  {hasEjemplos &&
                    hasEjemplos.map((item, index) => (
                      <div key={index}>
                        <Ejemplo items={item.senses} />
                      </div>
                    ))}
                </SectionSec>
                <SectionSec>
                  <h4>Sinónimos</h4>
                  {hasSinonimos.length >= 0 ? (
                    <Sinonimo items={hasSinonimos} />
                  ) : null}
                </SectionSec>
                <SectionSec>
                  <h4>Antónimos</h4>
                  {hasAntonimos.length >= 0 ? (
                    <Antonimo items={hasAntonimos} />
                  ) : null}
                </SectionSec>
              </Grid>
            </Column>
          </Section>
        </>
      ) : null}
    </>
  );
};

export default Palabra;
