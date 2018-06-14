import React from "react";
import { connect } from "react-redux";
import ViewPostList from "./ViewPostList";
import ViewPost from "./ViewPost";
import AddPost from "./AddPost";

class Post extends React.Component {
  render() {
    // console.log("POSTS --------------->", this.props.posts);
    // console.log("POSTS --------------->", this.props.posts.posts.length);
    // console.log("showAdd --------------->", this.props.showAdd);
    // console.log("else viewList --------->" + this.props.flag.viewList);

    if (this.props.showAdd) {
      return <AddPost />;
    } else {
      if (!this.props.flag || this.props.flag.viewList) {
        return <ViewPostList />;
      } else {
        return <ViewPost />;
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    flag: state.selectedPost,
    posts: state.addPost,
    showAdd: state.showAdd
  };
}

export default connect(mapStateToProps)(Post);
