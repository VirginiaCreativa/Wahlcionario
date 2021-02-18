import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import createRootReducer from "../reducers/reducer";

export const history = createBrowserHistory();

export default function createReduxStore(preloadedState) {
  const enhancers = [];
  let applyMid = [];
  const middleware = [];

  if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }
  if (process.env.NODE_ENV === "development") {
    applyMid = [...middleware, thunk];
  } else {
    applyMid = [...middleware, thunk];
  }

  const composedEnhancers = compose(applyMiddleware(...applyMid));

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers
  );

  return store;
}
