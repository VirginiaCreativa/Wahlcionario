import React from 'react';

const DefinicionItem = ({ items }) => {
  return (
    <ul>
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
    </ul>
  );
};

export default DefinicionItem;
