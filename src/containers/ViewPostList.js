import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedPost } from "../actions/index";

class ViewPostList extends React.Component {
  constructor(props) {
    super(props);
    this.callChildMethod = this.callChildMethod.bind(this);
  }
  callChildMethod(post) {
    this.props.backToList("true");
    this.props.selectedPost(post);
  }
  render() {
    // if (!this.props.posts) {
    //   return <div>Please add post</div>;
    // } else {
    const posts = this.props.posts.map(post => (
      <li
        key={post.postTitle}
        className="postList"
        onClick={() => {
          this.props.selectedPost(post, false);
        }}
      >
        <div>{post.postTitle}</div>
        <div className="category">{post.postCategory}</div>
      </li>
    ));
    // }
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
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedPost: selectedPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPostList);
