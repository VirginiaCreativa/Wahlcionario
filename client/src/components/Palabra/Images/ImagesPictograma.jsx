import React from 'react';
import styled from 'styled-components';
import FoundPictograma from '../../../common/Found/FoundPictograma';

const ImgStyled = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImagesPictograma = ({ src, height, palabra }) => {
  return (
    <>
      {src !== '' ? <ImgStyled src={src} alt={palabra} /> : <FoundPictograma />}
    </>
  );
};

export default ImagesPictograma;
