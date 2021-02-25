import axios from 'axios';
import { history } from '../store/store';
import setAuthToken from '../../server/AuthToken.Server';
import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  MENUS_HIDE,
} from '../types';

const URL = 'http://localhost:3000/user';

export const LoadUser = () => async (dispatch) => {
  if (localStorage.user) {
    setAuthToken(localStorage.user);
  }
  try {
    const res = await axios.get(`${URL}/auth/current`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

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
    history.push('/login');
    dispatch({
      type: REGISTER_SUCESS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const LoginSucces = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${URL}/login`, body, config);
    dispatch({
      type: LOGIN_SUCESS,
      payload: res.data,
    });
  } catch (error) {
    history.push('/login');
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const isMenusShow = (payload) => ({
  type: MENUS_HIDE,
  payload,
});
