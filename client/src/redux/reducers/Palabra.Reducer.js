import {
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
  FETCH_REST_PALABRA_ERROR,
  FETCH_REST_PALABRA_IMAGES,
  FETCH_REST_PALABRA_PICTOGRAMA,
} from '../types';

const initialState = {
  definiciones: [],
  sinonimos: [],
  antonimos: [],
  images: [],
  pictograma: '',
  error: false,
  message: '',
};

const AuthReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REST_PALABRA_DEFINICION:
      return {
        ...state,
        error: false,
        definiciones: payload,
      };
    case FETCH_REST_PALABRA_SINONIMOS:
      return {
        ...state,
        error: false,
        sinonimos: payload,
      };
    case FETCH_REST_PALABRA_ANTONIMOS:
      return {
        ...state,
        error: false,
        antonimos: payload,
      };
    case FETCH_REST_PALABRA_IMAGES:
      return {
        ...state,
        images: payload,
      };
    case FETCH_REST_PALABRA_PICTOGRAMA:
      return {
        ...state,
        error: false,
        pictograma: payload,
      };
    case FETCH_REST_PALABRA_ERROR:
      return {
        ...state,
        error: true,
        message: payload,
        definiciones: [],
        sinonimos: [],
        antonimos: [],
        images: [],
      };
    default:
      return state;
  }
};
export default AuthReduce;
