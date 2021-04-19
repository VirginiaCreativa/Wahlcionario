/* eslint-disable consistent-return */
import axios from 'axios';
import {
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_ERROR,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
  FETCH_REST_PALABRA_IMAGES,
  FETCH_REST_PALABRA_PICTOGRAMA,
  FETCH_REST_PALABRA_PIXABAY,
  FETCH_REST_PALABRA_FLATICON,
  FETCH_REST_PALABRA_LEXICA,
  FETCH_REST_PALABRA_CONJUGACION,
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
    const res = await axios.get(`${URL}/images/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_IMAGES,
        payload: res.data.images,
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
      const element = res.data.pictograma;
      const tmp = document.createElement('div');
      tmp.innerHTML = element;
      const elemChild = tmp.lastElementChild;
      dispatch({
        type: FETCH_REST_PALABRA_PICTOGRAMA,
        payload: elemChild.src,
      });
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraPixabay = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_PIXABAY,
        payload: res.data.pixabay.hits,
      });
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraFlaticon = (search) => async (dispatch) => {
  try {
    const autonum = Math.floor(Math.random() * 6);
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      if (
        res.data.flaticon.data[3].images.svg ===
        'https://image.flaticon.com/icons/svg/42/42994.svg'
      ) {
        dispatch({
          type: FETCH_REST_PALABRA_FLATICON,
          payload: '',
        });
      } else {
        dispatch({
          type: FETCH_REST_PALABRA_FLATICON,
          payload: res.data.flaticon.data[autonum].images.svg,
        });
      }
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraLexica = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_LEXICA,
        payload:
          res.data.definiciones.results[0].lexicalEntries[0].lexicalCategory
            .text,
      });
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const fetchPalabraConjugacion = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/${search}`).then((res) => {
      dispatch({
        type: FETCH_REST_PALABRA_CONJUGACION,
        payload: res.data.conjugacion[0],
      });
    });
    return res;
  } catch (error) {
    return error;
  }
};
