import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  MENUS_HIDE,
} from '../types';

const initialState = {
  token: localStorage.getItem('user'),
  isAuthenticated: false,
  error: '',
  menus: false,
};

const AuthReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...payload,
        menus: true,
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
    case MENUS_HIDE:
      return {
        ...state,
        menus: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReduce;
