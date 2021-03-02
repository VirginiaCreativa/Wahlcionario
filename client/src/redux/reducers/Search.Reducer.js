import { SEARCH_VALUE } from '../types';

const initialState = {
  value: '',
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default SearchReducer;
