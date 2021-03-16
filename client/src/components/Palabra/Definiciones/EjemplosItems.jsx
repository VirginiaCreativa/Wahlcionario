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
        items.map((item, key) => (
          <li key={item} className="list-unstyled">
            <ul>
              {item.examples &&
                item.examples.map((item, key) => (
                  <li key>
                    <p>{capitalizefirstletter(item.text)}</p>
                  </li>
                ))}
            </ul>
          </li>
        ))}
    </ListExample>
  );
};

export default ExampleItem;
