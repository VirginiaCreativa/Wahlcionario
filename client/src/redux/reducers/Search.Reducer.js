import { SEARCH_VALUE } from '../types';

const initialState = {
  palabra: '',
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        palabra: action.payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
