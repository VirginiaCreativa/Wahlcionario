import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FoundPictograma from '../../../common/Found/FoundPictograma';

const ImgStyled = {
  maxWidth: '100%',
  height: 'auto',
};

const ImagesPictograma = ({ src, height, palabra }) => {
  return (
    <>
      {src !== '' ? (
        <LazyLoadImage
          effect="blur"
          src={src}
          alt={palabra}
          style={ImgStyled}
        />
      ) : (
        <FoundPictograma />
      )}
    </>
  );
};

export default ImagesPictograma;
