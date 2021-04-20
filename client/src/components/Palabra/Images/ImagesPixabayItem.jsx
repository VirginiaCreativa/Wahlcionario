import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImgStyled = styled.div`
  border-radius: 12px;
  height: 100px;
  overflow: hidden;
  img {
    height: auto;
    max-height: 100%;
  }
`;
const ImagesItemTrumb = ({ src, palabra }) => {
  return (
    <>
      <LazyLoadImage effect="blur" src={src} alt={palabra} style={ImgStyled} />
    </>
  );
};

export default ImagesItemTrumb;
