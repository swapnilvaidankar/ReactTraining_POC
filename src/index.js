//Swapnil
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// import routes from "./routes";
// import { Router, browserHistory, Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from "./containers/AddPost";
import ViewPostList from "./containers/ViewPostList";

//const createStoreWithMiddleware = applyMiddleware()(createStore);
// <Provider store={createStoreWithMiddleware(reducers)}>

let initialState = { posts: ["test"] };
const store = createStore(reducers, initialState);
console.log("store.getState()");
console.log(store.getState());
// console.log(routes);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
