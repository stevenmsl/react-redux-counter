import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
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

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
