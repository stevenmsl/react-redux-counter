import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import reducer from "./store/reducer";

import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// - all reducers will be called whenever an
//   action is dispatched
// - ctr and res are namespaces; You need to
//   specify namespaces when access state data managed
//   by individual reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

// Middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching ", action);
      const result = next(action); // modify the state
      console.log(
        "[Middleware] next state: ",
        store.getState(),
        " result: ",
        // action and payload
        // {type: "SUBTRACT", val: 5}
        result
      );
      return result;
    };
  };
};

// - to work with https://github.com/reduxjs/redux-devtools
// - fall back to a default compose if the extension is not available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // thunk allows you to dispatch actions asynchronously
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
