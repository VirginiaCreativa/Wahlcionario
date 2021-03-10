import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;
const ImagesItemTrumb = ({ src, palabra }) => {
  return (
    <ImgStyled>
      <img src={src} alt={palabra} />
    </ImgStyled>
  );
};

export default ImagesItemTrumb;
