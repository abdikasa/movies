import React from "react";
import "./css/global.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);