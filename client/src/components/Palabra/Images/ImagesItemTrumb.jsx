import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.div`
  border-radius: 12px;
  height: 100px;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const ImagesItemTrumb = ({ src, palabra }) => {
  return (
    <ImgStyled>
      <img src={src} alt={palabra} />
    </ImgStyled>
  );
};

export default ImagesItemTrumb;
