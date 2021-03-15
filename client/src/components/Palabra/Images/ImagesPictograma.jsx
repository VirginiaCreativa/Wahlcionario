import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImagesPictograma = ({ src, palabra }) => {
  return (
    <>
      <ImgStyled src={src} alt={palabra} />
    </>
  );
};

export default ImagesPictograma;
