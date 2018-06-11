import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedPost } from "../actions/index";

class ViewPostList extends React.Component {
  render() {
    console.log("List", this.props.posts);
    if (this.props.posts.length === 0) {
      return (
        <div className="text-center">
          <h5>Please add post</h5>
        </div>
      );
    }
    const posts = this.props.posts.posts.map(post => (
      <li
        key={post.postTitle}
        className="postList"
        onClick={() => {
          this.props.selectedPost(post, false);
        }}
      >
        <div>{post.postTitle}</div>
        {/*<div className="category">{post.postCategory}</div>*/}
      </li>
    ));
    return (
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 addPostButton">
            <button className="btn btn-primary ">Add Post</button>
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
  return bindActionCreators({ selectedPost: selectedPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPostList);
