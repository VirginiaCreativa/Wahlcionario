/* eslint-disable import/prefer-default-export */
import {
  FETCH_PALABRA_CONTENT_CLEAN,
  FETCH_REST_PALABRA_DEFINICION,
  FETCH_REST_PALABRA_SINONIMOS,
  FETCH_REST_PALABRA_ANTONIMOS,
} from '../types';

export const shoulFetchPalabraContent = (payload) => ({
  type: FETCH_PALABRA_CONTENT_CLEAN,
  payload,
});
