import { SEARCH_ON_PAGE } from '../types';

const onSearchPage = (payload) => ({
  type: SEARCH_ON_PAGE,
  payload,
});

export default onSearchPage;
