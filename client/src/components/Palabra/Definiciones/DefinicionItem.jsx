import React from 'react';
import styled from 'styled-components';

const ListDefinicion = styled.ul`
  margin: 0;
  padding-left: 1rem;
  > li {
    margin-bottom: 10px;
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
          <li key={key}>
            <p>{item.definitions}</p>
            <ul>
              {item.examples &&
                item.examples.map((example, key) => (
                  <li key={key}>{example.text}</li>
                ))}
            </ul>
          </li>
        ))}
    </ListDefinicion>
  );
};

export default DefinicionItem;
