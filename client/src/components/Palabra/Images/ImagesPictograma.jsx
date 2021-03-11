import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.img``;

const ImagesPictograma = ({ src, palabra }) => {
  return (
    <>
      <img src={src} alt={palabra} />
    </>
  );
};

export default ImagesPictograma;
