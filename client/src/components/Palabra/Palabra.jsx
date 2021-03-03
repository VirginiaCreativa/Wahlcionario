/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Palabra = ({ palabra }) => {
  const [hasDefinition, setHasDefinition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`http://localhost:3000/palabra/${palabra}`)
          .then((response) =>
            setHasDefinition(
              response.data.data.results[0].lexicalEntries[0].entries,
            ),
          )
          .catch((error) => console.error(error));
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [palabra]);

  console.log(hasDefinition);
  return (
    <>
      {hasDefinition &&
        hasDefinition.map((item, key) => (
          <div key={key}>
            {item.senses.map((item, id) => (
              <p key={item.id}>{item.definitions}</p>
            ))}
          </div>
        ))}
    </>
  );
};

export default Palabra;
