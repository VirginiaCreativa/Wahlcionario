import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
    console.log(token);
  } else {
    delete axios.defaults.headers.common['x-access-token'];
  }
};

export default setAuthToken;
