import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedPost } from "../actions";

class ViewPost extends React.Component {
  componentDidMount() {
    console.log("didMount");
  }
  render() {
    console.log("render");
    if (!this.props.selectedPostP) {
      return (
        <div className="col-sm-8 main-content text-center">
          <h3>Please select Post</h3>
        </div>
      );
    }
    console.log(this.props.selectedPostP);

    let post = this.props.selectedPostP;
    // console.log("Selected Value");
    // console.log(JSON.stringify(post));
    // console.log(this.props.selectedPost.postTitle);
    return (
      <div className="container viewPost-panel">
        <br />
        <div className="row">
          <div className="col-sm-12 viewPost-btn">
            <button
              className="btn btn-primary"
              onClick={() => this.props.selectedPost(post, true)}
            >
              Back to list
            </button>
            <button className="btn btn-primary">Delete Post</button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12 text-center">
            <h4 className="postTitle">{post.postTitle}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div>
              <label className="label">Categories</label>
              <br />
              <label>{post.postCategory}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div>
              <label className="label">Comments</label>
              <br />
              <label className="comments">{post.postComment}</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.selectedPost.post);
  return {
    selectedPostP: state.selectedPost.post
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedPost: selectedPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
