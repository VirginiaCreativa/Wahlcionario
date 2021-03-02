import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './Auth.Reducer';
import search from './Search.Reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    search,
  });

export default createRootReducer;
