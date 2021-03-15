import React from 'react';
import styled from 'styled-components';
import Variables from '../../../styles/VariableStyled';

const ListDefinicion = styled.ul`
  margin: 0;
  padding-left: 0;
  > li {
    margin-bottom: 16px;
    border: 1px solid ${Variables.grey0};
    border-radius: 100px;
    padding: 10px 20px;
    p {
      margin-bottom: 0;
    }
    ul {
      li {
        color: #aaa;
        font-style: italic;
      }
    }
  }
`;

const DefinicionItem = ({ items }) => {
  return (
    <ListDefinicion>
      {items &&
        items.map((item, key) => (
          <li key={key} className="list-unstyled">
            <p>{item.definitions}</p>
          </li>
        ))}
    </ListDefinicion>
  );
};

export default DefinicionItem;
