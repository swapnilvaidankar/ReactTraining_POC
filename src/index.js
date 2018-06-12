import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import routes from "./routes";
import { Router, browserHistory } from "react-router";
import App from "./App";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

//const createStoreWithMiddleware = applyMiddleware()(createStore);
// <Provider store={createStoreWithMiddleware(reducers)}>

let initialState = { posts: ["test"] };
const store = createStore(reducers, initialState);
console.log("store.getState()");
console.log(store.getState());
console.log(routes);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
