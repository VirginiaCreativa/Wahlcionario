import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import createReduxStore from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";
import GlobalStyled from "./styles/GlobalStyled";
import "bootstrap/scss/bootstrap.scss";

const initialState = {};
const store = createReduxStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyled />
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
