import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from '../types';

const initialState = {
  token: localStorage.getItem('user'),
  isAuthenticated: false,
  error: '',
};

const AuthReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case REGISTER_SUCESS:
    case LOGIN_SUCESS:
      localStorage.setItem('user', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('user');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReduce;
