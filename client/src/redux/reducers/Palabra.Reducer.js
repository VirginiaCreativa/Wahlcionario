import {
  FETCH_PALABRA_CONTENT_CLEAN,
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
} from '../types';

const initialState = {
  content: [],
};

const AuthReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case FETCH_PALABRA_CONTENT_CLEAN:
      return {
        ...state,
        content: null,
      };

    default:
      return state;
  }
};
export default AuthReduce;
