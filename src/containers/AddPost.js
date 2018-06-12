import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost } from "../actions";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postCategory: "",
      postComment: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange_title(e) {
    this.setState({ postTitle: e.target.value });
    console.log("handle change called", e.target.value);
  }
  handleChange_category(e) {
    this.setState({ postCategory: e.target.value });
    console.log("handle change called", e.target.value);
  }
  handleChange_comment(e) {
    this.setState({ postComment: e.target.value });
    console.log("handle change called", e.target.value);
  }
  handleClick() {
    this.props.addPost({
      postTitle: this.state.postTitle,
      postCategory: this.state.postCategory,
      postComment: this.state.postComment
    });
    this.setState({ postTitle: "" });
    this.setState({ postCategory: "" });
    this.setState({ postComment: "" });
    console.log("handle click");
  }
  render() {
    // debugger;
    console.log("AddPost component");
    console.log("AddPost 1: ", JSON.stringify(this.props.addPost1));
    console.log("AddPost 2: ", this.props.addPost1);
    console.log("AddPost posts : ", JSON.stringify(this.props.posts));
    console.log("AddPost posts : ", this.props.posts);
    console.log("AddPost posts props : ", JSON.stringify(this.props));
    console.log("AddPost posts props : ", JSON.stringify(this.props.addPost1));
    // if (this.props.addPost1) {
    //   console.log(
    //     "AddPost posts props : ",
    //     JSON.stringify(this.props.addPost1)
    //   );
    // }
    // console.log("AddPost posts props : ", JSON.stringify(this.props.addPost1));
    // function handleClick(e) {
    //   console.log("event obje ", e.target.value);
    // }
    return (
      <div className="container addPost">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="title"> Add Post</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.handleChange_title(e)}
              value={this.state.postTitle}
            />
          </div>
          <div className="col-sm-4" />
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <label>Categories</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.handleChange_category(e)}
              value={this.state.postCategory}
            />
          </div>
          <div className="col-sm-4" />
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <label>Comment</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.handleChange_comment(e)}
              value={this.state.postComment}
            />
          </div>
          <div className="col-sm-4" />
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4 text-center">
            <button
              className="btn btn-primary"
              // onClick={() => this.props.addPost()}
              onClick={() => this.handleClick()}
            >
              Save
            </button>
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
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost: addPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
