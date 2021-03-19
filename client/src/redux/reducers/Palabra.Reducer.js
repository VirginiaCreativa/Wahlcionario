import {
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
  FETCH_REST_PALABRA_ERROR,
  FETCH_REST_PALABRA_IMAGES,
  FETCH_REST_PALABRA_PICTOGRAMA,
  FETCH_REST_PALABRA_PIXABAY,
} from '../types';

const initialState = {
  definiciones: [],
  sinonimos: [],
  antonimos: [],
  images: [],
  pixabay: [],
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
        sinonimos: payload,
      };
    case FETCH_REST_PALABRA_ANTONIMOS:
      return {
        ...state,
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
        pictograma: payload,
      };
    case FETCH_REST_PALABRA_PIXABAY:
      return {
        ...state,
        pixabay: payload,
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
        pixabay: [],
      };
    default:
      return state;
  }
};
export default AuthReduce;
