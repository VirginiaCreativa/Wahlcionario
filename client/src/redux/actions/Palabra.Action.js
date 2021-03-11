/* eslint-disable consistent-return */
import axios from 'axios';
import {
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_ERROR,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
  FETCH_REST_PALABRA_IMAGES,
  FETCH_REST_PALABRA_PICTOGRAMA,
} from '../types';

const URL = 'http://localhost:3000/palabra';

export const fetchPalabraDefinicion = (search) => async (dispatch) => {
  try {
    const res = await axios
      .get(`${URL}/${search}`)
      .then((res) => {
        if (res.data.definiciones) {
          dispatch({
            type: FETCH_REST_PALABRA_DEFINICION,
            payload: res.data.definiciones.results[0].lexicalEntries[0].entries,
            // payload: res.data.definiciones.definiciones,
          });
        } else {
          dispatch({
            type: FETCH_REST_PALABRA_ERROR,
            payload: res.data.message,
          });
        }
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

export const fetchPalabraSinonimos = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_SINONIMOS,
        payload: res.data.sinonimos.sinonimos,
      });
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraAntonimos = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_ANTONIMOS,
        payload: res.data.antonimos.antonimos,
      });
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraImages = (search) => async (dispatch) => {
  try {
    const res = await axios
      .get(`${URL}/images/${search}`)
      .then((res) => {
        dispatch({
          type: FETCH_REST_PALABRA_IMAGES,
          payload: res.data.images,
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

export const fetchPalabraPictograma = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_PICTOGRAMA,
        payload: res.data.pictograma,
      });
    });

    return res;
  } catch (error) {
    return error;
  }
};
