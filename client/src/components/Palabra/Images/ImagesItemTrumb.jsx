import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  border-radius: 12px;
  height: 100px;
  overflow: hidden;
`;
const ImagesItemTrumb = ({ src, palabra }) => {
  return (
    <ImgStyled>
      <img src={src} alt={palabra} />
    </ImgStyled>
  );
};

export default ImagesItemTrumb;
