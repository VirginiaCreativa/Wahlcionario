import React from 'react';
import styled from 'styled-components';
import Variables from '../../../styles/VariableStyled';
import { capitalizefirstletter } from '../../../scripts/plugin';

const ListSinonimos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  > li {
    margin-right: 6px;
    margin-bottom: 8px;
    border-radius: 100px;
    background-color: #dcf2e4;
    padding: 2px 14px;
    list-style: none;
    p {
      margin-bottom: 0;
      color: #3fb76e;
      font-size: 0.95rem;
      font-weight: 500;
    }
  }
`;

const SinonimosItem = ({ items }) => {
  return (
    <ListSinonimos>
      {items &&
        items.map((item, key) => (
          <li key={key} className="list-unstyled">
            <p>{capitalizefirstletter(item.sinonimo)}</p>
          </li>
        ))}
    </ListSinonimos>
  );
};

export default SinonimosItem;
