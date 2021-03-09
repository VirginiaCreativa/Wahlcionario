import {
  FETCH_PALABRA_CONTENT_CLEAN,
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
  FETCH_REST_PALABRA_ERROR,
} from '../types';

const initialState = {
  content: null,
  definiciones: [],
  sinonimos: [],
  antonimos: [],
  error: null,
};

const AuthReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PALABRA_CONTENT_CLEAN:
      return {
        ...state,
        definiciones: null,
        sinonimos: null,
        antonimos: null,
      };
    case FETCH_REST_PALABRA_DEFINICION:
      return {
        ...state,
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
    case FETCH_REST_PALABRA_ERROR:
      return {
        ...state,
        error: payload,
        definiciones: null,
        sinonimos: null,
        antonimos: null,
      };
    default:
      return state;
  }
};
export default AuthReduce;
