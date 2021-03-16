import React from 'react';
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
        font-style: italic;
        p {
          color: ${Variables.grey3};
        }
      }
    }
  }
`;

const ExampleItem = ({ items }) => {
  return (
    <ListExample>
      {items &&
        items.map((item, index) => (
          <li key={index} className="list-unstyled">
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
