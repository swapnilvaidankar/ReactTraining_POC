import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost, showAdd } from "../actions";
import { Link } from "react-router-dom";
class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postCategory: "",
      postComment: "",
      postTitleClass: "error hide-error",
      postCategoryClass: "error hide-error",
      postCommentClass: "error hide-error"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange_title(e) {
    this.setState({
      postTitle: e.target.value,
      postTitleClass: "error hide-error"
    });

    console.log("handle change called", e.target.value);
  }
  handleChange_category(e) {
    this.setState({
      postCategory: e.target.value,
      postCategoryClass: "error hide-error"
    });
    console.log("handle change called", e.target.value);
  }
  handleChange_comment(e) {
    this.setState({
      postComment: e.target.value,
      postCommentClass: "error hide-error"
    });
    console.log("handle change called", e.target.value);
  }
  handleClick(e) {
    if (!this.state.postTitle) {
      this.setState({ postTitleClass: "error show-error" });
      return this.props.showAdd(true);
    } else if (!this.state.postCategory) {
      this.setState({ postCategoryClass: "error show-error" });
      return this.props.showAdd(true);
    } else if (!this.state.postComment) {
      this.setState({ postCommentClass: "error show-error" });
      return this.props.showAdd(true);
    } else {
      this.props.showAdd(false);
    }

    this.props.addPost({
      postTitle: this.state.postTitle,
      postCategory: this.state.postCategory,
      postComment: this.state.postComment
    });

    this.setState({ postTitle: "" });
    this.setState({ postCategory: "" });
    this.setState({ postComment: "" });
  }

  handleCancel() {
    this.props.showAdd(false);
  }
  render() {
    // console.log("AddPost component");
    // console.log("AddPost 1: ", JSON.stringify(this.props.addPost1));
    // console.log("AddPost 2: ", this.props.addPost1);
    // console.log("AddPost posts : ", JSON.stringify(this.props.posts));
    // console.log("AddPost posts : ", this.props.posts);
    // console.log("AddPost posts props : ", JSON.stringify(this.props));
    // console.log("AddPost posts props : ", JSON.stringify(this.props.addPost1));

    return (
      <div className="container addPost">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="title"> Add Post</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <label className="post-labels">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.handleChange_title(e)}
              value={this.state.postTitle}
            />
            <div
              refs="postTitle_errMsg"
              id="postTitle_errMsg"
              className={this.state.postTitleClass}
            >
              Please enter post title
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <label className="post-labels">Categories</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.handleChange_category(e)}
              value={this.state.postCategory}
            />
            <div
              id="postCategory_errMsg"
              className={this.state.postCategoryClass}
            >
              Please enter post category
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <label className="post-labels">Comment</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.handleChange_comment(e)}
              value={this.state.postComment}
            />
            <div
              id="postComment_errMsg"
              className={this.state.postCommentClass}
            >
              Please enter post comment
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-2 text-center">
            <Link to="/viewPostList">
              <button
                className="btn btn-primary"
                onClick={e => this.handleClick(e)}
              >
                Save
              </button>
            </Link>
          </div>
          <div className="col-sm-2 text-center">
            <Link to="/viewPostList">
              <button
                className="btn btn-primary"
                onClick={() => this.handleCancel()}
              >
                Cancel
              </button>
            </Link>
          </div>

          <div className="col-sm-4" />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    addPost1: state.addPost,
    posts: state.posts,
    showAdd: showAdd
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost: addPost, showAdd: showAdd }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
