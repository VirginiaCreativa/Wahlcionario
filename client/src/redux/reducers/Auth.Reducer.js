import { REGISTER_SUCESS, REGISTER_FAIL } from '../types';

const initialState = {
  token: localStorage.getItem('user'),
  isAuthenticated: true,
};

const AuthReduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case REGISTER_SUCESS:
      localStorage.setItem('user', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('user');
      return {
        ...state,
        toke: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default AuthReduce;
