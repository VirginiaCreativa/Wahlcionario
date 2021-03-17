import React from 'react';
import styled from 'styled-components';
import Variables from '../../../styles/VariableStyled';
import { capitalizefirstletter } from '../../../scripts/plugin';

const ListAntonimos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  > li {
    margin-right: 6px;
    margin-bottom: 8px;
    border-radius: 100px;
    background-color: #fff0f3;
    padding: 2px 14px;
    list-style: none;
    p {
      margin-bottom: 0;
      color: #ff8aa6;
      font-size: 0.95rem;
      font-weight: 500;
    }
  }
`;

const SinonimosItem = ({ items }) => {
  return (
    <ListAntonimos>
      {items &&
        items.map((item, key) => (
          <li key={key} className="list-unstyled">
            <p>{capitalizefirstletter(item.antonimo)}</p>
          </li>
        ))}
    </ListAntonimos>
  );
};

export default SinonimosItem;
