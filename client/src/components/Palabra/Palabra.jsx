/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const Palabra = ({ palabra }) => {
  const history = useHistory();
  const { search } = useParams();
  const [hasDefinition, setHasDefinition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`http://localhost:3000/palabra/${search}`)
          .then((response) => {
            setHasDefinition(
              response.data.data.results[0].lexicalEntries[0].entries,
            );
          })
          .catch((error) => {
            console.log(error);
            history.push('/');
          });
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [history, palabra, search]);

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
