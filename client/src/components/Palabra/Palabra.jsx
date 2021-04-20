/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import React, { lazy, Suspense, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Loading from '../../common/loading/LoadingHorizontal';
import FoundPictograma from '../../common/Found/FoundPictograma';
import { Section, Column, Grid, GridImages } from './Palabra.Styled';
import {
  fetchPalabraDefinicion,
  fetchPalabraSinonimos,
  fetchPalabraAntonimos,
  fetchPalabraImages,
  fetchPalabraPictograma,
  fetchPalabraPixabay,
  fetchPalabraFlaticon,
  fetchPalabraLexica,
  fetchPalabraConjugacion,
} from '../../redux/actions/Palabra.Action';

import Definicion from './Definiciones/DefinicionItem';
import Ejemplo from './Definiciones/EjemplosItems';
import Sinonimo from './Definiciones/SinonimosItems';
import Antonimo from './Definiciones/AntonimosItems';
import ImagesItemTrumb from './Images/ImagesItemTrumb';
import ImagesPictograma from './Images/ImagesPictograma';
import ImagesPixabayItem from './Images/ImagesPixabayItem';

const Conjugacion = lazy(() => import('./Conjugacion/Conjugacion'));

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

  const SplideOptions = {
    type: 'loop',
    perPage: 6,
    focus: 'center',
    autoWidth: true,
    gap: '1rem',
  };
  useEffect(() => {
    dispatch(fetchPalabraDefinicion(search));
    dispatch(fetchPalabraSinonimos(search));
    dispatch(fetchPalabraAntonimos(search));
    dispatch(fetchPalabraImages(search));
    dispatch(fetchPalabraPictograma(search));
    dispatch(fetchPalabraPixabay(search));
    dispatch(fetchPalabraFlaticon(search));
    dispatch(fetchPalabraLexica(search));
    dispatch(fetchPalabraConjugacion(search));

    if (errorPalabra) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : !errorPalabra ? (
        <>
          <Section>
            <Column>
              <Grid>
                {/*  SECTION DEFINICION */}
                <Section>
                  <h3>Definición</h3>
                  {hasDefiniciones &&
                    hasDefiniciones.map((item, id) => (
                      <div key={id}>
                        <Definicion items={item.senses} {...item} />
                      </div>
                    ))}
                </Section>
                {/*  SECTION IMAGENES */}
                <Section>
                  <Splide options={SplideOptions}>
                    {hasImages &&
                      hasImages.map((item, id) => (
                        <SplideSlide key={id}>
                          <ImagesItemTrumb
                            src={item.assets.small_thumb.url}
                            alt={item.assets}
                          />
                        </SplideSlide>
                      ))}
                  </Splide>
                </Section>
                {/* <Section>
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
                </Section> */}
                {/*  SECTION CONJUGACION */}
                <Section>
                  <h3>Conjugación</h3>
                  <Conjugacion />
                </Section>
              </Grid>
              <Grid>
                {/* SECTION PICTOGRAMA */}
                <Section>
                  <GridImages>
                    <>
                      {hasPictograma !== undefined ? (
                        <ImagesPictograma src={hasPictograma} />
                      ) : (
                        <FoundPictograma />
                      )}
                    </>
                    <>
                      {hasPictograma !== '' && hasPictograma !== undefined ? (
                        <ImagesPictograma src={hasFlaticon} />
                      ) : (
                        <FoundPictograma />
                      )}
                    </>
                  </GridImages>
                </Section>
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
                  <h4>Sinónimos</h4>
                  {hasSinonimos.length >= 0 ? (
                    <Sinonimo items={hasSinonimos} />
                  ) : null}
                </Section>
                <Section>
                  <h4>Antónimos</h4>
                  {hasAntonimos.length >= 0 ? (
                    <Antonimo items={hasAntonimos} />
                  ) : null}
                </Section>
              </Grid>
            </Column>
          </Section>
        </>
      ) : null}
    </>
  );
};

export default Palabra;
