import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost } from "../actions";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let values;
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
    function handleChange(e) {
      console.log("handle change called");
    }
    return (
      <div className="container addPost">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3> Add Post</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              // onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="col-sm-4" />
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <label>Categories</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4" />
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <label>Comment</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4" />
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-2 text-center">
            <button
              className="btn btn-primary"
              onClick={() => this.props.addPost()}
              // onClick={() => this.handleClick()}
            >
              Save
            </button>
          </div>
          <div className="col-sm-2 text-center">
            <button className="btn btn-primary">Cancel</button>
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
