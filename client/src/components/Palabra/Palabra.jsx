/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import axios from 'axios';

const Palabra = ({ palabra }) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios
  //         .get(
  //           `https://od-api.oxforddictionaries.com/api/v2/entries/es/sanar?fields=definitions&strictMatch=false`,
  //           {
  //             headers: {
  //               Accept: 'application/json',
  //               app_id: '5bf0aa54',
  //               app_key: '3371afec4643fcadd24b3938ef44921a',
  //             },
  //           },
  //         )
  //         .then((res) => console.log(res));
  //       return response;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [palabra]);

  return <div />;
};

export default Palabra;
