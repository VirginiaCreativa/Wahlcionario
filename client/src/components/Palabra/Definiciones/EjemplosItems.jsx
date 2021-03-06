import React, { useState } from 'react';
import styled from 'styled-components';
import Variables from '../../../styles/VariableStyled';
import { capitalizefirstletter } from '../../../scripts/plugin';

const ListExample = styled.ul`
  margin: 0;
  padding-left: 0;
  > li {
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #f2f4f7;
    padding: 10px 20px;
    p {
      margin-bottom: 0;
    }
    ul {
      margin: 0;
      padding-left: 1rem;
      li {
        margin-bottom: 10px;
        font-style: italic;
        :last-child {
          margin-bottom: 0;
        }
        p {
          color: ${Variables.grey3};
        }
      }
    }
  }
`;

const ExampleItem = ({ items, bgactive }) => {
  const [hasBgExample, setHasBgExample] = useState(null);

  return (
    <ListExample>
      {items &&
        items.map((item, index) => (
          <li
            key={index}
            className="list-unstyled"
            style={{
              display: item.examples !== undefined ? 'block' : 'none',
            }}>
            <ul>
              {item.examples
                ? item.examples.map((item, index) => (
                    <li key={index}>
                      <p>{capitalizefirstletter(item.text)}</p>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        ))}
    </ListExample>
  );
};

export default ExampleItem;
