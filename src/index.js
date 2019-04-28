import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import combinedReducer from "./reducers";
import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

const _store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={_store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
