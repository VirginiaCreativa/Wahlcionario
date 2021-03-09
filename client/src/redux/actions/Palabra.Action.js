/* eslint-disable consistent-return */
import axios from 'axios';
import { history } from '../store/store';
import {
  FETCH_PALABRA_CONTENT_CLEAN,
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_ERROR,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
} from '../types';

const URL = 'http://localhost:3000/palabra';

export const shoulFetchPalabraContent = (payload) => ({
  type: FETCH_PALABRA_CONTENT_CLEAN,
  payload,
});

export const fetchPalabraDefinicion = (search) => async (dispatch) => {
  try {
    const res = await axios
      .get(`${URL}/${search}`)
      .then((res) => {
        dispatch({
          type: FETCH_REST_PALABRA_DEFINICION,
          payload: res.data.definiciones.results[0].lexicalEntries[0].entries,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_REST_PALABRA_ERROR,
          payload: error,
        });
      });
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraSinonimos = (search) => async (dispatch) => {
  try {
    const res = await axios
      .get(`${URL}/${search}`)
      .then((res) => {
        dispatch({
          type: FETCH_REST_PALABRA_SINONIMOS,
          payload: res.data.sinonimos.sinonimos,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_REST_PALABRA_ERROR,
          payload: error,
        });
      });
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraSAntonimos = (search) => async (dispatch) => {
  try {
    const res = await axios
      .get(`${URL}/${search}`)
      .then((res) => {
        dispatch({
          type: FETCH_REST_PALABRA_ANTONIMOS,
          payload: res.data.sinonimos.sinonimos,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_REST_PALABRA_ERROR,
          payload: error,
        });
      });
    return res;
  } catch (error) {
    return error;
  }
};