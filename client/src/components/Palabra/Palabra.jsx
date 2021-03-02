/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import axios from 'axios';

const Palabra = ({ palabra }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${palabra}`, {
            headers: {
              'Content-type': 'application/json; charset=utf-8',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET',
              'cache-control': 'no-cache',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
          })
          .then((res) => console.log(res));
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [palabra]);

  return <div />;
};

export default Palabra;
