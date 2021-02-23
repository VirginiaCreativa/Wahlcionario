import axios from 'axios';
import { REGISTER_SUCESS, REGISTER_FAIL } from '../types';

const URL = 'http://localhost:3000/user';

export const RegisterSucces = ({ name, email, password }) => async (
  dispatch,
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${URL}/register`, body, config);
    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const AuthUser = (payload) => {
  console.log('fdskjf');
};
