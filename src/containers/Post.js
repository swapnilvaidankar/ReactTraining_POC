import React from "react";
import { connect } from "react-redux";
import ViewPostList from "./ViewPostList";
import ViewPost from "./ViewPost";
import AddPost from "./AddPost";

class Post extends React.Component {
  render() {
    if (!this.props.flag) {
      return (
        <div>
          <ViewPostList />
          <AddPost />
        </div>
      );
    } else {
      if (this.props.flag.viewList) {
        // console.log("if viewList --------->" + this.props.flag.viewList);
        return <ViewPostList />;
      } else {
        // console.log("else viewList --------->" + this.props.flag.viewList);
        return <ViewPost />;
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    flag: state.selectedPost
  };
}

export default connect(mapStateToProps)(Post);
