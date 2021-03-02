import axios from 'axios';
import { SEARCH_VALUE, SEARCH_FETCH } from '../types';

export const valueSearch = (payload) => ({
  type: SEARCH_VALUE,
  payload,
});

export const fetchSearch = (payload) => ({
  type: SEARCH_FETCH,
  payload,
});
