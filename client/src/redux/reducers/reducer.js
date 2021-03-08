import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './Auth.Reducer';
import search from './Search.Reducer';
import palabra from './Palabra.Reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    search,
    palabra,
  });

export default createRootReducer;
