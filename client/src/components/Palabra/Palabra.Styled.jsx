import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

export const Section = styled.div`
  margin: 20px 0 40px;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 63% auto;
  grid-gap: 60px;
`;
export const Grid = styled.div`
  h3 {
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 16px;
    font-weight: 600;
    ::after {
      display: block;
      position: absolute;
      bottom: 6px;
      border-bottom: 2px solid ${Variables.blue1};
      width: 60px;
      content: '';
    }
  }
  h4 {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 14px;
    font-weight: 600;
    ::after {
      display: block;
      position: absolute;
      bottom: 6px;
      border-bottom: 2px solid ${Variables.blue1};
      width: 60px;
      content: '';
    }
  }
`;
export const GridImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
