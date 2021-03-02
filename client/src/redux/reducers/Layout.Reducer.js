import { SEARCH_ON_PAGE } from '../types';

const initialState = {
  searchShow: true,
};

const LayoutReduce = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ON_PAGE:
      return {
        ...state,
        searchShow: action.payload,
      };

    default:
      return state;
  }
};
export default LayoutReduce;
