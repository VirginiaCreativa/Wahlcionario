import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './Auth.Reducer';
import layout from './Layout.Reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    layout,
  });

export default createRootReducer;
