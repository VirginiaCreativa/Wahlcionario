import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImgStyled = {
  maxWidth: '100%',
  height: 'auto',
};

const ImagesPictograma = ({ src, height, palabra }) => {
  return (
    <>
      <LazyLoadImage effect="blur" src={src} alt={palabra} style={ImgStyled} />
    </>
  );
};

export default ImagesPictograma;
