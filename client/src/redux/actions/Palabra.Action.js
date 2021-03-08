/* eslint-disable import/prefer-default-export */
import { FETCH_PALABRA_CONTENT_CLEAN } from '../types';

export const shoulFetchPalabraContent = (payload) => ({
  type: FETCH_PALABRA_CONTENT_CLEAN,
  payload,
});
