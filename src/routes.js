import React from "react";
// import { Route, IndexRoute } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import ViewPost from "./containers/ViewPost";
import ViewPostList from "./containers/ViewPostList";
import AddPost from "./containers/AddPost";
import Post from "./containers/Post";
// import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App}>
        <Route path="/post" component={Post} />
        <Route path="/viewPost" component={ViewPost} />
        <Route path="/viewPostList" component={ViewPostList} />
        <Route path="/addPost" component={AddPost} />
      </Route>
    </Switch>
  </BrowserRouter>
);
