import styled from 'styled-components';
import Variables from '../../../styles/VariableStyled';

export const Table = styled.table`
  border: 1px solid #fff;
  width: 100%;
`;

export const TheadTable = styled.thead`
  width: 100;
  th {
    border-right: 6px solid #fff;
    border-bottom: 1px solid #e1e1e1;
    border-left: 6px solid #fff;
    padding: 10px;
    vertical-align: middle;
    text-align: center;
    :nth-child(2n) {
      background-color: ${Variables.grey5};
    }
  }
`;

export const TbodyTable = styled.tbody`
  td {
    padding: 6px;
    :nth-child(1) {
      color: ${Variables.grey2};
    }
  }
`;
