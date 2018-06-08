import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import ViewPost from "./containers/ViewPost";
import ViewPostList from "./containers/ViewPost";
// import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ViewPost} />
    <Route path="viewPostList" component={ViewPostList} />
  </Route>
);
