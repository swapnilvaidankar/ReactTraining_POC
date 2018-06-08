import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost } from "../actions";

class AddPost extends React.Component {
  render() {
    console.log("AddPost component");
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
            <input type="text" className="form-control" />
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

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ addPost: addPost }, dispatch);
}

export default connect(mapDispatchtoProps)(AddPost);
