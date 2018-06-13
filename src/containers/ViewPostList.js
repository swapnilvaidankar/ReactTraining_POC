import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedPost } from "../actions/index";
import { Link } from "react-router-dom";
import { deletePost } from "../actions/index";
import { Router, Route, browserHistory } from "react-router";

class ViewPostList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  routeToAddPost(e) {
    console.log("Add clicked");
    e.preventDefault();
    // this.context.router.transitionTo("/");
    this.context.router.push("/addPost");
  }
  handleClick(id) {
    this.props.deletePost(id);
    console.log("delete click");
  }
  render() {
    console.log("List", this.props.posts);
    if (this.props.posts.posts.length === 0) {
      return (
        <div className="container ">
          <div className="row">
            <div className="col-sm-8">
              <h4 className="error-msg">
                Oops! no post found... you can add the post..
              </h4>
            </div>
            <div className="col-sm-4 addPostButton">
              <Link to="/addPost">
                <button className="btn btn-primary">Add Post</button>
              </Link>
            </div>
          </div>
          <br />
        </div>
      );
    }
    // if (this.props.posts.length === 0) {
    //   return (
    //     <div className="text-center">
    //       <h5>Please add post</h5>
    //     </div>
    //   );
    // }
    const posts = this.props.posts.posts.map(post => (
      <div className="list">
        <li
          key={post.postTitle}
          className="postList"
          onClick={() => {
            this.props.selectedPost(post, false);
          }}
        >
          <div>
            <div>
              <label className="post-labels-list">Title</label>
            </div>
            <div>{post.postTitle}</div>
          </div>
          <div>
            <div>
              <label className="post-labels-list">Categories</label>
            </div>
            <div className="category">{post.postCategory}</div>
          </div>
        </li>
        <div className="delete_section">
          <img
            src="https://uploads.codesandbox.io/uploads/user/9e6e799f-0e02-41b8-84c3-cfbe4ceb14fa/j2Gb-delete.png"
            alt="delete"
            className="icon_delete"
            onClick={() => this.handleClick(post.postTitle)}
          />
        </div>
      </div>
    ));
    return (
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 addPostButton">
            <Link to="/addPost">
              <button className="btn btn-primary">Add Post</button>
            </Link>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">{posts}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // posts: state.posts.posts
    posts: state.addPost
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedPost: selectedPost, deletePost: deletePost },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPostList);
