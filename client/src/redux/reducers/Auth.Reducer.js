import { REGISTER_SUCESS, REGISTER_FAIL } from '../types';

const initialState = {
  currentUser: localStorage.getItem('user'),
  isAuthenticated: null,
  user: [],
};

const AuthReduce = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCESS:
      return {
        ...state,
        currentUser: localStorage.setItem('user', action.payload),
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        currentUser: localStorage.removeItem(),
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
export default AuthReduce;
